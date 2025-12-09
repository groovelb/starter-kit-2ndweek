import { MemoryRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppShell } from '../../components/navigation/AppShell';
import { NavMenu } from '../../components/navigation/NavMenu';
import { useGNB } from '../../components/navigation/GNB';
import { Page1, Page2, Page3 } from '../../pages';

export default {
  title: 'Page/Router Demo',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Router Demo

AppShell + react-router-dom을 활용한 페이지 라우팅 데모.

### 특징
- 메뉴 클릭 시 페이지 전환
- 모바일에서 드로어 메뉴 자동 닫힘
- URL 기반 활성 메뉴 표시
        `,
      },
    },
  },
};

const menuItems = [
  { id: 'page1', label: 'Page 1', path: '/page1' },
  { id: 'page2', label: 'Page 2', path: '/page2' },
  { id: 'page3', label: 'Page 3', path: '/page3' },
];

const Logo = () => (
  <Typography variant="h6" fontWeight={ 700 }>
    Logo
  </Typography>
);

/**
 * 라우터 연동 네비게이션
 */
function RouterNavMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { closeDrawer } = useGNB();

  const activeId = menuItems.find((item) => item.path === location.pathname)?.id || 'page1';

  const handleItemClick = (item) => {
    navigate(item.path);
    closeDrawer();
  };

  return (
    <NavMenu
      items={ menuItems }
      activeId={ activeId }
      onItemClick={ handleItemClick }
    />
  );
}

/**
 * 라우터 데모 앱
 */
function RouterDemoApp() {
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

/** 라우터 데모 - 메뉴 클릭으로 페이지 전환 */
export const Default = {
  render: () => (
    <MemoryRouter initialEntries={ ['/page1'] }>
      <Box sx={ { height: '100vh' } }>
        <RouterDemoApp />
      </Box>
    </MemoryRouter>
  ),
};
