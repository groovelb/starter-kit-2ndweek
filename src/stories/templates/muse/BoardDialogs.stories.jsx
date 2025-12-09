import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BoardDialogs } from '../../../sections';

export default {
  title: 'Template/MUSE/Template/BoardDialogs',
  component: BoardDialogs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## BoardDialogs

무드보드 관리 다이얼로그 모음 컴포넌트.

### 역할
- Create Dialog: 새 보드 생성
- Rename Dialog: 보드 이름 변경
- Delete Dialog: 보드 삭제 확인

### 사용 위치
- MoodboardsPage: CRUD 작업 시 다이얼로그 표시
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const [showCreate, setShowCreate] = useState(false);
    const [showRename, setShowRename] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [value, setValue] = useState('');

    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={() => setShowCreate(true)}>
          Create
        </Button>
        <Button variant="outlined" onClick={() => { setValue('My Board'); setShowRename(true); }}>
          Rename
        </Button>
        <Button variant="outlined" color="error" onClick={() => setShowDelete(true)}>
          Delete
        </Button>

        <BoardDialogs
          createDialog={{
            isOpen: showCreate,
            value,
            onChange: setValue,
            onSubmit: () => setShowCreate(false),
            onClose: () => setShowCreate(false),
          }}
          renameDialog={{
            isOpen: showRename,
            value,
            onChange: setValue,
            onSubmit: () => setShowRename(false),
            onClose: () => setShowRename(false),
          }}
          deleteDialog={{
            isOpen: showDelete,
            boardName: 'My Board',
            onConfirm: () => setShowDelete(false),
            onClose: () => setShowDelete(false),
          }}
        />
      </Box>
    );
  },
};
