# 3D-PWA-Appshell-Templ8
PWA Template with BabylonJS
# A 3D Progressive Web App Shell Template

Powered by:

[<img src="curio/logo1.png" width="200" border="3" style="border-radius: 10px;">](https://www.babylonjs.com/)

PWAs are the next wild west on the world wide web for creative HTML5 developers. Now with BabylonJS, the next generation of devs will bring their creative 3D skills to the "Home screen" with no app store necessary. Use this template to begin distributing creative 3D PWA's. 


## WARNING

Be sure to check the W3C compatibility tables before going to production. PWA technology is a "Progressive Enhancement" (meaning that the baseline is a vanilla web site), but all is still subject to change. So it is best to watch for clear indicators of vendor support and technical maturation - like the [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest#Browser_compatibility) for instance. The Web App Manifest is not as well supported as the [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#Specifications). Look at [caniuse Service Workers](https://caniuse.com/#feat=serviceworkers), and [caniuse Web App Manifest](https://caniuse.com/#feat=web-app-manifest) to track the progress of the world-wild-web.



## Create your own 3D Web App (why not?)

1) Clone me - I'm as free as MIT! And look, PWA is <i>much easier</i> than every last App Store out there.

2) Set up [Web Server for Chrome](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#install_and_verify_web_server)), (details below).

3) Flip > that "Start Server" button. Click > that blue Localhost Link, and like toast, that App pops up in your browser.

4) Then "Install", that bad app, with a Tap > on that (custom) "Add to Homescreen" button.

5) And Zip! Your Progressive Web App is reborn in NATIVE CONTEXT. <i>Isn't it nifty?</i> 

<img src="curio/curio2.png" width="350" border="3" style="border-radius: 10px;">

- [6) Use BabylonJS to add your own snazz](https://doc.babylonjs.com/) (whatever that may be).

<img src="curio/curio5.png" width="350" border="3" style="border-radius: 10px;">

<i>Wasn't that easy?</i>



## Run that app

In DevTools, Right Click > and Inspect Elements. Refresh > and check those cached files in the console log! It caches the skybox, 3D assets, audio and the App Shell separately!?! Not to mention the Runtime Database hanging out in LocalStorage. We can render dynamic content and run Offline like a Golden Retriever off leash. After a Click > on that "Add to Homescreen" button (or "Install" under Chrome settings) you get a silky smooth loading screen. How nice. Thank you BabylonJS! And be on look out for other hidden gizmos like: hidden URL, SSL info, and screen orientation support. Zing! Jump back to your desktop/homescreen to find your App! Also, it seems to pops up anywhere native apps do. Thank you Microsoft!

NOTES: To uninstall PWA, Click > Apps button in Chrome. Then Right Click > Remove (also in app header). 

PWAs are multi-dimensional... welcome to the world-wild-web! Details below.



## Chrome Web Server

All aboard! The Chrome Web Server is awesome and it's leaving the station. Here's an info-drop to get going. TAKEAWAY: there is finally a simple Dev Server that is quick, reliable, and unobstrusive. Thanks Google. While, it's a tad simple compared to what the old-schoolers are used to -  it is fast and easy. So love it.

<pre>
TIP: point to 'public' folder or all your Cache-paths go 404!
</pre>

Also, we use separate Cache-paths between Dev and Prod. And look there in that console log for messaging on <i>exactly what is happenin'</i>. 

<img src="curio/curio4.png" width="350" border="3" style="border-radius: 10px;">



## App Shell (Template)

PWAs have a DESIGN PATTERN called "App Shell" and it is really clever. App Shell separates content from the "Shell" which is the App. <i>Neato?</i> We do that so we can cache shell and content separately. Because this enables <i>episodic content</i> downloads, at an ongoing (progressive) basis while the App Shell sits static, as happy as a clam. Zing! So that is a little bit about this App Shell Template. 

Later, we look at how to extend the "Content Stream" with LocalStorage in beautiful JSON medium, and how to Push Notify version updates to reload the App Shell - in successive gits to keep this one small.



## Service Workers

Service Workers appear widely supported across browsers once [implemented by Safari in 2018][compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker#Browser_compatibility). At time of writing, <i>"This is experimental technology"</i> <- gotta love that!

<pre>
TIPS: look under DevTools > Application, > Network, and > Audit tabs - for PWA insights. Also, Splat that > "Clear Cache" button, and Check Box > Application > Service Worker > "Update on reload." Not to mention, Check > Network > 'Offline' Mode - to watch it fly! Be free little bird.
</pre>


## "Add to Homescreen" (Web App Manifest)

"Homescreen" is the COOL new web-ability gifted to us by browsers and the "Web App Manifest". Thank you [W3C](https://www.w3.org/TR/appmanifest/)! But, <i>why the slow support for simple manifest.JSON file?</i> It suggests "manifest.webmanifest", over manifest.json, really? Anyway. Using magic no doubt, Microsoft adds Apps to the Desktop and that is rad! Making "Homescreen" the desktop of all platforms.

NOTE: need a [<i>custom</i> "Add to Homescreen"](https://paul.kinlan.me/new-in-chrome-68webgoogle-developers/) button on any website? Check out the Vanilla-Component in the index. Yes, it is possible to make "components" with pure HTML, CSS, and JavaScript. It is even performant, just not widely known. Fortunately, [many doors open here](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Installable_PWAs). Thank you Mozilla! 

TIP: here is the best resource for [PWA "A2HS"](https://developers.google.com/web/fundamentals/app-install-banners/). 



## Structure

```
├── README.md
├── MIT-LICENSE
├── curio (app curation)
└── public
    ├── 3d (mesh)
    │   └── assets
    │   └── ...
    ├── img
    │   └── logos (separate from icons)
    │   └── ...
    ├── lib
    │   └── jquery (2D)
    │   └── babylon (3D)
    │   └── materialize (CSS)
    │   └── ...
    ├── sonic
    │   └── ... (AUDIO)
    ├── app.js
    ├── index.html
    ├── manifest.json
    └── sw.js (SERVICE-WORKER)
```

<i>That's it!</i>



## Performance Optimizations

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is a tool for scoring PWA capabilities. Run it in DevTools on the > Audit tab. Multiple performance optimization was made to this template, as a result, and more are needed. Please PR.

One major optimization is for example is: GZIP your server - always. 2) it is <i>really good</i> to Click > DevTools > Performance > 'backwards looking refresh icon'. Because it refreshes and profiles the PWA. <i>Including Animations?</i> Awesome! And 3) if we look closely into that pretty sequence of meta-data-strata, we can find the layer where the dinosaurs go extinct, which helps out with Lighthouse. Shazam! And that is why a skull was inserted into this BabylonJS Asset Manager. Get the metaphore? Ok it is all terrible. Th point is, we use the skull mesh to emulate complex matrix integrations. Thank you DK. 

UPDATE: We removed the skull mesh to watch performance blaze!  

NOTE: be on lookout for RunTime-SceneSequenced-3DLazyLoaders. The concept is to delay load multiple scenes, and then cache all the assets. Then sequence them together later at run-time. Please ping us (below) if you see anything like that? Otherwise we will be building it here. The perspective of the "Content Stream" is for scenes to be dynamically replaced on canvas, from Service Worker, to and from a paywall, and then also from Cache. Ideas or PR's? Sounds amazing! That is another git.

<img src="curio/curio6.png" width="80%" border="3" style="border-radius: 10px;">
The BabylonJS Asset Manager loading experience is excellent. Thanks BabylonJS HTML5Devs! Splashscreen is a happy thing.



## Libs

- [BabylonJS](https://www.babylonjs.com/) Not grandpa's 3D Web rendering library, shhh, it's leading-edge.
- [JQuery](https://jquery.com/) get hybrid 2D on 3D. Like vegetables, it's good for you! Because of service worker shell cache 2DOverlay is aok.
- [Materialize](http://materializecss.com/). CSS boilerplate (optional). 



## Examples over on anmscape.com

Hosted by heroku:
- AppShellTempl8 : free MIT
- BOXiGON : play free!
- Surfmoon : Technical DEMO



## Resources

- [PWA - Your First Progressive Web App - Google Developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)
- [PWA in an hour - freeCodeCamp](https://medium.freecodecamp.org/how-you-can-make-a-progressive-web-app-in-an-hour-7e36d560610e)
- [PWA Structure - tutorial](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/App_structure)
- [PWA Examples - js13kpwa](https://github.com/mdn/pwa-examples)
- [PWA Add to Homescreen](https://developers.google.com/web/fundamentals/app-install-banners/)
- [PWA - Wikipedia](https://en.wikipedia.org/wiki/Progressive_web_applications)
- chrome://inspect/#service-workers
- chrome://apps



## PWA Paywall?

Check out [itch.io](https://itch.io/docs/creators/html5) and [LeadBolt](https://www.leadbolt.com/) first. You'll be glad you did!

QUESTION: <i>What is the best PWA Paywall?</i> ANSWER: we don't know!

STATUS: working on itch.io docs and support to integrate [many](https://itch.io/developers) [options](https://itch.io/docs/api/overview) like [embeds](https://itch.io/docs/creators/widget) or [JWT with Node](https://itch.io/docs/api/serverside)? For paywall or subscriptions or interstitial or something. Overall, integration options are still to be determined and a topic for yet another git. Stay tuned!

NOTE: integration for LeadBolt ADS, as interstitial, "Brought to you by" overlay, is another experience improvement for HTML5 3D-PWA users.

<i>Welcome to the world-wild-web</i>.



## Contact (DM)

boxigon
anmscape
afalcon



## 3D-PWA-AppShell-Templ8?

All in! :) 

