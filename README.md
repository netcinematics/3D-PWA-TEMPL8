# 3D-PWA-TEMPL8
PWA Template with BabylonJS
# A 3D Progressive Web App Template

Powered by:

[<img src="curio/logo1.png" width="200" border="3" style="border-radius: 10px;">](https://www.babylonjs.com/)

PWAs are the next wild west for creative HTML5 devs and the world wide web. 

Now with BabylonJS, bring your 3D creations to the "Home Screen" with no app store necessary.

Use this template to begin building and distributing your 3D PWA creations. 


## WARNING

Check W3C compatibility tables before going to production. PWA technology is subject to change. Look for [Manifest support as a good example of technical maturation](https://developer.mozilla.org/en-US/docs/Web/Manifest#Browser_compatibility) and [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#Specifications), also on [caniuse - serviceworker](https://caniuse.com/#feat=serviceworkers), and [caniuse - web app manifest](https://caniuse.com/#feat=web-app-manifest). Zing!


## Create your own 3D Web App (why not?)

1) Clone me - I'm free! (as in MIT). 

2) Set up [Web Server for Chrome](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#install_and_verify_web_server)), and point it to the 'public' directory in this template.

3) Start the server and click the localhost link in Web Server for Chrome. 

<img src="curio/curio2.png" width="350" border="3" style="border-radius: 10px;">

- [Use BabylonJS to add your own snazz](https://doc.babylonjs.com/).

<img src="curio/curio5.png" width="350" border="3" style="border-radius: 10px;">


## Use the app

Refresh and check out those cached files in the DevTools console!

It caches the skybox, 3D assets, and audio!?! So we can render dynamic content inside - and cache that too!

Click: Add to homescreen, or Install in Google settings - to get the full App Experience - without any janky App Store.

App will open with a splashscreen and cached files, and a few other gizmos, like: hidden URL, SSL cert info, and offline capabilities.

Check out your desktop/homescreen to see that app! Also it pops up any where native apps do. Thank you Microsoft!

NOTE: To uninstall, right click the app in chrome://apps, or in the app header. 

PWAs make the web trans-dimensional. No way!

Details below.


## Chrome Web Server

All aboard! The Chrome Web Server is awesome... and it is leaving the station. Time to jump on! Here's an info drop to get you going. TAKEAWAY: there is finally a simple Dev Server that is reliable and unobstrusive - thank you Google. But it's a tad weird compared to what us old-schoolers are used to. Instruc's: 1) you must point to the 'public' folder - or all your cache paths go 404. 2) Then click the link. 3) Enjoy simple-servery-awesomeness. Zap!

<img src="curio/curio4.png" width="350" border="3" style="border-radius: 10px;">

## App Shell

PWAs have a DESIGN PATTERN called "App Shell"... and it's really clever. App Shell is just a separation of content code from app code, for the purpose of caching. Why? So you can download lots of content - and never reload the shell! Dig? Use this template as your App Shell and pass dynamic (or episodic) content through. The canvas is one example of dynamic content, but later we will look for LocalStorage to enable episodic content in beautiful JSON form. But that is a different git. Pow!


## Service Workers

Service Workers are widely supported across browsers, apparently, but be sure to check that [compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker#Browser_compatibility) before you run amok on safari. 

"This is an experimental technology" <- gotta love that!
NOTE: a small learning curve: look carefully under DevTools > Application, > Network, and > Audit tabs - to find the insights you seek. Oh, and splat that "Clear Cache" button often.


## "Add to Homescreen" (Web App Manifest)

This is the COOL new ability in the super fancy "Web App Manifest". Thank you [W3C](https://www.w3.org/TR/appmanifest/)! But hey browser vendors - why no support for simple JSON file like [WAM]((https://caniuse.com/#feat=web-app-manifest))??? 

NOTE: micro learning curve for topics like: How do I add a custom button to "Add to Homescreen"? Answers revealed in the code! Or also Push Notifications, etc. Thankfully, many doors open [here](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Installable_PWAs). Thank you Mozilla!


## Structure

```
├── README.md
├── MIT-LICENSE
├── App_Curation
└── public
    ├── 3d
    │   └── assets
    │   └── ...
    ├── img
    │   └── logos
    │   └── ...
    ├── lib
    │   └── babylon
    │   └── materialize
    │   └── jquery
    │   └── ...
    ├── app.js
    ├── index.html
    ├── manifest.json
    └── sw.js
```


## Performance Optimizations

Lighthouse is a tool for scoring PWA capabilities. Some performance optimization was made to this template, but if you see others please send PR.
For example GZIP - always. If I remember correctly. Also, it is a <i>really</i> good to click the 'backwards looking refresh icon in DevTools > Performance tab. Because it refreshes and profiles the PWA. Zap! Find that magic-button in the top left of the header, under > Performance tab. Thanks Paul. And if we look closely at that pretty sequence of data strata... it helps out with Lighthouse. Shazam! For that reason, a skull was inserted into this BabylonJS Asset Manager (feel bad for that guy or girl). Remind me to ask wife to scan remains to glTF. Point is, we use the 3D Mesh to emulate complex matrix and there is no better TEST than Jonny Doe. Thank you DK. We can add/remove said skull easily to see performance differences. NOTE: still on lookout for (run-time) Scene-Sequenced 3DLoaders - to delay load of entire scenes! Please let us know if you see any? It needs to dynamically load scenes and replace them on canvas (from Service Worker), to and from paywall and cache. Ideas or PR's? Soundsawesome!

<img src="curio/curio6.png" width="80%" border="3" style="border-radius: 10px;">
The BabylonJS Asset Manager loading experience is excellent. Thanks HTML5Devs! 


## Libs

- [BabylonJS](https://www.babylonjs.com/) Not grandpa's 3D Web rendering library - it's leading-edge.
- [JQuery](https://jquery.com/) hybrid 3D and 2D, like vegetables, it's good for you! Because service worker shell cache 2D is aok.
- [Materialize](http://materializecss.com/). CSS boilerplate (optional). : )


## Examples on anmscape.com

Hosted by heroku:
- this template : free MIT
- boxigon : play free app!
- surfmoon : play free app!
: )


## Resources

- [PWA - Your First Progressive Web App - Google Developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)
- [PWA in an hour - freeCodeCamp](https://medium.freecodecamp.org/how-you-can-make-a-progressive-web-app-in-an-hour-7e36d560610e)
- [PWA Structure - tutorial](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/App_structure)
- [PWA Examples - js13kpwa](https://github.com/mdn/pwa-examples)
- [PWA Add to Homescreen](https://developers.google.com/web/fundamentals/app-install-banners/#test)
- [PWA - Wikipedia](https://en.wikipedia.org/wiki/Progressive_web_applications)
- chrome://inspect/#service-workers
- chrome://apps


## PWA PAYWALL?

Check out [itch.io](https://itch.io/docs/creators/html5) and [LeadBolt](https://www.leadbolt.com/) first. You'll be glad you did!

QUESTION: What is the best PWA Paywall?

ANSWER: I don't really know.

STATUS: working on itch.io docs (and support) to integrate [many](https://itch.io/developers) [options](https://itch.io/docs/api/overview) like [embeds](https://itch.io/docs/creators/widget) or [JWT with Node?](https://itch.io/docs/api/serverside). But that's another git. Stay Tuned! : )

NOTE: integration for LeadBolt ADS, as interstitial, "Brought to you by" overlay, - would be another excellent experience for HTML5 3D-PWA users.

Welcome to the world-wild-web. : )


## Contact DM

boxigon
anmscape
afalcon


## 3D-PWA?

All in! :) 

