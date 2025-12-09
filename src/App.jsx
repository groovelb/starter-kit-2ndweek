import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme as theme } from './styles/themes';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage.jsx';
import { ArchivePage } from './pages/ArchivePage';
import { MoodboardsPage } from './pages/MoodboardsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* 랜딩페이지 - MainLayout 밖 */}
          <Route index element={<LandingPage />} />

          {/* 앱 페이지 - MainLayout 내부 */}
          <Route element={<MainLayout />}>
            <Route path="archive" element={<ArchivePage />} />
            <Route path="moodboards" element={<MoodboardsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
