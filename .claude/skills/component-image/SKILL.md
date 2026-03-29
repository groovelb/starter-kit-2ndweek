---
name: component-image
description: 이미지를 포함하는 컴포넌트 생성/수정 시 이미지 정책 적용. 이미지 표시 규칙, Gemini API 생성 규칙, 무드보드 구도 규칙 포함.
user-invocable: false
paths: "src/components/**/*,src/sections/**/*,src/templates/**/*,src/pages/**/*,scripts/generate-*"
---

# Lumenstate 이미지 컴포넌트 정책

이미지를 포함하는 컴포넌트를 생성하거나 수정할 때 아래 정책을 따른다.

## 핵심 규칙

1. **원본 비율 유지**: `width: 100%; height: auto; display: block` — `object-fit: cover/contain` 금지
2. **그리드 높이 매칭**: CSS로 억지로 맞추지 말고, 이미지 소스 자체를 올바른 비율로 생성
3. **Gemini API 비율**: 지원 비율만 사용, 수학적 근사 허용 범위 ~2-3px

## 상세 정책

- [이미지 표시 및 생성 정책](image-policy.md)
- [공통 비주얼 스타일 가이드](../../src/guide/image-generation/common-style.md)
- [제품별 형태 명세](../../src/guide/image-generation/product-specs.md)
- [프롬프트 템플릿](../../src/guide/image-generation/prompt-template.md)
