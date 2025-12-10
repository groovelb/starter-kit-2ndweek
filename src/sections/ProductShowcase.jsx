import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SectionContainer } from '../components/container/SectionContainer';
import { ProductGrid } from '../templates/ProductGrid';
import { TimelineSlider } from '../components/shared/TimelineSlider';
import { useTimeline } from '../hooks/useTimeline';

/**
 * ProductShowcase 섹션 컴포넌트
 *
 * TimelineSlider와 ProductGrid를 연동한 제품 쇼케이스 섹션.
 * 전역 TimelineContext를 사용하여 시간대별 제품 이미지 전환.
 *
 * 동작 방식:
 * 1. TimelineSlider로 시간대 조절 (12pm, 4pm, 8pm, 12am)
 * 2. 선택된 시간대에 따라 모든 ProductCard 이미지 동기화
 * 3. timeline >= 0.5 시 다크 모드 자동 전환
 *
 * Props:
 * @param {Array} products - 제품 데이터 배열 [Required]
 * @param {string} title - 섹션 타이틀 [Optional]
 * @param {string} subtitle - 섹션 서브타이틀 [Optional]
 * @param {number} columns - 그리드 열 수 [Optional, 기본값: 3]
 * @param {function} onProductClick - 제품 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TimelineProvider>
 *   <ProductShowcase
 *     products={products}
 *     title="Product Showcase"
 *     subtitle="Explore brightness changes throughout the day"
 *   />
 * </TimelineProvider>
 */
const ProductShowcase = forwardRef(function ProductShowcase({
  products = [],
  title,
  subtitle,
  columns = 6,
  onProductClick,
  sx,
  ...props
}, ref) {
  const { timeline } = useTimeline();

  return (
    <SectionContainer
      ref={ref}
      // spacing={12}
      sx={sx}
      {...props}
    >
      {/* 헤더 영역 */}
      {(title || subtitle) && (
        <Box sx={{ textAlign: 'center' }}>
          {title && (
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: 'text.primary',
                transition: 'color 600ms ease',
              }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                transition: 'color 600ms ease',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {/* TimelineSlider + ProductGrid */}
      <Stack spacing={4}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TimelineSlider />
        </Box>

        <ProductGrid
          products={products}
          timeline={timeline}
          columns={columns}
          onProductClick={onProductClick}
        />
      </Stack>
    </SectionContainer>
  );
});

export { ProductShowcase };
export default ProductShowcase;
