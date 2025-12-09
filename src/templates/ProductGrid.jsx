import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductCard } from '../components/product/ProductCard';

/**
 * ProductGrid 템플릿 컴포넌트
 *
 * ProductCard들을 반응형 그리드로 배치하는 템플릿.
 *
 * 동작 방식:
 * 1. products 배열을 받아 그리드로 렌더링
 * 2. timeline 값에 따라 모든 카드의 낮/밤 이미지 동기화
 * 3. 반응형 열 구성 (xs: 2열, sm: 3열, md: 4열)
 *
 * Props:
 * @param {Array} products - 제품 데이터 배열 [Required]
 * @param {number} timeline - 시간대 값 (0-1) [Optional, 기본값: 0]
 * @param {number} columns - 기본 열 수 [Optional, 기본값: 3]
 * @param {number} spacing - 그리드 간격 [Optional, 기본값: 2]
 * @param {function} onProductClick - 제품 클릭 핸들러 [Optional]
 * @param {string|number} selectedProductId - 선택된 제품 ID [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductGrid
 *   products={products}
 *   timeline={0.5}
 *   onProductClick={(product) => console.log(product)}
 * />
 */
const ProductGrid = forwardRef(function ProductGrid({
  products = [],
  timeline = 0,
  columns = 3,
  spacing = 2,
  onProductClick,
  selectedProductId,
  sx,
  ...props
}, ref) {
  // 반응형 열 크기 계산
  const getGridSize = () => {
    switch (columns) {
      case 2:
        return { xs: 6, sm: 6, md: 6 };
      case 3:
        return { xs: 6, sm: 4, md: 4 };
      case 4:
        return { xs: 6, sm: 4, md: 3 };
      case 6:
        return { xs: 6, sm: 4, md: 2 };
      default:
        return { xs: 6, sm: 4, md: 4 };
    }
  };

  const gridSize = getGridSize();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <Box ref={ref} sx={sx} {...props}>
      <Grid container spacing={spacing}>
        {products.map((product) => (
          <Grid key={product.id} size={gridSize}>
            <ProductCard
              product={product}
              timeline={timeline}
              onClick={onProductClick ? () => onProductClick(product) : undefined}
              isSelected={selectedProductId === product.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export { ProductGrid };
export default ProductGrid;
