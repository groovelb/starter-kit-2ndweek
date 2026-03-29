# Lumenstate UX Flow

## Page Structure

- Header
- Hero Section
- Brand Value Section
- Product Showcase Section

---

## 1. Header

상단 고정 노출.
- 로고: 브랜드 인지
- 실시간 시계: 현재 시간 표시, 낮/밤 아이콘
- 타임라인 아이콘: 스크롤 후 표시, 시간대 빠른 전환

---

## 2. Hero Section

첫 화면. 브랜드 메시지와 제품 분위기 전달.

- 무드보드 에디토리얼 이미지 (8:4 그리드)
- 좌측 상단에 브랜드명/태그라인 오버레이
- 타임라인에 따라 낮↔밤 이미지 크로스페이드 (TimeBlendImage)

---

## 3. Brand Value Section

3가지 핵심 가치 전달 (정적 콘텐츠):
1. Immanence - 공간에 스며드는 빛
2. Continuity - 자연스러운 낮→밤 전환
3. Flexibility - 자동화와 수동 제어의 균형

---

## 4. Product Showcase Section

### 시간대별 테마 전환

| 시간 | 배경 | 텍스트 | 제품 사진 |
|------|------|--------|----------|
| 12:00pm | 밝은 배경 | 어두운 텍스트 | 낮 버전 |
| 4:00pm | 밝음 유지 | - | - |
| 8:00pm | 어두운 배경 | 밝은 텍스트 | 밤 버전 |
| 12:00am | 어두움 유지 | - | - |

### 인터랙션
- 타임라인 슬라이더: 제품 사진 낮↔밤 크로스페이드 + 배경색 + 텍스트색 동시 전환
- 타임라인 아이콘 클릭: 4단계 시간대 즉시 이동
- 필터: 제품 타입별 그리드 필터링
- 슬라이더 화면 밖 스크롤 시 헤더에 미니 타임라인 표시

---

## User Journey

1. 진입 → 브랜드 인지 (Hero)
2. 제품 분위기 체험 (Hero 무드보드 낮↔밤)
3. 브랜드 철학 이해 (Brand Value)
4. 제품 탐색 (Product Showcase 필터)
5. 시간대별 변화 체험 (슬라이더 낮/밤 전환)
