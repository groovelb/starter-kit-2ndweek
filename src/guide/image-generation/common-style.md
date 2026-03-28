# Lumenstate Product Image — Common Style Guide

Gemini API (Nano Banana 2) 이미지 생성을 위한 공통 비주얼 규칙.
모든 제품 이미지는 이 규칙을 공유한다.

---

## 1. Style Keywords

모든 프롬프트에 포함해야 하는 스타일 키워드:

```
Dieter Rams, Bauhaus, Apple industrial design, geometric, symmetric,
minimalist, photorealistic product photography
```

---

## 2. Composition (구도)

| 항목 | 값 |
|------|-----|
| Aspect Ratio | 3:4 (portrait) |
| Product Fill | 프레임의 40-60% (제품별 `fillRatio` 참조) |
| Alignment | 정중앙 (center-center) |
| Camera Angle | 정면 또는 약간의 3/4 뷰 (제품 설치 방식에 따라) |
| Depth of Field | 전체 샤프 (deep focus), 배경 보케 없음 |

### 설치 방식별 카메라 각도

| Mounting | Camera Angle |
|----------|-------------|
| ceiling | 약간 아래에서 올려보는 앵글 (slight low angle, looking up) |
| wall | 정면 (straight-on, eye level) |
| stand | 약간 위에서 내려보는 앵글 (slight high angle) |
| desk | 3/4 위에서 (three-quarter overhead) |

---

## 3. Background (배경)

### Day Mode
- **색상**: `#E8E5E1` (Warm Off-White)
- **특징**: 균일한 무한 배경(seamless studio backdrop), 그라데이션 없음
- **바닥면**: 배경과 동일 톤, 수평선 없음 (일체형)

### Night Mode
- **색상**: `#12100E` (Warm Black)
- **특징**: 균일한 무한 배경, 제품 발광에 의한 자연스러운 밝기 변화만 허용
- **바닥면**: 제품 광원에 의해 미세하게 밝아지는 것만 허용

---

## 4. Material Palette (재질)

모든 제품은 2가지 재질만 사용:

| 재질 | 설명 | 표면 |
|------|------|------|
| Frame | Matte black anodized aluminum | 무광, 미세한 메탈 텍스처 |
| Diffuser | White frosted glass / opaline acrylic | 반투명, 부드러운 산란 |

**금지 재질**: 우드, 패브릭, 크롬(광택), 골드, 컬러 도장

---

## 5. Lighting (조명)

### Day Mode — Studio Lighting
- **광원**: 소프트박스, 좌상단에서 균일 확산광
- **그림자**: 제품 아래/뒤로 부드러운 드롭 섀도 (opacity ~15%, blur ~30px)
- **반사**: 없음 (매트 재질이므로 스페큘러 하이라이트 최소화)
- **제품 상태**: 꺼짐 (OFF) — 디퓨저는 불투명한 화이트

### Night Mode — Self-Illumination Only
- **광원**: 제품 자체가 유일한 광원
- **그림자**: 없음 (광원이 제품 내부)
- **주변 영향**: 제품 가까운 벽면/바닥에 따뜻한 앰버 반사광
- **제품 상태**: 켜짐 (ON) — 디퓨저가 앰버 발광

---

## 6. Color Temperature (색온도)

Night Mode 발광색은 **3800K** 색온도를 기준으로 한다:

| 항목 | 값 |
|------|-----|
| 색온도 | 3800K (Warm White) |
| Hex 근사 | `#FFC66E` (앰버-화이트) |
| RGB | R: 255, G: 198, B: 110 |
| 분위기 | 따뜻하지만 과하지 않은 촛불 직전의 온기 |

**발광 강도 가이드:**
- 디퓨저 중심: 100% 밝기 (거의 화이트에 가까운 앰버)
- 디퓨저 가장자리: 80% 밝기 (앰버 톤 강해짐)
- 주변 벽/바닥 반사: 20-30% 밝기 (은은한 앰버 풀)

---

## 7. Watermark (Night Mode Only)

Night Mode 이미지에만 4각 별 워터마크 포함:

- **형태**: 4-pointed star (✦)
- **위치**: 우하단 (right: 5%, bottom: 5%)
- **크기**: 프레임 높이의 ~3%
- **색상**: `#C0B8A8` (밝은 웜 그레이, 반투명)

---

## 8. Forbidden Elements (금지 요소)

프롬프트의 Negative Prompt에 항상 포함:

```
No gradient background, no text, no logos, no brand name,
no environment, no interior, no furniture, no people,
no reflective surfaces, no glossy finish, no chrome,
no lens flare, no bokeh, no color fringing,
no wireframe, no sketch style, no illustration,
no multiple products, no accessories
```

---

## 9. Image Specifications

| 항목 | 값 |
|------|-----|
| Resolution | 1024 x 1365 (3:4) 또는 동비율 |
| Format | PNG (투명 배경 아님) |
| Color Space | sRGB |
| Bit Depth | 8-bit |
| 파일명 규칙 | `{id}.png` (Day), `{id}-1.png` (Night) |
