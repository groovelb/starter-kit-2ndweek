# Lumenstate Image Prompt Template

Gemini API (Google Nano Banana 2) 이미지 생성을 위한 프롬프트 템플릿.
`common-style.md`의 공통 규칙과 `product-specs.md`의 제품별 명세를 조합한다.

---

## Template Structure

```
[BASE_STYLE] + [MODE_SETTING] + [PRODUCT_FORM] + [COMPOSITION] + [NEGATIVE]
```

각 섹션은 순서대로 조합하여 하나의 프롬프트를 구성한다.

---

## Day Mode Template

```
A minimalist {form} lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

{form_detail}

Material: matte black anodized aluminum frame with white frosted glass diffuser.
The light is OFF — the product exists as a pure sculptural object. The diffuser surface is opaque white, showing no illumination.

Background: clean, uniform warm off-white (#E8E5E1), seamless infinite studio backdrop with no visible horizon line.
Lighting: soft, even studio lighting from above-left at 45 degrees. Subtle soft contact shadow beneath the product (opacity 15%, soft edge).

Composition: centered in frame, product fills approximately {fillRatio}% of the image area. 3:4 portrait aspect ratio (1024x1365px).
Camera: {camera_angle}.

Style: photorealistic product photography with Apple-level precision and cleanliness. Geometric symmetry. Ultra-clean rendering.
No environment, no text, no logos, no reflections, no lens flare, no bokeh, no color fringing, no people, no furniture.
```

---

## Night Mode Template

```
A minimalist {form} lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

{form_detail}

Material: matte black anodized aluminum frame. The diffuser is now actively glowing with warm light.
The light is ON, emitting warm 3800K color temperature light — a soft amber-white tone (#FFC66E).

Light behavior: {light_pattern_detail}

Background: deep warm black (#12100E), seamless infinite studio backdrop. No visible environment.
The product is the ONLY light source in the entire scene. All illumination comes from the product's glowing diffuser.
Nearby surfaces (wall behind, floor below) catch subtle warm amber reflections from the product's light.

Composition: centered in frame, product fills approximately {fillRatio}% of the image area. 3:4 portrait aspect ratio (1024x1365px).
Camera: {camera_angle}.

Style: photorealistic product photography with dramatic chiaroscuro lighting. Cinematic, atmospheric mood. The contrast between the warm glowing product and the deep dark surroundings is the visual focus.
A small 4-pointed star symbol (✦) appears as a subtle watermark in the bottom-right corner (warm gray #C0B8A8, ~3% of frame height).
No text, no logos, no lens flare, no gradient in background, no additional light sources, no people, no furniture.
```

---

## Camera Angle Reference

| Mounting | camera_angle |
|----------|-------------|
| ceiling (flush-mount) | Slight low angle, looking upward at approximately 15 degrees from horizontal |
| wall (wall-mount) | Straight-on at eye level, perpendicular to the wall surface |
| stand (floor-standing) | Slight high angle, looking downward at approximately 10 degrees |
| desk (freestanding) | Three-quarter overhead view, approximately 30 degrees from horizontal |

---

## Complete Examples

### Example 1: Product #1 — Day Mode

```
A minimalist circular ceiling ring lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

A shallow cylindrical ring mounted flush to the ceiling. The ring has a flat outer band (matte black, ~5cm height) with a large circular frosted glass diffuser recessed inside. Diameter ~40cm. Clean geometric circle viewed from slightly below.

Material: matte black anodized aluminum frame with white frosted glass diffuser.
The light is OFF — the product exists as a pure sculptural object. The diffuser surface is opaque white, showing no illumination.

Background: clean, uniform warm off-white (#E8E5E1), seamless infinite studio backdrop with no visible horizon line.
Lighting: soft, even studio lighting from above-left at 45 degrees. Subtle soft contact shadow beneath the product (opacity 15%, soft edge).

Composition: centered in frame, product fills approximately 60% of the image area. 3:4 portrait aspect ratio (1024x1365px).
Camera: Slight low angle, looking upward at approximately 15 degrees from horizontal.

Style: photorealistic product photography with Apple-level precision and cleanliness. Geometric symmetry. Ultra-clean rendering.
No environment, no text, no logos, no reflections, no lens flare, no bokeh, no color fringing, no people, no furniture.
```

### Example 2: Product #1 — Night Mode

```
A minimalist circular ceiling ring lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

A shallow cylindrical ring mounted flush to the ceiling. The ring has a flat outer band (matte black, ~5cm height) with a large circular frosted glass diffuser recessed inside. Diameter ~40cm. Clean geometric circle viewed from slightly below.

Material: matte black anodized aluminum frame. The diffuser is now actively glowing with warm light.
The light is ON, emitting warm 3800K color temperature light — a soft amber-white tone (#FFC66E).

Light behavior: Warm amber light radiates downward from the frosted diffuser inside the ring. The inner surface of the ring catches a subtle warm reflection. A soft pool of light appears on the surface below. The ring frame becomes a dark silhouette framing the glowing disc.

Background: deep warm black (#12100E), seamless infinite studio backdrop. No visible environment.
The product is the ONLY light source in the entire scene. All illumination comes from the product's glowing diffuser.
Nearby surfaces (wall behind, floor below) catch subtle warm amber reflections from the product's light.

Composition: centered in frame, product fills approximately 60% of the image area. 3:4 portrait aspect ratio (1024x1365px).
Camera: Slight low angle, looking upward at approximately 15 degrees from horizontal.

Style: photorealistic product photography with dramatic chiaroscuro lighting. Cinematic, atmospheric mood. The contrast between the warm glowing product and the deep dark surroundings is the visual focus.
A small 4-pointed star symbol (✦) appears as a subtle watermark in the bottom-right corner (warm gray #C0B8A8, ~3% of frame height).
No text, no logos, no lens flare, no gradient in background, no additional light sources, no people, no furniture.
```

### Example 3: Product #9 — Day Mode

```
A minimalist circular wall-mounted light with horizontal bisecting bar, in the style of Dieter Rams and Bauhaus industrial design.

A perfect circle frame (diameter ~30cm, frame thickness ~1.5cm) mounted flat on a wall, with a thin horizontal bar bisecting the circle at its exact center, connecting both sides of the ring. The bar has a small junction node at the center point. All elements are matte black metal. Viewed straight-on.

Material: matte black anodized aluminum frame with white frosted glass diffuser.
The light is OFF — the product exists as a pure sculptural object. The diffuser surface is opaque white, showing no illumination.

Background: clean, uniform warm off-white (#E8E5E1), seamless infinite studio backdrop with no visible horizon line.
Lighting: soft, even studio lighting from above-left at 45 degrees. Subtle soft contact shadow beneath the product (opacity 15%, soft edge).

Composition: centered in frame, product fills approximately 55% of the image area. 3:4 portrait aspect ratio (1024x1365px).
Camera: Straight-on at eye level, perpendicular to the wall surface.

Style: photorealistic product photography with Apple-level precision and cleanliness. Geometric symmetry. Ultra-clean rendering.
No environment, no text, no logos, no reflections, no lens flare, no bokeh, no color fringing, no people, no furniture.
```

### Example 4: Product #15 — Night Mode

```
A minimalist modular block composition lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

Five rectangular blocks with rounded corners assembled in an asymmetric grid composition. Each block varies in size (roughly 4x8cm to 8x12cm). Blocks are arranged like an abstract Tetris formation or Mondrian-inspired layout. White frosted faces with black (~3mm) edge frames. The composition stands freely on a surface.

Material: matte black anodized aluminum frame. The diffuser is now actively glowing with warm light.
The light is ON, emitting warm 3800K color temperature light — a soft amber-white tone (#FFC66E).

Light behavior: Each block's frosted face glows individually with warm amber light. Different blocks may glow at slightly different intensities, creating depth variation. Light seeps through the gaps between blocks. The overall composition becomes a warm, luminous sculptural cluster. The surface beneath catches a complex warm light pattern from multiple sources.

Background: deep warm black (#12100E), seamless infinite studio backdrop. No visible environment.
The product is the ONLY light source in the entire scene. All illumination comes from the product's glowing diffuser.
Nearby surfaces (wall behind, floor below) catch subtle warm amber reflections from the product's light.

Composition: centered in frame, product fills approximately 45% of the image area. 3:4 portrait aspect ratio (1024x1365px).
Camera: Three-quarter overhead view, approximately 30 degrees from horizontal.

Style: photorealistic product photography with dramatic chiaroscuro lighting. Cinematic, atmospheric mood. The contrast between the warm glowing product and the deep dark surroundings is the visual focus.
A small 4-pointed star symbol (✦) appears as a subtle watermark in the bottom-right corner (warm gray #C0B8A8, ~3% of frame height).
No text, no logos, no lens flare, no gradient in background, no additional light sources, no people, no furniture.
```

---

## Landscape / Mood Image Template

제품이 실제 공간에 배치된 무드 이미지 생성용 (별도 필요 시):

### Day Landscape
```
A minimalist modern living room interior with large floor-to-ceiling windows.
Natural daylight fills the space. White/light gray walls, warm wood flooring.
A {form} by Lumenstate is {placement_description}.
The light is OFF. The fixture exists as a design object in the bright space.
A person is casually reading in an armchair nearby.
Style: editorial interior photography, Kinfolk magazine aesthetic.
Warm, natural, serene atmosphere. 16:9 landscape aspect ratio.
```

### Night Landscape
```
The same minimalist modern living room interior, now at night.
No natural light — the windows show darkness outside.
A {form} by Lumenstate is {placement_description}.
The light is ON, emitting warm 3800K amber-white light.
The fixture is the PRIMARY light source. It illuminates only its immediate area,
creating a cozy island of warm light. The rest of the room fades into soft shadow.
A person is casually reading in an armchair under the warm glow.
Style: editorial interior photography, cinematic night scene.
Warm, intimate, contemplative atmosphere. 16:9 landscape aspect ratio.
A small 4-pointed star symbol (✦) watermark in the bottom-right corner.
```

---

## API Usage Notes

### Gemini API (Nano Banana 2) 설정 권장값

```json
{
  "model": "nanobanana2",
  "image_size": { "width": 1024, "height": 1365 },
  "guidance_scale": 7.5,
  "num_inference_steps": 50,
  "seed": null
}
```

### 일관성 유지 팁
- 동일 제품의 Day/Night 쌍은 같은 `seed` 값을 사용하여 구도 일관성 확보
- `guidance_scale`을 높이면 프롬프트 충실도 증가 (8-10 범위 실험)
- 배경색이 정확하지 않으면 "solid background color exactly #E8E5E1" 강조
- Night Mode에서 과도한 글로우가 나타나면 "subtle, controlled glow" 추가
