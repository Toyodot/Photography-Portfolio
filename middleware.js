import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Only intercept shoot.html requests
  if (!pathname.includes('shoot.html')) {
    return NextResponse.next();
  }

  // Get the shoot ID from query params
  const shootId = searchParams.get('id');
  if (!shootId) {
    return NextResponse.next();
  }

  // Look up metadata for this shoot
  const shootMetadata = getShootMetadata(shootId);
  if (!shootMetadata) {
    return NextResponse.next();
  }

  // Clone the response so we can read and modify it
  const response = NextResponse.next();
  const clonedResponse = response.clone();
  let html = await clonedResponse.text();

  // Build OG and Twitter Card meta tags
  const ogTags = `
    <meta property="og:title" content="${escapeHtml(shootMetadata.title)}" />
    <meta property="og:description" content="${escapeHtml(shootMetadata.description)}" />
    <meta property="og:image" content="${shootMetadata.imageUrl}" />
    <meta property="og:url" content="https://toyosarchive.vercel.app/shoot.html?id=${shootId}" />
    <meta property="og:type" content="website" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(shootMetadata.title)}" />
    <meta name="twitter:description" content="${escapeHtml(shootMetadata.description)}" />
    <meta name="twitter:image" content="${shootMetadata.imageUrl}" />
  `;

  // Inject OG tags before closing </head> tag
  html = html.replace('</head>', ogTags + '</head>');

  return new NextResponse(html, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

// Get metadata for each shoot
function getShootMetadata(shootId) {
  const shootData = {
    'Agbara': {
      title: 'Agbára — Omotoyosi',
      description: 'Natural light portraiture. Late afternoon golden hour. Independent photographer.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/Agbara/cover.jpg',
    },
    'fts2025': {
      title: 'Feed The Streets 2025 — Omotoyosi',
      description: 'Portraits from community outreach at IDP camps in Abuja. Documentary approach.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/fts2025/cover.jpg',
    },
    'ade-ibile': {
      title: 'Adé Ìbílẹ̀ — Omotoyosi',
      description: 'A refined expression of heritage and quiet royalty. Cultural portraiture.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/ade-ibile/cover.jpg',
    },
    'feyi': {
      title: 'Fẹ́yì — Omotoyosi',
      description: 'Quiet frames. Presence, shape, and refined femininity. Editorial portraiture.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/feyi/cover.jpg',
    },
    'mfy': {
      title: 'Memo From Yesterday — Omotoyosi',
      description: 'Editorial portraiture. A collection of quiet moments and introspective frames.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/mfy/cover.jpg',
    },
    'repose': {
      title: 'Repose — Omotoyosi',
      description: 'Fine art portraiture. Exploring stillness and presence.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/repose/cover.jpg',
    },
    'bare': {
      title: 'Bare — Omotoyosi',
      description: 'Minimalist portraiture. Reduction and essence.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/bare/cover.jpeg',
    },
    'kinship': {
      title: 'Kinship — Omotoyosi',
      description: 'Family and connection. Editorial documentation.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/kinship/cover.jpg',
    },
    'Quietude': {
      title: 'Quietude — Omotoyosi',
      description: 'Conceptual portraiture. Exploring silence and introspection.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/Quietude/cover.jpg',
    },
    'inception': {
      title: 'Inception — Omotoyosi',
      description: 'Editorial fine art. The beginning of vision.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/inception/cover.jpg',
    },
    'fts-3.0': {
      title: 'Feed The Streets 3.0 — THAI — Omotoyosi',
      description: 'Community outreach documentary. Portraits with purpose.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/fts-3.0/cover.jpg',
    },
    'QA': {
      title: 'Quiet Authority — Omotoyosi',
      description: 'Conceptual editorial. Authority through subtlety.',
      imageUrl: 'https://toyosarchive.vercel.app/assets/images/QA/cover.jpg',
    },
  };

  return shootData[shootId] || null;
}

// Escape HTML entities to prevent injection
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

export const config = {
  matcher: ['/shoot.html'],
};