import { MemoryRouter } from 'react-router-dom';
import USPSection from '../../sections/landing/USPSection.jsx';

export default {
  title: 'Landing/USPSection',
  component: USPSection,
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
## USPSection

MUSE의 핵심 기능을 실제 컴포넌트 데모와 함께 설명하는 섹션입니다.

### 구조
- **섹션 헤더**: 타이틀 + 서브타이틀
- **USP 항목**: 좌우 교차 레이아웃으로 3가지 기능 설명
  - 01: Upload & Organize (FileDropzone 데모)
  - 02: Search & Filter (FilterBar 데모)
  - 03: Curate Moodboards (MoodboardCard 데모)

### 사용 컴포넌트
- \`FileDropzone\` - 파일 업로드 UI
- \`FilterBar\` - 검색 및 필터링 UI
- \`MoodboardCard\` - 무드보드 카드 UI
- \`Grid\` - 반응형 레이아웃
        `,
      },
    },
  },
};

export const Default = {
  args: {},
};
