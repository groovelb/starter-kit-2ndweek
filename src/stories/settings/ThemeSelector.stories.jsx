import { useGlobals } from 'storybook/preview-api';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { DocumentTitle, PageContainer, SectionTitle } from '../../components/storybookDocumentation';
import { themes, themeMeta, getThemeNames } from '../../styles/themes';

export default {
  title: 'Settings/Theme Selector',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 테마 선택기

프로젝트에서 사용 가능한 테마를 미리보고 선택할 수 있습니다.

### 사용 가능한 테마
- Default, Material, Flat, Glassmorphism 등 12가지 테마
- 각 테마별 고유한 색상, 그림자, 모서리 스타일
        `,
      },
    },
  },
};

/** 테마 미리보기 컴포넌트 */
const ThemePreview = ({ themeName, isSelected, onSelect }) => {
  const theme = themes[themeName];
  const meta = themeMeta[themeName];

  if (!theme || !meta) return null;

  return (
    <ThemeProvider theme={ theme }>
      <Box
        onClick={ () => onSelect(themeName) }
        sx={ {
          cursor: 'pointer',
          border: isSelected ? '2px solid' : '1px solid',
          borderColor: isSelected ? 'primary.main' : 'divider',
          borderRadius: theme.shape?.borderRadius || 0,
          overflow: 'hidden',
          transition: 'all 0.2s',
          '&:hover': {
            borderColor: 'primary.main',
          },
        } }
      >
        {/* 테마 배경 미리보기 */}
        <Box
          sx={ {
            p: 2,
            backgroundColor: theme.palette?.background?.default || '#fff',
            minHeight: 100,
          } }
        >
          <Card elevation={ 2 }>
            <CardContent sx={ { p: 1.5, '&:last-child': { pb: 1.5 } } }>
              <Typography variant="body2" fontWeight={ 600 }>
                { meta.name }
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Sample Card
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* 테마 정보 */}
        <Box
          sx={ {
            p: 1.5,
            backgroundColor: theme.palette?.background?.paper || '#fff',
            borderTop: '1px solid',
            borderColor: 'divider',
          } }
        >
          <Typography variant="subtitle2" fontWeight={ 600 }>
            { meta.name }
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            { meta.description }
          </Typography>
          <Chip
            label={ meta.mode }
            size="small"
            sx={ { mt: 0.5, fontSize: 10 } }
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

/** 테마 선택기 - Storybook 전역 테마 변경 */
export const Default = {
  render: () => {
    const [globals, updateGlobals] = useGlobals();
    const selectedTheme = globals.theme || 'default';
    const themeNames = getThemeNames();

    const handleThemeSelect = (themeName) => {
      updateGlobals({ theme: themeName });
    };

    return (
      <>
        <DocumentTitle
          title="Theme Selector"
          status="Available"
          note="Theme selection and preview"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            테마 선택기
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            테마를 선택하면 Storybook 전체에 즉시 적용됩니다.
          </Typography>

          <SectionTitle
            title="Available Themes"
            description={ `총 ${themeNames.length}개의 테마 사용 가능` }
          />

          <Grid container spacing={ 2 } sx={ { mb: 6 } }>
            { themeNames.map((name) => (
              <Grid key={ name } size={ { xs: 6, sm: 4, md: 3 } }>
                <ThemePreview
                  themeName={ name }
                  isSelected={ selectedTheme === name }
                  onSelect={ handleThemeSelect }
                />
              </Grid>
            )) }
          </Grid>

          <SectionTitle
            title="Current Theme"
            description={ `현재 선택: ${themeMeta[selectedTheme]?.name || selectedTheme}` }
          />

          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '30%' } }>속성</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>값</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Name</TableCell>
                  <TableCell>{ themeMeta[selectedTheme]?.name }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Description</TableCell>
                  <TableCell>{ themeMeta[selectedTheme]?.description }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Mode</TableCell>
                  <TableCell>{ themeMeta[selectedTheme]?.mode }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Primary Color</TableCell>
                  <TableCell>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                      <Box
                        sx={ {
                          width: 20,
                          height: 20,
                          backgroundColor: themes[selectedTheme]?.palette?.primary?.main,
                          border: '1px solid rgba(0,0,0,0.1)',
                        } }
                      />
                      <Typography variant="body2" sx={ { fontFamily: 'monospace' } }>
                        { themes[selectedTheme]?.palette?.primary?.main }
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Border Radius</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>
                    { themes[selectedTheme]?.shape?.borderRadius }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Background</TableCell>
                  <TableCell>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                      <Box
                        sx={ {
                          width: 20,
                          height: 20,
                          backgroundColor: themes[selectedTheme]?.palette?.background?.default,
                          border: '1px solid rgba(0,0,0,0.1)',
                        } }
                      />
                      <Typography variant="body2" sx={ { fontFamily: 'monospace' } }>
                        { themes[selectedTheme]?.palette?.background?.default }
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Component Preview" description="현재 적용된 테마로 컴포넌트 미리보기" />

          <Box
            sx={ {
              p: 4,
              backgroundColor: 'background.default',
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider',
            } }
          >
            <Typography variant="h5" gutterBottom>
              Typography Preview
            </Typography>
            <Typography variant="body1" paragraph>
              이 텍스트는 body1 스타일입니다. 테마의 기본 폰트와 색상을 확인하세요.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              이 텍스트는 body2 스타일입니다. Secondary 색상이 적용됩니다.
            </Typography>

            <Box sx={ { display: 'flex', gap: 1, mb: 3 } }>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </Box>

            <Box sx={ { display: 'flex', gap: 1, mb: 3 } }>
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
            </Box>

            <Card elevation={ 2 }>
              <CardContent>
                <Typography variant="h6">Card Component</Typography>
                <Typography variant="body2" color="text.secondary">
                  이 카드는 테마의 그림자와 모서리 스타일을 보여줍니다.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </PageContainer>
      </>
    );
  },
};

/** 테마 목록 */
export const ThemeList = {
  render: () => {
    const themeNames = getThemeNames();

    return (
      <>
        <DocumentTitle
          title="Theme List"
          status="Available"
          note="Available themes list"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            테마 목록
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            프로젝트에서 사용 가능한 모든 테마 정보입니다.
          </Typography>

          <SectionTitle title="All Themes" description={ `총 ${themeNames.length}개` } />

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Key</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Name</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '10%' } }>Mode</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Description</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Primary</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { themeNames.map((name) => {
                  const meta = themeMeta[name];
                  const theme = themes[name];

                  return (
                    <TableRow key={ name }>
                      <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>
                        { name }
                      </TableCell>
                      <TableCell sx={ { fontWeight: 600 } }>
                        { meta?.name }
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={ meta?.mode }
                          size="small"
                          color={ meta?.mode === 'dark' ? 'default' : 'primary' }
                          variant="outlined"
                          sx={ { fontSize: 10 } }
                        />
                      </TableCell>
                      <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>
                        { meta?.description }
                      </TableCell>
                      <TableCell>
                        <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                          <Box
                            sx={ {
                              width: 16,
                              height: 16,
                              backgroundColor: theme?.palette?.primary?.main,
                              border: '1px solid rgba(0,0,0,0.1)',
                            } }
                          />
                          <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>
                            { theme?.palette?.primary?.main }
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                }) }
              </TableBody>
            </Table>
          </TableContainer>
        </PageContainer>
      </>
    );
  },
};
