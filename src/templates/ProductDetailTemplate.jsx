import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SplitScreen } from '../components/layout/SplitScreen';
import ProductImageViewer from '../components/product/ProductImageViewer';
import ProductOptions from '../components/product/ProductOptions';
import ProductMeta from '../components/product/ProductMeta';
import ProductActions from '../components/product/ProductActions';

/**
 * ProductDetailTemplate 컴포넌트
 *
 * 제품 상세 페이지 템플릿. SplitScreen 50:50 분할 레이아웃.
 *
 * 레이아웃 (SplitScreen 사용):
 * - left (50%): Title, Lux/Kelvin, Options, Meta, Actions
 * - right (50%): ProductImageViewer (이미지 + 타임라인 슬라이더)
 *
 * Props:
 * @param {object} product - 제품 데이터 (products.js 구조) [Required]
 *   - { id, title, type, lux, kelvin, images, video, price }
 * @param {object} meta - 제품 메타 정보 [Optional]
 *   - { itemNumber, leadTime, shipDate }
 * @param {function} onAddToCart - 장바구니 추가 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductDetailTemplate
 *   product={products[0]}
 *   meta={{ itemNumber: 'LM-001', leadTime: '4 Weeks' }}
 *   onAddToCart={(quantity) => console.log(quantity)}
 * />
 */
const ProductDetailTemplate = forwardRef(function ProductDetailTemplate(
  {
    product = {},
    meta = {},
    onAddToCart,
    sx = {},
    ...props
  },
  ref
) {
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState({
    glassFinish: 'opaline',
    hardware: 'patina-brass',
    height: '61-72',
  });

  // 이미지 배열 생성
  const images = product.images || [];

  /**
   * 옵션 변경 핸들러
   */
  const handleOptionChange = (key, value) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SplitScreen
      ref={ref}
      ratio="50:50"
      gap={4}
      stackAt="md"
      sx={sx}
      left={
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: { xs: 3, md: 5 } }}>
          {/* 제품명 */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.1,
                mb: 1,
              }}
            >
              {product.title || 'Product Name'}
            </Typography>
            {/* Lux / Kelvin 정보 */}
            {(product.lux || product.kelvin) && (
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                }}
              >
                {product.lux && `${product.lux} lx`}
                {product.lux && product.kelvin && ' · '}
                {product.kelvin && `${product.kelvin} K`}
              </Typography>
            )}
          </Box>

          {/* 제품 메타 정보 */}
          {(meta.itemNumber || meta.leadTime || meta.shipDate) && (
            <ProductMeta
              itemNumber={meta.itemNumber}
              leadTime={meta.leadTime}
              shipDate={meta.shipDate}
              showDivider={false}
            />
          )}

          {/* 제품 옵션 선택 */}
          <ProductOptions
            values={options}
            onChange={handleOptionChange}
          />

          {/* 액션 영역 */}
          <ProductActions
            price={product.price || 0}
            currency={product.currency || 'USD'}
            quantity={quantity}
            onQuantityChange={setQuantity}
            onAddToCart={onAddToCart ? () => onAddToCart(quantity) : undefined}
          />
        </Box>
      }
      right={
        <Box
          sx={{
            position: { md: 'sticky' },
            top: { md: 0 },
            height: { md: '100vh' },
          }}
        >
          <ProductImageViewer
            images={images}
            lux={product.lux}
            kelvin={product.kelvin}
            productName={product.title}
            sx={{ height: '100%' }}
          />
        </Box>
      }
      {...props}
    />
  );
});

export { ProductDetailTemplate };
export default ProductDetailTemplate;
