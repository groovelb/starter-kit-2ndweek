import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BoardSelectModal } from '../../../sections';

export default {
  title: 'Template/MUSE/Template/BoardSelectModal',
  component: BoardSelectModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## BoardSelectModal

무드보드 선택을 위한 오버레이 모달 컴포넌트.

### 역할
- 기존 무드보드 목록 표시 및 선택
- 새 무드보드 생성 기능 제공
- 에셋을 무드보드에 추가할 때 사용

### 사용 위치
- ArchivePage: 이미지 카드에서 "Add to Board" 클릭 시
- ImageDetailModal: 상세 모달에서 무드보드 추가 시
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const collections = [
      { id: '1', name: 'Inspiration', count: 24 },
      { id: '2', name: 'Project Alpha', count: 12 },
      { id: '3', name: 'Color Study', count: 8 },
    ];

    return (
      <Box>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Add to Board
        </Button>
        <BoardSelectModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          collections={collections}
          onSelect={(id) => {
            console.log('Selected:', id);
            setIsOpen(false);
          }}
          onCreate={(name) => {
            console.log('Create:', name);
            setIsOpen(false);
          }}
        />
      </Box>
    );
  },
};
