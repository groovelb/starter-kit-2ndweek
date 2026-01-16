# MUI Rules

## CRITICAL: Grid Import 규칙 (절대 위반 금지)

### 잘못된 Import (절대 사용 금지)
```jsx
import Grid from '@mui/material/Grid2';  // 틀림! 사용 금지!
```

### 올바른 Import (반드시 이것만 사용)
```jsx
import Grid from '@mui/material/Grid';   // 정확함! 이것만 사용!
```

**중요**: MUI v7에서는 `Grid2`가 아닌 `Grid`를 직접 import해야 합니다.

## Grid 사용 예시

```jsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
```

---

## MUI Custom Theme Rules

### Typography
- 본문: Pretendard Variable 버전 웹폰트 사용
- Headline 영어: Google Font의 Outfit
- Headline 한글: Pretendard의 가장 높은 weight

### Color
- Primary color: `#0000FF`
- Secondary color: blueGrey의 가장 어두운색

### Elevation
- Paper에 기본적으로 사용되는 elevation의 box shadow:
  - x, y offset을 0
  - opacity값을 낮추고 blur값을 높임 (dimmed shadow)

### BorderRadius
- 인라인으로 직접 지정하지 않는 이상 모든 컴포넌트의 borderRadius는 0
