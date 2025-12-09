import AddIcon from '@mui/icons-material/Add';
import { PageHeader } from '../../../sections';

export default {
  title: 'Template/MUSE/Section/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## PageHeader

페이지 상단에 사용되는 헤더 섹션 컴포넌트.

### 역할
- 페이지 제목과 부제목 표시
- 주요 액션 버튼 제공 (업로드, 생성 등)
- 커스텀 액션 영역 지원

### 사용 위치
- ArchivePage: "Archive" + 에셋 개수 + Upload 버튼
- MoodboardsPage: "Moodboards" + 보드 개수 + New Board 버튼
        `,
      },
    },
  },
};

export const Default = {
  args: {
    title: 'Archive',
    subtitle: '128 references in your collection',
    actionLabel: 'Upload Reference',
    actionIcon: <AddIcon />,
    onAction: () => console.log('Action clicked'),
  },
};
