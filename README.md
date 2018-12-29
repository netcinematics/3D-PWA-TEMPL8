# 3D-PWA-TEMPL8
PWA Template with BabylonJS

[![3D Web Apps](curio/curio1.png)]

# A Progressive Web App Template

Powered by BabylonJS

<img src="curio/babylonlogo1.png" width="100" border="3" style="border-radius: 10px;">

For creative HTML5 devs, PWA means the end of an ice-age. Now with BabylonJS, Progressive Apps bring your 3D creations to the "Home Screen", with no app store necessry.

Use this template to begin building and distributing your 3D PWA Apps. 


## WARNING

Check W3C compatiility tables before going to production with PWA technology. It is subject to change, and while a progressive enhancement, not all browsers support everything, look for Manifest support as a good example.


## Create your 3D Web App

Clone this repo (or just copy the bits you need). The main files to edit are:  

- [public/index.html](public/index.html) The main page for your app
- [public/style/style.css)](public/style/style.css) Add your own styling to this file
- [public/scripts/app.js](public/scripts/app.js) This contains the javascript to handle the logic in your app. It currently uses localStorage for storing data when the use clicks the button, it is recommended to use another database in production, such as indexedDb (Read more [here](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#intercept_the_network_request_and_cache_the_response))
- [images/icons](images/icons) Create square icons of the number of pixels for each size and save them here
- [public/service-worker.js](public/service-worker.js) Update this with the list of files you want to cache locally

<img src="curio/curio2.png" width="200" border="3" style="border-radius: 10px;">

## Using the app

It even caches the skybox!


## App Shell

PWA has a design pattern called "App Shell", that is really clever. App Shell, is just a separation of content code from app code... for the purpose of caching each separately. So this template is primarily App Shell, with the canvas being one example of dynamic content.


## Service Workers

Service Workers appear to be widely supported across browsers, but be sure to check the compatibility table. 

- Open `index.html` within the public folder
- Install a service worker for your browser, if you haven't already (eg [Web Server for Chrome](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#install_and_verify_web_server))
- Browsers may also ask if you want to include the app on your homescreen

## What's included

```
├── README.md
├── firebase.json
└── public
    ├── fonts
    │   └── roboto
    │       └── ...
    ├── images
    │   └── icons
    │       └── ...
    ├── index.html
    ├── manifest.json
    ├── scripts
    │   ├── app.js
    │   ├── jquery-3.3.1.js
    │   └── materialize.js
    ├── service-worker.js
    └── styles
        ├── materialize.css
        └── style.css
```

- [JQuery](https://jquery.com/) A library for supporting quick and easy javascipt in your website
- For styling, this has materialize.js and css from [materializecss.com](http://materializecss.com/). Remove or replace it if you prefer something different.
- [public/service-worker.js](public/service-worker.js) Currently this will cache the app's files for quick local access. Read more about Service Workers [here](https://developers.google.com/web/fundamentals/primers/service-workers/).
- [public/manifest.json](public/manifest.json) A JSON file specifies how your app appears to the user in the areas that they would expect to see apps (for example the mobile home screen), direct what the user can launch and more importantly how they can launch it. Read more about this [here](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#support_native_integration).

## Examples

Here are examples hosted on heroku:
- [ryanwhocodes/qr-code-pwa](https://github.com/ryanwhocodes/qr-code-pwa)
- [qr-code-pwa.firebaseapp.com/](https://qr-code-pwa.firebaseapp.com/)

## Resources

- [Your First Progressive Web App - Google Developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)
