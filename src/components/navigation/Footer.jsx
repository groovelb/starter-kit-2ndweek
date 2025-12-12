import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { ArrowRight, Instagram, Twitter } from 'lucide-react';
import { content } from '../../data/content';

/**
 * Footer 컴포넌트
 *
 * 뉴스레터 구독 폼이 포함된 미니멀한 Footer.
 * Lumenstate 브랜드 아이덴티티에 맞춘 절제된 디자인.
 *
 * 동작 방식:
 * 1. 상단: 뉴스레터 구독 섹션 (이메일 입력 + 제출)
 * 2. 하단: 브랜드 로고, 네비게이션 링크, 소셜 아이콘, 저작권
 * 3. 제출 시 onSubscribe 콜백 호출
 *
 * Props:
 * @param {function} onSubscribe - 뉴스레터 구독 핸들러 (email) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <Footer onSubscribe={(email) => console.log(email)} />
 */
const Footer = forwardRef(function Footer({
  onSubscribe,
  sx,
  ...props
}, ref) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const brandName = content.brand.name;
  const copyright = content.footer.copyright;

  /**
   * 뉴스레터 구독 제출 핸들러
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      onSubscribe?.(email);
      setIsSubmitted(true);
      setEmail('');
      // 3초 후 상태 리셋
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <Box
      ref={ref}
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'grey.100',
        ...sx,
      }}
      {...props}
    >
      {/* 뉴스레터 섹션 */}
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'rgba(245, 242, 238, 0.12)',
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            maxWidth: 480,
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          {/* 뉴스레터 타이틀 */}
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              mb: 1.5,
              display: 'block',
            }}
          >
            Newsletter
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'grey.100',
              mb: 1,
            }}
          >
            Stay Illuminated
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(245, 242, 238, 0.6)',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Receive updates on new collections, lighting insights, and exclusive offers.
          </Typography>

          {/* 이메일 입력 폼 */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid',
              borderColor: 'rgba(245, 242, 238, 0.3)',
              pb: 1,
              transition: 'border-color 300ms ease',
              '&:focus-within': {
                borderColor: 'secondary.main',
              },
            }}
          >
            <InputBase
              type="email"
              placeholder={isSubmitted ? 'Thank you for subscribing' : 'Enter your email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitted}
              sx={{
                flex: 1,
                color: 'grey.100',
                fontSize: '0.9rem',
                '& input': {
                  p: 0,
                  '&::placeholder': {
                    color: isSubmitted ? 'secondary.main' : 'rgba(245, 242, 238, 0.4)',
                    opacity: 1,
                  },
                },
              }}
            />
            <IconButton
              type="submit"
              disabled={isSubmitted || !email}
              sx={{
                color: 'grey.100',
                p: 0.5,
                transition: 'color 300ms ease, transform 300ms ease',
                '&:hover': {
                  color: 'secondary.main',
                  backgroundColor: 'transparent',
                  transform: 'translateX(4px)',
                },
                '&.Mui-disabled': {
                  color: 'rgba(245, 242, 238, 0.3)',
                },
              }}
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* 하단 정보 섹션 */}
      <Box
        sx={{
          py: { xs: 4, md: 5 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 2 },
          }}
        >
          {/* 브랜드 로고 */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'grey.100',
                letterSpacing: '-0.02em',
              }}
            >
              {brandName}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(245, 242, 238, 0.5)',
                display: 'block',
                mt: 0.5,
              }}
            >
              Light defines the space.
            </Typography>
          </Box>

          {/* 네비게이션 링크 */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 3, md: 4 },
            }}
          >
            {['Collection', 'About', 'Contact', 'Support'].map((item) => (
              <Typography
                key={item}
                component="a"
                href="#"
                variant="body2"
                sx={{
                  color: 'rgba(245, 242, 238, 0.6)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  letterSpacing: '0.02em',
                  transition: 'color 300ms ease',
                  '&:hover': {
                    color: 'grey.100',
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* 소셜 아이콘 */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              sx={{
                color: 'rgba(245, 242, 238, 0.6)',
                transition: 'color 300ms ease',
                '&:hover': {
                  color: 'grey.100',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Instagram size={18} strokeWidth={1.5} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: 'rgba(245, 242, 238, 0.6)',
                transition: 'color 300ms ease',
                '&:hover': {
                  color: 'grey.100',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Twitter size={18} strokeWidth={1.5} />
            </IconButton>
          </Box>
        </Box>

        {/* 저작권 */}
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'rgba(245, 242, 238, 0.08)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(245, 242, 238, 0.4)',
              fontSize: '0.7rem',
              letterSpacing: '0.05em',
            }}
          >
            {copyright}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
});

export { Footer };
export default Footer;
