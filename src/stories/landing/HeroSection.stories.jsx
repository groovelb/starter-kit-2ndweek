import { MemoryRouter } from 'react-router-dom';
import HeroSection from '../../sections/landing/HeroSection.jsx';

export default {
  title: 'Landing/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## HeroSection

MUSE 랜딩페이지의 히어로 섹션입니다.

### 구조
- **상단**: 브랜드명 + 태그라인 + 설명
- **중앙**: StretchedHeadline (CAPTURE / CURATE / CREATE)
- **하단**: 3가지 USP 카드 + CTA 버튼

### 사용 컴포넌트
- \`StretchedHeadlineMultiline\` - 전체 너비를 채우는 애니메이션 헤드라인
- \`Grid\` - 반응형 USP 카드 레이아웃
- \`Icon\` - Material Icons
        `,
      },
    },
  },
};

export const Default = {
  args: {},
};

export const WithCustomStyle = {
  args: {
    sx: {
      minHeight: '80vh',
    },
  },
};
