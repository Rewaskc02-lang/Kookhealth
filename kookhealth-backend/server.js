/* ============================================================
   KookHealth — Express API Server
   Gemini-powered recipe generation and food scanning
   ============================================================ */
require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const fetch   = require('node-fetch');
const path    = require('path');

const app = express();
const WEB_DIR = path.join(__dirname, '..', 'kookhealth-web');

/* ── Middleware ── */
app.use(cors());
app.use(express.json({ limit: '25mb' })); // large enough for base64 images

/* ── Gemini config ── */
const GEMINI_MODEL    = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const GEMINI_ENDPOINT =
  `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

function geminiHeaders() {
  return {
    'Content-Type': 'application/json',
    'x-goog-api-key': process.env.GEMINI_API_KEY,
  };
}

/** Strip code fences and extract the first JSON object/array from Gemini output */
function stripFences(text) {
  // Remove explicit fences
  let cleaned = text
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/g, '')
    .trim();
  // If the result doesn't start with { or [, try to extract the first JSON block
  if (!/^[\[{]/.test(cleaned)) {
    const match = cleaned.match(/([\[{][\s\S]*[\]|}])/m);
    if (match) cleaned = match[1].trim();
  }
  return cleaned;
}

/**
 * Read Gemini error body, log it fully, and return a safe detail string.
 * The API key is redacted before it leaves this function.
 */
function redactApiKey(text) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return text;
  return text.split(apiKey).join('[REDACTED]');
}

function safeDetail(text) {
  return redactApiKey(String(text || '')).replace(/\s+/g, ' ').trim().slice(0, 200);
}

function parseGeminiJson(label, raw) {
  const cleaned = stripFences(raw);
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.error(`[${label}] Gemini returned invalid JSON:\n${redactApiKey(raw)}\n`);
    throw err;
  }
}

function geminiText(data) {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return '';
  return parts.map(part => part?.text || '').join('');
}

async function handleGeminiError(label, response) {
  const errBody  = await response.text();
  console.error(`[${label}] Gemini error — HTTP ${response.status} ${response.statusText}:\n${redactApiKey(errBody)}\n`);
  return `${response.status} ${safeDetail(errBody)}`.trim();
}

/* ────────────────────────────────────────────────────────────
   ENDPOINT 1: POST /api/generate-recipe
   Body: { "ingredients": ["egg", "rice", "tomato"] }
   ──────────────────────────────────────────────────────────── */
app.post('/api/generate-recipe', async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({ error: 'ingredients array is required and must not be empty' });
  }

  const prompt = `You are a professional chef and nutritionist.
Create a unique, healthy, and delicious recipe using some or all of these ingredients: ${ingredients.join(', ')}.
Feel free to include basic pantry staples (salt, pepper, oil, water) as needed.

Respond ONLY with valid JSON — no markdown, no code fences, no explanations.
Use exactly this shape:
{
  "recipeName": "string",
  "cookingTime": "string (e.g. '25 minutes')",
  "servings": "string (e.g. '2 servings')",
  "calories": "string (e.g. '420 kcal per serving')",
  "difficulty": "string (Easy | Medium | Hard)",
  "tags": ["string"],
  "ingredients": [{ "item": "string", "quantity": "string" }],
  "steps": ["string"]
}`;

  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: 'POST',
      headers: geminiHeaders(),
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.75,
          maxOutputTokens: 2048,
          responseMimeType: 'application/json',
        },
      }),
    });

    if (!response.ok) {
      const detail = await handleGeminiError('generate-recipe', response);
      return res.status(500).json({ error: 'Recipe generation failed', detail });
    }

    const data   = await response.json();
    const raw    = geminiText(data);
    const recipe = parseGeminiJson('generate-recipe', raw);

    return res.status(200).json(recipe);
  } catch (err) {
    console.error('[generate-recipe] Unexpected error:', err.message);
    return res.status(500).json({
      error:  'Recipe generation failed',
      detail: safeDetail(err.message),
    });
  }
});

/* ────────────────────────────────────────────────────────────
   ENDPOINT 2: POST /api/scan-food
   Body: { "image": "<base64>", "mimeType": "image/jpeg" }
   ──────────────────────────────────────────────────────────── */
app.post('/api/scan-food', async (req, res) => {
  const { image, mimeType } = req.body;

  if (!image || typeof image !== 'string' || image.length < 10) {
    return res.status(400).json({ error: 'image (base64 string) is required' });
  }
  if (!mimeType || !mimeType.startsWith('image/')) {
    return res.status(400).json({ error: 'mimeType must be a valid image MIME type (e.g. image/jpeg)' });
  }

  const prompt = `You are a nutrition expert and food scientist.
Identify the food shown in this image and estimate its nutritional content for one typical serving.

Respond ONLY with valid JSON — no markdown, no code fences, no explanations.
Use exactly this shape:
{
  "foodName": "string",
  "servingSize": "string (e.g. '1 plate (~350g)')",
  "calories": number,
  "protein": "string (e.g. '24g')",
  "carbs": "string (e.g. '38g')",
  "fat": "string (e.g. '12g')",
  "fiber": "string (e.g. '4g')",
  "sugar": "string (e.g. '6g')",
  "healthScore": number,
  "healthTag": "string (e.g. 'High Protein', 'Low Carb', 'Balanced Meal')",
  "healthNotes": ["string"]
}`;

  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: 'POST',
      headers: geminiHeaders(),
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt },
            { inline_data: { mime_type: mimeType, data: image } },
          ],
        }],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 2048,
          responseMimeType: 'application/json',
        },
      }),
    });

    if (!response.ok) {
      const detail = await handleGeminiError('scan-food', response);
      return res.status(500).json({ error: 'Food analysis failed', detail });
    }

    const data   = await response.json();
    const raw    = geminiText(data);
    const result = parseGeminiJson('scan-food', raw);

    return res.status(200).json(result);
  } catch (err) {
    console.error('[scan-food] Unexpected error:', err.message);
    return res.status(500).json({
      error:  'Food analysis failed',
      detail: safeDetail(err.message),
    });
  }
});

/* ── Health check ── */
app.get('/health', (_req, res) =>
  res.json({ status: 'ok', service: 'kookhealth-api', model: GEMINI_MODEL })
);

/* ── Static frontend ── */
app.use(express.static(WEB_DIR));

/* ── Start ── */
const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`\n🥦 KookHealth API running → http://localhost:${PORT}`);
  console.log(`   Serving web from: ${WEB_DIR}`);
  console.log(`   GEMINI_API_KEY : ${process.env.GEMINI_API_KEY ? '✅ loaded' : '❌ MISSING — add to .env'}`);
  console.log(`   Using Gemini model: ${GEMINI_MODEL}\n`);
});
