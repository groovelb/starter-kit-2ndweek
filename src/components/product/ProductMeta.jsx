import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

/**
 * ProductMeta 컴포넌트
 *
 * 제품 메타 정보 표시. Item Number, Lead Time, Est. Ship Date 등.
 * 레퍼런스 이미지의 상품 상세 메타 정보 영역 스타일 적용.
 *
 * 동작 방식:
 * 1. 라벨-값 쌍으로 메타 정보 표시
 * 2. 구분선으로 상단과 분리
 * 3. 좌측 정렬, 일관된 타이포그래피
 *
 * Props:
 * @param {string} itemNumber - 제품 번호 (예: FA-100318) [Optional]
 * @param {string} leadTime - 리드 타임 (예: 12 Weeks) [Optional]
 * @param {string} shipDate - 예상 배송일 (예: March 5, 2026) [Optional]
 * @param {boolean} showDivider - 상단 구분선 표시 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductMeta
 *   itemNumber="FA-100318"
 *   leadTime="12 Weeks"
 *   shipDate="March 5, 2026"
 * />
 */
const ProductMeta = forwardRef(function ProductMeta(
  {
    itemNumber,
    leadTime,
    shipDate,
    showDivider = true,
    sx = {},
    ...props
  },
  ref
) {
  // 표시할 메타 정보가 없으면 렌더링하지 않음
  if (!itemNumber && !leadTime && !shipDate) {
    return null;
  }

  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {showDivider && (
        <Divider sx={{ mb: 2 }} />
      )}

      {/* 메타 정보 그리드 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 1,
          rowGap: 0.75,
        }}
      >
        {/* Item Number */}
        {itemNumber && (
          <>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.8125rem',
              }}
            >
              Item Number:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.primary',
                fontSize: '0.8125rem',
                fontFamily: 'monospace',
              }}
            >
              {itemNumber}
            </Typography>
          </>
        )}

        {/* Lead Time */}
        {leadTime && (
          <>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.8125rem',
              }}
            >
              Lead Time:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.primary',
                fontSize: '0.8125rem',
              }}
            >
              {leadTime}
            </Typography>
          </>
        )}

        {/* Est. Ship Date */}
        {shipDate && (
          <>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.8125rem',
              }}
            >
              Est. Ship Date:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.primary',
                fontSize: '0.8125rem',
              }}
            >
              {shipDate}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
});

export default ProductMeta;
