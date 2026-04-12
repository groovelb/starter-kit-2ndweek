import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';

/**
 * 필터 전환 애니메이션 타이밍 상수
 */
const FILTER_TRANSITION = {
  fadeOut: 300,
  reflow: 400,
  fadeIn: 300,
  easing: {
    fade: 'ease-out',
    flip: 'cubic-bezier(0.37, 0, 0.63, 1)',
  },
  blur: '8px',
  scale: 0.95,
};

/**
 * 필터에 따른 제품 목록 반환
 */
function getFilteredProducts(allProducts, filter) {
  if (filter === 'all') return [...allProducts];
  return allProducts.filter((p) => p.type === filter);
}

/**
 * useFilterTransition 훅
 *
 * 제품 필터 변경 시 3단계 순차 애니메이션을 오케스트레이션한다.
 *
 * 동작 방식:
 * 1. 필터 변경 감지 → 이전/이후 제품 비교 → exiting/staying/entering 분류
 * 2. Phase 1 (fadeOut): 퇴장 아이템 blur + fade out (300ms)
 * 3. Phase 2 (reflow): DOM 교체 + FLIP 위치 애니메이션 (400ms)
 * 4. Phase 3 (fadeIn): 입장 아이템 blur + fade in (300ms)
 *
 * FLIP 기법:
 * - First: fadeOut 종료 시 잔류 아이템 위치 캡처
 * - Last: DOM 교체 후 useLayoutEffect에서 새 위치 캡처
 * - Invert: 위치 차이만큼 transform 즉시 적용 (깜빡임 방지)
 * - Play: rAF에서 transform: translate(0,0) 전환 → 부드러운 이동
 *
 * @param {Array} allProducts - 전체 제품 배열 [Required]
 * @param {string} filter - 현재 필터 값 ('all' | product type) [Required]
 * @returns {{ displayList: Array<{product, itemPhase}>, phase: string, registerRef: function, isAnimating: boolean }}
 *
 * Example usage:
 * const { displayList, phase, registerRef } = useFilterTransition(products, filter);
 */
export function useFilterTransition(allProducts, filter) {
  const [displayList, setDisplayList] = useState(() =>
    getFilteredProducts(allProducts, filter).map((product) => ({
      product,
      itemPhase: 'stable',
    }))
  );
  const [phase, setPhase] = useState('idle');

  const prevFilterRef = useRef(filter);
  const elementMapRef = useRef(new Map());
  const firstRectsRef = useRef(new Map());
  const stayingIdsRef = useRef(new Set());
  const timeoutsRef = useRef([]);

  /**
   * DOM 참조 등록 콜백
   * AnimatedGridItem에서 마운트/언마운트 시 호출
   */
  const registerRef = useCallback((productId, element) => {
    if (element) {
      elementMapRef.current.set(productId, element);
    } else {
      elementMapRef.current.delete(productId);
    }
  }, []);

  /**
   * 진행 중인 애니메이션 취소 및 인라인 스타일 정리
   */
  const cancelAnimation = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    elementMapRef.current.forEach((el) => {
      el.style.transition = '';
      el.style.transform = '';
    });
  }, []);

  /**
   * setTimeout 래퍼 (정리 추적용)
   */
  const addTimeout = useCallback((fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  /**
   * FLIP 인라인 스타일 정리
   */
  const cleanupFlipStyles = useCallback(() => {
    stayingIdsRef.current.forEach((id) => {
      const el = elementMapRef.current.get(id);
      if (el) {
        el.style.transition = '';
        el.style.transform = '';
      }
    });
  }, []);

  /**
   * 필터 변경 감지 및 애니메이션 시작
   *
   * 애니메이션 오케스트레이션은 명령적(imperative) 특성상
   * effect 내에서 동기적 setState가 필요하다.
   * - 초기 displayList 설정: 즉시 퇴장/입장 아이템 표시를 위해 동기적 호출
   * - 후속 phase 전환: setTimeout 콜백 내에서 비동기 호출
   */
  useEffect(() => {
    const prevFilter = prevFilterRef.current;
    if (prevFilter === filter) return;

    // 진행 중인 애니메이션 취소
    cancelAnimation();

    const prevItems = getFilteredProducts(allProducts, prevFilter);
    const nextItems = getFilteredProducts(allProducts, filter);
    prevFilterRef.current = filter;

    // 아이템 분류
    const prevIds = new Set(prevItems.map((p) => p.id));
    const nextIds = new Set(nextItems.map((p) => p.id));
    const exitingIds = new Set([...prevIds].filter((id) => !nextIds.has(id)));
    const stayingIds = new Set([...prevIds].filter((id) => nextIds.has(id)));
    const enteringIds = new Set([...nextIds].filter((id) => !prevIds.has(id)));
    stayingIdsRef.current = stayingIds;

    const hasExiting = exitingIds.size > 0;
    const hasEntering = enteringIds.size > 0;

    /**
     * FLIP First 위치 캡처
     */
    const captureFirstRects = () => {
      const rects = new Map();
      stayingIds.forEach((id) => {
        const el = elementMapRef.current.get(id);
        if (el) rects.set(id, el.getBoundingClientRect());
      });
      firstRectsRef.current = rects;
    };

    /**
     * Phase 2 → Phase 3 전환
     */
    const startFadeIn = () => {
      cleanupFlipStyles();

      if (hasEntering) {
        setPhase('fadeIn');
        setDisplayList(
          nextItems.map((product) => ({
            product,
            itemPhase: enteringIds.has(product.id) ? 'entering' : 'stable',
          }))
        );

        addTimeout(() => {
          setPhase('idle');
          setDisplayList(
            nextItems.map((product) => ({ product, itemPhase: 'stable' }))
          );
        }, FILTER_TRANSITION.fadeIn);
      } else {
        setPhase('idle');
        setDisplayList(
          nextItems.map((product) => ({ product, itemPhase: 'stable' }))
        );
      }
    };

    /**
     * Phase 2: REFLOW (DOM 교체 + FLIP)
     */
    const startReflow = () => {
      captureFirstRects();

      setPhase('reflow');
      setDisplayList(
        nextItems.map((product) => ({
          product,
          itemPhase: enteringIds.has(product.id) ? 'entering-hidden' : 'staying',
        }))
      );

      addTimeout(startFadeIn, FILTER_TRANSITION.reflow);
    };

    // --- 애니메이션 시퀀스 시작 ---
    /* eslint-disable react-hooks/set-state-in-effect -- 애니메이션 오케스트레이션: 필터 전환의 초기 phase/displayList를 즉시 설정해야 시각적 지연 없이 fade out 시작 가능 */
    if (hasExiting) {
      // Phase 1: FADE_OUT
      setPhase('fadeOut');
      setDisplayList(
        prevItems.map((product) => ({
          product,
          itemPhase: exitingIds.has(product.id) ? 'exiting' : 'stable',
        }))
      );

      addTimeout(startReflow, FILTER_TRANSITION.fadeOut);
    } else if (hasEntering) {
      // 퇴장 없음 → Phase 1 스킵, 바로 REFLOW
      startReflow();
    } else {
      // 변화 없음 (방어 코드)
      setPhase('idle');
      setDisplayList(
        nextItems.map((product) => ({ product, itemPhase: 'stable' }))
      );
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [filter, allProducts, cancelAnimation, addTimeout, cleanupFlipStyles]);

  // --- FLIP: reflow 단계에서 위치 보간 ---
  useLayoutEffect(() => {
    if (phase !== 'reflow') return;

    const firstRects = firstRectsRef.current;
    const stayingIds = stayingIdsRef.current;

    if (firstRects.size === 0 || stayingIds.size === 0) return;

    stayingIds.forEach((id) => {
      const el = elementMapRef.current.get(id);
      if (!el) return;
      const firstRect = firstRects.get(id);
      if (!firstRect) return;

      const lastRect = el.getBoundingClientRect();
      const deltaX = firstRect.left - lastRect.left;
      const deltaY = firstRect.top - lastRect.top;

      // 위치 변화가 미미하면 스킵
      if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;

      // Invert: 이전 위치로 즉시 이동 (깜빡임 방지)
      el.style.transition = 'none';
      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

      // Play: 새 위치로 부드럽게 이동
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = `transform ${FILTER_TRANSITION.reflow}ms ${FILTER_TRANSITION.easing.flip}`;
          el.style.transform = 'translate(0, 0)';
        });
      });
    });
  }, [phase]);

  // 언마운트 시 정리
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  return {
    displayList,
    phase,
    registerRef,
    isAnimating: phase !== 'idle',
  };
}

export { FILTER_TRANSITION };
