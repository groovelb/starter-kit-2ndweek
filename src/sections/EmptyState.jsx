import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * EmptyState 섹션 컴포넌트
 *
 * 데이터가 없거나 검색 결과가 없을 때 표시하는 빈 상태 화면.
 * 아이콘, 제목, 설명, 액션 버튼을 조합하여 사용자에게 안내.
 *
 * Props:
 * @param {React.ReactNode} icon - 상단에 표시할 아이콘 컴포넌트 [Required]
 * @param {string} title - 메인 타이틀 텍스트 [Required]
 * @param {string} description - 부가 설명 텍스트 [Optional]
 * @param {string} actionLabel - 액션 버튼 레이블 [Optional]
 * @param {function} onAction - 액션 버튼 클릭 핸들러 [Optional]
 * @param {string} actionHref - 액션 버튼 링크 URL [Optional]
 * @param {string} actionVariant - 버튼 variant (outlined, contained) [Optional, 기본값: 'outlined']
 * @param {boolean} hasBorder - 점선 테두리 표시 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <EmptyState
 *   icon={<SearchOffIcon sx={{ fontSize: 64, color: 'text.disabled' }} />}
 *   title="No results found"
 *   description="Try adjusting your search or filters"
 *   actionLabel="Clear filters"
 *   onAction={handleClearFilters}
 * />
 */
export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  actionHref,
  actionVariant = 'outlined',
  hasBorder = false,
  sx = {},
}) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 12,
        px: 4,
        ...(hasBorder && {
          border: '2px dashed',
          borderColor: 'divider',
          borderRadius: 2,
        }),
        ...sx,
      }}
    >
      {icon && (
        <Box sx={{ mb: 2 }}>
          {icon}
        </Box>
      )}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
      )}
      {actionLabel && (onAction || actionHref) && (
        <Button
          variant={actionVariant}
          onClick={onAction}
          href={actionHref}
          sx={{ textTransform: 'none' }}
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  );
}

export default EmptyState;
