import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

/**
 * MobileUploadFab 섹션 컴포넌트
 *
 * 모바일 화면에서만 표시되는 플로팅 업로드 버튼.
 * 우측 하단에 고정 위치로 표시됨.
 *
 * Props:
 * @param {function} onClick - 클릭 핸들러 [Required]
 * @param {React.ReactNode} icon - 버튼 아이콘 [Optional, 기본값: AddIcon]
 * @param {string} color - FAB 색상 [Optional, 기본값: 'primary']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <MobileUploadFab onClick={() => setShowUpload(true)} />
 */
export function MobileUploadFab({
  onClick,
  icon = <AddIcon />,
  color = 'primary',
  sx = {},
}) {
  return (
    <Fab
      color={color}
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        display: { xs: 'flex', md: 'none' },
        ...sx,
      }}
    >
      {icon}
    </Fab>
  );
}

export default MobileUploadFab;
