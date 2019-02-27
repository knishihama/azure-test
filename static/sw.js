importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/72a0adbee642fcd8d9b5.js",
    "revision": "e65f652ee7f383cd46e3a1ae48ccd233"
  },
  {
    "url": "/_nuxt/7f062c2797e138844ce5.js",
    "revision": "109cf128c92beb93e5d84ed8303380c0"
  },
  {
    "url": "/_nuxt/9cfdf80f5dbc7a975b34.js",
    "revision": "017d9d43879d83c3d7835ee0b0dc44dd"
  },
  {
    "url": "/_nuxt/b1589a76a6990cdbb9b5.js",
    "revision": "dc5cd5065c92355ca4926656270a3293"
  },
  {
    "url": "/_nuxt/cd80b56cbdbf72e1a71a.js",
    "revision": "fdcdef83042d0fba126f73413a94cc5e"
  }
], {
  "cacheId": "nuxt-community-typescript",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
