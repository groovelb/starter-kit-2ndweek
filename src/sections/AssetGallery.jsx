import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Masonry from '@mui/lab/Masonry';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { ImageCard } from '../components/card/ImageCard';
import { EmptyState } from './EmptyState';

/**
 * AssetGallery 섹션 컴포넌트
 *
 * 에셋(이미지/비디오) 목록을 Masonry 레이아웃으로 표시하는 갤러리.
 * 에셋이 없을 경우 EmptyState 표시.
 *
 * 동작 방식:
 * 1. assets 배열이 비어있으면 EmptyState 표시
 * 2. assets가 있으면 Masonry 그리드로 ImageCard 렌더링
 * 3. 각 카드에 Fade 애니메이션 적용 (순차적 등장)
 * 4. 카드 클릭, 좋아요, 무드보드 추가 이벤트 처리
 *
 * Props:
 * @param {Array} assets - 표시할 에셋 배열 [{id, thumbnail, title, tags, ...}] [Required]
 * @param {string} viewMode - 뷰 모드 ('grid' | 'list') [Optional, 기본값: 'grid']
 * @param {function} onAssetClick - 에셋 클릭 핸들러 (asset, index) => void [Required]
 * @param {function} onLike - 좋아요 클릭 핸들러 (assetId, event) => void [Optional]
 * @param {function} onAddToBoard - 무드보드 추가 클릭 핸들러 (asset, event) => void [Optional]
 * @param {function} onClearFilters - 필터 초기화 핸들러 (빈 상태에서 사용) [Optional]
 * @param {string} emptyTitle - 빈 상태 제목 [Optional, 기본값: 'No references found']
 * @param {string} emptyDescription - 빈 상태 설명 [Optional]
 * @param {string} emptyActionLabel - 빈 상태 버튼 레이블 [Optional]
 *
 * Example usage:
 * <AssetGallery
 *   assets={filteredAssets}
 *   viewMode="grid"
 *   onAssetClick={(asset, index) => openDetail(asset, index)}
 *   onLike={(id) => toggleLike(id)}
 *   onAddToBoard={(asset) => openBoardSelect(asset)}
 *   onClearFilters={clearFilters}
 * />
 */
export function AssetGallery({
  assets = [],
  viewMode = 'grid',
  onAssetClick,
  onLike,
  onAddToBoard,
  onClearFilters,
  emptyTitle = 'No references found',
  emptyDescription = 'Try adjusting your search or filters',
  emptyActionLabel = 'Clear all filters',
}) {
  // 빈 상태
  if (assets.length === 0) {
    return (
      <EmptyState
        icon={<AutoAwesomeIcon sx={{ fontSize: 64, color: 'text.disabled' }} />}
        title={emptyTitle}
        description={emptyDescription}
        actionLabel={onClearFilters ? emptyActionLabel : undefined}
        onAction={onClearFilters}
      />
    );
  }

  // Masonry 그리드
  return (
    <Masonry
      columns={{
        xs: 1,
        sm: 2,
        md: viewMode === 'list' ? 1 : 3,
        lg: viewMode === 'list' ? 1 : 4,
      }}
      spacing={2}
      sx={{ margin: 0 }}
    >
      {assets.map((asset, index) => (
        <Fade key={asset.id} in timeout={300 + index * 50}>
          <Box
            onClick={() => onAssetClick?.(asset, index)}
            sx={{ cursor: 'pointer' }}
          >
            <ImageCard
              src={asset.thumbnail}
              title={asset.title}
              tags={asset.tags}
              onLike={
                onLike
                  ? (e) => {
                      e?.stopPropagation?.();
                      onLike(asset.id, e);
                    }
                  : undefined
              }
              onAddToBoard={
                onAddToBoard
                  ? (e) => {
                      e?.stopPropagation?.();
                      onAddToBoard(asset, e);
                    }
                  : undefined
              }
            />
          </Box>
        </Fade>
      ))}
    </Masonry>
  );
}

export default AssetGallery;
