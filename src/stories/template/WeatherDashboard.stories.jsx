/**
 * Weather Dashboard Template Story
 *
 * 테마 베리에이션 테스트를 위한 날씨 대시보드 템플릿입니다.
 * Flat Design, Material Design, Glass Morphism, Monoline Dark 테마를 전환하며 비교할 수 있습니다.
 */

import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import WeatherDashboard from '../../components/weather/WeatherDashboard';
import { themes, themeMeta, getTheme } from '../../styles/themes';

export default {
  title: 'Template/WeatherDashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Weather Dashboard

테마 베리에이션을 테스트하기 위한 날씨 대시보드 템플릿입니다.

### 지원 테마

| 테마 | 설명 | 모드 |
|------|------|------|
| **Liquid Glass** | SVG 필터로 물결치는 젤리 유리 효과 | Dark |
| **Flat Design** | Metro 스타일 순수 플랫, 그림자 없음 | Light |
| **Material Design** | 라운드 카드와 미세한 elevation의 모던 머티리얼 | Light |
| **Glass Morphism** | 반투명 유리 효과와 Aurora 그라데이션 | Light |
| **Monoline Dark** | 미니멀한 라인 기반 다크 UI | Dark |
| **Neubrutalism** | 대담한 하드 섀도우와 두꺼운 테두리 | Light |

### 사용 방법

Controls 패널에서 \`theme\` 옵션을 변경하여 테마를 전환할 수 있습니다.
각 테마는 동일한 컴포넌트를 완전히 다른 비주얼로 렌더링합니다.
        `,
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['pixel-modernism', 'color-pixel', 'grey-3d', 'aqua', 'skeuomorphism', 'flat', 'material', 'neubrutalism', 'monoline-dark', 'glassmorphism', 'liquid-glass'],
      description: '적용할 테마를 선택합니다',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pixel-modernism' },
      },
    },
  },
};

/**
 * 테마 스위처 UI 컴포넌트
 */
const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const theme = getTheme(currentTheme);
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={ {
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 9999,
      } }
    >
      <ToggleButtonGroup
        value={ currentTheme }
        exclusive
        onChange={ (_, value) => value && onThemeChange(value) }
        size="small"
        sx={ {
          flexWrap: 'nowrap', // 무조건 1줄
          maxWidth: 'none', // 너비 제한 해제
          justifyContent: 'flex-end',
          '& .MuiToggleButton-root': {
            color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
            borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
            px: 2,
            py: 0.75,
            fontSize: '0.75rem',
            whiteSpace: 'nowrap', // 텍스트 줄바꿈 방지
            backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(8px)',
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            },
          },
        } }
      >
        <ToggleButton value="pixel-modernism">Pixel</ToggleButton>
        <ToggleButton value="color-pixel">Color Pixel</ToggleButton>
        <ToggleButton value="grey-3d">Grey 3D</ToggleButton>
        <ToggleButton value="aqua">Aqua</ToggleButton>
        <ToggleButton value="skeuomorphism">Skeuomorphism</ToggleButton>
        <ToggleButton value="flat">Flat</ToggleButton>
        <ToggleButton value="material">Material</ToggleButton>
        <ToggleButton value="neubrutalism">Brutal</ToggleButton>
        <ToggleButton value="monoline-dark">Monoline</ToggleButton>
        <ToggleButton value="glassmorphism">Glass</ToggleButton>
        <ToggleButton value="liquid-glass">Liquid Glass</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

/**
 * 테마가 적용된 대시보드 래퍼
 */
const ThemedDashboard = ({ themeName }) => {
  const selectedTheme = getTheme(themeName);

  return (
    <ThemeProvider theme={ selectedTheme }>
      <CssBaseline />
      <WeatherDashboard />
    </ThemeProvider>
  );
};

/**
 * Default - 테마 선택 가능
 */
export const Default = {
  args: {
    theme: 'liquid-glass',
  },
  render: ({ theme }) => <ThemedDashboard themeName={ theme } />,
};

import GlobalStyles from '@mui/material/GlobalStyles';

/**
 * 인터랙티브 대시보드 컴포넌트 (useState 사용을 위해 분리)
 */
function InteractiveDashboard() {
  const [currentTheme, setCurrentTheme] = useState('pixel-modernism');
  const selectedTheme = getTheme(currentTheme);

  return (
    <ThemeProvider theme={ selectedTheme }>
      <CssBaseline />
      {/* Pixelify Sans Font Injection */}
      <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <GlobalStyles styles={ { body: { transition: 'background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1)' } } } />
      <ThemeSwitcher
        currentTheme={ currentTheme }
        onThemeChange={ setCurrentTheme }
      />
      <WeatherDashboard />
    </ThemeProvider>
  );
}

/**
 * Interactive - 인터랙티브 테마 스위처 포함
 */
export const Interactive = {
  render: () => <InteractiveDashboard />,
};

/**
 * Pixel Modernism 테마
 */
export const PixelModernism = {
  render: () => <ThemedDashboard themeName="pixel-modernism" />,
  parameters: {
    docs: {
      description: {
        story: '매킨토시 스타일의 흑백 픽셀 GUI 테마입니다. 1px 그리드와 모노크롬 팔레트가 특징입니다.',
      },
    },
  },
};

/**
 * Color Pixel 테마
 */
export const ColorPixel = {
  render: () => <ThemedDashboard themeName="color-pixel" />,
  parameters: {
    docs: {
      description: {
        story: 'Apple IIgs 스타일의 16컬러 레트로 GUI 테마입니다. 레인보우 Apple 컬러와 디더링 패턴이 특징입니다.',
      },
    },
  },
};

/**
 * Grey 3D 테마
 */
export const Grey3D = {
  render: () => <ThemedDashboard themeName="grey-3d" />,
  parameters: {
    docs: {
      description: {
        story: 'Mac OS 8 Platinum 스타일의 3D 그레이 UI 테마입니다. 입체 버튼, 줄무늬 타이틀바가 특징입니다.',
      },
    },
  },
};

/**
 * Aqua 테마
 */
export const Aqua = {
  render: () => <ThemedDashboard themeName="aqua" />,
  parameters: {
    docs: {
      description: {
        story: 'Mac OS X 10.0 Aqua 스타일의 젤 버튼과 파란 그라디언트 UI 테마입니다.',
      },
    },
  },
};

/**
 * Liquid Glass 테마
 */
export const LiquidGlass = {
  render: () => <ThemedDashboard themeName="liquid-glass" />,
  parameters: {
    docs: {
      description: {
        story: 'SVG Distortion Filter와 Specular highlight를 사용한 액체 유리 질감 테마입니다.',
      },
    },
  },
};

/**
 * Flat Design 테마
 */
export const FlatDesign = {
  render: () => <ThemedDashboard themeName="flat" />,
  parameters: {
    docs: {
      description: {
        story: 'Microsoft Metro/Windows 8 스타일의 순수 플랫 디자인입니다. 그림자 없음, 솔리드 컬러, 대담한 타이포그래피가 특징입니다.',
      },
    },
  },
};

/**
 * Material Design 테마
 */
export const MaterialDesign = {
  render: () => <ThemedDashboard themeName="material" />,
  parameters: {
    docs: {
      description: {
        story: '클린하고 기능적인 구글 머티리얼 디자인 테마입니다. Sharp corners와 subtle shadows가 특징입니다.',
      },
    },
  },
};

/**
 * Glass Morphism 테마
 */
export const GlassMorphism = {
  render: () => <ThemedDashboard themeName="glassmorphism" />,
  parameters: {
    docs: {
      description: {
        story: '반투명 유리 효과와 Aurora 그라데이션이 특징인 몽환적인 테마입니다. backdrop-filter blur와 부드러운 곡선을 사용합니다.',
      },
    },
  },
};

/**
 * Monoline Dark 테마
 */
export const MonolineDark = {
  render: () => <ThemedDashboard themeName="monoline-dark" />,
  parameters: {
    docs: {
      description: {
        story: '미니멀한 라인 기반의 다크 UI 테마입니다. 채움 없이 1px 테두리만 사용하며 Lime accent가 포인트입니다.',
      },
    },
  },
};

/**
 * Neubrutalism 테마
 */
export const Neubrutalism = {
  render: () => <ThemedDashboard themeName="neubrutalism" />,
  parameters: {
    docs: {
      description: {
        story: '브루탈리즘에서 영감받은 대담한 UI 테마입니다. 하드 섀도우(blur 없음), 두꺼운 검정 테두리, 고채도 비비드 컬러가 특징입니다.',
      },
    },
  },
};

/**
 * Skeuomorphism 테마
 */
export const Skeuomorphism = {
  render: () => <ThemedDashboard themeName="skeuomorphism" />,
  parameters: {
    docs: {
      description: {
        story: '가죽과 유리 질감, 음각/양각 텍스트 효과가 특징인 클래식 스큐어모피즘 테마입니다.',
      },
    },
  },
};

/**
 * 테마 비교 - 5개 테마 나란히
 */
export const ThemeComparison = {
  render: () => (
    <Box sx={ { p: 2, backgroundColor: '#1a1a1a', minHeight: '100vh' } }>
      <Typography
        variant="h4"
        sx={ {
          color: '#fff',
          textAlign: 'center',
          mb: 4,
          fontFamily: '"Space Mono", monospace',
        } }
      >
        Theme Comparison
      </Typography>
      <Box
        sx={ {
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' },
          gap: 2,
        } }
      >
        { Object.keys(themes).map((themeName) => (
          <Box
            key={ themeName }
            sx={ {
              border: '1px solid #333',
              borderRadius: 1,
              overflow: 'hidden',
            } }
          >
            <Box
              sx={ {
                p: 1.5,
                backgroundColor: '#222',
                borderBottom: '1px solid #333',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              } }
            >
              <Typography
                variant="subtitle2"
                sx={ { color: '#fff', fontFamily: 'monospace', fontSize: '0.75rem' } }
              >
                { themeMeta[themeName]?.name }
              </Typography>
              <Chip
                label={ themeMeta[themeName]?.mode }
                size="small"
                sx={ {
                  height: 20,
                  fontSize: '0.625rem',
                  backgroundColor: themeMeta[themeName]?.mode === 'dark' ? '#333' : '#eee',
                  color: themeMeta[themeName]?.mode === 'dark' ? '#fff' : '#000',
                } }
              />
            </Box>
            <Box
              sx={ {
                overflow: 'auto',
                transform: 'scale(0.6)',
                transformOrigin: 'top left',
                width: '166.67%',
                height: { xs: '666px', lg: '1000px' },
              } }
            >
              <ThemedDashboard themeName={ themeName } />
            </Box>
          </Box>
        )) }
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: '다섯 가지 테마를 나란히 비교할 수 있는 뷰입니다.',
      },
    },
  },
};
