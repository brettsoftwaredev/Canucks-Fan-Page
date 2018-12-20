const canuckCache = 'canuck-cache-3'

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('canuck-') && cacheName !== canuckCache
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(canuckCache).then(function(cache) {
            return cache.addAll(
                [
                    './images/alexander-edler-2018-39.jpg',
                    './images/arena.jpg',
                    './images/brock.jpg',
                    './images/gagner.jpg',
                    './images/horvat.jpg',
                    './images/logo.jpg',
                    './js/app.js',
                    './js/gulpfile.js',
                    './index.html',
                    './',
                    './css.css'
                ]
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith( 
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request)
        })
    );
});