import Box from '@mui/material/Box';
import HeroSection from '../sections/landing/HeroSection.jsx';
import USPSection from '../sections/landing/USPSection.jsx';
import CTASection from '../sections/landing/CTASection.jsx';

/**
 * LandingPage 컴포넌트
 *
 * MUSE 서비스의 랜딩 페이지.
 * Hero, USP, CTA 섹션으로 구성.
 *
 * 동작 방식:
 * 1. HeroSection: 브랜드 메시지와 3가지 USP 요약
 * 2. USPSection: 각 기능의 상세 설명 + 실제 컴포넌트 데모
 * 3. CTASection: Archive 페이지로 유도하는 CTA
 *
 * Props:
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <LandingPage />
 */
function LandingPage({ sx }) {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
        ...sx,
      }}
    >
      <HeroSection />
      <USPSection />
      <CTASection />
    </Box>
  );
}

export default LandingPage;
