const CACHE_NAME = 'km-portfolio-v2';
const ASSETS_TO_CACHE = [
    '/portfolio_me/',
    '/portfolio_me/index.html',
    '/portfolio_me/style.css',
    '/portfolio_me/main.js',
    '/portfolio_me/profile.jpeg',
    '/portfolio_me/resume.pdf',
    '/portfolio_me/manifest.json'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing V2...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching assets');
                return Promise.all(
                    ASSETS_TO_CACHE.map(url => {
                        return cache.add(url).catch(err => console.warn(`[SW] Could not cache: ${url}`, err));
                    })
                );
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating V2...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                }).catch(() => {
                    return caches.match('/portfolio_me/index.html');
                });
            })
    );
});
