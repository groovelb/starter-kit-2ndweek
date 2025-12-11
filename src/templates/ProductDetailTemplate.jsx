import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumb from '../components/shared/Breadcrumb';
import ProductImageViewer from '../components/product/ProductImageViewer';
import ProductOptions, { DEFAULT_PRODUCT_OPTIONS } from '../components/product/ProductOptions';
import ProductMeta from '../components/product/ProductMeta';
import ProductActions from '../components/product/ProductActions';
import ProductTabs, { DEFAULT_PRODUCT_TABS } from '../components/product/ProductTabs';
import ArrowLink from '../components/shared/ArrowLink';

/**
 * ProductDetailTemplate 컴포넌트
 *
 * 제품 상세 페이지 템플릿. 좌우 분할 레이아웃.
 * 레퍼런스 이미지의 상품 상세 페이지 구조 적용.
 *
 * 레이아웃:
 * - 좌측 (md:5): Breadcrumb, Title, Meta, Options, Actions, Links, Tabs
 * - 우측 (md:7): ProductImageViewer (이미지 + 타임라인 슬라이더)
 *
 * Props:
 * @param {object} product - 제품 데이터 (products.js 구조) [Required]
 *   - { id, title, type, lux, kelvin, images, video, price }
 * @param {object} meta - 제품 메타 정보 [Optional]
 *   - { itemNumber, leadTime, shipDate }
 * @param {Array} breadcrumbItems - 브레드크럼 항목 [Optional]
 * @param {object} options - 현재 선택된 옵션 값 [Optional]
 * @param {function} onOptionsChange - 옵션 변경 핸들러 [Optional]
 * @param {function} onAddToCart - 장바구니 추가 핸들러 [Optional]
 * @param {Array} tabs - 탭 목록 [Optional]
 * @param {Array} links - 추가 링크 목록 [Optional]
 *   - { label, href, onClick }
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
    breadcrumbItems,
    options: controlledOptions,
    onOptionsChange,
    onAddToCart,
    tabs,
    links = [],
    sx = {},
    ...props
  },
  ref
) {
  const [internalOptions, setInternalOptions] = useState({
    glassFinish: '',
    hardware: '',
    height: '',
  });
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || 'overview');

  // 외부/내부 옵션 관리
  const options = controlledOptions !== undefined ? controlledOptions : internalOptions;
  const handleOptionsChange = (key, value) => {
    if (onOptionsChange) {
      onOptionsChange(key, value);
    } else {
      setInternalOptions((prev) => ({ ...prev, [key]: value }));
    }
  };

  // 제품 타입 라벨 매핑
  const typeLabels = {
    ceiling: 'Ceiling',
    stand: 'Stand',
    wall: 'Wall',
    desk: 'Desk',
  };

  // 기본 브레드크럼 생성
  const defaultBreadcrumb = [
    { label: 'Home', href: '/' },
    { label: typeLabels[product.type] || 'Products', href: '/products' },
    { label: product.title || 'Product' },
  ];

  // 기본 탭 생성 (콘텐츠 포함)
  const defaultTabs = DEFAULT_PRODUCT_TABS.map((tab) => ({
    ...tab,
    content: (
      <Typography variant="body2" color="text.secondary">
        {tab.label} 콘텐츠가 여기에 표시됩니다.
      </Typography>
    ),
  }));

  // 이미지 배열 생성
  const images = product.images || [];

  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
      }}
      {...props}
    >
      <Grid container spacing={4}>
        {/* 좌측: 제품 정보 */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems || defaultBreadcrumb} />

            {/* 제품명 */}
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: 1.2,
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

            {/* 제품 옵션 */}
            <ProductOptions
              values={options}
              onChange={handleOptionsChange}
              availableOptions={product.availableOptions || DEFAULT_PRODUCT_OPTIONS}
            />

            {/* 액션 영역 */}
            <ProductActions
              price={product.price || 0}
              currency={product.currency || 'USD'}
              quantity={quantity}
              onQuantityChange={setQuantity}
              onAddToCart={onAddToCart ? () => onAddToCart(quantity, options) : undefined}
            />

            {/* 추가 링크 */}
            {links.length > 0 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {links.map((link, index) => (
                  <ArrowLink
                    key={index}
                    href={link.href}
                    onClick={link.onClick}
                  >
                    {link.label}
                  </ArrowLink>
                ))}
              </Box>
            )}

            {/* 탭 메뉴 */}
            <Box sx={{ mt: 2 }}>
              <ProductTabs
                tabs={tabs || defaultTabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                orientation="vertical"
              />
            </Box>
          </Box>
        </Grid>

        {/* 우측: 이미지 뷰어 + 타임라인 */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              position: { md: 'sticky' },
              top: { md: 24 },
            }}
          >
            <ProductImageViewer
              images={images}
              lux={product.lux}
              kelvin={product.kelvin}
              productName={product.title}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

export { ProductDetailTemplate };
export default ProductDetailTemplate;
