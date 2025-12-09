import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MobileUploadFab } from '../../../sections';

export default {
  title: 'Template/MUSE/Template/MobileUploadFab',
  component: MobileUploadFab,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## MobileUploadFab

모바일 화면에서만 표시되는 플로팅 액션 버튼.

### 역할
- 모바일(md 미만)에서 빠른 업로드 접근 제공
- 화면 우측 하단에 고정 위치
- 데스크탑에서는 자동으로 숨김

### 사용 위치
- ArchivePage: 모바일에서 업로드 버튼으로 사용
        `,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Box sx={{ position: 'relative', height: 200, border: '1px dashed', borderColor: 'divider' }}>
      <Typography sx={{ p: 2 }} color="text.secondary">
        브라우저 창을 좁게 하면 우측 하단에 FAB 표시
      </Typography>
      <MobileUploadFab onClick={() => console.log('Upload clicked')} />
    </Box>
  ),
};
