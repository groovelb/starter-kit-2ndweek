import { MoodboardDetailView } from '../../../sections';
import museDataStore from '../../../data/museDataStore';

export default {
  title: 'Template/MUSE/Section/MoodboardDetailView',
  component: MoodboardDetailView,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## MoodboardDetailView

선택된 무드보드의 상세 뷰 섹션 컴포넌트.

### 역할
- 헤더: 뒤로가기, 보드 제목, 공유/메뉴 버튼
- 아이템 그리드: 드래그 핸들, 제거 버튼 오버레이
- 아이템이 없을 경우 EmptyState 표시

### 사용 위치
- MoodboardsPage: 보드 선택 후 상세 뷰
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const moodboards = museDataStore.getMoodboards();
    const board = moodboards.find((b) => b.items.length > 0) || moodboards[0];

    return (
      <MoodboardDetailView
        board={board}
        onBack={() => console.log('Back')}
        onItemClick={(item) => console.log('Item:', item.title)}
        onItemRemove={(id) => console.log('Remove:', id)}
        onMenuOpen={() => console.log('Menu')}
        onShare={() => console.log('Share')}
      />
    );
  },
};
