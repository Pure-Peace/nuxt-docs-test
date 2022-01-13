import { withoutTrailingSlash, joinURL } from 'ufo'
import { $fetch } from 'ohmyfetch';
import Query from '~docus-core/database/providers/lokijs/Query';
/*  */ import { useWebSocket } from '~docus-core/composables/websocket' /*  */

const createQuery = (options) => (path, opts) => {
  const to = typeof path === 'string' ? path : ''
  const params = (typeof path === 'object' ? path : opts) || {}
  return new Query(to, { ...params, ...options })
}

/**
 * This helper function is used to create api in @docus/app
 **/
export function getContent(ctx) {
  const { docusDbHash } = ctx.$config ? ctx.$config : ctx.nuxtState
  const getFetchUrl = (key) => {
    /*  */return joinURL('/', '_docus', 'get', key)/*  */
  }

  const get = (key) => $fetch(getFetchUrl(key))

  const search = createQuery({
    /*  */base: withoutTrailingSlash(joinURL('/', '_docus', 'search')), /*  */
  })

  return {
    search: process.server ? ctx.ssrContext.docus.content.search : search,
    get: process.server ? ctx.ssrContext.docus.content.get : get,
  }
}

/**
 * This is the main entry point for the plugin.
 **/
export default async function (ctx, inject) {
  inject('content', getContent(ctx))
  /*  */
  if (process.client) { useWebSocket('_docus').connect() }/*  */
}
