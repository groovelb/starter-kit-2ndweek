import AddIcon from '@mui/icons-material/Add';
import { FilterBar } from '../components/templates/FilterBar';
import { UploadModal } from '../components/templates/UploadModal';
import { ImageDetailModal } from '../components/data/ImageDetailModal';
import { PageContainer } from '../components/container/PageContainer';
import {
  PageHeader,
  AssetGallery,
  MobileUploadFab,
  BoardSelectModal,
} from '../sections';
import { useArchiveData, useAssetDetailModal, useSnackbar } from '../hooks';

/**
 * ArchivePage 컴포넌트
 *
 * MUSE 메인 대시보드 - 레퍼런스 아카이브 탐색 및 관리 화면.
 *
 * 페이지 구조:
 * 1. PageHeader - 제목 + 업로드 버튼
 * 2. FilterBar - 검색, 태그, 정렬, 뷰 모드
 * 3. AssetGallery - Masonry 이미지 그리드
 * 4. MobileUploadFab - 모바일 플로팅 버튼
 * 5. Modals - 업로드, 상세 보기, 무드보드 선택
 *
 * Example usage:
 * <ArchivePage />
 */
export function ArchivePage() {
  // ============================================
  // 훅으로 로직 분리
  // ============================================
  const archive = useArchiveData();
  const detailModal = useAssetDetailModal(archive.filteredAssets);
  const { notify, SnackbarComponent } = useSnackbar();

  // ============================================
  // 이벤트 핸들러 (알림 연동)
  // ============================================

  /** 업로드 완료 처리 */
  const handleUpload = async (data) => {
    const newAsset = await archive.uploadModal.onUpload(data);
    notify(`"${newAsset.title}" uploaded successfully!`, 'success');
  };

  /** 무드보드에 추가 */
  const handleAddToBoard = (boardId) => {
    const board = archive.boardSelectModal.onSelect(boardId);
    if (board) {
      notify(`Added to "${board.name}"`, 'success');
    }
  };

  /** 새 무드보드 생성 및 추가 */
  const handleCreateBoard = (name) => {
    const result = archive.boardSelectModal.onCreate(name);
    if (result.hasItem) {
      notify(`Created "${name}" and added item`, 'success');
    } else {
      notify(`Created new board "${name}"`, 'success');
    }
  };

  // ============================================
  // 렌더링 - 선언적 구조
  // ============================================
  return (
    <PageContainer>
      {/* 1. 페이지 헤더 */}
      <PageHeader
        title="Archive"
        subtitle={`${archive.count} references in your collection`}
        actionLabel="Upload Reference"
        actionIcon={<AddIcon />}
        onAction={archive.uploadModal.open}
      />

      {/* 2. 필터 바 */}
      <FilterBar {...archive.filterProps} />

      {/* 3. 에셋 갤러리 */}
      <AssetGallery
        assets={archive.filteredAssets}
        viewMode={archive.viewMode}
        onAssetClick={detailModal.open}
        onLike={detailModal.toggleLike}
        onAddToBoard={archive.boardSelectModal.open}
        onClearFilters={archive.clearFilters}
      />

      {/* 4. 모바일 업로드 버튼 */}
      <MobileUploadFab onClick={archive.uploadModal.open} />

      {/* 5. 업로드 모달 */}
      <UploadModal
        isOpen={archive.uploadModal.isOpen}
        onClose={archive.uploadModal.close}
        onUpload={handleUpload}
      />

      {/* 6. 이미지 상세 모달 */}
      <ImageDetailModal
        isOpen={detailModal.isOpen}
        onClose={detailModal.close}
        asset={detailModal.asset}
        isLiked={detailModal.asset ? detailModal.isLiked(detailModal.asset.id) : false}
        onLike={() => detailModal.asset && detailModal.toggleLike(detailModal.asset.id)}
        onDownload={() => console.log('Download:', detailModal.asset?.title)}
        onShare={() => console.log('Share:', detailModal.asset?.title)}
        onEdit={() => console.log('Edit:', detailModal.asset?.title)}
        onAddToBoard={() => archive.boardSelectModal.open(detailModal.asset)}
        onPrevious={detailModal.previous}
        onNext={detailModal.next}
        hasPrevious={detailModal.hasPrevious}
        hasNext={detailModal.hasNext}
      />

      {/* 7. 무드보드 선택 모달 */}
      <BoardSelectModal
        isOpen={archive.boardSelectModal.isOpen}
        onClose={archive.boardSelectModal.close}
        collections={archive.boardSelectModal.collections}
        onSelect={handleAddToBoard}
        onCreate={handleCreateBoard}
      />

      {/* 8. 스낵바 알림 */}
      <SnackbarComponent />
    </PageContainer>
  );
}

export default ArchivePage;
