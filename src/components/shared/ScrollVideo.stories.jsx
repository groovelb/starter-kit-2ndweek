import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ScrollVideo } from './ScrollVideo';

import landscapeVideo from '../../assets/landscape/landscape-motion.mp4';
import productVideo from '../../assets/product/1-motion.mp4';

export default {
  title: 'Custom Component/ScrollVideo',
  component: ScrollVideo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ScrollVideo

스크롤 위치 기반 비디오 프레임 시킹 컴포넌트.

### 기능
- 스크롤 위치에 따라 비디오가 프레임 단위로 시킹
- 우측 하단에 시간 오버레이 표시 (12:00pm ~ 12:00am)
- 타임라인 퍼센트 오버레이 옵션
- VideoScrubbing 컴포넌트 기반

### 시간 매핑
| Progress | 시간 |
|----------|------|
| 0 | 12:00pm |
| 0.25 | 3:00pm |
| 0.5 | 6:00pm |
| 0.75 | 9:00pm |
| 1 | 12:00am |
        `,
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: '비디오 소스 경로',
    },
    showTimeOverlay: {
      control: 'boolean',
      description: '시간 오버레이 표시 여부',
    },
    showTimeline: {
      control: 'boolean',
      description: '타임라인 % 표시 여부',
    },
    scrollRange: {
      control: 'object',
      description: '스크롤 범위 매핑 { start, end }',
    },
    onProgressChange: {
      action: 'progressChanged',
      description: '진행도 변경 콜백',
    },
  },
};

/**
 * 기본 사용법 - 스크롤하여 시간 변화 확인
 */
export const Default = {
  args: {
    src: landscapeVideo,
    showTimeOverlay: true,
    showTimeline: false,
  },
  render: (args) => (
    <Box sx={{ height: '300vh' }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.default',
        }}
      >
        <ScrollVideo {...args} sx={{ maxWidth: 800 }} />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          px: 2,
          py: 1,
          backgroundColor: 'rgba(18, 16, 14, 0.8)',
          color: '#F2E9DA',
          fontSize: 12,
          fontFamily: 'monospace',
        }}
      >
        Scroll down to scrub video
      </Box>
    </Box>
  ),
};

/**
 * 시간 + 타임라인 퍼센트 모두 표시
 */
export const WithTimeline = {
  args: {
    src: landscapeVideo,
    showTimeOverlay: true,
    showTimeline: true,
  },
  render: (args) => (
    <Box sx={{ height: '300vh' }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.default',
        }}
      >
        <ScrollVideo {...args} sx={{ maxWidth: 800 }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: '우측 하단에 시간, 좌측 하단에 타임라인 퍼센트를 함께 표시합니다.',
      },
    },
  },
};

/**
 * 오버레이 없이 비디오만
 */
export const NoOverlay = {
  args: {
    src: productVideo,
    showTimeOverlay: false,
    showTimeline: false,
  },
  render: (args) => (
    <Box sx={{ height: '300vh' }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#12100E',
        }}
      >
        <ScrollVideo {...args} sx={{ maxWidth: 600 }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: '오버레이 없이 순수 비디오 스크러빙만 사용하는 예시입니다.',
      },
    },
  },
};

/**
 * 커스텀 스크롤 범위
 */
export const CustomScrollRange = {
  args: {
    src: landscapeVideo,
    showTimeOverlay: true,
    showTimeline: true,
    scrollRange: { start: 0.2, end: 0.8 },
  },
  render: (args) => (
    <Box sx={{ height: '400vh' }}>
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Scroll down to start
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.default',
        }}
      >
        <ScrollVideo {...args} sx={{ maxWidth: 800 }} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'scrollRange를 조절하여 스크롤의 20%-80% 구간에서만 비디오가 재생되도록 설정한 예시입니다.',
      },
    },
  },
};

/**
 * 컨테이너 기준 스크롤
 */
export const WithContainerRef = {
  render: function ContainerRefDemo() {
    const containerRef = useRef(null);

    return (
      <Box sx={{ height: '400vh' }}>
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            Scroll to container section
          </Typography>
        </Box>
        <Box
          ref={containerRef}
          sx={{
            height: '200vh',
            backgroundColor: '#12100E',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            pt: 8,
          }}
        >
          <ScrollVideo
            src={landscapeVideo}
            containerRef={containerRef}
            showTimeOverlay={true}
            sx={{ maxWidth: 900, position: 'sticky', top: 40 }}
          />
        </Box>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'containerRef를 사용하여 특정 컨테이너 요소를 기준으로 스크롤 진행도를 계산합니다.',
      },
    },
  },
};
