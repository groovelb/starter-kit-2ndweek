import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';
import { MoodboardCard } from '../components/card/MoodboardCard';
import { PageHeader } from './PageHeader';
import { EmptyState } from './EmptyState';

/**
 * MoodboardGridView 섹션 컴포넌트
 *
 * 모든 무드보드를 카드 그리드로 표시하는 뷰.
 * PageHeader, MoodboardCard 그리드, EmptyState 포함.
 *
 * 동작 방식:
 * 1. boards 배열이 비어있으면 EmptyState 표시
 * 2. boards가 있으면 MoodboardCard 그리드 렌더링
 * 3. 각 카드에 Fade 애니메이션 적용
 * 4. 카드 클릭, 편집, 삭제 이벤트 처리
 *
 * Props:
 * @param {Array} boards - 무드보드 배열 [{id, name, description, items, createdAt}] [Required]
 * @param {function} onBoardClick - 보드 클릭 핸들러 (boardId) => void [Required]
 * @param {function} onBoardEdit - 편집 클릭 핸들러 (boardId) => void [Required]
 * @param {function} onBoardDelete - 삭제 클릭 핸들러 (boardId) => void [Required]
 * @param {function} onCreateNew - 새 보드 생성 클릭 핸들러 () => void [Required]
 *
 * Example usage:
 * <MoodboardGridView
 *   boards={moodboards}
 *   onBoardClick={(id) => selectBoard(id)}
 *   onBoardEdit={(id) => openRenameDialog(id)}
 *   onBoardDelete={(id) => openDeleteDialog(id)}
 *   onCreateNew={() => openCreateDialog()}
 * />
 */
export function MoodboardGridView({
  boards = [],
  onBoardClick,
  onBoardEdit,
  onBoardDelete,
  onCreateNew,
}) {
  const totalItems = boards.reduce((acc, b) => acc + b.items.length, 0);

  return (
    <>
      {/* 페이지 헤더 */}
      <PageHeader
        title="Moodboards"
        subtitle={`${boards.length} boards, ${totalItems} total items`}
        actionLabel="New Board"
        actionIcon={<AddIcon />}
        onAction={onCreateNew}
      />

      {/* 무드보드 그리드 */}
      {boards.length > 0 ? (
        <Grid container spacing={2}>
          {boards.map((board, index) => (
            <Grid key={board.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Fade in timeout={300 + index * 50}>
                <Box>
                  <MoodboardCard
                    id={board.id}
                    name={board.name}
                    description={board.description}
                    items={board.items}
                    createdAt={board.createdAt}
                    onClick={() => onBoardClick(board.id)}
                    onEdit={onBoardEdit}
                    onDelete={onBoardDelete}
                  />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyState
          icon={<FolderIcon sx={{ fontSize: 64, color: 'text.disabled' }} />}
          title="No moodboards yet"
          description="Create your first moodboard to start curating"
          actionLabel="Create Moodboard"
          actionVariant="contained"
          onAction={onCreateNew}
        />
      )}
    </>
  );
}

export default MoodboardGridView;
