import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CollectionsIcon from '@mui/icons-material/Collections';
import { ImageCard } from '../components/card/ImageCard';
import { EmptyState } from './EmptyState';

/**
 * MoodboardDetailView 섹션 컴포넌트
 *
 * 선택된 무드보드의 상세 뷰.
 * 헤더(뒤로가기, 제목, 액션) + 아이템 그리드 표시.
 *
 * 동작 방식:
 * 1. 헤더에 보드 정보 및 액션 버튼 표시
 * 2. 아이템이 없으면 EmptyState 표시
 * 3. 아이템이 있으면 Grid로 ImageCard 렌더링
 * 4. 각 카드에 드래그 핸들과 제거 버튼 오버레이
 *
 * Props:
 * @param {object} board - 무드보드 객체 {id, name, description, items, createdAt} [Required]
 * @param {function} onBack - 뒤로가기 핸들러 [Required]
 * @param {function} onItemClick - 아이템 클릭 핸들러 (item, index) => void [Required]
 * @param {function} onItemRemove - 아이템 제거 핸들러 (itemId) => void [Required]
 * @param {function} onMenuOpen - 메뉴 열기 핸들러 (event) => void [Required]
 * @param {function} onShare - 공유 핸들러 [Required]
 *
 * Example usage:
 * <MoodboardDetailView
 *   board={currentBoard}
 *   onBack={backToGrid}
 *   onItemClick={(item, index) => openDetail(item, index)}
 *   onItemRemove={(id) => removeItem(id)}
 *   onMenuOpen={(e) => openMenu(e)}
 *   onShare={shareBoard}
 * />
 */
export function MoodboardDetailView({
  board,
  onBack,
  onItemClick,
  onItemRemove,
  onMenuOpen,
  onShare,
}) {
  if (!board) return null;

  return (
    <>
      {/* 상세 뷰 헤더 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3,
        }}
      >
        <IconButton onClick={onBack} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 0.5,
            }}
          >
            {board.name}
          </Typography>
          {board.description && (
            <Typography variant="body1" color="text.secondary">
              {board.description}
            </Typography>
          )}
          <Typography variant="caption" color="text.disabled">
            Created {board.createdAt} • {board.items.length} items
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<ShareIcon />}
            onClick={onShare}
            sx={{ textTransform: 'none' }}
          >
            Share
          </Button>
          <IconButton onClick={onMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      {/* 보드 아이템 Grid */}
      {board.items.length > 0 ? (
        <Grid container spacing={2}>
          {board.items.map((item, index) => (
            <Grid key={`${board.id}-${item.id}`} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Fade in timeout={300 + index * 50}>
                <Box
                  onClick={() => onItemClick(item, index)}
                  sx={{ cursor: 'pointer' }}
                >
                  <ImageCard
                    src={item.thumbnail}
                    title={item.title}
                    tags={item.tags}
                    hideActions
                    customOverlay={
                      <Box
                        className="moodboard-item-overlay"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          p: 1,
                          opacity: 0,
                          transition: 'opacity 0.2s',
                        }}
                      >
                        {/* 드래그 핸들 (좌측 상단) */}
                        <IconButton
                          size="small"
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.9)',
                            cursor: 'grab',
                            '&:hover': { bgcolor: 'white' },
                          }}
                        >
                          <DragIndicatorIcon fontSize="small" />
                        </IconButton>
                        {/* 제거 버튼 (우측 상단) */}
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            onItemRemove(item.id);
                          }}
                          sx={{
                            bgcolor: 'error.main',
                            color: 'white',
                            '&:hover': { bgcolor: 'error.dark' },
                          }}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    }
                    sx={{
                      '&:hover .moodboard-item-overlay': {
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyState
          icon={<CollectionsIcon sx={{ fontSize: 64, color: 'text.disabled' }} />}
          title="This board is empty"
          description="Add references from the Archive to get started"
          actionLabel="Browse Archive"
          actionHref="/"
          hasBorder
        />
      )}
    </>
  );
}

export default MoodboardDetailView;
