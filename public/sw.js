if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,a,i)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+n.slice(1)};return Promise.all(a.map((n=>{switch(n){case"exports":return s;case"module":return r;default:return e(n)}}))).then((e=>{const n=i(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PGumiKxbtajmwndA2PP8x/_buildManifest.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/PGumiKxbtajmwndA2PP8x/_ssgManifest.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/173-30f14bf44eb77748c053.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/36bcf0ca-4dfb05098673d55b66ce.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/framework-92300432a1172ef1338b.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/main-76f96b429e2fb5b38a00.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/pages/_app-d81d343b48e20a911370.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/pages/_error-a0e21b9b223f827fe1f2.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/pages/index-83d8250cd6abc9751a81.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/chunks/webpack-20d43e08bea62467b090.js",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/css/06bd117f7d91914220bd.css",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/css/512e1a0b2b1287b96ab4.css",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/_next/static/image/public/logo.c7a13366fe3cbffc4e96a7bd4bcc82fb.png",revision:"PGumiKxbtajmwndA2PP8x"},{url:"/apple-touch-icon.png",revision:"bd6035294ccdafe0f3ab92b9ea87a1a9"},{url:"/favicon.ico",revision:"543c5c4f40f5d359f5576555658caca3"},{url:"/icon-144x144.png",revision:"7d750fcd974e2c05cae168ab49aced07"},{url:"/icon-16x16.png",revision:"3c347e6f2a58f4e3d5321fb34c1ad6a9"},{url:"/icon-192x192.png",revision:"aceb8b2574fa2ff8a91e1553c3dfa4dc"},{url:"/icon-256x256.png",revision:"4df34a54a08d7f82fee5dda077243472"},{url:"/icon-32x32.png",revision:"c61b01ed46661e0afed33918d9f540a3"},{url:"/icon-36x36.png",revision:"1700e83d0439d5c531570c3d429a768d"},{url:"/icon-384x384.png",revision:"bc9a54f1105ca98164339689ad21bcc9"},{url:"/icon-48x48.png",revision:"d6faeaa02742d5aed687db0e6669866e"},{url:"/icon-512x512.png",revision:"43122aefb9727e4b0eee780886b12235"},{url:"/icon-72x72.png",revision:"f4cda107f60855b3532365f99ff7543b"},{url:"/icon-96x96.png",revision:"8fe300065bdaacda538b8fdd502582ca"},{url:"/logo.png",revision:"d32ab3b98a6df8a288a12c4092e33e97"},{url:"/logo.svg",revision:"b0aae983e73a6d3b2298e7c2c7f2df2d"},{url:"/manifest.json",revision:"b925aedabebb45030ab3179e125dc82e"},{url:"/oglogo.png",revision:"9015b7b4efcac98f75d59f7a1dd6d910"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
