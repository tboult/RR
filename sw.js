const CACHE_NAME = 'RR-v0.967';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './RR.png',
  './icon-192.png',
  './icon-512.png'
];

// 1. Install Event: Cache static assets & force new worker to activate immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// 2. Activate Event: Delete OLD cache versions & take control of open tabs immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // Deletes v3, v2, etc. automatically
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Serve from cache first, fall back to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
