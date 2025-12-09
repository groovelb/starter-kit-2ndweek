import { MoodboardGridView } from '../../../sections';
import museDataStore from '../../../data/museDataStore';

export default {
  title: 'Template/MUSE/Section/MoodboardGridView',
  component: MoodboardGridView,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## MoodboardGridView

모든 무드보드를 카드 그리드로 표시하는 뷰 섹션 컴포넌트.

### 역할
- PageHeader + MoodboardCard 그리드 통합
- 보드 클릭 시 상세 뷰로 전환
- 보드가 없을 경우 EmptyState 표시
- 편집/삭제 메뉴 접근 제공

### 사용 위치
- MoodboardsPage: 기본 뷰 (보드 미선택 상태)
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const moodboards = museDataStore.getMoodboards();

    return (
      <MoodboardGridView
        boards={moodboards}
        onBoardClick={(id) => console.log('Board:', id)}
        onBoardEdit={(id) => console.log('Edit:', id)}
        onBoardDelete={(id) => console.log('Delete:', id)}
        onCreateNew={() => console.log('Create new')}
      />
    );
  },
};
