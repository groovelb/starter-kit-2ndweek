# MUI Rules

## CRITICAL: Grid Import 규칙 (절대 위반 금지)

```jsx
import Grid from '@mui/material/Grid';   // 정확함! 이것만 사용!
// import Grid from '@mui/material/Grid2';  // 절대 사용 금지!
```

MUI v7에서는 `Grid2`가 아닌 `Grid`를 직접 import해야 한다.

## 핵심 규칙
- 모든 스타일링은 MUI `sx` prop 사용
- `borderRadius`는 인라인 지정하지 않는 이상 기본 0
- 상세 테마 규칙은 `component-create` 스킬 참조
