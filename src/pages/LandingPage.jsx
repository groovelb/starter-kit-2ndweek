import { PageContainer } from '../components/container/PageContainer';
import { TopSection } from '../sections/TopSection';
import { ProductShowcase } from '../sections/ProductShowcase';
import { useTimeline, TIMELINE_TRANSITION } from '../hooks/useTimeline';

/**
 * LandingPage 컴포넌트
 *
 * Lumenstate 브랜드의 랜딩 페이지.
 * TopSection(히어로 무드보드 + 브랜드 가치)과 ProductShowcase(제품 그리드)로 구성.
 *
 * 레이아웃:
 * - TopSection: 무드보드 히어로 섹션 + 브랜드 가치 카드
 * - ProductShowcase: 타임라인 슬라이더 + 제품 그리드
 *
 * 배경색은 timeline(0-1)에 따라 Day(#E8E5E1) → Night(#12100E)로 연속 보간.
 * 이미지 블렌딩 시각적 합성 결과 기준 4개 포인트 사이를 보간.
 *
 * @param {object} sx - 추가 스타일 [Optional]
 */
function LandingPage({ sx }) {
  const { timelineBg } = useTimeline();

  return (
    <PageContainer
      sx={{
        backgroundColor: timelineBg,
        transition: `background-color ${TIMELINE_TRANSITION.css}`,
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
