# KookHealth Backend API

A lightweight Node.js + Express API server that keeps your Gemini API key **server-side** and exposes two endpoints for the KookHealth frontend.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/generate-recipe` | Generate a recipe from a list of ingredients |
| `POST` | `/api/scan-food` | Analyse a food photo and return nutrition data |
| `GET`  | `/health` | Health check |

---

## Setup

### 1. Install dependencies
```bash
cd kookhealth-backend
npm install
```

### 2. Add your Gemini API key
```bash
cp .env.example .env
```
Open `.env` and replace `your_gemini_api_key_here` with your real key from [Google AI Studio](https://aistudio.google.com/apikey).

```
GEMINI_API_KEY=AIzaSy...
PORT=3001
```

### 3. Start the server
```bash
npm start          # production
npm run dev        # auto-restart with nodemon
```

The server will print:
```
🥦 KookHealth API running → http://localhost:3001
   GEMINI_API_KEY: ✅ loaded
```

---

## API Reference

### `POST /api/generate-recipe`

**Request body:**
```json
{ "ingredients": ["egg", "rice", "tomato"] }
```

**Success response (200):**
```json
{
  "recipeName": "Tomato Egg Fried Rice",
  "cookingTime": "20 minutes",
  "servings": "2 servings",
  "calories": "380 kcal per serving",
  "difficulty": "Easy",
  "tags": ["Quick", "High Protein"],
  "ingredients": [
    { "item": "Eggs", "quantity": "3 large" },
    { "item": "Cooked rice", "quantity": "2 cups" }
  ],
  "steps": [
    "Beat the eggs in a bowl...",
    "Heat oil in a wok..."
  ]
}
```

**Error response (400 / 500):**
```json
{ "error": "Recipe generation failed" }
```

---

### `POST /api/scan-food`

**Request body:**
```json
{
  "image": "<base64-encoded image string>",
  "mimeType": "image/jpeg"
}
```

**Success response (200):**
```json
{
  "foodName": "Grilled Chicken Salad",
  "servingSize": "1 bowl (~350g)",
  "calories": 320,
  "protein": "28g",
  "carbs": "18g",
  "fat": "12g",
  "fiber": "5g",
  "sugar": "4g",
  "healthScore": 85,
  "healthTag": "High Protein",
  "healthNotes": ["Low in saturated fat", "Good source of fibre"]
}
```

**Error response (400 / 500):**
```json
{ "error": "Food analysis failed" }
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | ✅ Yes | Google Gemini API key |
| `PORT` | No | Server port (default: `3001`) |
