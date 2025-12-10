import { PageContainer } from '../components/container/PageContainer';
import { TopSection } from '../sections/TopSection';
import { ProductShowcase } from '../sections/ProductShowcase';
import { TimelineProvider } from '../hooks/useTimeline';

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
 * @param {object} sx - 추가 스타일 [Optional]
 */
function LandingPage({ sx }) {
  return (
    <TimelineProvider>
      <PageContainer
        maxWidth={false}
        disableGutters
        spacing={0}
        sx={sx}
      >
        <TopSection />
        <ProductShowcase />
      </PageContainer>
    </TimelineProvider>
  );
}

export default LandingPage;
