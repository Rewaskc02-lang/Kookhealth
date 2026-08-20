/* ============================================================
   KOOKHEALTH — SHARED APP.JS
   Recipe data, theme management, saved recipes, 3D tilt & nav utilities
   ============================================================ */

/* ── RECIPE DATA ──────────────────────────────────────── */
const RECIPES = {
  hero: {
    id: 'hero',
    title: 'Avocado Toast & Poached Egg',
    description: 'Farm-fresh ingredients come together in this vibrant, protein-packed breakfast. Creamy avocado on sourdough with a perfectly runny poached egg.',
    img: 'hero_recipe.png', alt: 'Avocado toast with poached egg and fresh salad',
    tag: 'Featured', tags: ['Healthy', 'Quick', 'Vegetarian'],
    prep: '5m', cook: '10m', serve: '2', cal: '320',
    rating: '4.9', reviews: '342',
    ingredients: [
      { name: 'Sourdough bread', amount: '2 slices' },
      { name: 'Ripe avocado', amount: '1 large' },
      { name: 'Free-range eggs', amount: '2' },
      { name: 'White vinegar', amount: '1 tbsp' },
      { name: 'Lemon juice', amount: '1 tsp' },
      { name: 'Red chili flakes', amount: 'pinch' },
      { name: 'Fresh dill', amount: 'garnish' },
      { name: 'Sea salt & pepper', amount: 'to taste' },
    ],
    steps: [
      'Toast the sourdough slices until golden-brown and perfectly crispy on both sides.',
      'Mash avocado with lemon juice, salt, and chili flakes until creamy. Spread generously on each slice.',
      'Bring a small pot of water to a gentle simmer and add the white vinegar.',
      'Crack each egg into a ramekin. Create a whirlpool in the water and slide the egg in. Poach for 3 minutes until white is set but yolk still runny.',
      'Place the poached egg on avocado toast. Season with sea salt, black pepper, extra chili flakes, and fresh dill.',
    ],
  },
  breakfast: {
    id: 'breakfast',
    title: 'Greek Scrambled Eggs',
    description: 'Silky soft scrambled eggs loaded with crumbled feta, fresh herbs, and served alongside toasted whole-grain bread. A Mediterranean morning classic.',
    img: 'recipe_breakfast.png', alt: 'Greek scrambled eggs with avocado and toast',
    tag: 'Breakfast', tags: ['Breakfast', 'High Protein'],
    prep: '5m', cook: '15m', serve: '2', cal: '410',
    rating: '4.8', reviews: '124',
    ingredients: [
      { name: 'Large eggs', amount: '4' },
      { name: 'Whole milk', amount: '2 tbsp' },
      { name: 'Unsalted butter', amount: '1 tbsp' },
      { name: 'Feta cheese', amount: '30g' },
      { name: 'Cherry tomatoes', amount: '6' },
      { name: 'Fresh chives', amount: 'garnish' },
      { name: 'Whole grain toast', amount: '2 slices' },
      { name: 'Salt & pepper', amount: 'to taste' },
    ],
    steps: [
      'Whisk eggs with milk, salt, and pepper in a bowl until pale and airy — at least 60 seconds.',
      'Melt butter in a non-stick pan over low-medium heat until foamy.',
      'Pour in egg mixture. Gently fold with a silicone spatula every 20–30 seconds. Do not rush.',
      'Remove from heat while eggs are still slightly wet — residual heat finishes them perfectly.',
      'Fold in crumbled feta. Serve on toasted bread with halved cherry tomatoes and fresh chives.',
    ],
  },
  vegan: {
    id: 'vegan',
    title: 'Rainbow Buddha Bowl',
    description: 'A nourishing, colourful bowl of roasted chickpeas, quinoa, fresh vegetables, and creamy tahini dressing. Fully plant-based and endlessly satisfying.',
    img: 'recipe_vegan_bowl.png', alt: 'Vegan chickpea quinoa buddha bowl',
    tag: 'Vegan', tags: ['Vegan', 'High Protein', 'Gluten-Free'],
    prep: '10m', cook: '15m', serve: '2', cal: '480',
    rating: '4.9', reviews: '267',
    ingredients: [
      { name: 'Quinoa, cooked', amount: '1 cup' },
      { name: 'Chickpeas, drained', amount: '1 can' },
      { name: 'Ripe avocado', amount: '1' },
      { name: 'Cherry tomatoes', amount: '1 cup' },
      { name: 'Cucumber', amount: '½' },
      { name: 'Red cabbage', amount: '¼ head' },
      { name: 'Tahini', amount: '3 tbsp' },
      { name: 'Lemon juice', amount: '2 tbsp' },
      { name: 'Black sesame seeds', amount: '1 tsp' },
    ],
    steps: [
      'Cook quinoa per package directions. Fluff with a fork and let cool slightly.',
      'Toss chickpeas with olive oil, cumin, and smoked paprika. Roast at 200°C for 20 minutes until golden and crispy.',
      'Slice avocado, cucumber, and tomatoes. Finely shred the red cabbage.',
      'Whisk tahini with lemon juice, 2 tbsp water, one minced garlic clove, and a pinch of salt until silky.',
      'Assemble bowls: quinoa base, arrange toppings in colourful sections, drizzle tahini generously, finish with sesame seeds.',
    ],
  },
  smoothie: {
    id: 'smoothie',
    title: 'Berry Smoothie Bowl',
    description: 'A thick, vibrant blended base of frozen berries topped with crunchy granola, fresh fruit, chia seeds, and mint. Ready in under 10 minutes.',
    img: 'recipe_smoothie.png', alt: 'Berry smoothie bowl with granola and fresh fruit',
    tag: 'Quick', tags: ['Quick', 'Vegan', 'Breakfast'],
    prep: '5m', cook: '5m', serve: '1', cal: '280',
    rating: '4.7', reviews: '98',
    ingredients: [
      { name: 'Frozen mixed berries', amount: '1½ cups' },
      { name: 'Frozen banana', amount: '½' },
      { name: 'Coconut milk', amount: '¼ cup' },
      { name: 'Granola', amount: '¼ cup' },
      { name: 'Fresh strawberries', amount: '4' },
      { name: 'Fresh blueberries', amount: '2 tbsp' },
      { name: 'Chia seeds', amount: '1 tsp' },
      { name: 'Mint leaves', amount: 'garnish' },
    ],
    steps: [
      'Blend frozen berries and banana with just enough coconut milk to blend — keep it very thick!',
      'Pour into a wide, chilled bowl immediately.',
      'Arrange granola, sliced strawberries, and blueberries in separate sections on top.',
      'Scatter chia seeds evenly and add fresh mint leaves for garnish.',
      'Serve immediately and enjoy before it melts!',
    ],
  },
  pasta: {
    id: 'pasta',
    title: 'Tomato Pappardelle',
    description: 'Rustic Italian comfort food at its finest. Wide pappardelle pasta tossed in a slow-simmered San Marzano tomato sauce with fresh basil and Parmesan.',
    img: 'recipe_pasta.png', alt: 'Tomato pappardelle pasta with basil and parmesan',
    tag: 'Pasta', tags: ['Italian', 'Comfort', 'Family'],
    prep: '5m', cook: '30m', serve: '4', cal: '520',
    rating: '4.6', reviews: '183',
    ingredients: [
      { name: 'Pappardelle pasta', amount: '320g' },
      { name: 'San Marzano tomatoes', amount: '1 can' },
      { name: 'Garlic cloves', amount: '4' },
      { name: 'Extra virgin olive oil', amount: '3 tbsp' },
      { name: 'Fresh basil', amount: '1 bunch' },
      { name: 'Parmesan, shaved', amount: '40g' },
      { name: 'Dry white wine', amount: '¼ cup' },
      { name: 'Chili flakes', amount: '½ tsp' },
    ],
    steps: [
      'Warm olive oil over medium-low heat. Add sliced garlic and chili flakes — cook until fragrant, about 2 minutes. Do not brown.',
      'Pour in white wine and let reduce for 1 minute.',
      'Crush San Marzano tomatoes by hand into the pan. Simmer uncovered for 20 minutes, stirring occasionally.',
      'Cook pappardelle in heavily salted boiling water until al dente. Reserve ½ cup pasta water before draining.',
      'Toss pasta into the sauce with a splash of pasta water. Plate with torn fresh basil and generous Parmesan shavings.',
    ],
  },
  chicken_salad: {
    id: 'chicken_salad',
    title: 'Grilled Chicken Greek Salad',
    description: 'Perfectly grilled herb-marinated chicken over a bed of crisp romaine, vibrant vegetables, crumbled feta, and Kalamata olives with a bright lemon dressing.',
    img: 'recipe_chicken_salad.png', alt: 'Grilled chicken Greek salad with feta and olives',
    tag: 'Salad', tags: ['High Protein', 'Low Carb', 'Fresh'],
    prep: '10m', cook: '15m', serve: '2', cal: '360',
    rating: '4.8', reviews: '211',
    ingredients: [
      { name: 'Chicken breast', amount: '300g' },
      { name: 'Romaine lettuce', amount: '1 head' },
      { name: 'Cherry tomatoes', amount: '1 cup' },
      { name: 'Cucumber', amount: '1' },
      { name: 'Red onion', amount: '½' },
      { name: 'Feta cheese', amount: '80g' },
      { name: 'Kalamata olives', amount: '½ cup' },
      { name: 'Lemon & olive oil dressing', amount: '3 tbsp' },
    ],
    steps: [
      'Marinate chicken with olive oil, lemon zest, dried oregano, salt, and pepper for at least 10 minutes.',
      'Grill chicken on a screaming-hot grill pan — 6 minutes per side. Rest 5 minutes before slicing.',
      'Tear romaine into a large bowl. Halve the tomatoes, slice the cucumber and red onion thinly.',
      'Combine all vegetables in the bowl. Drizzle with lemon-olive oil dressing and toss gently.',
      'Top with sliced grilled chicken, crumbled feta, and olives. Serve immediately.',
    ],
  },
};

/* ── THEME MANAGEMENT ─────────────────────────────────── */
const THEME_KEY = 'kookhealth-theme';

function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'warm';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme === 'earthy' ? 'earthy' : '';
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.setAttribute('aria-checked', theme === 'earthy' ? 'true' : 'false');
    const label = toggle.querySelector('.theme-label');
    if (label) label.textContent = theme === 'earthy' ? 'Earthy' : 'Warm';
  }
}

function toggleTheme() {
  const current = getTheme();
  const next = current === 'earthy' ? 'warm' : 'earthy';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
  showToast(next === 'earthy' ? '🍃 Earthy mode activated' : '🌅 Warm mode activated', next === 'earthy' ? '🌿' : '✨');
}

/* ── SAVED RECIPES ────────────────────────────────────── */
const SAVED_KEY = 'kookhealth-saved';

function getSavedIds() {
  try { return JSON.parse(localStorage.getItem(SAVED_KEY)) || []; }
  catch { return []; }
}

function saveRecipeId(id) {
  const ids = getSavedIds();
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem(SAVED_KEY, JSON.stringify(ids));
  }
}

function unsaveRecipeId(id) {
  const ids = getSavedIds().filter(i => i !== id);
  localStorage.setItem(SAVED_KEY, JSON.stringify(ids));
}

function isRecipeSaved(id) {
  return getSavedIds().includes(id);
}

function getSavedRecipes() {
  return getSavedIds().map(id => RECIPES[id]).filter(Boolean);
}

/* ── NAV BADGE COUNT ──────────────────────────────────── */
function updateNavBadge() {
  const badges = document.querySelectorAll('[data-saved-count]');
  const count = getSavedIds().length;
  badges.forEach(el => {
    el.textContent = count;
    el.dataset.count = count;
  });
}

/* ── TOAST NOTIFICATIONS ──────────────────────────────── */
let _toastTimer = null;
function showToast(msg, icon = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = (icon ? `<span style="font-size:16px;">${icon}</span>` : '') + `<span>${msg}</span>`;
  toast.classList.add('show');
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ── ACTIVE NAV LINK ──────────────────────────────────── */
function setActiveNav(page) {
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

/* ── HAMBURGER & MOBILE MENU ──────────────────────────── */
function initHamburger() {
  const burger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!burger || !mobileNav) return;
  burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── INIT PAGE ────────────────────────────────────────── */
function initPage(page) {
  applyTheme(getTheme());
  if (page) setActiveNav(page);
  updateNavBadge();
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  initHamburger();
  // Visual enhancements & 3D tilt
  requestAnimationFrame(() => {
    initVisuals();
    init3DTilt();
  });
}

/* ── RECIPE CARD HTML ─────────────────────────────────── */
function recipeCardHTML(recipe, fromPage = 'home') {
  return `
    <a href="recipe.html?id=${recipe.id}&from=${fromPage}"
       class="recipe-card tilt-card"
       aria-label="${recipe.title}, ${recipe.cook} cook time">
      <div class="recipe-card-img">
        <img src="${recipe.img}" alt="${recipe.alt}" loading="lazy" />
        <span class="recipe-card-tag">${recipe.tag}</span>
      </div>
      <div class="recipe-card-body">
        <h3 class="recipe-card-title">${recipe.title}</h3>
        <div class="recipe-card-meta">
          <span class="recipe-meta-item">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            ${recipe.cook}
          </span>
          <span class="recipe-meta-item">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            ${recipe.serve} servings
          </span>
          <span class="recipe-rating" style="margin-left:auto">
            <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>${recipe.rating}</span>
          </span>
        </div>
      </div>
    </a>`;
}

/* ── URL PARAMS ───────────────────────────────────────── */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ── VISUAL ENHANCEMENTS (Blobs & Particles) ───────────── */
function initVisuals() {
  const hero = document.querySelector('.hero, .page-hero');
  if (hero && !hero.querySelector('.blob-bg')) {
    createBlobBg(hero);
    createFoodParticles(hero);
  }
}

function createBlobBg(container) {
  const specs = [
    { pct: 0, x: '2%', y: '-20%', size: 520 },
    { pct: 1, x: '65%', y: '5%', size: 440 },
    { pct: 0, x: '35%', y: '55%', size: 380 },
  ];
  specs.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'blob-bg';
    Object.assign(el.style, {
      background: i % 2 === 0 ? 'var(--c-primary)' : 'var(--c-accent)',
      left: s.x,
      top: s.y,
      width: s.size + 'px',
      height: s.size + 'px',
      animationDelay: `-${i * 6}s`,
      animationDuration: `${16 + i * 4}s`,
    });
    container.appendChild(el);
  });
}

function createFoodParticles(container, count = 14) {
  const wrap = document.createElement('div');
  wrap.className = 'food-particles-wrap';
  wrap.setAttribute('aria-hidden', 'true');
  const foods = ['🥑', '🍅', '🥦', '🌿', '🍋', '🫑', '🥕', '🌽', '🍓', '🫒', '🧄', '🥗', '🍳', '🥞'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'food-particle';
    el.textContent = foods[i % foods.length];
    const duration = 12 + Math.random() * 12;
    Object.assign(el.style, {
      left: `${5 + (i / count) * 90}%`,
      fontSize: `${14 + Math.random() * 10}px`,
      opacity: String(0.04 + Math.random() * 0.06),
      animationDelay: `-${(Math.random() * duration).toFixed(1)}s`,
      animationDuration: `${duration.toFixed(1)}s`,
    });
    wrap.appendChild(el);
  }
  container.appendChild(wrap);
}

/* ── 3D TILT & SPECULAR SHEEN PHYSICS ─────────────────── */
function init3DTilt() {
  if (typeof window === 'undefined') return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const tiltCards = document.querySelectorAll('.tilt-card, .recipe-card, .nutrient-card, .hero-image-wrap, .upload-zone');
  tiltCards.forEach(card => {
    if (card._tiltAttached) return;
    card._tiltAttached = true;

    // Inject 3D specular shine layer if not already present
    if (!card.querySelector('.card-shine')) {
      const shine = document.createElement('div');
      shine.className = 'card-shine';
      shine.setAttribute('aria-hidden', 'true');
      card.appendChild(shine);
    }

    let rafId = null;

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.12s ease-out, box-shadow 0.12s ease-out';
    });

    card.addEventListener('mousemove', e => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const normX = (mouseX / rect.width) - 0.5; // -0.5 to 0.5
        const normY = (mouseY / rect.height) - 0.5; // -0.5 to 0.5

        const maxRotate = 14; // degrees of 3D tilt
        const rotX = -normY * maxRotate;
        const rotY = normX * maxRotate;

        card.style.transform = `perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(16px) translateY(-10px) scale3d(1.025, 1.025, 1.025)`;
        card.style.setProperty('--mouse-x', `${((normX + 0.5) * 100).toFixed(1)}%`);
        card.style.setProperty('--mouse-y', `${((normY + 0.5) * 100).toFixed(1)}%`);
      });
    });

    card.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.35, 0.64, 1), box-shadow 0.55s cubic-bezier(0.34, 1.35, 0.64, 1)';
      card.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0) translateY(0) scale3d(1, 1, 1)';
    });
  });
}
