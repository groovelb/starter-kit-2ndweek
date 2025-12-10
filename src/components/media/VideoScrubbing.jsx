import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';

/**
 * VideoScrubbing Component
 * 스크롤 위치에 따라 비디오를 프레임 단위로 재생(스크러빙)하는 컴포넌트입니다.
 *
 * 동작 방식:
 * 1. 컴포넌트가 화면 하단에 등장하는 순간 스크러빙 시작 (progress = 0)
 * 2. 스크롤에 따라 비디오 프레임이 시킹됨
 * 3. 컴포넌트 상단이 화면 상단에 도달하면 스크러빙 완료 (progress = 1)
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
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;

      if (containerRef && containerRef.current) {
        const container = containerRef.current;
        const containerOffsetTop = container.offsetTop;

        // 컨테이너가 화면 하단에 등장하는 시점부터 스크러빙 시작
        // 시작점: 컨테이너 상단이 화면 하단에 닿을 때 (scrollY + windowHeight = containerOffsetTop)
        // 끝점: 컨테이너 상단이 화면 상단에 닿을 때 (scrollY = containerOffsetTop)
        const startPoint = containerOffsetTop - windowHeight;
        const range = windowHeight;

        progress = (scrollY - startPoint) / range;
      } else {
        const videoOffsetTop = video.offsetTop;

        // 비디오가 화면 하단에 등장하는 시점부터 스크러빙 시작
        // 시작점: 비디오 상단이 화면 하단에 닿을 때
        // 끝점: 비디오 상단이 화면 상단에 닿을 때
        const startPoint = videoOffsetTop - windowHeight;
        const range = windowHeight;

        progress = (scrollY - startPoint) / range;
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
