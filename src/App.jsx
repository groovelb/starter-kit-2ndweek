import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import theme from './styles/themes/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Starter Kit
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Run Storybook to explore components
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
          pnpm storybook
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
