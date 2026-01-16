---
paths:
  - "**/*.stories.jsx"
  - "**/*.stories.tsx"
---

# Storybook Writing Rules

Storybook 스토리 작성 시 적용되는 규칙.

## 스토리 카테고리 구조 (CRITICAL)

| 카테고리 | title 접두사 | 설명 | 예시 |
|---------|-------------|------|------|
| **Style** | `Style/` | 디자인 토큰 문서 | `Style/Color`, `Style/Typography` |
| **Custom Component** | `Custom Component/` | 새로 만든 재사용 컴포넌트 | `Custom Component/TimelineSlider` |
| **Template** | `Template/` | 여러 컴포넌트 조합 템플릿 | `Template/ProductGrid` |
| **Section** | `Section/` | 페이지 구성 섹션 단위 | `Section/ProductShowcase` |
| **Page** | `Page/` | 전체 페이지 레벨 | `Page/MainPage` |

### 카테고리 분류 기준

```
Style/           → MUI theme 토큰, 디자인 시스템 문서
Custom Component/ → 단일 기능의 재사용 UI 컴포넌트
Template/        → 2개 이상 컴포넌트 조합, 재사용 가능한 레이아웃 패턴
Section/         → 페이지의 한 영역을 담당, 특정 컨텍스트에 종속
Page/            → 전체 페이지, 라우트 단위
```

## 필수 규칙 (MUST)

| Rule | Description |
|------|-------------|
| First Story Named "Docs" | 첫 번째 스토리의 export 이름은 반드시 `Docs` (autodocs 제외) |
| Single Component per Story | 스토리 한 개당 단일 컴포넌트만 보여준다 |
| Docs First with Controls | 항상 첫 문서는 Docs이며, 모든 props를 argTypes와 control로 조작 가능하게 적용 |
| Minimal Variations | 과도한 스토리 베리에이션 금지. Controls로 사용자가 직접 조작하도록 유도 |
| DocumentTitle English | DocumentTitle의 모든 props 값은 영어로 작성 |
| Description Korean | DocumentTitle 외의 설명은 한글로 작성 |
| Props Table Required | 모든 스토리 Doc의 최상단에 Props 테이블 표시 |
| SectionTitle Usage | 2개 이상의 섹션에 반드시 SectionTitle로 구분 |

## Story Types

| Type | autodocs | Use Case |
|------|----------|----------|
| Component (interactive) | `tags: ['autodocs']` | Components with props (Button, Card) |
| Documentation (static) | None | Overview, Style sections |

## Component Story (autodocs)

```jsx
export default {
  title: 'Component/ComponentName',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '버튼에 표시할 텍스트' },
    isDisabled: { control: 'boolean', description: '비활성화 여부' },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    label: '버튼',
    isDisabled: false,
    variant: 'primary',
  },
};
```

## argTypes Control 타입 가이드

| Props 타입 | control | 예시 |
|-----------|---------|------|
| string | `'text'` | `control: 'text'` |
| boolean | `'boolean'` | `control: 'boolean'` |
| number | `{ type: 'number' }` | `control: { type: 'number', min: 0, max: 100 }` |
| enum/선택지 | `'select'` | `control: 'select', options: ['a', 'b']` |
| color | `'color'` | `control: 'color'` |
| function | `action()` | `action: 'clicked'` |

## 문서 스타일 원칙

공식 기술 문서 스타일을 따른다. 장식보다 정보 전달에 집중.

### 금지 사항
- Paper, Card 컴포넌트의 장식적 사용 금지
- elevation, boxShadow 사용 금지
- 불필요한 배경색, 그라데이션 금지
- 이모지 과다 사용 금지
- 마케팅 문구 금지

## 필수 문서 컴포넌트

`src/components/storybookDocumentation/` 내 컴포넌트 사용:
- **DocumentTitle**: 모든 스토리 상단 고정 헤더
- **PageContainer**: 모든 스토리 콘텐츠 감싸는 컨테이너
- **SectionTitle**: 콘텐츠 섹션 구분용 타이틀

## 베리에이션 작성 원칙 (CRITICAL)

**지양 패턴:**
```jsx
// ❌ Props 조합별로 스토리 과도하게 생성
export const PrimarySmall = { args: { variant: 'primary', size: 'small' } };
export const PrimaryMedium = { args: { variant: 'primary', size: 'medium' } };
// ... 조합 폭발
```

**권장 패턴:**
```jsx
// ✅ Default 스토리 + Controls로 사용자가 직접 조작
export const Default = {
  args: { variant: 'primary', size: 'medium', label: '버튼' },
};

// ✅ 필요 시 하나의 스토리에서 주요 변형만 간단히 나열
export const Variants = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </Stack>
  ),
};
```

## 스토리 개수 제한

- Style 섹션: 1-3개 권장
- Component 섹션: 1-3개 권장 (Default 필수, Variants/States는 선택)
