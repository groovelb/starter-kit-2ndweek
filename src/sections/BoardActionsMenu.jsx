import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * BoardActionsMenu 섹션 컴포넌트
 *
 * 무드보드 액션 메뉴 (이름변경, 복제, 공유, 삭제).
 * Menu 컴포넌트를 래핑하여 일관된 액션 UI 제공.
 *
 * Props:
 * @param {HTMLElement|null} anchorEl - 메뉴 앵커 요소 [Required]
 * @param {function} onClose - 메뉴 닫기 핸들러 [Required]
 * @param {function} onRename - 이름변경 클릭 핸들러 [Required]
 * @param {function} onDuplicate - 복제 클릭 핸들러 [Required]
 * @param {function} onShare - 공유 클릭 핸들러 [Required]
 * @param {function} onDelete - 삭제 클릭 핸들러 [Required]
 *
 * Example usage:
 * <BoardActionsMenu
 *   anchorEl={menuAnchor}
 *   onClose={closeMenu}
 *   onRename={openRenameDialog}
 *   onDuplicate={duplicateBoard}
 *   onShare={shareBoard}
 *   onDelete={openDeleteDialog}
 * />
 */
export function BoardActionsMenu({
  anchorEl,
  onClose,
  onRename,
  onDuplicate,
  onShare,
  onDelete,
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={onRename}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Rename</ListItemText>
      </MenuItem>
      <MenuItem onClick={onDuplicate}>
        <ListItemIcon>
          <ContentCopyIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Duplicate</ListItemText>
      </MenuItem>
      <MenuItem onClick={onShare}>
        <ListItemIcon>
          <ShareIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Share</ListItemText>
      </MenuItem>
      <MenuItem onClick={onDelete} sx={{ color: 'error.main' }}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" color="error" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </Menu>
  );
}

export default BoardActionsMenu;
