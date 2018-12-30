"use strict";

var filesToCache = [];
var cacheName = '3d-pwa-templ8';
var dataCacheName = '3d-pwa-templ8';
//DOMAIN-HANDLING-.
// if(document.URL.match('127.0')){ //localhost // no dom! //TODO - parameterize-.
if(true){ //true is run LOCAL CACHE TESTING
// if(false){ //false is run PROD CACHE
  console.log('[Service Worker] process local cache')
  filesToCache = [
    '/',
   "./img",
   "./img/logos",
   "./img/logos/logo1_128x128.png",
   "./img/logos/logo1_144x144.png",
   "./img/logos/logo1_152x152.png",
   "./img/logos/logo1_192x192.png",
   "./img/logos/logo1_256x256.png",
   "./3d/skybox/skybox_px.jpg",
   "./3d/skybox/skybox_py.jpg",
   "./3d/skybox/skybox_pz.jpg",
   "./3d/skybox/skybox_nx.jpg",
   "./3d/skybox/skybox_ny.jpg",
   "./3d/skybox/skybox_nz.jpg",
   "./lib/babylon/materials/babylon.gridMaterial.min.js",
   "./lib/babylon/babylon.3.0.0-alpha.max.js",
   "./lib/babylon/hand.min-1.2.js",
   "./3d/assets/skull.babylon",
   "./3d/assets/worldbox2.babylon",
   "./sonic/nxBoomCore2cc0.mp3",
   "./sonic/nxBlip2b.mp3",
   // "https://www.google-analytics.com/analytics.js",
   "./lib/materialize/materialize.css",
   "./lib/jquery/jquery-3.3.1.js",
   "./manifest.json",
   "./index.html",
   "./app.js",
   "./sw.js"
  ];
} else {
  console.log('[Service Worker] process production cache');
  var path = "https://your.domain/DEMOPWA1/public";    //different path on production server
  filesToCache = [
    '/',
     path + "/img/logos/logo1_128x128.png",
     path + "/img/logos/logo1_144x144.png",
     path + "/img/logos/logo1_152x152.png",
     path + "/img/logos/logo1_192x192.png",
     path + "/img/logos/logo1_256x256.png",
     path + "/3d/skybox/skybox_px.jpg",
     path + "/3d/skybox/skybox_py.jpg",
     path + "/3d/skybox/skybox_pz.jpg",
     path + "/3d/skybox/skybox_nx.jpg",
     path + "/3d/skybox/skybox_ny.jpg",
     path + "/3d/skybox/skybox_nz.jpg",
     path + "/lib/jquery/jquery-3.3.1.js",
     path + "/lib/materialize/materialize.css",
     path + "/lib/babylon/materials/babylon.gridMaterial.min.js",
     path + "/lib/babylon/babylon.3.0.0-alpha.max.js",
     path + "/lib/babylon/hand.min-1.2.js",
     path + "/3d/assets/skull.babylon",
     path + "/3d/assets/worldbox2.babylon",
     path + "/sonic/nxBoomCore2cc0.mp3",
     path + "/sonic/nxBlip2b.mp3",
     path + "/manifest.json",
     path + "/index.html",
     path + "/app.js",
     path + "/sw.js"
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
  e.respondWith(
    caches.match(e.request).then(function(response){
      if(response){ console.log('[ServiceWorker] return cache '+e.request.url); return response; }
      else{ console.log('[ServiceWorker] return fetch '+e.request.url); return fetch(e.request); }
    })
  );
});
/***********************-PWA-:-INSTALL,-ACTIVATE,-FETCH-***********************************/
/******************************************************************************************\
//NOTES: 
- use devtools console logs to fine tune caching and fetching of appshell and content. 
- if vague error of failed cache or fetch, look in network tab to find bad path.
- if manifest is broken, close tab and reopen - sometimes cached manifest or shared worker. 
\******************************************************************************************/