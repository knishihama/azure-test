import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _00ed627e = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _23fd0b42 = () => interopDefault(import('..\\pages\\artists\\index.vue' /* webpackChunkName: "pages_artists_index" */))
const _73c0c040 = () => interopDefault(import('..\\pages\\bounties\\index.vue' /* webpackChunkName: "pages_bounties_index" */))
const _b0625bb6 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages_products_index" */))
const _116a96d4 = () => interopDefault(import('..\\pages\\rules\\index.vue' /* webpackChunkName: "pages_rules_index" */))
const _3350c18b = () => interopDefault(import('..\\pages\\tradelaw\\index.vue' /* webpackChunkName: "pages_tradelaw_index" */))
const _42d364f2 = () => interopDefault(import('..\\pages\\account\\my\\index.vue' /* webpackChunkName: "pages_account_my_index" */))
const _2e712c06 = () => interopDefault(import('..\\pages\\account\\signup\\index.vue' /* webpackChunkName: "pages_account_signup_index" */))
const _46f1b821 = () => interopDefault(import('..\\pages\\account\\my\\artist_profile\\index.vue' /* webpackChunkName: "pages_account_my_artist_profile_index" */))
const _8bac956e = () => interopDefault(import('..\\pages\\account\\my\\bounties\\index.vue' /* webpackChunkName: "pages_account_my_bounties_index" */))
const _c84e30e4 = () => interopDefault(import('..\\pages\\account\\my\\products\\index.vue' /* webpackChunkName: "pages_account_my_products_index" */))
const _39c22019 = () => interopDefault(import('..\\pages\\account\\my\\profile\\index.vue' /* webpackChunkName: "pages_account_my_profile_index" */))
const _e33a2b08 = () => interopDefault(import('..\\pages\\account\\my\\books\\create\\index.vue' /* webpackChunkName: "pages_account_my_books_create_index" */))
const _0ba4dcdc = () => interopDefault(import('..\\pages\\account\\my\\products\\create\\index.vue' /* webpackChunkName: "pages_account_my_products_create_index" */))
const _3bceeef2 = () => interopDefault(import('..\\pages\\artists\\_id.vue' /* webpackChunkName: "pages_artists__id" */))
const _0a57cb70 = () => interopDefault(import('..\\pages\\bounties\\_id.vue' /* webpackChunkName: "pages_bounties__id" */))
const _d675cc66 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages_products__id" */))
const _1c7a5049 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _00ed627e,
      name: "about"
    }, {
      path: "/artists",
      component: _23fd0b42,
      name: "artists"
    }, {
      path: "/bounties",
      component: _73c0c040,
      name: "bounties"
    }, {
      path: "/products",
      component: _b0625bb6,
      name: "products"
    }, {
      path: "/rules",
      component: _116a96d4,
      name: "rules"
    }, {
      path: "/tradelaw",
      component: _3350c18b,
      name: "tradelaw"
    }, {
      path: "/account/my",
      component: _42d364f2,
      name: "account-my"
    }, {
      path: "/account/signup",
      component: _2e712c06,
      name: "account-signup"
    }, {
      path: "/account/my/artist_profile",
      component: _46f1b821,
      name: "account-my-artist_profile"
    }, {
      path: "/account/my/bounties",
      component: _8bac956e,
      name: "account-my-bounties"
    }, {
      path: "/account/my/products",
      component: _c84e30e4,
      name: "account-my-products"
    }, {
      path: "/account/my/profile",
      component: _39c22019,
      name: "account-my-profile"
    }, {
      path: "/account/my/books/create",
      component: _e33a2b08,
      name: "account-my-books-create"
    }, {
      path: "/account/my/products/create",
      component: _0ba4dcdc,
      name: "account-my-products-create"
    }, {
      path: "/artists/:id",
      component: _3bceeef2,
      name: "artists-id"
    }, {
      path: "/bounties/:id",
      component: _0a57cb70,
      name: "bounties-id"
    }, {
      path: "/products/:id",
      component: _d675cc66,
      name: "products-id"
    }, {
      path: "/",
      component: _1c7a5049,
      name: "index"
    }],

    fallback: false
  })
}
