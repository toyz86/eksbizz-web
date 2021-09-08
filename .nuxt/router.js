import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _222e291d = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _478950c2 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _263199b7 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _51c52a30 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _33898d50 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _68948c4d = () => interopDefault(import('../pages/portfolio-details.vue' /* webpackChunkName: "pages/portfolio-details" */))
const _41e603e2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _222e291d,
    name: "about"
  }, {
    path: "/blog",
    component: _478950c2,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _263199b7,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _51c52a30,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _33898d50,
    name: "portfolio"
  }, {
    path: "/portfolio-details",
    component: _68948c4d,
    name: "portfolio-details"
  }, {
    path: "/",
    component: _41e603e2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
