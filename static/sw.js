importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/167fdc30ad7c411f5932.js",
    "revision": "3fb1444ed9cb411901f8ad2492214d10"
  },
  {
    "url": "/_nuxt/216e96fe25cd2e50cff7.js",
    "revision": "6732fdc8a4c74cd9ac63aca39344ccc5"
  },
  {
    "url": "/_nuxt/2237f6dfb07b065ec285.js",
    "revision": "9b559e2c53e55f912ffa9766654fb451"
  },
  {
    "url": "/_nuxt/227e50a0db1351a6050c.js",
    "revision": "8962670a2b2030ad6f1a82c3dce6d640"
  },
  {
    "url": "/_nuxt/30b3040c2b0a5d374dd9.js",
    "revision": "809d33ef769f14ab8995939142523947"
  },
  {
    "url": "/_nuxt/4f8cd327ad3cb7a63044.js",
    "revision": "63fe2394bb7889c2c7ce936463d9aebd"
  },
  {
    "url": "/_nuxt/5014759ea1957bb51402.js",
    "revision": "40ad2b6fb67b1c247cff92526826ae8e"
  },
  {
    "url": "/_nuxt/54696e6aff3628ad34bb.js",
    "revision": "46d93787b2c54de537c8f1f599c9f2be"
  },
  {
    "url": "/_nuxt/572baeda4229a600f723.js",
    "revision": "3e82727c65ae8d76e1387dccb4c1e3f6"
  },
  {
    "url": "/_nuxt/574a0863d66b4494f18d.js",
    "revision": "89aee7d8033eee90bb66abd518a66629"
  },
  {
    "url": "/_nuxt/5e73d508218b6d434317.js",
    "revision": "19b5540518f863e5639d19cb06440ef5"
  },
  {
    "url": "/_nuxt/7799e043decbfbc7e331.js",
    "revision": "f57142abee93814412802287226c9c60"
  },
  {
    "url": "/_nuxt/80fd47bff3dff01068c7.js",
    "revision": "2297b824f7ae89f04245c2263307c7da"
  },
  {
    "url": "/_nuxt/8e894147ea6862a91cb4.js",
    "revision": "f8410b47d9d58feb532171d4cd7835e5"
  },
  {
    "url": "/_nuxt/b99d6dfda249711ad38e.js",
    "revision": "f1986bdefac0c5ef861a7bfd231dc36a"
  },
  {
    "url": "/_nuxt/d1669352eb3eabc6d136.js",
    "revision": "48be3865fa111028dd81feca8fc6b2b6"
  },
  {
    "url": "/_nuxt/d6203f3d9745ea26d585.js",
    "revision": "4f3c56e7dc1789b989e121683dcbacf1"
  },
  {
    "url": "/_nuxt/dbe24a54b03f7a98fd23.js",
    "revision": "86c78dfacbce943069efaa34a0081681"
  },
  {
    "url": "/_nuxt/df8b3df29a8bfe7cc553.js",
    "revision": "7ad8d3e389e22a9bf25a82af2a6d2dae"
  },
  {
    "url": "/_nuxt/e98249f63c05c96b267a.js",
    "revision": "773d86842492c0c007bbac55e8790aa0"
  },
  {
    "url": "/_nuxt/ed72de4f4507ff04734b.js",
    "revision": "1729713bc8668d30c0a2267cf9f8167e"
  },
  {
    "url": "/_nuxt/f8d1e4e6f2361f84ac5e.js",
    "revision": "f1f565db3d6ce99e1d05a0fb88255f27"
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
