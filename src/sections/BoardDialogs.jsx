import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

/**
 * BoardDialogs 섹션 컴포넌트
 *
 * 무드보드 관리 다이얼로그 모음 (생성, 이름변경, 삭제).
 * 하나의 컴포넌트로 세 가지 다이얼로그를 통합 관리.
 *
 * Props:
 * @param {object} createDialog - 생성 다이얼로그 상태 {isOpen, value, onChange, onSubmit, onClose} [Required]
 * @param {object} renameDialog - 이름변경 다이얼로그 상태 {isOpen, value, onChange, onSubmit, onClose} [Required]
 * @param {object} deleteDialog - 삭제 다이얼로그 상태 {isOpen, boardName, onConfirm, onClose} [Required]
 *
 * Example usage:
 * <BoardDialogs
 *   createDialog={{
 *     isOpen: showCreate,
 *     value: newName,
 *     onChange: setNewName,
 *     onSubmit: handleCreate,
 *     onClose: () => setShowCreate(false),
 *   }}
 *   renameDialog={{
 *     isOpen: showRename,
 *     value: newName,
 *     onChange: setNewName,
 *     onSubmit: handleRename,
 *     onClose: () => setShowRename(false),
 *   }}
 *   deleteDialog={{
 *     isOpen: showDelete,
 *     boardName: targetBoard?.name,
 *     onConfirm: handleDelete,
 *     onClose: () => setShowDelete(false),
 *   }}
 * />
 */
export function BoardDialogs({
  createDialog,
  renameDialog,
  deleteDialog,
}) {
  return (
    <>
      {/* 새 보드 생성 다이얼로그 */}
      <Dialog
        open={createDialog.isOpen}
        onClose={createDialog.onClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Create New Board</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Board Name"
            value={createDialog.value}
            onChange={(e) => createDialog.onChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && createDialog.onSubmit()}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={createDialog.onClose} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={createDialog.onSubmit}
            disabled={!createDialog.value?.trim()}
            sx={{ textTransform: 'none' }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* 이름 변경 다이얼로그 */}
      <Dialog
        open={renameDialog.isOpen}
        onClose={renameDialog.onClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Rename Board</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Board Name"
            value={renameDialog.value}
            onChange={(e) => renameDialog.onChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && renameDialog.onSubmit()}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={renameDialog.onClose} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={renameDialog.onSubmit}
            disabled={!renameDialog.value?.trim()}
            sx={{ textTransform: 'none' }}
          >
            Rename
          </Button>
        </DialogActions>
      </Dialog>

      {/* 삭제 확인 다이얼로그 */}
      <Dialog
        open={deleteDialog.isOpen}
        onClose={deleteDialog.onClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Delete Board</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete &quot;{deleteDialog.boardName}&quot;?
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteDialog.onClose} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={deleteDialog.onConfirm}
            sx={{ textTransform: 'none' }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BoardDialogs;
