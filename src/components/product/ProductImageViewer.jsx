import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { TimeBlendImage } from '../media/TimeBlendImage';
import { useTimeline } from '../../hooks/useTimeline';

/**
 * ProductImageViewer 컴포넌트
 *
 * 제품 이미지 뷰어. 낮/밤 이미지를 TimeBlendImage로 블렌딩.
 * 이미지는 원본 비율을 유지하며, 하단에 overlay로 슬라이더 표시.
 *
 * 동작 방식:
 * 1. 배경: TimeBlendImage (원본 비율 유지, 낮/밤 블렌딩)
 * 2. 오버레이: 하단 그래디언트 + TimelineSlider
 * 3. 슬라이더 조작 시 이미지가 실시간으로 블렌딩
 *
 * Props:
 * @param {Array} images - 제품 이미지 배열 [dayImage, nightImage] [Required]
 * @param {string} productName - 제품명 (alt 텍스트용) [Optional]
 * @param {number} lux - 제품 조도 값 [Optional]
 * @param {number} kelvin - 제품 색온도 값 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductImageViewer
 *   images={[dayImage, nightImage]}
 *   productName="Lumen Desk Pro"
 *   lux={260}
 *   kelvin={3200}
 * />
 */
const ProductImageViewer = forwardRef(function ProductImageViewer(
  {
    images = [],
    productName = 'Product',
    lux,
    kelvin,
    ...props
  },
  ref
) {
  const { timeline } = useTimeline();

  // 낮/밤 이미지 분리
  const dayImage = images[0] || null;
  const nightImage = images[1] || images[0] || null;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        width: '100%',
      }}
      {...props}
    >
      {/* 배경 이미지 - TimeBlendImage (원본 비율 유지) */}
      <TimeBlendImage
        dayImage={dayImage}
        nightImage={nightImage}
        timeline={timeline}
        alt={productName}
        aspectRatio="auto"
        objectFit="cover"
        sx={ { width: '100%', height: '100%' } }
      />

      {/* Lux / Kelvin 정보 - 우측 상단 */}
      {(lux || kelvin) && (
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            zIndex: 10,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'monospace',
              fontSize: '0.8125rem',
              color: '#F2E9DA',
            }}
          >
            {lux && `${lux} lx`}
            {lux && kelvin && ' · '}
            {kelvin && `${kelvin} K`}
          </Typography>
        </Box>
      )}
    </Box>
  );
});

export { ProductImageViewer };
export default ProductImageViewer;
