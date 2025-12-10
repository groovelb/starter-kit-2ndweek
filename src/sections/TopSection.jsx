import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LineGrid from '../components/layout/LineGrid';
import { ScrollVideo } from '../components/shared/ScrollVideo';
import { BrandValueCard } from '../components/card/BrandValueCard';
import { content } from '../data/content';

/**
 * TopSection 컴포넌트
 *
 * HeroSection과 BrandValueSection을 합친 상단 섹션.
 * 하나의 LineGrid로 2행 구성 (Hero 8:4 + BrandValue 4:4:4).
 *
 * 레이아웃:
 * - Row 1: 랜드스케이프 비디오 (8) + 제품 비디오 (4)
 * - Row 2: BrandValueCard 3개 (4:4:4)
 *
 * @param {object} sx - 추가 스타일 [Optional]
 */
const TopSection = forwardRef(function TopSection({ sx, ...props }, ref) {
  const { title, subtitle, videos } = content.hero;
  const { features } = content.brandValue;

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      <LineGrid container gap={0} sx={{ width: '100%' }}>
        {/* Row 1: Hero - 랜드스케이프 비디오 + 타이틀 오버레이 */}
        <Grid size={{ xs: 12, md: 8 }} sx={{ position: 'relative' }}>
          <ScrollVideo src={videos.row1Col1} ratio={1.59} startInView isTimeline />
          {/* 타이틀 오버레이 - 좌측 상단 */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 1,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: 'text.secondary',
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontWeight: 100,
                pl: 0.5,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Grid>

        {/* Row 1: Hero - 제품 비디오 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <ScrollVideo src={videos.row1Col2} startInView />
        </Grid>

        {/* Row 2: BrandValue Cards (4:4:4) */}
        {features.map((feature) => (
          <Grid key={feature.id} size={{ xs: 12, md: 4 }}>
            <BrandValueCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              detailedDescription={feature.detailedDescription}
            />
          </Grid>
        ))}
      </LineGrid>
    </Box>
  );
});

export { TopSection };
export default TopSection;
