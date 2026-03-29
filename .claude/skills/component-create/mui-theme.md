# MUI Theme Token Reference

## Grid 사용

```jsx
import Grid from '@mui/material/Grid';  // CRITICAL: Grid2 아닌 Grid!

<Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 8 }}><Item /></Grid>
  <Grid size={{ xs: 6, md: 4 }}><Item /></Grid>
</Grid>
```

## Lumenstate Color Token

| 모드 | primary.main | secondary.main | background.default |
|------|-------------|----------------|-------------------|
| Light | `#12100E` | `#FFC66E` | `#F5F2EE` |
| Dark | `#F5F2EE` | `#FFC66E` | `#12100E` |

## Typography

| 용도 | 폰트 | MUI variant |
|------|------|-------------|
| Display/Headline (영문) | Cormorant Garamond | h1-h3 |
| Body (영문/한글) | Pretendard Variable | body1, body2 |
| Headline (한글) | Pretendard 최고 weight | h1-h3 (한글 fallback) |

## Spacing
- MUI `theme.spacing()` 기반 (8px 단위)
- sx prop에서 `p: 2` = 16px, `m: 3` = 24px

## Elevation
- Paper shadow: x,y offset 0, low opacity, high blur (dimmed)

## BorderRadius
- 기본값: 0 (모든 컴포넌트)
- 인라인으로 직접 지정 시만 예외
