/**
 * Lumenstate Product Image Generator
 *
 * Gemini API (Nano Banana 2)를 사용하여 제품 이미지를 생성하는 스크립트.
 *
 * 생성 워크플로우:
 *   1. Day 이미지를 텍스트 프롬프트로 생성
 *   2. Day 이미지를 레퍼런스로 + Night 프롬프트로 Night 이미지 생성
 *   → 동일 제품 형태의 일관된 Day/Night 쌍 보장
 *
 * Usage:
 *   node scripts/generate-product-images.mjs                  # 전체 제품 Day→Night 순차 생성
 *   node scripts/generate-product-images.mjs --ids 1,2,3      # 특정 제품만
 *   node scripts/generate-product-images.mjs --mode day        # Day만 생성
 *   node scripts/generate-product-images.mjs --mode night      # Night만 (기존 Day 이미지 레퍼런스)
 *   node scripts/generate-product-images.mjs --dry-run         # 프롬프트만 출력
 */

import { GoogleGenAI } from '@google/genai';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

// ---------- Setup ----------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

dotenv.config({ path: path.join(ROOT, '.env.local') });

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set in .env.local');
  process.exit(1);
}

const MODEL = 'gemini-3.1-flash-image-preview';
const OUTPUT_DIR = path.join(ROOT, 'src/assets/product');
const DELAY_MS = 3000;

// ---------- Common Style Constants ----------

const STYLE = {
  dayBg: '#E8E5E1',
  nightBg: '#12100E',
  emissionColor: '#FFC66E',
  colorTemp: '3800K',
  aspectRatio: '3:4',
  resolution: '2K',
};

// ---------- Camera Angle ----------

const CAMERA_ANGLE = 'Straight-on frontal view, perfectly centered, perpendicular to the product face. No diagonal, no 3/4 view, no angled perspective.';

// ---------- Product Specifications ----------

const PRODUCTS = [
  {
    id: 1,
    form: 'circular ceiling ring',
    mounting: 'flush-mount',
    fillRatio: 60,
    formDetail: 'A shallow cylindrical ring mounted flush to the ceiling. The ring has a flat outer band (matte black, ~5cm height) with a large circular frosted glass diffuser recessed inside. Diameter ~40cm. Clean geometric circle viewed straight-on from the front.',
    lightPatternDetail: 'Warm amber light radiates downward from the frosted diffuser inside the ring. The inner surface of the ring catches a subtle warm reflection. A soft pool of light appears on the surface below. The ring frame becomes a dark silhouette framing the glowing disc.',
  },
  {
    id: 2,
    form: 'parabolic arc floor lamp',
    mounting: 'floor-standing',
    fillRatio: 85,
    formDetail: 'A large parabolic arc lamp standing on the floor. Thin black metal rod (diameter ~8mm) rises from a square black stone base (~20cm), curves in a smooth parabolic arc overhead, and terminates in a small horizontal light bar (~15cm wide). Total height ~180cm. The arc sweeps from lower-left to upper-right.',
    lightPatternDetail: 'The small horizontal light bar at the arc\'s end emits warm amber light downward. A focused pool of warm light appears on the floor beneath the bar. The thin arc rod is barely visible against the dark background. The stone base catches minimal reflected light.',
  },
  {
    id: 3,
    form: 'horizontal rectangular wall sconce',
    mounting: 'wall-mount',
    fillRatio: 45,
    formDetail: 'A wide horizontal rectangular box mounted on a wall. Matte white outer shell (~30cm wide x 8cm tall x 5cm deep) with a narrow horizontal black slit running across the center front face. Clean geometric rectangle with sharp edges. Viewed straight-on.',
    lightPatternDetail: 'Warm amber light washes upward from the top edge and downward from the bottom edge. The central black slit remains dark, creating a striking horizontal division. Light creates a symmetrical glow pattern on the wall above and below the fixture.',
  },
  {
    id: 4,
    form: 'slim horizontal linear wall bar',
    mounting: 'wall-mount',
    fillRatio: 40,
    formDetail: 'A very slim horizontal linear bar mounted on a wall. Two parallel thin black metal rails (~40cm wide x 2cm total height) with a narrow luminous gap between them. Minimal depth (~2cm from wall). Extremely thin and linear. Viewed straight-on.',
    lightPatternDetail: 'Warm amber light emanates from the narrow gap between the two parallel rails. Light washes the wall to left and right, creating a wide horizontal glow band. The fixture appears as a thin luminous line floating on the dark wall.',
  },
  {
    id: 5,
    form: 'flat rectangular wall panel',
    mounting: 'wall-mount',
    fillRatio: 40,
    formDetail: 'A flat vertical rectangular panel mounted flush on a wall. White frosted face (~20cm wide x 28cm tall x 3cm deep) with no visible frame or border. Sharp 90-degree edges. The surface is perfectly flat and uniform. Appears almost like a blank white canvas on the wall.',
    lightPatternDetail: 'Warm amber light radiates upward from behind the top edge and downward from behind the bottom edge, washing the wall. The front face remains a dark silhouette. Creates a glowing halo effect around the rectangular perimeter.',
  },
  {
    id: 6,
    form: 'tall vertical cylindrical column',
    mounting: 'floor-standing',
    fillRatio: 70,
    formDetail: 'A tall slender cylinder standing upright on the floor. Matte black metal housing with a continuous vertical frosted panel running the full height of one face. Small circular base (~12cm diameter). Total height ~120cm, diameter ~8cm. A thin black power cord trails from the base.',
    lightPatternDetail: 'The vertical frosted panel glows with warm amber light along its full height. Light radiates outward from the panel face, illuminating the floor on one side. The cylinder creates a tall luminous vertical line in the dark space. The base and top emit subtle downward and upward wash respectively.',
  },
  {
    id: 7,
    form: 'square wall panel with rounded corners',
    mounting: 'wall-mount',
    fillRatio: 40,
    formDetail: 'A square panel with generously rounded corners (~radius 8mm), mounted flat on a wall. White frosted face (~18cm x 18cm x 3cm deep). Subtle black edge border (~2mm). The square appears as a softened geometric form, almost like a large rounded button. Viewed straight-on at eye level.',
    lightPatternDetail: 'Warm amber light radiates from all four edges outward onto the wall surface. Creates a dramatic cross-shaped or diamond-shaped glow pattern. The panel face becomes a dark square, while the surrounding wall catches the warm light in all four cardinal directions.',
  },
  {
    id: 8,
    form: 'torus wall light',
    mounting: 'wall-mount',
    fillRatio: 50,
    formDetail: 'A torus (donut) shaped ring mounted on a wall, viewed straight-on from the front. White frosted outer surface, smooth continuous ring form. Outer diameter ~20cm, inner diameter ~10cm, ring cross-section ~5cm. No visible mounting hardware. The torus appears to float on the wall surface.',
    lightPatternDetail: 'The entire torus ring glows with warm amber light from its frosted surface. The inner hole creates a bright focal point with light converging inward. An outer halo of warm light surrounds the ring on the wall. Creates a luminous eclipse-like effect — a glowing ring with a bright center void.',
  },
  {
    id: 9,
    form: 'circular frame with horizontal bisecting bar',
    mounting: 'wall-mount',
    fillRatio: 55,
    formDetail: 'A perfect circle frame (diameter ~30cm, frame thickness ~1.5cm) mounted flat on a wall, with a thin horizontal bar bisecting the circle at its exact center, connecting both sides of the ring. The bar has a small junction node at the center point. All elements are matte black metal. Viewed straight-on.',
    lightPatternDetail: 'Warm amber light fills the interior of the circular frame, radiating outward through a frosted inner surface that spans the full circle. The horizontal bar and frame become dark silhouettes against the glowing disc. Creates a luminous full-moon effect, similar to a solar eclipse with the bar casting a thin shadow line across the illuminated disc.',
  },
  {
    id: 10,
    form: 'tall cylindrical column with frosted body',
    mounting: 'floor-standing',
    fillRatio: 55,
    formDetail: 'A tall cylinder standing upright, like a column or bollard. White frosted glass body (~12cm diameter x 35cm tall) with thin black metal top cap and base ring. Simple, monolithic cylindrical form. No visible seams or joints. Viewed straight-on from the front.',
    lightPatternDetail: 'The entire frosted glass cylinder body glows uniformly with warm amber light. Light radiates in all directions (360 degrees), creating a soft ambient glow. The floor beneath catches a circular pool of warm light. The black top cap and base ring frame the glowing column above and below.',
  },
  {
    id: 11,
    form: 'square bracket spotlight',
    mounting: 'wall-mount',
    fillRatio: 35,
    formDetail: 'A small square bracket (~10cm x 10cm x 8cm) mounted on a wall. Open-front square housing in matte white with a cylindrical inner lamp holder (matte gray). The cylinder is recessed inside the square frame. Compact, cubic geometry. Viewed straight-on.',
    lightPatternDetail: 'Warm amber light projects downward from the cylindrical lamp inside the bracket. A focused cone of warm light illuminates the wall below the fixture. The square housing catches subtle internal reflections. The top and sides of the bracket remain in shadow.',
  },
  {
    id: 12,
    form: 'dome ceiling flush-mount',
    mounting: 'flush-mount',
    fillRatio: 45,
    formDetail: 'A hemispherical dome mounted flush to the ceiling. Upper dome is white frosted glass, lower edge has a thin black metal ring band. Below the band, a secondary smaller frosted glass lens faces downward. Total diameter ~30cm, dome height ~10cm. Viewed straight-on from the front.',
    lightPatternDetail: 'Warm amber light glows from both the upper dome and lower lens. The dome radiates light upward (reflected off the ceiling), while the lower lens projects light downward. The black ring band creates a dark equatorial line. Creates a warm floating orb effect on the ceiling.',
  },
  {
    id: 13,
    form: 'cylindrical bollard',
    mounting: 'floor-standing',
    fillRatio: 55,
    formDetail: 'A vertical cylindrical bollard standing on a circular base plate. White matte body (~10cm diameter x 35cm tall) with a horizontal translucent band near the top (~3cm height). Small circular indicator on the front face. Flat circular base plate extends ~2cm beyond the cylinder diameter.',
    lightPatternDetail: 'The translucent horizontal band near the top glows with warm amber light. Light radiates outward in a 360-degree horizontal ring pattern. The body above and below the band remains in relative shadow. A subtle warm glow appears on the floor around the base plate.',
  },
  {
    id: 14,
    form: 'multi-tier horizontal wall fixture',
    mounting: 'wall-mount',
    fillRatio: 40,
    formDetail: 'Two parallel horizontal bars with cylindrical end caps, stacked vertically and mounted on a wall bracket. Each bar is ~30cm wide. Chrome-like matte silver finish with subtle black accents. The bars are spaced ~3cm apart. Viewed straight-on.',
    lightPatternDetail: 'Warm amber light emanates from between and around the horizontal bars. Light washes the wall above and below the fixture. The bars create a layered shadow/light pattern with two distinct glow lines. End caps catch subtle warm reflections.',
  },
  {
    id: 15,
    form: 'modular block composition',
    mounting: 'freestanding',
    fillRatio: 45,
    formDetail: 'Five rectangular blocks with rounded corners assembled in an asymmetric grid composition. Each block varies in size (roughly 4x8cm to 8x12cm). Blocks are arranged like an abstract Tetris formation or Mondrian-inspired layout. White frosted faces with black (~3mm) edge frames. The composition stands freely on a surface.',
    lightPatternDetail: 'Each block\'s frosted face glows individually with warm amber light. Different blocks may glow at slightly different intensities, creating depth variation. Light seeps through the gaps between blocks. The overall composition becomes a warm, luminous sculptural cluster. The surface beneath catches a complex warm light pattern from multiple sources.',
  },
];

// ---------- Prompt Builders ----------

function buildDayPrompt(product) {
  return `A minimalist ${product.form} lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

${product.formDetail}

Material: matte black anodized aluminum frame with white frosted glass diffuser.
The light is OFF — the product exists as a pure sculptural object. The diffuser surface is opaque white, showing no illumination.

Background: clean, uniform warm off-white (${STYLE.dayBg}), seamless infinite studio backdrop with no visible horizon line.
Lighting: soft, even studio lighting from above-left at 45 degrees. Subtle soft contact shadow beneath the product (opacity 15%, soft edge).

Composition: centered in frame, product fills approximately ${product.fillRatio}% of the image area. The product must have at least 15% padding from all edges (top, bottom, left, right) of the frame. 3:4 portrait aspect ratio.
Camera: ${CAMERA_ANGLE}

Style: photorealistic product photography with Apple-level precision and cleanliness. Geometric symmetry. Ultra-clean rendering.
No environment, no text, no logos, no reflections, no lens flare, no bokeh, no color fringing, no people, no furniture, no diagonal view, no angled composition, no 3/4 view, no perspective distortion, no tilted camera.`;
}

function buildNightPrompt(product) {
  return `Transform this product lighting fixture image into a night/dark mode version. Keep the EXACT same product shape, frontal angle, composition, and position.

Changes to apply:
- Background: change to deep warm black (${STYLE.nightBg}), uniform and seamless.
- Light state: turn the light ON. The frosted glass diffuser now emits warm ${STYLE.colorTemp} color temperature light — soft amber-white tone (${STYLE.emissionColor}).
- Light behavior: ${product.lightPatternDetail}
- The product is the ONLY light source in the scene. All illumination comes from the product's glowing diffuser.
- Nearby surfaces (wall, ceiling, floor) catch subtle warm amber reflections from the product's emitted light.
- Mood: dramatic chiaroscuro, cinematic atmosphere. The warm glowing product contrasts with the deep dark surroundings.
- Add a small 4-pointed star symbol as a subtle watermark in the bottom-right corner (warm gray #C0B8A8, ~3% of frame height).

Keep unchanged: product form, material (matte black aluminum frame), straight-on frontal camera angle, composition with 15% padding from all edges, aspect ratio.
No text, no logos, no lens flare, no gradient in background, no additional light sources, no people, no furniture, no diagonal view, no angled composition, no 3/4 view, no perspective distortion.`;
}

// ---------- Image Generation ----------

/**
 * Day 이미지 생성: 텍스트 프롬프트만 사용
 */
async function generateDayImage(ai, prompt, outputPath) {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: prompt,
    config: {
      responseModalities: ['TEXT', 'IMAGE'],
      imageConfig: {
        aspectRatio: STYLE.aspectRatio,
        imageSize: STYLE.resolution,
      },
    },
  });

  return extractAndSaveImage(response, outputPath);
}

/**
 * Night 이미지 생성: Day 이미지를 레퍼런스로 + Night 프롬프트
 */
async function generateNightImage(ai, prompt, dayImagePath, outputPath) {
  const dayImageData = fs.readFileSync(dayImagePath);
  const base64Image = dayImageData.toString('base64');

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [
      {
        role: 'user',
        parts: [
          {
            inlineData: {
              mimeType: 'image/png',
              data: base64Image,
            },
          },
          { text: prompt },
        ],
      },
    ],
    config: {
      responseModalities: ['TEXT', 'IMAGE'],
      imageConfig: {
        aspectRatio: STYLE.aspectRatio,
        imageSize: STYLE.resolution,
      },
    },
  });

  return extractAndSaveImage(response, outputPath);
}

/**
 * API 응답에서 이미지 추출 후 파일 저장
 */
function extractAndSaveImage(response, outputPath) {
  const parts = response.candidates?.[0]?.content?.parts;
  if (!parts) {
    throw new Error('No response parts received from API');
  }

  for (const part of parts) {
    if (part.inlineData) {
      const buffer = Buffer.from(part.inlineData.data, 'base64');
      fs.writeFileSync(outputPath, buffer);
      return { success: true, size: buffer.length };
    }
  }

  throw new Error('No image data in response');
}

// ---------- CLI ----------

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    ids: null,
    mode: 'both',
    dryRun: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
    case '--ids':
      options.ids = args[++i].split(',').map(Number);
      break;
    case '--mode':
      options.mode = args[++i];
      break;
    case '--dry-run':
      options.dryRun = true;
      break;
    case '--help':
      console.log(`
Lumenstate Product Image Generator

Workflow:
  1. Day image: generated from text prompt only
  2. Night image: Day image as reference + Night transformation prompt

Usage:
  node scripts/generate-product-images.mjs [options]

Options:
  --ids <ids>    Comma-separated product IDs (default: all)
  --mode <mode>  'day', 'night', or 'both' (default: both)
  --dry-run      Print prompts without calling API
  --help         Show this help message

Examples:
  --ids 1,2,3              Generate products 1, 2, 3 (day + night)
  --ids 1,2 --mode day     Generate only day images for products 1, 2
  --mode night             Generate night images using existing day images as reference
`);
      process.exit(0);
    }
  }

  return options;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  const kb = bytes / 1024;
  if (kb < 1024) return kb.toFixed(1) + ' KB';
  return (kb / 1024).toFixed(1) + ' MB';
}

// ---------- Main ----------

async function main() {
  const options = parseArgs();

  const products = options.ids
    ? PRODUCTS.filter((p) => options.ids.includes(p.id))
    : PRODUCTS;

  if (products.length === 0) {
    console.error('Error: No matching products found');
    process.exit(1);
  }

  const generateDay = options.mode === 'day' || options.mode === 'both';
  const generateNight = options.mode === 'night' || options.mode === 'both';

  // Count total tasks
  let totalTasks = 0;
  if (generateDay) totalTasks += products.length;
  if (generateNight) totalTasks += products.length;

  console.log(`\n  Lumenstate Image Generator`);
  console.log(`  Model: ${MODEL}`);
  console.log(`  Resolution: ${STYLE.resolution} (${STYLE.aspectRatio})`);
  console.log(`  Products: ${products.map((p) => p.id).join(', ')}`);
  console.log(`  Mode: ${options.mode}`);
  console.log(`  Workflow: ${generateDay && generateNight ? 'Day (text) → Night (day ref + prompt)' : generateDay ? 'Day (text prompt)' : 'Night (day ref + prompt)'}`);
  console.log(`  Tasks: ${totalTasks} images\n`);

  // Dry run
  if (options.dryRun) {
    for (const product of products) {
      if (generateDay) {
        console.log(`${'='.repeat(60)}`);
        console.log(`  Product #${product.id} — DAY MODE (text-to-image)`);
        console.log(`  Output: ${product.id}.png`);
        console.log(`${'='.repeat(60)}\n`);
        console.log(buildDayPrompt(product));
        console.log('\n');
      }
      if (generateNight) {
        console.log(`${'='.repeat(60)}`);
        console.log(`  Product #${product.id} — NIGHT MODE (image ref: ${product.id}.png + prompt)`);
        console.log(`  Output: ${product.id}-1.png`);
        console.log(`${'='.repeat(60)}\n`);
        console.log(buildNightPrompt(product));
        console.log('\n');
      }
    }
    console.log('Dry run complete. No API calls were made.');
    return;
  }

  // Ensure output dir
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  let completed = 0;
  let failed = 0;
  let taskIndex = 0;

  for (const product of products) {
    const dayPath = path.join(OUTPUT_DIR, `${product.id}.png`);
    const nightPath = path.join(OUTPUT_DIR, `${product.id}-1.png`);

    // --- Day ---
    if (generateDay) {
      taskIndex++;
      const label = `[${taskIndex}/${totalTasks}] Product #${product.id} (day)`;
      process.stdout.write(`  ${label} ... `);

      try {
        const result = await generateDayImage(ai, buildDayPrompt(product), dayPath);
        console.log(`OK (${formatBytes(result.size)}) -> ${product.id}.png`);
        completed++;
      } catch (error) {
        console.log(`FAILED: ${error.message}`);
        failed++;
      }

      if (taskIndex < totalTasks) await sleep(DELAY_MS);
    }

    // --- Night (uses day image as reference) ---
    if (generateNight) {
      taskIndex++;
      const label = `[${taskIndex}/${totalTasks}] Product #${product.id} (night <- ${product.id}.png ref)`;
      process.stdout.write(`  ${label} ... `);

      // Check day image exists
      if (!fs.existsSync(dayPath)) {
        console.log(`SKIPPED: day image ${product.id}.png not found (generate day first)`);
        failed++;
        if (taskIndex < totalTasks) await sleep(DELAY_MS);
        continue;
      }

      try {
        const result = await generateNightImage(
          ai,
          buildNightPrompt(product),
          dayPath,
          nightPath
        );
        console.log(`OK (${formatBytes(result.size)}) -> ${product.id}-1.png`);
        completed++;
      } catch (error) {
        console.log(`FAILED: ${error.message}`);
        failed++;
      }

      if (taskIndex < totalTasks) await sleep(DELAY_MS);
    }
  }

  console.log(`\n  Done: ${completed} succeeded, ${failed} failed out of ${totalTasks} total`);
  if (completed > 0) {
    console.log(`  Output: ${OUTPUT_DIR}/`);
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
