import { MemoryRouter } from 'react-router-dom';
import CTASection from '../../sections/landing/CTASection.jsx';

export default {
  title: 'Landing/CTASection',
  component: CTASection,
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
## CTASection

Archive 페이지로 유도하는 CTA 섹션입니다.

### 구조
- **배경**: 이미지 그리드 오버레이 + 다크 그라디언트
- **헤드라인**: StretchedHeadline 애니메이션
- **통계**: Social Proof 수치 (References, Moodboards, Free)
- **CTA 버튼**: Archive 페이지로 이동
- **이미지 스트립**: 갤러리 미리보기
- **푸터**: 브랜드 정보

### 사용 컴포넌트
- \`StretchedHeadline\` - 애니메이션 헤드라인
- \`Grid\` - 통계 레이아웃
- \`Button\` - CTA 버튼
        `,
      },
    },
  },
};

export const Default = {
  args: {},
};
