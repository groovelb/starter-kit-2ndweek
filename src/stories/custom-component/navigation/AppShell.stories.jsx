import { MemoryRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { AppShell } from '../../../components/navigation/AppShell';
import { NavMenu } from '../../../components/navigation/NavMenu';
import { useGNB } from '../../../components/navigation/GNB';
import { Page1, Page2, Page3 } from '../../../pages';

export default {
  title: 'Custom Component/Navigation/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## AppShell

반응형 애플리케이션 쉘 컴포넌트.

### 특징
- GNB(헤더) + 메인 콘텐츠 영역 구성
- 모바일에서 자동으로 드로어 메뉴 전환
- react-router-dom 연동 지원
        `,
      },
    },
  },
  argTypes: {
    breakpoint: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '반응형 전환 브레이크포인트',
    },
    headerHeight: {
      control: { type: 'number', min: 48, max: 96 },
      description: '헤더 높이 (px)',
    },
    hasHeaderBorder: {
      control: 'boolean',
      description: '헤더 하단 보더',
    },
    isHeaderSticky: {
      control: 'boolean',
      description: '헤더 고정 여부',
    },
    isHeaderTransparent: {
      control: 'boolean',
      description: '헤더 투명 배경',
    },
  },
};

const menuItems = [
  { id: 'page1', label: 'Page 1' },
  { id: 'page2', label: 'Page 2' },
  { id: 'page3', label: 'Page 3' },
];

const Logo = () => (
  <Typography variant="h6" fontWeight={ 700 }>
    Logo
  </Typography>
);

/** 기본 AppShell - Controls에서 Props 조작 가능 */
export const Default = {
  args: {
    breakpoint: 'md',
    headerHeight: 64,
    hasHeaderBorder: true,
    isHeaderSticky: true,
    isHeaderTransparent: false,
  },
  render: (args) => (
    <Box sx={ { height: 400, border: '1px solid', borderColor: 'divider' } }>
      <AppShell
        { ...args }
        logo={ <Logo /> }
        headerCollapsible={
          <NavMenu
            items={ menuItems }
            activeId="page1"
          />
        }
      >
        <Box
          sx={ {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.50',
          } }
        >
          <Box sx={ { textAlign: 'center', p: 4 } }>
            <Typography variant="h4" fontWeight={ 700 } gutterBottom>
              Main Content
            </Typography>
            <Typography color="text.secondary">
              화면 크기를 조절해보세요. 모바일에서는 드로어 메뉴로 전환됩니다.
            </Typography>
          </Box>
        </Box>
      </AppShell>
    </Box>
  ),
};

/**
 * 라우터 연동 네비게이션 컴포넌트
 */
function RouterNavMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { closeDrawer } = useGNB();

  const routerMenuItems = [
    { id: 'page1', label: 'Page 1', path: '/page1' },
    { id: 'page2', label: 'Page 2', path: '/page2' },
    { id: 'page3', label: 'Page 3', path: '/page3' },
  ];

  // 현재 경로에서 activeId 추출
  const activeId = routerMenuItems.find((item) => item.path === location.pathname)?.id || 'page1';

  const handleItemClick = (item) => {
    navigate(item.path);
    closeDrawer(); // 모바일 드로어 닫기
  };

  return (
    <NavMenu
      items={ routerMenuItems }
      activeId={ activeId }
      onItemClick={ handleItemClick }
    />
  );
}

/**
 * 라우터 연동 AppShell
 */
function RouterAppShell() {
  return (
    <AppShell
      logo={ <Logo /> }
      headerCollapsible={ <RouterNavMenu /> }
    >
      <Routes>
        <Route path="/" element={ <Page1 /> } />
        <Route path="/page1" element={ <Page1 /> } />
        <Route path="/page2" element={ <Page2 /> } />
        <Route path="/page3" element={ <Page3 /> } />
        <Route path="*" element={ <Page1 /> } />
      </Routes>
    </AppShell>
  );
}

/** 라우터 연동 예시 - 메뉴 클릭 시 페이지 전환 */
export const WithRouter = {
  render: () => (
    <MemoryRouter initialEntries={ ['/page1'] }>
      <Box sx={ { height: 500, border: '1px solid', borderColor: 'divider' } }>
        <RouterAppShell />
      </Box>
    </MemoryRouter>
  ),
};

/** 레이아웃 변형 비교 */
export const LayoutVariants = {
  render: () => (
    <Stack spacing={ 4 }>
      <Box>
        <Typography variant="caption" sx={ { fontFamily: 'monospace', mb: 1, display: 'block' } }>
          기본 레이아웃
        </Typography>
        <Box sx={ { height: 300, border: '1px solid', borderColor: 'divider' } }>
          <AppShell
            logo={ <Logo /> }
            headerCollapsible={ <NavMenu items={ menuItems } activeId="page1" /> }
          >
            <Box sx={ { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.50' } }>
              <Typography variant="h5" fontWeight={ 600 }>Content Area</Typography>
            </Box>
          </AppShell>
        </Box>
      </Box>
      <Box>
        <Typography variant="caption" sx={ { fontFamily: 'monospace', mb: 1, display: 'block' } }>
          투명 헤더 (Hero 섹션)
        </Typography>
        <Box sx={ { height: 300 } }>
          <AppShell
            logo={
              <Typography variant="h6" fontWeight={ 700 } sx={ { color: 'white' } }>
                Logo
              </Typography>
            }
            headerCollapsible={
              <NavMenu
                items={ menuItems }
                activeId="page1"
                sx={ { '& button': { color: 'white' } } }
              />
            }
            isHeaderTransparent
            hasHeaderBorder={ false }
          >
            <Box
              sx={ {
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              } }
            >
              <Typography variant="h3" fontWeight={ 700 } color="white">
                Hero Section
              </Typography>
            </Box>
          </AppShell>
        </Box>
      </Box>
    </Stack>
  ),
};
