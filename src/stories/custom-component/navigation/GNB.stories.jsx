import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { GNB } from '../../../components/navigation/GNB';
import { NavMenu } from '../../../components/navigation/NavMenu';

export default {
  title: 'Custom Component/Navigation/GNB',
  component: GNB,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## GNB

반응형 Global Navigation Bar 컴포넌트.

### 특징
- 데스크탑: 헤더에 네비게이션 표시
- 모바일: 햄버거 메뉴 + 드로어로 전환
- 투명/고정 헤더 옵션
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
    height: {
      control: { type: 'number', min: 48, max: 96 },
      description: '헤더 높이 (px)',
    },
    hasBorder: {
      control: 'boolean',
      description: '헤더 하단 보더',
    },
    isSticky: {
      control: 'boolean',
      description: '헤더 고정 여부',
    },
    isTransparent: {
      control: 'boolean',
      description: '투명 배경 + 블러 효과',
    },
  },
};

const menuItems = [
  { id: 'menu1', label: 'Menu 1' },
  { id: 'menu2', label: 'Menu 2' },
  { id: 'menu3', label: 'Menu 3' },
];

const Logo = () => (
  <Typography variant="h6" fontWeight={ 700 }>
    Logo
  </Typography>
);

/** 기본 GNB - Controls에서 Props 조작 가능 */
export const Default = {
  args: {
    breakpoint: 'md',
    height: 64,
    hasBorder: true,
    isSticky: true,
    isTransparent: false,
  },
  render: (args) => (
    <Box sx={ { height: 400 } }>
      <GNB
        { ...args }
        logo={ <Logo /> }
        navContent={
          <NavMenu
            items={ menuItems }
            activeId="menu1"
          />
        }
      />
      <Box sx={ { p: 4, bgcolor: 'grey.50', height: '100%' } }>
        <Typography color="text.secondary">
          브라우저 너비를 줄여서 반응형 전환을 확인하세요.
        </Typography>
      </Box>
    </Box>
  ),
};

/** 헤더 스타일 비교 */
export const HeaderStyles = {
  render: () => (
    <Stack spacing={ 4 }>
      <Box>
        <Typography variant="caption" sx={ { fontFamily: 'monospace', mb: 1, display: 'block' } }>
          hasBorder: true (기본)
        </Typography>
        <Box sx={ { border: '1px solid', borderColor: 'divider' } }>
          <GNB
            logo={ <Logo /> }
            navContent={ <NavMenu items={ menuItems } activeId="menu1" /> }
            hasBorder
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="caption" sx={ { fontFamily: 'monospace', mb: 1, display: 'block' } }>
          isTransparent: true (Hero 섹션용)
        </Typography>
        <Box sx={ { position: 'relative' } }>
          <GNB
            logo={
              <Typography variant="h6" fontWeight={ 700 } sx={ { color: 'white' } }>
                Logo
              </Typography>
            }
            navContent={
              <NavMenu
                items={ menuItems }
                activeId="menu1"
                sx={ { '& button': { color: 'white' } } }
              />
            }
            isTransparent
            hasBorder={ false }
          />
          <Box
            sx={ {
              height: 200,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }
          >
            <Typography variant="h4" color="white" fontWeight={ 700 }>
              Hero Section
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  ),
};
