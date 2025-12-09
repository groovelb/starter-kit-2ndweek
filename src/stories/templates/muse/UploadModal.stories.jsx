import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { UploadModal } from '../../../components/templates/UploadModal';

export default {
  title: 'Template/MUSE/Template/UploadModal',
  component: UploadModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## UploadModal

레퍼런스 업로드 전체 플로우 모달 템플릿.

### 역할
- 파일 드래그앤드롭 / 클릭 선택
- 메타데이터 입력 (제목, 태그, 라이선스)
- 업로드 진행 상황 표시
- 성공/실패 피드백

### 사용 위치
- ArchivePage: 헤더 Upload 버튼 또는 모바일 FAB 클릭 시
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setIsOpen(true)}>
          Upload Reference
        </Button>
        <UploadModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onUpload={async (data) => {
            console.log('Upload:', data);
            await new Promise((r) => setTimeout(r, 2000));
          }}
        />
      </>
    );
  },
};
