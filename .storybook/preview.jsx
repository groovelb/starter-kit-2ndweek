import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import defaultTheme from '../src/styles/themes/default.js';

// Google Fonts 로드 (Material Symbols + Outfit)
const googleFonts = [
  // Material Symbols
  'Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  // Outfit (헤딩용)
  'Outfit:wght@300;400;500;600;700;800;900',
];

googleFonts.forEach((font) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
  document.head.appendChild(link);
});

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Overview',
          'Style', ['Overview', 'Colors', 'Typography', 'Spacing', 'Icons'],
          'MUI Component',
          'Custom Component',
          'Template',
          'Page',
          'Test Data',
        ],
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={ defaultTheme }>
        <CssBaseline />
        <div style={ { width: '100%', paddingTop: '40px' } }>
          { Story(context) }
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
