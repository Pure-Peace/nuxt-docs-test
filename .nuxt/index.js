import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../node_modules/@docus/app/dist/app/layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_2f40fc0d from 'nuxt_plugin_plugin_2f40fc0d' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_769495f8 from 'nuxt_plugin_pluginutils_769495f8' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_4c70f57a from 'nuxt_plugin_pluginrouting_4c70f57a' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_a05bb5e8 from 'nuxt_plugin_pluginmain_a05bb5e8' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_i18n_4d2fcc3e from 'nuxt_plugin_i18n_4d2fcc3e' // Source: ./docus/i18n.js (mode: 'all')
import nuxt_plugin_plugin_f1ad1196 from 'nuxt_plugin_plugin_f1ad1196' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_pluginserver_35603a8e from 'nuxt_plugin_pluginserver_35603a8e' // Source: ./color-mode/plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_7f967131 from 'nuxt_plugin_pluginclient_7f967131' // Source: ./color-mode/plugin.client.js (mode: 'client')
import nuxt_plugin_vueplausibleclient_6f337dca from 'nuxt_plugin_vueplausibleclient_6f337dca' // Source: ./vue-plausible.client.js (mode: 'client')
import nuxt_plugin_index_3e5d0360 from 'nuxt_plugin_index_3e5d0360' // Source: ./docus/index.js (mode: 'all')
import nuxt_plugin_core_7cc41b1d from 'nuxt_plugin_core_7cc41b1d' // Source: ./docus/core.js (mode: 'all')
import nuxt_plugin_image_d73be0c4 from 'nuxt_plugin_image_d73be0c4' // Source: ./image.js (mode: 'all')
import nuxt_plugin_workbox_40b16aff from 'nuxt_plugin_workbox_40b16aff' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_71a979dc from 'nuxt_plugin_metaplugin_71a979dc' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_685a2ef4 from 'nuxt_plugin_iconplugin_685a2ef4' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_menu_dffabbce from 'nuxt_plugin_menu_dffabbce' // Source: ../node_modules/@docus/theme/dist/plugins/menu (mode: 'all')
import nuxt_plugin_mq_5d03b8cc from 'nuxt_plugin_mq_5d03b8cc' // Source: ../plugins/mq (mode: 'all')
import nuxt_plugin_meta_d800c8f2 from 'nuxt_plugin_meta_d800c8f2' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"link":[{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Inter:wght@400;500;600;700;800&display=swap"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&display=swap"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com"}],"bodyAttrs":{"class":["d-body-bg d-body-text-color text-root min-w-base antialiased tracking-semitight d-scrollbar","min-w-xs"]},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"og:site_name","property":"og:site_name","content":"Nuxt 3"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"twitter:site","name":"twitter:site","content":"@nuxt_js"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fimage\u002Fupload\u002Fv1633987983\u002Fnuxt3-preview_rhh50t.png"},{"hid":"og:image:secure_url","property":"og:image:secure_url","content":"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fimage\u002Fupload\u002Fv1633987983\u002Fnuxt3-preview_rhh50t.png"},{"hid":"og:image:alt","property":"og:image:alt","content":"Nuxt 3"},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fimage\u002Fupload\u002Fv1633987983\u002Fnuxt3-preview_rhh50t.png"},{"hid":"og:video","name":"og:video","content":"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1634114611\u002Fnuxt3-beta_sznsf8.mp4"}],"titleTemplate":"Nuxt 3 - %s","style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_2f40fc0d === 'function') {
    await nuxt_plugin_plugin_2f40fc0d(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_769495f8 === 'function') {
    await nuxt_plugin_pluginutils_769495f8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_4c70f57a === 'function') {
    await nuxt_plugin_pluginrouting_4c70f57a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_a05bb5e8 === 'function') {
    await nuxt_plugin_pluginmain_a05bb5e8(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_4d2fcc3e === 'function') {
    await nuxt_plugin_i18n_4d2fcc3e(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_f1ad1196 === 'function') {
    await nuxt_plugin_plugin_f1ad1196(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_35603a8e === 'function') {
    await nuxt_plugin_pluginserver_35603a8e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_7f967131 === 'function') {
    await nuxt_plugin_pluginclient_7f967131(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueplausibleclient_6f337dca === 'function') {
    await nuxt_plugin_vueplausibleclient_6f337dca(app.context, inject)
  }

  if (typeof nuxt_plugin_index_3e5d0360 === 'function') {
    await nuxt_plugin_index_3e5d0360(app.context, inject)
  }

  if (typeof nuxt_plugin_core_7cc41b1d === 'function') {
    await nuxt_plugin_core_7cc41b1d(app.context, inject)
  }

  if (typeof nuxt_plugin_image_d73be0c4 === 'function') {
    await nuxt_plugin_image_d73be0c4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_40b16aff === 'function') {
    await nuxt_plugin_workbox_40b16aff(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_71a979dc === 'function') {
    await nuxt_plugin_metaplugin_71a979dc(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_685a2ef4 === 'function') {
    await nuxt_plugin_iconplugin_685a2ef4(app.context, inject)
  }

  if (typeof nuxt_plugin_menu_dffabbce === 'function') {
    await nuxt_plugin_menu_dffabbce(app.context, inject)
  }

  if (typeof nuxt_plugin_mq_5d03b8cc === 'function') {
    await nuxt_plugin_mq_5d03b8cc(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_d800c8f2 === 'function') {
    await nuxt_plugin_meta_d800c8f2(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
