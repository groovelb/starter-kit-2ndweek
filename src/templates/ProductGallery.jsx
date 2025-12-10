import { forwardRef, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductFilter } from '../components/navigation/ProductFilter';
import { ProductGrid } from './ProductGrid';

/**
 * ProductGallery 템플릿 컴포넌트
 *
 * ProductFilter와 ProductGrid를 3:9 비율로 결합한 갤러리 레이아웃.
 *
 * 동작 방식:
 * 1. 좌측 필터(3)에서 제품 타입 선택
 * 2. 우측 그리드(9)에서 필터링된 제품 표시
 * 3. 'All' 선택 시 전체 제품 표시
 *
 * Props:
 * @param {Array} products - 제품 데이터 배열 [Required]
 * @param {number} timeline - 시간대 값 (0-1) [Optional, 기본값: 0]
 * @param {number} columns - 그리드 열 수 [Optional, 기본값: 3]
 * @param {number} spacing - 그리드 간격 [Optional, 기본값: 2]
 * @param {function} onProductClick - 제품 클릭 핸들러 [Optional]
 * @param {string|number} selectedProductId - 선택된 제품 ID [Optional]
 * @param {string} defaultFilter - 초기 필터 값 [Optional, 기본값: 'all']
 * @param {boolean} showAllOption - 'All' 탭 표시 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductGallery
 *   products={products}
 *   timeline={0.5}
 *   onProductClick={(product) => console.log(product)}
 * />
 */
const ProductGallery = forwardRef(function ProductGallery({
  products = [],
  timeline = 0,
  columns = 3,
  spacing = 2,
  onProductClick,
  selectedProductId,
  defaultFilter = 'all',
  showAllOption = true,
  sx,
  ...props
}, ref) {
  const [filter, setFilter] = useState(defaultFilter);

  // 필터링된 제품 목록
  const filteredProducts = useMemo(() => {
    if (filter === 'all') {
      return products;
    }
    return products.filter((product) => product.type === filter);
  }, [products, filter]);

  return (
    <Box ref={ref} sx={sx} {...props}>
      <Grid container spacing={spacing}>
        <Grid size={{ xs: 12, md: 2 }}>
          <ProductFilter
            selected={filter}
            onChange={setFilter}
            showAll={showAllOption}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
          <ProductGrid
            products={filteredProducts}
            timeline={timeline}
            columns={columns}
            spacing={spacing}
            onProductClick={onProductClick}
            selectedProductId={selectedProductId}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export { ProductGallery };
export default ProductGallery;
