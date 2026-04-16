# Elevation Image Prompt Templates

## Architecture 섹션 핵심 키워드

카메라/구도 제어:
- `perfectly frontal, orthographic-style photograph`
- `camera perpendicular to the facade`
- `NO perspective convergence, NO vanishing point, NO foreshortening`
- `like an architectural elevation drawing rendered as a photorealistic photograph`

건축 실루엣:
- `two-story, flat roof, minimal overhang`
- `clean rectangular massing`
- `smooth white plaster walls (${dayBg})`
- `thin dark steel window frames (~3cm)`
- `6 large floor-to-ceiling window bays: 3 ground, 3 upper`
- `horizontal floor slab separates levels`

창문 투명도:
- `windows are perfectly clean — no reflections, no glare`
- `as if the glass is invisible, like a dollhouse section`
- `interior fully and clearly visible through each window`

## Room 섹션 템플릿

### Day 모드
```
[위치] — [공간명]:
Through this window, viewed in perfect frontal composition
(camera perpendicular to the interior back wall), the room
is fully visible. [인테리어 설명]

Product: [제품 description] The light is OFF — exists as
a pure sculptural object.

Person: [인물 설명. Face not visible.]

The room is lit by soft natural daylight. Warm neutral tones.
Reads as a self-contained Kinfolk editorial frame.
```

### Night 모드
```
[위치] — [공간명]:
EXACT same room layout, person pose, product position maintained.
[인테리어 설명]

Product: [제품 description] The light is now ON.
[lightPattern 설명]

Product is the ONLY light source. Room 90-95% dark.
Surfaces near product: warm amber reflections (20-30%).
Person: mostly silhouette, only hands/work surface lit.
Walls/floor fade to #12100E.
```

## Photography 섹션 핵심 키워드

### Day
- `Kinfolk / Cereal magazine editorial`
- `warm neutral color palette (#F0EDE8 range)`
- `subtle film grain, soft contrast`
- `soft, even overcast daylight`
- `bright, airy, serene`

### Night
- `deep warm black sky (${nightBg})`
- `house becomes dark silhouette with six glowing amber windows`
- `all rooms: EXACT same emission color — 3800K, ${emissionColor}`
- `warm glow spills through windows onto exterior facade`
- `warm, intimate, deeply atmospheric`
- `constellation of warm amber windows`

## Negative Prompt

```
No stock photo look, no posed model, no smile, no eye contact
with camera, no bright saturated colors, no HDR over-processing,
no lens flare, no vignette, no split toning, no teal-and-orange
grading, no diagonal camera angle, no 3/4 view, no perspective
convergence, no fish-eye, no wide-angle distortion, no text,
no logos, no watermarks.
```

## 제품 선택 가이드

방 배치 시 다양한 mounting 타입을 혼합하면 시각적 다양성 확보:

| Mounting | 적합한 방 | 추천 제품 |
|----------|----------|----------|
| floor-standing | 거실, 스튜디오, 로프트 | #2, #6, #10, #18 |
| wall-mount | 복도, 명상실, 침실 | #3, #4, #5, #7, #8, #9, #11, #14, #19 |
| flush-mount/pendant | 다이닝, 워크숍, 주방 | #1, #12, #16 |
| freestanding (desk) | 서재, 홈오피스 | #15, #17, #20 |
