import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { EmptyState } from '../../../sections';

export default {
  title: 'Template/MUSE/Template/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## EmptyState

콘텐츠가 없을 때 표시되는 빈 상태 섹션 컴포넌트.

### 역할
- 빈 상태에 대한 시각적 피드백 제공
- 사용자에게 다음 행동 유도 (CTA 버튼)
- 상황별 맞춤 메시지 표시

### 사용 위치
- AssetGallery: 검색 결과 없음
- MoodboardGridView: 무드보드 없음
- MoodboardDetailView: 보드에 아이템 없음
        `,
      },
    },
  },
};

export const Default = {
  args: {
    icon: <AutoAwesomeIcon sx={{ fontSize: 64, color: 'text.disabled' }} />,
    title: 'No references found',
    description: 'Try adjusting your search or filters',
    actionLabel: 'Clear all filters',
    onAction: () => console.log('Clear filters'),
  },
};
