import { PageContainer } from '../components/container/PageContainer';
import { TopSection } from '../sections/TopSection';
import { ProductShowcase } from '../sections/ProductShowcase';
import { FloatingTimeline } from '../components/shared/FloatingTimeline';
import { useTimeline } from '../hooks/useTimeline';

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
 * TimeBlendImage와 동일한 smootherstep 곡선을 사용하여 이미지 배경과 페이지 배경이 일치.
 *
 * @param {object} sx - 추가 스타일 [Optional]
 */
function LandingPage({ sx }) {
  const { timelineBg } = useTimeline();

  return (
    <PageContainer
      sx={{
        backgroundColor: timelineBg,
        transition: 'background-color 600ms ease',
        minHeight: '100vh',
        ...sx,
      }}
    >
      <TopSection />
      <ProductShowcase />

      <FloatingTimeline />
    </PageContainer>
  );
}

export default LandingPage;
