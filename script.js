/* ============================================================
   OMOTOYOSI PORTFOLIO — script.js
   ============================================================

   TABLE OF CONTENTS:
   1.  FONT LOADER
   2.  CONFIG
   3.  TYPEWRITER TEXT      ← EDIT YOUR BIO HERE
   4.  SHOOT DATA           ← EDIT YOUR SHOOTS HERE
   5.  THEME TOGGLE
   6.  LIVE TIME
   7.  GRAIN TOGGLE
   8.  PAGE TRANSITIONS
   9.  CURSOR
   10. LANDING PAGE         (index.html)
   11. WORK PAGE            (work.html) — drag filmstrip
   12. INFO PAGE            (info.html)
   13. CONTACT PAGE         (contact.html)
   14. SHOOT PAGE           (shoot.html)
   15. SCROLL PROGRESS
   16. LIGHTBOX
   17. KEYBOARD + TOUCH

   ============================================================ */


/* ============================================================
   1. FONT LOADER
   Non-blocking — page renders immediately with fallback fonts.
   Swaps to real fonts once online + downloaded.
   EDIT: Replace URL to change font family.
   ============================================================ */

(function () {
  const l = document.createElement('link');
  l.rel  = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Syne:wght@300;400;500&display=swap';
  document.head.appendChild(l);
})();


/* ============================================================
   2. CONFIG
   Toggle features on/off here.
   ============================================================ */

const CFG = {
  SHOW_GRAIN:       true,
  SHOW_BG_IMAGE:    true,
  SCRAMBLE_NAME:    true,
  PAGE_TRANSITIONS: true,
};


/* ============================================================
   3. TYPEWRITER TEXT
   EDIT: Change the bio text below.
   SPEED = ms per character (lower = faster typing).
   DELAY = ms before typing starts after page loads.
   ============================================================ */

const TYPEWRITER_TEXT  = "Hi, I'm Gbadamosi Omotoyosi — a photographer and visual artist based in Abuja, Nigeria. I work at the intersection of editorial portraiture and cultural storytelling, drawn to the quiet power of the human face and the worlds it holds.";
const TYPEWRITER_SPEED = 26;
const TYPEWRITER_DELAY = 1800;


/* ============================================================
   4. SHOOT DATA
   EDIT: Add / update your shoots here.
   Each key must match data-title on a .wheel-card in work.html.
   Shoots open as: shoot.html?id=KEY
   ============================================================ */

const SHOOT_DATA = {

  'Agbara': {
    counter:  '009',
    title:    'Agbára',
    desc:     '',
    location: 'Abuja, Nigeria',
    models:   'Victor Adebisi',
    date:     '19-10-2024',
    notes:    'Natural light only. Late afternoon golden hour. Minimal direction — mostly observed.',
    cover:    'assets/images/Agbara/cover.webp',
    images: [
      'assets/images/Agbara/01.webp',
      'assets/images/Agbara/02.webp',
      'assets/images/Agbara/03.webp',
      'assets/images/Agbara/04.webp',
      'assets/images/Agbara/05.webp',
      'assets/images/Agbara/06.webp',
      'assets/images/Agbara/07.webp',
      'assets/images/Agbara/08.webp',
      'assets/images/Agbara/09.webp',
    ],
  },

  'fts2025': {
    counter:  '039',
    title:    'Feed The Streets 2025',
    desc:     'Portraits from community outreach at IDP camps in Abuja. Quiet dignity in difficult circumstances.',
    location: 'Abuja, Nigeria',
    models:   'Community subjects',
    date:     '14-02-2025',
    notes:    'Outreach coverage. Documentary approach. Focused on real moments, no staging.',
    cover:    'assets/images/shoot-placeholder.webp',
    images: [
      'assets/images/fts2025/01.webp',
      'assets/images/fts2025/02.webp',
      'assets/images/fts2025/03.webp',
      'assets/images/fts2025/04.webp',
      'assets/images/fts2025/05.webp',
      'assets/images/fts2025/06.webp',
      'assets/images/fts2025/07.webp',
      'assets/images/fts2025/08.webp',
      'assets/images/fts2025/09.webp',
      'assets/images/fts2025/10.webp',
      'assets/images/fts2025/11.webp',
      'assets/images/fts2025/12.webp',
      'assets/images/fts2025/13.webp',
      'assets/images/fts2025/14.webp',
      'assets/images/fts2025/15.webp',
      'assets/images/fts2025/16.webp',
      'assets/images/fts2025/17.webp',
      'assets/images/fts2025/18.webp',
      'assets/images/fts2025/19.webp',
      'assets/images/fts2025/20.webp',
      'assets/images/fts2025/21.webp',
      'assets/images/fts2025/22.webp',
      'assets/images/fts2025/23.webp',
      'assets/images/fts2025/24.webp',
      'assets/images/fts2025/25.webp',
      'assets/images/fts2025/26.webp',
      'assets/images/fts2025/27.webp',
      'assets/images/fts2025/28.webp',
      'assets/images/fts2025/29.webp',
      'assets/images/fts2025/30.webp',
      'assets/images/fts2025/31.webp',
      'assets/images/fts2025/32.webp',
      'assets/images/fts2025/33.webp',
      'assets/images/fts2025/34.webp',
      'assets/images/fts2025/35.webp',
      'assets/images/fts2025/36.webp',
      'assets/images/fts2025/37.webp',
      'assets/images/fts2025/38.webp',
      'assets/images/fts2025/39.webp',
    ],
  },

  'ade-ibile': {
    counter:  '007',
    title:    'Adé Ìbílẹ̀',
    desc:     'A refined expression of heritage and quiet royalty, capturing identity and cultural pride. Intentional, timeless frames that feel grounded and deeply personal.',
    location: 'Abuja, Nigeria',
    models:   'Adebisi Victor',
    date:     '19-07-2025',
    notes:    'Behind the scenes. Documentary approach. Shot with intent. Focused on process, not performance.',
    cover:    'assets/images/ade-ibile/cover.webp',
    images: [
      'assets/images/ade-ibile/01.webp',
      'assets/images/ade-ibile/02.webp',
      'assets/images/ade-ibile/03.webp',
      'assets/images/ade-ibile/04.webp',
      'assets/images/ade-ibile/05.webp',
      'assets/images/ade-ibile/06.webp',
      'assets/images/ade-ibile/07.webp',
    ],
  },

  'feyi': {
    counter:  '014',
    title:    'Fẹ́yì',
    desc:     'Quiet frames. Nothing forced, nothing loud. Just presence, shape, and the kind of femininity that doesn’t need explanation.',
    location: 'Millenium Park, Abuja',
    models:   'Gbadebo Grace',
    date:     '05-04-2025',
    notes:    'Portrait session. Outdoors, natural light, no staging. Focused on expression, form, and the movement of the bubu gown in real space',
    cover:    'assets/images/shoot-placeholder.webp',
    images: [
      'assets/images/feyi/01.webp',
      'assets/images/feyi/02.webp',
      'assets/images/feyi/03.webp',
      'assets/images/feyi/04.webp',
      'assets/images/feyi/05.webp',
      'assets/images/feyi/06.webp',
      'assets/images/feyi/07.webp',
      'assets/images/feyi/08.webp',
      'assets/images/feyi/09.webp',
      'assets/images/feyi/10.webp',
      'assets/images/feyi/11.webp',
      'assets/images/feyi/12.webp',
      'assets/images/feyi/13.webp',
      'assets/images/feyi/14.webp',
    ],
  },

  'mfy': {
    counter:  '011',
    title:    'Memo From Yesterday',
    desc:     'Tailored lines, old-world mood—like a page pulled from another time. Clean, restrained frames that feel familiar, even if you can’t place them.',
    location: 'Abuja, Nigeria',
    models:   'Victor Adebisi',
    date:     '09-07-2025',
    notes:    'Between setups—straightening the suit, watching the light shift, waiting for it to click. Nothing loud, just small moments lining up before the frame lands.',
    cover:    'assets/images/shoot-placeholder.webp',
    images: [
      'assets/images/mfy/01.webp',
      'assets/images/mfy/02.webp',
      'assets/images/mfy/03.webp',
      'assets/images/mfy/04.webp',
      'assets/images/mfy/05.webp',
      'assets/images/mfy/06.webp',
      'assets/images/mfy/07.webp',
      'assets/images/mfy/08.webp',
      'assets/images/mfy/09.webp',
      'assets/images/mfy/10.webp',
      'assets/images/mfy/11.webp',
    ],
  },

  'repose': {
    counter:  '010',
    title:    'Repose',
    desc:     'Composed stillness against a rough backdrop—color doing the heavy lifting, posture keeping it grounded. It feels deliberate without trying too hard, somewhere between control and ease.',
    location: 'WTC, Abuja',
    models:   'Theresa',
    date:     '2025',
    notes:    'Shot in direct daylight, no diffusion—just working with the sun as it moved. Minimal direction, mostly spacing, angles, and timing the light. Kept it simple so the frame could breathe.',
    cover:    'assets/images/shoot-placeholder.webp',
    images: [
      'assets/images/repose/01.webp',
      'assets/images/repose/02.webp',
      'assets/images/repose/03.webp',
      'assets/images/repose/04.webp',
      'assets/images/repose/05.webp',
      'assets/images/repose/06.webp',
      'assets/images/repose/07.webp',
      'assets/images/repose/08.webp',
      'assets/images/repose/09.webp',
      'assets/images/repose/10.webp',
    ],
  },

  'bare': {
    counter:  '007',
    title:    'Bare',
    desc:     'Editorial study in male portraiture. Exploring the interplay between light, geometry, and human form through studio discipline—negative space, precise lighting ratios, and considered posing across multiple frames.',
    location: 'Abuja, Nigeria',
    models:   'Joseph Chinonso',
    date:     '16 November, 2024',
    notes:    'Studio portraiture | Editorial study | Controlled lighting and compositional exploration of form and presence in male portraiture. BTS: Single-light setup, teal cyclorama backdrop. Nikon D3200, 50mm. Multiple pose variations shot in one session, edited for tonal cohesion and shadow preservation.',
    cover:    'assets/images/shoot-placeholder.webp',
    images: [
      'assets/images/bare/01.webp',
      'assets/images/bare/02.webp',
      'assets/images/bare/03.webp',
      'assets/images/bare/04.webp',
      'assets/images/bare/05.webp',
      'assets/images/bare/06.webp',
      'assets/images/bare/07.webp',
    ],
  },

  'kinship': {
    counter:  '007',
    title:    'Kinship',
    desc:     'Kinship | Contemporary editorial exploring cultural representation and identity. Natural light location portraiture featuring traditional Nigerian dress and textiles, shot within landscape composition. A study in presence, heritage, and narrative framing.',
    location: 'Abuja, Nigeria',
    models:   'Olisaemeka Sydney, Victor Adebisi',
    date:     '19/10/2024',
    notes:    'Natural light location shoot. Nikon D3200, 35mm. Color-graded for textile detail and environmental richness.',
    cover:    'assets/images/kinship/cover.webp',
    images: [
      'assets/images/kinship/01.webp',
      'assets/images/kinship/02.webp',
      'assets/images/kinship/03.webp',
      'assets/images/kinship/04.webp',
      'assets/images/kinship/05.webp',
      'assets/images/kinship/06.webp',
      'assets/images/kinship/07.webp',
    ],
  },

  'Quietude': {
    counter:  '004',
    title:    'Quietude',
    desc:     'Quietude | A study in anonymity and introspection. Casual portraiture exploring the absence of face as narrative—the subject reduced to presence, clothing, and stance within natural landscape. A meditation on stillness and the unseen.',
    location: 'Abuja, Nigeria',
    models:   '-',
    date:     '20-09-2024',
    notes:    'Quietude | A study in anonymity and introspection. Casual portraiture exploring the absence of face as narrative—the subject reduced to presence, clothing, and stance within natural landscape. A meditation on stillness and the unseen.',
    cover:    'assets/images/Quietude/cover.webp',
    images: [
      'assets/images/Quietude/01.webp',
      'assets/images/Quietude/02.webp',
      'assets/images/Quietude/03.webp',
      'assets/images/Quietude/04.webp',
    ],
  },

  'inception': {
    counter:  '014',
    title:    'Inception',
    desc:     'Fashion editorial exploring silhouette and fluidity across diverse forms. A study in garment as narrative—the flowing dress as centerpiece, positioned within natural landscape. Three models, one design, interrogating inclusivity and presence.',
    location: 'Abuja, Nigeria',
    models:   '-',
    date:     '',
    notes:    'Natural light location shoot. Canon EOS R5, 35mm. Color-graded to emphasize fabric depth and saturation while maintaining environmental clarity.',
    cover:    'assets/images/inception/cover.webp',
    images: [
      'assets/images/inception/01.webp',
      'assets/images/inception/02.webp',
      'assets/images/inception/03.webp',
      'assets/images/inception/04.webp',
      'assets/images/inception/05.webp',
      'assets/images/inception/06.webp',
      'assets/images/inception/07.webp',
      'assets/images/inception/08.webp',
      'assets/images/inception/09.webp',
      'assets/images/inception/10.webp',
      'assets/images/inception/11.webp',
      'assets/images/inception/12.webp',
      'assets/images/inception/13.webp',
      'assets/images/inception/14.webp',
    ],
  },

  'fts-3.0': {
    counter:  '010',
    title:    'Feed The Streets 3.0- THAI',
    desc:     'Feed the Streets, 2023 | Documentary work in collaboration with The Humanity Anchor Initiative. A series documenting care, community, and shared meals within an orphanage in Abuja. Black and white portraiture centering dignity, joy, and the human act of gathering.',
    location: 'Abuja',
    models:   '-',
    date:     '14-02-2023',
    notes:    'Available light, location work. Nikon D3200, 50mm. Shot in black and white to emphasize human presence and connection. Minimal processing—preserved grain and contrast to maintain documentary integrity.',
    cover:    'assets/images/fts-3.0/cover.webp',
    images: [
      'assets/images/fts-3.0/01.webp',
      'assets/images/fts-3.0/02.webp',
      'assets/images/fts-3.0/03.webp',
      'assets/images/fts-3.0/04.webp',
      'assets/images/fts-3.0/05.webp',
      'assets/images/fts-3.0/06.webp',
      'assets/images/fts-3.0/07.webp',
      'assets/images/fts-3.0/08.webp',
      'assets/images/fts-3.0/09.webp',
      'assets/images/fts-3.0/10.webp',
    ],
  },

  'QA': {
    counter:  '009',
    title:    'Quiet Authority',
    desc:     'Quiet Authority | A study in understated confidence and composed presence. Conceptual portraiture exploring competence through minimal styling, deliberate pose work, and rural landscape framing—two-part narrative about authority as an internal quality.',
    location: 'Abuja',
    models:   'Afuye Faith',
    date:     '27-07-24',
    notes:    'Natural light location shoot. Nikon D3200, 50mm. Color-graded for subtle desaturation and tonal restraint to emphasize subject presence over environment.',
    cover:    'assets/images/QA/cover.webp',
    images: [
      'assets/images/QA/01.webp',
      'assets/images/QA/02.webp',
      'assets/images/QA/03.webp',
      'assets/images/QA/04.webp',
      'assets/images/QA/05.webp',
      'assets/images/QA/06.webp',
      'assets/images/QA/07.webp',
      'assets/images/QA/08.webp',
      'assets/images/QA/09.webp',
    ],
  },

  'Heirloom': {
    counter:  '010',
    title:    'Heirloom',
    desc:     'Traditional Yoruba dress, open green space, natural light. A birthday portrait about cultural memory and the things we inherit.',
    location: 'Abuja, Nigeria',
    models:   'Onifade Adunni',
    date:     '12 June, 2026',
    notes:    '',
    cover:    'assets/images/Heirloom/cover.webp',
    images: [
      'assets/images/Heirloom/01.webp',
      'assets/images/Heirloom/02.webp',
      'assets/images/Heirloom/03.webp',
      'assets/images/Heirloom/04.webp',
      'assets/images/Heirloom/05.webp',
      'assets/images/Heirloom/06.webp',
      'assets/images/Heirloom/07.webp',
      'assets/images/Heirloom/08.webp',
      'assets/images/Heirloom/09.webp',
      'assets/images/Heirloom/10.webp',
    ],
  },

  'gbnaf-dignity-shelter': {
    counter:  '019',
    title:    'Dignity & Shelter — GBNAF Outreach, Abuja',
    desc:     'A  visual record of the GBNAF Dignity & Shelter Basket program — an outreach bringing clothing and household essentials to families at an IDP camp in Abuja.',
    location: 'Durumi, Abuja',
    models:   'TBD',
    date:     '4th July, 2026',
    notes:    'Shot handheld, moving with the crowd — no setup, no posing. Just trying to keep up with what was actually happening.',
    cover:    'assets/images/gbnaf-dignity-shelter/cover.webp',
    images: [
      'assets/images/gbnaf-dignity-shelter/01.webp',
      'assets/images/gbnaf-dignity-shelter/02.webp',
      'assets/images/gbnaf-dignity-shelter/03.webp',
      'assets/images/gbnaf-dignity-shelter/04.webp',
      'assets/images/gbnaf-dignity-shelter/05.webp',
      'assets/images/gbnaf-dignity-shelter/06.webp',
      'assets/images/gbnaf-dignity-shelter/07.webp',
      'assets/images/gbnaf-dignity-shelter/08.webp',
      'assets/images/gbnaf-dignity-shelter/09.webp',
      'assets/images/gbnaf-dignity-shelter/10.webp',
      'assets/images/gbnaf-dignity-shelter/11.webp',
      'assets/images/gbnaf-dignity-shelter/12.webp',
      'assets/images/gbnaf-dignity-shelter/13.webp',
      'assets/images/gbnaf-dignity-shelter/14.webp',
      'assets/images/gbnaf-dignity-shelter/15.webp',
      'assets/images/gbnaf-dignity-shelter/16.webp',
      'assets/images/gbnaf-dignity-shelter/17.webp',
      'assets/images/gbnaf-dignity-shelter/18.webp',
      'assets/images/gbnaf-dignity-shelter/19.webp',
    ],
  },

  // EDIT: Add more shoots here. Also add a .wheel-card in work.html.

};


/* ============================================================
   5. THEME TOGGLE
   ============================================================ */

const htmlEl     = document.documentElement;
const savedTheme = localStorage.getItem('omotoyosi-theme') || 'light';
htmlEl.setAttribute('data-theme', savedTheme);

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('omotoyosi-theme', next);
});


/* ============================================================
   6. LIVE TIME
   EDIT: Change 'Africa/Lagos' to your timezone if needed.
   Full list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
   ============================================================ */

function updateTime() {
  const str = new Date().toLocaleTimeString('en-NG', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit', minute: '2-digit', hour12: true,
  });
  document.querySelectorAll('.live-time').forEach(el => el.textContent = str);
}

updateTime();
setInterval(updateTime, 1000);


/* ============================================================
   7. GRAIN TOGGLE
   ============================================================ */

if (!CFG.SHOW_GRAIN) {
  const g = document.querySelector('.grain');
  if (g) g.style.display = 'none';
}


/* ============================================================
   8. PAGE TRANSITIONS
   Full-screen dark panel wipes up on exit,
   tears off upward on new page enter.
   Nav links use data-href instead of href.
   ============================================================ */

const ptEl = document.getElementById('pt');

// Enter animation: panel tears off upward on page load
if (ptEl && CFG.PAGE_TRANSITIONS) {
  // Reset state on page load (handles back button)
  ptEl.classList.remove('pt-cover');
  ptEl.classList.remove('pt-reveal');
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ptEl.classList.add('pt-cover');
      requestAnimationFrame(() => {
        ptEl.classList.remove('pt-cover');
        ptEl.classList.add('pt-reveal');
      });
    });
  });
  setTimeout(() => {
    ptEl.classList.remove('pt-reveal');
  }, 900);
}

// Handle browser back/forward button navigation
window.addEventListener('pageshow', (e) => {
  if (e.persisted && ptEl && CFG.PAGE_TRANSITIONS) {
    // Page was restored from cache (back button)
    ptEl.classList.remove('pt-cover');
    ptEl.classList.remove('pt-reveal');
    requestAnimationFrame(() => {
      ptEl.classList.add('pt-cover');
      requestAnimationFrame(() => {
        ptEl.classList.remove('pt-cover');
        ptEl.classList.add('pt-reveal');
      });
    });
    setTimeout(() => {
      ptEl.classList.remove('pt-reveal');
    }, 900);
  }
});

/**
 * Navigate to a new page with the wipe transition.
 * @param {string} url   - destination page filename
 * @param {string} label - text shown on the transition panel
 */
function navigateTo(url, label) {
  if (!CFG.PAGE_TRANSITIONS || !ptEl) {
    window.location.href = url;
    return;
  }
  ptEl.setAttribute('data-label', label || '');
  ptEl.classList.remove('pt-reveal');
  ptEl.classList.add('pt-cover');
  setTimeout(() => window.location.href = url, 400);
}

// Attach to all elements with data-href
document.querySelectorAll('[data-href]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(el.getAttribute('data-href'), el.getAttribute('data-label') || '');
  });
});


/* ============================================================
   8b. HAMBURGER MENU (mobile only)
   Toggles the mobile drawer open/closed.
   On desktop this button is hidden via CSS so nothing runs visibly.
   Safe to have on all pages — only activates if the button exists.
   ============================================================ */

const hamburgerBtn = document.getElementById('navHamburger');
const mobileMenu   = document.getElementById('mobileMenu');

if (hamburgerBtn && mobileMenu) {

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = hamburgerBtn.classList.contains('open');

    // Toggle open state
    hamburgerBtn.classList.toggle('open', !isOpen);
    hamburgerBtn.setAttribute('aria-expanded', !isOpen);

    if (!isOpen) {
      // Opening — show drawer
      mobileMenu.style.display = 'block';
      // Small delay so display:block registers before transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          mobileMenu.classList.add('open');
          mobileMenu.setAttribute('aria-hidden', 'false');
        });
      });
    } else {
      // Closing — hide drawer after transition ends
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      setTimeout(() => {
        if (!mobileMenu.classList.contains('open')) {
          mobileMenu.style.display = 'none';
        }
      }, 380); // Match CSS transition duration
    }
  });

  // Close menu when a link is clicked
  mobileMenu.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link) {
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      setTimeout(() => { mobileMenu.style.display = 'none'; }, 380);
    }
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', e => {
    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      setTimeout(() => { mobileMenu.style.display = 'none'; }, 380);
    }
  });
}


/* ============================================================
   9. CURSOR
   Smooth lagging ring + precise dot.
   Magnetic pull toward nearby interactive elements.
   EDIT: CURSOR_LERP — 0.01 = more lag, 0.2 = snappier.
   ============================================================ */

const cursorRing = document.querySelector('.cursor');
const cursorDot  = document.querySelector('.cursor-dot');
const cursorLbl  = document.querySelector('.cursor-label');

const CURSOR_LERP = 0.11;

let mX = innerWidth / 2,  mY = innerHeight / 2;
let cX = mX,              cY = mY;

document.addEventListener('mousemove', e => {
  mX = e.clientX;
  mY = e.clientY;

  // Dot snaps instantly
  if (cursorDot) {
    cursorDot.style.left = mX + 'px';
    cursorDot.style.top  = mY + 'px';
  }

  // Cursor label follows mouse
  if (cursorLbl) {
    cursorLbl.style.left = mX + 'px';
    cursorLbl.style.top  = mY + 'px';
  }

  // State classes for cursor shape
  const t       = e.target;
  const isHover = t.closest('a, button, .wheel-card, .shoot-cell');
  const isImg   = t.closest('.wheel-thumb, .shoot-cell, .hero-card');

  if (cursorRing) {
    cursorRing.classList.toggle('is-hover', !isImg && !!isHover);
    cursorRing.classList.toggle('is-image', !!isImg);
  }

  // Show "View →" cursor label over wheel cards only
  if (cursorLbl) {
    cursorLbl.classList.toggle('visible', !!t.closest('.wheel-card'));
  }

  // Magnetic pull toward nearest interactive element within 60px
  const nearest = t.closest('a, button');
  if (nearest) {
    const r    = nearest.getBoundingClientRect();
    const cx   = r.left + r.width  / 2;
    const cy   = r.top  + r.height / 2;
    const dx   = e.clientX - cx;
    const dy   = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const zone = 60; // EDIT: magnetic zone radius in px

    if (dist < zone) {
      const pull = (1 - dist / zone) * 0.35;
      mX = e.clientX - dx * pull;
      mY = e.clientY - dy * pull;
    }
  }
});

// Smooth ring animation loop
function animCursor() {
  cX += (mX - cX) * CURSOR_LERP;
  cY += (mY - cY) * CURSOR_LERP;
  if (cursorRing) {
    cursorRing.style.left = cX + 'px';
    cursorRing.style.top  = cY + 'px';
  }
  requestAnimationFrame(animCursor);
}
animCursor();

document.addEventListener('mouseleave', () => {
  if (cursorRing) cursorRing.style.opacity = '0';
  if (cursorDot)  cursorDot.style.opacity  = '0';
});
document.addEventListener('mouseenter', () => {
  if (cursorRing) cursorRing.style.opacity = '0.5';
  if (cursorDot)  cursorDot.style.opacity  = '1';
});
document.addEventListener('mousedown', () => cursorRing?.classList.add('is-click'));
document.addEventListener('mouseup',   () => cursorRing?.classList.remove('is-click'));


/* ============================================================
   9.5 INTERACTIVE BACKGROUND SHAPES
   Respond to cursor movement (desktop) and swipes (mobile).
   Shapes gently move toward cursor or swipe direction.
   ============================================================ */

const shapes = document.querySelectorAll('.shape');
let shapeData = [];

// Initialize shape data with per-shape depth multipliers for parallax
// Shape 1 moves least (background), shape 3 moves most (foreground)
const SHAPE_DEPTHS = [0.055, 0.10, 0.07];

shapes.forEach((shape, i) => {
  shapeData[i] = {
    el: shape,
    depth: SHAPE_DEPTHS[i] ?? 0.07,
    offsetX: 0,
    offsetY: 0,
    targetOffsetX: 0,
    targetOffsetY: 0,
  };
});

// Track mouse for desktop
let mouseX = innerWidth / 2;
let mouseY = innerHeight / 2;
let touchStartX = 0;
let touchStartY = 0;
let swipeX = 0;
let swipeY = 0;
let isTouch = false;

document.addEventListener('mousemove', e => {
  if (!isTouch) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
});

// Track touch swipes for mobile
document.addEventListener('touchstart', e => {
  isTouch = true;
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', e => {
  const currentX = e.touches[0].clientX;
  const currentY = e.touches[0].clientY;
  swipeX = (currentX - touchStartX) * 0.5; // Reduce intensity
  swipeY = (currentY - touchStartY) * 0.5;
}, { passive: true });

document.addEventListener('touchend', () => {
  isTouch = false;
  swipeX = 0;
  swipeY = 0;
}, { passive: true });

document.addEventListener('mouseleave', () => {
  isTouch = false;
});

// Animation loop for shapes
function animShapes() {
  shapeData.forEach((data) => {
    let inputX, inputY;

    if (isTouch) {
      inputX = swipeX;
      inputY = swipeY;
    } else {
      // Each shape moves at its own depth rate — creates parallax layering
      inputX = (mouseX - innerWidth  / 2) * data.depth;
      inputY = (mouseY - innerHeight / 2) * data.depth;
    }

    // Clamp so shapes don't drift too far
    data.targetOffsetX = Math.max(-90, Math.min(90, inputX));
    data.targetOffsetY = Math.max(-90, Math.min(90, inputY));

    // Smooth lerp — each shape gets slightly different lag for organic feel
    const lerp = 0.04 + data.depth * 0.5;
    data.offsetX += (data.targetOffsetX - data.offsetX) * lerp;
    data.offsetY += (data.targetOffsetY - data.offsetY) * lerp;

    data.el.style.transform = `translate(${data.offsetX}px, ${data.offsetY}px)`;
  });

  requestAnimationFrame(animShapes);
}
animShapes();


/* ============================================================
   10. LANDING PAGE (index.html)
   - Splash screen
   - Background image fade-in
   - Name scramble
   - Typewriter bio
   ============================================================ */

// ── Splash screen ─────────────────────────────────────────
const splashEl = document.getElementById('splash');

if (splashEl) {
  const hasSeenSplash = sessionStorage.getItem('omotoyosi-splash-seen');

  if (hasSeenSplash) {
    // Already seen this session — remove immediately
    splashEl.style.display = 'none';
  } else {
    // First visit — show splash then fade out
    sessionStorage.setItem('omotoyosi-splash-seen', '1');
    setTimeout(() => {
      splashEl.classList.add('done');
      // Remove from DOM after transition
      setTimeout(() => { splashEl.style.display = 'none'; }, 900);
    }, 2400);
  }
}

// ── Background image ──────────────────────────────────────

const landingBg  = document.getElementById('landingBg');
const landingImg = document.getElementById('landingBgImg');

if (landingBg && landingImg && CFG.SHOW_BG_IMAGE) {
  const activate = () => {
    landingBg.classList.add('loaded');
    document.querySelector('.landing')?.classList.add('bg-active');
    document.querySelector('.nav')?.classList.add('nav-transparent');
  };
  
  // Check if image is already cached/loaded
  if (landingImg.complete && landingImg.naturalWidth > 0) {
    // Small delay to ensure styles are applied
    setTimeout(activate, 100);
  } else {
    // Setup load listener
    const loadHandler = () => {
      activate();
      landingImg.removeEventListener('load', loadHandler);
      landingImg.removeEventListener('error', errorHandler);
    };
    
    const errorHandler = () => {
      // Image failed to load — hide the container gracefully
      landingImg.removeEventListener('load', loadHandler);
      landingImg.removeEventListener('error', errorHandler);
    };
    
    landingImg.addEventListener('load', loadHandler);
    landingImg.addEventListener('error', errorHandler);
    
    // Fallback timeout (5 seconds) — if image hasn't loaded by then, proceed anyway
    setTimeout(() => {
      if (!landingBg.classList.contains('loaded')) {
        landingImg.removeEventListener('load', loadHandler);
        landingImg.removeEventListener('error', errorHandler);
      }
    }, 5000);
  }
}

/* ============================================================
   IMAGE LOADING PROGRESS BAR
   Shows at top of page while images load on work/shoot pages
   ============================================================ */

// Only show progress bar on work and shoot pages (not landing/splash)
const isWorkOrShootPage = document.querySelector('.work-index-page, .page-shoot');

if (isWorkOrShootPage) {
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progressBar);

  function updateImageProgress() {
    const images = document.querySelectorAll('img:not(.splash img)');
    if (images.length === 0) {
      progressBar.style.display = 'none';
      return;
    }

    let loaded = 0;
    images.forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        loaded++;
      }
    });

    const progress = (loaded / images.length) * 100;
    progressBar.style.width = progress + '%';

    if (progress === 100) {
      // Fade out after all images loaded
      setTimeout(() => {
        progressBar.classList.add('done');
      }, 300);
    } else {
      progressBar.classList.remove('done');
    }
  }

  // Track image loads
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', updateImageProgress);
    img.addEventListener('error', updateImageProgress);
  });

  // Update on page load
  window.addEventListener('load', updateImageProgress);

  // Periodic check during lazy loading
  setInterval(updateImageProgress, 500);
}

const MAX_TILT = 8;
const heroCard = document.querySelector('.hero-card');

if (heroCard) {
  document.addEventListener('mousemove', e => {
    const normX = (e.clientX / innerWidth  - 0.5) * 2;
    const normY = (e.clientY / innerHeight - 0.5) * 2;
    heroCard.style.transform = `perspective(900px) rotateX(${-normY * MAX_TILT}deg) rotateY(${normX * MAX_TILT}deg)`;
  });

  document.addEventListener('mouseleave', () => {
    heroCard.style.transition = 'transform 0.8s ease';
    heroCard.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  });
}

// ── Name scramble ─────────────────────────────────────────

const CHARS  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$&%';

function scramble(el) {
  if (!el) return;
  const orig = el.textContent.trim();
  const arr  = orig.split('');
  let resolved = 0, frame = 0;
  const iv = setInterval(() => {
    el.textContent = arr.map((c, i) => {
      if (i < resolved) return c;
      if (c === ' ')    return ' ';
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join('');
    frame++;
    if (frame % 9 === 0) resolved++;
    if (resolved >= arr.length) { el.textContent = orig; clearInterval(iv); }
  }, 32);
}

const nameEl = document.getElementById('heroName');
if (nameEl && CFG.SCRAMBLE_NAME) setTimeout(() => scramble(nameEl), 400);

// ── Typewriter bio ────────────────────────────────────────

const bioWrap = document.querySelector('.hero-bio');
const bioText = document.getElementById('bioText');
const bioCur  = document.getElementById('bioCursor');

if (bioWrap && bioText) {
  setTimeout(() => {
    bioWrap.classList.add('visible');
    let i = 0;
    const type = () => {
      if (i < TYPEWRITER_TEXT.length) {
        bioText.textContent += TYPEWRITER_TEXT[i++];
        setTimeout(type, TYPEWRITER_SPEED);
      } else if (bioCur) {
        setTimeout(() => {
          bioCur.classList.add('done');
          setTimeout(() => bioCur.style.opacity = '0', 4200);
        }, 400);
      }
    };
    type();
  }, TYPEWRITER_DELAY);
}


/* ============================================================
   11. WORK PAGE (work.html) — Wheel Card Carousel
   Cards scroll horizontally. Desktop: hover shows floating
   image preview near cursor. Click navigates to shoot page.
   Mobile: tap card directly navigates.
   ============================================================ */

const workList       = document.getElementById('workList');
const workPreview    = document.getElementById('workPreview');
const workPreviewImg = document.getElementById('workPreviewImg');

if (workList) {
  const cards = Array.from(workList.querySelectorAll('.wheel-card'));

  // Staggered entrance — fade + slide up, staggered per card
  cards.forEach((card, i) => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(28px)';
    card.style.transition = `opacity 0.55s ease ${0.05 + i * 0.07}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.07}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  });

  // ── DESKTOP: floating image preview near cursor ───────────

  let previewVisible = false;
  let currentCover   = '';

  document.addEventListener('mousemove', e => {
    if (!workPreview) return;
    const previewW = workPreview.offsetWidth  || 220;
    const previewH = workPreview.offsetHeight || 330;
    const margin   = 36;
    let left = e.clientX + margin;
    let top  = e.clientY - 70;

    if (left + previewW > innerWidth  - 12) left = e.clientX - previewW - margin;
    if (top  + previewH > innerHeight - 12) top  = innerHeight - previewH - 12;
    if (top < 12) top = 12;

    workPreview.style.left = left + 'px';
    workPreview.style.top  = top  + 'px';
  });

  cards.forEach(card => {
    // Cover image = the img inside .wheel-thumb, or a data-cover attribute
    const coverImg = card.querySelector('.wheel-thumb img');
    const cover    = card.getAttribute('data-cover') || coverImg?.src || '';
    const title    = card.querySelector('.wheel-label')?.textContent || '';
    const id       = card.getAttribute('data-title') || '';

    // ── ENHANCED: Populate shot count badge & tags from SHOOT_DATA ──
    const shootData = SHOOT_DATA[id];
    if (shootData) {
      // Set shot count badge
      const badge = card.querySelector('.wheel-badge');
      if (badge) {
        const shotCount = shootData.images.length;
        badge.textContent = `${shotCount} shot${shotCount !== 1 ? 's' : ''}`;
      }
      
      // Set project tags (e.g., "Portraiture • Editorial")
      const tagsEl = card.querySelector('.wheel-tags');
      if (tagsEl && shootData.tags && shootData.tags.length > 0) {
        tagsEl.textContent = shootData.tags.join(' • ');
      }
    }

    // Lazy load cover images
    if (coverImg && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '50px' });
      
      if (coverImg.src) {
        coverImg.dataset.src = coverImg.src;
        coverImg.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"%3E%3Crect fill="%23f0f0f0" width="400" height="600"/%3E%3C/svg%3E';
      }
      observer.observe(coverImg);
    }

    card.addEventListener('mouseenter', () => {
      if (!workPreview || !workPreviewImg) return;
      if (cover !== currentCover) {
        if (currentCover) {
          workPreviewImg.classList.add('swapping');
          setTimeout(() => {
            workPreviewImg.src = cover;
            workPreviewImg.alt = title;
            workPreviewImg.classList.remove('swapping');
          }, 200);
        } else {
          workPreviewImg.src = cover;
          workPreviewImg.alt = title;
        }
        currentCover = cover;
      }
      workPreview.classList.add('visible');
      previewVisible = true;
    });

    card.addEventListener('mouseleave', () => {
      workPreview?.classList.remove('visible');
      previewVisible = false;
    });

    // Click — navigate to shoot
    card.addEventListener('click', () => {
      if (id && SHOOT_DATA[id]) {
        navigateTo(`shoot.html?id=${id}`, SHOOT_DATA[id].title);
      }
    });
  });

  document.addEventListener('mouseleave', () => {
    workPreview?.classList.remove('visible');
    previewVisible = false;
  });

  // ── DRAG TO SCROLL (desktop) ──────────────────────────────
  // Natural click-drag scrolling for the horizontal strip.

  let isDragging  = false;
  let dragStartX  = 0;
  let scrollStart = 0;
  let didDrag     = false; // distinguish click vs drag

  workList.addEventListener('mousedown', e => {
    isDragging  = true;
    didDrag     = false;
    dragStartX  = e.clientX;
    scrollStart = workList.scrollLeft;
    workList.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 4) didDrag = true;
    workList.scrollLeft = scrollStart - dx;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    workList.style.cursor = '';
  });

  // Prevent card click from firing after a drag
  workList.addEventListener('click', e => {
    if (didDrag) {
      e.stopPropagation();
      e.preventDefault();
      didDrag = false;
    }
  }, true); // capture phase so it fires before card listeners
}


/* ============================================================
   12. INFO PAGE (info.html)
   Each .reveal-block clips in from below when scrolled into view.
   ============================================================ */

const revealBlocks = document.querySelectorAll('.reveal-block');

if (revealBlocks.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  revealBlocks.forEach(b => obs.observe(b));

  // Divider line draw-on animation
  document.querySelectorAll('.info-divider').forEach(d => {
    const dObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { d.classList.add('revealed'); dObs.unobserve(d); }
      });
    }, { threshold: 0.5 });
    dObs.observe(d);
  });
}


/* ============================================================
   13. CONTACT PAGE (contact.html)
   Email address chars scatter upward on hover, fall back on leave.
   ============================================================ */

const emailWrap = document.querySelector('.contact-email-wrap');
const emailLine = document.querySelector('.contact-email-line');

if (emailWrap) {
  const raw   = emailWrap.getAttribute('data-email') || '';
  emailWrap.innerHTML = raw.split('').map(c =>
    `<span class="char">${c}</span>`
  ).join('');

  const chars = emailWrap.querySelectorAll('.char');

  emailWrap.addEventListener('mouseenter', () => {
    chars.forEach((c, i) => {
      const fly   = -(14 + Math.random() * 22);
      const drift = (Math.random() - 0.5) * 6;
      c.style.transitionDelay    = `${i * 18}ms`;
      c.style.transitionDuration = '0.38s';
      c.style.transform = `translate(${drift}px, ${fly}px) rotate(${drift * 1.5}deg)`;
      c.style.color = 'var(--text)';
    });
  });

  emailWrap.addEventListener('mouseleave', () => {
    chars.forEach((c, i) => {
      c.style.transitionDelay    = `${i * 12}ms`;
      c.style.transitionDuration = '0.5s';
      c.style.transform = 'translate(0,0) rotate(0deg)';
      c.style.color = '';
    });
  });

  emailWrap.addEventListener('click', () => {
    const email = emailWrap.getAttribute('data-email');
    if (email) window.location.href = `mailto:${email}`;
  });
}

if (emailLine) setTimeout(() => emailLine.classList.add('go'), 700);


/* ============================================================
   13.5 SOCIAL SHARING: UPDATE OG TAGS
   Updates Open Graph meta tags when a shoot is loaded.
   Used for social media previews (WhatsApp, Instagram, Discord, etc.)
   ============================================================ */

function updateOGTags(shootId, shootData) {
  if (!shootData) return;
  
  const title = shootData.title + ' — Omotoyosi';
  const description = shootData.desc || 'Editorial photography by Omotoyosi';
  const imageUrl = shootData.cover || 'https://toyosarchive.vercel.app/assets/images/landing-bg.webp';
  const pageUrl = `https://toyosarchive.vercel.app/shoot.html?id=${shootId}`;
  
  // Update OG meta tags
  const ogTitle = document.getElementById('og-title');
  const ogDesc = document.getElementById('og-description');
  const ogImage = document.getElementById('og-image');
  const ogUrl = document.getElementById('og-url');
  
  if (ogTitle) ogTitle.content = title;
  if (ogDesc) ogDesc.content = description;
  if (ogImage) ogImage.content = imageUrl;
  if (ogUrl) ogUrl.content = pageUrl;
  
  // Update Twitter Card meta tags
  const twitterTitle = document.getElementById('twitter-title');
  const twitterDesc = document.getElementById('twitter-description');
  const twitterImage = document.getElementById('twitter-image');
  
  if (twitterTitle) twitterTitle.content = title;
  if (twitterDesc) twitterDesc.content = description;
  if (twitterImage) twitterImage.content = imageUrl;
}


/* ============================================================
   14. SHOOT PAGE (shoot.html)
   Reads ?id= from URL, populates page from SHOOT_DATA,
   builds grid with staggered 3D flip entrance animation.
   ============================================================ */

const shootGrid = document.getElementById('shootGrid');

if (shootGrid) {
  const shootId = new URLSearchParams(window.location.search).get('id');
  const data    = SHOOT_DATA[shootId];

  if (data) {
    // Update page title
    document.title = `${data.title} — Omotoyosi`;
    
    // Update OG tags for social sharing
    updateOGTags(shootId, data);

    // Populate text fields
    document.getElementById('sCounter').textContent  = data.counter  || '001';
    document.getElementById('sTitle').textContent    = data.title    || '—';
    document.getElementById('sDesc').textContent     = data.desc     || '—';
    document.getElementById('sLocation').textContent = data.location || '—';
    document.getElementById('sModels').textContent   = data.models   || '—';
    document.getElementById('sDate').textContent     = data.date     || '—';
    document.getElementById('sNotes').textContent    = data.notes    || '—';

    // Build image grid
    data.images.forEach((src, i) => {
      const cell  = document.createElement('div');
      cell.className = 'shoot-cell';
      cell.setAttribute('data-num',   String(i + 1).padStart(2, '0'));
      cell.setAttribute('data-index', i);
      cell.style.setProperty('--delay', `${i * 0.06}s`);

      const img   = document.createElement('img');
      img.src     = src;
      img.alt     = `${data.title} — ${i + 1}`;
      img.loading = 'lazy';

      cell.appendChild(img);
      shootGrid.appendChild(cell);

      // Mouse parallax on each image
      cell.addEventListener('mousemove', e => {
        const r  = cell.getBoundingClientRect();
        const nx = ((e.clientX - r.left)  / r.width  - 0.5) * 2;
        const ny = ((e.clientY - r.top)   / r.height - 0.5) * 2;
        img.style.transition = 'transform 0.3s ease';
        img.style.transform  = `translate(${nx * 8}px, ${ny * 8}px) scale(1.07)`;
      });

      cell.addEventListener('mouseleave', () => {
        img.style.transition = 'transform 0.7s ease';
        img.style.transform  = 'translate(0,0) scale(1)';
      });

      // Click to open lightbox
      cell.addEventListener('click', () => openLightbox(i, data));
    });

    // Reveal header text
    setTimeout(() => {
      document.getElementById('sTitle')?.classList.add('in');
      document.getElementById('sDesc')?.classList.add('in');
      document.querySelector('.shoot-notes')?.classList.add('in');
      document.querySelectorAll('.shoot-meta-item').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), i * 90);
      });
    }, 100);

    // Reveal grid cells as they scroll into view
    const gridObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); gridObs.unobserve(e.target); }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });

    document.querySelectorAll('.shoot-cell').forEach(c => gridObs.observe(c));

  } else {
    // Bad shoot ID — go back to work page
    navigateTo('work.html', 'Work');
  }
}


/* ============================================================
   15. SCROLL PROGRESS BAR
   Fills as you scroll down the shoot page.
   ============================================================ */

const progressBar = document.getElementById('scrollProgress');

if (progressBar) {
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.width = total > 0 ? (scrollY / total) * 100 + '%' : '0%';
  });
}


/* ============================================================
   16. LIGHTBOX
   Full-screen image viewer for shoot page.
   ============================================================ */

const lb        = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbWrap    = document.getElementById('lbWrap');
const lbTitle   = document.getElementById('lbTitle');
const lbCounter = document.getElementById('lbCounter');

let lbIndex  = 0;
let lbImages = [];
let lbData   = null;

function openLightbox(index, data) {
  lbData   = data;
  lbImages = data.images;
  lbIndex  = Math.max(0, Math.min(index, lbImages.length - 1));
  renderLb();
  lb?.classList.add('open');
  lb?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lb?.classList.remove('open');
  lb?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function lbGo(index) {
  lbIndex = ((index % lbImages.length) + lbImages.length) % lbImages.length;
  lbWrap?.classList.add('fade');
  setTimeout(() => { renderLb(); lbWrap?.classList.remove('fade'); }, 230);
}

function renderLb() {
  if (lbImg) { lbImg.src = lbImages[lbIndex]; lbImg.alt = lbData?.title || ''; }
  if (lbTitle)   lbTitle.textContent   = lbData?.title || '';
  if (lbCounter) lbCounter.textContent =
    `${String(lbIndex + 1).padStart(2,'0')} / ${String(lbImages.length).padStart(2,'0')}`;
  const show = lbImages.length > 1 ? '1' : '0';
  document.getElementById('lbPrev') && (document.getElementById('lbPrev').style.opacity = show);
  document.getElementById('lbNext') && (document.getElementById('lbNext').style.opacity = show);
}

document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
document.getElementById('lbPrev')?.addEventListener('click',  () => lbGo(lbIndex - 1));
document.getElementById('lbNext')?.addEventListener('click',  () => lbGo(lbIndex + 1));

// Share button — copies direct image URL to clipboard
document.getElementById('lbShare')?.addEventListener('click', async () => {
  const imgSrc = lbImages[lbIndex];
  if (!imgSrc) return;
  const shareUrl = new URL(imgSrc, window.location.href).href;
  try {
    if (navigator.share) {
      await navigator.share({ title: lbData?.title || 'Photo', url: shareUrl });
    } else {
      await navigator.clipboard.writeText(shareUrl);
      const btn = document.getElementById('lbShare');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'Copied ✓';
        setTimeout(() => { btn.textContent = orig; }, 1800);
      }
    }
  } catch (_) { /* user cancelled share sheet — do nothing */ }
});

lb?.addEventListener('click', e => {
  if (e.target === lb || e.target === lbWrap) closeLightbox();
});


/* ============================================================
   17. KEYBOARD + TOUCH (lightbox)
   ← / → navigate images. Escape closes.
   Swipe left/right on mobile.
   ============================================================ */

document.addEventListener('keydown', e => {
  if (!lb?.classList.contains('open')) return;
  if (e.key === 'ArrowLeft')  lbGo(lbIndex - 1);
  if (e.key === 'ArrowRight') lbGo(lbIndex + 1);
  if (e.key === 'Escape')     closeLightbox();
});

let lbTouchX = 0;
lb?.addEventListener('touchstart', e => {
  lbTouchX = e.changedTouches[0].clientX;
}, { passive: true });

lb?.addEventListener('touchend', e => {
  const diff = lbTouchX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 45) lbGo(diff > 0 ? lbIndex + 1 : lbIndex - 1);
}, { passive: true });