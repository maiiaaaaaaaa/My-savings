self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('piggy-cache').then(cache => {
      return cache.addAll(['.', 'index.html', 'icon.svg', 'manifest.json']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
