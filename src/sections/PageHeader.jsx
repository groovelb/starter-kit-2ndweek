import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * PageHeader 섹션 컴포넌트
 *
 * 페이지 상단에 표시되는 헤더 영역.
 * 제목, 부제목(설명), 액션 버튼을 포함하는 공통 레이아웃.
 *
 * Props:
 * @param {string} title - 페이지 메인 타이틀 [Required]
 * @param {string} subtitle - 부제목 또는 설명 텍스트 [Optional]
 * @param {string} actionLabel - 액션 버튼 레이블 [Optional]
 * @param {React.ReactNode} actionIcon - 버튼 시작 아이콘 [Optional]
 * @param {function} onAction - 액션 버튼 클릭 핸들러 [Optional]
 * @param {string} actionVariant - 버튼 variant (contained, outlined) [Optional, 기본값: 'contained']
 * @param {React.ReactNode} actions - 커스텀 액션 영역 (버튼 대신 사용) [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <PageHeader
 *   title="Archive"
 *   subtitle="128 references in your collection"
 *   actionLabel="Upload Reference"
 *   actionIcon={<AddIcon />}
 *   onAction={() => setShowUpload(true)}
 * />
 */
export function PageHeader({
  title,
  subtitle,
  actionLabel,
  actionIcon,
  onAction,
  actionVariant = 'contained',
  actions,
  sx = {},
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        mb: 4,
        gap: 2,
        flexWrap: 'wrap',
        ...sx,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            letterSpacing: '-0.02em',
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Box>
      {actions ? (
        actions
      ) : actionLabel && onAction ? (
        <Button
          variant={actionVariant}
          startIcon={actionIcon}
          onClick={onAction}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
            py: 1.25,
            borderRadius: 2,
          }}
        >
          {actionLabel}
        </Button>
      ) : null}
    </Box>
  );
}

export default PageHeader;
