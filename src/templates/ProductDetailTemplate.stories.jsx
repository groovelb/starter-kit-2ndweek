import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProductDetailTemplate } from './ProductDetailTemplate';
import { products } from '../data/products';

export default {
  title: 'Template/ProductDetailTemplate',
  component: ProductDetailTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductDetailTemplate

제품 상세 페이지 템플릿. 좌우 분할 레이아웃으로 제품 정보와 이미지 뷰어를 표시.

### 레이아웃
- **좌측 (5열)**: Breadcrumb, 제품명, 메타 정보, 옵션 선택, 액션 영역, 탭 메뉴
- **우측 (7열)**: ProductImageViewer (이미지 + 타임라인 슬라이더)

### 특징
- products.js의 실제 제품 데이터 사용
- 우측 이미지에 통합된 타임라인 슬라이더로 낮/밤 블렌딩 체험
- 모든 제품 컴포넌트 통합
- 반응형 레이아웃 (모바일 세로 스택)
        `,
      },
    },
  },
  argTypes: {
    product: {
      control: 'object',
      description: '제품 데이터 (products.js 구조)',
      table: {
        type: { summary: 'object' },
      },
    },
    meta: {
      control: 'object',
      description: '제품 메타 정보 ({ itemNumber, leadTime, shipDate })',
      table: {
        type: { summary: 'object' },
      },
    },
    onAddToCart: {
      action: 'addedToCart',
      description: '장바구니 추가 핸들러',
      table: {
        type: { summary: '(quantity, options) => void' },
      },
    },
  },
};

// 선택된 제품: Lumen Desk Pro (id: 1)
const selectedProduct = products[0];

// 제품 메타 정보 생성
const productMeta = {
  itemNumber: `LM-${String(selectedProduct.id).padStart(3, '0')}`,
  leadTime: '4-6 Weeks',
  shipDate: 'February 15, 2026',
};

// 제품 탭 콘텐츠
const productTabs = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <Box>
        <Typography variant="body2" color="text.secondary">
          {selectedProduct.title}은 환경 반응형 조명 시스템으로,
          하루의 리듬에 따라 조도와 색온도를 자동으로 조절합니다.
        </Typography>
      </Box>
    ),
  },
  {
    id: 'specs',
    label: 'Tech Specs',
    content: (
      <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">조도:</Typography>
        <Typography variant="body2">{selectedProduct.lux} lx</Typography>
        <Typography variant="body2" color="text.secondary">색온도:</Typography>
        <Typography variant="body2">{selectedProduct.kelvin} K</Typography>
        <Typography variant="body2" color="text.secondary">타입:</Typography>
        <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>{selectedProduct.type}</Typography>
      </Box>
    ),
  },
  {
    id: 'downloads',
    label: 'Downloads',
    content: (
      <Typography variant="body2" color="text.secondary">
        제품 사양서, 설치 가이드, CAD 파일을 다운로드할 수 있습니다.
      </Typography>
    ),
  },
];

// 추가 링크
const productLinks = [
  { label: 'Download Spec Sheet', href: '#spec' },
  { label: 'Installation Guide', href: '#guide' },
];

/** 기본 사용 - Lumen Desk Pro */
export const Default = {
  args: {
    product: {
      ...selectedProduct,
      price: 1290,
    },
    meta: productMeta,
  },
};

/** 전체 기능 */
export const FullFeatured = {
  render: () => {
    const [options, setOptions] = useState({
      glassFinish: 'opaline',
      hardware: 'patina-brass',
      height: '61-72',
    });

    const handleOptionsChange = (key, value) => {
      setOptions((prev) => ({ ...prev, [key]: value }));
    };

    const handleAddToCart = (quantity, selectedOptions) => {
      console.log('Adding to cart:', {
        product: selectedProduct.title,
        quantity,
        options: selectedOptions,
      });
      alert(`${selectedProduct.title} ${quantity}개가 장바구니에 추가되었습니다.`);
    };

    return (
      <ProductDetailTemplate
        product={{
          ...selectedProduct,
          price: 1290,
        }}
        meta={productMeta}
        options={options}
        onOptionsChange={handleOptionsChange}
        tabs={productTabs}
        links={productLinks}
        onAddToCart={handleAddToCart}
      />
    );
  },
};

/** 다른 제품 - Lumen Ceiling */
export const LumenCeiling = {
  render: () => {
    const product = products[1]; // Lumen Ceiling

    return (
      <ProductDetailTemplate
        product={{
          ...product,
          price: 2490,
        }}
        meta={{
          itemNumber: `LM-${String(product.id).padStart(3, '0')}`,
          leadTime: '6-8 Weeks',
          shipDate: 'March 10, 2026',
        }}
        tabs={[
          {
            id: 'overview',
            label: 'Overview',
            content: (
              <Typography variant="body2" color="text.secondary">
                {product.title}은 스탠드형 조명으로, {product.lux} lx의 밝기와 {product.kelvin} K의 색온도를 제공합니다.
              </Typography>
            ),
          },
          {
            id: 'specs',
            label: 'Tech Specs',
            content: (
              <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">조도:</Typography>
                <Typography variant="body2">{product.lux} lx</Typography>
                <Typography variant="body2" color="text.secondary">색온도:</Typography>
                <Typography variant="body2">{product.kelvin} K</Typography>
              </Box>
            ),
          },
        ]}
        onAddToCart={(qty) => alert(`${product.title} ${qty}개 추가`)}
      />
    );
  },
};

/** 다른 제품 - Lumen Floor */
export const LumenFloor = {
  render: () => {
    const product = products[2]; // Lumen Floor

    return (
      <ProductDetailTemplate
        product={{
          ...product,
          price: 1890,
        }}
        meta={{
          itemNumber: `LM-${String(product.id).padStart(3, '0')}`,
          leadTime: '3-4 Weeks',
          shipDate: 'January 25, 2026',
        }}
        onAddToCart={(qty) => alert(`${product.title} ${qty}개 추가`)}
      />
    );
  },
};
