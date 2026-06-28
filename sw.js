// ============================================================
//  Class 8 Math MCQ – Service Worker (sw.js)
//  Caches all app files for full offline support
// ============================================================

const CACHE_NAME  = 'math-mcq-v1';
const CACHE_URLS  = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Poppins:wght@400;600;700;800&display=swap'
];

/* ─── INSTALL ─── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell');
      return cache.addAll(CACHE_URLS).catch(err => {
        console.warn('[SW] Some resources failed to cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

/* ─── ACTIVATE ─── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ─── FETCH (Cache First) ─── */
self.addEventListener('fetch', event => {
  // Skip non-GET and cross-origin requests we don't control
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          // Cache valid responses
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          // Fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

/* ─── BACKGROUND SYNC (optional) ─── */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
