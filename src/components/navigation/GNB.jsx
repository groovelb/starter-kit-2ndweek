import { useState, forwardRef, createContext, useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { NavMenu } from './NavMenu';
import { content } from '../../data/content';

/**
 * GNB Context
 */
const GNBContext = createContext({
  isDrawerOpen: false,
  toggleDrawer: () => {},
  closeDrawer: () => {},
  isMobile: false,
});

export const useGNB = () => useContext(GNBContext);

/**
 * GNB 컴포넌트
 *
 * 반응형 GNB (Global Navigation Bar).
 * 데스크탑에서는 헤더에 네비게이션을 표시하고,
 * 모바일에서는 햄버거 메뉴 + 전체화면 드로어로 전환된다.
 *
 * 동작 방식:
 * 1. content.js에서 brand.name과 navigation.menuItems를 자동으로 불러옴
 * 2. 데스크탑: 헤더에 로고 + NavMenu 표시
 * 3. 모바일: 햄버거 버튼 → 전체화면 드로어로 전환
 *
 * Props:
 * @param {string} activeId - 현재 활성 메뉴 ID [Optional]
 * @param {function} onMenuClick - 메뉴 클릭 핸들러 (item) => void [Optional]
 * @param {node} persistent - 헤더에 항상 표시될 요소 [Optional]
 * @param {node} drawerFooter - 드로어 하단 커스텀 요소 [Optional]
 * @param {string} breakpoint - 반응형 전환 브레이크포인트 ('sm' | 'md' | 'lg') [Optional, 기본값: 'md']
 * @param {number} height - 헤더 높이 (px) [Optional, 기본값: 64]
 * @param {boolean} hasBorder - 헤더 하단 보더 [Optional, 기본값: true]
 * @param {boolean} isSticky - 헤더 고정 [Optional, 기본값: true]
 * @param {boolean} isTransparent - 헤더 투명 배경 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <GNB activeId="brand" onMenuClick={(item) => navigate(item.path)} />
 */
const GNB = forwardRef(function GNB({
  activeId,
  onMenuClick,
  persistent,
  drawerFooter,
  breakpoint = 'md',
  height = 64,
  hasBorder = true,
  isSticky = true,
  isTransparent = false,
  sx,
  ...props
}, ref) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(breakpoint));

  // content.js에서 데이터 불러오기
  const brandName = content.brand.name;
  const menuItems = content.navigation.menuItems;

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  // 메뉴 클릭 핸들러 (드로어 닫기 포함)
  const handleMenuClick = (item) => {
    closeDrawer();
    onMenuClick?.(item);
  };

  // 로고 컴포넌트
  const Logo = (
    <Typography variant="h6" fontWeight={700}>
      {brandName}
    </Typography>
  );

  // NavMenu 컴포넌트
  const NavContent = (
    <NavMenu
      items={menuItems}
      activeId={activeId}
      onItemClick={handleMenuClick}
    />
  );

  /**
   * 헤더 스타일
   */
  const headerStyles = {
    position: isSticky ? 'sticky' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.appBar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height,
    px: { xs: 2, sm: 3, md: 4 },
    backgroundColor: isTransparent ? 'transparent' : 'background.paper',
    borderBottom: hasBorder ? '1px solid' : 'none',
    borderColor: 'divider',
    backdropFilter: isTransparent ? 'blur(12px)' : 'none',
    ...sx,
  };

  /**
   * 드로어 콘텐츠
   * - 전체 화면 채우기
   * - 세로 레이아웃, 큰 메뉴 사이즈
   */
  const renderDrawerContent = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100vw',
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height,
          px: 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
          flexShrink: 0,
        }}
      >
        {Logo}
        <IconButton
          onClick={closeDrawer}
          size="medium"
          aria-label="Close menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Content - 세로 레이아웃, 큰 메뉴 */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          py: 4,
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          '& nav': {
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
          },
          '& button, & a': {
            fontSize: '1.5rem',
            fontWeight: 600,
            py: 2,
            px: 2,
            justifyContent: 'flex-start',
          },
        }}
      >
        {NavContent}
      </Box>

      {/* Drawer Footer */}
      {drawerFooter && (
        <Box
          sx={{
            p: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            flexShrink: 0,
          }}
        >
          {drawerFooter}
        </Box>
      )}
    </Box>
  );

  return (
    <GNBContext.Provider value={{ isDrawerOpen, toggleDrawer, closeDrawer, isMobile }}>
      {/* Header */}
      <Box ref={ref} component="header" sx={headerStyles} {...props}>
        {/* Left: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {Logo}
        </Box>

        {/* Right: Navigation */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Persistent (always visible) */}
          {persistent}

          {/* Desktop: Show NavMenu */}
          {!isMobile && NavContent}

          {/* Mobile: Hamburger menu */}
          {isMobile && (
            <IconButton
              onClick={toggleDrawer}
              size="medium"
              aria-label="Open menu"
              aria-expanded={isDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Mobile Drawer - 전체 화면 */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={closeDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100vw',
            boxSizing: 'border-box',
          },
        }}
      >
        {renderDrawerContent()}
      </Drawer>
    </GNBContext.Provider>
  );
});

export { GNB };
