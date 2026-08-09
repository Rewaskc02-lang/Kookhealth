# KookHealth

KookHealth is a web application that helps users decide what to cook based on
ingredients they already have, and understand the nutritional value of food
from a photo. It combines a static frontend with a Node.js backend that calls
Google's Gemini API to generate real, unique recipes and analyze food images
on demand.

## Overview

Most recipe websites only let you search recipes that already exist in a
database. KookHealth works the other way around: you tell it what's in your
kitchen, and it uses AI to generate a recipe built specifically around those
ingredients — with proper quantities, cooking time, servings, and numbered
steps. It also includes a food scanner: upload or take a photo of a meal, and
the app identifies the food and estimates its nutritional breakdown
(calories, protein, carbs, fat, fiber, and sugar).

## Core Features

- **Home Page** — A featured recipe hero section, browsable food categories,
  a search bar, and a grid of recipe cards.
- **Ingredients Page** — Add ingredients one at a time (by typing, pressing
  Enter, or tapping a suggested ingredient chip), then generate a unique
  AI-created recipe from them.
- **Recipe Result Page** — Displays the generated recipe: name, cooking
  time, servings, a full ingredient list with quantities, and step-by-step
  cooking instructions. Recipes can be saved for later.
- **Scan Food Page** — Upload or capture a photo of a meal. The app sends it
  to Gemini for analysis and returns the identified food along with its
  estimated nutritional values.
- **Saved Recipes Page** — A grid of all recipes the user has saved, stored
  locally in the browser.
- **Warm / Earthy Theme Toggle** — Switch between two visual themes across
  the whole site: a warm palette (red, orange, yellow) suited to casual,
  appetite-driven food branding, and an earthy palette (brown, beige, muted
  green) suited to organic, farm-to-table branding.

## How It Works

1. The user enters ingredients on the Ingredients page and taps **Generate
   Recipe with AI**.
2. The frontend sends those ingredients to the backend (`/api/generate-recipe`).
3. The backend builds a prompt instructing Gemini to return a unique recipe
   as structured JSON, and forwards the request to the Gemini API — the
   API key is only ever used server-side, never exposed in the browser.
4. Gemini's response is parsed and returned to the frontend, which displays
   it on the Recipe Result page.
5. The Scan Food page works the same way: an uploaded image is base64-encoded
   in the browser, sent to `/api/scan-food`, analyzed by Gemini, and the
   nutritional breakdown is displayed back to the user.
6. Saved recipes and the active theme are stored in the browser's local
   storage, so they persist between visits without needing a database.

## Tech Stack

| Layer      | Technology                                              |
|------------|----------------------------------------------------------|
| Frontend   | HTML5, CSS3, vanilla JavaScript (no framework)            |
| Backend    | Node.js, Express                                          |
| AI Engine  | Google Gemini API (`gemini-2.5-flash`, via REST)           |
| Storage    | Browser `localStorage` (saved recipes, theme preference)   |
| Config     | `dotenv` for environment variables                          |
| Networking | `cors`, `node-fetch`                                       |

## Project Structure

```
kookhealth/
├── kookhealth-backend/
│   ├── server.js          # Express server, Gemini API endpoints
│   ├── package.json       # Backend dependencies
│   ├── .env                # Local environment variables (not committed)
│   ├── .env.example        # Template for required environment variables
│   └── .gitignore
│
└── kookhealth-web/
    ├── index.html          # Home page
    ├── ingredients.html    # Ingredient input + AI recipe generation
    ├── recipe.html         # Recipe result / detail page
    ├── scan.html           # Food photo scanner
    ├── saved.html          # Saved recipes grid
    ├── styles.css          # Shared styling and theme system
    ├── app.js              # Shared frontend logic (recipes, saved state, nav)
    └── *.png               # Recipe and hero images
```

## API Endpoints

| Method | Endpoint              | Purpose                                             |
|--------|------------------------|------------------------------------------------------|
| POST   | `/api/generate-recipe` | Accepts an array of ingredients, returns a generated recipe (name, cooking time, servings, ingredients with quantities, steps) |
| POST   | `/api/scan-food`       | Accepts a base64-encoded image, returns identified food name and nutritional estimate |
| GET    | `/health`              | Basic health check for the backend                    |

## Setup and Running Locally

**1. Install backend dependencies**
```bash
cd kookhealth-backend
npm install
```

**2. Configure your API key**
```bash
cp .env.example .env
```
Open `.env` and add your Gemini API key (get one from Google AI Studio):
```
GEMINI_API_KEY=your_key_here
PORT=3001
```

**3. Start the backend**
```bash
npm start
```
The server runs at `http://localhost:3001`.

**4. Open the frontend**
Open `kookhealth-web/index.html` in a browser (or serve the folder with any
static file server). The frontend is already configured to call the backend
at `http://localhost:3001`.

## Security Notes

- The Gemini API key lives only in the backend's `.env` file and is never
  sent to or exposed in the browser.
- `.env` is excluded from version control via `.gitignore`; only
  `.env.example` (with a placeholder, not a real key) should ever be
  committed.
- If a real API key is ever accidentally shared or committed, it should be
  regenerated immediately in Google AI Studio.

## Known Limitations

- Saved recipes and theme preference are stored per-browser (`localStorage`),
  not in a shared account or database — clearing browser data will remove them.
- Gemini model names change over time as Google retires older versions;
  the model used in `server.js` should be checked periodically against
  Google's current model list.
