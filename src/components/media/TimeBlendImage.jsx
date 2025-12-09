import { useMemo } from 'react';
import Box from '@mui/material/Box';

/**
 * TimeBlendImage 컴포넌트
 *
 * 4개 시간대(낮→저녁→밤→새벽)에 따라 낮/밤 이미지의 opacity를 블렌딩하는 컴포넌트.
 * 두 이미지를 스택으로 렌더링하고 timeline 값에 따라 opacity를 조절한다.
 *
 * 동작 방식:
 * 1. timeline 0-1 값을 4개 시간대로 매핑
 *    - 0.00 ~ 0.25: 낮 (dayOpacity: 1, nightOpacity: 0)
 *    - 0.25 ~ 0.50: 저녁 (낮→밤 전환, dayOpacity: 1→0, nightOpacity: 0→1)
 *    - 0.50 ~ 0.75: 밤 (dayOpacity: 0, nightOpacity: 1)
 *    - 0.75 ~ 1.00: 새벽 (밤→낮 전환, dayOpacity: 0→1, nightOpacity: 1→0)
 * 2. 두 이미지를 absolute 포지션으로 스택 렌더링
 * 3. 계산된 opacity 값으로 CSS transition 없이 즉시 블렌딩
 * 4. 사용자가 타임라인 스크러버를 움직이면 실시간으로 블렌딩 반영
 *
 * Props:
 * @param {string} dayImage - 낮 이미지 소스 [Required]
 * @param {string} nightImage - 밤 이미지 소스 [Required]
 * @param {number} timeline - 시간대 값 (0-1) [Optional, 기본값: 0]
 * @param {string} alt - 이미지 대체 텍스트 [Optional, 기본값: '']
 * @param {string} aspectRatio - 컨테이너 종횡비 [Optional, 기본값: '1/1']
 * @param {string} objectFit - 이미지 맞춤 방식 [Optional, 기본값: 'cover']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TimeBlendImage
 *   dayImage="/images/product-day.jpg"
 *   nightImage="/images/product-night.jpg"
 *   timeline={0.5}
 *   alt="Product"
 * />
 */
export function TimeBlendImage({
  dayImage,
  nightImage,
  timeline = 0,
  alt = '',
  aspectRatio = '1/1',
  objectFit = 'cover',
  sx,
  ...props
}) {
  /**
   * timeline 값(0-1)을 4개 시간대에 따른 opacity 값으로 변환
   *
   * 시간대 구간:
   * - 0.00 ~ 0.25: 낮 (순수 낮 이미지)
   * - 0.25 ~ 0.50: 저녁 (낮→밤 전환)
   * - 0.50 ~ 0.75: 밤 (순수 밤 이미지)
   * - 0.75 ~ 1.00: 새벽 (밤→낮 전환)
   */
  const { dayOpacity, nightOpacity } = useMemo(() => {
    // 구간 경계값
    const DAY_END = 0.25;
    const EVENING_END = 0.5;
    const NIGHT_END = 0.75;

    let day = 1;
    let night = 0;

    if (timeline <= DAY_END) {
      // 낮 구간: 순수 낮 이미지
      day = 1;
      night = 0;
    } else if (timeline <= EVENING_END) {
      // 저녁 구간: 낮→밤 전환
      const progress = (timeline - DAY_END) / (EVENING_END - DAY_END);
      day = 1 - progress;
      night = progress;
    } else if (timeline <= NIGHT_END) {
      // 밤 구간: 순수 밤 이미지
      day = 0;
      night = 1;
    } else {
      // 새벽 구간: 밤→낮 전환
      const progress = (timeline - NIGHT_END) / (1 - NIGHT_END);
      day = progress;
      night = 1 - progress;
    }

    return { dayOpacity: day, nightOpacity: night };
  }, [timeline]);

  // 이미지가 없는 경우 빈 박스 렌더링
  if (!dayImage && !nightImage) {
    return (
      <Box
        sx={ {
          position: 'relative',
          width: '100%',
          aspectRatio,
          backgroundColor: 'grey.200',
          ...sx,
        } }
        { ...props }
      />
    );
  }

  return (
    <Box
      sx={ {
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        backgroundColor: 'grey.900',
        ...sx,
      } }
      { ...props }
    >
      {/* 낮 이미지 (하단 레이어) */}
      { dayImage && (
        <Box
          component="img"
          src={ dayImage }
          alt={ `${alt} - Day` }
          sx={ {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit,
            opacity: dayOpacity,
            // z-index로 레이어 순서 고정 (낮이 항상 아래)
            zIndex: 0,
          } }
        />
      ) }

      {/* 밤 이미지 (상단 레이어) */}
      { nightImage && (
        <Box
          component="img"
          src={ nightImage }
          alt={ `${alt} - Night` }
          sx={ {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit,
            opacity: nightOpacity,
            // z-index로 레이어 순서 고정 (밤이 항상 위)
            zIndex: 1,
          } }
        />
      ) }
    </Box>
  );
}
