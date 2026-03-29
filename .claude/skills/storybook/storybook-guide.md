# Storybook Writing Guide (Detail)

## Story Types

| Type | autodocs | Use Case |
|------|----------|----------|
| Component (interactive) | `tags: ['autodocs']` | Components with props |
| Documentation (static) | None | Overview, Style sections |

## Component Story 템플릿

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
  args: { label: '버튼', isDisabled: false, variant: 'primary' },
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

공식 기술 문서 스타일. 장식보다 정보 전달에 집중.

### 금지 사항
- Paper, Card의 장식적 사용 금지
- elevation, boxShadow 사용 금지
- 불필요한 배경색, 그라데이션 금지
- 이모지 과다 사용, 마케팅 문구 금지

## 필수 문서 컴포넌트

`src/components/storybookDocumentation/` 내 컴포넌트:
- **DocumentTitle**: 모든 스토리 상단 고정 헤더
- **PageContainer**: 모든 스토리 콘텐츠 감싸는 컨테이너
- **SectionTitle**: 콘텐츠 섹션 구분용 타이틀

## 베리에이션 원칙 (CRITICAL)

```jsx
// ❌ 조합별 과도한 스토리
export const PrimarySmall = { args: { variant: 'primary', size: 'small' } };
export const PrimaryMedium = { args: { variant: 'primary', size: 'medium' } };

// ✅ Default + Controls로 사용자 직접 조작
export const Default = {
  args: { variant: 'primary', size: 'medium', label: '버튼' },
};
```

## 스토리 개수 제한
- Style 섹션: 1-3개
- Component 섹션: 1-3개 (Default 필수, Variants/States 선택)
