import { forwardRef, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import VideoScrubbing from '../media/VideoScrubbing';

/**
 * ScrollVideo 컴포넌트
 *
 * 스크롤 위치 기반 비디오 프레임 시킹 컴포넌트.
 * 우측 하단에 시간 오버레이가 표시되며, 스크롤 위치에 따라
 * 12:00pm ~ 12:00am 범위로 실시간 업데이트됩니다.
 *
 * 동작 방식:
 * 1. 사용자가 스크롤하면 비디오가 프레임 단위로 시킹됨
 * 2. 스크롤 progress(0-1)가 시간(12:00pm-12:00am)으로 매핑됨
 * 3. 우측 하단 오버레이에 현재 시간이 실시간 표시됨
 *
 * Props:
 * @param {string} src - 비디오 소스 경로 [Required]
 * @param {React.RefObject} containerRef - 스크롤 추적용 컨테이너 요소 [Optional]
 * @param {Object} scrollRange - 스크롤 범위 매핑 { start: 0, end: 1 } [Optional]
 * @param {boolean} showTimeOverlay - 시간 오버레이 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showTimeline - 타임라인 값(0-1) 표시 여부 [Optional, 기본값: false]
 * @param {function} onProgressChange - 진행도 변경 콜백 (progress: 0-1) [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ScrollVideo
 *   src="/videos/daylight.mp4"
 *   showTimeOverlay={true}
 * />
 */
const ScrollVideo = forwardRef(function ScrollVideo({
  src,
  containerRef,
  scrollRange = { start: 0, end: 1 },
  showTimeOverlay = true,
  showTimeline = false,
  onProgressChange,
  sx,
  ...props
}, ref) {
  const [progress, setProgress] = useState(0);

  /**
   * progress(0-1)를 12시간제 시간 문자열로 변환
   * 0 = 12:00pm, 1 = 12:00am
   */
  const formatTime = useCallback((progress) => {
    // progress 0-1을 12시간(720분)으로 매핑
    const totalMinutes = Math.round(progress * 720);
    const hours24 = 12 + Math.floor(totalMinutes / 60); // 12-24시
    const minutes = totalMinutes % 60;

    // 24시간제를 12시간제로 변환
    let hours12;
    let period;

    if (hours24 === 12) {
      hours12 = 12;
      period = 'pm';
    } else if (hours24 === 24 || hours24 === 0) {
      hours12 = 12;
      period = 'am';
    } else if (hours24 > 12 && hours24 < 24) {
      hours12 = hours24 - 12;
      period = 'pm';
    } else {
      hours12 = hours24;
      period = 'am';
    }

    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${hours12}:${formattedMinutes}${period}`;
  }, []);

  const handleProgressChange = useCallback((newProgress) => {
    setProgress(newProgress);
    if (onProgressChange) {
      onProgressChange(newProgress);
    }
  }, [onProgressChange]);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      {/* Video Scrubbing */}
      <VideoScrubbing
        src={src}
        containerRef={containerRef}
        scrollRange={scrollRange}
        onProgressChange={handleProgressChange}
      />

      {/* Time Overlay - 우측 하단 */}
      {showTimeOverlay && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            px: 1.5,
            py: 0.75,
            backgroundColor: 'rgba(18, 16, 14, 0.6)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'monospace',
              fontSize: 14,
              fontWeight: 500,
              color: '#F2E9DA',
              letterSpacing: '0.02em',
            }}
          >
            {formatTime(progress)}
          </Typography>
        </Box>
      )}

      {/* Timeline Value Overlay (optional) */}
      {showTimeline && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            px: 1.5,
            py: 0.75,
            backgroundColor: 'rgba(18, 16, 14, 0.6)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'monospace',
              fontSize: 12,
              color: '#F2E9DA',
              opacity: 0.7,
            }}
          >
            {(progress * 100).toFixed(0)}%
          </Typography>
        </Box>
      )}
    </Box>
  );
});

export { ScrollVideo };
export default ScrollVideo;
