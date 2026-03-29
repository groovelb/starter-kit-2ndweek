---
name: storybook
description: Storybook 스토리 파일 생성/수정 시 자동 활성화. 카테고리 구조, argTypes, 베리에이션 작성 규칙 제공.
user-invocable: false
paths: "**/*.stories.jsx,**/*.stories.tsx,.storybook/**/*"
---

# Storybook 작성 규칙

## 카테고리 구조 (CRITICAL)

| 카테고리 | title 접두사 | 파일 위치 |
|---------|-------------|----------|
| Style | `Style/` | 디자인 토큰 문서 |
| Custom Component | `Custom Component/` | `src/components/` |
| Template | `Template/` | `src/templates/` |
| Section | `Section/` | `src/sections/` |
| Page | `Page/` | `src/pages/` |

## 필수 규칙

- 첫 번째 스토리는 `Default` (autodocs 사용 시)
- 스토리 한 개당 단일 컴포넌트만
- 모든 props를 `argTypes` + `control`로 조작 가능하게
- **Minimal Variations**: Controls로 사용자가 직접 조작. 조합별 과도한 스토리 금지
- 설명은 한글, DocumentTitle props 값은 영어

## 상세 규칙

- [작성 가이드 상세](storybook-guide.md)
- [컴포넌트 목록](../component-create/components.md)
