import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import { useNavigate } from 'react-router-dom';
import { landingContent, demoData } from '../../data/landingContent.js';
import { StretchedHeadline } from '../../components/typography/StretchedHeadline.jsx';

/**
 * CTASection 컴포넌트
 *
 * Archive 페이지로 유도하는 강력한 CTA 섹션.
 * 대비되는 다크 배경과 통계, 이미지 프리뷰로 신뢰성 구축.
 *
 * 동작 방식:
 * 1. 다크 배경으로 시각적 대비 생성
 * 2. 통계 수치로 사회적 증거(Social Proof) 제시
 * 3. 이미지 프리뷰로 제품의 실제 가치 암시
 * 4. 명확한 CTA 버튼으로 행동 유도
 *
 * Props:
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <CTASection />
 */
function CTASection({ sx }) {
  const navigate = useNavigate();
  const { headline, subheadline, description, primaryButton, stats } = landingContent.cta;
  const { footer } = landingContent;

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'grey.900',
        color: 'white',
        py: { xs: 10, md: 16 },
        ...sx,
      }}
    >
      {/* 배경 이미지 그리드 (오버레이) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 0.5,
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      >
        {demoData.galleryImages.concat(demoData.galleryImages.slice(0, 2)).map((img, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </Box>

      {/* 그라디언트 오버레이 */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(33,33,33,0.95) 0%, rgba(33,33,33,0.8) 100%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* 메인 헤드라인 */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
          }}
        >
          <StretchedHeadline
            text={headline}
            variant="animated"
            fontSize="clamp(1.5rem, 5vw, 3.5rem)"
            fontWeight={900}
            fillWidth={false}
            minWordSpacing={0.5}
            sx={{
              color: 'white',
              mb: 3,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              color: 'grey.400',
              mb: 2,
            }}
          >
            {subheadline}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'grey.500',
              maxWidth: 500,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* 통계 */}
        <Grid
          container
          spacing={4}
          sx={{
            mb: { xs: 6, md: 8 },
            justifyContent: 'center',
          }}
        >
          {stats.map((stat, index) => (
            <Grid key={index} size={{ xs: 4, md: 'auto' }}>
              <Box
                sx={{
                  textAlign: 'center',
                  px: { xs: 1, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                    fontWeight: 900,
                    color: 'primary.light',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'grey.500',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA 버튼 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mb: { xs: 8, md: 12 },
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate(primaryButton.link)}
            endIcon={<Icon>arrow_forward</Icon>}
            sx={{
              px: 5,
              py: 2,
              fontSize: '1rem',
              fontWeight: 700,
              bgcolor: 'white',
              color: 'grey.900',
              '&:hover': {
                bgcolor: 'grey.100',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            {primaryButton.text}
          </Button>
        </Box>

        {/* 이미지 프리뷰 스트립 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mb: { xs: 8, md: 12 },
            overflow: 'hidden',
          }}
        >
          {demoData.galleryImages.slice(0, 6).map((img, idx) => (
            <Box
              key={idx}
              sx={{
                width: { xs: 60, md: 100 },
                height: { xs: 60, md: 100 },
                flexShrink: 0,
                overflow: 'hidden',
                opacity: 0.7,
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* 푸터 */}
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'grey.800',
            pt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 900,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                color: 'white',
              }}
            >
              {footer.brand}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'grey.500',
              }}
            >
              {footer.tagline}
            </Typography>
          </Box>

          <Typography
            variant="caption"
            sx={{
              color: 'grey.600',
            }}
          >
            {footer.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default CTASection;
