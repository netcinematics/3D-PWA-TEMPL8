(function() {
  'use strict';

  window.onload = function() {
  //   let message = localStorage.getItem("message") || 'Your message will display here';
  //   $('#message').html(message);
  //   $('#display').html(message);
  }

  $('#button').click(() => {
  //   console.log('click')
  //   let message = $('#message').val();
  //   console.log(message);
  //   $('#display').html(message);
  //   localStorage.setItem("message", message);
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js')
             .then(function() { console.log('[App] Service Worker Registered'); });
  }
})();
