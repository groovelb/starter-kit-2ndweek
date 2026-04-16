---
name: elevation-image
description: Front Elevation 브랜드 이미지 생성 스킬. 단독주택 정면 구도에서 통창 너머 각 방의 Lumenstate 조명 제품과 인물이 보이는 에디토리얼 이미지 생성.
user-invocable: false
paths: "scripts/generate-elevation-image*,src/assets/elevation/**/*"
---

# Elevation Image Generation

## 개요

단독주택 Front Elevation 구도의 브랜드 이미지를 Gemini API로 생성.
6개 창문(2층 x 3칸)을 통해 각 방의 인테리어, 인물, Lumenstate 조명 제품이 보이는 구성.

## 생성 워크플로우

```
Day 프롬프트 (text-to-image)
  → elevation-day.png (자연광, 제품 OFF)
    → Night 프롬프트 (Day 레퍼런스 + prompt)
      → elevation-night.png (제품 ON, 3800K 발광)
```

## 프롬프트 3단 구조

| 섹션 | 내용 |
|------|------|
| ARCHITECTURE | 집 실루엣, 소재, 창문 배치, 정면 orthographic 카메라 |
| ROOMS[] | 각 방의 위치, 배정 제품, 인물 활동, 가구/소재 |
| PHOTOGRAPHY | 색감, 톤, Day/Night 라이팅, Negative 프롬프트 |

## 현재 방 배치

| 위치 | 공간 | 제품 |
|------|------|------|
| 1F 좌 | 거실 | #2 Arc Lamp |
| 1F 중 | 다이닝 | #16 Cube Pendant |
| 1F 우 | 스튜디오 | #6 Column Lamp |
| 2F 좌 | 서재 | #17 Hemisphere Lamp |
| 2F 중 | 갤러리 복도 | #11 Arch Portal |
| 2F 우 | 명상실 | #8 Split Disc |

## 핵심 규칙

- 카메라: 100% 정면(frontal orthographic) — 원근 수렴 절대 금지
- 각 방 구도: 정면 — 대각선 금지
- 색상: Day `#E8E5E1` / Night `#12100E` / 발광 `#FFC66E` (3800K)
- 인물: 얼굴 안 보임, 환경의 일부, Kinfolk 에디토리얼 스타일
- 비율: 16:9

## 사용법

```bash
node scripts/generate-elevation-image.mjs                # Day + Night
node scripts/generate-elevation-image.mjs --mode day     # Day만
node scripts/generate-elevation-image.mjs --mode night   # Night만
node scripts/generate-elevation-image.mjs --dry-run      # 프롬프트만 출력
```

## 출력

```
src/assets/elevation/
  elevation-day.png
  elevation-night.png
```

## 참조

- 프롬프트 템플릿 상세: [prompt-templates.md](prompt-templates.md)
- 제품 스펙: `scripts/generate-product-images.mjs` > PRODUCTS
- 브랜드 무드 레퍼런스: `src/assets/brand-mood/`
