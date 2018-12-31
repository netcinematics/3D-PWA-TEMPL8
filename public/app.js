(function() {
  'use strict';
  //STATE-PRESISTENCE-MACHINE-.
  window.onload = function() {
    let appName = "3d-pwa-templ8"
    localStorage.setItem("appData", {appName:appName});
    localStorage.setItem("gameData", {games:[{}]});
  }
  $('button').click(() => {
    let appData = localStorage.getItem("appData") || {};
    let gameData = localStorage.getItem("gameData") || {};
  });
  //Standard-ServiceWorker-Registration-.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(function() { console.log('[App] Service Worker Registered'); });
  }
})();
