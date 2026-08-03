const CACHE_NAME = 'random-robin-v4';
// Automatically pull and display the CACHE_NAME from sw.js
if ('caches' in window) {
  caches.keys().then((cacheNames) => {
    // Find the cache matching your prefix (e.g., 'random-robin-v1.0.3')
    const activeCache = cacheNames.find(name => name.startsWith('random-robin')) || cacheNames[0];
    
    if (activeCache) {
      const versionElem = document.getElementById('app-version');
      if (versionElem) {
        versionElem.innerText = activeCache; // Displays 'random-robin-v1.0.3'
      }
    }
  });
}
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './RR.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
