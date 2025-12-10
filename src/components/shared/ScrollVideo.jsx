import { forwardRef, useRef, useCallback } from 'react';
import Box from '@mui/material/Box';

import VideoScrubbing from '../media/VideoScrubbing';

/**
 * ScrollVideo 컴포넌트
 *
 * VideoScrubbing을 래핑하여 시간 오버레이를 추가한 컴포넌트.
 * 리렌더링 없이 DOM 직접 업데이트로 오버레이 표시.
 *
 * @param {string} src - 비디오 소스 경로 [Required]
 * @param {React.RefObject} containerRef - 스크롤 추적용 컨테이너 요소 [Optional]
 * @param {boolean} startInView - 뷰포트 상단에서 시작하는 경우 true [Optional, 기본값: false]
 * @param {string} ratio - 비디오 비율 (예: '16/9', '4/3', 'auto') [Optional, 기본값: 'auto']
 * @param {Object} scrollRange - 스크롤 범위 매핑 { start: 0, end: 1 } [Optional]
 * @param {boolean} showTimeOverlay - 시간 오버레이 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showTimeline - 타임라인 값(0-1) 표시 여부 [Optional, 기본값: false]
 * @param {function} onProgressChange - 진행도 변경 콜백 (progress: 0-1) [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 */
const ScrollVideo = forwardRef(function ScrollVideo({
  src,
  containerRef,
  startInView = false,
  ratio = 'auto',
  scrollRange = { start: 0, end: 1 },
  showTimeOverlay = true,
  showTimeline = false,
  onProgressChange,
  sx,
  ...props
}, ref) {
  const timeRef = useRef(null);
  const percentRef = useRef(null);

  /**
   * progress(0-1)를 12시간제 시간 문자열로 변환
   */
  const formatTime = (progress) => {
    const totalMinutes = Math.round(progress * 720);
    const hours24 = 12 + Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    let hours12, period;
    if (hours24 === 12) { hours12 = 12; period = 'pm'; }
    else if (hours24 >= 24) { hours12 = 12; period = 'am'; }
    else { hours12 = hours24 - 12; period = 'pm'; }

    return `${hours12}:${minutes.toString().padStart(2, '0')}${period}`;
  };

  // DOM 직접 업데이트 (리렌더링 없음)
  const handleProgressChange = useCallback((progress) => {
    if (timeRef.current) {
      timeRef.current.textContent = formatTime(progress);
    }
    if (percentRef.current) {
      percentRef.current.textContent = `${(progress * 100).toFixed(0)}%`;
    }
    if (onProgressChange) {
      onProgressChange(progress);
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
        startInView={startInView}
        ratio={ratio}
        scrollRange={scrollRange}
        onProgressChange={handleProgressChange}
      />

      {/* Time Overlay - 우측 하단 (DOM 직접 업데이트) */}
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
          <Box
            component="span"
            ref={timeRef}
            sx={{
              fontFamily: 'monospace',
              fontSize: 14,
              fontWeight: 500,
              color: '#F2E9DA',
              letterSpacing: '0.02em',
            }}
          >
            12:00pm
          </Box>
        </Box>
      )}

      {/* Timeline Value Overlay (DOM 직접 업데이트) */}
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
          <Box
            component="span"
            ref={percentRef}
            sx={{
              fontFamily: 'monospace',
              fontSize: 12,
              color: '#F2E9DA',
              opacity: 0.7,
            }}
          >
            0%
          </Box>
        </Box>
      )}
    </Box>
  );
});

export { ScrollVideo };
export default ScrollVideo;
