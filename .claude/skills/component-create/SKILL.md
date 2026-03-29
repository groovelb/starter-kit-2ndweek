---
name: component-create
description: 컴포넌트 생성/수정 시 자동 활성화. 기존 컴포넌트 목록, MUI 테마 상세, 디자인 토큰 참조 제공.
user-invocable: false
paths: "src/components/**/*,src/sections/**/*,src/templates/**/*,src/pages/**/*"
---

# 컴포넌트 생성/수정 정책

## 핵심 원칙
1. **기존 컴포넌트 재활용 우선** — 새로 만들기 전 [components.md](components.md)에서 유사 컴포넌트 확인
2. **디자인 토큰 사용** — theme.palette, theme.typography, theme.spacing 사용. 임의 값 직접 지정 금지
3. **아이콘**: lucide-react 라이브러리 사용

## MUI 테마 상세

Grid 사용 예시:
```jsx
<Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 8 }}><Item /></Grid>
  <Grid size={{ xs: 6, md: 4 }}><Item /></Grid>
</Grid>
```

### Typography
- 본문: Pretendard Variable
- Headline 영어: Cormorant Garamond
- Headline 한글: Pretendard 가장 높은 weight

### Elevation
- Paper box-shadow: x,y offset 0, opacity 낮추고 blur 높임 (dimmed shadow)

### BorderRadius
- 기본 0 (인라인 지정 시만 예외)

## 참조
- [컴포넌트 전체 목록](components.md)
- [MUI 테마 토큰](mui-theme.md)
