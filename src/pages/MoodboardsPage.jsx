import { ImageDetailModal } from '../components/data/ImageDetailModal';
import { PageContainer } from '../components/container/PageContainer';
import {
  MoodboardGridView,
  MoodboardDetailView,
  BoardActionsMenu,
  BoardDialogs,
} from '../sections';
import { useMoodboardData, useAssetDetailModal, useSnackbar } from '../hooks';

/**
 * MoodboardsPage 컴포넌트
 *
 * 무드보드 관리 및 큐레이션 화면.
 *
 * 페이지 구조:
 * 1. MoodboardGridView - 전체 무드보드 카드 그리드 (기본 뷰)
 * 2. MoodboardDetailView - 선택된 보드의 아이템 목록 (상세 뷰)
 * 3. BoardActionsMenu - 보드 액션 메뉴
 * 4. BoardDialogs - 생성/이름변경/삭제 다이얼로그
 * 5. ImageDetailModal - 이미지 상세 모달
 *
 * Example usage:
 * <MoodboardsPage />
 */
export function MoodboardsPage() {
  // ============================================
  // 훅으로 로직 분리
  // ============================================
  const board = useMoodboardData();
  const detailModal = useAssetDetailModal(board.selectedBoard?.items || []);
  const { notify, SnackbarComponent } = useSnackbar();

  // ============================================
  // 이벤트 핸들러 (알림 연동)
  // ============================================

  /** 보드 생성 */
  const handleCreateBoard = () => {
    const newBoard = board.createBoard();
    if (newBoard) {
      notify(`Created "${newBoard.name}"`, 'success');
    }
  };

  /** 보드 이름변경 */
  const handleRenameBoard = () => {
    const success = board.renameBoard();
    if (success) {
      notify('Board renamed', 'success');
    }
  };

  /** 보드 삭제 */
  const handleDeleteBoard = () => {
    const success = board.deleteBoard();
    if (success) {
      notify('Board deleted', 'info');
    }
  };

  /** 보드 복제 */
  const handleDuplicateBoard = () => {
    const duplicated = board.duplicateBoard();
    if (duplicated) {
      notify('Board duplicated', 'success');
    }
  };

  /** 공유 */
  const handleShare = () => {
    board.shareBoard();
    notify('Share link copied to clipboard', 'success');
  };

  /** 아이템 제거 */
  const handleRemoveItem = (itemId) => {
    const success = board.removeItem(itemId);
    if (success) {
      notify('Removed from moodboard', 'info');
    }
  };

  // ============================================
  // 렌더링 - 선언적 구조
  // ============================================
  return (
    <PageContainer>
      {/* 1. 뷰 전환: 그리드 뷰 ↔ 상세 뷰 */}
      {board.selectedBoard ? (
        <MoodboardDetailView
          board={board.selectedBoard}
          onBack={board.backToGrid}
          onItemClick={detailModal.open}
          onItemRemove={handleRemoveItem}
          onMenuOpen={board.openMenu}
          onShare={handleShare}
        />
      ) : (
        <MoodboardGridView
          boards={board.moodboards}
          onBoardClick={board.selectBoard}
          onBoardEdit={board.openRenameDialog}
          onBoardDelete={board.openDeleteDialog}
          onCreateNew={board.openCreateDialog}
        />
      )}

      {/* 2. 보드 액션 메뉴 */}
      <BoardActionsMenu
        anchorEl={board.menuProps.anchorEl}
        onClose={board.menuProps.onClose}
        onRename={board.menuProps.onRename}
        onDuplicate={handleDuplicateBoard}
        onShare={handleShare}
        onDelete={board.menuProps.onDelete}
      />

      {/* 3. 다이얼로그들 */}
      <BoardDialogs
        createDialog={{
          ...board.dialogProps.createDialog,
          onSubmit: handleCreateBoard,
        }}
        renameDialog={{
          ...board.dialogProps.renameDialog,
          onSubmit: handleRenameBoard,
        }}
        deleteDialog={{
          ...board.dialogProps.deleteDialog,
          onConfirm: handleDeleteBoard,
        }}
      />

      {/* 4. 이미지 상세 모달 */}
      <ImageDetailModal
        isOpen={detailModal.isOpen}
        onClose={detailModal.close}
        asset={detailModal.asset}
        isLiked={detailModal.asset ? detailModal.isLiked(detailModal.asset.id) : false}
        onLike={() => detailModal.asset && detailModal.toggleLike(detailModal.asset.id)}
        onDownload={() => console.log('Download:', detailModal.asset?.title)}
        onShare={() => console.log('Share:', detailModal.asset?.title)}
        onEdit={() => console.log('Edit:', detailModal.asset?.title)}
        onPrevious={detailModal.previous}
        onNext={detailModal.next}
        hasPrevious={detailModal.hasPrevious}
        hasNext={detailModal.hasNext}
      />

      {/* 5. 스낵바 알림 */}
      <SnackbarComponent />
    </PageContainer>
  );
}

export default MoodboardsPage;
