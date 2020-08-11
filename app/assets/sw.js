var cacheName = 'rizo-olvera-v2';
var filesToCache = [
	'/',
	'/index.html',
	'/css/app.css',
	'/js/app.js',
	'/fonts/DIN.ttf',
	'/fonts/DIN.woff',
	'/fonts/DIN.woff2',
	'/fonts/Avenir-Book.ttf',
	'/fonts/Avenir-Book.woff',
	'/fonts/Avenir-Book.woff2'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(filesToCache);
		})
	);
});


/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
	);
});