/* ============================================================
   KookHealth — Shared Application Logic & Vector Icon Engine
   ============================================================ */

/* ── SHARED RECIPE DATABASE ────────────────────────────── */
const RECIPES = {
  hero: {
    id: 'hero',
    title: 'Avocado Toast & Poached Egg',
    tag: 'Breakfast',
    img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
    alt: 'Crispy sourdough avocado toast with a golden runny poached egg',
    desc: 'Golden toasted sourdough topped with seasoned smashed avocado, a perfectly soft-poached farm egg, red pepper flakes, fresh dill, and flaky sea salt.',
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
      'Toast sourdough slices in a skillet with a drop of olive oil until golden and crisp on both sides.',
      'Cut avocado in half, remove pit, and scoop into a bowl. Mash with lemon juice, salt, and pepper.',
      'Bring 3 inches of water to a gentle simmer in a medium pot. Add white vinegar and stir to create a gentle vortex.',
      'Crack eggs one at a time into a ramekin, then slide into the centre of the vortex. Poach for 3–4 minutes for a runny yolk.',
      'Spread generous mashed avocado onto warm toast, top each with a poached egg, sprinkle with chili flakes and fresh dill, and serve immediately.',
    ],
  },
  shakshuka: {
    id: 'shakshuka',
    title: 'Mediterranean Shakshuka',
    tag: 'Breakfast',
    img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80',
    alt: 'Mediterranean Shakshuka skillet with eggs and feta cheese',
    desc: 'North African poached eggs nestled in a rich, spiced tomato and sweet bell pepper sauce, finished with crumbled creamy feta and fresh cilantro.',
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
      'Melt butter in a non-stick pan over very low heat. Pour in whisked eggs.',
      'Slowly sweep a spatula across the bottom in long, slow figure-8s until soft, creamy curds form (about 4–5 minutes).',
      'Remove from heat just before fully set. Fold in crumbled feta gently.',
      'Plate alongside blistered cherry tomatoes and warm toasted whole grain bread. Scatter fresh chives on top.',
    ],
  },
  'buddha-bowl': {
    id: 'buddha-bowl',
    title: 'Rainbow Quinoa Buddha Bowl',
    tag: 'Vegan',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80',
    alt: 'Colorful nutrient-rich quinoa buddha bowl with tahini drizzle',
    desc: 'Nutrient-dense tricolour quinoa loaded with roasted spiced chickpeas, creamy avocado, crisp red cabbage, juicy tomatoes, and a velvet lemon-tahini dressing.',
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
      'Toss drained chickpeas with olive oil, smoked paprika, cumin, and sea salt. Roast at 200°C (400°F) for 15 minutes until crunchy.',
      'Thinly slice cucumber, cabbage, avocado, and halve cherry tomatoes.',
      'Whisk tahini with lemon juice, warm water, and garlic powder until smooth and pourable.',
      'Assemble bowls: quinoa base, arrange toppings in vibrant sections, drizzle with tahini, and sprinkle black sesame seeds.',
    ],
  },
  'smoothie-bowl': {
    id: 'smoothie-bowl',
    title: 'Berry Açai Protein Bowl',
    tag: 'Quick',
    img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80',
    alt: 'Thick berry smoothie bowl with fresh fruit and crunchy granola',
    desc: 'Thick and velvety blended frozen wild berries and coconut milk, topped with artisanal granola, chia seeds, fresh blueberries, and mint.',
    prep: '5m', cook: '0m', serve: '1', cal: '290',
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
      'Pour the deep purple smoothie base into a chilled wide bowl.',
      'Arrange granola in a neat stripe down the center.',
      'Fan out sliced strawberries and scatter fresh blueberries alongside.',
      'Dust with chia seeds, garnish with fresh mint sprig, and enjoy immediately.',
    ],
  },
  pappardelle: {
    id: 'pappardelle',
    title: 'San Marzano Basil Pappardelle',
    tag: 'Pasta',
    img: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281057?w=800&auto=format&fit=crop&q=80',
    alt: 'Handmade wide ribbon pappardelle with slow-simmered tomato basil sauce',
    desc: 'Silky wide ribbons of egg pasta tossed in a slow-simmered crushed San Marzano tomato sauce, fragrant with sweet basil, garlic, and aged Parmigiano Reggiano.',
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
      'Pour in crushed San Marzano tomatoes and white wine. Season with salt. Simmer gently for 25 minutes until rich and reduced.',
      'Boil pappardelle in generously salted water until 1 minute shy of al dente.',
      'Transfer pasta directly into sauce with ¼ cup pasta water. Toss vigorously over heat for 1 minute to emulsify.',
      'Tear in fresh basil, drizzle with raw extra virgin olive oil, and finish with generous shavings of Parmigiano.',
    ],
  },
  'chicken-salad': {
    id: 'chicken-salad',
    title: 'Crisp Herb Chicken Salad',
    tag: 'Salads',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    alt: 'Grilled herb marinated chicken breast over crisp garden greens',
    desc: 'Tender lemon-herb grilled chicken breast over crisp Romaine, cucumbers, Kalamata olives, juicy tomatoes, and feta, finished with cold-pressed olive oil.',
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
      'Marinate chicken in lemon juice, oregano, garlic, salt, and olive oil for 10 minutes.',
      'Grill on medium-high for 6–7 minutes per side until golden charred and juices run clear. Rest 5 minutes, then slice.',
      'Chop Romaine, slice cucumber, halve cherry tomatoes, and thinly slice red onion.',
      'Toss greens with half the dressing in a large bowl.',
      'Top with warm sliced chicken, olives, and crumbled feta. Drizzle remaining dressing and serve.',
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
  const iconSvg = next === 'earthy'
    ? `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
    : `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  showToast(next === 'earthy' ? 'Earthy Botanical Mode' : 'Warm Terracotta Mode', iconSvg);
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

/* ── TOAST NOTIFICATIONS (No emojis, vector SVG) ──────── */
let _toastTimer = null;
function showToast(msg, iconSvg = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  const defaultIcon = `<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  toast.innerHTML = (iconSvg || defaultIcon) + `<span>${msg}</span>`;
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
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── STICKY NAV SCROLL LISTENER ───────────────────────── */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('compact');
    } else {
      navbar.classList.remove('compact');
    }
  }, { passive: true });
}

/* ── INIT PAGE ────────────────────────────────────────── */
function initPage(page) {
  applyTheme(getTheme());
  if (page) setActiveNav(page);
  updateNavBadge();
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  initHamburger();
  initNavScroll();
  initScrollReveal();
}

/* ── SCROLL REVEAL VIA INTERSECTION OBSERVER ──────────── */
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1)';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.recipe-card, .cat-pill, .ing-panel, .nutrient-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    setTimeout(() => observer.observe(el), i * 40);
  });
}

/* ── RECIPE CARD HTML (CRAV Poster Card, Vector SVGs) ─── */
function recipeCardHTML(recipe, fromPage = 'home') {
  return `
    <a href="recipe.html?id=${recipe.id}&from=${fromPage}"
       class="recipe-card"
       aria-label="${recipe.title}, ${recipe.cook} cook time">
      <div class="recipe-card-img">
        <img src="${recipe.img}" alt="${recipe.alt}" loading="lazy" />
        <span class="recipe-card-tag">${recipe.tag}</span>
      </div>
      <div class="recipe-card-body">
        <h3 class="recipe-card-title">${recipe.title}</h3>
        <div class="recipe-card-meta">
          <span class="recipe-meta-item" aria-label="Cook time ${recipe.cook}">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${recipe.cook}
          </span>
          <span class="recipe-meta-item" aria-label="${recipe.serve} servings">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ${recipe.serve} Servings
          </span>
          <span class="recipe-rating" style="margin-left:auto" aria-label="Rating ${recipe.rating}">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>${recipe.rating}</span>
          </span>
        </div>
      </div>
    </a>`;
}

/* ── URL PARAMS HELPER ────────────────────────────────── */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
