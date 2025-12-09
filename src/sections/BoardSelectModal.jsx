import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CollectionDropdown } from '../components/input/CollectionDropdown';

/**
 * BoardSelectModal 섹션 컴포넌트
 *
 * 무드보드 선택을 위한 오버레이 모달.
 * 백드롭 클릭 시 닫히고, 내부 영역은 클릭 전파 방지.
 *
 * 동작 방식:
 * 1. isOpen이 true일 때 전체 화면 오버레이 표시
 * 2. 백드롭(어두운 영역) 클릭 시 onClose 호출
 * 3. CollectionDropdown으로 무드보드 선택 또는 새로 생성
 * 4. 선택/생성 완료 시 onSelect/onCreate 호출
 *
 * Props:
 * @param {boolean} isOpen - 모달 표시 여부 [Required]
 * @param {function} onClose - 모달 닫기 핸들러 [Required]
 * @param {string} title - 모달 타이틀 [Optional, 기본값: 'Add to Moodboard']
 * @param {Array} collections - 무드보드 목록 [{id, name, count}] [Required]
 * @param {function} onSelect - 무드보드 선택 핸들러 (boardId) => void [Required]
 * @param {function} onCreate - 새 무드보드 생성 핸들러 (name) => void [Required]
 * @param {string} buttonLabel - 드롭다운 버튼 레이블 [Optional, 기본값: 'Select Board']
 *
 * Example usage:
 * <BoardSelectModal
 *   isOpen={showBoardDropdown}
 *   onClose={() => setShowBoardDropdown(false)}
 *   collections={moodboardOptions}
 *   onSelect={handleAddToBoard}
 *   onCreate={handleCreateBoard}
 * />
 */
export function BoardSelectModal({
  isOpen,
  onClose,
  title = 'Add to Moodboard',
  collections,
  onSelect,
  onCreate,
  buttonLabel = 'Select Board',
}) {
  if (!isOpen) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          bgcolor: 'background.paper',
          borderRadius: 2,
          p: 3,
          minWidth: 300,
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          {title}
        </Typography>
        <CollectionDropdown
          collections={collections}
          onSelect={onSelect}
          onCreate={onCreate}
          buttonLabel={buttonLabel}
          variant="outlined"
          isFullWidth
          menuZIndex={1500}
        />
      </Box>
    </Box>
  );
}

export default BoardSelectModal;
