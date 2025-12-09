/**
 * Theme Configuration
 *
 * MUI 테마의 모든 디자인 토큰을 명시적으로 정의합니다.
 * 기본값과 동일하더라도 학습 목적으로 모든 키를 명시합니다.
 *
 * ## 토큰 구조
 * 1. palette     - 색상 시스템
 * 2. typography  - 타이포그래피
 * 3. spacing     - 간격 (8px 그리드)
 * 4. shape       - 모양 (borderRadius)
 * 5. shadows     - 그림자 (25단계)
 * 6. breakpoints - 반응형 브레이크포인트
 * 7. zIndex      - 레이어 순서
 * 8. transitions - 애니메이션 전환
 * 9. components  - 컴포넌트 오버라이드
 */

import { createTheme } from '@mui/material/styles';

// ============================================================
// 1. Palette (색상 토큰)
// ============================================================
const palette = {
  // 테마 모드
  mode: 'light',

  // 브랜드 Primary 색상
  primary: {
    light: '#6666FF',
    main: '#0000FF',
    dark: '#0000B2',
    contrastText: '#FFFFFF',
  },

  // Secondary 색상
  secondary: {
    light: '#546E7A',     // blueGrey[600]
    main: '#263238',      // blueGrey[900]
    dark: '#1a252b',
    contrastText: '#FFFFFF',
  },

  // 상태 색상: Error
  error: {
    light: '#EF5350',
    main: '#D32F2F',
    dark: '#C62828',
    contrastText: '#FFFFFF',
  },

  // 상태 색상: Warning
  warning: {
    light: '#FF9800',
    main: '#ED6C02',
    dark: '#E65100',
    contrastText: '#FFFFFF',
  },

  // 상태 색상: Info
  info: {
    light: '#03A9F4',
    main: '#0288D1',
    dark: '#01579B',
    contrastText: '#FFFFFF',
  },

  // 상태 색상: Success
  success: {
    light: '#4CAF50',
    main: '#2E7D32',
    dark: '#1B5E20',
    contrastText: '#FFFFFF',
  },

  // Grey 스케일 (MUI 기본값 명시)
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#F5F5F5',
    A200: '#EEEEEE',
    A400: '#BDBDBD',
    A700: '#616161',
  },

  // 텍스트 색상
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },

  // 배경 색상
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },

  // 구분선
  divider: 'rgba(0, 0, 0, 0.12)',

  // 액션 상태 색상
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },

  // 공통 색상 (MUI 기본값)
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },

  // 색상 모드별 채널값 (CSS 변수용)
  contrastThreshold: 3,
  tonalOffset: 0.2,
};

// ============================================================
// 2. Typography (타이포그래피 토큰)
// ============================================================
const typography = {
  // 폰트 패밀리
  fontFamily: [
    '"Pretendard Variable"',
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    '"Helvetica Neue"',
    '"Segoe UI"',
    '"Apple SD Gothic Neo"',
    '"Noto Sans KR"',
    '"Malgun Gothic"',
    'sans-serif',
  ].join(','),

  // 폰트 크기 기준
  fontSize: 14,           // 기본 폰트 크기 (px)
  htmlFontSize: 16,       // html 루트 폰트 크기 (rem 계산 기준)

  // 폰트 굵기
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // h1: 페이지 메인 타이틀
  h1: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 900,
    fontSize: '2.5rem',       // 40px
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },

  // h2: 섹션 타이틀
  h2: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 900,
    fontSize: '2rem',         // 32px
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },

  // h3: 서브섹션 타이틀
  h3: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 800,
    fontSize: '1.75rem',      // 28px
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },

  // h4: 카드 타이틀
  h4: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',       // 24px
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },

  // h5: 작은 타이틀
  h5: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: '1.25rem',      // 20px
    lineHeight: 1.4,
    letterSpacing: '0',
  },

  // h6: 가장 작은 타이틀
  h6: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 600,
    fontSize: '1.125rem',     // 18px
    lineHeight: 1.4,
    letterSpacing: '0',
  },

  // subtitle1: 강조된 본문
  subtitle1: {
    fontSize: '1rem',         // 16px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },

  // subtitle2: 작은 강조 본문
  subtitle2: {
    fontSize: '0.875rem',     // 14px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },

  // body1: 기본 본문
  body1: {
    fontSize: '1rem',         // 16px
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
  },

  // body2: 작은 본문
  body2: {
    fontSize: '0.875rem',     // 14px
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
  },

  // button: 버튼 텍스트
  button: {
    fontSize: '0.875rem',     // 14px
    fontWeight: 600,
    lineHeight: 1.75,
    letterSpacing: '0.02em',
    textTransform: 'none',    // 대문자 변환 비활성화
  },

  // caption: 캡션, 힌트 텍스트
  caption: {
    fontSize: '0.75rem',      // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
  },

  // overline: 레이블, 태그
  overline: {
    fontSize: '0.75rem',      // 12px
    fontWeight: 600,
    lineHeight: 2,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
};

// ============================================================
// 3. Spacing (간격 토큰)
// ============================================================
// 기본 단위: 8px
// 사용법: theme.spacing(1) = 8px, theme.spacing(2) = 16px
// sx prop: { m: 2, p: 3 } = margin: 16px, padding: 24px
//
// MUI Spacing Scale (value × 8px):
// ┌────────┬────────┬─────────────────────────────┐
// │ Value  │ Pixel  │ 용도                        │
// ├────────┼────────┼─────────────────────────────┤
// │ 0      │ 0px    │ 간격 없음                   │
// │ 0.5    │ 4px    │ 최소 간격, 아이콘-텍스트    │
// │ 1      │ 8px    │ 인라인 요소 간격            │
// │ 1.5    │ 12px   │ 작은 패딩                   │
// │ 2      │ 16px   │ 기본 간격, 컴포넌트 패딩    │
// │ 2.5    │ 20px   │ 중간 패딩                   │
// │ 3      │ 24px   │ 카드 내부 패딩              │
// │ 4      │ 32px   │ 섹션 간격                   │
// │ 5      │ 40px   │ 큰 섹션 간격                │
// │ 6      │ 48px   │ 페이지 패딩                 │
// │ 7      │ 56px   │ 대형 간격                   │
// │ 8      │ 64px   │ 헤더 높이                   │
// │ 9      │ 72px   │ 대형 패딩                   │
// │ 10     │ 80px   │ 페이지 상단                 │
// │ 11     │ 88px   │ 대형 마진                   │
// │ 12     │ 96px   │ 페이지 최대 패딩            │
// └────────┴────────┴─────────────────────────────┘
const spacing = 8;

// ============================================================
// 4. Shape (모양 토큰)
// ============================================================
const shape = {
  borderRadius: 0,  // Sharp corners (0px)
};

// ============================================================
// 5. Shadows (그림자 토큰 - 25단계)
// ============================================================
// MUI 기본 shadows 배열 (elevation 0-24)
// 커스텀: offset 없이 blur만 사용하는 dimmed shadow
const shadows = [
  'none',                                           // 0
  '0 0 12px rgba(0, 0, 0, 0.06)',                  // 1 - sm
  '0 0 14px rgba(0, 0, 0, 0.07)',                  // 2
  '0 0 16px rgba(0, 0, 0, 0.08)',                  // 3 - md
  '0 0 18px rgba(0, 0, 0, 0.09)',                  // 4
  '0 0 20px rgba(0, 0, 0, 0.10)',                  // 5 - lg
  '0 0 22px rgba(0, 0, 0, 0.11)',                  // 6
  '0 0 24px rgba(0, 0, 0, 0.12)',                  // 7 - xl
  '0 0 26px rgba(0, 0, 0, 0.13)',                  // 8
  '0 0 28px rgba(0, 0, 0, 0.14)',                  // 9
  '0 0 30px rgba(0, 0, 0, 0.15)',                  // 10
  '0 0 32px rgba(0, 0, 0, 0.16)',                  // 11
  '0 0 34px rgba(0, 0, 0, 0.17)',                  // 12
  '0 0 36px rgba(0, 0, 0, 0.18)',                  // 13
  '0 0 38px rgba(0, 0, 0, 0.19)',                  // 14
  '0 0 40px rgba(0, 0, 0, 0.20)',                  // 15
  '0 0 42px rgba(0, 0, 0, 0.21)',                  // 16
  '0 0 44px rgba(0, 0, 0, 0.22)',                  // 17
  '0 0 46px rgba(0, 0, 0, 0.23)',                  // 18
  '0 0 48px rgba(0, 0, 0, 0.24)',                  // 19
  '0 0 50px rgba(0, 0, 0, 0.25)',                  // 20
  '0 0 52px rgba(0, 0, 0, 0.26)',                  // 21
  '0 0 54px rgba(0, 0, 0, 0.27)',                  // 22
  '0 0 56px rgba(0, 0, 0, 0.28)',                  // 23
  '0 0 58px rgba(0, 0, 0, 0.29)',                  // 24
];

// ============================================================
// 6. Breakpoints (브레이크포인트)
// ============================================================
const breakpoints = {
  values: {
    xs: 0,        // 모바일 (0px ~)
    sm: 600,      // 태블릿 세로 (600px ~)
    md: 900,      // 태블릿 가로 (900px ~)
    lg: 1200,     // 데스크톱 (1200px ~)
    xl: 1536,     // 대형 데스크톱 (1536px ~)
  },
};

// ============================================================
// 7. Z-Index (레이어 순서)
// ============================================================
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

// ============================================================
// 8. Transitions (전환 효과)
// ============================================================
const transitions = {
  // 지속 시간 (ms)
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  // 이징 함수
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

// ============================================================
// 9. Components (컴포넌트 오버라이드)
// ============================================================
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarWidth: 'thin',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
        },
      },
    },
  },
};

// ============================================================
// Theme 생성
// ============================================================
const theme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  shadows,
  breakpoints,
  zIndex,
  transitions,
  components,
});

export default theme;

// 개별 토큰 내보내기 (Storybook 문서화용)
export {
  palette,
  typography,
  spacing,
  shape,
  shadows,
  breakpoints,
  zIndex,
  transitions,
  components,
};
