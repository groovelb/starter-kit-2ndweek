import { useState } from 'react';
import Button from '@mui/material/Button';
import { BoardActionsMenu } from '../../../sections';

export default {
  title: 'Template/MUSE/Template/BoardActionsMenu',
  component: BoardActionsMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## BoardActionsMenu

무드보드 관리 액션 메뉴 컴포넌트.

### 역할
- Rename: 보드 이름 변경
- Duplicate: 보드 복제
- Share: 공유 링크 복사
- Delete: 보드 삭제

### 사용 위치
- MoodboardsPage: 보드 카드/상세 뷰의 더보기 메뉴
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);

    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Open Menu
        </Button>
        <BoardActionsMenu
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          onRename={() => setAnchorEl(null)}
          onDuplicate={() => setAnchorEl(null)}
          onShare={() => setAnchorEl(null)}
          onDelete={() => setAnchorEl(null)}
        />
      </>
    );
  },
};
