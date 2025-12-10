import Box from '@mui/material/Box';

import { ProductShowcase } from './ProductShowcase';
import { products } from '../data/products';
import { content } from '../data/content';
import { TimelineProvider } from '../hooks/useTimeline';

export default {
  title: 'Section/ProductShowcase',
  component: ProductShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ProductShowcase

TimelineSlider와 ProductGrid를 연동한 제품 쇼케이스 섹션.

### 기능
- TimelineSlider로 4단계 시간대 조절 (12pm, 4pm, 8pm, 12am)
- 시간대에 따른 모든 제품 이미지 동기화
- timeline >= 0.5 시 다크 모드 자동 전환
- 전역 TimelineContext 사용

### 사용 시 주의
TimelineProvider로 감싸야 합니다.
        `,
      },
    },
  },
  argTypes: {
    products: {
      control: 'object',
      description: '제품 데이터 배열',
    },
    title: {
      control: 'text',
      description: '섹션 타이틀',
    },
    subtitle: {
      control: 'text',
      description: '섹션 서브타이틀',
    },
    columns: {
      control: 'select',
      options: [2, 3, 4, 6],
      description: '그리드 열 수',
    },
    onProductClick: {
      action: 'productClicked',
      description: '제품 클릭 핸들러',
    },
  },
  decorators: [
    (Story, context) => (
      <TimelineProvider initialTimeline={0}>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100vh',
            transition: 'background-color 600ms ease',
          }}
        >
          <Story {...context} />
        </Box>
      </TimelineProvider>
    ),
  ],
};

/**
 * 기본 사용법 - 전체 제품
 */
export const Default = {
  args: {
    products: products,
    title: content.products.sectionTitle,
    subtitle: content.products.sectionSubtitle,
    columns: 6,
  },
  render: (args) => (
    <Box sx={{ px: 4 }}>
      <ProductShowcase {...args} />
    </Box>
  ),
};

/**
 * 전체 제품
 */
export const AllProducts = {
  args: {
    products: products,
    title: 'All Products',
    subtitle: 'Complete product lineup with day/night preview',
    columns: 4,
  },
  render: (args) => (
    <Box sx={{ px: 4 }}>
      <ProductShowcase {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 제품을 4열 그리드로 표시합니다.',
      },
    },
  },
};

/**
 * 타이틀 없음
 */
export const WithoutTitle = {
  args: {
    products: products.slice(0, 6),
    columns: 3,
  },
  render: (args) => (
    <Box sx={{ px: 4 }}>
      <ProductShowcase {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: '타이틀 없이 슬라이더와 그리드만 표시합니다.',
      },
    },
  },
};

/**
 * 다크 모드 시작
 */
export const DarkModeStart = {
  args: {
    products: products.slice(0, 6),
    title: 'Night Mode',
    subtitle: 'Products displayed in evening light',
    columns: 3,
  },
  decorators: [
    (Story, context) => (
      <TimelineProvider initialTimeline={0.67}>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100vh',
            transition: 'background-color 600ms ease',
          }}
        >
          <Story {...context} />
        </Box>
      </TimelineProvider>
    ),
  ],
  render: (args) => (
    <Box sx={{ px: 4 }}>
      <ProductShowcase {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: '8pm 시간대(다크 모드)로 시작합니다.',
      },
    },
  },
};

/**
 * 각 시간대별 상태
 */
export const TimeStates = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <TimelineProvider initialTimeline={0}>
        <Box
          sx={{
            backgroundColor: 'background.default',
            px: 4,
            transition: 'background-color 600ms ease',
          }}
        >
          <ProductShowcase
            products={products.slice(0, 3)}
            title="12pm - Noon"
            subtitle="Bright daylight"
            columns={3}
          />
        </Box>
      </TimelineProvider>

      <TimelineProvider initialTimeline={0.33}>
        <Box
          sx={{
            backgroundColor: 'background.default',
            px: 4,
            transition: 'background-color 600ms ease',
          }}
        >
          <ProductShowcase
            products={products.slice(0, 3)}
            title="4pm - Afternoon"
            subtitle="Warm afternoon light"
            columns={3}
          />
        </Box>
      </TimelineProvider>

      <TimelineProvider initialTimeline={0.67}>
        <Box
          sx={{
            backgroundColor: 'background.default',
            px: 4,
            transition: 'background-color 600ms ease',
          }}
        >
          <ProductShowcase
            products={products.slice(0, 3)}
            title="8pm - Evening"
            subtitle="Cozy evening ambiance"
            columns={3}
          />
        </Box>
      </TimelineProvider>

      <TimelineProvider initialTimeline={1}>
        <Box
          sx={{
            backgroundColor: 'background.default',
            px: 4,
            transition: 'background-color 600ms ease',
          }}
        >
          <ProductShowcase
            products={products.slice(0, 3)}
            title="12am - Midnight"
            subtitle="Night mode"
            columns={3}
          />
        </Box>
      </TimelineProvider>
    </Box>
  ),
  decorators: [],
  parameters: {
    docs: {
      description: {
        story: '각 시간대별 상태를 한눈에 비교합니다. 8pm부터 다크 모드입니다.',
      },
    },
  },
};
