import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import { useNavigate } from 'react-router-dom';
import { landingContent } from '../../data/landingContent.js';
import { StretchedHeadlineMultiline } from '../../components/typography/StretchedHeadline.jsx';

/**
 * HeroSection 컴포넌트
 *
 * MUSE 랜딩페이지의 히어로 섹션.
 * 브랜드 메시지와 3가지 핵심 USP를 시각적으로 전달.
 *
 * 동작 방식:
 * 1. 상단에 브랜드명과 태그라인 표시
 * 2. StretchedHeadline으로 CAPTURE / CURATE / CREATE 헤드라인 렌더링
 * 3. 하단에 3가지 USP 카드를 그리드로 배치
 * 4. CTA 버튼으로 Archive 페이지로 유도
 *
 * Props:
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection({ sx }) {
  const navigate = useNavigate();
  const { brandName, tagline, headline, description, usps } = landingContent.hero;
  const { primaryButton } = landingContent.cta;

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        py: { xs: 8, md: 12 },
        ...sx,
      }}
    >
      {/* 배경 그리드 패턴 */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* 상단: 브랜드 + 태그라인 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            mb: { xs: 6, md: 10 },
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.2em',
                fontSize: '0.75rem',
              }}
            >
              {tagline}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                letterSpacing: '-0.03em',
                lineHeight: 1,
                mt: 1,
              }}
            >
              {brandName}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 400,
              color: 'text.secondary',
              textAlign: { xs: 'left', md: 'right' },
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* 중앙: 메인 헤드라인 (CAPTURE / CURATE / CREATE) */}
        <Box
          sx={{
            mb: { xs: 8, md: 12 },
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider',
            py: { xs: 4, md: 6 },
          }}
        >
          <StretchedHeadlineMultiline
            lines={headline}
            gap={0.5}
            headlineProps={{
              variant: 'animated',
              fontSize: 'clamp(2.5rem, 10vw, 8rem)',
              fontWeight: 900,
              sx: {
                color: 'text.primary',
              },
            }}
          />
        </Box>

        {/* 하단: 3가지 USP 카드 */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {usps.map((usp, index) => (
            <Grid key={usp.id} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: 'rgba(0, 0, 255, 0.02)',
                  },
                }}
              >
                {/* 넘버링 */}
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    display: 'block',
                    mb: 2,
                  }}
                >
                  0{index + 1}
                </Typography>

                {/* 아이콘 + 키워드 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: 28,
                      color: 'primary.main',
                    }}
                  >
                    {usp.icon}
                  </Icon>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {usp.keyword}
                  </Typography>
                </Box>

                {/* 타이틀 */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {usp.title}
                </Typography>

                {/* 설명 */}
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                  }}
                >
                  {usp.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA 버튼 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 6, md: 8 },
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate(primaryButton.link)}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1rem',
              fontWeight: 600,
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {primaryButton.text}
          </Button>
        </Box>
      </Container>

      {/* 스크롤 인디케이터 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          color: 'text.secondary',
        }}
      >
        <Typography variant="caption" sx={{ letterSpacing: '0.1em' }}>
          SCROLL
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 40,
            bgcolor: 'divider',
            animation: 'scrollIndicator 2s ease-in-out infinite',
            '@keyframes scrollIndicator': {
              '0%, 100%': { opacity: 0.3, height: 40 },
              '50%': { opacity: 1, height: 60 },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
