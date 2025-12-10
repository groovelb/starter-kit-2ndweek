import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';

/**
 * VideoScrubbing Component
 * 스크롤 위치에 따라 비디오를 프레임 단위로 재생(스크러빙)하는 컴포넌트입니다.
 *
 * 동작 방식:
 * 1. 비디오 상단이 화면 하단에 등장 → progress = 0 (비디오 첫 프레임)
 * 2. 스크롤에 따라 비디오 프레임이 시킹됨
 * 3. 비디오 하단이 화면 상단을 벗어남 → progress = 1 (비디오 마지막 프레임)
 *
 * 스크롤 범위 = windowHeight + videoHeight (비디오가 화면을 완전히 지나가는 거리)
 *
 * @param {string} src - 비디오 소스 경로 [Required]
 * @param {React.RefObject} containerRef - 스크롤 추적용 컨테이너 요소 [Optional]
 * @param {Object} sx - MUI sx 스타일 [Optional]
 * @param {Object} scrollRange - 스크롤 범위 매핑 { start: 0, end: 1 } [Optional]
 * @param {function} onProgressChange - 진행도 변경 콜백 (progress: 0-1) [Optional]
 */
const VideoScrubbing = ({
  src,
  containerRef = null,
  sx = {},
  scrollRange = { start: 0, end: 1 },
  onProgressChange,
  ...props
}) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Initialize video to frame 0 on load
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.currentTime = 0;
    };

    video.addEventListener('loadeddata', handleLoadedData);

    if (video.readyState >= 2) {
      video.currentTime = 0;
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    let animationFrameId = null;
    let lastScrollTime = 0;
    const throttleDelay = 16; // ~60fps

    const updateVideoTime = () => {
      const now = Date.now();
      if (now - lastScrollTime < throttleDelay) {
        animationFrameId = requestAnimationFrame(updateVideoTime);
        return;
      }
      lastScrollTime = now;

      let progress = 0;
      const windowHeight = window.innerHeight;

      if (containerRef && containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;

        // 컨테이너가 화면에 등장해서 완전히 벗어날 때까지 스크러빙
        // rect.top = windowHeight → progress = 0 (상단이 화면 하단에 등장)
        // rect.top = -containerHeight → progress = 1 (하단이 화면 상단을 벗어남)
        const totalScrollRange = windowHeight + containerHeight;
        progress = (windowHeight - rect.top) / totalScrollRange;
      } else {
        // 비디오가 화면에 등장해서 완전히 벗어날 때까지 스크러빙
        const rect = video.getBoundingClientRect();
        const videoHeight = video.offsetHeight;

        // rect.top = windowHeight → progress = 0 (상단이 화면 하단에 등장)
        // rect.top = -videoHeight → progress = 1 (하단이 화면 상단을 벗어남)
        const totalScrollRange = windowHeight + videoHeight;
        progress = (windowHeight - rect.top) / totalScrollRange;
      }

      // Apply scroll range mapping
      const { start, end } = scrollRange;
      progress = (progress - start) / (end - start);

      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Callback
      if (onProgressChange) {
        onProgressChange(progress);
      }

      // Update video time
      if (video.duration) {
        const targetTime = video.duration * progress;
        if (Math.abs(video.currentTime - targetTime) > 0.033) {
          video.currentTime = targetTime;
        }
      }

      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    animationFrameId = requestAnimationFrame(updateVideoTime);

    const handleScroll = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateVideoTime);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, containerRef, scrollRange, onProgressChange]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Video */}
      <Box
        component="video"
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
          position: 'relative',
          zIndex: 0,
          ...sx,
        }}
        {...props}
      >
        <source src={src} type="video/mp4" />
      </Box>
    </Box>
  );
};

export default VideoScrubbing;
