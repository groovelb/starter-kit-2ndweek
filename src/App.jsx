import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import theme from './styles/themes/theme.js';
import { AppShell } from './components/navigation/AppShell';
import { NavMenu } from './components/navigation/NavMenu';
import { useGNB } from './components/navigation/GNB';
import { Page1, Page2, Page3 } from './pages';

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
 * 메인 앱 레이아웃
 */
function AppLayout() {
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

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
