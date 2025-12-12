import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

/**
 * CenteredAsideLayout 컴포넌트
 *
 * 대칭 그리드(2:8:2) 레이아웃으로 사이드바와 메인 콘텐츠를 배치.
 * 좌측 사이드바는 sticky, 우측은 빈 영역으로 시각적 중앙 정렬 달성.
 *
 * 동작 방식:
 * 1. 좌측(2): aside 콘텐츠 (sticky로 스크롤 시 고정)
 * 2. 중앙(8): children 콘텐츠 (시각적 정중앙)
 * 3. 우측(2): 빈 영역으로 좌우 대칭 유지
 * 4. 모바일(md 미만)에서는 aside가 상단, children이 하단으로 스택
 *
 * Props:
 * @param {ReactNode} aside - 좌측 사이드바 콘텐츠 [Required]
 * @param {ReactNode} children - 중앙 메인 콘텐츠 [Required]
 * @param {number} stickyTop - aside sticky 위치 (px) [Optional, 기본값: 88 (GNB 64px + 여백 24px)]
 * @param {number} spacing - 그리드 간격 [Optional, 기본값: 2]
 * @param {object} asideSx - aside 영역 추가 스타일 [Optional]
 * @param {object} contentSx - 콘텐츠 영역 추가 스타일 [Optional]
 * @param {object} sx - 컨테이너 추가 스타일 [Optional]
 *
 * Example usage:
 * <CenteredAsideLayout
 *   aside={<FilterMenu />}
 *   stickyTop={80}
 *   spacing={3}
 * >
 *   <ProductGrid products={products} />
 * </CenteredAsideLayout>
 */
const CenteredAsideLayout = forwardRef(function CenteredAsideLayout({
  aside,
  children,
  stickyTop = 88,
  spacing = 2,
  asideSx,
  contentSx,
  sx,
  ...props
}, ref) {
  return (
    <Box ref={ref} sx={sx} {...props}>
      <Grid container spacing={spacing}>
        {/* 좌측: Aside (sticky) - 2/12 */}
        <Grid size={{ xs: 12, md: 2 }}>
          <Box
            sx={{
              position: 'sticky',
              top: stickyTop,
              alignSelf: 'flex-start',
              ...asideSx,
            }}
          >
            {aside}
          </Box>
        </Grid>

        {/* 중앙: Content - 8/12 (시각적 정중앙) */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={contentSx}>
            {children}
          </Box>
        </Grid>

        {/* 우측: 빈 영역 (시각 균형) - 2/12, 모바일에서 숨김 */}
        <Grid
          size={{ md: 2 }}
          sx={{ display: { xs: 'none', md: 'block' } }}
        />
      </Grid>
    </Box>
  );
});

export { CenteredAsideLayout };
export default CenteredAsideLayout;
