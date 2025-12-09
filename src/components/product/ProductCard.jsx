import { forwardRef, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CustomCard } from '../card/CustomCard';
import { ImageTransition } from '../media/ImageTransition';

/**
 * ProductCard 컴포넌트
 *
 * Lumenstate 제품 카드. 썸네일(낮/밤 크로스페이드), 제품명, 타입 태그, 상태 라벨을 표시한다.
 *
 * 동작 방식:
 * 1. timeline 값(0-1)에 따라 낮/밤 이미지 간 크로스페이드
 * 2. timeline 0 = 낮 이미지, timeline 1 = 밤 이미지
 * 3. 상태 라벨에 조도(lux)·색온도(K) 실시간 표시
 * 4. 카드 클릭 시 onClick 콜백 호출
 *
 * Props:
 * @param {object} product - 제품 데이터 { id, title, type, lux, kelvin, images, video } [Required]
 * @param {number} timeline - 시간대 값 (0-1, 0=낮, 1=밤) [Optional, 기본값: 0]
 * @param {function} onClick - 카드 클릭 핸들러 [Optional]
 * @param {boolean} isSelected - 선택 상태 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductCard
 *   product={products[0]}
 *   timeline={0.5}
 *   onClick={() => handleProductClick(product)}
 * />
 */
const ProductCard = forwardRef(function ProductCard({
  product,
  timeline = 0,
  onClick,
  isSelected = false,
  sx,
  ...props
}, ref) {
  const { title, type, lux, kelvin, images } = product;

  /**
   * timeline 값에 따른 이미지 인덱스 결정
   * 0-0.5: 낮 이미지 (index 0)
   * 0.5-1: 밤 이미지 (index 1)
   */
  const activeImageIndex = useMemo(() => {
    return timeline >= 0.5 ? 1 : 0;
  }, [timeline]);

  /**
   * 이미지 배열 정규화
   */
  const normalizedImages = useMemo(() => {
    if (!images || images.length === 0) return [];
    return images.map((src, idx) => ({
      src,
      alt: `${title} - ${idx === 0 ? 'Day' : 'Night'}`,
    }));
  }, [images, title]);

  /**
   * 타입 태그 라벨
   */
  const typeLabel = useMemo(() => {
    const typeMap = {
      ceiling: 'Ceiling',
      stand: 'Stand',
      wall: 'Wall',
      desk: 'Desk',
    };
    return typeMap[type] || type;
  }, [type]);

  /**
   * 미디어 슬롯 - ImageTransition으로 낮/밤 크로스페이드
   */
  const renderMediaSlot = () => {
    if (normalizedImages.length === 0) {
      return (
        <Box
          sx={ {
            width: '100%',
            height: '100%',
            backgroundColor: 'grey.200',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          } }
        >
          <Typography variant="caption" color="text.secondary">
            No image
          </Typography>
        </Box>
      );
    }

    return (
      <ImageTransition
        images={ normalizedImages }
        activeIndex={ activeImageIndex }
        transition="fade"
        duration={ 600 }
        easing="cubic-bezier(0.37, 0, 0.63, 1)"
        aspectRatio="1/1"
        objectFit="cover"
        sx={ { width: '100%', height: '100%' } }
      />
    );
  };

  return (
    <CustomCard
      ref={ ref }
      layout="vertical"
      mediaRatio="1/1"
      mediaSlot={ renderMediaSlot() }
      contentPadding="sm"
      variant="outlined"
      isInteractive
      onClick={ onClick }
      sx={ {
        border: isSelected ? '2px solid' : '1px solid',
        borderColor: isSelected ? 'primary.main' : 'divider',
        ...sx,
      } }
      { ...props }
    >
      {/* 제품명 */}
      <Typography
        variant="subtitle2"
        sx={ {
          fontWeight: 600,
          mb: 0.5,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        } }
      >
        { title }
      </Typography>

      {/* 상태 라벨 (조도·색온도) */}
      <Typography
        variant="caption"
        sx={ {
          fontFamily: 'monospace',
          color: 'text.secondary',
          mb: 1,
        } }
      >
        { lux } lx · { kelvin } K
      </Typography>

      {/* 타입 태그 */}
      <Box sx={ { display: 'flex', gap: 0.5 } }>
        <Typography
          variant="caption"
          sx={ {
            px: 1,
            py: 0.25,
            backgroundColor: 'grey.200',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          } }
        >
          { typeLabel }
        </Typography>
      </Box>
    </CustomCard>
  );
});

export { ProductCard };
