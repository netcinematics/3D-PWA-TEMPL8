var dataCacheName = '3d-pwa-templ8';
var cacheName = '3d-pwa-templ8';
var filesToCache = [];

//DOMAIN-HANDLING-.
// if(document.URL.match('127.0')){ //localhost // no dom!
if(true){ //true is run LOCAL CACHE TESTING
// if(false){ //false is run PROD APP CACHE
  console.log('[Service Worker] process local cache')
  filesToCache = [
    '/',
   "./img",
   "./img/icons",
   "./img/icons/icon-128x128.png",
   "./img/icons/icon-144x144.png",
   "./img/icons/icon-152x152.png",
   "./img/icons/icon-192x192.png",
   "./img/icons/icon-256x256.png",
   "./index.html",
   // "./manifest.json",
   "./app.js",
   "./sw.js",
   "./lib/jquery/jquery-3.3.1.js",
   "./lib/babylon/babylon.3.0.0-alpha.max.js"
  ];
} else {
  console.log('[Service Worker] process production cache');
  var path = "https://your.domain/DEMOPWA1/public";    //different path on production server
  filesToCache = [
    '/',
   path + "/img/icons/icon-128x128.png",
   path + "/img/icons/icon-144x144.png",
   path + "/img/icons/icon-152x152.png",
   path + "/img/icons/icon-192x192.png",
   path + "/img/icons/icon-256x256.png",
   path + "/index.html",
   path + "/manifest.json",
   path + "/app.js",
   path + "/lib/jquery/jquery-3.3.1.js",
   // path + "/scripts/materialize.js",
   path + "/sw.js",
   // path + "/styles/materialize.css",
  ];
}

/***********************-PWA-:-INSTALL,-ACTIVATE,-FETCH-***********************************/
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
/***********************-PWA-:-INSTALL,-ACTIVATE,-FETCH-***********************************/
