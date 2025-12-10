import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as LucideIcons from 'lucide-react';
import { SPACING } from '../../styles/tokens';

/**
 * BrandValueCard 컴포넌트
 *
 * 브랜드 가치를 아이콘, 제목, 설명으로 표현하는 카드 컴포넌트.
 * 수직 레이아웃: Icon > Title > Description > DetailedDescription
 *
 * 동작 방식:
 * 1. icon prop에 해당하는 lucide-react 아이콘을 동적으로 로드
 * 2. 아이콘(상단) → 제목(굵게) → 짧은 설명 → 상세 설명 순서로 수직 배치
 * 3. padding, gap 등 간격은 SPACING 토큰 사용
 *
 * Props:
 * @param {string} icon - lucide-react 아이콘 이름 (예: 'Sun', 'Moon', 'CircleHalf') [Required]
 * @param {string} title - 브랜드 가치 제목 [Required]
 * @param {string} description - 짧은 설명 [Required]
 * @param {string} detailedDescription - 상세 설명 [Optional]
 * @param {number} iconSize - 아이콘 크기 (px) [Optional, 기본값: 32]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <BrandValueCard
 *   icon="Sun"
 *   title="Immanence"
 *   description="Light quietly residing within the space."
 *   detailedDescription="Our luminaires merge with architecture..."
 * />
 */
const BrandValueCard = forwardRef(function BrandValueCard({
  icon,
  title,
  description,
  detailedDescription,
  iconSize = 32,
  sx,
  ...props
}, ref) {
  // lucide-react 아이콘 동적 로드
  const IconComponent = LucideIcons[icon];

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: SPACING.inset.md,
        ...sx,
      }}
      {...props}
    >
      {/* 아이콘 */}
      {IconComponent && (
        <Box sx={{ mb: SPACING.stack.sm }}>
          <IconComponent
            size={iconSize}
            strokeWidth={1.5}
            color="currentColor"
          />
        </Box>
      )}

      {/* 제목 */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: SPACING.stack.xs,
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>

      {/* 짧은 설명 */}
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mb: SPACING.stack.sm,
        }}
      >
        {description}
      </Typography>

      {/* 상세 설명 */}
      {detailedDescription && (
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
          }}
        >
          {detailedDescription}
        </Typography>
      )}
    </Box>
  );
});

export { BrandValueCard };
export default BrandValueCard;
