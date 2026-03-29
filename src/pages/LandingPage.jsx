import { useMemo } from 'react';
import { PageContainer } from '../components/container/PageContainer';
import { TopSection } from '../sections/TopSection';
import { ProductShowcase } from '../sections/ProductShowcase';
import { useTimeline } from '../hooks/useTimeline';

/**
 * LandingPage 컴포넌트
 *
 * Lumenstate 브랜드의 랜딩 페이지.
 * TopSection(히어로 + 브랜드 가치)과 ProductShowcase(제품 그리드)로 구성.
 *
 * 레이아웃:
 * - TopSection: 히어로 섹션 + 브랜드 가치 카드
 * - ProductShowcase: 타임라인 슬라이더 + 제품 그리드
 *
 * 동작:
 * - TimelineContext는 상위(Storybook decorator 또는 App)에서 제공
 * - smootherstep 커브로 배경색 점진 전환 (12pm→4pm→8pm→12am)
 *   - 12pm: #E8E5E1 (밝음)
 *   - 4pm: ~80% 밝음 유지
 *   - 8pm: ~80% 어두움 전환
 *   - 12am: #12100E (어두움)
 *
 * @param {object} sx - 추가 스타일 [Optional]
 */
function LandingPage({ sx }) {
  const { timeline } = useTimeline();

  const blendedBg = useMemo(() => {
    // smootherstep: 밤 쪽으로 편향된 커브
    const t = Math.pow(Math.max(0, Math.min(1, timeline)), 0.75);
    const nightT = t * t * t * (t * (t * 6 - 15) + 10);

    // Light (#E8E5E1) → Dark (#12100E) 보간
    const dayR = 0xE8, dayG = 0xE5, dayB = 0xE1;
    const nightR = 0x12, nightG = 0x10, nightB = 0x0E;
    const r = Math.round(dayR + (nightR - dayR) * nightT);
    const g = Math.round(dayG + (nightG - dayG) * nightT);
    const b = Math.round(dayB + (nightB - dayB) * nightT);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }, [timeline]);

  return (
    <PageContainer
      sx={{
        backgroundColor: blendedBg,
        transition: 'background-color 600ms ease',
        minHeight: '100vh',
        ...sx,
      }}
    >
      <TopSection />
      <ProductShowcase />
    </PageContainer>
  );
}

export default LandingPage;
