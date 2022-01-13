"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var Vue$1 = require("vue");
var fetch$1 = require("node-fetch");
var CompositionApi = require("@vue/composition-api");
var VueMeta = require("vue-meta");
var ClientOnly = require("vue-client-only");
var NoSsr = require("vue-no-ssr");
var Router = require("vue-router");
var scule = require("scule");
var VueMq = require("vue-mq");
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
}
function _interopNamespace(e2) {
  if (e2 && e2.__esModule)
    return e2;
  var n3 = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e2) {
    Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default") {
        var d3 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n3, k2, d3.get ? d3 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  }
  n3["default"] = e2;
  return Object.freeze(n3);
}
function _mergeNamespaces(n3, m2) {
  m2.forEach(function(e2) {
    Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default" && !(k2 in n3)) {
        var d3 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n3, k2, d3.get ? d3 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  });
  return Object.freeze(n3);
}
var Vue__default = /* @__PURE__ */ _interopDefaultLegacy(Vue$1);
var fetch__default = /* @__PURE__ */ _interopDefaultLegacy(fetch$1);
var CompositionApi__default = /* @__PURE__ */ _interopDefaultLegacy(CompositionApi);
var VueMeta__default = /* @__PURE__ */ _interopDefaultLegacy(VueMeta);
var ClientOnly__default = /* @__PURE__ */ _interopDefaultLegacy(ClientOnly);
var NoSsr__default = /* @__PURE__ */ _interopDefaultLegacy(NoSsr);
var Router__default = /* @__PURE__ */ _interopDefaultLegacy(Router);
var VueMq__default = /* @__PURE__ */ _interopDefaultLegacy(VueMq);
const n$1 = /[^\0-\x7E]/;
const t$2 = /[\x2E\u3002\uFF0E\uFF61]/g;
const o$1 = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e$1 = Math.floor;
const r$1 = String.fromCharCode;
function s$1(n22) {
  throw new RangeError(o$1[n22]);
}
const c$1 = function(n22, t22) {
  return n22 + 22 + 75 * (n22 < 26) - ((t22 != 0) << 5);
};
const u$1 = function(n22, t22, o2) {
  let r2 = 0;
  for (n22 = o2 ? e$1(n22 / 700) : n22 >> 1, n22 += e$1(n22 / t22); n22 > 455; r2 += 36) {
    n22 = e$1(n22 / 35);
  }
  return e$1(r2 + 36 * n22 / (n22 + 38));
};
function toASCII(o2) {
  return function(n22, o3) {
    const e2 = n22.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n22 = e2[1]);
    const s2 = function(n3, t22) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t22(n3[e3]);
      }
      return o4;
    }((n22 = n22.replace(t$2, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t22) {
    return n$1.test(t22) ? "xn--" + function(n22) {
      const t3 = [];
      const o3 = (n22 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n22)).length;
      let f2 = 128;
      let i3 = 0;
      let l2 = 72;
      for (const o4 of n22) {
        o4 < 128 && t3.push(r$1(o4));
      }
      const h2 = t3.length;
      let p2 = h2;
      for (h2 && t3.push("-"); p2 < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n22) {
          t4 >= f2 && t4 < o4 && (o4 = t4);
        }
        const a2 = p2 + 1;
        o4 - f2 > e$1((2147483647 - i3) / a2) && s$1("overflow"), i3 += (o4 - f2) * a2, f2 = o4;
        for (const o5 of n22) {
          if (o5 < f2 && ++i3 > 2147483647 && s$1("overflow"), o5 == f2) {
            let n3 = i3;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l2 ? 1 : o6 >= l2 + 26 ? 26 : o6 - l2;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f22 = 36 - s2;
              t3.push(r$1(c$1(s2 + u2 % f22, 0))), n3 = e$1(u2 / f22);
            }
            t3.push(r$1(c$1(n3, 0))), l2 = u$1(i3, a2, p2 == h2), i3 = 0, ++p2;
          }
        }
        ++i3, ++f2;
      }
      return t3.join("");
    }(t22) : t22;
  });
}
const HASH_RE$1 = /#/g;
const AMPERSAND_RE$1 = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE$1 = /=/g;
const IM_RE = /\?/g;
const PLUS_RE$1 = /\+/g;
const ENC_BRACKET_OPEN_RE$1 = /%5B/gi;
const ENC_BRACKET_CLOSE_RE$1 = /%5D/gi;
const ENC_CARET_RE$1 = /%5E/gi;
const ENC_BACKTICK_RE$1 = /%60/gi;
const ENC_CURLY_OPEN_RE$1 = /%7B/gi;
const ENC_PIPE_RE$1 = /%7C/gi;
const ENC_CURLY_CLOSE_RE$1 = /%7D/gi;
const ENC_SPACE_RE$1 = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode$2(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE$1, "|").replace(ENC_BRACKET_OPEN_RE$1, "[").replace(ENC_BRACKET_CLOSE_RE$1, "]");
}
function encodeHash(text) {
  return encode$2(text).replace(ENC_CURLY_OPEN_RE$1, "{").replace(ENC_CURLY_CLOSE_RE$1, "}").replace(ENC_CARET_RE$1, "^");
}
function encodeQueryValue$1(text) {
  return encode$2(text).replace(PLUS_RE$1, "%2B").replace(ENC_SPACE_RE$1, "+").replace(HASH_RE$1, "%23").replace(AMPERSAND_RE$1, "%26").replace(ENC_BACKTICK_RE$1, "`").replace(ENC_CURLY_OPEN_RE$1, "{").replace(ENC_CURLY_CLOSE_RE$1, "}").replace(ENC_CARET_RE$1, "^");
}
function encodeQueryKey$1(text) {
  return encodeQueryValue$1(text).replace(EQUAL_RE$1, "%3D");
}
function encodePath(text) {
  return encode$2(text).replace(HASH_RE$1, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE$1, "%26").replace(PLUS_RE$1, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode$2(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$2(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue$1(text) {
  return decode$2(text.replace(PLUS_RE$1, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}
function parseQuery$1(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s2 = param.match(/([^=]+)=?(.*)/) || [];
    if (s2.length < 2) {
      continue;
    }
    const key = decode$2(s2[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue$1(s2[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem$1(key, val) {
  if (!val) {
    return encodeQueryKey$1(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey$1(key)}=${encodeQueryValue$1(_val)}`).join("&");
  }
  return `${encodeQueryKey$1(key)}=${encodeQueryValue$1(val)}`;
}
function stringifyQuery$1(query) {
  return Object.keys(query).map((k2) => encodeQueryItem$1(k2, query[k2])).join("&");
}
class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL$1(input);
    this.protocol = decode$2(parsed.protocol);
    this.host = decode$2(parsed.host);
    this.auth = decode$2(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery$1(parsed.search);
    this.hash = decode$2(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q2 = stringifyQuery$1(this.query);
    return q2.length ? "?" + q2 : "";
  }
  get searchParams() {
    const p2 = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v2) => p2.append(name, v2));
      } else {
        p2.append(name, value || "");
      }
    }
    return p2;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url2) {
    if (url2.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url2.query);
    if (url2.pathname) {
      this.pathname = withTrailingSlash$1(this.pathname) + withoutLeadingSlash$1(url2.pathname);
    }
    if (url2.hash) {
      this.hash = url2.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}
function hasProtocol$1(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s2] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s2.length ? `?${s2.join("?")}` : "");
}
function withTrailingSlash$1(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s2] = input.split("?");
  return s0 + "/" + (s2.length ? `?${s2.join("?")}` : "");
}
function hasLeadingSlash$1(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash$1(input = "") {
  return (hasLeadingSlash$1(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash$1(input) ? input : "/" + input;
}
function withQuery$1(input, query) {
  const parsed = parseURL$1(input);
  const mergedQuery = __spreadValues(__spreadValues({}, parseQuery$1(parsed.search)), query);
  parsed.search = stringifyQuery$1(mergedQuery);
  return stringifyParsedURL$1(parsed);
}
function isNonEmptyURL$1(url2) {
  return url2 && url2 !== "/";
}
function joinURL$1(base, ...input) {
  let url2 = base || "";
  for (const i3 of input.filter(isNonEmptyURL$1)) {
    url2 = url2 ? withTrailingSlash$1(url2) + withoutLeadingSlash$1(i3) : i3;
  }
  return url2;
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function parseURL$1(input = "", defaultProto) {
  if (!hasProtocol$1(input, true)) {
    return defaultProto ? parseURL$1(defaultProto + input) : parsePath$1(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath$1(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath$1(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode$2(username),
    password: decode$2(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode$2(hostname),
    port
  };
}
function stringifyParsedURL$1(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}
Vue__default["default"].use(CompositionApi__default["default"]);
const middleware = {};
function createGetCounter$1(counterObject, defaultKey = "") {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === void 0) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function globalHandleError(error2) {
  if (Vue__default["default"].config.errorHandler) {
    Vue__default["default"].config.errorHandler(error2);
  }
}
function interopDefault(promise) {
  return promise.then((m2) => m2.default || m2);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === "function" && !vm.$options.fetch.length;
}
function purifyData(data2) {
  return Object.entries(data2).filter(([key, value]) => {
    const valid2 = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid2) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid2;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue;
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (!asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function() {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function() {
    const data2 = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return __spreadValues(__spreadValues({}, data2), asyncData);
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = Vue__default["default"].extend(Component);
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = "components") {
  return Array.prototype.concat.apply([], route.matched.map((m2, index2) => {
    return Object.keys(m2[prop]).map((key) => {
      matches && matches.push(index2);
      return m2[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, "instances");
}
function flatMapComponents(route, fn2) {
  return Array.prototype.concat.apply([], route.matched.map((m2, index2) => {
    return Object.keys(m2.components).reduce((promises, key) => {
      if (m2.components[key]) {
        promises.push(fn2(m2.components[key], m2.instances[key], m2, key, index2));
      } else {
        delete m2.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn2) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    if (typeof Component === "function" && !Component.options) {
      try {
        Component = await Component();
      } catch (error2) {
        if (error2 && error2.name === "ChunkLoadError" && false) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem("nuxt-reload"));
          if (!previousReloadTime || previousReloadTime + 6e4 < timeNow) {
            window.sessionStorage.setItem("nuxt-reload", timeNow);
            window.location.reload(true);
          }
        }
        throw error2;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn2 === "function" ? fn2(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  await resolveRouteComponents(route);
  return __spreadProps(__spreadValues({}, route), {
    meta: getMatchedComponents(route).map((Component, index2) => {
      return __spreadValues(__spreadValues({}, Component.options.meta), (route.matched[index2] || {}).meta);
    })
  });
}
async function setContext(app, context) {
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: true,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      let pathType = typeof path;
      if (typeof status !== "number" && (pathType === "undefined" || pathType === "object")) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === "object") {
        path = app.router.resolve(path).route.fullPath;
      }
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = withQuery$1(path, query);
        {
          app.context.next({
            path,
            status
          });
        }
      }
    };
    {
      app.context.beforeNuxtRender = (fn2) => context.beforeRenderFns.push(fn2);
      app.context.beforeSerialize = (fn2) => context.beforeSerializeFns.push(fn2);
    }
  }
  const [currentRouteData, fromRouteData] = await Promise.all([
    getRouteData(context.route),
    getRouteData(context.from)
  ]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = Boolean(context.isHMR);
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn2, context) {
  let promise;
  if (fn2.length === 2) {
    console.warn("Callback-based asyncData, fetch or middleware calls are deprecated. Please switch to promises or async/await syntax");
    promise = new Promise((resolve) => {
      fn2(context, function(err, data2) {
        if (err) {
          context.error(err);
        }
        data2 = data2 || {};
        resolve(data2);
      });
    });
  } else {
    promise = fn2(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === "function") {
    return promise;
  }
  return Promise.resolve(promise);
}
function getLocation(base, mode) {
  if (mode === "hash") {
    return window.location.hash.replace(/^#\//, "");
  }
  base = decodeURI(base).slice(0, -1);
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || "/") + window.location.search + window.location.hash;
  return normalizeURL(fullPath);
}
function compile$1(str, options2) {
  return tokensToFunction(parse$3(str, options2), options2);
}
function normalizeError$1(err) {
  let message;
  if (!(err.message || typeof err === "string")) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e2) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return __spreadProps(__spreadValues({}, err), {
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  });
}
const PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse$3(str, options2) {
  const tokens = [];
  let key = 0;
  let index2 = 0;
  let path = "";
  const defaultDelimiter = options2 && options2.delimiter || "/";
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m2 = res[0];
    const escaped2 = res[1];
    const offset = res.index;
    path += str.slice(index2, offset);
    index2 = offset + m2.length;
    if (escaped2) {
      path += escaped2[1];
      continue;
    }
    const next = str[index2];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];
    if (path) {
      tokens.push(path);
      path = "";
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === "+" || modifier === "*";
    const optional = modifier === "?" || modifier === "*";
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (index2 < str.length) {
    path += str.substr(index2);
  }
  if (path) {
    tokens.push(path);
  }
  return tokens;
}
function encodeURIComponentPretty(str, slashAllowed) {
  const re2 = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re2, (c2) => {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, "\\$1");
}
function tokensToFunction(tokens, options2) {
  const matches = new Array(tokens.length);
  for (let i3 = 0; i3 < tokens.length; i3++) {
    if (typeof tokens[i3] === "object") {
      matches[i3] = new RegExp("^(?:" + tokens[i3].pattern + ")$", flags(options2));
    }
  }
  return function(obj, opts) {
    let path = "";
    const data2 = obj || {};
    const options3 = opts || {};
    const encode2 = options3.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i3 = 0; i3 < tokens.length; i3++) {
      const token = tokens[i3];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      const value = data2[token.name || "pathMatch"];
      let segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j2 = 0; j2 < value.length; j2++) {
          segment = encode2(value[j2]);
          if (!matches[i3].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j2 === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode2(value);
      if (!matches[i3].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function flags(options2) {
  return options2 && options2.sensitive ? "" : "i";
}
function addLifecycleHook(vm, hook, fn2) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn2)) {
    vm.$options[hook].push(fn2);
  }
}
async function serverPrefetch$1() {
  if (!this._fetchOnServer) {
    return;
  }
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    {
      console.error("Error in fetch():", err);
    }
    this.$fetchState.error = normalizeError$1(err);
  }
  this.$fetchState.pending = false;
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters[""]++;
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs["data-fetch-key"] = this._fetchKey;
  if (this.$ssrContext.nuxt.fetch[this._fetchKey] !== void 0) {
    console.warn(`Duplicate fetch key detected (${this._fetchKey}). This may lead to unexpected results.`);
  }
  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? { _error: this.$fetchState.error } : purifyData(this._data);
}
var fetchMixin = {
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === "function") {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || "";
    const getCounter = createGetCounter$1(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === "function") {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = typeof this.$options.fetchKey === "string" ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ":" + getCounter(key) : String(getCounter(key));
    }
    this.$fetch = () => {
    };
    Vue__default["default"].util.defineReactive(this, "$fetchState", {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, "serverPrefetch", serverPrefetch$1);
  }
};
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const { options: options2 = {} } = Pages[0];
    return options2.scrollToTop !== false;
  }
  return Pages.some(({ options: options2 }) => options2 && options2.scrollToTop);
}
function scrollBehavior(to, from, savedPosition) {
  let position = false;
  const isRouteChanged = to !== from;
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = { x: 0, y: 0 };
  }
  const nuxt2 = window.$nuxt;
  if (!isRouteChanged || to.path === from.path && to.hash !== from.hash) {
    nuxt2.$nextTick(() => nuxt2.$emit("triggerScroll"));
  }
  return new Promise((resolve) => {
    nuxt2.$once("triggerScroll", () => {
      var _a;
      if (to.hash) {
        let hash = to.hash;
        if ("undefined".CSS !== "undefined" && "undefined".CSS.escape !== "undefined") {
          hash = "#" + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            position = { selector: hash };
            const y2 = Number((_a = getComputedStyle(el)["scroll-margin-top"]) == null ? void 0 : _a.replace("px", ""));
            if (y2) {
              position.offset = { y: y2 };
            }
          }
        } catch (e2) {
          console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).");
        }
      }
      resolve(position);
    });
  });
}
const _1e90a0ca = () => interopDefault(Promise.resolve().then(function() {
  return _$2;
}));
const emptyFn = () => {
};
Vue__default["default"].use(Router__default["default"]);
const routerOptions = {
  mode: "history",
  base: "/",
  linkActiveClass: "nuxt-link-active",
  linkExactActiveClass: "nuxt-link-exact-active",
  scrollBehavior,
  routes: [{
    path: "/*",
    component: _1e90a0ca,
    name: "all___en"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new Router__default["default"](__spreadProps(__spreadValues({}, routerOptions), { base }));
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === "string") {
      to = normalizeURL(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
var NuxtChild = {
  name: "NuxtChild",
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ""
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: void 0
    }
  },
  render(_2, { parent, data: data2, props }) {
    const h2 = parent.$createElement;
    data2.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition2 = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data2.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition2;
    const transitionProps = {};
    transitionsKeys.forEach((key) => {
      if (typeof transition[key] !== "undefined") {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach((key) => {
      if (typeof transition[key] === "function") {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (transition.css === false) {
      const leave = listeners.leave;
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h2("routerView", data2);
    if (props.keepAlive) {
      routerView = h2("keep-alive", { props: props.keepAliveProps }, [routerView]);
    }
    return h2("transition", {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
};
const transitionsKeys = [
  "name",
  "mode",
  "appear",
  "css",
  "type",
  "duration",
  "enterClass",
  "leaveClass",
  "appearClass",
  "enterActiveClass",
  "enterActiveClass",
  "leaveActiveClass",
  "appearActiveClass",
  "enterToClass",
  "leaveToClass",
  "appearToClass"
];
const listenersKeys = [
  "beforeEnter",
  "enter",
  "afterEnter",
  "enterCancelled",
  "beforeLeave",
  "leave",
  "afterLeave",
  "leaveCancelled",
  "beforeAppear",
  "appear",
  "afterAppear",
  "appearCancelled"
];
var render$2z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.template, { tag: "Component", attrs: { "error": _vm.error } });
};
var staticRenderFns$2z = [];
render$2z._withStripped = true;
function normalizeComponent(scriptExports, render4, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options2 = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render4) {
    options2.render = render4;
    options2.staticRenderFns = staticRenderFns2;
    options2._compiled = true;
  }
  if (functionalTemplate) {
    options2.functional = true;
  }
  if (scopeId) {
    options2._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options2._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options2.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options2.functional) {
      options2._injectStyles = hook;
      var originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h2, context) {
        hook.call(context);
        return originalRender(h2, context);
      };
    } else {
      var existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options: options2
  };
}
const __vue2_script$2E = {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      template: "Error"
    };
  },
  head() {
    return {
      title: this.error.message
    };
  }
};
const __cssModules$2E = {};
var __component__$2E = /* @__PURE__ */ normalizeComponent(__vue2_script$2E, render$2z, staticRenderFns$2z, false, __vue2_injectStyles$2E, null, null, null);
function __vue2_injectStyles$2E(context) {
  for (let o2 in __cssModules$2E) {
    this[o2] = __cssModules$2E[o2];
  }
}
__component__$2E.options.__file = "node_modules/@docus/app/dist/app/layouts/error.vue";
var NuxtError = /* @__PURE__ */ function() {
  return __component__$2E.exports;
}();
var Nuxt = {
  name: "Nuxt",
  components: {
    NuxtChild,
    NuxtError
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: void 0
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: void 0
    },
    name: {
      type: String,
      default: "default"
    }
  },
  errorCaptured(error2) {
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error2;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      if (typeof this.nuxtChildKey !== "undefined" || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile$1(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const { options: options2 } = Component;
        if (options2.key) {
          return typeof options2.key === "function" ? options2.key(this.$route) : options2.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, "");
    }
  },
  beforeCreate() {
    Vue__default["default"].util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
  },
  render(h2) {
    if (!this.nuxt.err) {
      return h2("NuxtChild", {
        key: this.routerViewKey,
        props: this.$props
      });
    }
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h2("div", {}, [
        h2("h2", "An error occurred while showing the error page"),
        h2("p", "Unfortunately an error occurred and while showing the error page another error occurred"),
        h2("p", `Error details: ${this.errorFromNuxtError.toString()}`),
        h2("nuxt-link", { props: { to: "/" } }, "Go back to home")
      ]);
    }
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h2(NuxtError, {
      props: {
        error: this.nuxt.err
      }
    });
  }
};
var nuxtLoading_vue_vue_type_style_index_0_lang = "";
const __vue2_script$2D = {
  name: "NuxtLoading",
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5e3,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? "0px" : "auto" : !this.reversed ? "0px" : "auto";
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error2) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === "undefined") {
        this._cut = 1e4 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h2) {
    let el = h2(false);
    if (this.show) {
      el = h2("div", {
        staticClass: "nuxt-progress",
        class: {
          "nuxt-progress-notransition": this.skipTimerCount > 0,
          "nuxt-progress-failed": !this.canSucceed
        },
        style: {
          width: this.percent + "%",
          left: this.left
        }
      });
    }
    return el;
  }
};
let __vue2_render$4, __vue2_staticRenderFns$4;
const __cssModules$2D = {};
var __component__$2D = /* @__PURE__ */ normalizeComponent(__vue2_script$2D, __vue2_render$4, __vue2_staticRenderFns$4, false, __vue2_injectStyles$2D, null, null, null);
function __vue2_injectStyles$2D(context) {
  for (let o2 in __cssModules$2D) {
    this[o2] = __cssModules$2D[o2];
  }
}
__component__$2D.options.__file = ".nuxt/components/nuxt-loading.vue";
var NuxtLoading = /* @__PURE__ */ function() {
  return __component__$2D.exports;
}();
var windi = "";
var main = "";
var prism = "";
var nuxt = "";
var render$2y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("AppLayout", [_c("Nuxt")], 1);
};
var staticRenderFns$2y = [];
render$2y._withStripped = true;
const __vue2_script$2C = {};
const __cssModules$2C = {};
var __component__$2C = /* @__PURE__ */ normalizeComponent(__vue2_script$2C, render$2y, staticRenderFns$2y, false, __vue2_injectStyles$2C, null, null, null);
function __vue2_injectStyles$2C(context) {
  for (let o2 in __cssModules$2C) {
    this[o2] = __cssModules$2C[o2];
  }
}
__component__$2C.options.__file = "node_modules/@docus/app/dist/app/layouts/default.vue";
var _6f6c098b = /* @__PURE__ */ function() {
  return __component__$2C.exports;
}();
const layouts = { "_default": sanitizeComponent(_6f6c098b) };
var App = {
  render(h2, props) {
    const loadingEl = h2("NuxtLoading", { ref: "loading" });
    const layoutEl = h2(this.layout || "nuxt");
    const templateEl = h2("div", {
      domProps: {
        id: "__layout"
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h2("transition", {
      props: {
        name: "layout",
        mode: "out-in"
      },
      on: {
        beforeEnter(el) {
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit("triggerScroll");
          });
        }
      }
    }, [templateEl]);
    return h2("div", {
      domProps: {
        id: "__nuxt"
      }
    }, [
      loadingEl,
      transitionEl
    ]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: "",
    nbFetching: 0
  }),
  beforeCreate() {
    Vue__default["default"].util.defineReactive(this, "nuxt", this.$options.nuxt);
  },
  created() {
    this.$root.$options.$nuxt = this;
    this.error = this.nuxt.error;
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    "nuxt.err": "errorChanged"
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map((page) => {
        const p2 = [];
        if (page.$options.fetch && page.$options.fetch.length) {
          p2.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p2.push(page.$fetch());
        } else {
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p2.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p2.push(promisify(page.$options.asyncData, this.context).then((newData) => {
            for (const key in newData) {
              Vue__default["default"].set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p2);
      });
      try {
        await Promise.all(promises);
      } catch (error2) {
        this.$loading.fail(error2);
        globalHandleError(error2);
        this.error(error2);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (NuxtError.options || NuxtError).layout;
        if (typeof errorLayout === "function") {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout2) {
      if (layout2 && typeof layout2 !== "string") {
        throw new Error("[nuxt] Avoid using non-string value as layout property.");
      }
      if (!layout2 || !layouts["_" + layout2]) {
        layout2 = "default";
      }
      this.layoutName = layout2;
      this.layout = layouts["_" + layout2];
      return this.layout;
    },
    loadLayout(layout2) {
      if (!layout2 || !layouts["_" + layout2]) {
        layout2 = "default";
      }
      return Promise.resolve(layouts["_" + layout2]);
    }
  },
  components: {
    NuxtLoading
  }
};
var render$2x = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 1050 140" } }, [_c("g", { attrs: { "fill": "none", "fill-rule": "evenodd" } }, [_c("path", { attrs: { "d": "M752.09356 137.76c-1.4858 1.49334-3.2966 2.24-5.43244 2.24-2.13584 0-3.94663-.74666-5.43243-2.24-1.4858-1.49334-2.22869-3.31332-2.22869-5.46V49.7c0-2.14668.74289-3.96666 2.22869-5.46 1.4858-1.49334 3.2966-2.24 5.43243-2.24 2.13584 0 3.96985.74666 5.50208 2.24 1.53223 1.49334 2.29834 3.31332 2.29834 5.46v33.6h36.07692V49.7c0-2.14668.7429-3.96666 2.2287-5.46 1.4858-1.49334 3.29659-2.24 5.43242-2.24 2.13584 0 3.96985.74666 5.50208 2.24C805.2339 45.73334 806 47.55332 806 49.7v82.6c0 2.14668-.7661 3.96666-2.29834 5.46-1.53223 1.49334-3.36624 2.24-5.50208 2.24-2.13583 0-3.94663-.74666-5.43243-2.24-1.4858-1.49334-2.22869-3.31332-2.22869-5.46V98.7h-36.07692v33.6c0 2.14668-.78932 3.96666-2.36798 5.46zM713.76536 44.24C715.25513 45.73334 716 47.55332 716 49.7s-.76815 3.99-2.30447 5.53-3.32867 2.31-5.3771 2.31h-22.2067v74.76c0 2.14668-.74487 3.96666-2.23463 5.46-1.48977 1.49334-3.3054 2.24-5.44693 2.24-2.14154 0-3.95716-.74666-5.44693-2.24-1.48977-1.49334-2.23464-3.31332-2.23464-5.46V57.54h-22.06704c-2.14153 0-3.95716-.77-5.44692-2.31C641.74487 53.69 641 51.84668 641 49.7c0-2.14668.74487-3.96666 2.23464-5.46 1.48976-1.49334 3.30539-2.24 5.44692-2.24h59.63688c2.14153 0 3.95716.74666 5.44692 2.24zM606 49.7c0-2.14668.76876-3.96666 2.3063-5.46 1.53755-1.49334 3.4114-2.24 5.62163-2.24 2.21022 0 4.1081.74666 5.6937 2.24C621.20721 45.73334 622 47.55332 622 49.7v82.6c0 2.14668-.79278 3.96666-2.37838 5.46s-3.48347 2.24-5.6937 2.24c-2.21021 0-4.08407-.74666-5.62161-2.24C606.76876 136.26666 606 134.44668 606 132.3V49.7zM492.36045 138.59978l-1.1209.84013h-.14011c-.28023 0-.70057.14002-1.26102.42007h-.42034c-.28023.09335-.72392.14002-1.33108.14002s-1.05084-.04667-1.33107-.14002h-.42034c-.56046-.1867-.88738-.30338-.9808-.35006-.0934-.04667-.25687-.11668-.49039-.21003-.23352-.09335-.5838-.32671-1.05085-.7001h-.1401c-.37365-.28005-.74728-.6301-1.12091-1.05017-.37364-.42007-.65386-.72344-.84068-.91014v-.14002c-.09341-.09335-.21017-.30338-.35028-.6301-.14012-.32672-.25688-.53675-.35029-.6301l-34.46782-81.63262c-.74727-1.96031-.72392-3.9206.07006-5.8809.79398-1.96032 2.17174-3.31385 4.13333-4.06063 1.86819-.84014 3.8064-.86348 5.8147-.07001 2.0083.79345 3.38606 2.17032 4.13333 4.13063l27.46217 64.83003 18.07459-42.98665c1.30773-3.17384 3.71298-4.76074 7.21582-4.76074 3.50285 0 5.9548 1.5869 7.35594 4.76074l18.07459 42.98665 27.32205-64.83003c.84068-1.9603 2.2418-3.33718 4.2034-4.13063 1.96159-.79347 3.92315-.79347 5.88474 0 1.9616.79345 3.33936 2.19366 4.13334 4.20064.79398 2.007.77063 3.94394-.07006 5.8109l-34.3277 81.63262c-.18682.74679-.70056 1.49356-1.54125 2.24035 0 .09335-.0467.23337-.14011.42006-.37364.1867-.70056.42007-.9808.70011h-.1401l-1.26102.84013h-.14012c-.0934 0-.18681.02334-.28022.07001-.09341.04668-.42034.16336-.9808.35006h-.28022c-.28023.09335-.72392.14002-1.33108.14002-.60715 0-1.05084-.04667-1.33107-.14002h-.42034c-.56045-.1867-.88738-.30338-.98079-.35006-.0934-.04667-.25687-.09334-.4904-.14002-.23352-.04667-.5838-.30337-1.05084-.77012h-.14012c-.84068-.56009-1.44783-1.21351-1.82147-1.9603-.37363-.1867-.65386-.65343-.84068-1.40022l-18.35481-43.4067-18.35482 43.4067c-.0934.28005-.28022.7001-.56045 1.2602l-.98079.98015c0 .09335-.0467.23337-.14011.42006-.18682.09335-.46704.32672-.84068.70011h-.28023z", "fill": "#00C48D", "fill-rule": "nonzero" } }), _c("path", { attrs: { "d": "M383.76536 44.24C385.25513 45.73334 386 47.55332 386 49.7s-.76815 3.99-2.30447 5.53-3.32867 2.31-5.3771 2.31h-22.2067v74.76c0 2.14668-.74487 3.96666-2.23464 5.46-1.48976 1.49334-3.30539 2.24-5.44692 2.24-2.14154 0-3.95716-.74666-5.44693-2.24-1.48977-1.49334-2.23464-3.31332-2.23464-5.46V57.54h-22.06704c-2.14153 0-3.95716-.77-5.44692-2.31C311.74487 53.69 311 51.84668 311 49.7c0-2.14668.74487-3.96666 2.23464-5.46 1.48976-1.49334 3.30539-2.24 5.44692-2.24h59.63688c2.14153 0 3.95716.74666 5.44692 2.24zM247.67735 140c-2.14037 0-3.955-.74666-5.44394-2.24C240.74446 136.26666 240 134.44668 240 132.3V49.7c0-2.14668.74446-3.96666 2.23341-5.46s3.30357-2.24 5.44394-2.24c2.14036 0 3.97825.74666 5.51373 2.24 1.53547 1.49334 2.3032 3.31332 2.3032 5.46v74.76h37.82837c2.0473 0 3.83867.77 5.37415 2.31 1.53547 1.54 2.3032 3.35999 2.3032 5.46s-.76773 3.92-2.3032 5.46c-1.53548 1.54-3.32684 2.31-5.37415 2.31h-45.6453zM197 49.7c0-2.14668.76876-3.96666 2.3063-5.46 1.53755-1.49334 3.4114-2.24 5.62163-2.24 2.21022 0 4.1081.74666 5.6937 2.24C212.2072 45.73334 213 47.55332 213 49.7v82.6c0 2.14668-.79279 3.96666-2.37838 5.46-1.5856 1.49334-3.48347 2.24-5.6937 2.24-2.21021 0-4.08407-.74666-5.62161-2.24C197.76876 136.26666 197 134.44668 197 132.3V49.7zM164 98.54c0 11.10672-3.9472 20.62663-11.8417 28.56-7.8945 7.93337-17.44717 11.9-28.6583 11.9s-20.7638-3.9433-28.6583-11.83C86.9472 119.2833 83 109.74006 83 98.54V48.7c0-2.14668.7474-3.96666 2.24221-5.46 1.49482-1.49334 3.3166-2.24 5.4654-2.24 2.1488 0 3.99394.74666 5.53547 2.24 1.54153 1.49334 2.31228 3.31332 2.31228 5.46v49.84c0 6.81337 2.42905 12.66998 7.2872 17.57 4.85816 4.90002 10.74391 7.35 17.65744 7.35 6.91353 0 12.79928-2.42664 17.65744-7.28 4.85815-4.85336 7.2872-10.7333 7.2872-17.64V48.7c0-2.14668.77075-3.96666 2.31228-5.46 1.54153-1.49334 3.38667-2.24 5.53547-2.24s3.97058.74666 5.4654 2.24C163.2526 44.73334 164 46.55332 164 48.7v49.84zM8.26 140l-.14-.14c-.09333 0-.23333.04667-.42.14-2.14668 0-3.96666-.74666-5.46-2.24C.74666 136.26666 0 134.44668 0 132.3V49.7c0-2.14668.74666-3.96666 2.24-5.46C3.73334 42.74666 5.55332 42 7.7 42h19.88c7.37337 0 13.64997 2.58997 18.83 7.77 5.18003 5.18003 7.77 11.0833 7.77 17.71 0 6.6267-1.77332 12.31998-5.32 17.08 4.29335 2.70668 7.72332 6.29998 10.29 10.78 2.56668 4.48002 3.85 9.3333 3.85 14.56 0 8.3067-2.91664 15.39997-8.75 21.28-5.83336 5.88003-12.9033 8.82-21.21 8.82H8.26zm7.28-82.46v22.4h12.04c3.08002 0 5.69332-1.11999 7.84-3.36s3.22-4.89998 3.22-7.98-1.07332-5.69332-3.22-7.84-4.75998-3.22-7.84-3.22H15.54zm0 37.94v28.98h17.5c4.01335-.09333 7.41999-1.53999 10.22-4.34 2.80001-2.80001 4.2-6.20665 4.2-10.22 0-4.01335-1.39999-7.39665-4.2-10.15-2.80001-2.75335-6.20665-4.17667-10.22-4.27h-17.5z", "fill": "#FFF", "fill-rule": "nonzero" } }), _c("g", { attrs: { "fill-rule": "nonzero", "transform": "translate(865)" } }, [_c("path", { attrs: { "d": "M105.41346 38.55829l-6.33111 11.13597-21.65186-38.0943-66.46753 116.92767h45.00297c0 6.15023 4.90828 11.13597 10.96296 11.13597H10.96296c-3.91631 0-7.5348-2.12357-9.49262-5.5689-1.95783-3.44535-1.95763-7.6899.00052-11.13505L67.9384 6.03198c1.9583-3.44565 5.57756-5.5683 9.49438-5.5683 3.91681 0 7.53608 2.12265 9.49438 5.5683l18.4863 32.52631z", "fill": "#00C58E" } }), _c("path", { attrs: { "d": "M153.3947 122.95965l-41.65013-73.2654-6.33111-11.13596-6.33111 11.13597-41.64556 73.26539c-1.95816 3.44515-1.95836 7.6897-.00053 11.13504 1.95783 3.44534 5.57632 5.56891 9.49263 5.56891h76.96c3.91713 0 7.5371-2.12126 9.49605-5.5669 1.95895-3.44564 1.95918-7.69118.00062-11.13705h.00913zm-86.46581 5.56798l38.48457-67.6974 38.47543 67.6974h-76.96z", "fill": "#FFF" } }), _c("path", { attrs: { "d": "M183.17284 134.09562c-1.95797 3.44482-5.57616 5.56798-9.4921 5.56798H143.8889c6.05468 0 10.96296-4.98574 10.96296-11.13597h18.80605l-53.36222-93.88085-8.55111 15.04748-6.33111-11.13597 5.39012-9.4795c1.9583-3.44565 5.57757-5.5683 9.49438-5.5683 3.91682 0 7.53609 2.12265 9.49439 5.5683l53.38049 93.88086c1.95834 3.44548 1.95834 7.69049 0 11.13597z", "fill": "#108775" } })])])]);
};
var staticRenderFns$2x = [];
render$2x._withStripped = true;
const __vue2_script$2B = {};
const __cssModules$2B = {};
var __component__$2B = /* @__PURE__ */ normalizeComponent(__vue2_script$2B, render$2x, staticRenderFns$2x, false, __vue2_injectStyles$2B, null, null, null);
function __vue2_injectStyles$2B(context) {
  for (let o2 in __cssModules$2B) {
    this[o2] = __cssModules$2B[o2];
  }
}
__component__$2B.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/BuiltWithNuxtDark.vue";
var BuiltWithNuxtDark = /* @__PURE__ */ function() {
  return __component__$2B.exports;
}();
var render$2w = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 1050 140" } }, [_c("g", { attrs: { "fill": "none", "fill-rule": "evenodd" } }, [_c("path", { attrs: { "d": "M752.09356 137.76c-1.4858 1.49334-3.2966 2.24-5.43244 2.24-2.13584 0-3.94663-.74666-5.43243-2.24-1.4858-1.49334-2.22869-3.31332-2.22869-5.46V49.7c0-2.14668.74289-3.96666 2.22869-5.46 1.4858-1.49334 3.2966-2.24 5.43243-2.24 2.13584 0 3.96985.74666 5.50208 2.24 1.53223 1.49334 2.29834 3.31332 2.29834 5.46v33.6h36.07692V49.7c0-2.14668.7429-3.96666 2.2287-5.46 1.4858-1.49334 3.29659-2.24 5.43242-2.24 2.13584 0 3.96985.74666 5.50208 2.24C805.2339 45.73334 806 47.55332 806 49.7v82.6c0 2.14668-.7661 3.96666-2.29834 5.46-1.53223 1.49334-3.36624 2.24-5.50208 2.24-2.13583 0-3.94663-.74666-5.43243-2.24-1.4858-1.49334-2.22869-3.31332-2.22869-5.46V98.7h-36.07692v33.6c0 2.14668-.78932 3.96666-2.36798 5.46zM713.76536 44.24C715.25513 45.73334 716 47.55332 716 49.7s-.76815 3.99-2.30447 5.53-3.32867 2.31-5.3771 2.31h-22.2067v74.76c0 2.14668-.74487 3.96666-2.23463 5.46-1.48977 1.49334-3.3054 2.24-5.44693 2.24-2.14154 0-3.95716-.74666-5.44693-2.24-1.48977-1.49334-2.23464-3.31332-2.23464-5.46V57.54h-22.06704c-2.14153 0-3.95716-.77-5.44692-2.31C641.74487 53.69 641 51.84668 641 49.7c0-2.14668.74487-3.96666 2.23464-5.46 1.48976-1.49334 3.30539-2.24 5.44692-2.24h59.63688c2.14153 0 3.95716.74666 5.44692 2.24zM606 49.7c0-2.14668.76876-3.96666 2.3063-5.46 1.53755-1.49334 3.4114-2.24 5.62163-2.24 2.21022 0 4.1081.74666 5.6937 2.24C621.20721 45.73334 622 47.55332 622 49.7v82.6c0 2.14668-.79278 3.96666-2.37838 5.46s-3.48347 2.24-5.6937 2.24c-2.21021 0-4.08407-.74666-5.62161-2.24C606.76876 136.26666 606 134.44668 606 132.3V49.7zM492.36045 138.59978l-1.1209.84013h-.14011c-.28023 0-.70057.14002-1.26102.42007h-.42034c-.28023.09335-.72392.14002-1.33108.14002s-1.05084-.04667-1.33107-.14002h-.42034c-.56046-.1867-.88738-.30338-.9808-.35006-.0934-.04667-.25687-.11668-.49039-.21003-.23352-.09335-.5838-.32671-1.05085-.7001h-.1401c-.37365-.28005-.74728-.6301-1.12091-1.05017-.37364-.42007-.65386-.72344-.84068-.91014v-.14002c-.09341-.09335-.21017-.30338-.35028-.6301-.14012-.32672-.25688-.53675-.35029-.6301l-34.46782-81.63262c-.74727-1.96031-.72392-3.9206.07006-5.8809.79398-1.96032 2.17174-3.31385 4.13333-4.06063 1.86819-.84014 3.8064-.86348 5.8147-.07001 2.0083.79345 3.38606 2.17032 4.13333 4.13063l27.46217 64.83003 18.07459-42.98665c1.30773-3.17384 3.71298-4.76074 7.21582-4.76074 3.50285 0 5.9548 1.5869 7.35594 4.76074l18.07459 42.98665 27.32205-64.83003c.84068-1.9603 2.2418-3.33718 4.2034-4.13063 1.96159-.79347 3.92315-.79347 5.88474 0 1.9616.79345 3.33936 2.19366 4.13334 4.20064.79398 2.007.77063 3.94394-.07006 5.8109l-34.3277 81.63262c-.18682.74679-.70056 1.49356-1.54125 2.24035 0 .09335-.0467.23337-.14011.42006-.37364.1867-.70056.42007-.9808.70011h-.1401l-1.26102.84013h-.14012c-.0934 0-.18681.02334-.28022.07001-.09341.04668-.42034.16336-.9808.35006h-.28022c-.28023.09335-.72392.14002-1.33108.14002-.60715 0-1.05084-.04667-1.33107-.14002h-.42034c-.56045-.1867-.88738-.30338-.98079-.35006-.0934-.04667-.25687-.09334-.4904-.14002-.23352-.04667-.5838-.30337-1.05084-.77012h-.14012c-.84068-.56009-1.44783-1.21351-1.82147-1.9603-.37363-.1867-.65386-.65343-.84068-1.40022l-18.35481-43.4067-18.35482 43.4067c-.0934.28005-.28022.7001-.56045 1.2602l-.98079.98015c0 .09335-.0467.23337-.14011.42006-.18682.09335-.46704.32672-.84068.70011h-.28023z", "fill": "#00C48D", "fill-rule": "nonzero" } }), _c("path", { attrs: { "d": "M383.76536 44.24C385.25513 45.73334 386 47.55332 386 49.7s-.76815 3.99-2.30447 5.53-3.32867 2.31-5.3771 2.31h-22.2067v74.76c0 2.14668-.74487 3.96666-2.23464 5.46-1.48976 1.49334-3.30539 2.24-5.44692 2.24-2.14154 0-3.95716-.74666-5.44693-2.24-1.48977-1.49334-2.23464-3.31332-2.23464-5.46V57.54h-22.06704c-2.14153 0-3.95716-.77-5.44692-2.31C311.74487 53.69 311 51.84668 311 49.7c0-2.14668.74487-3.96666 2.23464-5.46 1.48976-1.49334 3.30539-2.24 5.44692-2.24h59.63688c2.14153 0 3.95716.74666 5.44692 2.24zM247.67735 140c-2.14037 0-3.955-.74666-5.44394-2.24C240.74446 136.26666 240 134.44668 240 132.3V49.7c0-2.14668.74446-3.96666 2.23341-5.46s3.30357-2.24 5.44394-2.24c2.14036 0 3.97825.74666 5.51373 2.24 1.53547 1.49334 2.3032 3.31332 2.3032 5.46v74.76h37.82837c2.0473 0 3.83867.77 5.37415 2.31 1.53547 1.54 2.3032 3.35999 2.3032 5.46s-.76773 3.92-2.3032 5.46c-1.53548 1.54-3.32684 2.31-5.37415 2.31h-45.6453zM197 49.7c0-2.14668.76876-3.96666 2.3063-5.46 1.53755-1.49334 3.4114-2.24 5.62163-2.24 2.21022 0 4.1081.74666 5.6937 2.24C212.2072 45.73334 213 47.55332 213 49.7v82.6c0 2.14668-.79279 3.96666-2.37838 5.46-1.5856 1.49334-3.48347 2.24-5.6937 2.24-2.21021 0-4.08407-.74666-5.62161-2.24C197.76876 136.26666 197 134.44668 197 132.3V49.7zM164 98.54c0 11.10672-3.9472 20.62663-11.8417 28.56-7.8945 7.93337-17.44717 11.9-28.6583 11.9s-20.7638-3.9433-28.6583-11.83C86.9472 119.2833 83 109.74006 83 98.54V48.7c0-2.14668.7474-3.96666 2.24221-5.46 1.49482-1.49334 3.3166-2.24 5.4654-2.24 2.1488 0 3.99394.74666 5.53547 2.24 1.54153 1.49334 2.31228 3.31332 2.31228 5.46v49.84c0 6.81337 2.42905 12.66998 7.2872 17.57 4.85816 4.90002 10.74391 7.35 17.65744 7.35 6.91353 0 12.79928-2.42664 17.65744-7.28 4.85815-4.85336 7.2872-10.7333 7.2872-17.64V48.7c0-2.14668.77075-3.96666 2.31228-5.46 1.54153-1.49334 3.38667-2.24 5.53547-2.24s3.97058.74666 5.4654 2.24C163.2526 44.73334 164 46.55332 164 48.7v49.84zM8.26 140l-.14-.14c-.09333 0-.23333.04667-.42.14-2.14668 0-3.96666-.74666-5.46-2.24C.74666 136.26666 0 134.44668 0 132.3V49.7c0-2.14668.74666-3.96666 2.24-5.46C3.73334 42.74666 5.55332 42 7.7 42h19.88c7.37337 0 13.64997 2.58997 18.83 7.77 5.18003 5.18003 7.77 11.0833 7.77 17.71 0 6.6267-1.77332 12.31998-5.32 17.08 4.29335 2.70668 7.72332 6.29998 10.29 10.78 2.56668 4.48002 3.85 9.3333 3.85 14.56 0 8.3067-2.91664 15.39997-8.75 21.28-5.83336 5.88003-12.9033 8.82-21.21 8.82H8.26zm7.28-82.46v22.4h12.04c3.08002 0 5.69332-1.11999 7.84-3.36s3.22-4.89998 3.22-7.98-1.07332-5.69332-3.22-7.84-4.75998-3.22-7.84-3.22H15.54zm0 37.94v28.98h17.5c4.01335-.09333 7.41999-1.53999 10.22-4.34 2.80001-2.80001 4.2-6.20665 4.2-10.22 0-4.01335-1.39999-7.39665-4.2-10.15-2.80001-2.75335-6.20665-4.17667-10.22-4.27h-17.5z", "fill": "#2F495E", "fill-rule": "nonzero" } }), _c("g", { attrs: { "fill-rule": "nonzero", "transform": "translate(865)" } }, [_c("path", { attrs: { "d": "M105.41346 38.55829l-6.33111 11.13597-21.65186-38.0943-66.46753 116.92767h45.00297c0 6.15023 4.90828 11.13597 10.96296 11.13597H10.96296c-3.91631 0-7.5348-2.12357-9.49262-5.5689-1.95783-3.44535-1.95763-7.6899.00052-11.13505L67.9384 6.03198c1.9583-3.44565 5.57756-5.5683 9.49438-5.5683 3.91681 0 7.53608 2.12265 9.49438 5.5683l18.4863 32.52631z", "fill": "#00C58E" } }), _c("path", { attrs: { "d": "M153.3947 122.95965l-41.65013-73.2654-6.33111-11.13596-6.33111 11.13597-41.64556 73.26539c-1.95816 3.44515-1.95836 7.6897-.00053 11.13504 1.95783 3.44534 5.57632 5.56891 9.49263 5.56891h76.96c3.91713 0 7.5371-2.12126 9.49605-5.5669 1.95895-3.44564 1.95918-7.69118.00062-11.13705h.00913zm-86.46581 5.56798l38.48457-67.6974 38.47543 67.6974h-76.96z", "fill": "#2F495E" } }), _c("path", { attrs: { "d": "M183.17284 134.09562c-1.95797 3.44482-5.57616 5.56798-9.4921 5.56798H143.8889c6.05468 0 10.96296-4.98574 10.96296-11.13597h18.80605l-53.36222-93.88085-8.55111 15.04748-6.33111-11.13597 5.39012-9.4795c1.9583-3.44565 5.57757-5.5683 9.49438-5.5683 3.91682 0 7.53609 2.12265 9.49439 5.5683l53.38049 93.88086c1.95834 3.44548 1.95834 7.69049 0 11.13597z", "fill": "#108775" } })])])]);
};
var staticRenderFns$2w = [];
render$2w._withStripped = true;
const __vue2_script$2A = {};
const __cssModules$2A = {};
var __component__$2A = /* @__PURE__ */ normalizeComponent(__vue2_script$2A, render$2w, staticRenderFns$2w, false, __vue2_injectStyles$2A, null, null, null);
function __vue2_injectStyles$2A(context) {
  for (let o2 in __cssModules$2A) {
    this[o2] = __cssModules$2A[o2];
  }
}
__component__$2A.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/BuiltWithNuxtLight.vue";
var BuiltWithNuxtLight = /* @__PURE__ */ function() {
  return __component__$2A.exports;
}();
var render$2v = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "aria-hidden": "true", "role": "img", "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 448 512" } }, [_c("path", { attrs: { "fill": "currentColor", "d": "M229.3 182.6c-49.3 0-89.2 39.9-89.2 89.2 0 49.3 39.9 89.2 89.2 89.2s89.2-39.9 89.2-89.2c0-49.3-40-89.2-89.2-89.2zm62.7 56.6l-58.9 30.6c-1.8.9-3.8-.4-3.8-2.3V201c0-1.5 1.3-2.7 2.7-2.6 26.2 1 48.9 15.7 61.1 37.1.7 1.3.2 3-1.1 3.7zM389.1 32H58.9C26.4 32 0 58.4 0 90.9V421c0 32.6 26.4 59 58.9 59H389c32.6 0 58.9-26.4 58.9-58.9V90.9C448 58.4 421.6 32 389.1 32zm-202.6 84.7c0-10.8 8.7-19.5 19.5-19.5h45.3c10.8 0 19.5 8.7 19.5 19.5v15.4c0 1.8-1.7 3-3.3 2.5-12.3-3.4-25.1-5.1-38.1-5.1-13.5 0-26.7 1.8-39.4 5.5-1.7.5-3.4-.8-3.4-2.5v-15.8zm-84.4 37l9.2-9.2c7.6-7.6 19.9-7.6 27.5 0l7.7 7.7c1.1 1.1 1 3-.3 4-6.2 4.5-12.1 9.4-17.6 14.9-5.4 5.4-10.4 11.3-14.8 17.4-1 1.3-2.9 1.5-4 .3l-7.7-7.7c-7.6-7.5-7.6-19.8 0-27.4zm127.2 244.8c-70 0-126.6-56.7-126.6-126.6s56.7-126.6 126.6-126.6c70 0 126.6 56.6 126.6 126.6 0 69.8-56.7 126.6-126.6 126.6z" } })]);
};
var staticRenderFns$2v = [];
render$2v._withStripped = true;
const __vue2_script$2z = {};
const __cssModules$2z = {};
var __component__$2z = /* @__PURE__ */ normalizeComponent(__vue2_script$2z, render$2v, staticRenderFns$2v, false, __vue2_injectStyles$2z, null, null, null);
function __vue2_injectStyles$2z(context) {
  for (let o2 in __cssModules$2z) {
    this[o2] = __cssModules$2z[o2];
  }
}
__component__$2z.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconAlgolia.vue";
var IconAlgolia = /* @__PURE__ */ function() {
  return __component__$2z.exports;
}();
var render$2u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "currentColor", "viewBox": "0 0 20 20" } }, [_c("path", { attrs: { "fill-rule": "evenodd", "d": "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", "clip-rule": "evenodd" } })]);
};
var staticRenderFns$2u = [];
render$2u._withStripped = true;
const __vue2_script$2y = {};
const __cssModules$2y = {};
var __component__$2y = /* @__PURE__ */ normalizeComponent(__vue2_script$2y, render$2u, staticRenderFns$2u, false, __vue2_injectStyles$2y, null, null, null);
function __vue2_injectStyles$2y(context) {
  for (let o2 in __cssModules$2y) {
    this[o2] = __cssModules$2y[o2];
  }
}
__component__$2y.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconArrowLeft.vue";
var IconArrowLeft = /* @__PURE__ */ function() {
  return __component__$2y.exports;
}();
var render$2t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z", "fill": "currentColor" } })]);
};
var staticRenderFns$2t = [];
render$2t._withStripped = true;
const __vue2_script$2x = {};
const __cssModules$2x = {};
var __component__$2x = /* @__PURE__ */ normalizeComponent(__vue2_script$2x, render$2t, staticRenderFns$2t, false, __vue2_injectStyles$2x, null, null, null);
function __vue2_injectStyles$2x(context) {
  for (let o2 in __cssModules$2x) {
    this[o2] = __cssModules$2x[o2];
  }
}
__component__$2x.options.__file = "components/atoms/icons/IconArrowRight.vue";
var IconArrowRight = /* @__PURE__ */ function() {
  return __component__$2x.exports;
}();
var render$2s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" } })]);
};
var staticRenderFns$2s = [];
render$2s._withStripped = true;
const __vue2_script$2w = {};
const __cssModules$2w = {};
var __component__$2w = /* @__PURE__ */ normalizeComponent(__vue2_script$2w, render$2s, staticRenderFns$2s, false, __vue2_injectStyles$2w, null, null, null);
function __vue2_injectStyles$2w(context) {
  for (let o2 in __cssModules$2w) {
    this[o2] = __cssModules$2w[o2];
  }
}
__component__$2w.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconBadgeCheck.vue";
var IconBadgeCheck = /* @__PURE__ */ function() {
  return __component__$2w.exports;
}();
var render$2r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M5 13l4 4L19 7" } })]);
};
var staticRenderFns$2r = [];
render$2r._withStripped = true;
const __vue2_script$2v = {};
const __cssModules$2v = {};
var __component__$2v = /* @__PURE__ */ normalizeComponent(__vue2_script$2v, render$2r, staticRenderFns$2r, false, __vue2_injectStyles$2v, null, null, null);
function __vue2_injectStyles$2v(context) {
  for (let o2 in __cssModules$2v) {
    this[o2] = __cssModules$2v[o2];
  }
}
__component__$2v.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconCheck.vue";
var IconCheck = /* @__PURE__ */ function() {
  return __component__$2v.exports;
}();
var render$2q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" } })]);
};
var staticRenderFns$2q = [];
render$2q._withStripped = true;
const __vue2_script$2u = {};
const __cssModules$2u = {};
var __component__$2u = /* @__PURE__ */ normalizeComponent(__vue2_script$2u, render$2q, staticRenderFns$2q, false, __vue2_injectStyles$2u, null, null, null);
function __vue2_injectStyles$2u(context) {
  for (let o2 in __cssModules$2u) {
    this[o2] = __cssModules$2u[o2];
  }
}
__component__$2u.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconCheckCircle.vue";
var IconCheckCircle = /* @__PURE__ */ function() {
  return __component__$2u.exports;
}();
var render$2p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M9 5l7 7-7 7" } })]);
};
var staticRenderFns$2p = [];
render$2p._withStripped = true;
const __vue2_script$2t = {};
const __cssModules$2t = {};
var __component__$2t = /* @__PURE__ */ normalizeComponent(__vue2_script$2t, render$2p, staticRenderFns$2p, false, __vue2_injectStyles$2t, null, null, null);
function __vue2_injectStyles$2t(context) {
  for (let o2 in __cssModules$2t) {
    this[o2] = __cssModules$2t[o2];
  }
}
__component__$2t.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconChevronRight.vue";
var IconChevronRight = /* @__PURE__ */ function() {
  return __component__$2t.exports;
}();
var render$2o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" } })]);
};
var staticRenderFns$2o = [];
render$2o._withStripped = true;
const __vue2_script$2s = {};
const __cssModules$2s = {};
var __component__$2s = /* @__PURE__ */ normalizeComponent(__vue2_script$2s, render$2o, staticRenderFns$2o, false, __vue2_injectStyles$2s, null, null, null);
function __vue2_injectStyles$2s(context) {
  for (let o2 in __cssModules$2s) {
    this[o2] = __cssModules$2s[o2];
  }
}
__component__$2s.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconClipboardCheck.vue";
var IconClipboardCheck = /* @__PURE__ */ function() {
  return __component__$2s.exports;
}();
var render$2n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" } })]);
};
var staticRenderFns$2n = [];
render$2n._withStripped = true;
const __vue2_script$2r = {};
const __cssModules$2r = {};
var __component__$2r = /* @__PURE__ */ normalizeComponent(__vue2_script$2r, render$2n, staticRenderFns$2n, false, __vue2_injectStyles$2r, null, null, null);
function __vue2_injectStyles$2r(context) {
  for (let o2 in __cssModules$2r) {
    this[o2] = __cssModules$2r[o2];
  }
}
__component__$2r.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconClipboardCopy.vue";
var IconClipboardCopy = /* @__PURE__ */ function() {
  return __component__$2r.exports;
}();
var render$2m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "preserveAspectRatio": "xMidYMid meet", "viewBox": "0 0 256 296" } }, [_c("path", { attrs: { "d": "M115.498 261.088v-106.61L23.814 101.73v60.773l41.996 24.347v45.7l49.688 28.54zm23.814.627l50.605-29.151V185.78l42.269-24.495v-60.011l-92.874 53.621v106.82zm80.66-180.887l-48.817-28.289l-42.863 24.872l-43.188-24.897l-49.252 28.667l91.914 52.882l92.206-53.235zM0 222.212V74.495L127.987 0L256 74.182v147.797l-128.016 73.744L0 222.212z", "fill": "currentColor" } })]);
};
var staticRenderFns$2m = [];
render$2m._withStripped = true;
const __vue2_script$2q = {};
const __cssModules$2q = {};
var __component__$2q = /* @__PURE__ */ normalizeComponent(__vue2_script$2q, render$2m, staticRenderFns$2m, false, __vue2_injectStyles$2q, null, null, null);
function __vue2_injectStyles$2q(context) {
  for (let o2 in __cssModules$2q) {
    this[o2] = __cssModules$2q[o2];
  }
}
__component__$2q.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconCodeSandbox.vue";
var IconCodeSandbox = /* @__PURE__ */ function() {
  return __component__$2q.exports;
}();
var render$2l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 24 24", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z", "stroke": "currentColor", "stroke-width": "1.49375", "stroke-linejoin": "round" } }), _c("path", { attrs: { "d": "M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6", "stroke": "currentColor", "stroke-width": "1.49375", "stroke-linecap": "round", "stroke-linejoin": "round" } })]);
};
var staticRenderFns$2l = [];
render$2l._withStripped = true;
const __vue2_script$2p = {};
const __cssModules$2p = {};
var __component__$2p = /* @__PURE__ */ normalizeComponent(__vue2_script$2p, render$2l, staticRenderFns$2l, false, __vue2_injectStyles$2p, null, null, null);
function __vue2_injectStyles$2p(context) {
  for (let o2 in __cssModules$2p) {
    this[o2] = __cssModules$2p[o2];
  }
}
__component__$2p.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconCopy.vue";
var IconCopy = /* @__PURE__ */ function() {
  return __component__$2p.exports;
}();
var render$2k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" } }), _c("path", { attrs: { "d": "M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" } })]);
};
var staticRenderFns$2k = [];
render$2k._withStripped = true;
const __vue2_script$2o = {};
const __cssModules$2o = {};
var __component__$2o = /* @__PURE__ */ normalizeComponent(__vue2_script$2o, render$2k, staticRenderFns$2k, false, __vue2_injectStyles$2o, null, null, null);
function __vue2_injectStyles$2o(context) {
  for (let o2 in __cssModules$2o) {
    this[o2] = __cssModules$2o[o2];
  }
}
__component__$2o.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconEdit.vue";
var IconEdit = /* @__PURE__ */ function() {
  return __component__$2o.exports;
}();
var render$2j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" } })]);
};
var staticRenderFns$2j = [];
render$2j._withStripped = true;
const __vue2_script$2n = {};
const __cssModules$2n = {};
var __component__$2n = /* @__PURE__ */ normalizeComponent(__vue2_script$2n, render$2j, staticRenderFns$2j, false, __vue2_injectStyles$2n, null, null, null);
function __vue2_injectStyles$2n(context) {
  for (let o2 in __cssModules$2n) {
    this[o2] = __cssModules$2n[o2];
  }
}
__component__$2n.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconExclamationCircle.vue";
var IconExclamationCircle = /* @__PURE__ */ function() {
  return __component__$2n.exports;
}();
var render$2i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" } })]);
};
var staticRenderFns$2i = [];
render$2i._withStripped = true;
const __vue2_script$2m = {};
const __cssModules$2m = {};
var __component__$2m = /* @__PURE__ */ normalizeComponent(__vue2_script$2m, render$2i, staticRenderFns$2i, false, __vue2_injectStyles$2m, null, null, null);
function __vue2_injectStyles$2m(context) {
  for (let o2 in __cssModules$2m) {
    this[o2] = __cssModules$2m[o2];
  }
}
__component__$2m.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconExternalLink.vue";
var IconExternalLink = /* @__PURE__ */ function() {
  return __component__$2m.exports;
}();
var render$2h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "14", "height": "14", "viewBox": "0 0 14 14", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z", "fill": "currentColor" } })]);
};
var staticRenderFns$2h = [];
render$2h._withStripped = true;
const __vue2_script$2l = {};
const __cssModules$2l = {};
var __component__$2l = /* @__PURE__ */ normalizeComponent(__vue2_script$2l, render$2h, staticRenderFns$2h, false, __vue2_injectStyles$2l, null, null, null);
function __vue2_injectStyles$2l(context) {
  for (let o2 in __cssModules$2l) {
    this[o2] = __cssModules$2l[o2];
  }
}
__component__$2l.options.__file = "components/atoms/icons/IconGitHub.vue";
var IconGitHub = /* @__PURE__ */ function() {
  return __component__$2l.exports;
}();
var render$2g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "xmlns": "http://www.w3.org/2000/svg", "width": "18", "height": "18", "viewBox": "0 0 24 24" } }, [_c("path", { staticClass: "icon", attrs: { "fill": "currentColor", "d": "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z" } })]);
};
var staticRenderFns$2g = [];
render$2g._withStripped = true;
const __vue2_script$2k = {};
const __cssModules$2k = {};
var __component__$2k = /* @__PURE__ */ normalizeComponent(__vue2_script$2k, render$2g, staticRenderFns$2g, false, __vue2_injectStyles$2k, null, null, null);
function __vue2_injectStyles$2k(context) {
  for (let o2 in __cssModules$2k) {
    this[o2] = __cssModules$2k[o2];
  }
}
__component__$2k.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconHeart.vue";
var IconHeart = /* @__PURE__ */ function() {
  return __component__$2k.exports;
}();
var render$2f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" } })]);
};
var staticRenderFns$2f = [];
render$2f._withStripped = true;
const __vue2_script$2j = {};
const __cssModules$2j = {};
var __component__$2j = /* @__PURE__ */ normalizeComponent(__vue2_script$2j, render$2f, staticRenderFns$2f, false, __vue2_injectStyles$2j, null, null, null);
function __vue2_injectStyles$2j(context) {
  for (let o2 in __cssModules$2j) {
    this[o2] = __cssModules$2j[o2];
  }
}
__component__$2j.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconInformationCircle.vue";
var IconInformationCircle = /* @__PURE__ */ function() {
  return __component__$2j.exports;
}();
var render$2e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M4 6h16M4 12h16M4 18h16" } })]);
};
var staticRenderFns$2e = [];
render$2e._withStripped = true;
const __vue2_script$2i = {};
const __cssModules$2i = {};
var __component__$2i = /* @__PURE__ */ normalizeComponent(__vue2_script$2i, render$2e, staticRenderFns$2e, false, __vue2_injectStyles$2i, null, null, null);
function __vue2_injectStyles$2i(context) {
  for (let o2 in __cssModules$2i) {
    this[o2] = __cssModules$2i[o2];
  }
}
__component__$2i.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconMenu.vue";
var IconMenu = /* @__PURE__ */ function() {
  return __component__$2i.exports;
}();
var render$2d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 24 24", "fill": "none", "xmlns": "http://www.w3.org/2000/svg", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" } })]);
};
var staticRenderFns$2d = [];
render$2d._withStripped = true;
const __vue2_script$2h = {};
const __cssModules$2h = {};
var __component__$2h = /* @__PURE__ */ normalizeComponent(__vue2_script$2h, render$2d, staticRenderFns$2d, false, __vue2_injectStyles$2h, null, null, null);
function __vue2_injectStyles$2h(context) {
  for (let o2 in __cssModules$2h) {
    this[o2] = __cssModules$2h[o2];
  }
}
__component__$2h.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconMenuAlt.vue";
var IconMenuAlt = /* @__PURE__ */ function() {
  return __component__$2h.exports;
}();
var render$2c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 24 24", "fill": "currentColor", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M21 16.1529C19.1593 16.9855 17.1086 17.2374 15.1211 16.8751C13.1336 16.5128 11.3036 15.5535 9.87509 14.1249C8.44655 12.6964 7.48723 10.8665 7.12493 8.87894C6.76263 6.89144 7.01455 4.84072 7.84714 3C6.38172 3.66225 5.09883 4.67013 4.10854 5.93716C3.11824 7.2042 2.45011 8.69256 2.16146 10.2746C1.87281 11.8566 1.97225 13.485 2.45126 15.0201C2.93028 16.5552 3.77456 17.9512 4.91167 19.0883C6.04878 20.2254 7.44478 21.0697 8.9799 21.5487C10.515 22.0277 12.1434 22.1272 13.7254 21.8385C15.3074 21.5499 16.7958 20.8818 18.0628 19.8915C19.3299 18.9012 20.3377 17.6183 21 16.1529Z", "fill": "currentColor" } })]);
};
var staticRenderFns$2c = [];
render$2c._withStripped = true;
const __vue2_script$2g = {};
const __cssModules$2g = {};
var __component__$2g = /* @__PURE__ */ normalizeComponent(__vue2_script$2g, render$2c, staticRenderFns$2c, false, __vue2_injectStyles$2g, null, null, null);
function __vue2_injectStyles$2g(context) {
  for (let o2 in __cssModules$2g) {
    this[o2] = __cssModules$2g[o2];
  }
}
__component__$2g.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconMoon.vue";
var IconMoon = /* @__PURE__ */ function() {
  return __component__$2g.exports;
}();
var render$2b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "48", "height": "32", "viewBox": "0 0 48 32", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M26.3684 31.6843H43.8409C44.3958 31.6844 44.941 31.538 45.4216 31.2599C45.9022 30.9818 46.3013 30.5817 46.5787 30.1C46.856 29.6183 47.0019 29.0719 47.0017 28.5157C47.0014 27.9595 46.8551 27.4133 46.5773 26.9318L34.8432 6.56333C34.5659 6.08172 34.1669 5.68178 33.6864 5.40372C33.2059 5.12565 32.6608 4.97926 32.106 4.97926C31.5511 4.97926 31.006 5.12565 30.5255 5.40372C30.045 5.68178 29.6461 6.08172 29.3687 6.56333L26.3684 11.7749L20.5022 1.58384C20.2246 1.10227 19.8255 0.702392 19.3448 0.424376C18.8642 0.14636 18.319 0 17.7641 0C17.2091 0 16.664 0.14636 16.1833 0.424376C15.7027 0.702392 15.3035 1.10227 15.026 1.58384L0.424398 26.9318C0.146615 27.4133 0.000241764 27.9595 2.99232e-07 28.5157C-0.000241165 29.0719 0.145658 29.6183 0.423023 30.1C0.700388 30.5817 1.09944 30.9818 1.58004 31.2599C2.06064 31.538 2.60584 31.6844 3.16081 31.6843H14.1286C18.4742 31.6843 21.6788 29.7713 23.884 26.0393L29.2376 16.7476L32.1051 11.7749L40.7111 26.7116H29.2376L26.3684 31.6843ZM13.9498 26.7065L6.29568 26.7048L17.7692 6.79029L23.494 16.7476L19.661 23.4028C18.1966 25.8243 16.533 26.7065 13.9498 26.7065Z", "fill": "currentColor" } })]);
};
var staticRenderFns$2b = [];
render$2b._withStripped = true;
const __vue2_script$2f = {};
const __cssModules$2f = {};
var __component__$2f = /* @__PURE__ */ normalizeComponent(__vue2_script$2f, render$2b, staticRenderFns$2b, false, __vue2_injectStyles$2f, null, null, null);
function __vue2_injectStyles$2f(context) {
  for (let o2 in __cssModules$2f) {
    this[o2] = __cssModules$2f[o2];
  }
}
__component__$2f.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconNuxt.vue";
var IconNuxt = /* @__PURE__ */ function() {
  return __component__$2f.exports;
}();
var render$2a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 100 100", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M53.0214 38.137C55.1705 41.8324 52.4842 46.4516 48.1861 46.4516H21.5917C17.2936 46.4516 14.6073 41.8323 16.7564 38.137L30.0536 15.272C32.2026 11.5766 37.5752 11.5766 39.7242 15.272L53.0214 38.137Z", "fill": "#00CD81" } }), _c("path", { attrs: { "d": "M60.3763 68.7869C62.5253 65.0919 67.8979 65.0919 70.047 68.7869L83.3442 91.6497C85.4932 95.3447 82.8069 99.9634 78.5088 99.9634H51.9144C47.6164 99.9634 44.9301 95.3447 47.0791 91.6497L60.3763 68.7869Z", "fill": "#003E27" } }), _c("path", { attrs: { "d": "M70.047 31.1765C67.8979 34.8716 62.5253 34.8716 60.3763 31.1765L47.0791 8.31374C44.9301 4.6187 47.6164 0 51.9144 0H78.5088C82.8069 0 85.4932 4.6187 83.3442 8.31374L70.047 31.1765Z", "fill": "#99EBCD" } }), _c("path", { attrs: { "d": "M48.1861 55.0018C52.4842 55.0018 55.1705 59.621 53.0214 63.3164L39.7242 86.1814C37.5752 89.8769 32.2026 89.8767 30.0536 86.1814L16.7564 63.3164C14.6073 59.621 17.2936 55.0018 21.5917 55.0018H48.1861Z", "fill": "#007B4D" } })]);
};
var staticRenderFns$2a = [];
render$2a._withStripped = true;
const __vue2_script$2e = {};
const __cssModules$2e = {};
var __component__$2e = /* @__PURE__ */ normalizeComponent(__vue2_script$2e, render$2a, staticRenderFns$2a, false, __vue2_injectStyles$2e, null, null, null);
function __vue2_injectStyles$2e(context) {
  for (let o2 in __cssModules$2e) {
    this[o2] = __cssModules$2e[o2];
  }
}
__component__$2e.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconNuxtContent.vue";
var IconNuxtContent = /* @__PURE__ */ function() {
  return __component__$2e.exports;
}();
var render$29 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M5.28998 8.12497V8.32496V8.46247V11.9H7.59998V8.46247H9.9375V11.9H11.0092L11.0092 11.9H10.6562H10.6479H9.9375V12.5187V12.5198H9.93814L11.4677 15.1692L10.2027 17.3685C9.51725 18.5034 8.73855 18.9169 7.52946 18.9169L7.53344 18.9161H3.94681L7.60004 12.5669V11.9H5.29616L1.19865 19.0225C1.06863 19.2482 1.00011 19.5042 1 19.7649C0.999889 20.0256 1.06818 20.2817 1.19801 20.5074C1.32783 20.7332 1.51461 20.9207 1.73957 21.051C1.96452 21.1814 2.21971 21.25 2.47948 21.25H7.61315C9.64717 21.25 11.1472 20.3534 12.1793 18.6042L14.6852 14.2493L16.0274 11.9187L20.0556 18.9193H14.6852L13.3422 21.25H21.5205C21.7803 21.25 22.0355 21.1814 22.2604 21.051C22.4854 20.9207 22.6722 20.7332 22.802 20.5074C22.9318 20.2817 23.0001 20.0256 23 19.7649C22.9999 19.5042 22.9314 19.2482 22.8014 19.0225L17.309 9.4761C17.1792 9.25038 16.9925 9.06294 16.7675 8.93261C16.5426 8.80229 16.2875 8.73367 16.0278 8.73367C15.7681 8.73367 15.5129 8.80229 15.288 8.93261C15.0631 9.06294 14.8764 9.25038 14.7466 9.4761L13.4723 11.6925L13.4743 11.6937L12.8173 12.8317L12.275 11.8924V8.32496H12.275V8.12497C12.275 7.0204 11.3795 6.12497 10.275 6.12497H7.28998C6.18541 6.12497 5.28998 7.0204 5.28998 8.12497Z", "fill": "currentColor" } }), _c("ellipse", { attrs: { "cx": "9.71554", "cy": "4.26256", "rx": "0.825", "ry": "0.825", "transform": "rotate(-15.506 9.71554 4.26256)", "fill": "#00DC82" } }), _c("circle", { attrs: { "cx": "5.12499", "cy": "2.825", "r": "0.825", "fill": "#00DC82" } }), _c("circle", { attrs: { "cx": "8.00203", "cy": "2.95201", "r": "0.55", "transform": "rotate(-15.506 8.00203 2.95201)", "fill": "#00DC82" } }), _c("circle", { attrs: { "cx": "6.90205", "cy": "4.87702", "r": "0.55", "transform": "rotate(-15.506 6.90205 4.87702)", "fill": "#00DC82" } })]);
};
var staticRenderFns$29 = [];
render$29._withStripped = true;
const __vue2_script$2d = {};
const __cssModules$2d = {};
var __component__$2d = /* @__PURE__ */ normalizeComponent(__vue2_script$2d, render$29, staticRenderFns$29, false, __vue2_injectStyles$2d, null, null, null);
function __vue2_injectStyles$2d(context) {
  for (let o2 in __cssModules$2d) {
    this[o2] = __cssModules$2d[o2];
  }
}
__component__$2d.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconNuxtLabs.vue";
var IconNuxtLabs = /* @__PURE__ */ function() {
  return __component__$2d.exports;
}();
var render$28 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" } })]);
};
var staticRenderFns$28 = [];
render$28._withStripped = true;
const __vue2_script$2c = {};
const __cssModules$2c = {};
var __component__$2c = /* @__PURE__ */ normalizeComponent(__vue2_script$2c, render$28, staticRenderFns$28, false, __vue2_injectStyles$2c, null, null, null);
function __vue2_injectStyles$2c(context) {
  for (let o2 in __cssModules$2c) {
    this[o2] = __cssModules$2c[o2];
  }
}
__component__$2c.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconSearch.vue";
var IconSearch = /* @__PURE__ */ function() {
  return __component__$2c.exports;
}();
var render$27 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 24 24", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M12 2C12.3315 2 12.6495 2.1317 12.8839 2.36612C13.1183 2.60054 13.25 2.91848 13.25 3.25V4.5C13.25 4.83152 13.1183 5.14946 12.8839 5.38388C12.6495 5.6183 12.3315 5.75 12 5.75C11.6685 5.75 11.3505 5.6183 11.1161 5.38388C10.8817 5.14946 10.75 4.83152 10.75 4.5V3.25C10.75 2.91848 10.8817 2.60054 11.1161 2.36612C11.3505 2.1317 11.6685 2 12 2V2ZM17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12V12ZM16.42 18.1875L17.3038 19.0712C17.5395 19.2989 17.8553 19.4249 18.183 19.4221C18.5107 19.4192 18.8243 19.2878 19.056 19.056C19.2878 18.8243 19.4192 18.5107 19.4221 18.183C19.4249 17.8553 19.2989 17.5395 19.0712 17.3038L18.1875 16.42C17.9517 16.1923 17.636 16.0663 17.3082 16.0692C16.9805 16.072 16.667 16.2035 16.4352 16.4352C16.2035 16.667 16.072 16.9805 16.0692 17.3082C16.0663 17.636 16.1923 17.9517 16.42 18.1875V18.1875ZM19.07 4.92875C19.3043 5.16316 19.436 5.48105 19.436 5.8125C19.436 6.14396 19.3043 6.46184 19.07 6.69625L18.1875 7.58C18.0722 7.69939 17.9343 7.79462 17.7818 7.86013C17.6293 7.92564 17.4652 7.96012 17.2993 7.96156C17.1333 7.96301 16.9687 7.93138 16.8151 7.86853C16.6614 7.80568 16.5219 7.71286 16.4045 7.59549C16.2871 7.47813 16.1943 7.33856 16.1315 7.18494C16.0686 7.03132 16.037 6.86672 16.0384 6.70075C16.0399 6.53477 16.0744 6.37075 16.1399 6.21824C16.2054 6.06574 16.3006 5.92781 16.42 5.8125L17.3038 4.92875C17.5382 4.69441 17.856 4.56277 18.1875 4.56277C18.519 4.56277 18.8368 4.69441 19.0712 4.92875H19.07ZM20.75 13.25C21.0815 13.25 21.3995 13.1183 21.6339 12.8839C21.8683 12.6495 22 12.3315 22 12C22 11.6685 21.8683 11.3505 21.6339 11.1161C21.3995 10.8817 21.0815 10.75 20.75 10.75H19.5C19.1685 10.75 18.8505 10.8817 18.6161 11.1161C18.3817 11.3505 18.25 11.6685 18.25 12C18.25 12.3315 18.3817 12.6495 18.6161 12.8839C18.8505 13.1183 19.1685 13.25 19.5 13.25H20.75ZM12 18.25C12.3315 18.25 12.6495 18.3817 12.8839 18.6161C13.1183 18.8505 13.25 19.1685 13.25 19.5V20.75C13.25 21.0815 13.1183 21.3995 12.8839 21.6339C12.6495 21.8683 12.3315 22 12 22C11.6685 22 11.3505 21.8683 11.1161 21.6339C10.8817 21.3995 10.75 21.0815 10.75 20.75V19.5C10.75 19.1685 10.8817 18.8505 11.1161 18.6161C11.3505 18.3817 11.6685 18.25 12 18.25V18.25ZM5.8125 7.58C5.92856 7.69614 6.06635 7.78828 6.21802 7.85116C6.36968 7.91405 6.53225 7.94645 6.69643 7.9465C6.86062 7.94656 7.02321 7.91428 7.17492 7.8515C7.32663 7.78872 7.46449 7.69668 7.58062 7.58062C7.69676 7.46457 7.7889 7.32678 7.85179 7.17511C7.91467 7.02344 7.94707 6.86088 7.94713 6.69669C7.94719 6.53251 7.91491 6.36992 7.85213 6.21821C7.78935 6.0665 7.69731 5.92864 7.58125 5.8125L6.69625 4.92875C6.4605 4.70105 6.14474 4.57506 5.817 4.57791C5.48925 4.58076 5.17574 4.71222 4.94398 4.94398C4.71222 5.17574 4.58076 5.48925 4.57791 5.817C4.57506 6.14474 4.70105 6.4605 4.92875 6.69625L5.8125 7.58V7.58ZM7.58 18.1875L6.69625 19.0712C6.4605 19.2989 6.14474 19.4249 5.817 19.4221C5.48925 19.4192 5.17574 19.2878 4.94398 19.056C4.71222 18.8243 4.58076 18.5107 4.57791 18.183C4.57506 17.8553 4.70105 17.5395 4.92875 17.3038L5.8125 16.42C6.04825 16.1923 6.36401 16.0663 6.69175 16.0692C7.0195 16.072 7.33301 16.2035 7.56477 16.4352C7.79653 16.667 7.92799 16.9805 7.93084 17.3082C7.93369 17.636 7.8077 17.9517 7.58 18.1875V18.1875ZM4.5 13.25C4.83152 13.25 5.14946 13.1183 5.38388 12.8839C5.6183 12.6495 5.75 12.3315 5.75 12C5.75 11.6685 5.6183 11.3505 5.38388 11.1161C5.14946 10.8817 4.83152 10.75 4.5 10.75H3.25C2.91848 10.75 2.60054 10.8817 2.36612 11.1161C2.1317 11.3505 2 11.6685 2 12C2 12.3315 2.1317 12.6495 2.36612 12.8839C2.60054 13.1183 2.91848 13.25 3.25 13.25H4.5Z", "fill": "currentColor" } })]);
};
var staticRenderFns$27 = [];
render$27._withStripped = true;
const __vue2_script$2b = {};
const __cssModules$2b = {};
var __component__$2b = /* @__PURE__ */ normalizeComponent(__vue2_script$2b, render$27, staticRenderFns$27, false, __vue2_injectStyles$2b, null, null, null);
function __vue2_injectStyles$2b(context) {
  for (let o2 in __cssModules$2b) {
    this[o2] = __cssModules$2b[o2];
  }
}
__component__$2b.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconSun.vue";
var IconSun = /* @__PURE__ */ function() {
  return __component__$2b.exports;
}();
var render$26 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "stroke": "currentColor", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" } })]);
};
var staticRenderFns$26 = [];
render$26._withStripped = true;
const __vue2_script$2a = {};
const __cssModules$2a = {};
var __component__$2a = /* @__PURE__ */ normalizeComponent(__vue2_script$2a, render$26, staticRenderFns$26, false, __vue2_injectStyles$2a, null, null, null);
function __vue2_injectStyles$2a(context) {
  for (let o2 in __cssModules$2a) {
    this[o2] = __cssModules$2a[o2];
  }
}
__component__$2a.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconTranslate.vue";
var IconTranslate = /* @__PURE__ */ function() {
  return __component__$2a.exports;
}();
var render$25 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M22 5.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0021.5 4.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 00-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.165-6.5-1.814-8.5-4.288-.417.66-.584 1.32-.584 2.062 0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C6.667 17.608 4.917 18.268 3 18.268c-.333 0-.667 0-1-.082C3.833 19.34 6 20 8.25 20c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062z", "fill": "currentColor" } })]);
};
var staticRenderFns$25 = [];
render$25._withStripped = true;
const __vue2_script$29 = {};
const __cssModules$29 = {};
var __component__$29 = /* @__PURE__ */ normalizeComponent(__vue2_script$29, render$25, staticRenderFns$25, false, __vue2_injectStyles$29, null, null, null);
function __vue2_injectStyles$29(context) {
  for (let o2 in __cssModules$29) {
    this[o2] = __cssModules$29[o2];
  }
}
__component__$29.options.__file = "components/atoms/icons/IconTwitter.vue";
var IconTwitter = /* @__PURE__ */ function() {
  return __component__$29.exports;
}();
var render$24 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "40", "height": "40", "viewBox": "0 0 40 40", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M15.29 8.384l-.547 9.368a.436.436 0 00.53.455l3.29-.77a.437.437 0 01.522.516l-.977 4.856a.436.436 0 00.55.51l2.032-.627a.436.436 0 01.551.51l-1.553 7.628c-.097.478.529.738.79.329l.173-.274 9.627-19.495c.16-.327-.117-.7-.47-.63l-3.386.663a.438.438 0 01-.499-.554l.799-2.81 9.253-1.712c.721-.133 1.27.646.912 1.296l-15.963 28.97a.861.861 0 01-1.51.006L3.133 7.646c-.365-.648.182-1.434.906-1.303l11.25 2.04z", "fill": "currentColor" } })]);
};
var staticRenderFns$24 = [];
render$24._withStripped = true;
const __vue2_script$28 = {};
const __cssModules$28 = {};
var __component__$28 = /* @__PURE__ */ normalizeComponent(__vue2_script$28, render$24, staticRenderFns$24, false, __vue2_injectStyles$28, null, null, null);
function __vue2_injectStyles$28(context) {
  for (let o2 in __cssModules$28) {
    this[o2] = __cssModules$28[o2];
  }
}
__component__$28.options.__file = "components/atoms/icons/IconVite.vue";
var IconVite = /* @__PURE__ */ function() {
  return __component__$28.exports;
}();
var render$23 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "26", "height": "26", "viewBox": "0 0 26 26", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M0 2L13 24L26 2H16L13 7.3L10 2H0ZM3.5 4H7.271L13 14L18.729 4H22.5L13 20.1L3.5 4Z", "fill": "currentColor" } })]);
};
var staticRenderFns$23 = [];
render$23._withStripped = true;
const __vue2_script$27 = {};
const __cssModules$27 = {};
var __component__$27 = /* @__PURE__ */ normalizeComponent(__vue2_script$27, render$23, staticRenderFns$23, false, __vue2_injectStyles$27, null, null, null);
function __vue2_injectStyles$27(context) {
  for (let o2 in __cssModules$27) {
    this[o2] = __cssModules$27[o2];
  }
}
__component__$27.options.__file = "components/atoms/icons/IconVue.vue";
var IconVue = /* @__PURE__ */ function() {
  return __component__$27.exports;
}();
var render$22 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 128 128", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M67.0788 31.5813C67.0788 21.8864 59.1923 14 49.4975 14C39.2803 14 33.1721 21.6604 33.1721 29.0696H43.2185C43.2185 26.985 45.1675 24.0464 49.4975 24.0464C53.6517 24.0464 57.0323 27.4271 57.0323 31.5813C57.0323 35.7355 54 39.1161 46.3533 39.1161H19V49.1625H46.3533C59.259 49.1625 67.0788 41.2761 67.0788 31.5813ZM67.0788 31.5813C67.0788 21.8864 59.1923 14 49.4975 14C39.2803 14 33.1721 21.6604 33.1721 29.0696H43.2185C43.2185 26.985 45.1675 24.0464 49.4975 24.0464C53.6517 24.0464 57.0323 27.4271 57.0323 31.5813C57.0323 35.7355 54 39.1161 46.3533 39.1161H19V49.1625H46.3533C59.259 49.1625 67.0788 41.2761 67.0788 31.5813Z", "fill": "#42A4EF" } }), _c("path", { attrs: { "d": "M89.3666 96.4187C89.3666 106.114 81.4801 114 71.7853 114C61.5681 114 55.4598 106.34 55.4598 98.9304H65.5063C65.5063 101.015 67.4553 103.954 71.7853 103.954C75.9395 103.954 79.3201 100.573 79.3201 96.4187C79.3201 92.2645 75.4999 88.8839 68.6411 88.8839H38.2878V78.8375H68.6411C81.5468 78.8375 89.3666 86.7239 89.3666 96.4187ZM89.3666 96.4187C89.3666 106.114 81.4801 114 71.7853 114C61.5681 114 55.4598 106.34 55.4598 98.9304H65.5063C65.5063 101.015 67.4553 103.954 71.7853 103.954C75.9395 103.954 79.3201 100.573 79.3201 96.4187C79.3201 92.2645 75.4999 88.8839 68.6411 88.8839H38.2878V78.8375H68.6411C81.5468 78.8375 89.3666 86.7239 89.3666 96.4187Z", "fill": "#42A4EF" } }), _c("path", { attrs: { "d": "M92 29.5C80.9188 29.5 73.102 37.9269 73.102 49.0081H82C82 43.5 86 39.5 92 39.5C98 39.5 101 43.5 101 49.0081C101 54.5162 97.1036 59.0545 86.5 59.0545H19V69.101H88C103.703 69.101 111 59.0081 111 49.0081C111 37.9269 103.5 29.5 92 29.5Z", "fill": "#42A4EF" } }), _c("path", { attrs: { "d": "M32.1701 78.8375H19V88.9683H32.1701V78.8375Z", "fill": "#42A4EF" } })]);
};
var staticRenderFns$22 = [];
render$22._withStripped = true;
const __vue2_script$26 = {};
const __cssModules$26 = {};
var __component__$26 = /* @__PURE__ */ normalizeComponent(__vue2_script$26, render$22, staticRenderFns$22, false, __vue2_injectStyles$26, null, null, null);
function __vue2_injectStyles$26(context) {
  for (let o2 in __cssModules$26) {
    this[o2] = __cssModules$26[o2];
  }
}
__component__$26.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconWindi.vue";
var IconWindi = /* @__PURE__ */ function() {
  return __component__$26.exports;
}();
var render$21 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M6 18L18 6M6 6l12 12" } })]);
};
var staticRenderFns$21 = [];
render$21._withStripped = true;
const __vue2_script$25 = {};
const __cssModules$25 = {};
var __component__$25 = /* @__PURE__ */ normalizeComponent(__vue2_script$25, render$21, staticRenderFns$21, false, __vue2_injectStyles$25, null, null, null);
function __vue2_injectStyles$25(context) {
  for (let o2 in __cssModules$25) {
    this[o2] = __cssModules$25[o2];
  }
}
__component__$25.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconX.vue";
var IconX = /* @__PURE__ */ function() {
  return __component__$25.exports;
}();
var render$20 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "d": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" } })]);
};
var staticRenderFns$20 = [];
render$20._withStripped = true;
const __vue2_script$24 = {};
const __cssModules$24 = {};
var __component__$24 = /* @__PURE__ */ normalizeComponent(__vue2_script$24, render$20, staticRenderFns$20, false, __vue2_injectStyles$24, null, null, null);
function __vue2_injectStyles$24(context) {
  for (let o2 in __cssModules$24) {
    this[o2] = __cssModules$24[o2];
  }
}
__component__$24.options.__file = "node_modules/@docus/theme/dist/components/atoms/icons/IconXCircle.vue";
var IconXCircle = /* @__PURE__ */ function() {
  return __component__$24.exports;
}();
const globalNuxt = "$nuxt";
function isObject$2(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject$2(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject$2(val) && isObject$2(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend$2(merger) {
  return (...args) => args.reduce((p2, c2) => _defu(p2, c2, "", merger), {});
}
const defu = extend$2();
defu.fn = extend$2((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend$2((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend$2;
function getCurrentInstance() {
  const vm = CompositionApi.getCurrentInstance();
  if (!vm)
    return;
  return vm.proxy;
}
let globalRefs = {};
function setSSRContext(app) {
  globalRefs = Object.assign({}, {});
  app.context.ssrContext.nuxt.globalRefs = globalRefs;
}
const getHeadOptions = (options2) => {
  const head = function() {
    const optionHead = options2.head instanceof Function ? options2.head.call(this) : options2.head;
    if (!this._computedHead)
      return optionHead;
    const computedHead = this._computedHead.map((h2) => {
      if (CompositionApi.isReactive(h2))
        return CompositionApi.toRaw(h2);
      if (CompositionApi.isRef(h2))
        return h2.value;
      return h2;
    });
    return defu({}, ...computedHead.reverse(), optionHead);
  };
  return { head };
};
const defineComponent$2 = (options2) => {
  if (!("head" in options2))
    return options2;
  return __spreadValues(__spreadValues({}, options2), getHeadOptions(options2));
};
const useContext = () => {
  const vm = getCurrentInstance();
  if (!vm)
    throw new Error("This must be called within a setup function.");
  return __spreadProps(__spreadValues({}, (vm[globalNuxt] || vm.$options).context), {
    route: CompositionApi.computed(() => vm.$route),
    query: CompositionApi.computed(() => vm.$route.query),
    from: CompositionApi.computed(() => (vm[globalNuxt] || vm.$options).context.from),
    params: CompositionApi.computed(() => vm.$route.params)
  });
};
const defineNuxtPlugin = (plugin2) => plugin2;
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === "string")) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e2) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return __spreadProps(__spreadValues({}, err), {
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  });
}
function createGetCounter(counterObject, defaultKey = "") {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === void 0) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
const fetches = new WeakMap();
const fetchPromises = new Map();
function registerCallback(vm, callback) {
  const callbacks = fetches.get(vm) || [];
  fetches.set(vm, [...callbacks, callback]);
}
async function callFetches() {
  const fetchesToCall = fetches.get(this);
  if (!fetchesToCall)
    return;
  this[globalNuxt].nbFetching++;
  this.$fetchState.pending = true;
  this.$fetchState.error = null;
  this._hydrated = false;
  let error2 = null;
  const startTime = Date.now();
  try {
    await Promise.all(fetchesToCall.map((fetch2) => {
      if (fetchPromises.has(fetch2))
        return fetchPromises.get(fetch2);
      const promise = Promise.resolve(fetch2(this)).finally(() => fetchPromises.delete(fetch2));
      fetchPromises.set(fetch2, promise);
      return promise;
    }));
  } catch (err) {
    {
      console.error("Error in fetch():", err);
    }
    error2 = normalizeError(err);
  }
  const delayLeft = (this._fetchDelay || 0) - (Date.now() - startTime);
  if (delayLeft > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayLeft));
  }
  this.$fetchState.error = error2;
  this.$fetchState.pending = false;
  this.$fetchState.timestamp = Date.now();
  this.$nextTick(() => this[globalNuxt].nbFetching--);
}
const setFetchState = (vm) => {
  vm.$fetchState = vm.$fetchState || CompositionApi.reactive({
    error: null,
    pending: false,
    timestamp: 0
  });
};
async function serverPrefetch(vm) {
  if (!vm._fetchOnServer)
    return;
  setFetchState(vm);
  try {
    await callFetches.call(vm);
  } catch (err) {
    {
      console.error("Error in fetch():", err);
    }
    vm.$fetchState.error = normalizeError(err);
  }
  vm.$fetchState.pending = false;
  vm._fetchKey = "push" in vm.$ssrContext.nuxt.fetch ? vm.$ssrContext.nuxt.fetch.length : vm._fetchKey || vm.$ssrContext.fetchCounters[""]++;
  if (!vm.$vnode.data)
    vm.$vnode.data = {};
  const attrs = vm.$vnode.data.attrs = vm.$vnode.data.attrs || {};
  attrs["data-fetch-key"] = vm._fetchKey;
  const data2 = __spreadValues({}, vm._data);
  Object.entries(vm.__composition_api_state__.rawBindings).forEach(([key, val]) => {
    if (val instanceof Function || val instanceof Promise)
      return;
    data2[key] = CompositionApi.isRef(val) ? val.value : val;
  });
  const content = vm.$fetchState.error ? { _error: vm.$fetchState.error } : JSON.parse(JSON.stringify(data2));
  if ("push" in vm.$ssrContext.nuxt.fetch) {
    vm.$ssrContext.nuxt.fetch.push(content);
  } else {
    vm.$ssrContext.nuxt.fetch[vm._fetchKey] = content;
  }
}
function getKey(vm) {
  vm[globalNuxt];
  if ("push" in vm.$ssrContext.nuxt.fetch) {
    return void 0;
  }
  const defaultKey = vm.$options._scopeId || vm.$options.name || "";
  const getCounter = createGetCounter(vm.$ssrContext.fetchCounters, defaultKey);
  const options2 = vm.$options;
  if (typeof options2.fetchKey === "function") {
    return options2.fetchKey.call(vm, getCounter);
  } else {
    const key = typeof options2.fetchKey === "string" ? options2.fetchKey : defaultKey;
    return key ? key + ":" + getCounter(key) : String(getCounter(key));
  }
}
const useFetch = (callback) => {
  const vm = getCurrentInstance();
  if (!vm)
    throw new Error("This must be called within a setup function.");
  registerCallback(vm, callback);
  if (typeof vm.$options.fetchOnServer === "function") {
    vm._fetchOnServer = vm.$options.fetchOnServer.call(vm) !== false;
  } else {
    vm._fetchOnServer = vm.$options.fetchOnServer !== false;
  }
  {
    vm._fetchKey = getKey(vm);
  }
  setFetchState(vm);
  CompositionApi.onServerPrefetch(() => serverPrefetch(vm));
  function result() {
    return {
      fetch: vm.$fetch,
      fetchState: vm.$fetchState,
      $fetch: vm.$fetch,
      $fetchState: vm.$fetchState
    };
  }
  vm._fetchDelay = typeof vm.$options.fetchDelay === "number" ? vm.$options.fetchDelay : 0;
  vm.$fetch = callFetches.bind(vm);
  CompositionApi.onBeforeMount(() => !vm._hydrated && callFetches.call(vm));
  {
    return result();
  }
};
const reqRefs = new Set();
let globalSetup;
const setMetaPlugin = (context) => {
  const { head } = context.app;
  Object.assign(context.app, getHeadOptions({ head }));
};
const globalPlugin = (context) => {
  {
    reqRefs.forEach((reset) => reset());
    setSSRContext(context.app);
  }
  const { setup } = context.app;
  globalSetup = new Set();
  context.app.setup = function(...args) {
    let result = {};
    if (setup instanceof Function) {
      result = setup(...args) || {};
    }
    for (const fn2 of globalSetup) {
      result = __spreadValues(__spreadValues({}, result), fn2.call(this, ...args) || {});
    }
    return result;
  };
};
const wrapProperty = (property, makeComputed) => {
  return () => {
    const vm = getCurrentInstance();
    if (!vm)
      throw new Error("This must be called within a setup function.");
    return makeComputed !== false ? CompositionApi.computed(() => vm[property]) : vm[property];
  };
};
const useRoute = wrapProperty("$route");
var render$1$ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Link", { attrs: { "to": _vm.href, "blank": _vm.blank, "static": _vm.static } }, [_vm._t("default")], 2);
};
var staticRenderFns$1$ = [];
render$1$._withStripped = true;
var ProseA_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$23 = defineComponent$2({
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    },
    static: {
      type: Boolean,
      default: false
    }
  }
});
const __cssModules$23 = {};
var __component__$23 = /* @__PURE__ */ normalizeComponent(__vue2_script$23, render$1$, staticRenderFns$1$, false, __vue2_injectStyles$23, "ce37bfd2", null, null);
function __vue2_injectStyles$23(context) {
  for (let o2 in __cssModules$23) {
    this[o2] = __cssModules$23[o2];
  }
}
__component__$23.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseA.vue";
var ProseA = /* @__PURE__ */ function() {
  return __component__$23.exports;
}();
var render$1_ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("blockquote", [_vm._t("default")], 2);
};
var staticRenderFns$1_ = [];
render$1_._withStripped = true;
var ProseBlockquote_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$22 = {};
const __cssModules$22 = {};
var __component__$22 = /* @__PURE__ */ normalizeComponent(__vue2_script$22, render$1_, staticRenderFns$1_, false, __vue2_injectStyles$22, "bd756d6e", null, null);
function __vue2_injectStyles$22(context) {
  for (let o2 in __cssModules$22) {
    this[o2] = __cssModules$22[o2];
  }
}
__component__$22.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseBlockquote.vue";
var ProseBlockquote = /* @__PURE__ */ function() {
  return __component__$22.exports;
}();
var render$1Z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "docus-highlight group" }, [_vm._t("default"), _c("CopyButton", { staticClass: "copy-button opacity-0 transition-all duration-300" })], 2);
};
var staticRenderFns$1Z = [];
render$1Z._withStripped = true;
var ProseCode_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$21 = {};
const __cssModules$21 = {};
var __component__$21 = /* @__PURE__ */ normalizeComponent(__vue2_script$21, render$1Z, staticRenderFns$1Z, false, __vue2_injectStyles$21, "39b9cfa7", null, null);
function __vue2_injectStyles$21(context) {
  for (let o2 in __cssModules$21) {
    this[o2] = __cssModules$21[o2];
  }
}
__component__$21.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseCode.vue";
var ProseCode = /* @__PURE__ */ function() {
  return __component__$21.exports;
}();
var render$1Y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("code", [_vm._t("default")], 2);
};
var staticRenderFns$1Y = [];
render$1Y._withStripped = true;
var ProseCodeInline_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$20 = {};
const __cssModules$20 = {};
var __component__$20 = /* @__PURE__ */ normalizeComponent(__vue2_script$20, render$1Y, staticRenderFns$1Y, false, __vue2_injectStyles$20, "06b812a0", null, null);
function __vue2_injectStyles$20(context) {
  for (let o2 in __cssModules$20) {
    this[o2] = __cssModules$20[o2];
  }
}
__component__$20.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseCodeInline.vue";
var ProseCodeInline = /* @__PURE__ */ function() {
  return __component__$20.exports;
}();
var render$1X = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("em", [_vm._t("default")], 2);
};
var staticRenderFns$1X = [];
render$1X._withStripped = true;
var ProseEm_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1$ = {};
const __cssModules$1$ = {};
var __component__$1$ = /* @__PURE__ */ normalizeComponent(__vue2_script$1$, render$1X, staticRenderFns$1X, false, __vue2_injectStyles$1$, "e46b4d3c", null, null);
function __vue2_injectStyles$1$(context) {
  for (let o2 in __cssModules$1$) {
    this[o2] = __cssModules$1$[o2];
  }
}
__component__$1$.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseEm.vue";
var ProseEm = /* @__PURE__ */ function() {
  return __component__$1$.exports;
}();
var render$1W = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("h1", [_vm._t("default")], 2);
};
var staticRenderFns$1W = [];
render$1W._withStripped = true;
var ProseH1_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1_ = {};
const __cssModules$1_ = {};
var __component__$1_ = /* @__PURE__ */ normalizeComponent(__vue2_script$1_, render$1W, staticRenderFns$1W, false, __vue2_injectStyles$1_, "e0c93dfa", null, null);
function __vue2_injectStyles$1_(context) {
  for (let o2 in __cssModules$1_) {
    this[o2] = __cssModules$1_[o2];
  }
}
__component__$1_.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseH1.vue";
var ProseH1 = /* @__PURE__ */ function() {
  return __component__$1_.exports;
}();
var render$1V = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("h2", [_vm._t("default")], 2);
};
var staticRenderFns$1V = [];
render$1V._withStripped = true;
var ProseH2_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1Z = {};
const __cssModules$1Z = {};
var __component__$1Z = /* @__PURE__ */ normalizeComponent(__vue2_script$1Z, render$1V, staticRenderFns$1V, false, __vue2_injectStyles$1Z, "e0ad0ef8", null, null);
function __vue2_injectStyles$1Z(context) {
  for (let o2 in __cssModules$1Z) {
    this[o2] = __cssModules$1Z[o2];
  }
}
__component__$1Z.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseH2.vue";
var ProseH2 = /* @__PURE__ */ function() {
  return __component__$1Z.exports;
}();
var render$1U = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("h3", [_vm._t("default")], 2);
};
var staticRenderFns$1U = [];
render$1U._withStripped = true;
var ProseH3_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1Y = {};
const __cssModules$1Y = {};
var __component__$1Y = /* @__PURE__ */ normalizeComponent(__vue2_script$1Y, render$1U, staticRenderFns$1U, false, __vue2_injectStyles$1Y, "e090dff6", null, null);
function __vue2_injectStyles$1Y(context) {
  for (let o2 in __cssModules$1Y) {
    this[o2] = __cssModules$1Y[o2];
  }
}
__component__$1Y.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseH3.vue";
var ProseH3 = /* @__PURE__ */ function() {
  return __component__$1Y.exports;
}();
var render$1T = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("h4", [_vm._t("default")], 2);
};
var staticRenderFns$1T = [];
render$1T._withStripped = true;
var ProseH4_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1X = {};
const __cssModules$1X = {};
var __component__$1X = /* @__PURE__ */ normalizeComponent(__vue2_script$1X, render$1T, staticRenderFns$1T, false, __vue2_injectStyles$1X, "e074b0f4", null, null);
function __vue2_injectStyles$1X(context) {
  for (let o2 in __cssModules$1X) {
    this[o2] = __cssModules$1X[o2];
  }
}
__component__$1X.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseH4.vue";
var ProseH4 = /* @__PURE__ */ function() {
  return __component__$1X.exports;
}();
var render$1S = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("hr");
};
var staticRenderFns$1S = [];
render$1S._withStripped = true;
var ProseHr_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1W = {};
const __cssModules$1W = {};
var __component__$1W = /* @__PURE__ */ normalizeComponent(__vue2_script$1W, render$1S, staticRenderFns$1S, false, __vue2_injectStyles$1W, "d9a14e78", null, null);
function __vue2_injectStyles$1W(context) {
  for (let o2 in __cssModules$1W) {
    this[o2] = __cssModules$1W[o2];
  }
}
__component__$1W.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseHr.vue";
var ProseHr = /* @__PURE__ */ function() {
  return __component__$1W.exports;
}();
var render$1R = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("NuxtImg", { attrs: { "src": _vm.src, "alt": _vm.alt, "width": _vm.width, "height": _vm.height } });
};
var staticRenderFns$1R = [];
render$1R._withStripped = true;
var ProseImg_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1V = {
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  }
};
const __cssModules$1V = {};
var __component__$1V = /* @__PURE__ */ normalizeComponent(__vue2_script$1V, render$1R, staticRenderFns$1R, false, __vue2_injectStyles$1V, "021c46f9", null, null);
function __vue2_injectStyles$1V(context) {
  for (let o2 in __cssModules$1V) {
    this[o2] = __cssModules$1V[o2];
  }
}
__component__$1V.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseImg.vue";
var ProseImg = /* @__PURE__ */ function() {
  return __component__$1V.exports;
}();
var render$1Q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", [_vm._t("default")], 2);
};
var staticRenderFns$1Q = [];
render$1Q._withStripped = true;
var ProseLi_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1U = {};
const __cssModules$1U = {};
var __component__$1U = /* @__PURE__ */ normalizeComponent(__vue2_script$1U, render$1Q, staticRenderFns$1Q, false, __vue2_injectStyles$1U, "ccf83092", null, null);
function __vue2_injectStyles$1U(context) {
  for (let o2 in __cssModules$1U) {
    this[o2] = __cssModules$1U[o2];
  }
}
__component__$1U.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseLi.vue";
var ProseLi = /* @__PURE__ */ function() {
  return __component__$1U.exports;
}();
var render$1P = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ol", [_vm._t("default")], 2);
};
var staticRenderFns$1P = [];
render$1P._withStripped = true;
var ProseOl_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1T = {};
const __cssModules$1T = {};
var __component__$1T = /* @__PURE__ */ normalizeComponent(__vue2_script$1T, render$1P, staticRenderFns$1P, false, __vue2_injectStyles$1T, "c2668fd2", null, null);
function __vue2_injectStyles$1T(context) {
  for (let o2 in __cssModules$1T) {
    this[o2] = __cssModules$1T[o2];
  }
}
__component__$1T.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseOl.vue";
var ProseOl = /* @__PURE__ */ function() {
  return __component__$1T.exports;
}();
var render$1O = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", [_vm._t("default")], 2);
};
var staticRenderFns$1O = [];
render$1O._withStripped = true;
var ProseParagraph_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1S = {};
const __cssModules$1S = {};
var __component__$1S = /* @__PURE__ */ normalizeComponent(__vue2_script$1S, render$1O, staticRenderFns$1O, false, __vue2_injectStyles$1S, "aeb3c6b8", null, null);
function __vue2_injectStyles$1S(context) {
  for (let o2 in __cssModules$1S) {
    this[o2] = __cssModules$1S[o2];
  }
}
__component__$1S.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseParagraph.vue";
var ProseParagraph = /* @__PURE__ */ function() {
  return __component__$1S.exports;
}();
var render$1N = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("strong", [_vm._t("default")], 2);
};
var staticRenderFns$1N = [];
render$1N._withStripped = true;
var ProseStrong_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1R = {};
const __cssModules$1R = {};
var __component__$1R = /* @__PURE__ */ normalizeComponent(__vue2_script$1R, render$1N, staticRenderFns$1N, false, __vue2_injectStyles$1R, "080352d1", null, null);
function __vue2_injectStyles$1R(context) {
  for (let o2 in __cssModules$1R) {
    this[o2] = __cssModules$1R[o2];
  }
}
__component__$1R.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseStrong.vue";
var ProseStrong = /* @__PURE__ */ function() {
  return __component__$1R.exports;
}();
var render$1M = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "max-w-full my-6 overflow-x-auto" }, [_c("table", [_vm._t("default")], 2)]);
};
var staticRenderFns$1M = [];
render$1M._withStripped = true;
var ProseTable_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1Q = {};
const __cssModules$1Q = {};
var __component__$1Q = /* @__PURE__ */ normalizeComponent(__vue2_script$1Q, render$1M, staticRenderFns$1M, false, __vue2_injectStyles$1Q, "667243f8", null, null);
function __vue2_injectStyles$1Q(context) {
  for (let o2 in __cssModules$1Q) {
    this[o2] = __cssModules$1Q[o2];
  }
}
__component__$1Q.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseTable.vue";
var ProseTable = /* @__PURE__ */ function() {
  return __component__$1Q.exports;
}();
var render$1L = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("tbody", [_vm._t("default")], 2);
};
var staticRenderFns$1L = [];
render$1L._withStripped = true;
const __vue2_script$1P = {};
const __cssModules$1P = {};
var __component__$1P = /* @__PURE__ */ normalizeComponent(__vue2_script$1P, render$1L, staticRenderFns$1L, false, __vue2_injectStyles$1P, null, null, null);
function __vue2_injectStyles$1P(context) {
  for (let o2 in __cssModules$1P) {
    this[o2] = __cssModules$1P[o2];
  }
}
__component__$1P.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseTbody.vue";
var ProseTbody = /* @__PURE__ */ function() {
  return __component__$1P.exports;
}();
var render$1K = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("td", [_vm._t("default")], 2);
};
var staticRenderFns$1K = [];
render$1K._withStripped = true;
var ProseTd_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1O = {};
const __cssModules$1O = {};
var __component__$1O = /* @__PURE__ */ normalizeComponent(__vue2_script$1O, render$1K, staticRenderFns$1K, false, __vue2_injectStyles$1O, "b23791ac", null, null);
function __vue2_injectStyles$1O(context) {
  for (let o2 in __cssModules$1O) {
    this[o2] = __cssModules$1O[o2];
  }
}
__component__$1O.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseTd.vue";
var ProseTd = /* @__PURE__ */ function() {
  return __component__$1O.exports;
}();
var render$1J = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("th", [_vm._t("default")], 2);
};
var staticRenderFns$1J = [];
render$1J._withStripped = true;
var ProseTh_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1N = {};
const __cssModules$1N = {};
var __component__$1N = /* @__PURE__ */ normalizeComponent(__vue2_script$1N, render$1J, staticRenderFns$1J, false, __vue2_injectStyles$1N, "b1c6d5a4", null, null);
function __vue2_injectStyles$1N(context) {
  for (let o2 in __cssModules$1N) {
    this[o2] = __cssModules$1N[o2];
  }
}
__component__$1N.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseTh.vue";
var ProseTh = /* @__PURE__ */ function() {
  return __component__$1N.exports;
}();
var render$1I = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("thead", [_vm._t("default")], 2);
};
var staticRenderFns$1I = [];
render$1I._withStripped = true;
var ProseThead_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1M = {};
const __cssModules$1M = {};
var __component__$1M = /* @__PURE__ */ normalizeComponent(__vue2_script$1M, render$1I, staticRenderFns$1I, false, __vue2_injectStyles$1M, "2fce638a", null, null);
function __vue2_injectStyles$1M(context) {
  for (let o2 in __cssModules$1M) {
    this[o2] = __cssModules$1M[o2];
  }
}
__component__$1M.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseThead.vue";
var ProseThead = /* @__PURE__ */ function() {
  return __component__$1M.exports;
}();
var render$1H = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("tr", [_vm._t("default")], 2);
};
var staticRenderFns$1H = [];
render$1H._withStripped = true;
var ProseTr_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1L = {};
const __cssModules$1L = {};
var __component__$1L = /* @__PURE__ */ normalizeComponent(__vue2_script$1L, render$1H, staticRenderFns$1H, false, __vue2_injectStyles$1L, "b0acff90", null, null);
function __vue2_injectStyles$1L(context) {
  for (let o2 in __cssModules$1L) {
    this[o2] = __cssModules$1L[o2];
  }
}
__component__$1L.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseTr.vue";
var ProseTr = /* @__PURE__ */ function() {
  return __component__$1L.exports;
}();
var render$1G = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ul", [_vm._t("default")], 2);
};
var staticRenderFns$1G = [];
render$1G._withStripped = true;
var ProseUl_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1K = {};
const __cssModules$1K = {};
var __component__$1K = /* @__PURE__ */ normalizeComponent(__vue2_script$1K, render$1G, staticRenderFns$1G, false, __vue2_injectStyles$1K, "adec685e", null, null);
function __vue2_injectStyles$1K(context) {
  for (let o2 in __cssModules$1K) {
    this[o2] = __cssModules$1K[o2];
  }
}
__component__$1K.options.__file = "node_modules/@docus/theme/dist/components/atoms/prose/ProseUl.vue";
var ProseUl = /* @__PURE__ */ function() {
  return __component__$1K.exports;
}();
var __vue2_script$1J = defineComponent$2({
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { $docus, $menu } = useContext();
    const mobileMainNav = CompositionApi.ref(!$docus.layout.value.aside);
    CompositionApi.watch($menu.visible, (value, old) => {
      if (value && !old && $docus.layout.value.aside) {
        mobileMainNav.value = false;
      }
    });
    function mobileBack() {
      if (!mobileMainNav.value) {
        mobileMainNav.value = true;
      } else {
        $menu.close();
      }
    }
    return {
      mobileMainNav,
      mobileBack,
      layout: $docus.layout
    };
  }
});
var render$1F = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("aside", { staticClass: "fixed z-50 lg:z-0 lg:static" }, [_c("div", { staticClass: "h-full overflow-auto pointer-events-none lg:overflow-visible" }, [_c("Transition", { attrs: { "name": "fade" } }, [_vm.$menu.visible.value ? _c("div", { staticClass: "fixed top-0 left-0 z-0 w-full h-full pointer-events-auto d-bg-header d-blur-header lg:hidden", on: { "click": function($event) {
    $event.stopPropagation();
    return _vm.$menu.toggle.apply(null, arguments);
  } } }) : _vm._e()]), _c("div", { staticClass: "\n        hidden\n        lg:block\n        fixed\n        top-0\n        left-0\n        overflow-auto\n        pointer-events-auto\n        min-h-fill-available\n        h-screen\n        sticky\n        top-header\n        w-60\n      " }, [_c("div", { staticClass: "w-auto h-full overflow-auto" }, [_c("AsideNavigation")], 1)]), _c("Transition", { attrs: { "name": "slide-from-left-to-left" } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.$menu.visible.value, expression: "$menu.visible.value" }], staticClass: "\n          lg:hidden\n          fixed\n          top-0\n          left-0\n          w-auto\n          h-full\n          overflow-auto\n          pointer-events-auto\n          min-h-fill-available\n          border-r\n          dark:border-sky-darker\n          !w-base\n        " }, [_c("div", { staticClass: "w-auto h-full overflow-auto d-bg-header" }, [_c("div", { staticClass: "flex items-center justify-between w-full px-0.5 sm:px-2 h-header d-aside-header-bg" }, [_c("button", { staticClass: "transition-colors duration-200 d-secondary-text hover:d-secondary-text-hover focus:outline-none", attrs: { "aria-label": "backButton" }, on: { "click": function($event) {
    $event.stopPropagation();
    return _vm.mobileBack.apply(null, arguments);
  } } }, [!_vm.mobileMainNav && _vm.layout.aside ? _c("IconArrowLeft", { staticClass: "p-3 w-12 h-12" }) : _c("IconClose", { staticClass: "p-3 w-12 h-12" })], 1), _c("div", { staticClass: "flex items-center h-header space-x-1" }, [_c("GitHubButton"), _c("TwitterButton"), _c("ColorSwitcher", { attrs: { "padding": "p-3" } })], 1)]), !_vm.mobileMainNav && _vm.layout.aside ? _c("AsideNavigation") : _c("AsideHeaderNavigation", { attrs: { "links": _vm.links } })], 1)])])], 1)]);
};
var staticRenderFns$1F = [];
render$1F._withStripped = true;
const __cssModules$1J = {};
var __component__$1J = /* @__PURE__ */ normalizeComponent(__vue2_script$1J, render$1F, staticRenderFns$1F, false, __vue2_injectStyles$1J, null, null, null);
function __vue2_injectStyles$1J(context) {
  for (let o2 in __cssModules$1J) {
    this[o2] = __cssModules$1J[o2];
  }
}
__component__$1J.options.__file = "components/app/AppAside.vue";
var AppAside = /* @__PURE__ */ function() {
  return __component__$1J.exports;
}();
var render$1E = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "w-full h-8 bg-primary-500" });
};
var staticRenderFns$1E = [];
render$1E._withStripped = true;
const __vue2_script$1I = {};
const __cssModules$1I = {};
var __component__$1I = /* @__PURE__ */ normalizeComponent(__vue2_script$1I, render$1E, staticRenderFns$1E, false, __vue2_injectStyles$1I, null, null, null);
function __vue2_injectStyles$1I(context) {
  for (let o2 in __cssModules$1I) {
    this[o2] = __cssModules$1I[o2];
  }
}
__component__$1I.options.__file = "node_modules/@docus/theme/dist/components/organisms/app/AppBanner.vue";
var AppBanner = /* @__PURE__ */ function() {
  return __component__$1I.exports;
}();
var render$1D = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("footer", { staticClass: "bg-cloud-surface dark:bg-sky-black text-center border-t dark:border-t-sky-darkest" }, [_c("div", { staticClass: "d-container mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8" }, [_c("div", { staticClass: "flex justify-center space-x-3 md:order-2" }, [_c("a", { staticClass: "footer-link", attrs: { "href": "https://twitter.com/nuxt_js", "target": "_blank", "rel": "noopener" } }, [_c("span", { staticClass: "sr-only" }, [_vm._v("Twitter")]), _c("svg", { staticClass: "h-6 w-6", attrs: { "fill": "currentColor", "viewBox": "0 0 24 24", "aria-hidden": "true" } }, [_c("path", { attrs: { "d": "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" } })])]), _c("a", { staticClass: "footer-link", attrs: { "href": "https://github.com/nuxt/framework", "target": "_blank", "rel": "noopener" } }, [_c("span", { staticClass: "sr-only" }, [_vm._v("GitHub")]), _c("svg", { staticClass: "h-6 w-6", attrs: { "fill": "currentColor", "viewBox": "0 0 24 24", "aria-hidden": "true" } }, [_c("path", { attrs: { "fill-rule": "evenodd", "d": "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", "clip-rule": "evenodd" } })])])]), _c("div", { staticClass: "mt-3 md:mt-0 md:order-1" }, [_c("p", { staticClass: "text-center text-base" }, [_c("a", { staticClass: "inline-flex items-center gap-1 font-medium hover:underline", attrs: { "href": "https://nuxtjs.org" } }, [_vm._v("Nuxt 2 documentation "), _c("IconArrowRight")], 1)])])])]);
};
var staticRenderFns$1D = [];
render$1D._withStripped = true;
var AppFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1H = {};
const __cssModules$1H = {};
var __component__$1H = /* @__PURE__ */ normalizeComponent(__vue2_script$1H, render$1D, staticRenderFns$1D, false, __vue2_injectStyles$1H, "0aa13063", null, null);
function __vue2_injectStyles$1H(context) {
  for (let o2 in __cssModules$1H) {
    this[o2] = __cssModules$1H[o2];
  }
}
__component__$1H.options.__file = "components/app/AppFooter.vue";
var AppFooter = /* @__PURE__ */ function() {
  return __component__$1H.exports;
}();
var render$1C = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("header", { staticClass: "d-header" }, [_c("div", { staticClass: "flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6" }, [_c("NavigationButton", { staticClass: "w-12 h-12 lg:hidden text-gray-300 hover:text-cloud-lighter", attrs: { "aria-label": "mobileMenu" } }), _c("div", { staticClass: "flex items-center flex-1 justify-center lg:justify-start" }, [_c("Link", { attrs: { "to": _vm.localePath("/"), "aria-label": "homeLink" } }, [_c("Logo", { staticClass: "h-8 md:h-9", attrs: { "settings": _vm.settings } })], 1)], 1), _c("nav", { staticClass: "items-center hidden h-full lg:flex gap-4" }, _vm._l(_vm.links, function(link2, index2) {
    return _c("NuxtLink", { key: index2, staticClass: "font-medium px-2 py-1", class: { "text-primary": _vm.isActive(link2) }, attrs: { "to": link2.to } }, [_vm._v(" " + _vm._s(link2.title) + " ")]);
  }), 1), _c("div", { staticClass: "flex items-center justify-end gap-1 lg:flex-1" }, [_c("GitHubButton"), _c("TwitterButton", { staticClass: "hidden lg:block" }), _c("ColorSwitcher", { staticClass: "hidden lg:block", attrs: { "padding": "p-3" } }), _vm.settings && _vm.settings.algolia ? _c("AlgoliaSearchBox", { attrs: { "options": _vm.settings.algolia, "settings": _vm.settings } }) : _vm._e()], 1)], 1)]);
};
var staticRenderFns$1C = [];
render$1C._withStripped = true;
const __vue2_script$1G = defineComponent$2({
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { $docus } = useContext();
    const route = useRoute();
    const currentSlug = CompositionApi.computed(() => {
      var _a;
      return route.value.path !== "/" && ((_a = route.value.params) == null ? void 0 : _a.pathMatch) ? route.value.params.pathMatch.split("/")[0] : null;
    });
    const settings2 = CompositionApi.computed(() => $docus.settings.value);
    function isActive(link2) {
      return `/${currentSlug.value}` === link2.to;
    }
    return {
      settings: settings2,
      isActive
    };
  }
});
const __cssModules$1G = {};
var __component__$1G = /* @__PURE__ */ normalizeComponent(__vue2_script$1G, render$1C, staticRenderFns$1C, false, __vue2_injectStyles$1G, null, null, null);
function __vue2_injectStyles$1G(context) {
  for (let o2 in __cssModules$1G) {
    this[o2] = __cssModules$1G[o2];
  }
}
__component__$1G.options.__file = "components/app/AppHeader.vue";
var AppHeader = /* @__PURE__ */ function() {
  return __component__$1G.exports;
}();
var render$1B = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "relative w-full" }, [_c("AppHeader", { attrs: { "links": _vm.headerLinks } }), _c("div", { staticClass: "lg:flex", class: { "d-container": _vm.layout.aside } }, [["xs", "sm", "md"].includes(_vm.$mq) || _vm.layout.aside ? _vm._t("aside", function() {
    return [_c("AppAside", { class: _vm.layout.asideClass, attrs: { "links": _vm.headerLinks } })];
  }) : _vm._e(), _c("div", { staticClass: "flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible" }, [_vm._t("default")], 2)], 2), _c("AppFooter")], 1);
};
var staticRenderFns$1B = [];
render$1B._withStripped = true;
const __vue2_script$1F = defineComponent$2({
  data() {
    return {
      headerLinks: []
    };
  },
  async fetch() {
    const { $docus } = this;
    this.headerLinks = (await $docus.search("/collections/header").fetch()).links;
  },
  computed: {
    layout() {
      return this.$docus.layout.value;
    }
  }
});
const __cssModules$1F = {};
var __component__$1F = /* @__PURE__ */ normalizeComponent(__vue2_script$1F, render$1B, staticRenderFns$1B, false, __vue2_injectStyles$1F, null, null, null);
function __vue2_injectStyles$1F(context) {
  for (let o2 in __cssModules$1F) {
    this[o2] = __cssModules$1F[o2];
  }
}
__component__$1F.options.__file = "components/app/AppLayout.vue";
var AppLayout = /* @__PURE__ */ function() {
  return __component__$1F.exports;
}();
var render$1A = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "flex flex-col w-full pt-0 xl:flex-row xl:pt-10" }, [_c("article", { staticClass: "flex-auto order-last min-w-0 mt-0 xl:order-first xl:mt-0" }, [_vm._t("default"), _vm.$scopedSlots["prev-next"] ? _c("div", { staticClass: "px-4 sm:px-6" }, [_c("hr", { staticClass: "mt-10 mb-8 border-t d-border" }), _vm._t("prev-next")], 2) : _vm._e()], 2), _vm._t("toc")], 2);
};
var staticRenderFns$1A = [];
render$1A._withStripped = true;
const __vue2_script$1E = {};
const __cssModules$1E = {};
var __component__$1E = /* @__PURE__ */ normalizeComponent(__vue2_script$1E, render$1A, staticRenderFns$1A, false, __vue2_injectStyles$1E, null, null, null);
function __vue2_injectStyles$1E(context) {
  for (let o2 in __cssModules$1E) {
    this[o2] = __cssModules$1E[o2];
  }
}
__component__$1E.options.__file = "node_modules/@docus/theme/dist/components/organisms/app/AppPage.vue";
var AppPage = /* @__PURE__ */ function() {
  return __component__$1E.exports;
}();
var render$1z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "lg:flex", class: _vm.fluid ? "" : "d-container" }, [_vm._t("aside", function() {
    return [_c("AppAside")];
  }), _c("div", { staticClass: "flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible" }, [_vm._t("default")], 2)], 2);
};
var staticRenderFns$1z = [];
render$1z._withStripped = true;
const __vue2_script$1D = {};
const __cssModules$1D = {};
var __component__$1D = /* @__PURE__ */ normalizeComponent(__vue2_script$1D, render$1z, staticRenderFns$1z, false, __vue2_injectStyles$1D, null, null, null);
function __vue2_injectStyles$1D(context) {
  for (let o2 in __cssModules$1D) {
    this[o2] = __cssModules$1D[o2];
  }
}
__component__$1D.options.__file = "node_modules/@docus/theme/dist/components/organisms/app/AppTemplate.vue";
var AppTemplate = /* @__PURE__ */ function() {
  return __component__$1D.exports;
}();
var render$1y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("article", { staticClass: "mb-16 flex flex-col items-end" }, [_c("div", { staticClass: "flex flex-col mb-4 w-full" }, [_c("div", { staticClass: "px-4 sm:px-0 flex items-center sm:items-end justify-between mb-4" }, [_c("time", { staticClass: "font-medium mr-2 text-sm text-gray-400 dark:text-gray-500", attrs: { "datetime": _vm.post.date } }, [_vm._v(" " + _vm._s(_vm.formatDateByLocale(_vm.$i18n.locale, _vm.post.date)) + " ")]), _c("div", { staticClass: "flex" }, _vm._l(_vm.post.authors, function(author, index2) {
    return _c("a", { key: index2, staticClass: "flex items-center justify-end -ml-2 rounded-full border border-gray-300 dark:border-gray-700", attrs: { "href": author.link, "target": "_blank", "rel": "noopener noindex nofollow" } }, [_c("NuxtImg", { staticClass: "inline-block h-8 w-8 rounded-full", attrs: { "height": "32", "width": "32", "src": author.avatarUrl, "alt": "" } })], 1);
  }), 0)]), _c("NuxtLink", { staticClass: "w-full hover:opacity-75 transition-opacity duration-100", attrs: { "to": _vm.$contentLocalePath(_vm.post.to) } }, [_c("div", { staticClass: "aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800" }, [_c("NuxtImg", { attrs: { "src": _vm.post.imgUrl, "width": "864", "height": "378", "alt": "" } })], 1)])], 1), _c("div", { staticClass: "flex flex-col w-full" }, [_c("div", { staticClass: "px-4 sm:px-0" }, [_c("NuxtLink", { staticClass: "hover:text-gray-500 hover:dark:text-gray-400 transition-color duration-100", attrs: { "to": _vm.$contentLocalePath(_vm.post.to) } }, [_c("h1", { staticClass: "text-2xl font-semibold mb-2" }, [_vm._v(_vm._s(_vm.post.title))])]), _c("p", { staticClass: "text-gray-600 dark:text-gray-400 mb-4" }, [_vm._v(_vm._s(_vm.post.description))]), _c("NuxtLink", { staticClass: "font-medium hover:text-gray-500 hover:dark:text-gray-400 transition-color duration-100", attrs: { "to": _vm.$contentLocalePath(_vm.post.to) } }, [_c("span", [_vm._v("Read More \u2192")])])], 1)])]);
};
var staticRenderFns$1y = [];
render$1y._withStripped = true;
const __vue2_script$1C = defineComponent$2({
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formatDateByLocale = (locale, d3) => {
      const currentLocale = locale || "en";
      const options2 = { year: "numeric", month: "long", day: "numeric" };
      return new Date(d3).toLocaleDateString(currentLocale, options2);
    };
    return { formatDateByLocale };
  }
});
const __cssModules$1C = {};
var __component__$1C = /* @__PURE__ */ normalizeComponent(__vue2_script$1C, render$1y, staticRenderFns$1y, false, __vue2_injectStyles$1C, null, null, null);
function __vue2_injectStyles$1C(context) {
  for (let o2 in __cssModules$1C) {
    this[o2] = __cssModules$1C[o2];
  }
}
__component__$1C.options.__file = "node_modules/@docus/theme/dist/components/organisms/blog/BlogpostCard.vue";
var BlogpostCard = /* @__PURE__ */ function() {
  return __component__$1C.exports;
}();
var render$1x = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", _vm._l(_vm.posts, function(post) {
    return _c("BlogpostCard", { key: post.slug, attrs: { "post": post } });
  }), 1);
};
var staticRenderFns$1x = [];
render$1x._withStripped = true;
const __vue2_script$1B = defineComponent$2({
  setup() {
    const { $docus } = useContext();
    const posts = CompositionApi.ref();
    useFetch(async () => {
      const documents = await $docus.search("/templates/blog", { deep: true }).where({ slug: { $ne: "" } }).sortBy("date", "desc").fetch();
      posts.value = documents;
    });
    return {
      posts
    };
  }
});
const __cssModules$1B = {};
var __component__$1B = /* @__PURE__ */ normalizeComponent(__vue2_script$1B, render$1x, staticRenderFns$1x, false, __vue2_injectStyles$1B, null, null, null);
function __vue2_injectStyles$1B(context) {
  for (let o2 in __cssModules$1B) {
    this[o2] = __cssModules$1B[o2];
  }
}
__component__$1B.options.__file = "node_modules/@docus/theme/dist/components/organisms/blog/BlogpostList.vue";
var BlogpostList = /* @__PURE__ */ function() {
  return __component__$1B.exports;
}();
function useScrollspy() {
  const observer = CompositionApi.ref();
  const visibleHeadings = CompositionApi.ref([]);
  const activeHeadings = CompositionApi.ref([]);
  const observerCallback = (entries) => entries.forEach((entry) => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      visibleHeadings.value.push(id);
    } else {
      visibleHeadings.value = visibleHeadings.value.filter((t3) => t3 !== id);
    }
  });
  const updateHeadings = (headings) => headings.forEach((heading) => {
    observer.value.observe(heading);
  });
  CompositionApi.watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal;
    } else {
      activeHeadings.value = val;
    }
  });
  CompositionApi.onBeforeMount(() => observer.value = new IntersectionObserver(observerCallback));
  CompositionApi.onBeforeUnmount(() => {
    var _a;
    return (_a = observer.value) == null ? void 0 : _a.disconnect();
  });
  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  };
}
function useSettings() {
  const $docus = useContext().$docus;
  const settings2 = CompositionApi.computed(() => {
    var _a;
    return (_a = $docus == null ? void 0 : $docus.settings) == null ? void 0 : _a.value;
  });
  return { settings: settings2 };
}
function useGitHub() {
  const { settings: settings2 } = useSettings();
  const repoUrl = CompositionApi.computed(() => joinURL$1(settings2.value.github.url, settings2.value.github.repo));
  const getPageLink = (page) => {
    const link2 = CompositionApi.computed(() => {
      if (!settings2.value.github)
        return;
      const key = page.key.split(":");
      const dir = key[key.length - 2];
      const source = key[key.length - 1];
      return [
        repoUrl.value,
        "edit",
        settings2.value.github.branch,
        settings2.value.github.dir || "",
        settings2.value.contentDir,
        dir,
        `${source}`.replace(/^\//g, "")
      ].filter(Boolean).join("/");
    });
    return link2;
  };
  return { repoUrl, getPageLink };
}
function convertPropToPixels(prop) {
  const tempDiv = document.createElement("div");
  tempDiv.style.position = "absolute";
  tempDiv.style.opacity = "0";
  tempDiv.style.height = getComputedStyle(document.documentElement).getPropertyValue(prop);
  document.body.appendChild(tempDiv);
  const pixels = parseInt(getComputedStyle(tempDiv).height);
  document.body.removeChild(tempDiv);
  return pixels;
}
function scrollToHeading(id, scrollMarginCssVar) {
  history.replaceState({}, "", "#" + id);
  setTimeout(() => {
    const escapedId = id.replace(/\./g, "\\.");
    const offset = document.querySelector(`#${escapedId}`).offsetTop - convertPropToPixels(scrollMarginCssVar);
    window.scrollTo(0, offset);
  });
}
var render$1w = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.toc.length ? _c("div", { staticClass: "sticky z-10 px-4 text-sm border-dashed top-header d-border-header d-blur-header d-page-mobile-toc-bg" }, [_c("button", { staticClass: "\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      dark:text-gray-100\n    ", on: { "click": function($event) {
    _vm.showMobileToc = !_vm.showMobileToc;
  } } }, [_c("span", { staticClass: "mr-2" }, [_vm._v(_vm._s(_vm.title || _vm.$t("toc.title")))]), _c("IconChevronRight", { staticClass: "w-4 h-4 d-tertiary-text transition-transform duration-100 transform", class: [_vm.showMobileToc ? "rotate-90" : "rotate-0"] })], 1), _c("ul", { staticClass: "pb-4 overflow-x-hidden font-medium", class: [_vm.showMobileToc ? "flex flex-col" : "hidden"] }, _vm._l(_vm.filteredToc, function(link2) {
    return _c("li", { key: link2.id, on: { "click": function($event) {
      _vm.showMobileToc = false;
    } } }, [_c("a", { staticClass: "block py-1 transition-colors duration-100 transform", class: {
      "d-secondary-text-active hover:d-secondary-text-hover": _vm.activeHeadings.includes(link2.id),
      "d-secondary-text hover:d-secondary-text-hover": !_vm.activeHeadings.includes(link2.id)
    }, attrs: { "href": "#" + link2.id }, on: { "click": function($event) {
      $event.preventDefault();
      return _vm.scrollToHeading(link2.id, "--blogpost-scroll-margin-block");
    } } }, [_vm._v(_vm._s(link2.text))])]);
  }), 0)]) : _vm._e();
};
var staticRenderFns$1w = [];
render$1w._withStripped = true;
const __vue2_script$1A = defineComponent$2({
  props: {
    toc: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const state = CompositionApi.reactive({
      activeLink: "",
      exactActiveLink: "",
      showMobileToc: false
    });
    const { activeHeadings, updateHeadings } = useScrollspy();
    CompositionApi.onMounted(() => updateHeadings([
      ...document.querySelectorAll(".docus-content h1"),
      ...document.querySelectorAll(".docus-content h2"),
      ...document.querySelectorAll(".docus-content h3")
    ]));
    const filteredToc = CompositionApi.computed(() => {
      const toc = [...props.toc];
      toc.shift();
      return toc;
    });
    return __spreadProps(__spreadValues({}, CompositionApi.toRefs(state)), {
      activeHeadings,
      scrollToHeading,
      filteredToc
    });
  }
});
const __cssModules$1A = {};
var __component__$1A = /* @__PURE__ */ normalizeComponent(__vue2_script$1A, render$1w, staticRenderFns$1w, false, __vue2_injectStyles$1A, null, null, null);
function __vue2_injectStyles$1A(context) {
  for (let o2 in __cssModules$1A) {
    this[o2] = __cssModules$1A[o2];
  }
}
__component__$1A.options.__file = "node_modules/@docus/theme/dist/components/organisms/blog/BlogpostToc.vue";
var BlogpostToc = /* @__PURE__ */ function() {
  return __component__$1A.exports;
}();
var render$1v = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("SlotBase", [_vm._v("AsideBottom.vue")]);
};
var staticRenderFns$1v = [];
render$1v._withStripped = true;
const __vue2_script$1z = {};
const __cssModules$1z = {};
var __component__$1z = /* @__PURE__ */ normalizeComponent(__vue2_script$1z, render$1v, staticRenderFns$1v, false, __vue2_injectStyles$1z, null, null, null);
function __vue2_injectStyles$1z(context) {
  for (let o2 in __cssModules$1z) {
    this[o2] = __cssModules$1z[o2];
  }
}
__component__$1z.options.__file = "node_modules/@docus/theme/dist/components/organisms/dev-slots/AsideBottom.vue";
var AsideBottom = /* @__PURE__ */ function() {
  return __component__$1z.exports;
}();
var render$1u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("SlotBase", [_vm._v("AsideTop.vue")]);
};
var staticRenderFns$1u = [];
render$1u._withStripped = true;
const __vue2_script$1y = {};
const __cssModules$1y = {};
var __component__$1y = /* @__PURE__ */ normalizeComponent(__vue2_script$1y, render$1u, staticRenderFns$1u, false, __vue2_injectStyles$1y, null, null, null);
function __vue2_injectStyles$1y(context) {
  for (let o2 in __cssModules$1y) {
    this[o2] = __cssModules$1y[o2];
  }
}
__component__$1y.options.__file = "node_modules/@docus/theme/dist/components/organisms/dev-slots/AsideTop.vue";
var AsideTop = /* @__PURE__ */ function() {
  return __component__$1y.exports;
}();
var render$1t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("SlotBase", [_vm._v("FooterBody.vue")]);
};
var staticRenderFns$1t = [];
render$1t._withStripped = true;
const __vue2_script$1x = {};
const __cssModules$1x = {};
var __component__$1x = /* @__PURE__ */ normalizeComponent(__vue2_script$1x, render$1t, staticRenderFns$1t, false, __vue2_injectStyles$1x, null, null, null);
function __vue2_injectStyles$1x(context) {
  for (let o2 in __cssModules$1x) {
    this[o2] = __cssModules$1x[o2];
  }
}
__component__$1x.options.__file = "node_modules/@docus/theme/dist/components/organisms/dev-slots/FooterBody.vue";
var FooterBody = /* @__PURE__ */ function() {
  return __component__$1x.exports;
}();
var render$1s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("SlotBase", { staticClass: "w-full" }, [_vm._v("HeaderNavigation.vue")]);
};
var staticRenderFns$1s = [];
render$1s._withStripped = true;
const __vue2_script$1w = {};
const __cssModules$1w = {};
var __component__$1w = /* @__PURE__ */ normalizeComponent(__vue2_script$1w, render$1s, staticRenderFns$1s, false, __vue2_injectStyles$1w, null, null, null);
function __vue2_injectStyles$1w(context) {
  for (let o2 in __cssModules$1w) {
    this[o2] = __cssModules$1w[o2];
  }
}
__component__$1w.options.__file = "node_modules/@docus/theme/dist/components/organisms/dev-slots/HeaderNavigation.vue";
var HeaderNavigation = /* @__PURE__ */ function() {
  return __component__$1w.exports;
}();
var render$1r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("SlotBase", [_vm._v("PageTocBottom.vue")]);
};
var staticRenderFns$1r = [];
render$1r._withStripped = true;
const __vue2_script$1v = {};
const __cssModules$1v = {};
var __component__$1v = /* @__PURE__ */ normalizeComponent(__vue2_script$1v, render$1r, staticRenderFns$1r, false, __vue2_injectStyles$1v, null, null, null);
function __vue2_injectStyles$1v(context) {
  for (let o2 in __cssModules$1v) {
    this[o2] = __cssModules$1v[o2];
  }
}
__component__$1v.options.__file = "node_modules/@docus/theme/dist/components/organisms/dev-slots/PageTocBottom.vue";
var PageTocBottom = /* @__PURE__ */ function() {
  return __component__$1v.exports;
}();
var render$1q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("SlotBase", [_vm._v("PageTocTop.vue")]);
};
var staticRenderFns$1q = [];
render$1q._withStripped = true;
const __vue2_script$1u = {};
const __cssModules$1u = {};
var __component__$1u = /* @__PURE__ */ normalizeComponent(__vue2_script$1u, render$1q, staticRenderFns$1q, false, __vue2_injectStyles$1u, null, null, null);
function __vue2_injectStyles$1u(context) {
  for (let o2 in __cssModules$1u) {
    this[o2] = __cssModules$1u[o2];
  }
}
__component__$1u.options.__file = "node_modules/@docus/theme/dist/components/organisms/dev-slots/PageTocTop.vue";
var PageTocTop = /* @__PURE__ */ function() {
  return __component__$1u.exports;
}();
var render$1p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.$docus && _vm.$docus.ui && _vm.$docus.ui.slots ? _c("div", { staticClass: "flex items-center justify-center px-6 py-6 font-mono text-sm font-semibold bg-gray-100 dark:bg-gray-800" }, [_vm._t("default", function() {
    return [_vm._v("Slot")];
  })], 2) : _vm._e();
};
var staticRenderFns$1p = [];
render$1p._withStripped = true;
const __vue2_script$1t = {};
const __cssModules$1t = {};
var __component__$1t = /* @__PURE__ */ normalizeComponent(__vue2_script$1t, render$1p, staticRenderFns$1p, false, __vue2_injectStyles$1t, null, null, null);
function __vue2_injectStyles$1t(context) {
  for (let o2 in __cssModules$1t) {
    this[o2] = __cssModules$1t[o2];
  }
}
__component__$1t.options.__file = "node_modules/@docus/theme/dist/components/organisms/dev-slots/SlotBase.vue";
var SlotBase = /* @__PURE__ */ function() {
  return __component__$1t.exports;
}();
var render$1o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.link ? _c("div", { staticClass: "flex flex-col justify-between d-secondary-text mt-8 mb-4 px-4 sm:px-6 sm:flex-row" }, [_c("a", { staticClass: "flex items-center mb-2 text-sm sm:mb-0 hover:underline", attrs: { "href": _vm.link, "target": "_blank", "rel": "noopener" } }, [_c("IconEdit", { staticClass: "w-3 h-3 mr-1" }), _c("span", [_vm._v(" " + _vm._s(_vm.$t("article.github")) + " ")])], 1), _vm.page.mtime ? _c("span", { staticClass: "flex items-center text-sm" }, [_vm._v(" " + _vm._s(_vm.$t("article.updatedAt")) + " " + _vm._s(_vm.$d(Date.parse(_vm.page.mtime), "long")) + " ")]) : _vm._e()]) : _vm._e();
};
var staticRenderFns$1o = [];
render$1o._withStripped = true;
const __vue2_script$1s = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { settings: settings2 } = useSettings();
    const repoUrl = CompositionApi.computed(() => joinURL$1(settings2.value.github.url, settings2.value.github.repo));
    const getPageLink = (page) => {
      const link3 = CompositionApi.computed(() => {
        if (!settings2.value.github) {
          return;
        }
        const key = page.key.split(":");
        const dir = key.slice(1, key.length - 1).filter(Boolean).join("/");
        const source = key[key.length - 1];
        return [
          repoUrl.value,
          "edit",
          settings2.value.github.branch,
          settings2.value.github.dir || "",
          settings2.value.contentDir,
          dir,
          `${source}`.replace(/^\//g, "")
        ].filter(Boolean).join("/");
      });
      return link3;
    };
    const link2 = getPageLink(props.page);
    return {
      link: link2
    };
  }
});
const __cssModules$1s = {};
var __component__$1s = /* @__PURE__ */ normalizeComponent(__vue2_script$1s, render$1o, staticRenderFns$1o, false, __vue2_injectStyles$1s, null, null, null);
function __vue2_injectStyles$1s(context) {
  for (let o2 in __cssModules$1s) {
    this[o2] = __cssModules$1s[o2];
  }
}
__component__$1s.options.__file = "components/atoms/EditOnGithub.vue";
var EditOnGithub = /* @__PURE__ */ function() {
  return __component__$1s.exports;
}();
var render$1n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.toc.length ? _c("div", { staticClass: "\n    sticky\n    z-10\n    left-0\n    flex-none\n    w-full\n    text-sm\n    xl:hidden\n    d-blur-header d-page-mobile-toc-bg\n    lg:left-60\n    px-4\n    sm:px-6\n    top-header\n  " }, [_c("button", { staticClass: "\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      xl:hidden\n      dark:text-gray-100\n    ", on: { "click": function($event) {
    _vm.showMobileToc = !_vm.showMobileToc;
  } } }, [_c("span", { staticClass: "mr-2" }, [_vm._v(_vm._s(_vm.title || _vm.$t("toc.title")))]), _c("IconChevronRight", { staticClass: "w-4 h-4 d-secondary-text transition-transform duration-100 transform", class: [_vm.showMobileToc ? "rotate-90" : "rotate-0"] })], 1), _c("div", { staticClass: "flex flex-col justify-between overflow-y-auto sticky max-h-(screen-header) -mt-10 pt-10 pb-4 top-header", class: [_vm.showMobileToc ? "flex" : "hidden xl:flex"] }, [_c("PageTocTop"), _c("h5", { staticClass: "items-center hidden mb-2 xl:flex" }, [_c("span", { staticClass: "text-base font-semibold text-gray-900 dark:text-gray-100" }, [_vm._v(_vm._s(_vm.title || _vm.$t("toc.title")))])]), _c("div", { staticClass: "overflow-y-auto overflow-hidden max-h-[50vh]" }, [_c("PageTocList", { attrs: { "toc": _vm.toc }, nativeOn: { "click": function($event) {
    _vm.showMobileToc = false;
  } } })], 1)], 1), _c("hr", { staticClass: "border-dashed d-border" })]) : _vm._e();
};
var staticRenderFns$1n = [];
render$1n._withStripped = true;
const __vue2_script$1r = defineComponent$2({
  props: {
    toc: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: null
    }
  },
  setup() {
    const showMobileToc = CompositionApi.ref(false);
    return {
      showMobileToc
    };
  }
});
const __cssModules$1r = {};
var __component__$1r = /* @__PURE__ */ normalizeComponent(__vue2_script$1r, render$1n, staticRenderFns$1n, false, __vue2_injectStyles$1r, null, null, null);
function __vue2_injectStyles$1r(context) {
  for (let o2 in __cssModules$1r) {
    this[o2] = __cssModules$1r[o2];
  }
}
__component__$1r.options.__file = "node_modules/@docus/theme/dist/components/organisms/page/PageMobileToc.vue";
var PageMobileToc = /* @__PURE__ */ function() {
  return __component__$1r.exports;
}();
var render$1m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.prev || _vm.next ? _c("div", { staticClass: "flex mb-8 flex-col justify-between font-medium leading-7 xs:space-x-2 xs:flex-row" }, [_c("div", { staticClass: "flex justify-start items-center w-full xs:w-1/2" }, [_vm.prev ? _c("NuxtLink", { staticClass: "\n        inline-flex\n        items-center\n        justify-start\n        w-full\n        px-4\n        py-2.5\n        truncate\n        border\n        d-border\n        hover:d-border-hover\n        rounded-xl\n        group\n        xs:w-auto\n        hover:d-text-primary\n      ", attrs: { "to": _vm.$contentLocalePath(_vm.prev.to) } }, [_c("span", { staticClass: "relative flex flex-col items-end truncate" }, [_c("span", { staticClass: "mb-1 text-xs leading-tight d-secondary-text" }, [_vm._v(" " + _vm._s(_vm.directory(_vm.prev.to)) + " ")]), _c("span", { staticClass: "flex items-center w-full leading-tight" }, [_c("IconArrowLeft", { staticClass: "flex-shrink-0 w-4 h-4 mr-2" }), _c("span", { staticClass: "truncate" }, [_vm._v(_vm._s(_vm.prev.title))])], 1)])]) : _vm._e()], 1), _c("div", { staticClass: "flex justify-end order-first w-full xs:order-last xs:w-1/2" }, [_vm.next ? _c("NuxtLink", { staticClass: "\n        inline-flex\n        items-center\n        justify-end\n        w-full\n        px-4\n        py-2.5\n        mb-2\n        truncate\n        border\n        d-border\n        hover:d-border-hover\n        rounded-xl\n        group\n        xs:mb-0 xs:w-auto\n        hover:d-text-primary\n      ", attrs: { "to": _vm.$contentLocalePath(_vm.next.to) } }, [_c("span", { staticClass: "relative flex flex-col items-start truncate" }, [_c("span", { staticClass: "mb-1 text-xs leading-tight d-secondary-text" }, [_vm._v(" " + _vm._s(_vm.directory(_vm.next.to)) + " ")]), _c("span", { staticClass: "flex items-center w-full leading-tight" }, [_c("span", { staticClass: "truncate" }, [_vm._v(_vm._s(_vm.next.title))]), _c("IconArrowRight", { staticClass: "flex-shrink-0 w-4 h-4 ml-2" })], 1)])]) : _vm._e()], 1)]) : _vm._e();
};
var staticRenderFns$1m = [];
render$1m._withStripped = true;
const __vue2_script$1q = defineComponent$2({
  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  },
  methods: {
    directory(link2) {
      const dirs = link2.split("/");
      const directory = dirs.length > 1 ? dirs[dirs.length - 2] : "";
      return directory.split("-").map(scule.upperFirst).join(" ");
    }
  }
});
const __cssModules$1q = {};
var __component__$1q = /* @__PURE__ */ normalizeComponent(__vue2_script$1q, render$1m, staticRenderFns$1m, false, __vue2_injectStyles$1q, null, null, null);
function __vue2_injectStyles$1q(context) {
  for (let o2 in __cssModules$1q) {
    this[o2] = __cssModules$1q[o2];
  }
}
__component__$1q.options.__file = "node_modules/@docus/theme/dist/components/organisms/page/PagePrevNext.vue";
var PagePrevNext = /* @__PURE__ */ function() {
  return __component__$1q.exports;
}();
var render$1l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "\n    hidden\n    z-10\n    left-0\n    flex-none\n    w-full\n    pl-4\n    mr-8\n    text-sm\n    bg-white\n    border-b border-gray-200 border-opacity-50\n    xl:relative xl:border-0\n    dark:border-gray-800\n    d-blur-header\n    bg-opacity-80\n    dark:bg-gray-900 dark:bg-opacity-80\n    xl:bg-transparent\n    dark:xl:bg-transparent\n    lg:left-60\n    xl:left-0\n    pl-4\n    sm:pl-6\n    xl:w-60\n    top-header\n    xl:block xl:top-0\n  " }, [_c("div", { staticClass: "\n      hidden\n      xl:flex\n      flex-col\n      justify-between\n      overflow-y-auto\n      d-scrollbar\n      sticky\n      max-h-(screen-header)\n      -mt-10\n      pt-10\n      pb-4\n      top-header\n    " }, [_c("PageTocTop"), _vm.toc.length ? _c("div", { staticClass: "mb-8" }, [_c("h5", { staticClass: "items-center hidden mb-2 xl:flex" }, [_c("span", { staticClass: "text-base font-semibold text-gray-900 dark:text-gray-100" }, [_vm._v(_vm._s(_vm.title || _vm.$t("toc.title")))])]), _c("PageTocList", { attrs: { "toc": _vm.toc } })], 1) : _vm._e(), _c("PageTocBottom")], 1)]);
};
var staticRenderFns$1l = [];
render$1l._withStripped = true;
const __vue2_script$1p = defineComponent$2({
  props: {
    toc: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: null
    }
  }
});
const __cssModules$1p = {};
var __component__$1p = /* @__PURE__ */ normalizeComponent(__vue2_script$1p, render$1l, staticRenderFns$1l, false, __vue2_injectStyles$1p, null, null, null);
function __vue2_injectStyles$1p(context) {
  for (let o2 in __cssModules$1p) {
    this[o2] = __cssModules$1p[o2];
  }
}
__component__$1p.options.__file = "node_modules/@docus/theme/dist/components/organisms/page/PageToc.vue";
var PageToc = /* @__PURE__ */ function() {
  return __component__$1p.exports;
}();
var render$1k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ul", { staticClass: "font-medium ml-4" }, _vm._l(_vm.toc, function(link2) {
    return _c("li", { key: link2.id, on: { "click": function($event) {
      return _vm.$emit("click");
    } } }, [_c("a", { staticClass: "block py-1 transition-colors duration-100 transform", class: {
      "d-secondary-text-active hover:d-secondary-text-hover": _vm.activeHeadings.includes(link2.id) || _vm.isActiveParent(link2),
      "d-secondary-text hover:d-secondary-text-hover": !_vm.activeHeadings.includes(link2.id) && !_vm.isActiveParent(link2)
    }, attrs: { "href": "#" + link2.id }, on: { "click": function($event) {
      $event.preventDefault();
      return _vm.scrollToHeading(link2.id, "--docs-scroll-margin-block");
    } } }, [_vm._v(" " + _vm._s(link2.text) + " ")]), link2.children ? _c("ul", { staticClass: "overflow-x-hidden font-medium" }, _vm._l(link2.children, function(childLink) {
      return _c("li", { key: childLink.id }, [_c("a", { staticClass: "block py-1 pl-3 transition-colors duration-100 transform", class: {
        "d-secondary-text-active hover:d-secondary-text-hover": _vm.activeHeadings.includes(childLink.id),
        "d-secondary-text hover:d-secondary-text-hover": !_vm.activeHeadings.includes(childLink.id)
      }, attrs: { "href": "#" + childLink.id }, on: { "click": function($event) {
        $event.preventDefault();
        return _vm.scrollToHeading(childLink.id, "--docs-scroll-margin-block");
      } } }, [_vm._v(" " + _vm._s(childLink.text) + " ")])]);
    }), 0) : _vm._e()]);
  }), 0);
};
var staticRenderFns$1k = [];
render$1k._withStripped = true;
const __vue2_script$1o = defineComponent$2({
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { activeHeadings, visibleHeadings, updateHeadings } = useScrollspy();
    CompositionApi.onMounted(() => setTimeout(() => {
      updateHeadings([
        ...document.querySelectorAll(".docus-content h1"),
        ...document.querySelectorAll(".docus-content h2"),
        ...document.querySelectorAll(".docus-content h3")
      ]);
    }, 200));
    const isActiveParent = (link2) => {
      return link2.children && link2.children.some((child) => activeHeadings.value.includes(child.id));
    };
    return {
      visibleHeadings,
      activeHeadings,
      scrollToHeading,
      isActiveParent
    };
  }
});
const __cssModules$1o = {};
var __component__$1o = /* @__PURE__ */ normalizeComponent(__vue2_script$1o, render$1k, staticRenderFns$1k, false, __vue2_injectStyles$1o, null, null, null);
function __vue2_injectStyles$1o(context) {
  for (let o2 in __cssModules$1o) {
    this[o2] = __cssModules$1o[o2];
  }
}
__component__$1o.options.__file = "node_modules/@docus/theme/dist/components/organisms/page/PageTocList.vue";
var PageTocList = /* @__PURE__ */ function() {
  return __component__$1o.exports;
}();
var render$1j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("DocusContent", { attrs: { "document": _vm.page } });
};
var staticRenderFns$1j = [];
render$1j._withStripped = true;
const __vue2_script$1n = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  templateOptions: {
    aside: false,
    asideClass: "",
    fluid: false
  }
});
const __cssModules$1n = {};
var __component__$1n = /* @__PURE__ */ normalizeComponent(__vue2_script$1n, render$1j, staticRenderFns$1j, false, __vue2_injectStyles$1n, null, null, null);
function __vue2_injectStyles$1n(context) {
  for (let o2 in __cssModules$1n) {
    this[o2] = __cssModules$1n[o2];
  }
}
__component__$1n.options.__file = "node_modules/@docus/app/dist/app/components/Page.vue";
var Page = /* @__PURE__ */ function() {
  return __component__$1n.exports;
}();
var render$1i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "p-4 mt-4 mb-4 rounded-lg alert text-sm leading-relaxed", class: [_vm.type] }, [_c("div", { staticClass: "flex items-start" }, [_vm.icon ? _c("InjectComponent", { staticClass: "inline-flex mr-2 w-5 h-5 justify-center items-center text-1.2rem", attrs: { "component": _vm.icon } }, [_vm._v(" " + _vm._s(_vm.icon) + " ")]) : _vm._e(), _c("div", { staticClass: "flex-grow alert-content" }, [_c("Markdown", { attrs: { "unwrap": "p" }, scopedSlots: _vm._u([{ key: "between", fn: function() {
    return [_c("br")];
  }, proxy: true }]) })], 1)], 1)]);
};
var staticRenderFns$1i = [];
render$1i._withStripped = true;
var Alert_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1m = defineComponent$2({
  props: {
    icon: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger"].includes(value);
      }
    }
  }
});
const __cssModules$1m = {};
var __component__$1m = /* @__PURE__ */ normalizeComponent(__vue2_script$1m, render$1i, staticRenderFns$1i, false, __vue2_injectStyles$1m, "360f1e78", null, null);
function __vue2_injectStyles$1m(context) {
  for (let o2 in __cssModules$1m) {
    this[o2] = __cssModules$1m[o2];
  }
}
__component__$1m.options.__file = "components/atoms/Alert.vue";
var Alert = /* @__PURE__ */ function() {
  return __component__$1m.exports;
}();
var render$1h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { staticClass: "\n    inline-flex\n    items-center\n    px-3\n    py-1\n    text-base\n    leading-5\n    tracking-tight\n    rounded-full\n    bg-primary-100\n    dark:bg-primary-800\n    d-text-primary\n  " }, [_vm._t("default")], 2);
};
var staticRenderFns$1h = [];
render$1h._withStripped = true;
const __vue2_script$1l = {};
const __cssModules$1l = {};
var __component__$1l = /* @__PURE__ */ normalizeComponent(__vue2_script$1l, render$1h, staticRenderFns$1h, false, __vue2_injectStyles$1l, null, null, null);
function __vue2_injectStyles$1l(context) {
  for (let o2 in __cssModules$1l) {
    this[o2] = __cssModules$1l[o2];
  }
}
__component__$1l.options.__file = "node_modules/@docus/theme/dist/components/atoms/Badge.vue";
var Badge = /* @__PURE__ */ function() {
  return __component__$1l.exports;
}();
var render$1g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Link", { staticClass: "button-link", class: [_vm.size, _vm.bold ? "font-semibold" : "font-medium"], attrs: { "to": _vm.href, "blank": _vm.blank }, scopedSlots: _vm._u([{ key: "href", fn: function() {
    return [_vm.blank ? _c("IconExternalLink", { staticClass: "w-4 h-4 ml-2" }) : _vm._e()];
  }, proxy: true }]) }, [_c("Markdown", { attrs: { "unwrap": "p ul li" } })], 1);
};
var staticRenderFns$1g = [];
render$1g._withStripped = true;
var ButtonLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1k = defineComponent$2({
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    bold: {
      type: Boolean,
      default: false
    }
  }
});
const __cssModules$1k = {};
var __component__$1k = /* @__PURE__ */ normalizeComponent(__vue2_script$1k, render$1g, staticRenderFns$1g, false, __vue2_injectStyles$1k, "bf95e3d8", null, null);
function __vue2_injectStyles$1k(context) {
  for (let o2 in __cssModules$1k) {
    this[o2] = __cssModules$1k[o2];
  }
}
__component__$1k.options.__file = "components/atoms/ButtonLink.vue";
var ButtonLink = /* @__PURE__ */ function() {
  return __component__$1k.exports;
}();
var render$1f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "flex" }, [_c("div", { staticClass: "relative w-full p-6 bg-gray-100 rounded-lg dark:bg-gray-800 dark:bg-opacity-50" }, [_c("InjectComponent", { staticClass: "w-16 h-16 mb-3", class: _vm.iconClass || "", attrs: { "component": _vm.icon } }, [_vm.isImage(_vm.icon) ? _c("NuxtImg", { staticClass: "inline-block w-16 h-16 mb-3", attrs: { "src": _vm.icon } }) : _c("span", { staticClass: "inline-block w-16 h-16 mb-3 text-6xl" }, [_vm._v(_vm._s(_vm.icon))])], 1), _vm._t("default"), _c("div", { staticClass: "text-lg" }, [_c("h3", { staticClass: "mb-2 font-semibold tracking-tight inline mr-1" }, [_vm._v(_vm._s(_vm.title))]), _c("div", { staticClass: "inline font-medium text-gray-400 dark:text-gray-500" }, [_vm._t("description", function() {
    return [_vm.description ? _c("p", { staticClass: "inline font-medium tracking-tight" }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()];
  })], 2)])], 2)]);
};
var staticRenderFns$1f = [];
render$1f._withStripped = true;
const __vue2_script$1j = defineComponent$2({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    }
  },
  setup() {
    const isImage = (icon) => String(icon).includes(".");
    return {
      isImage
    };
  }
});
const __cssModules$1j = {};
var __component__$1j = /* @__PURE__ */ normalizeComponent(__vue2_script$1j, render$1f, staticRenderFns$1f, false, __vue2_injectStyles$1j, null, null, null);
function __vue2_injectStyles$1j(context) {
  for (let o2 in __cssModules$1j) {
    this[o2] = __cssModules$1j[o2];
  }
}
__component__$1j.options.__file = "node_modules/@docus/theme/dist/components/atoms/Card.vue";
var Card = /* @__PURE__ */ function() {
  return __component__$1j.exports;
}();
var render$1e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "code-block", class: {
    active: _vm.active,
    "p-4 border-2 border-t-0 border-gray-100 dark:border-gray-800 rounded-b-lg": _vm.preview
  } }, [_vm._t("default")], 2);
};
var staticRenderFns$1e = [];
render$1e._withStripped = true;
var CodeBlock_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1i = defineComponent$2({
  props: {
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: false
    }
  }
});
const __cssModules$1i = {};
var __component__$1i = /* @__PURE__ */ normalizeComponent(__vue2_script$1i, render$1e, staticRenderFns$1e, false, __vue2_injectStyles$1i, "3aa3328b", null, null);
function __vue2_injectStyles$1i(context) {
  for (let o2 in __cssModules$1i) {
    this[o2] = __cssModules$1i[o2];
  }
}
__component__$1i.options.__file = "node_modules/@docus/theme/dist/components/atoms/CodeBlock.vue";
var CodeBlock = /* @__PURE__ */ function() {
  return __component__$1i.exports;
}();
const TAGS_MAP$1 = {
  h1: ["h1", "prose-h1"],
  h2: ["h2", "prose-h2"],
  h3: ["h3", "prose-h3"],
  h4: ["h4", "prose-h4"],
  h5: ["h5", "prose-h5"],
  h6: ["h6", "prose-h6"],
  hr: ["hr", "prose-hr"],
  p: ["p", "prose-paragraph"],
  ul: ["ul", "prose-ul"],
  ol: ["ol", "prose-ol"],
  blockquote: ["blockquote", "prose-blockquote"],
  img: ["img", "prose-img"],
  a: ["a", "prose-a"],
  code: ["code", "prose-code-inline"]
};
const expandTags$1 = (_tags) => _tags.flatMap((t3) => TAGS_MAP$1[t3]);
const TEXT_TAGS$1 = expandTags$1(["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"]);
function isTag$1(vnode, tag) {
  var _a, _b;
  return (vnode == null ? void 0 : vnode.tag) === tag || ((_a = vnode == null ? void 0 : vnode.componentOptions) == null ? void 0 : _a.tag) === tag || ((_b = vnode == null ? void 0 : vnode.asyncMeta) == null ? void 0 : _b.tag) === tag;
}
function nodeChildren$1(node) {
  var _a, _b;
  return node.children || ((_a = node == null ? void 0 : node.componentOptions) == null ? void 0 : _a.children) || ((_b = node == null ? void 0 : node.asyncMeta) == null ? void 0 : _b.children);
}
function nodeTextContent(node) {
  if (!node)
    return "";
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (node.type === "text") {
    return node.value;
  }
  if (node.text) {
    return node.text;
  }
  const children = nodeChildren$1(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
function unwrap$1(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap$1(node, tags));
  }
  tags = expandTags$1(tags);
  let result = vnode;
  if (tags.some((tag) => isTag$1(vnode, tag))) {
    result = nodeChildren$1(vnode) || vnode;
    if (TEXT_TAGS$1.some((tag) => isTag$1(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap$1(vnodes, tags = ["p"]) {
  return (Array.isArray(vnodes) ? vnodes : [vnodes]).flatMap((vnode) => unwrap$1(vnode, tags)).flatMap((vnode) => unwrap$1(vnode, tags)).filter((vnode) => !vnode.text || !!vnode.text.trim());
}
var render$1d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "code-group", class: [_vm.activeTabIndex == 0 && "first-tab"] }, [_c("TabsHeader", { ref: "tabs-header", attrs: { "active-tab-index": _vm.activeTabIndex, "tabs": _vm.tabs }, on: { "update": function($event) {
    _vm.activeTabIndex = $event;
  } } }), _vm._t("default")], 2);
};
var staticRenderFns$1d = [];
render$1d._withStripped = true;
var CodeGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1h = defineComponent$2({
  data() {
    return {
      activeTabIndex: 0,
      counter: 0
    };
  },
  computed: {
    tabs() {
      return this.calculateTabs();
    }
  },
  watch: {
    activeTabIndex(newValue, oldValue) {
      const tabs = this.$el.querySelectorAll(".code-group > .code-block, .code-group > .prose .docus-highlight, .code-group > .docus-highlight");
      if (oldValue < tabs.length) {
        tabs[oldValue].classList.remove("active");
      }
      tabs[newValue].classList.add("active");
    }
  },
  updated() {
    const newTabs = this.calculateTabs();
    if (JSON.stringify(newTabs) !== JSON.stringify(this.tabs)) {
      this.$nextTick(() => {
        this.updateActiveTab();
        this.$refs["tabs-header"].updateHighlightUnderlinePosition();
      });
    }
  },
  created() {
    this.updateActiveTab();
  },
  methods: {
    updateActiveTab() {
      const index2 = this.tabs.findIndex((tab) => tab.active);
      this.activeTabIndex = index2 < 0 ? 0 : index2;
    },
    calculateTabs() {
      const components2 = this.$slots.default.flatMap((slot) => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = slot.data) == null ? void 0 : _a.attrs) == null ? void 0 : _b.class) == null ? void 0 : _c.includes("prose")) ? slot.children : slot;
      }).filter((slot) => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = slot.data) == null ? void 0 : _a.attrs) == null ? void 0 : _b.class) == null ? void 0 : _c.includes("docus-highligh")) || isTag$1(slot, "code-block") || isTag$1(slot, "prose-code");
      }).map((slot) => {
        var _a, _b, _c, _d2, _e2, _f, _g;
        const attrs = ((_b = (_a = slot.asyncMeta) == null ? void 0 : _a.data) == null ? void 0 : _b.attrs) || ((_c = slot.componentOptions) == null ? void 0 : _c.propsData) || {};
        const [firstChild] = slot.children || ((_d2 = slot.componentOptions) == null ? void 0 : _d2.children) || ((_e2 = slot.asyncMeta) == null ? void 0 : _e2.children) || [];
        return {
          label: attrs.label || ((_g = (_f = firstChild == null ? void 0 : firstChild.children) == null ? void 0 : _f[0]) == null ? void 0 : _g.text) || "untitled",
          active: typeof attrs.active !== "undefined"
        };
      });
      return components2;
    }
  }
});
const __cssModules$1h = {};
var __component__$1h = /* @__PURE__ */ normalizeComponent(__vue2_script$1h, render$1d, staticRenderFns$1d, false, __vue2_injectStyles$1h, "a383c906", null, null);
function __vue2_injectStyles$1h(context) {
  for (let o2 in __cssModules$1h) {
    this[o2] = __cssModules$1h[o2];
  }
}
__component__$1h.options.__file = "node_modules/@docus/theme/dist/components/atoms/CodeGroup.vue";
var CodeGroup = /* @__PURE__ */ function() {
  return __component__$1h.exports;
}();
var render$1c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", { staticClass: "d-icon", class: [_vm.padding], attrs: { "slot": "placeholder", "aria-label": "Color Mode" }, on: { "click": function($event) {
    _vm.$colorMode.value === "dark" ? _vm.$colorMode.preference = "light" : _vm.$colorMode.preference = "dark";
  } }, slot: "placeholder" }, [_c("ClientOnly", { scopedSlots: _vm._u([{ key: "placeholder", fn: function() {
    return [_vm._v("...")];
  }, proxy: true }]) }, [_vm.$colorMode.value === "light" ? _c("IconSun", { class: _vm.size }) : _c("IconMoon", { class: _vm.size })], 1)], 1);
};
var staticRenderFns$1c = [];
render$1c._withStripped = true;
const __vue2_script$1g = defineComponent$2({
  props: {
    size: {
      type: String,
      default: "w-6 h-6"
    },
    padding: {
      type: String,
      default: "p-0"
    }
  }
});
const __cssModules$1g = {};
var __component__$1g = /* @__PURE__ */ normalizeComponent(__vue2_script$1g, render$1c, staticRenderFns$1c, false, __vue2_injectStyles$1g, null, null, null);
function __vue2_injectStyles$1g(context) {
  for (let o2 in __cssModules$1g) {
    this[o2] = __cssModules$1g[o2];
  }
}
__component__$1g.options.__file = "node_modules/@docus/theme/dist/components/atoms/ColorSwitcher.vue";
var ColorSwitcher = /* @__PURE__ */ function() {
  return __component__$1g.exports;
}();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var clipboard = { exports: {} };
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(module, exports2) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    return function() {
      var __webpack_modules__ = {
        134: function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
          __webpack_require__2.d(__webpack_exports__, {
            "default": function() {
              return clipboard2;
            }
          });
          var tiny_emitter = __webpack_require__2(279);
          var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
          var listen = __webpack_require__2(370);
          var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
          var src_select = __webpack_require__2(817);
          var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof2(obj2) {
                return typeof obj2;
              };
            } else {
              _typeof = function _typeof2(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return _typeof(obj);
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _defineProperties(target, props) {
            for (var i3 = 0; i3 < props.length; i3++) {
              var descriptor = props[i3];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties(Constructor, staticProps);
            return Constructor;
          }
          var ClipboardAction = /* @__PURE__ */ function() {
            function ClipboardAction2(options2) {
              _classCallCheck(this, ClipboardAction2);
              this.resolveOptions(options2);
              this.initSelection();
            }
            _createClass(ClipboardAction2, [{
              key: "resolveOptions",
              value: function resolveOptions() {
                var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.action = options2.action;
                this.container = options2.container;
                this.emitter = options2.emitter;
                this.target = options2.target;
                this.text = options2.text;
                this.trigger = options2.trigger;
                this.selectedText = "";
              }
            }, {
              key: "initSelection",
              value: function initSelection() {
                if (this.text) {
                  this.selectFake();
                } else if (this.target) {
                  this.selectTarget();
                }
              }
            }, {
              key: "createFakeElement",
              value: function createFakeElement() {
                var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                this.fakeElem = document.createElement("textarea");
                this.fakeElem.style.fontSize = "12pt";
                this.fakeElem.style.border = "0";
                this.fakeElem.style.padding = "0";
                this.fakeElem.style.margin = "0";
                this.fakeElem.style.position = "absolute";
                this.fakeElem.style[isRTL ? "right" : "left"] = "-9999px";
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = "".concat(yPosition, "px");
                this.fakeElem.setAttribute("readonly", "");
                this.fakeElem.value = this.text;
                return this.fakeElem;
              }
            }, {
              key: "selectFake",
              value: function selectFake() {
                var _this = this;
                var fakeElem = this.createFakeElement();
                this.fakeHandlerCallback = function() {
                  return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || true;
                this.container.appendChild(fakeElem);
                this.selectedText = select_default()(fakeElem);
                this.copyText();
                this.removeFake();
              }
            }, {
              key: "removeFake",
              value: function removeFake() {
                if (this.fakeHandler) {
                  this.container.removeEventListener("click", this.fakeHandlerCallback);
                  this.fakeHandler = null;
                  this.fakeHandlerCallback = null;
                }
                if (this.fakeElem) {
                  this.container.removeChild(this.fakeElem);
                  this.fakeElem = null;
                }
              }
            }, {
              key: "selectTarget",
              value: function selectTarget() {
                this.selectedText = select_default()(this.target);
                this.copyText();
              }
            }, {
              key: "copyText",
              value: function copyText() {
                var succeeded;
                try {
                  succeeded = document.execCommand(this.action);
                } catch (err) {
                  succeeded = false;
                }
                this.handleResult(succeeded);
              }
            }, {
              key: "handleResult",
              value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? "success" : "error", {
                  action: this.action,
                  text: this.selectedText,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this)
                });
              }
            }, {
              key: "clearSelection",
              value: function clearSelection() {
                if (this.trigger) {
                  this.trigger.focus();
                }
                document.activeElement.blur();
                window.getSelection().removeAllRanges();
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.removeFake();
              }
            }, {
              key: "action",
              set: function set2() {
                var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "copy";
                this._action = action;
                if (this._action !== "copy" && this._action !== "cut") {
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
              },
              get: function get2() {
                return this._action;
              }
            }, {
              key: "target",
              set: function set2(target) {
                if (target !== void 0) {
                  if (target && _typeof(target) === "object" && target.nodeType === 1) {
                    if (this.action === "copy" && target.hasAttribute("disabled")) {
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }
                    if (this.action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                      throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                    }
                    this._target = target;
                  } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                  }
                }
              },
              get: function get2() {
                return this._target;
              }
            }]);
            return ClipboardAction2;
          }();
          var clipboard_action = ClipboardAction;
          function clipboard_typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              clipboard_typeof = function _typeof2(obj2) {
                return typeof obj2;
              };
            } else {
              clipboard_typeof = function _typeof2(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return clipboard_typeof(obj);
          }
          function clipboard_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function clipboard_defineProperties(target, props) {
            for (var i3 = 0; i3 < props.length; i3++) {
              var descriptor = props[i3];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function clipboard_createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              clipboard_defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              clipboard_defineProperties(Constructor, staticProps);
            return Constructor;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
            if (superClass)
              _setPrototypeOf(subClass, superClass);
          }
          function _setPrototypeOf(o2, p2) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
              o3.__proto__ = p3;
              return o3;
            };
            return _setPrototypeOf(o2, p2);
          }
          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived), result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }
          function _possibleConstructorReturn(self2, call) {
            if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
              return call;
            }
            return _assertThisInitialized(self2);
          }
          function _assertThisInitialized(self2) {
            if (self2 === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self2;
          }
          function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy === "function")
              return true;
            try {
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              }));
              return true;
            } catch (e2) {
              return false;
            }
          }
          function _getPrototypeOf(o2) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
              return o3.__proto__ || Object.getPrototypeOf(o3);
            };
            return _getPrototypeOf(o2);
          }
          function getAttributeValue(suffix, element) {
            var attribute = "data-clipboard-".concat(suffix);
            if (!element.hasAttribute(attribute)) {
              return;
            }
            return element.getAttribute(attribute);
          }
          var Clipboard2 = /* @__PURE__ */ function(_Emitter) {
            _inherits(Clipboard3, _Emitter);
            var _super = _createSuper(Clipboard3);
            function Clipboard3(trigger, options2) {
              var _this;
              clipboard_classCallCheck(this, Clipboard3);
              _this = _super.call(this);
              _this.resolveOptions(options2);
              _this.listenClick(trigger);
              return _this;
            }
            clipboard_createClass(Clipboard3, [{
              key: "resolveOptions",
              value: function resolveOptions() {
                var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.action = typeof options2.action === "function" ? options2.action : this.defaultAction;
                this.target = typeof options2.target === "function" ? options2.target : this.defaultTarget;
                this.text = typeof options2.text === "function" ? options2.text : this.defaultText;
                this.container = clipboard_typeof(options2.container) === "object" ? options2.container : document.body;
              }
            }, {
              key: "listenClick",
              value: function listenClick(trigger) {
                var _this2 = this;
                this.listener = listen_default()(trigger, "click", function(e2) {
                  return _this2.onClick(e2);
                });
              }
            }, {
              key: "onClick",
              value: function onClick(e2) {
                var trigger = e2.delegateTarget || e2.currentTarget;
                if (this.clipboardAction) {
                  this.clipboardAction = null;
                }
                this.clipboardAction = new clipboard_action({
                  action: this.action(trigger),
                  target: this.target(trigger),
                  text: this.text(trigger),
                  container: this.container,
                  trigger,
                  emitter: this
                });
              }
            }, {
              key: "defaultAction",
              value: function defaultAction(trigger) {
                return getAttributeValue("action", trigger);
              }
            }, {
              key: "defaultTarget",
              value: function defaultTarget(trigger) {
                var selector = getAttributeValue("target", trigger);
                if (selector) {
                  return document.querySelector(selector);
                }
              }
            }, {
              key: "defaultText",
              value: function defaultText(trigger) {
                return getAttributeValue("text", trigger);
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.listener.destroy();
                if (this.clipboardAction) {
                  this.clipboardAction.destroy();
                  this.clipboardAction = null;
                }
              }
            }], [{
              key: "isSupported",
              value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                var actions = typeof action === "string" ? [action] : action;
                var support = !!document.queryCommandSupported;
                actions.forEach(function(action2) {
                  support = support && !!document.queryCommandSupported(action2);
                });
                return support;
              }
            }]);
            return Clipboard3;
          }(tiny_emitter_default());
          var clipboard2 = Clipboard2;
        },
        828: function(module2) {
          var DOCUMENT_NODE_TYPE = 9;
          if (typeof Element !== "undefined" && !Element.prototype.matches) {
            var proto2 = Element.prototype;
            proto2.matches = proto2.matchesSelector || proto2.mozMatchesSelector || proto2.msMatchesSelector || proto2.oMatchesSelector || proto2.webkitMatchesSelector;
          }
          function closest(element, selector) {
            while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
              if (typeof element.matches === "function" && element.matches(selector)) {
                return element;
              }
              element = element.parentNode;
            }
          }
          module2.exports = closest;
        },
        438: function(module2, __unused_webpack_exports, __webpack_require__2) {
          var closest = __webpack_require__2(828);
          function _delegate(element, selector, type, callback, useCapture) {
            var listenerFn = listener.apply(this, arguments);
            element.addEventListener(type, listenerFn, useCapture);
            return {
              destroy: function() {
                element.removeEventListener(type, listenerFn, useCapture);
              }
            };
          }
          function delegate(elements, selector, type, callback, useCapture) {
            if (typeof elements.addEventListener === "function") {
              return _delegate.apply(null, arguments);
            }
            if (typeof type === "function") {
              return _delegate.bind(null, document).apply(null, arguments);
            }
            if (typeof elements === "string") {
              elements = document.querySelectorAll(elements);
            }
            return Array.prototype.map.call(elements, function(element) {
              return _delegate(element, selector, type, callback, useCapture);
            });
          }
          function listener(element, selector, type, callback) {
            return function(e2) {
              e2.delegateTarget = closest(e2.target, selector);
              if (e2.delegateTarget) {
                callback.call(element, e2);
              }
            };
          }
          module2.exports = delegate;
        },
        879: function(__unused_webpack_module, exports3) {
          exports3.node = function(value) {
            return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
          };
          exports3.nodeList = function(value) {
            var type = Object.prototype.toString.call(value);
            return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports3.node(value[0]));
          };
          exports3.string = function(value) {
            return typeof value === "string" || value instanceof String;
          };
          exports3.fn = function(value) {
            var type = Object.prototype.toString.call(value);
            return type === "[object Function]";
          };
        },
        370: function(module2, __unused_webpack_exports, __webpack_require__2) {
          var is = __webpack_require__2(879);
          var delegate = __webpack_require__2(438);
          function listen(target, type, callback) {
            if (!target && !type && !callback) {
              throw new Error("Missing required arguments");
            }
            if (!is.string(type)) {
              throw new TypeError("Second argument must be a String");
            }
            if (!is.fn(callback)) {
              throw new TypeError("Third argument must be a Function");
            }
            if (is.node(target)) {
              return listenNode(target, type, callback);
            } else if (is.nodeList(target)) {
              return listenNodeList(target, type, callback);
            } else if (is.string(target)) {
              return listenSelector(target, type, callback);
            } else {
              throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
          }
          function listenNode(node, type, callback) {
            node.addEventListener(type, callback);
            return {
              destroy: function() {
                node.removeEventListener(type, callback);
              }
            };
          }
          function listenNodeList(nodeList, type, callback) {
            Array.prototype.forEach.call(nodeList, function(node) {
              node.addEventListener(type, callback);
            });
            return {
              destroy: function() {
                Array.prototype.forEach.call(nodeList, function(node) {
                  node.removeEventListener(type, callback);
                });
              }
            };
          }
          function listenSelector(selector, type, callback) {
            return delegate(document.body, selector, type, callback);
          }
          module2.exports = listen;
        },
        817: function(module2) {
          function select(element) {
            var selectedText;
            if (element.nodeName === "SELECT") {
              element.focus();
              selectedText = element.value;
            } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
              var isReadOnly = element.hasAttribute("readonly");
              if (!isReadOnly) {
                element.setAttribute("readonly", "");
              }
              element.select();
              element.setSelectionRange(0, element.value.length);
              if (!isReadOnly) {
                element.removeAttribute("readonly");
              }
              selectedText = element.value;
            } else {
              if (element.hasAttribute("contenteditable")) {
                element.focus();
              }
              var selection = window.getSelection();
              var range = document.createRange();
              range.selectNodeContents(element);
              selection.removeAllRanges();
              selection.addRange(range);
              selectedText = selection.toString();
            }
            return selectedText;
          }
          module2.exports = select;
        },
        279: function(module2) {
          function E2() {
          }
          E2.prototype = {
            on: function(name, callback, ctx) {
              var e2 = this.e || (this.e = {});
              (e2[name] || (e2[name] = [])).push({
                fn: callback,
                ctx
              });
              return this;
            },
            once: function(name, callback, ctx) {
              var self2 = this;
              function listener() {
                self2.off(name, listener);
                callback.apply(ctx, arguments);
              }
              listener._ = callback;
              return this.on(name, listener, ctx);
            },
            emit: function(name) {
              var data2 = [].slice.call(arguments, 1);
              var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
              var i3 = 0;
              var len = evtArr.length;
              for (i3; i3 < len; i3++) {
                evtArr[i3].fn.apply(evtArr[i3].ctx, data2);
              }
              return this;
            },
            off: function(name, callback) {
              var e2 = this.e || (this.e = {});
              var evts = e2[name];
              var liveEvents = [];
              if (evts && callback) {
                for (var i3 = 0, len = evts.length; i3 < len; i3++) {
                  if (evts[i3].fn !== callback && evts[i3].fn._ !== callback)
                    liveEvents.push(evts[i3]);
                }
              }
              liveEvents.length ? e2[name] = liveEvents : delete e2[name];
              return this;
            }
          };
          module2.exports = E2;
          module2.exports.TinyEmitter = E2;
        }
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
          return __webpack_module_cache__[moduleId].exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          exports: {}
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? function() {
            return module2["default"];
          } : function() {
            return module2;
          };
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      }();
      !function() {
        __webpack_require__.d = function(exports3, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports3, key)) {
              Object.defineProperty(exports3, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      return __webpack_require__(134);
    }().default;
  });
})(clipboard);
var Clipboard = /* @__PURE__ */ getDefaultExportFromCjs(clipboard.exports);
var render$1b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", { ref: "copy", staticClass: "\n    copy\n    focus:outline-none\n    absolute\n    right-0\n    bottom-0\n    px-2\n    py-2\n    m-1\n    d-prose-code-filename-text d-prose-code-filename-bg\n    text-xs\n    leading-none\n    rounded-lg\n    font-mono font-semibold\n  " }, [_vm.state === "copied" ? _c("IconCheck", { staticClass: "w-4 h-4" }) : _c("IconCopy", { staticClass: "w-4 h-4" })], 1);
};
var staticRenderFns$1b = [];
render$1b._withStripped = true;
const __vue2_script$1f = defineComponent$2({
  setup() {
    const copy = CompositionApi.ref();
    const state = CompositionApi.ref("init");
    CompositionApi.onMounted(() => {
      const copyCode = new Clipboard(copy.value, {
        target(trigger) {
          return trigger.previousElementSibling;
        }
      });
      copyCode.on("success", (event) => {
        event.clearSelection();
        state.value = "copied";
        window.setTimeout(() => {
          state.value = "init";
        }, 2e3);
      });
    });
    return {
      state,
      copy
    };
  }
});
const __cssModules$1f = {};
var __component__$1f = /* @__PURE__ */ normalizeComponent(__vue2_script$1f, render$1b, staticRenderFns$1b, false, __vue2_injectStyles$1f, null, null, null);
function __vue2_injectStyles$1f(context) {
  for (let o2 in __cssModules$1f) {
    this[o2] = __cssModules$1f[o2];
  }
}
__component__$1f.options.__file = "node_modules/@docus/theme/dist/components/atoms/CopyButton.vue";
var CopyButton = /* @__PURE__ */ function() {
  return __component__$1f.exports;
}();
var render$1a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "relative inline-block text-left", on: { "mouseenter": function($event) {
    _vm.open = true;
  }, "mouseleave": function($event) {
    _vm.open = false;
  }, "keydown": function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "escape", void 0, $event.key, void 0)) {
      return null;
    }
    _vm.open = false;
  } } }, [_vm._t("trigger", null, { "toggle": _vm.toggle, "open": _vm.open }), _c("Transition", { attrs: { "enter-class": "transform scale-95 opacity-0", "enter-active-class": "transition duration-100 ease-out", "enter-to-class": "transform scale-100 opacity-100", "leave-class": "transform scale-100 opacity-100", "leave-active-class": "transition duration-75 ease-in", "leave-to-class": "transform scale-95 opacity-0" } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.open, expression: "open" }], staticClass: "absolute top-6 z-50 w-auto origin-top-right rounded-md shadow-lg ring-1 ring-gray-200 dark:ring-gray-800" }, [_c("div", { staticClass: "bg-white rounded-md dark:bg-gray-800" }, [_vm._t("default")], 2)])])], 2);
};
var staticRenderFns$1a = [];
render$1a._withStripped = true;
const __vue2_script$1e = defineComponent$2({
  setup() {
    const open = CompositionApi.ref();
    const toggle = open.value = !open.value;
    const close = open.value = false;
    return {
      open,
      toggle,
      close
    };
  }
});
const __cssModules$1e = {};
var __component__$1e = /* @__PURE__ */ normalizeComponent(__vue2_script$1e, render$1a, staticRenderFns$1a, false, __vue2_injectStyles$1e, null, null, null);
function __vue2_injectStyles$1e(context) {
  for (let o2 in __cssModules$1e) {
    this[o2] = __cssModules$1e[o2];
  }
}
__component__$1e.options.__file = "node_modules/@docus/theme/dist/components/atoms/Dropdown.vue";
var Dropdown = /* @__PURE__ */ function() {
  return __component__$1e.exports;
}();
var render$19 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("NuxtLink", { staticClass: "d-header-logo", attrs: { "to": _vm.localePath("/"), "aria-label": _vm.settings.title } }, [!_vm.hasLogo && _vm.hasTitle ? _c("span", { staticClass: "d-header-title" }, [_vm._v(" " + _vm._s(_vm.settings.title) + " ")]) : _vm.hasLogo && _vm.hasTitle ? [_c("Logo", { staticClass: "d-logo" }), _c("span", { staticClass: "d-header-title-logo" }, [_vm._v(" " + _vm._s(_vm.settings.title) + " ")])] : _vm.hasLogo ? _c("Logo", { staticClass: "d-logo" }) : _c("ProseCodeInline", [_vm._v("No header.logo")])], 2);
};
var staticRenderFns$19 = [];
render$19._withStripped = true;
const __vue2_script$1d = defineComponent$2({
  setup() {
    const { $docus } = useContext();
    const hasLogo = CompositionApi.computed(() => $docus.theme.value.header.logo);
    const hasTitle = CompositionApi.computed(() => $docus.theme.value.header.title);
    return {
      hasLogo,
      hasTitle,
      settings: $docus.settings
    };
  }
});
const __cssModules$1d = {};
var __component__$1d = /* @__PURE__ */ normalizeComponent(__vue2_script$1d, render$19, staticRenderFns$19, false, __vue2_injectStyles$1d, null, null, null);
function __vue2_injectStyles$1d(context) {
  for (let o2 in __cssModules$1d) {
    this[o2] = __cssModules$1d[o2];
  }
}
__component__$1d.options.__file = "node_modules/@docus/theme/dist/components/atoms/HeaderLogo.vue";
var HeaderLogo = /* @__PURE__ */ function() {
  return __component__$1d.exports;
}();
var render$18 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { staticClass: "\n    text-xs text-primary-500\n    px-2.5\n    py-1.5\n    leading-none\n    rounded\n    font-semibold\n    uppercase\n    tracking-wide\n    bg-primary-100\n    dark:bg-primary-900 dark:text-primary-400\n  " }, [_vm._v(" " + _vm._s(_vm.label) + " ")]);
};
var staticRenderFns$18 = [];
render$18._withStripped = true;
const __vue2_script$1c = defineComponent$2({
  props: {
    label: {
      type: String,
      default: ""
    }
  }
});
const __cssModules$1c = {};
var __component__$1c = /* @__PURE__ */ normalizeComponent(__vue2_script$1c, render$18, staticRenderFns$18, false, __vue2_injectStyles$1c, null, null, null);
function __vue2_injectStyles$1c(context) {
  for (let o2 in __cssModules$1c) {
    this[o2] = __cssModules$1c[o2];
  }
}
__component__$1c.options.__file = "node_modules/@docus/theme/dist/components/atoms/InfoLabel.vue";
var InfoLabel = /* @__PURE__ */ function() {
  return __component__$1c.exports;
}();
const __vue2_script$1b = defineComponent$2({
  functional: true,
  props: {
    component: {
      type: [String, Object, Array],
      required: true
    },
    tag: {
      type: String,
      default: "span"
    }
  },
  render(h2, { props, data: data2, slots, children }) {
    if (typeof props.component === "string" && Vue__default["default"].component(props.component)) {
      return h2(props.component, data2, children);
    }
    return h2(props.tag, data2, slots().default);
  }
});
let __vue2_render$3, __vue2_staticRenderFns$3;
const __cssModules$1b = {};
var __component__$1b = /* @__PURE__ */ normalizeComponent(__vue2_script$1b, __vue2_render$3, __vue2_staticRenderFns$3, false, __vue2_injectStyles$1b, null, null, null);
function __vue2_injectStyles$1b(context) {
  for (let o2 in __cssModules$1b) {
    this[o2] = __cssModules$1b[o2];
  }
}
__component__$1b.options.__file = "node_modules/@docus/theme/dist/components/atoms/InjectComponent.vue";
var InjectComponent = /* @__PURE__ */ function() {
  return __component__$1b.exports;
}();
var render$17 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("DocusContent", { attrs: { "document": _vm.page } });
};
var staticRenderFns$17 = [];
render$17._withStripped = true;
const __vue2_script$1a = {
  props: {
    query: {
      type: String,
      required: true
    }
  },
  data: () => ({
    page: {}
  }),
  async fetch() {
    this.page = await this.$docus.page(this.query);
  }
};
const __cssModules$1a = {};
var __component__$1a = /* @__PURE__ */ normalizeComponent(__vue2_script$1a, render$17, staticRenderFns$17, false, __vue2_injectStyles$1a, null, null, null);
function __vue2_injectStyles$1a(context) {
  for (let o2 in __cssModules$1a) {
    this[o2] = __cssModules$1a[o2];
  }
}
__component__$1a.options.__file = "node_modules/@docus/theme/dist/components/atoms/InjectContent.vue";
var InjectContent = /* @__PURE__ */ function() {
  return __component__$1a.exports;
}();
var render$16 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.$i18n.locales.length > 1 ? _c("Dropdown", { staticClass: "inline-flex", scopedSlots: _vm._u([{ key: "trigger", fn: function(ref) {
    var open = ref.open;
    var toggle = ref.toggle;
    return [_c("button", { staticClass: "d-text-icon", class: [
      _vm.padding,
      {
        "text-gray-700 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-400": open
      }
    ], on: { "touchstart": function($event) {
      $event.stopPropagation();
      $event.preventDefault();
      return toggle.apply(null, arguments);
    } } }, [_c("IconTranslate", { class: _vm.size })], 1)];
  } }], null, false, 1217920675) }, [_c("ul", { staticClass: "py-1" }, _vm._l(_vm.$i18n.locales, function(locale) {
    return _c("li", { key: locale.code }, [_c("NuxtLink", { staticClass: "px-4 py-1 flex items-center whitespace-no-wrap", class: [
      _vm.$i18n.locale === locale.code ? "font-semibold cursor-default text-gray-800 dark:text-gray-200" : "hover:d-text-primary"
    ], attrs: { "to": _vm.switchLocalePath(locale.code) } }, [_vm._v(_vm._s(locale.name))])], 1);
  }), 0)]) : _vm._e();
};
var staticRenderFns$16 = [];
render$16._withStripped = true;
const __vue2_script$19 = defineComponent$2({
  props: {
    size: {
      type: String,
      default: "w-6 h-6"
    },
    padding: {
      type: String,
      default: "p-0"
    }
  }
});
const __cssModules$19 = {};
var __component__$19 = /* @__PURE__ */ normalizeComponent(__vue2_script$19, render$16, staticRenderFns$16, false, __vue2_injectStyles$19, null, null, null);
function __vue2_injectStyles$19(context) {
  for (let o2 in __cssModules$19) {
    this[o2] = __cssModules$19[o2];
  }
}
__component__$19.options.__file = "node_modules/@docus/theme/dist/components/atoms/LangSwitcher.vue";
var LangSwitcher = /* @__PURE__ */ function() {
  return __component__$19.exports;
}();
var render$15 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.isInternal ? _c("NuxtLink", { attrs: { "to": _vm.$contentLocalePath(_vm.to) } }, [_vm._t("default"), _vm._t("nuxt-link")], 2) : _c("a", _vm._b({ attrs: { "href": _vm.to } }, "a", _vm.linkAttrs, false), [_vm._t("default"), _vm._t("href")], 2);
};
var staticRenderFns$15 = [];
render$15._withStripped = true;
const __vue2_script$18 = defineComponent$2({
  props: {
    to: {
      type: String,
      required: true
    },
    blank: {
      type: Boolean,
      default: false
    },
    static: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const isInternal = CompositionApi.computed(() => !props.static && props.to.startsWith("/") && props.to.startsWith("//") === false);
    const linkAttrs = CompositionApi.computed(() => ({
      rel: isInternal.value ? void 0 : "noopener nofollow noreferrer",
      target: props.blank ? "_blank" : void 0
    }));
    return {
      isInternal,
      linkAttrs
    };
  }
});
const __cssModules$18 = {};
var __component__$18 = /* @__PURE__ */ normalizeComponent(__vue2_script$18, render$15, staticRenderFns$15, false, __vue2_injectStyles$18, null, null, null);
function __vue2_injectStyles$18(context) {
  for (let o2 in __cssModules$18) {
    this[o2] = __cssModules$18[o2];
  }
}
__component__$18.options.__file = "node_modules/@docus/theme/dist/components/atoms/Link.vue";
var Link = /* @__PURE__ */ function() {
  return __component__$18.exports;
}();
var render$14 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", _vm._l(_vm.listItems, function(item, i3) {
    return _c("div", { key: i3, staticClass: "mt-3 flex items-center" }, [_c("span", { staticClass: "mt-px mr-3 flex-shrink-0", class: "list-" + _vm.type }, [_c(_vm.iconName, { tag: "Component", staticClass: "h-6 w-6" })], 1), _c("span", [_c("Markdown", { attrs: { "use": item } })], 1)]);
  }), 0);
};
var staticRenderFns$14 = [];
render$14._withStripped = true;
var List_vue_vue_type_style_index_0_lang = "";
const __vue2_script$17 = {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "info", "success", "warning", "danger"].includes(value);
      }
    }
  },
  setup(props) {
    const textContent = CompositionApi.ref("");
    const iconName = CompositionApi.computed(() => props.icon || {
      primary: "IconBadgeCheck",
      info: "IconInformationCircle",
      success: "IconCheckCircle",
      warning: "IconExclamationCircle",
      danger: "IconXCircle"
    }[props.type]);
    return {
      textContent,
      iconName
    };
  },
  computed: {
    listItems() {
      this.textContent;
      const defaultSlot = this.$slots.default || [];
      if (!defaultSlot) {
        return this.items;
      }
      return flatUnwrap$1(defaultSlot, ["p", "ul", "li"]);
    }
  },
  updated() {
    this.textContent = nodeTextContent(this.$slots.default);
  }
};
const __cssModules$17 = {};
var __component__$17 = /* @__PURE__ */ normalizeComponent(__vue2_script$17, render$14, staticRenderFns$14, false, __vue2_injectStyles$17, null, null, null);
function __vue2_injectStyles$17(context) {
  for (let o2 in __cssModules$17) {
    this[o2] = __cssModules$17[o2];
  }
}
__component__$17.options.__file = "node_modules/@docus/theme/dist/components/atoms/List.vue";
var List = /* @__PURE__ */ function() {
  return __component__$17.exports;
}();
var render$13 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "inline-flex items-center space-x-3" }, [_c("svg", { staticClass: "h-8", attrs: { "viewBox": "0 0 221 65", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" }, on: { "click": _vm.home } }, [_c("g", { attrs: { "clip-path": "url(#a)" } }, [_c("path", { attrs: { "fill": "currentColor", "d": "M82.5623 18.5705h7.3017l15.474 24.7415V18.5705h6.741v35.0576h-7.252L89.3025 28.938v24.6901h-6.7402V18.5705ZM142.207 53.628h-6.282v-3.916c-1.429 2.7559-4.339 4.3076-8.015 4.3076-5.822 0-9.603-4.1069-9.603-10.0175V28.3847h6.282v14.3251c0 3.4558 2.146 5.8592 5.362 5.8592 3.524 0 5.974-2.7044 5.974-6.4099V28.3847h6.282V53.628ZM164.064 53.2289l-6.026-8.4144-6.027 8.4144h-6.69l9.296-13.1723-8.58-12.0709h6.843l5.158 7.2641 5.106-7.2641h6.895l-8.632 12.0709 9.295 13.1723h-6.638ZM183.469 20.7726v7.6116h7.149v5.1593h-7.149v12.5311c0 .4208.17.8245.473 1.1223.303.2978.715.4654 1.144.4661h5.532v5.9547h-4.137c-5.617 0-9.293-3.2062-9.293-8.8109V33.5484h-5.056v-5.1642h3.172c1.479 0 2.34-.8639 2.34-2.2932v-5.3184h5.825Z" } }), _c("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M30.1185 11.5456c-1.8853-3.24168-6.5987-3.24169-8.484 0L1.08737 46.8747c-1.885324 3.2417.47133 7.2938 4.24199 7.2938H21.3695c-1.6112-1.4081-2.2079-3.8441-.9886-5.9341l15.5615-26.675-5.8239-10.0138Z", "fill": "#80EEC0" } }), _c("path", { attrs: { "d": "M43.1374 19.2952c1.5603-2.6523 5.461-2.6523 7.0212 0l17.0045 28.9057c1.5603 2.6522-.39 5.9676-3.5106 5.9676h-34.009c-3.1206 0-5.0709-3.3154-3.5106-5.9676l17.0045-28.9057ZM209.174 53.8005H198.483c0-1.8514.067-3.4526 0-6.0213h10.641c1.868 0 3.353.1001 4.354-.934 1-1.0341 1.501-2.3351 1.501-3.9029 0-1.8347-.667-3.2191-2.002-4.1532-1.301-.9674-2.985-1.4511-5.054-1.4511h-2.601v-5.2539h2.652c1.701 0 3.119-.4003 4.253-1.2009 1.134-.8006 1.701-1.9849 1.701-3.5527 0-1.301-.434-2.3351-1.301-3.1023-.834-.8007-2.001-1.201-3.503-1.201-1.634 0-2.918.4837-3.853 1.4511-.9.9674-1.401 2.1517-1.501 3.5527h-6.254c.133-3.2358 1.251-5.7877 3.352-7.6558 2.135-1.868 4.887-2.8021 8.256-2.8021 2.402 0 4.42.4337 6.055 1.301 1.668.834 2.919 1.9515 3.753 3.3525.867 1.4011 1.301 2.9523 1.301 4.6536 0 1.9681-.551 3.636-1.651 5.0037-1.068 1.3344-2.402 2.235-4.004 2.7021 1.969.4003 3.57 1.3677 4.804 2.9022 1.234 1.5011 1.852 3.4025 1.852 5.7043 0 1.9347-.468 3.7028-1.402 5.304-.934 1.6012-2.301 2.8855-4.103 3.8529-1.768.9674-3.953 1.4511-6.555 1.4511Z", "fill": "#00DC82" } })]), _c("defs", [_c("clipPath", { attrs: { "id": "a" } }, [_c("path", { attrs: { "fill": "#fff", "d": "M0 0h221v65H0z" } })])])]), _c("span", { staticClass: "inline-flex items-center mt-1.2 px-2 py-0.5 rounded text-xs font-medium font-mono bg-cloud-surface dark:bg-sky-dark dark:text-white" }, [_vm._v("beta")])]);
};
var staticRenderFns$13 = [];
render$13._withStripped = true;
const __vue2_script$16 = {
  methods: {
    home() {
      if (this.$route.path === "/") {
        window.scrollTo(0, 0);
      }
    }
  }
};
const __cssModules$16 = {};
var __component__$16 = /* @__PURE__ */ normalizeComponent(__vue2_script$16, render$13, staticRenderFns$13, false, __vue2_injectStyles$16, null, null, null);
function __vue2_injectStyles$16(context) {
  for (let o2 in __cssModules$16) {
    this[o2] = __cssModules$16[o2];
  }
}
__component__$16.options.__file = "components/atoms/Logo.vue";
var Logo = /* @__PURE__ */ function() {
  return __component__$16.exports;
}();
var render$12 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.component ? _c("ProseTable", [_c("ProseThead", [_c("ProseTr", [_c("ProseTh", [_vm._v("Prop")]), _c("ProseTh", [_vm._v("Type")]), _vm.showRequired ? _c("ProseTh", [_vm._v("Required")]) : _vm._e(), _vm.showDefault ? _c("ProseTh", [_vm._v("Default")]) : _vm._e(), _vm.showValues ? _c("ProseTh", [_vm._v("Values")]) : _vm._e(), _vm.showDescription ? _c("ProseTh", [_vm._v("Description")]) : _vm._e()], 1)], 1), _c("ProseTbody", _vm._l(_vm.properties, function(prop) {
    return _c("ProseTr", { key: prop.name }, [_c("ProseTd", [_c("ProseCodeInline", [_vm._v(_vm._s(prop.name))])], 1), _c("ProseTd", [_c("ProseCodeInline", [_vm._v(_vm._s(prop.type && prop.type.name))])], 1), _vm.showRequired ? _c("ProseTd", [_vm._v(_vm._s(prop.required ? "Yes" : "No"))]) : _vm._e(), _vm.showDefault ? _c("ProseTd", [prop.defaultValue ? _c("ProseCodeInline", [_vm._v(_vm._s(prop.defaultValue && prop.defaultValue.value))]) : _vm._e()], 1) : _vm._e(), _vm.showValues ? _c("ProseTd", [prop.values ? _c("ProseCodeInline", [_vm._v(_vm._s(prop.values && JSON.stringify(prop.values).replace(/,/g, ", ")))]) : _c("span", [_vm._v("-")])], 1) : _vm._e(), _vm.showDescription ? _c("ProseTd", [_c("div", { domProps: { "innerHTML": _vm._s(prop.description) } })]) : _vm._e()], 1);
  }), 1)], 1) : _vm._e();
};
var staticRenderFns$12 = [];
render$12._withStripped = true;
const __vue2_script$15 = defineComponent$2({
  props: {
    of: {
      type: String,
      default: void 0
    },
    data: {
      type: Object,
      default: () => ({})
    },
    required: {
      type: Boolean,
      default: void 0
    },
    values: {
      type: Boolean,
      default: void 0
    },
    description: {
      type: Boolean,
      default: void 0
    },
    defaultValue: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props) {
    const component = CompositionApi.computed(() => props.data);
    const properties = CompositionApi.computed(() => {
      var _a;
      return (_a = component.value.props) == null ? void 0 : _a.filter((prop) => {
        var _a2;
        return !((_a2 = prop.tags) == null ? void 0 : _a2.ignore);
      });
    });
    const showRequired = CompositionApi.computed(() => {
      var _a;
      if (props.required !== void 0) {
        return props.required;
      }
      return (_a = properties.value) == null ? void 0 : _a.find((prop) => prop.required !== void 0);
    });
    const showValues = CompositionApi.computed(() => {
      var _a;
      if (props.values !== void 0) {
        return props.values;
      }
      return (_a = properties.value) == null ? void 0 : _a.find((prop) => prop.values);
    });
    const showDescription = CompositionApi.computed(() => {
      var _a;
      if (props.description !== void 0) {
        return props.description;
      }
      return (_a = properties.value) == null ? void 0 : _a.find((prop) => prop.description);
    });
    const showDefault = CompositionApi.computed(() => {
      var _a;
      if (props.defaultValue !== void 0) {
        return props.defaultValue;
      }
      return (_a = properties.value) == null ? void 0 : _a.find((prop) => prop.defaultValue);
    });
    return {
      component,
      properties,
      showRequired,
      showValues,
      showDescription,
      showDefault
    };
  }
});
const __cssModules$15 = {};
var __component__$15 = /* @__PURE__ */ normalizeComponent(__vue2_script$15, render$12, staticRenderFns$12, false, __vue2_injectStyles$15, null, null, null);
function __vue2_injectStyles$15(context) {
  for (let o2 in __cssModules$15) {
    this[o2] = __cssModules$15[o2];
  }
}
__component__$15.options.__file = "node_modules/@docus/theme/dist/components/atoms/Props.vue";
var Props = /* @__PURE__ */ function() {
  return __component__$15.exports;
}();
var render$11 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("NuxtLink", { staticClass: "\n    hidden\n    px-3\n    font-medium\n    text-gray-400\n    transition-colors\n    duration-200\n    dark:text-gray-500\n    hover:text-gray-500\n    dark:hover:text-gray-400\n    lg:block\n  ", attrs: { "to": _vm.localePath("/releases"), "exact-active-class": "text-primary-500 dark:text-primary-400" } }, [_vm._v(" " + _vm._s(_vm.version) + " ")]);
};
var staticRenderFns$11 = [];
render$11._withStripped = true;
const __vue2_script$14 = defineComponent$2({
  props: {
    version: {
      type: String,
      required: true
    }
  }
});
const __cssModules$14 = {};
var __component__$14 = /* @__PURE__ */ normalizeComponent(__vue2_script$14, render$11, staticRenderFns$11, false, __vue2_injectStyles$14, null, null, null);
function __vue2_injectStyles$14(context) {
  for (let o2 in __cssModules$14) {
    this[o2] = __cssModules$14[o2];
  }
}
__component__$14.options.__file = "node_modules/@docus/theme/dist/components/atoms/ReleaseTag.vue";
var ReleaseTag = /* @__PURE__ */ function() {
  return __component__$14.exports;
}();
var render$10 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "box", staticClass: "w-full min-h-[500px] mx-auto mb-6 overflow-hidden text-3xl rounded-md sandbox" }, [!_vm.src ? _c("TabsHeader", { attrs: { "active-tab-index": _vm.activeTabIndex, "tabs": _vm.providersTabs }, on: { "update": _vm.updateTab } }, [_c("div", { staticClass: "absolute top-1/2 transform -translate-y-1/2 right-0 px-2", attrs: { "slot": "footer" }, slot: "footer" }, [_c("Link", { staticClass: "flex items-center text-gray-500 dark:text-gray-400", attrs: { "to": _vm.url, "blank": "" } }, [_c("IconExternalLink", { staticClass: "h-5 w-5" })], 1)], 1)]) : _vm._e(), _vm.isIntersecting && _vm.url ? _c("iframe", { staticClass: "w-full h-full min-h-[500px] overflow-hidden", attrs: { "src": _vm.url, "title": "Sandbox editor", "sandbox": "allow-modals allow-forms allow-popups allow-scripts allow-same-origin" } }) : _c("span", { staticClass: "text-white flex-1" }, [_vm._v("Loading Sandbox...")])], 1);
};
var staticRenderFns$10 = [];
render$10._withStripped = true;
var Sandbox_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$13 = defineComponent$2({
  props: {
    src: {
      type: String,
      default: void 0
    },
    repo: {
      type: String,
      default: void 0
    },
    branch: {
      type: String,
      default: void 0
    },
    dir: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    const { $colorMode } = useContext();
    const providers = {
      CodeSandBox: () => `https://codesandbox.io/embed/github/${props.repository}/tree/${props.branch}/${props.dir}?hidenavigation=1&theme=${$colorMode.value}`,
      StackBlitz: () => `https://stackblitz.com/github/${props.repository}/tree/${props.branch}/${props.dir}?embed=1&hideExplorer=1&hideNavigation=1&theme=${$colorMode.value}`
    };
    const providersTabs = Object.keys(providers).map((p2) => ({ label: p2 }));
    const box = CompositionApi.ref();
    const activeTabIndex = CompositionApi.ref(0);
    const url2 = CompositionApi.ref("");
    const provider = CompositionApi.ref("");
    const observer = CompositionApi.ref(null);
    const isIntersecting = CompositionApi.ref(false);
    function updateTab(i3) {
      activeTabIndex.value = i3;
      changeProvider(providersTabs[i3].label);
    }
    CompositionApi.onMounted(() => {
      provider.value = window.localStorage.getItem("docus_sandbox") || "CodeSandBox";
      url2.value = props.src || providers[provider.value]();
      if (!window.IntersectionObserver) {
        isIntersecting.value = true;
        return;
      }
      observer.value = new window.IntersectionObserver((entries) => {
        entries.forEach(({ intersectionRatio }) => {
          if (intersectionRatio > 0) {
            isIntersecting.value = true;
            observer.value.disconnect();
            observer.value = null;
          }
        });
      });
      observer.value.observe(box.value);
    });
    CompositionApi.onBeforeUnmount(() => {
      if (observer.value)
        observer.value.disconnect();
    });
    const changeProvider = (value) => {
      provider.value = value;
      url2.value = props.src || providers[provider.value]();
      localStorage.setItem("docus_sandbox", value);
    };
    return {
      isIntersecting,
      box,
      provider,
      url: url2,
      changeProvider,
      updateTab,
      activeTabIndex,
      providersTabs
    };
  }
});
const __cssModules$13 = {};
var __component__$13 = /* @__PURE__ */ normalizeComponent(__vue2_script$13, render$10, staticRenderFns$10, false, __vue2_injectStyles$13, "0ae0ebf2", null, null);
function __vue2_injectStyles$13(context) {
  for (let o2 in __cssModules$13) {
    this[o2] = __cssModules$13[o2];
  }
}
__component__$13.options.__file = "node_modules/@docus/theme/dist/components/atoms/Sandbox.vue";
var Sandbox = /* @__PURE__ */ function() {
  return __component__$13.exports;
}();
var render$$ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "video-player relative my-4 bg-black bg-opacity-25 rounded-sm overflow-hidden", class: { loaded: _vm.loaded } }, [(_vm.provider ? _vm.provider.poster : _vm.poster) ? _c("NuxtImg", { staticClass: "video absolute top-0 left-0 w-full h-full object-cover", attrs: { "src": _vm.provider ? _vm.provider.poster : _vm.poster, "width": 670, "height": 377 } }) : _vm._e(), _vm.loaded ? _c("div", { staticClass: "video absolute top-0 left-0 w-full h-full" }, [!_vm.provider ? _c("video", { attrs: { "poster": _vm.poster, "controls": "", "autoplay": "" } }, [_vm.src ? _c("source", { attrs: { "src": _vm.src } }) : _vm._e(), _vm._l(_vm.sources, function(source) {
    return _c("source", { key: source.src || source, attrs: { "src": source.src || source, "type": source.type } });
  })], 2) : _vm.provider.name === "youtube" ? _c("iframe", { staticClass: "w-full h-full", attrs: { "width": "560", "height": "377", "allow": "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen": "", "src": _vm.provider.src } }) : _vm._e()]) : _vm._e(), !_vm.loaded ? _c("div", { staticClass: "overlay absolute top-0 left-0 w-full h-full cursor-pointer", on: { "click": function($event) {
    _vm.loaded = true;
  } } }, [_c("button", { staticClass: "play" })]) : _vm._e()], 1);
};
var staticRenderFns$$ = [];
render$$._withStripped = true;
var VideoPlayer_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$12 = defineComponent$2({
  props: {
    poster: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    sources: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const provider = CompositionApi.ref(null);
    const loaded = CompositionApi.ref(false);
    if (!props.src && !props.sources.length) {
      throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");
    }
    const src = props.src || props.sources[0].src;
    if (src && src.includes("youtube.com/watch")) {
      const match = src.match(/\?v=([^&]*)/);
      provider.value = {
        name: "youtube",
        src: `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1`,
        poster: props.poster || `https://i3.ytimg.com/vi/${match[1]}/hqdefault.jpg`
      };
    }
    return {
      loaded,
      provider
    };
  }
});
const __cssModules$12 = {};
var __component__$12 = /* @__PURE__ */ normalizeComponent(__vue2_script$12, render$$, staticRenderFns$$, false, __vue2_injectStyles$12, "af288732", null, null);
function __vue2_injectStyles$12(context) {
  for (let o2 in __cssModules$12) {
    this[o2] = __cssModules$12[o2];
  }
}
__component__$12.options.__file = "node_modules/@docus/theme/dist/components/atoms/VideoPlayer.vue";
var VideoPlayer = /* @__PURE__ */ function() {
  return __component__$12.exports;
}();
var render$_ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { attrs: { "id": "docsearch" } }, [_c("button", { staticClass: "DocSearch DocSearch-Button", attrs: { "type": "button", "aria-label": "Search" } }, [_c("svg", { staticClass: "d-icon m-auto", attrs: { "width": "20", "height": "20", "viewBox": "0 0 20 20" } }, [_c("path", { attrs: { "d": "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", "stroke": "currentColor", "fill": "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } })])])]);
};
var staticRenderFns$_ = [];
render$_._withStripped = true;
var AlgoliaSearchBox_vue_vue_type_style_index_0_lang = "";
function isSpecialClick(event) {
  return event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}
const __vue2_script$11 = {
  props: {
    options: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      required: true
    }
  },
  watch: {
    "$i18n.locale"(newValue) {
      this.update(this.options, newValue);
    },
    options(newValue) {
      this.update(newValue, this.$i18n.locale);
    }
  },
  mounted() {
    this.initialize(this.options, this.$i18n.locale);
  },
  methods: {
    stripTrailingSlash(url2) {
      return url2.replace(/\/$|\/(?=\?)|\/(?=#)/g, "");
    },
    getRelativePath(absoluteUrl) {
      const { pathname, hash } = new URL(absoluteUrl);
      const url2 = pathname.replace(this.settings.url, "/") + hash;
      return this.stripTrailingSlash(url2);
    },
    async initialize(userOptions, code) {
      const lang = this.$i18n.locales.find((locale) => locale.code === code);
      const docsearch = await Promise.all([
        Promise.resolve().then(function() {
          return index$2;
        }),
        Promise.resolve().then(function() {
          return style$1;
        })
      ]).then(([docsearch2]) => docsearch2.default);
      docsearch(__spreadProps(__spreadValues({}, userOptions), {
        container: "#docsearch",
        searchParameters: __spreadValues({}, !lang ? {} : {
          facetFilters: [`${userOptions.langAttribute || "language"}:${lang.iso}`].concat(userOptions.facetFilters || [])
        }),
        navigator: {
          navigate: ({ itemUrl }) => {
            const { pathname: hitPathname } = new URL(window.location.origin + itemUrl);
            if (this.$router.history.current.path === hitPathname) {
              window.location.assign(window.location.origin + itemUrl);
            } else {
              this.$router.push(itemUrl);
            }
          }
        },
        transformItems: (items) => {
          return items.map((item) => {
            return __spreadProps(__spreadValues({}, item), {
              url: this.getRelativePath(item.url)
            });
          });
        },
        hitComponent: ({ hit, children }) => {
          return {
            type: "a",
            constructor: void 0,
            __v: 1,
            props: {
              href: hit.url,
              children,
              onClick: (event) => {
                if (isSpecialClick(event)) {
                  return;
                }
                if (this.$router.history.current.fullPath === hit.url) {
                  return;
                }
                const { pathname: hitPathname } = new URL(window.location.origin + hit.url);
                if (this.$router.history.current.path !== hitPathname) {
                  event.preventDefault();
                }
                this.$router.push(hit.url);
              }
            }
          };
        }
      }));
    },
    update(options2, lang) {
      return this.initialize(options2, lang);
    }
  }
};
const __cssModules$11 = {};
var __component__$11 = /* @__PURE__ */ normalizeComponent(__vue2_script$11, render$_, staticRenderFns$_, false, __vue2_injectStyles$11, null, null, null);
function __vue2_injectStyles$11(context) {
  for (let o2 in __cssModules$11) {
    this[o2] = __cssModules$11[o2];
  }
}
__component__$11.options.__file = "components/app/AlgoliaSearchBox.vue";
var AlgoliaSearchBox = /* @__PURE__ */ function() {
  return __component__$11.exports;
}();
var __vue2_script$10 = defineComponent$2({
  setup() {
    const { $docus } = useContext();
    const links = CompositionApi.ref($docus.currentNav.value.links);
    const title2 = CompositionApi.ref($docus.currentNav.value.title);
    const slug = CompositionApi.ref($docus.currentNav.value.slug);
    const isDirectory = CompositionApi.computed(() => links.value.filter((link2) => link2.children && link2.children.length > 0).length === 0);
    CompositionApi.watch($docus.currentNav, (newVal) => {
      links.value = newVal.links;
      title2.value = newVal.title;
      slug.value = newVal.slug;
    }, { deep: true });
    CompositionApi.watch(links, (newVal) => {
      newVal.forEach((link2) => {
        if (link2.children && link2.children.length > 0) {
          const isCategoryActive = link2.children.some((document2) => $docus.isLinkActive(document2.to));
          if (isCategoryActive) {
            link2.collapse = false;
          }
        }
      });
    }, { immediate: true });
    const parent = CompositionApi.computed(() => $docus.currentNav.value.parent);
    const lastRelease = CompositionApi.computed(() => {
      var _a;
      return (_a = $docus.lastRelease) == null ? void 0 : _a.value;
    });
    return { isDirectory, links, title: title2, slug, parent, lastRelease };
  }
});
var render$Z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("nav", { staticClass: "\n    flex flex-col\n    justify-start\n    max-w-sm\n    overflow-y-auto\n    text-sm\n    font-medium\n    lg:h-[reset]\n    h-(full-header)\n    d-scrollbar\n    py-4\n    px-4\n    sm:px-6\n    lg:pr-0 lg:pt-8\n  " }, [["xs", "sm", "md"].includes(_vm.$mq) && _vm.title ? _c("h5", { staticClass: "m-0 py-2 font-medium text-base uppercase" }, [_vm._v(" " + _vm._s(_vm.title) + " ")]) : _vm._e(), _c("ul", [_vm._l(_vm.links, function(link2) {
    return [link2.nested !== false && link2.children.length ? _c("AsideNavigationItem", { key: link2.to, attrs: { "title": link2.title, "docs": link2.children, "collapse": link2.collapse }, on: { "update:collapse": function($event) {
      link2.collapse = $event;
    } } }) : _c("AsideNavigationItem", { key: link2.to, attrs: { "docs": [link2] } })];
  })], 2), _c("AsideBottom")], 1);
};
var staticRenderFns$Z = [];
render$Z._withStripped = true;
const __cssModules$10 = {};
var __component__$10 = /* @__PURE__ */ normalizeComponent(__vue2_script$10, render$Z, staticRenderFns$Z, false, __vue2_injectStyles$10, null, null, null);
function __vue2_injectStyles$10(context) {
  for (let o2 in __cssModules$10) {
    this[o2] = __cssModules$10[o2];
  }
}
__component__$10.options.__file = "components/app/AsideNavigation.vue";
var AsideNavigation = /* @__PURE__ */ function() {
  return __component__$10.exports;
}();
var render$Y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: { active: _vm.isActive } }, [_vm.title ? _c("h5", { staticClass: "d-aside-title", class: [_vm.isActive ? "" : "lg:hover:d-primary-text-hover"], on: { "click": _vm.toggle } }, [_vm._v(" " + _vm._s(_vm.title) + " ")]) : _vm._e(), !_vm.collapse || _vm.isActive ? _c("ul", { staticClass: "mb-2 ml-2" }, _vm._l(_vm.docs, function(doc) {
    return _c("li", { key: doc.to }, [_c("NuxtLink", { staticClass: "block w-full", class: [
      _vm.$docus.isLinkActive(doc.to) ? "d-active-aside-navigation-item-text" : "d-secondary-text hover:d-secondary-text-hover"
    ], attrs: { "to": _vm.$contentLocalePath(doc.redirect || doc.to) } }, [_c("span", { staticClass: "relative inline-flex items-center justify-between px-2 py-1 rounded-md", class: [_vm.$docus.isLinkActive(doc.to) ? "d-active-aside-navigation-item-bg" : ""] }, [doc.icon ? _c("InjectComponent", { staticClass: "inline-flex mr-2 w-5 h-5 justify-center items-center text-1.2rem", attrs: { "component": doc.icon } }, [_vm._v(" " + _vm._s(doc.icon) + " ")]) : _vm._e(), _c("span", [_vm._v(" " + _vm._s(doc.title) + " ")]), _c("ClientOnly", [doc.draft ? _c("span", { staticClass: "w-2 h-2 ml-2 bg-yellow-500 rounded-full opacity-75" }) : _vm.isDocumentNew(doc) ? _c("span", { staticClass: "w-2 h-2 ml-2 rounded-full opacity-75 animate-pulse bg-primary-500" }) : _vm._e()])], 1)])], 1);
  }), 0) : _vm._e()]);
};
var staticRenderFns$Y = [];
render$Y._withStripped = true;
const __vue2_script$$ = defineComponent$2({
  props: {
    title: {
      type: String,
      default: ""
    },
    docs: {
      type: Array,
      required: true
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { $docus } = useContext();
    const isActive = CompositionApi.computed(() => props.docs.some((document2) => $docus.isLinkActive(document2.to)));
    const toggle = () => {
      if (isActive.value)
        return;
      emit("update:collapse", !props.collapse);
    };
    const isDocumentNew = (document2) => {
      return;
    };
    return {
      toggle,
      isActive,
      isDocumentNew
    };
  }
});
const __cssModules$$ = {};
var __component__$$ = /* @__PURE__ */ normalizeComponent(__vue2_script$$, render$Y, staticRenderFns$Y, false, __vue2_injectStyles$$, null, null, null);
function __vue2_injectStyles$$(context) {
  for (let o2 in __cssModules$$) {
    this[o2] = __cssModules$$[o2];
  }
}
__component__$$.options.__file = "node_modules/@docus/theme/dist/components/molecules/AsideNavigationItem.vue";
var AsideNavigationItem = /* @__PURE__ */ function() {
  return __component__$$.exports;
}();
var render$X = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", { staticClass: "py-12 lg:py-24 bg-gray-50 dark:bg-gray-800 dark:bg-opacity-25" }, [_c("div", { staticClass: "d-container-content" }, [_c("h2", { staticClass: "mb-8 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100" }, [_vm._v(" " + _vm._s(_vm.title) + " ")]), _c("div", { staticClass: "\n        grid\n        gap-4\n        font-semibold\n        text-left text-gray-900\n        dark:text-gray-100\n        sm:grid-cols-2\n        lg:grid-cols-3\n        2xl:gap-8\n      " }, [_vm._t("default")], 2)])]);
};
var staticRenderFns$X = [];
render$X._withStripped = true;
const __vue2_script$_ = defineComponent$2({
  props: {
    title: {
      type: String,
      default: "Features"
    }
  }
});
const __cssModules$_ = {};
var __component__$_ = /* @__PURE__ */ normalizeComponent(__vue2_script$_, render$X, staticRenderFns$X, false, __vue2_injectStyles$_, null, null, null);
function __vue2_injectStyles$_(context) {
  for (let o2 in __cssModules$_) {
    this[o2] = __cssModules$_[o2];
  }
}
__component__$_.options.__file = "node_modules/@docus/theme/dist/components/molecules/CardGrid.vue";
var CardGrid = /* @__PURE__ */ function() {
  return __component__$_.exports;
}();
var render$W = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", { staticClass: "flex items-center transition-colors duration-200 justify-center lg:hidden d-icon", on: { "click": function($event) {
    $event.stopPropagation();
    return _vm.$menu.toggle.apply(null, arguments);
  } } }, [_c("IconMenuAlt", { staticClass: "h-6 w-6" })], 1);
};
var staticRenderFns$W = [];
render$W._withStripped = true;
const __vue2_script$Z = {};
const __cssModules$Z = {};
var __component__$Z = /* @__PURE__ */ normalizeComponent(__vue2_script$Z, render$W, staticRenderFns$W, false, __vue2_injectStyles$Z, null, null, null);
function __vue2_injectStyles$Z(context) {
  for (let o2 in __cssModules$Z) {
    this[o2] = __cssModules$Z[o2];
  }
}
__component__$Z.options.__file = "node_modules/@docus/theme/dist/components/molecules/NavigationButton.vue";
var NavigationButton = /* @__PURE__ */ function() {
  return __component__$Z.exports;
}();
var render$V = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$V = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "p-3 text-center border-t border-gray-200 border-dashed dark:border-gray-800 dark:bg-gray-900" }, [_c("a", { staticClass: "text-xs text-gray-400 hover:text-gray-600 dark:text-gray-600 group dark:hover:text-gray-400", attrs: { "href": "https://docus.dev", "target": "_blank" } }, [_vm._v(" Powered by "), _c("strong", { staticClass: "font-bold" }, [_vm._v("Docus")])])]);
}];
render$V._withStripped = true;
const __vue2_script$Y = {};
const __cssModules$Y = {};
var __component__$Y = /* @__PURE__ */ normalizeComponent(__vue2_script$Y, render$V, staticRenderFns$V, false, __vue2_injectStyles$Y, null, null, null);
function __vue2_injectStyles$Y(context) {
  for (let o2 in __cssModules$Y) {
    this[o2] = __cssModules$Y[o2];
  }
}
__component__$Y.options.__file = "node_modules/@docus/theme/dist/components/molecules/PoweredByDocus.vue";
var PoweredByDocus = /* @__PURE__ */ function() {
  return __component__$Y.exports;
}();
var render$U = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "flex" }, [_vm.settings.twitter ? _c("a", { staticClass: "d-icon", class: [_vm.padding], attrs: { "href": "https://twitter.com/" + _vm.settings.twitter, "target": "_blank", "rel": "noopener noreferrer", "title": "Twitter", "name": "Twitter" } }, [_c("IconTwitter", { class: _vm.size })], 1) : _vm._e(), _vm.settings.github && _vm.settings.github.repo && _vm.repoUrl ? _c("a", { staticClass: "d-icon", class: [_vm.padding], attrs: { "href": "https://github.com/" + _vm.settings.github.repo, "target": "_blank", "rel": "noopener noreferrer", "title": "GitHub", "name": "GitHub" } }, [_c("IconGitHub", { class: _vm.size })], 1) : _vm._e()]);
};
var staticRenderFns$U = [];
render$U._withStripped = true;
const __vue2_script$X = defineComponent$2({
  props: {
    size: {
      type: String,
      default: "w-6 h-6"
    },
    padding: {
      type: String,
      default: "p-0"
    }
  },
  setup() {
    const { settings: settings2 } = useSettings();
    const { repoUrl } = useGitHub();
    return {
      repoUrl,
      settings: settings2
    };
  }
});
const __cssModules$X = {};
var __component__$X = /* @__PURE__ */ normalizeComponent(__vue2_script$X, render$U, staticRenderFns$U, false, __vue2_injectStyles$X, null, null, null);
function __vue2_injectStyles$X(context) {
  for (let o2 in __cssModules$X) {
    this[o2] = __cssModules$X[o2];
  }
}
__component__$X.options.__file = "node_modules/@docus/theme/dist/components/molecules/SocialIcons.vue";
var SocialIcons = /* @__PURE__ */ function() {
  return __component__$X.exports;
}();
var render$T = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "relative text-white rounded-t-lg d-code-group-header-bg" }, [_c("div", { staticClass: "relative z-0 px-2" }, [_vm._l(_vm.tabs, function(ref, i3) {
    var label = ref.label;
    return _c("button", { key: "" + i3 + label, ref: "tabs", refInFor: true, staticClass: "\n        relative\n        px-3\n        py-1.5\n        xs:py-3\n        my-1.5\n        xs:my-0\n        text-sm\n        font-mono font-medium\n        tracking-tight\n        focus:outline-none\n      ", class: [_vm.activeTabIndex === i3 ? "active text-gray-800 dark:text-white" : "d-prose-code-filename-text"], on: { "click": function($event) {
      return _vm.updateTabs(i3);
    } } }, [_vm._v(" " + _vm._s(label) + " ")]);
  }), _c("span", { ref: "highlight-underline", staticClass: "absolute -z-1 highlight-underline h-full xs:py-1.5" }, [_c("span", { staticClass: "flex w-full h-full d-code-group-tab rounded-md" })])], 2), _vm._t("footer")], 2);
};
var staticRenderFns$T = [];
render$T._withStripped = true;
var TabsHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$W = defineComponent$2({
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeTabIndex: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.updateHighlightUnderlinePosition();
  },
  methods: {
    updateTabs(i3) {
      this.$emit("update", i3);
      this.$nextTick(() => this.updateHighlightUnderlinePosition());
    },
    updateHighlightUnderlinePosition() {
      const activeTab = this.$refs.tabs[this.activeTabIndex];
      if (!activeTab) {
        return;
      }
      const highlightUnderline = this.$refs["highlight-underline"];
      highlightUnderline.style.left = `${activeTab.offsetLeft}px`;
      highlightUnderline.style.top = `${activeTab.offsetTop}px`;
      highlightUnderline.style.width = `${activeTab.clientWidth}px`;
      highlightUnderline.style.height = `${activeTab.clientHeight}px`;
    }
  }
});
const __cssModules$W = {};
var __component__$W = /* @__PURE__ */ normalizeComponent(__vue2_script$W, render$T, staticRenderFns$T, false, __vue2_injectStyles$W, "1f10d5f6", null, null);
function __vue2_injectStyles$W(context) {
  for (let o2 in __cssModules$W) {
    this[o2] = __cssModules$W[o2];
  }
}
__component__$W.options.__file = "node_modules/@docus/theme/dist/components/molecules/TabsHeader.vue";
var TabsHeader = /* @__PURE__ */ function() {
  return __component__$W.exports;
}();
var render$S = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", { staticClass: "py-12 lg:py-24 bg-gray-50 dark:bg-gray-800" }, [_c("div", { staticClass: "d-container-content" }, [_c("h2", { staticClass: "mb-8 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100" }, [_vm._v(" " + _vm._s(_vm.title) + " ")]), _c("ul", { staticClass: "\n        grid\n        gap-4\n        font-semibold\n        text-left text-gray-900\n        dark:text-gray-100\n        sm:grid-cols-2\n        xl:grid-cols-3\n        2xl:gap-8\n      " }, _vm._l(_vm.features, function(f2, index2) {
    return _c("li", { key: index2, staticClass: "flex" }, [_c("div", { staticClass: "\n            relative\n            w-full\n            px-6\n            py-8\n            bg-white\n            rounded\n            border border-gray-200\n            dark:border-gray-700 dark:bg-gray-900\n          " }, [_c("InjectComponent", { staticClass: "w-16 h-16 mb-3", class: f2.iconClass || "", attrs: { "component": f2.icon } }, [_vm.isImage(f2.icon) ? _c("NuxtImg", { staticClass: "inline-block w-16 h-16 mb-3", attrs: { "src": f2.icon, "width": "64", "height": "64" } }) : _c("span", { staticClass: "inline-block w-16 h-16 mb-3 text-6xl" }, [_vm._v(_vm._s(f2.icon))])], 1), _c("h2", { staticClass: "mb-2 text-xl" }, [_vm._v(_vm._s(f2.title))]), _c("p", { staticClass: "font-normal" }, [_vm._v(_vm._s(f2.description))])], 1)]);
  }), 0)])]);
};
var staticRenderFns$S = [];
render$S._withStripped = true;
const __vue2_script$V = defineComponent$2({
  props: {
    title: {
      type: String,
      default: "Features"
    },
    features: {
      type: Array,
      default: () => [
        {
          icon: "\u{1F440}",
          title: "Use Emojis",
          description: "And add a description for it!"
        },
        {
          icon: "IconEdit",
          title: "Use Components",
          description: "By using a component name inside, great for using SVG."
        }
      ]
    }
  },
  setup() {
    const isImage = (icon) => String(icon).includes(".");
    return {
      isImage
    };
  }
});
const __cssModules$V = {};
var __component__$V = /* @__PURE__ */ normalizeComponent(__vue2_script$V, render$S, staticRenderFns$S, false, __vue2_injectStyles$V, null, null, null);
function __vue2_injectStyles$V(context) {
  for (let o2 in __cssModules$V) {
    this[o2] = __cssModules$V[o2];
  }
}
__component__$V.options.__file = "node_modules/@docus/theme/dist/components/organisms/BlockFeatures.vue";
var BlockFeatures = /* @__PURE__ */ function() {
  return __component__$V.exports;
}();
var render$R = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", { staticClass: "py-12 lg:py-24 d-container-content" }, [_c("div", { staticClass: "flex flex-col lg:flex-row my-8 md:my-16" }, [_c("div", { staticClass: "flex flex-col items-center pr-0 lg:items-start lg:pr-8 lg:w-2/3" }, [_c("h2", { staticClass: "\n          mb-4\n          text-4xl\n          xs:text-5xl\n          font-semibold\n          sm:leading-none\n          tracking-tighter\n          text-center text-gray-900\n          lg:text-left\n          dark:text-gray-100\n          sm:text-6xl\n          lg:text-7xl\n          sm:mb-8\n        " }, [_c("Markdown", { attrs: { "use": "title", "unwrap": "p" } })], 1), _c("p", { staticClass: "\n          mb-8\n          text-lg text-center text-gray-700\n          font-medium\n          tracking-tight\n          lg:text-left\n          sm:text-xl\n          xl:text-xl\n          leading-base\n          sm:mb-12\n          dark:text-gray-300\n        " }, [_c("Markdown", { attrs: { "use": "description", "unwrap": "p" } })], 1), _c("div", { staticClass: "flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8" }, [_c("InjectComponent", { attrs: { "component": _vm.cta } }, [_c("ButtonLink", { staticClass: "mx-auto md:mx-0", attrs: { "size": "large", "href": _vm.cta[1] } }, [_vm._v(" " + _vm._s(_vm.cta[0]) + " ")])], 1), _vm.secondary ? _c("InjectComponent", { attrs: { "component": _vm.secondary } }, [_c("a", { staticClass: "\n              py-px\n              mt-px\n              font-medium\n              text-primary-500\n              border-b-1 border-transparent\n              dark:text-primary-400\n              hover:border-primary-500\n              dark:hover:border-primary-400\n            ", attrs: { "href": _vm.secondary[1] } }, [_vm._v(" " + _vm._s(_vm.secondary[0]) + " ")])]) : _vm._e()], 1)]), _vm.snippet ? _c("div", { staticClass: "w-full mx-auto lg:w-1/3 sm:w-580px" }, [_c("div", { staticClass: "md:pl-2 md:mx" }, [_c("Terminal", { attrs: { "snippet": _vm.snippet } })], 1)]) : _vm._e()])]);
};
var staticRenderFns$R = [];
render$R._withStripped = true;
const __vue2_script$U = defineComponent$2({
  props: {
    cta: {
      type: Array,
      default: () => ["Get started", "/get-started"]
    },
    secondary: {
      type: Array,
      default: () => ["Open on GitHub", "https://github.com"]
    },
    snippet: {
      type: [String, Boolean],
      default: () => false
    }
  }
});
const __cssModules$U = {};
var __component__$U = /* @__PURE__ */ normalizeComponent(__vue2_script$U, render$R, staticRenderFns$R, false, __vue2_injectStyles$U, null, null, null);
function __vue2_injectStyles$U(context) {
  for (let o2 in __cssModules$U) {
    this[o2] = __cssModules$U[o2];
  }
}
__component__$U.options.__file = "node_modules/@docus/theme/dist/components/organisms/BlockHero.vue";
var BlockHero = /* @__PURE__ */ function() {
  return __component__$U.exports;
}();
var render$Q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._t("mobile-toc"), _c("div", { staticClass: "px-4 sm:px-6 mt-4 xl:mt-0" }, [_c("DocusContent", { staticClass: "docus-content", attrs: { "document": _vm.page } })], 1)], 2);
};
var staticRenderFns$Q = [];
render$Q._withStripped = true;
const __vue2_script$T = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  }
});
const __cssModules$T = {};
var __component__$T = /* @__PURE__ */ normalizeComponent(__vue2_script$T, render$Q, staticRenderFns$Q, false, __vue2_injectStyles$T, null, null, null);
function __vue2_injectStyles$T(context) {
  for (let o2 in __cssModules$T) {
    this[o2] = __cssModules$T[o2];
  }
}
__component__$T.options.__file = "node_modules/@docus/theme/dist/components/organisms/PageContent.vue";
var PageContent = /* @__PURE__ */ function() {
  return __component__$T.exports;
}();
var render$P = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", { staticClass: "flex flex-col md:flex-row d-container-content py-12 md:py-24" }, [_c("div", { staticClass: "w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0" }, [_c("div", { staticClass: "flex flex-col items-center md:items-start mb-2" }, [_c("InfoLabel", { staticClass: "mx-2 mb-4", attrs: { "label": "\u{1F680} Coming Soon" } }), _c("h2", { staticClass: "\n          mb-2\n          text-5xl\n          font-semibold\n          sm:leading-none\n          tracking-tighter\n          text-center text-gray-900\n          md:text-left\n          dark:text-gray-100\n          sm:text-6xl\n          lg:text-7xl\n          sm:mb-4\n        " }, [_vm._v(" " + _vm._s(_vm.title) + " ")]), _c("p", { staticClass: "\n          mb-2\n          text-base text-center text-gray-700\n          md:text-left\n          sm:text-xl\n          xl:text-2xl\n          leading-base\n          sm:mb-4\n          dark:text-gray-300\n        " }, [_vm._v(" " + _vm._s(_vm.description) + " ")])], 1), _c("div", { staticClass: "w-full" }, [_c("div", { staticClass: "flex flex-col max-w-md mx-auto md:mx-0" }, [_c("p", { staticClass: "text-sm mb-2 font-medium text-center md:text-left text-gray-600 dark:text-gray-500" }, [_vm._v(" " + _vm._s(_vm.cta.description) + " ")]), _c("div", { staticClass: "\n            flex flex-col\n            md:flex-row\n            border border-gray-300\n            placeholder-gray-900\n            dark:border-gray-700\n            rounded-md\n            p-1\n            w-full\n            mb-2\n          " }, [_c("input", { staticClass: "\n              flex-1\n              py-3\n              px-3\n              focus:outline-none\n              bg-transparent\n              dark:text-gray-100\n              placeholder-gray-400\n              dark:placeholder-gray-600\n            ", attrs: { "type": "text", "placeholder": _vm.cta.placeholder } }), _c("button", { staticClass: "\n              inline-block\n              font-semibold\n              text-center\n              items-center\n              flex-none\n              px-6\n              py-3\n              text-lg\n              leading-6\n              rounded-md\n              text-white\n              transition-colors\n              duration-200\n              border border-transparent border-l-0\n              bg-primary-500\n              hover:bg-primary-600\n              focus:outline-none\n              select-none\n            " }, [_vm._v(" " + _vm._s(_vm.cta.label) + " ")])]), _c("SocialIcons", { attrs: { "padding": "p-1.5" } })], 1)])]), _c("div", { staticClass: "w-full md:w-1/2 flex-col flex" }, [_c("img", { staticClass: "max-h-64 md:max-h-96 mx-auto", attrs: { "src": _vm.imageUrl, "alt": "" } })])]);
};
var staticRenderFns$P = [];
render$P._withStripped = true;
const __vue2_script$S = defineComponent$2({
  props: {
    title: {
      type: String,
      default: "Hero title"
    },
    description: {
      type: String,
      default: "I am the Hero description, with some text useful to go with the title."
    },
    cta: {
      type: Object,
      default: () => ({
        label: "CTA label",
        description: "CTA description",
        placeholder: "CTA placeholder"
      })
    },
    imageUrl: {
      type: String,
      default: "https://source.unsplash.com/random"
    }
  }
});
const __cssModules$S = {};
var __component__$S = /* @__PURE__ */ normalizeComponent(__vue2_script$S, render$P, staticRenderFns$P, false, __vue2_injectStyles$S, null, null, null);
function __vue2_injectStyles$S(context) {
  for (let o2 in __cssModules$S) {
    this[o2] = __cssModules$S[o2];
  }
}
__component__$S.options.__file = "node_modules/@docus/theme/dist/components/organisms/PreLaunchHero.vue";
var PreLaunchHero = /* @__PURE__ */ function() {
  return __component__$S.exports;
}();
var render$O = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "px-2 my-12 md:my-24" }, [_c("div", { staticClass: "flex items-center justify-center my-2 md:my-8" }, [_c("div", { staticClass: "bg-gray-100 dark:bg-gray-800 p-1 rounded-lg" }, _vm._l(_vm.plans, function(plan, planName) {
    return _c("button", { key: planName, staticClass: "\n          inline-block\n          font-medium\n          text-center\n          items-center\n          flex-none\n          px-2\n          py-1\n          text-sm\n          rounded-md\n          border border-transparent border-l-0\n          focus:outline-none\n          select-none\n        ", class: [
      _vm.selectedPlan === planName ? "bg-white dark:bg-gray-600 shadow-sm text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-400"
    ], on: { "click": function($event) {
      _vm.selectedPlan = planName;
    } } }, [_vm._v(" " + _vm._s(plan.label) + " ")]);
  }), 0)]), _c("PricingGrid", { attrs: { "tiers": _vm.tiers, "plans": _vm.plans, "meta": _vm.meta, "selected-plan": _vm.selectedPlan, "selected-tier": _vm.selectedTier }, on: { "selectTier": function($event) {
    _vm.selectedTier = $event;
  } } }), _c("div", { staticClass: "flex flex-col items-center" }, [_c("div", { staticClass: "flex flex-col items-center mb-4" }, [_c("div", { staticClass: "text-gray-500 mb-1" }, [_vm._v(_vm._s(_vm.meta.checkoutText))]), _c("div", { staticClass: "flex items-baseline" }, [_c("div", { staticClass: "flex font-bold text-4xl tracking-tighter mr-1" }, [_c("span", {}, [_vm._v(_vm._s(_vm.meta.currency))]), _c("span", {}, [_vm._v(_vm._s(_vm.tiers[_vm.selectedTier].price[_vm.selectedPlan]))])]), _c("div", { staticClass: "text-gray-600 dark:text-gray-500" }, [_vm._v("/ " + _vm._s(_vm.plans[_vm.selectedPlan].title))])])]), _c("button", { staticClass: "\n        inline-block\n        font-semibold\n        text-center\n        items-center\n        flex-none\n        px-6\n        py-3\n        text-lg\n        leading-6\n        rounded-md\n        border border-transparent border-l-0\n        focus:outline-none\n        select-none\n        bg-primary-500\n        hover:bg-primary-600\n        text-white\n      " }, [_vm._v(" " + _vm._s(_vm.meta.checkoutButtonText) + " ")])])], 1);
};
var staticRenderFns$O = [];
render$O._withStripped = true;
const __vue2_script$R = defineComponent$2({
  props: {
    plans: {
      type: Object,
      default: () => ({})
    },
    tiers: {
      type: Object,
      default: () => ({})
    },
    meta: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    let selectedPlan = null;
    let selectedTier = null;
    Object.keys(props.plans).forEach((plan) => {
      if (props.plans[plan] && props.plans[plan].preSelected)
        selectedPlan = plan;
    });
    Object.keys(props.tiers).forEach((tier) => {
      if (props.tiers[tier] && props.tiers[tier].preSelected)
        selectedTier = tier;
    });
    return { selectedPlan, selectedTier };
  }
});
const __cssModules$R = {};
var __component__$R = /* @__PURE__ */ normalizeComponent(__vue2_script$R, render$O, staticRenderFns$O, false, __vue2_injectStyles$R, null, null, null);
function __vue2_injectStyles$R(context) {
  for (let o2 in __cssModules$R) {
    this[o2] = __cssModules$R[o2];
  }
}
__component__$R.options.__file = "node_modules/@docus/theme/dist/components/organisms/PricingBlock.vue";
var PricingBlock = /* @__PURE__ */ function() {
  return __component__$R.exports;
}();
var render$N = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "flex flex-col md:flex-row justify-center items-center md:items-stretch flex-wrap my-2 md:my-8" }, _vm._l(_vm.tiers, function(tier, tierName) {
    return _c("div", { key: tierName, staticClass: "w-full md:w-1/3 p-2 max-w-md" }, [_c("div", { staticClass: "border rounded-lg flex flex-col p-4 h-full relative", class: [
      _vm.selectedTier === tierName ? "bg-primary-500 border-primary-500 text-white" : "border-gray-200 dark:border-gray-700"
    ] }, [tier.preSelected ? _c("InfoLabel", { staticClass: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2", attrs: { "label": _vm.meta.preSelectedBadge } }) : _vm._e(), _c("div", { staticClass: "flex justify-center text-2xl font-semibold my-2 text-center" }, [_vm._v(" " + _vm._s(tier.title) + " ")]), _c("div", { staticClass: "flex justify-center text-center mb-8", class: [_vm.selectedTier === tierName ? "text-primary-200" : "text-gray-500"] }, [_vm._v(" " + _vm._s(tier.description) + " ")]), _c("div", { staticClass: "flex justify-center mb-8" }, [_c("div", { staticClass: "font-medium mr-1", class: [_vm.selectedTier === tierName ? "text-primary-300" : "text-gray-400"] }, [_vm._v(" " + _vm._s(_vm.meta.currency) + " ")]), _c("div", { staticClass: "font-bold text-5xl leading-none tracking-tighter mr-1" }, [_vm._v(" " + _vm._s(_vm.plans[_vm.selectedPlan] && _vm.plans[_vm.selectedPlan].divider ? _vm.getBasePricing(tier) : tier.price[_vm.selectedPlan]) + " ")]), _c("div", { staticClass: "self-end lowercase font-medium", class: [_vm.selectedTier === tierName ? "text-primary-300" : "text-gray-400"] }, [_vm._v(" / " + _vm._s(_vm.plans[_vm.basePlan].title) + " ")])]), _c("div", { staticClass: "mb-8" }, [_c("div", { staticClass: "font-medium mb-2" }, [_vm._v(_vm._s(_vm.meta.featuresTitle))]), _c("ul", _vm._l(tier.features, function(feature) {
      return _c("li", { key: feature, staticClass: "flex items-center py-0.5", class: [_vm.selectedTier === tierName ? "text-primary-200" : "text-gray-500 dark:text-gray-400"] }, [_c("IconCheck", { staticClass: "w-4 h-4 mr-2" }), _c("span", [_vm._v(_vm._s(feature))])], 1);
    }), 0)]), _c("div", { staticClass: "flex items-end flex-1" }, [_c("button", { staticClass: "\n            inline-block\n            w-full\n            font-semibold\n            text-center\n            items-center\n            flex-none\n            px-6\n            py-3\n            text-lg\n            leading-6\n            rounded-md\n            border border-transparent border-l-0\n            focus:outline-none\n            select-none\n          ", class: [
      _vm.selectedTier === tierName ? "bg-primary-50 hover:bg-primary-100 text-primary-500" : "bg-primary-500 hover:bg-primary-600 text-white"
    ], on: { "click": function($event) {
      return _vm.$emit("selectTier", tierName);
    } } }, [_vm._v(" " + _vm._s(_vm.meta.buttonText) + " ")])])], 1)]);
  }), 0);
};
var staticRenderFns$N = [];
render$N._withStripped = true;
const __vue2_script$Q = defineComponent$2({
  props: {
    tiers: {
      type: Object,
      default: () => {
      }
    },
    meta: {
      type: Object,
      default: () => {
      }
    },
    plans: {
      type: Object,
      default: () => {
      }
    },
    selectedTier: {
      type: String,
      default: ""
    },
    selectedPlan: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    let basePlan = null;
    function getBasePricing(tier) {
      const price = tier.price[props.selectedPlan] / props.plans[props.selectedPlan].divider;
      return price > 0 ? price.toFixed(2) : 0;
    }
    Object.keys(props.plans).forEach((plan) => {
      if (props.plans[plan] && props.plans[plan].base)
        basePlan = plan;
    });
    return { getBasePricing, basePlan };
  }
});
const __cssModules$Q = {};
var __component__$Q = /* @__PURE__ */ normalizeComponent(__vue2_script$Q, render$N, staticRenderFns$N, false, __vue2_injectStyles$Q, null, null, null);
function __vue2_injectStyles$Q(context) {
  for (let o2 in __cssModules$Q) {
    this[o2] = __cssModules$Q[o2];
  }
}
__component__$Q.options.__file = "node_modules/@docus/theme/dist/components/organisms/PricingGrid.vue";
var PricingGrid = /* @__PURE__ */ function() {
  return __component__$Q.exports;
}();
var render$M = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "copyInstall", staticClass: "relative flex flex-col w-full h-64 overflow-hidden text-gray-600 bg-gray-800 rounded-lg cursor-pointer group", attrs: { "data-clipboard-text": _vm.snippet } }, [_vm.copied ? _c("div", { staticClass: "absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full" }, [_c("div", { staticClass: "absolute top-0 left-0 w-full h-full bg-gray-900 opacity-75" }), _c("div", { staticClass: "z-10 text-lg font-medium text-gray-100" }, [_vm._v("Copied!")])]) : _vm._e(), _vm._m(0), _c("div", { staticClass: "flex flex-1 p-4 font-mono" }, [_c("span", { staticClass: "inline-block mr-2 font-bold select-none" }, [_vm._v("$")]), _c("span", { staticClass: "inline-block text-gray-200" }, [_vm._v(_vm._s(_vm.snippet))])]), _c("div", { staticClass: "py-2 text-center transition-opacity opacity-0 group-hover:opacity-100" }, [_vm._v("Click to copy")])]);
};
var staticRenderFns$M = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "relative flex items-center w-full h-12 border-b border-gray-700" }, [_c("div", { staticClass: "flex ml-4" }, [_c("div", { staticClass: "w-3 h-3 bg-red-400 rounded-full" }), _c("div", { staticClass: "w-3 h-3 ml-2 bg-yellow-400 rounded-full" }), _c("div", { staticClass: "w-3 h-3 ml-2 bg-green-400 rounded-full" })]), _c("div", { staticClass: "absolute top-0 left-0 flex items-center justify-center w-full h-full" }, [_vm._v("Bash")])]);
}];
render$M._withStripped = true;
const __vue2_script$P = defineComponent$2({
  props: {
    snippet: {
      type: String,
      required: true
    }
  },
  setup() {
    const copyInstall = CompositionApi.ref();
    const copied = CompositionApi.ref(false);
    const setupCopyInstall = () => {
      if (!copyInstall.value)
        return CompositionApi.nextTick(setupCopyInstall);
      const instance = new Clipboard(copyInstall.value);
      instance.on("success", () => {
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 1e3);
      });
    };
    CompositionApi.onMounted(() => setupCopyInstall());
    return {
      copyInstall,
      copied
    };
  }
});
const __cssModules$P = {};
var __component__$P = /* @__PURE__ */ normalizeComponent(__vue2_script$P, render$M, staticRenderFns$M, false, __vue2_injectStyles$P, null, null, null);
function __vue2_injectStyles$P(context) {
  for (let o2 in __cssModules$P) {
    this[o2] = __cssModules$P[o2];
  }
}
__component__$P.options.__file = "node_modules/@docus/theme/dist/components/organisms/Terminal.vue";
var Terminal = /* @__PURE__ */ function() {
  return __component__$P.exports;
}();
var render$L = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", { staticClass: "max-w-2xl mx-auto py-16 sm:py-24 sm:px-4" }, [_c("div", [_c("h1", { staticClass: "\n          px-4\n          sm:px-0\n          ml-auto\n          mb-12\n          text-4xl\n          sm:text-6xl\n          font-semibold\n          tracking-tight\n          text-gray-900\n          dark:text-gray-100\n        " }, [_vm._v(" " + _vm._s(_vm.page.title) + " ")])]), _c("BlogpostList")], 1)]);
};
var staticRenderFns$L = [];
render$L._withStripped = true;
const __vue2_script$O = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  templateOptions: {
    aside: false,
    fluid: true
  }
});
const __cssModules$O = {};
var __component__$O = /* @__PURE__ */ normalizeComponent(__vue2_script$O, render$L, staticRenderFns$L, false, __vue2_injectStyles$O, null, null, null);
function __vue2_injectStyles$O(context) {
  for (let o2 in __cssModules$O) {
    this[o2] = __cssModules$O[o2];
  }
}
__component__$O.options.__file = "node_modules/@docus/theme/dist/components/templates/Blog.vue";
var Blog = /* @__PURE__ */ function() {
  return __component__$O.exports;
}();
var render$K = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", { staticClass: "py-16 sm:py-24 relative" }, [_c("div", { staticClass: "relative max-w-2xl mx-auto" }, [_c("NuxtLink", { staticClass: "absolute top-0 left-0 px-4 -mt-12 sm:-mt-16", attrs: { "to": _vm.$contentLocalePath("/blog") } }, [_c("span", { staticClass: "\n            text-sm\n            sm:text-base\n            leading-none\n            text-gray-900\n            dark:text-gray-100\n            hover:d-secondary-text\n            font-medium\n          " }, [_vm._v("\u2190 Back")])]), _c("div", { staticClass: "mb-6 px-4" }, [_c("h1", { staticClass: "flex-1 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100" }, [_vm._v(" " + _vm._s(_vm.page.title) + " ")]), _c("p", { staticClass: "my-4 text-base font-medium d-secondary-text" }, [_vm._v(" " + _vm._s(_vm.page.description) + " ")]), _c("div", { staticClass: "flex sm:flex-row items-center" }, [_vm.page.date ? _c("time", { staticClass: "font-medium mr-2 text-sm d-tertiary-text", attrs: { "datetime": _vm.page.date } }, [_vm._v(" " + _vm._s(_vm.formatDateByLocale(_vm.$i18n.locale, _vm.page.date)) + " ")]) : _c("div", { staticClass: "font-medium mr-2 text-sm text-yellow-600 dark:text-yellow-500" }, [_vm._v(" \u26A0\uFE0F Please add "), _c("ProseCodeInline", [_vm._v("date: " + _vm._s(_vm.today))]), _vm._v(" in the page front-matter` ")], 1), _vm.page.authors && _vm.page.authors.length ? _c("div", { staticClass: "text-sm d-tertiary-text" }, [_vm._v("|")]) : _vm._e(), _c("div", { staticClass: "flex ml-4 sm:ml-2" }, _vm._l(_vm.page.authors, function(author, index2) {
    return _c("a", { key: index2, staticClass: "flex items-center justify-end -ml-2 sm:ml-0 sm:mr-2 hover:d-secondary-text", attrs: { "href": author.link, "target": "_blank", "rel": "noopener noindex nofollow" } }, [_c("NuxtImg", { staticClass: "rounded-full border d-border-tertiary inline-block h-8 w-8 sm:mr-1", attrs: { "height": "32", "width": "32", "src": author.avatarUrl, "alt": author.name, "title": author.name } }), _c("span", { staticClass: "hidden sm:inline-block font-medium text-sm" }, [_vm._v(" " + _vm._s(author.name) + " ")])], 1);
  }), 0)])])], 1), _c("div", { staticClass: "max-w-4xl mx-auto" }, [_c("div", { staticClass: "aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 mb-8" }, [_c("NuxtImg", { attrs: { "src": _vm.imgUrl, "alt": _vm.page.title } })], 1)]), _c("div", { staticClass: "max-w-2xl mx-auto" }, [_c("BlogpostToc", { staticClass: "mb-8", attrs: { "toc": _vm.page.body.toc.links, "title": _vm.page.body.toc.title } }), _c("DocusContent", { staticClass: "px-4 docus-content", attrs: { "document": _vm.page } })], 1)])]);
};
var staticRenderFns$K = [];
render$K._withStripped = true;
const __vue2_script$N = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup() {
    CompositionApi.onMounted(() => {
      if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        setTimeout(() => {
          scrollToHeading(hash, "--blogpost-scroll-margin-block");
        }, 300);
      }
      setTimeout(() => {
        const headings = [
          ...document.querySelectorAll(".docus-content h1"),
          ...document.querySelectorAll(".docus-content h2"),
          ...document.querySelectorAll(".docus-content h3")
        ];
        headings.forEach((heading) => {
          heading.addEventListener("click", (e2) => {
            e2.preventDefault();
            const hash = e2.target.href.split("#").pop();
            scrollToHeading(hash, "--blogpost-scroll-margin-block");
          });
        });
      }, 300);
    });
    const formatDateByLocale = (locale, d3) => {
      const currentLocale = locale || "en";
      const options2 = { year: "numeric", month: "long", day: "numeric" };
      return new Date(d3).toLocaleDateString(currentLocale, options2);
    };
    return {
      today: new Date().toISOString().split("T")[0],
      formatDateByLocale
    };
  },
  computed: {
    imgUrl() {
      return this.page.imgUrl || "https://source.unsplash.com/random";
    }
  },
  templateOptions: {
    aside: false,
    fluid: true
  }
});
const __cssModules$N = {};
var __component__$N = /* @__PURE__ */ normalizeComponent(__vue2_script$N, render$K, staticRenderFns$K, false, __vue2_injectStyles$N, null, null, null);
function __vue2_injectStyles$N(context) {
  for (let o2 in __cssModules$N) {
    this[o2] = __cssModules$N[o2];
  }
}
__component__$N.options.__file = "node_modules/@docus/theme/dist/components/templates/BlogPost.vue";
var BlogPost = /* @__PURE__ */ function() {
  return __component__$N.exports;
}();
var render$J = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("AppPage", { scopedSlots: _vm._u([{ key: "prev-next", fn: function() {
    return [_c("PagePrevNext", { attrs: { "prev": _vm.prev, "next": _vm.next } })];
  }, proxy: true }, { key: "toc", fn: function() {
    return [!_vm.page.body.hideToc ? _c("PageToc", { attrs: { "title": _vm.page.body.toc.title, "toc": _vm.page.body.toc.links } }) : _vm._e()];
  }, proxy: true }]) }, [_c("PageContent", { attrs: { "page": _vm.page }, scopedSlots: _vm._u([{ key: "mobile-toc", fn: function() {
    return [_c("PageMobileToc", { attrs: { "title": _vm.page.body.toc.title, "toc": _vm.page.body.toc.links } })];
  }, proxy: true }]) }), _vm.repoUrl ? _c("EditOnGithub", { attrs: { "page": _vm.page } }) : _vm._e()], 1);
};
var staticRenderFns$J = [];
render$J._withStripped = true;
const __vue2_script$M = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { $docus } = useContext();
    const { repoUrl } = useGitHub();
    const prev = CompositionApi.ref(null);
    const next = CompositionApi.ref(null);
    CompositionApi.onMounted(() => {
      if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        setTimeout(() => {
          scrollToHeading(hash, "--docs-scroll-margin-block");
        }, 300);
      }
      setTimeout(() => {
        const headings = [
          ...document.querySelectorAll(".docus-content h1"),
          ...document.querySelectorAll(".docus-content h2"),
          ...document.querySelectorAll(".docus-content h3")
        ];
        headings.forEach((heading) => {
          heading.addEventListener("click", (e2) => {
            e2.preventDefault();
            const hash = e2.target.href.split("#").pop();
            scrollToHeading(hash, "--docs-scroll-margin-block");
          });
        });
      }, 500);
    });
    useFetch(async () => {
      const [prevLink, nextLink] = await $docus.getPreviousAndNextLink(props.page);
      prev.value = prevLink;
      next.value = nextLink;
    });
    return {
      repoUrl,
      prev,
      next
    };
  },
  templateOptions: {
    aside: true,
    fluid: false
  }
});
const __cssModules$M = {};
var __component__$M = /* @__PURE__ */ normalizeComponent(__vue2_script$M, render$J, staticRenderFns$J, false, __vue2_injectStyles$M, null, null, null);
function __vue2_injectStyles$M(context) {
  for (let o2 in __cssModules$M) {
    this[o2] = __cssModules$M[o2];
  }
}
__component__$M.options.__file = "node_modules/@docus/theme/dist/components/templates/Docs.vue";
var Docs = /* @__PURE__ */ function() {
  return __component__$M.exports;
}();
var render$I = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("AppPage", { staticClass: "min-h-screen-sm relative z-0 h-full" }, [_c("div", { staticClass: "relative flex flex-col items-center justify-center px-2 sm:px-4 mt-20 lg:mt-32 md:px-0 z-10" }, [_c("h1", { staticClass: "font-serif text-center text-display-6 md:text-display-5 2xl:text-display-4 mb-6" }, [_vm._v(" " + _vm._s(_vm.error.message) + " ")]), _c("NuxtLink", { staticClass: "text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400 font-medium rounded-md px-4 py-2.5", attrs: { "to": "/", "size": "md" } }, [_vm._v(" Go Home ")])], 1)]);
};
var staticRenderFns$I = [];
render$I._withStripped = true;
const __vue2_script$L = defineComponent$2({
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: this.error.message
    };
  }
});
const __cssModules$L = {};
var __component__$L = /* @__PURE__ */ normalizeComponent(__vue2_script$L, render$I, staticRenderFns$I, false, __vue2_injectStyles$L, null, null, null);
function __vue2_injectStyles$L(context) {
  for (let o2 in __cssModules$L) {
    this[o2] = __cssModules$L[o2];
  }
}
__component__$L.options.__file = "components/templates/Error.vue";
var _Error = /* @__PURE__ */ function() {
  return __component__$L.exports;
}();
var render$H = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("AppContainer", { attrs: { "fluid": "", "footer": _vm.page.footer } }, [_c("DocusContent", { attrs: { "document": _vm.page } })], 1);
};
var staticRenderFns$H = [];
render$H._withStripped = true;
const __vue2_script$K = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  }
});
const __cssModules$K = {};
var __component__$K = /* @__PURE__ */ normalizeComponent(__vue2_script$K, render$H, staticRenderFns$H, false, __vue2_injectStyles$K, null, null, null);
function __vue2_injectStyles$K(context) {
  for (let o2 in __cssModules$K) {
    this[o2] = __cssModules$K[o2];
  }
}
__component__$K.options.__file = "node_modules/@docus/theme/dist/components/templates/Marketing.vue";
var Marketing = /* @__PURE__ */ function() {
  return __component__$K.exports;
}();
var render$G = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("AppPage", { scopedSlots: _vm._u([{ key: "toc", fn: function() {
    return [_c("PageToc", { attrs: { "toc": _vm.toc, "title": "Versions" } })];
  }, proxy: true }]) }, [_c("section", { staticClass: "mt-4 xl:mt-0 px-4 sm:px-6" }, [_c("h1", { staticClass: "flex-1 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100" }, [_vm._v(" " + _vm._s(_vm.page.title) + " ")]), _vm.page.description ? _c("p", { staticClass: "mt-4 text-lg font-medium text-gray-500 dark:text-gray-400" }, [_vm._v(" " + _vm._s(_vm.page.description) + " ")]) : _vm._e(), _c("hr", { staticClass: "mt-4 border-gray-100 dark:border-gray-800 dark:border-opacity-50" })]), _c("PageMobileToc", { attrs: { "title": "Versions", "toc": _vm.toc } }), _c("div", { staticClass: "px-4 sm:px-6 docus-content" }, _vm._l(_vm.releases, function(release) {
    return _c("div", { key: release.name }, [_c("div", { staticClass: "flex items-baseline justify-between" }, [_c("ProseH2", { attrs: { "id": release.name } }, [_c("a", { attrs: { "href": "#" + release.name } }, [_vm._v(" " + _vm._s(release.name) + " ")])]), _c("span", { staticClass: "text-sm font-normal text-gray-500" }, [_vm._v(_vm._s(_vm.formatDate(_vm.$i18n.local, release)))])], 1), _c("DocusContent", { staticClass: "docus-content overflow-x-hidden", attrs: { "document": release } })], 1);
  }), 0)], 1);
};
var staticRenderFns$G = [];
render$G._withStripped = true;
const __vue2_script$J = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { $docus } = useContext();
    const releases = CompositionApi.ref();
    const toc = CompositionApi.ref();
    useFetch(async () => {
      var _a;
      const { body } = await $docus.data("github-releases");
      releases.value = body.releases;
      toc.value = (_a = body.releases) == null ? void 0 : _a.map((release) => ({
        id: release.name,
        depth: 2,
        text: release.name
      }));
    });
    CompositionApi.onMounted(() => {
      if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        setTimeout(() => {
          scrollToHeading(hash, "--docs-scroll-margin-block");
        }, 300);
      }
      setTimeout(() => {
        const headings = [
          ...document.querySelectorAll(".docus-content h1"),
          ...document.querySelectorAll(".docus-content h2"),
          ...document.querySelectorAll(".docus-content h3")
        ];
        headings.forEach((heading) => {
          heading.addEventListener("click", (e2) => {
            e2.preventDefault();
            const hash = e2.target.href.split("#").pop();
            scrollToHeading(hash, "--docs-scroll-margin-block");
          });
        });
      }, 500);
    });
    const formatDate = (locale, release) => {
      const currentLocale = locale || "en";
      const date = new Date(release.date);
      return date.toLocaleDateString(currentLocale);
    };
    return {
      releases,
      toc,
      formatDate
    };
  },
  templateOptions: {
    aside: true
  }
});
const __cssModules$J = {};
var __component__$J = /* @__PURE__ */ normalizeComponent(__vue2_script$J, render$G, staticRenderFns$G, false, __vue2_injectStyles$J, null, null, null);
function __vue2_injectStyles$J(context) {
  for (let o2 in __cssModules$J) {
    this[o2] = __cssModules$J[o2];
  }
}
__component__$J.options.__file = "node_modules/@docus/theme/dist/components/templates/Releases.vue";
var Releases = /* @__PURE__ */ function() {
  return __component__$J.exports;
}();
var propertyInformation = {};
var immutable = extend$1;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function extend$1() {
  var target = {};
  for (var i3 = 0; i3 < arguments.length; i3++) {
    var source = arguments[i3];
    for (var key in source) {
      if (hasOwnProperty$1.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
var schema = Schema$2;
var proto$1 = Schema$2.prototype;
proto$1.space = null;
proto$1.normal = {};
proto$1.property = {};
function Schema$2(property, normal, space) {
  this.property = property;
  this.normal = normal;
  if (space) {
    this.space = space;
  }
}
var xtend = immutable;
var Schema$1 = schema;
var merge_1 = merge$3;
function merge$3(definitions) {
  var length = definitions.length;
  var property = [];
  var normal = [];
  var index2 = -1;
  var info2;
  var space;
  while (++index2 < length) {
    info2 = definitions[index2];
    property.push(info2.property);
    normal.push(info2.normal);
    space = info2.space;
  }
  return new Schema$1(xtend.apply(null, property), xtend.apply(null, normal), space);
}
var normalize_1 = normalize$2;
function normalize$2(value) {
  return value.toLowerCase();
}
var info = Info$2;
var proto = Info$2.prototype;
proto.space = null;
proto.attribute = null;
proto.property = null;
proto.boolean = false;
proto.booleanish = false;
proto.overloadedBoolean = false;
proto.number = false;
proto.commaSeparated = false;
proto.spaceSeparated = false;
proto.commaOrSpaceSeparated = false;
proto.mustUseProperty = false;
proto.defined = false;
function Info$2(property, attribute) {
  this.property = property;
  this.attribute = attribute;
}
var types$5 = {};
var powers = 0;
types$5.boolean = increment();
types$5.booleanish = increment();
types$5.overloadedBoolean = increment();
types$5.number = increment();
types$5.spaceSeparated = increment();
types$5.commaSeparated = increment();
types$5.commaOrSpaceSeparated = increment();
function increment() {
  return Math.pow(2, ++powers);
}
var Info$1 = info;
var types$4 = types$5;
var definedInfo = DefinedInfo$2;
DefinedInfo$2.prototype = new Info$1();
DefinedInfo$2.prototype.defined = true;
var checks = [
  "boolean",
  "booleanish",
  "overloadedBoolean",
  "number",
  "commaSeparated",
  "spaceSeparated",
  "commaOrSpaceSeparated"
];
var checksLength = checks.length;
function DefinedInfo$2(property, attribute, mask, space) {
  var index2 = -1;
  var check;
  mark(this, "space", space);
  Info$1.call(this, property, attribute);
  while (++index2 < checksLength) {
    check = checks[index2];
    mark(this, check, (mask & types$4[check]) === types$4[check]);
  }
}
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
var normalize$1 = normalize_1;
var Schema = schema;
var DefinedInfo$1 = definedInfo;
var create_1 = create$6;
function create$6(definition) {
  var space = definition.space;
  var mustUseProperty = definition.mustUseProperty || [];
  var attributes = definition.attributes || {};
  var props = definition.properties;
  var transform = definition.transform;
  var property = {};
  var normal = {};
  var prop;
  var info2;
  for (prop in props) {
    info2 = new DefinedInfo$1(prop, transform(attributes, prop), props[prop], space);
    if (mustUseProperty.indexOf(prop) !== -1) {
      info2.mustUseProperty = true;
    }
    property[prop] = info2;
    normal[normalize$1(prop)] = prop;
    normal[normalize$1(info2.attribute)] = prop;
  }
  return new Schema(property, normal, space);
}
var create$5 = create_1;
var xlink$2 = create$5({
  space: "xlink",
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
function xlinkTransform(_2, prop) {
  return "xlink:" + prop.slice(5).toLowerCase();
}
var create$4 = create_1;
var xml$2 = create$4({
  space: "xml",
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});
function xmlTransform(_2, prop) {
  return "xml:" + prop.slice(3).toLowerCase();
}
var caseSensitiveTransform_1 = caseSensitiveTransform$2;
function caseSensitiveTransform$2(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}
var caseSensitiveTransform$1 = caseSensitiveTransform_1;
var caseInsensitiveTransform_1 = caseInsensitiveTransform$2;
function caseInsensitiveTransform$2(attributes, property) {
  return caseSensitiveTransform$1(attributes, property.toLowerCase());
}
var create$3 = create_1;
var caseInsensitiveTransform$1 = caseInsensitiveTransform_1;
var xmlns$2 = create$3({
  space: "xmlns",
  attributes: {
    xmlnsxlink: "xmlns:xlink"
  },
  transform: caseInsensitiveTransform$1,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});
var types$3 = types$5;
var create$2 = create_1;
var booleanish$1 = types$3.booleanish;
var number$3 = types$3.number;
var spaceSeparated$2 = types$3.spaceSeparated;
var aria$2 = create$2({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish$1,
    ariaAutoComplete: null,
    ariaBusy: booleanish$1,
    ariaChecked: booleanish$1,
    ariaColCount: number$3,
    ariaColIndex: number$3,
    ariaColSpan: number$3,
    ariaControls: spaceSeparated$2,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated$2,
    ariaDetails: null,
    ariaDisabled: booleanish$1,
    ariaDropEffect: spaceSeparated$2,
    ariaErrorMessage: null,
    ariaExpanded: booleanish$1,
    ariaFlowTo: spaceSeparated$2,
    ariaGrabbed: booleanish$1,
    ariaHasPopup: null,
    ariaHidden: booleanish$1,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated$2,
    ariaLevel: number$3,
    ariaLive: null,
    ariaModal: booleanish$1,
    ariaMultiLine: booleanish$1,
    ariaMultiSelectable: booleanish$1,
    ariaOrientation: null,
    ariaOwns: spaceSeparated$2,
    ariaPlaceholder: null,
    ariaPosInSet: number$3,
    ariaPressed: booleanish$1,
    ariaReadOnly: booleanish$1,
    ariaRelevant: null,
    ariaRequired: booleanish$1,
    ariaRoleDescription: spaceSeparated$2,
    ariaRowCount: number$3,
    ariaRowIndex: number$3,
    ariaRowSpan: number$3,
    ariaSelected: booleanish$1,
    ariaSetSize: number$3,
    ariaSort: null,
    ariaValueMax: number$3,
    ariaValueMin: number$3,
    ariaValueNow: number$3,
    ariaValueText: null,
    role: null
  }
});
function ariaTransform(_2, prop) {
  return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
}
var types$2 = types$5;
var create$1 = create_1;
var caseInsensitiveTransform = caseInsensitiveTransform_1;
var boolean$1 = types$2.boolean;
var overloadedBoolean = types$2.overloadedBoolean;
var booleanish = types$2.booleanish;
var number$2 = types$2.number;
var spaceSeparated$1 = types$2.spaceSeparated;
var commaSeparated$1 = types$2.commaSeparated;
var html$1 = create$1({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated$1,
    acceptCharset: spaceSeparated$1,
    accessKey: spaceSeparated$1,
    action: null,
    allow: null,
    allowFullScreen: boolean$1,
    allowPaymentRequest: boolean$1,
    allowUserMedia: boolean$1,
    alt: null,
    as: null,
    async: boolean$1,
    autoCapitalize: null,
    autoComplete: spaceSeparated$1,
    autoFocus: boolean$1,
    autoPlay: boolean$1,
    capture: boolean$1,
    charSet: null,
    checked: boolean$1,
    cite: null,
    className: spaceSeparated$1,
    cols: number$2,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean$1,
    controlsList: spaceSeparated$1,
    coords: number$2 | commaSeparated$1,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean$1,
    defer: boolean$1,
    dir: null,
    dirName: null,
    disabled: boolean$1,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean$1,
    formTarget: null,
    headers: spaceSeparated$1,
    height: number$2,
    hidden: boolean$1,
    high: number$2,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated$1,
    httpEquiv: spaceSeparated$1,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated$1,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean$1,
    itemId: null,
    itemProp: spaceSeparated$1,
    itemRef: spaceSeparated$1,
    itemScope: boolean$1,
    itemType: spaceSeparated$1,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean$1,
    low: number$2,
    manifest: null,
    max: null,
    maxLength: number$2,
    media: null,
    method: null,
    min: null,
    minLength: number$2,
    multiple: boolean$1,
    muted: boolean$1,
    name: null,
    nonce: null,
    noModule: boolean$1,
    noValidate: boolean$1,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean$1,
    optimum: number$2,
    pattern: null,
    ping: spaceSeparated$1,
    placeholder: null,
    playsInline: boolean$1,
    poster: null,
    preload: null,
    readOnly: boolean$1,
    referrerPolicy: null,
    rel: spaceSeparated$1,
    required: boolean$1,
    reversed: boolean$1,
    rows: number$2,
    rowSpan: number$2,
    sandbox: spaceSeparated$1,
    scope: null,
    scoped: boolean$1,
    seamless: boolean$1,
    selected: boolean$1,
    shape: null,
    size: number$2,
    sizes: null,
    slot: null,
    span: number$2,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated$1,
    start: number$2,
    step: null,
    style: null,
    tabIndex: number$2,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean$1,
    useMap: null,
    value: booleanish,
    width: number$2,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated$1,
    axis: null,
    background: null,
    bgColor: null,
    border: number$2,
    borderColor: null,
    bottomMargin: number$2,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean$1,
    declare: boolean$1,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number$2,
    leftMargin: number$2,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number$2,
    marginWidth: number$2,
    noResize: boolean$1,
    noHref: boolean$1,
    noShade: boolean$1,
    noWrap: boolean$1,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number$2,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number$2,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number$2,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean$1,
    disableRemotePlayback: boolean$1,
    prefix: null,
    property: null,
    results: number$2,
    security: null,
    unselectable: null
  }
});
var merge$2 = merge_1;
var xlink$1 = xlink$2;
var xml$1 = xml$2;
var xmlns$1 = xmlns$2;
var aria$1 = aria$2;
var html = html$1;
var html_1 = merge$2([xml$1, xlink$1, xmlns$1, aria$1, html]);
var types$1 = types$5;
var create = create_1;
var caseSensitiveTransform = caseSensitiveTransform_1;
var boolean = types$1.boolean;
var number$1 = types$1.number;
var spaceSeparated = types$1.spaceSeparated;
var commaSeparated = types$1.commaSeparated;
var commaOrSpaceSeparated = types$1.commaOrSpaceSeparated;
var svg$1 = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number$1,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number$1,
    amplitude: number$1,
    arabicForm: null,
    ascent: number$1,
    attributeName: null,
    attributeType: null,
    azimuth: number$1,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number$1,
    by: null,
    calcMode: null,
    capHeight: number$1,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number$1,
    diffuseConstant: number$1,
    direction: null,
    display: null,
    dur: null,
    divisor: number$1,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number$1,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number$1,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number$1,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number$1,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number$1,
    horizOriginX: number$1,
    horizOriginY: number$1,
    id: null,
    ideographic: number$1,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number$1,
    k: number$1,
    k1: number$1,
    k2: number$1,
    k3: number$1,
    k4: number$1,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number$1,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number$1,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number$1,
    overlineThickness: number$1,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number$1,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number$1,
    pointsAtY: number$1,
    pointsAtZ: number$1,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number$1,
    specularExponent: number$1,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number$1,
    strikethroughThickness: number$1,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number$1,
    strokeOpacity: number$1,
    strokeWidth: null,
    style: null,
    surfaceScale: number$1,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number$1,
    tableValues: null,
    target: null,
    targetX: number$1,
    targetY: number$1,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number$1,
    underlineThickness: number$1,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number$1,
    values: null,
    vAlphabetic: number$1,
    vMathematical: number$1,
    vectorEffect: null,
    vHanging: number$1,
    vIdeographic: number$1,
    version: null,
    vertAdvY: number$1,
    vertOriginX: number$1,
    vertOriginY: number$1,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number$1,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});
var merge$1 = merge_1;
var xlink = xlink$2;
var xml = xml$2;
var xmlns = xmlns$2;
var aria = aria$2;
var svg = svg$1;
var svg_1 = merge$1([xml, xlink, xmlns, aria, svg]);
var normalize = normalize_1;
var DefinedInfo = definedInfo;
var Info = info;
var data = "data";
var find_1 = find;
var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;
function find(schema2, value) {
  var normal = normalize(value);
  var prop = value;
  var Type = Info;
  if (normal in schema2.normal) {
    return schema2.property[schema2.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    if (value.charAt(4) === "-") {
      prop = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase);
  return data + value.charAt(0).toUpperCase() + value.slice(1);
}
function datasetToAttribute(property) {
  var value = property.slice(4);
  if (dash.test(value)) {
    return property;
  }
  value = value.replace(cap, kebab);
  if (value.charAt(0) !== "-") {
    value = "-" + value;
  }
  return data + value;
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
propertyInformation.html = html_1;
propertyInformation.svg = svg_1;
propertyInformation.normalize = normalize_1;
propertyInformation.find = find_1;
const rootKeys = ["class-name", "class", "className", "style"];
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const number = (d3) => +d3;
const trim = (d3) => d3.trim();
const noop = (d3) => d3;
const lazyComponents = new Set();
function evalInContext(code, context) {
  return new Function("with(this) { return (" + code + ") }").call(context);
}
function propsToData(node, doc) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data2, key) {
    const k2 = key.replace(/.*:/, "");
    let obj = rootKeys.includes(k2) ? data2 : data2.attrs;
    const value = props[key];
    const { attribute } = propertyInformation.find(propertyInformation.html, key);
    const native = nativeInputs.includes(tag);
    if (rxModel.test(key) && value in doc && !native) {
      const mods = key.replace(rxModel, "").split(".").filter((d3) => d3).reduce((d3, k22) => {
        d3[k22] = true;
        return d3;
      }, {});
      const field = "value";
      const event = mods.lazy ? "change" : "input";
      const processor = mods.number ? number : mods.trim ? trim : noop;
      obj[field] = evalInContext(value, doc);
      data2.on = data2.on || {};
      data2.on[event] = (e2) => doc[value] = processor(e2);
    } else if (key === "v-bind") {
      const val = value in doc ? doc[value] : evalInContext(value, doc);
      obj = Object.assign(obj, val);
    } else if (rxOn.test(key)) {
      key = key.replace(rxOn, "");
      data2.on = data2.on || {};
      data2.on[key] = evalInContext(value, doc);
    } else if (rxBind.test(key)) {
      key = key.replace(rxBind, "");
      obj[key] = value in doc ? doc[value] : evalInContext(value, doc);
    } else if (Array.isArray(value)) {
      obj[attribute] = value.join(" ");
    } else {
      obj[attribute] = value;
    }
    return data2;
  }, { attrs: {} });
}
function slotsToData(node, h2, doc) {
  const data2 = {};
  const children = node.children || [];
  children.forEach((child) => {
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    }
    data2.scopedSlots = data2.scopedSlots || {};
    const template2 = child;
    const name = getSlotName(template2);
    const vDomTree = template2.content.map((tmplNode) => processNode(tmplNode, h2, doc));
    data2.scopedSlots[name] = function() {
      return vDomTree;
    };
  });
  return data2;
}
function processNode(node, h2, doc) {
  if (node.type === "text") {
    return node.value;
  }
  const slotData = slotsToData(node || {}, h2, doc);
  const propData = propsToData(node || {}, doc);
  const data2 = Object.assign({}, slotData, propData);
  const children = [];
  for (const child of node.children) {
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }
    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map((node2) => processNode(node2, h2, doc)));
  }
  if (typeof Vue__default["default"].component(scule.pascalCase(node.tag)) === "function") {
    lazyComponents.add(scule.pascalCase(node.tag));
  }
  return h2(node.tag, data2, children);
}
const DEFAULT_SLOT = "default";
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
const __vue2_script$I = {
  name: "DocusContent",
  functional: true,
  props: {
    document: {
      type: [Object, String],
      required: true
    }
  },
  render(h2, { data: data2, props, parent, _v }) {
    const { document: document2 } = props;
    let { body } = document2 || {};
    if (body && body.ast) {
      body = body.ast;
    }
    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }
    let classes = [];
    if (Array.isArray(data2.class)) {
      classes = data2.class;
    } else if (typeof data2.class === "object") {
      const keys2 = Object.keys(data2.class);
      classes = keys2.filter((key) => data2.class[key]);
    } else {
      classes = [data2.class];
    }
    data2.class = classes;
    data2.props = Object.assign(__spreadValues({}, body.props), data2.props);
    const children = body.children.map((child) => processNode(child, h2, document2));
    {
      parent.$root.context.beforeSerialize((nuxtState) => {
        if (nuxtState.fetch._lazyComponents) {
          lazyComponents.forEach((name) => nuxtState.fetch._lazyComponents.add(name));
        } else {
          nuxtState.fetch._lazyComponents = lazyComponents;
        }
      });
    }
    const tag = body.tag || "div";
    return h2(tag, data2, children);
  }
};
let __vue2_render$2, __vue2_staticRenderFns$2;
const __cssModules$I = {};
var __component__$I = /* @__PURE__ */ normalizeComponent(__vue2_script$I, __vue2_render$2, __vue2_staticRenderFns$2, false, __vue2_injectStyles$I, null, null, null);
function __vue2_injectStyles$I(context) {
  for (let o2 in __cssModules$I) {
    this[o2] = __cssModules$I[o2];
  }
}
__component__$I.options.__file = "node_modules/@docus/core/dist/runtime/components/DocusContent.vue";
var DocusContent = /* @__PURE__ */ function() {
  return __component__$I.exports;
}();
const TAGS_MAP = {
  h1: ["h1", "prose-h1"],
  h2: ["h2", "prose-h2"],
  h3: ["h3", "prose-h3"],
  h4: ["h4", "prose-h4"],
  h5: ["h5", "prose-h5"],
  h6: ["h6", "prose-h6"],
  hr: ["hr", "prose-hr"],
  p: ["p", "prose-paragraph"],
  ul: ["ul", "prose-ul"],
  ol: ["ol", "prose-ol"],
  blockquote: ["blockquote", "prose-blockquote"],
  img: ["img", "prose-img"],
  a: ["a", "prose-a"],
  code: ["code", "prose-code-inline"]
};
const expandTags = (_tags) => _tags.flatMap((t3) => TAGS_MAP[t3]);
const TEXT_TAGS = expandTags(["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"]);
function isTag(vnode, tag) {
  var _a, _b;
  return (vnode == null ? void 0 : vnode.tag) === tag || ((_a = vnode == null ? void 0 : vnode.componentOptions) == null ? void 0 : _a.tag) === tag || ((_b = vnode == null ? void 0 : vnode.asyncMeta) == null ? void 0 : _b.tag) === tag;
}
function nodeChildren(node) {
  var _a, _b;
  return node.children || ((_a = node == null ? void 0 : node.componentOptions) == null ? void 0 : _a.children) || ((_b = node == null ? void 0 : node.asyncMeta) == null ? void 0 : _b.children);
}
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  tags = expandTags(tags);
  let result = vnode;
  if (tags.some((tag) => isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap(vnodes, tags = ["p"]) {
  return (Array.isArray(vnodes) ? vnodes : [vnodes]).flatMap((vnode) => unwrap(vnode, tags)).flatMap((vnode) => unwrap(vnode, tags)).filter((vnode) => !vnode.text || !!vnode.text.trim());
}
const __vue2_script$H = {
  name: "Markdown",
  functional: true,
  props: {
    use: {
      type: [String, Object, Function, Array],
      default: "default"
    },
    unwrap: {
      type: String,
      default: ""
    }
  },
  render: (_2, ctx) => {
    var _a, _b;
    const slot = ctx.props.use || "default";
    let node = typeof slot === "string" ? ctx.parent.$scopedSlots[slot] || ctx.parent.$slots[slot] || ((_a = ctx.parent.$parent) == null ? void 0 : _a.$scopedSlots[slot]) || ((_b = ctx.parent.$parent) == null ? void 0 : _b.$slots[slot]) : slot;
    if (typeof node === "function") {
      node = node();
    }
    if (typeof node === "string") {
      return [node];
    }
    if (node && ctx.props.unwrap) {
      const tags = ctx.props.unwrap.split(/[,\s]/);
      const first = Array.isArray(node) && node[0];
      const requireSplitor = ctx.scopedSlots.between && first && !first.text && !["span", "strong", "em", "a", "code"].some((tag) => isTag(first, tag));
      if (requireSplitor) {
        node = node.flatMap((n3, i3) => i3 === 0 ? unwrap(n3, tags) : [ctx.scopedSlots.between(), unwrap(n3, tags)]);
      } else {
        node = flatUnwrap(node, tags);
      }
    }
    return node;
  }
};
let __vue2_render$1, __vue2_staticRenderFns$1;
const __cssModules$H = {};
var __component__$H = /* @__PURE__ */ normalizeComponent(__vue2_script$H, __vue2_render$1, __vue2_staticRenderFns$1, false, __vue2_injectStyles$H, null, null, null);
function __vue2_injectStyles$H(context) {
  for (let o2 in __cssModules$H) {
    this[o2] = __cssModules$H[o2];
  }
}
__component__$H.options.__file = "node_modules/@docus/core/dist/runtime/components/Markdown.vue";
var Markdown = /* @__PURE__ */ function() {
  return __component__$H.exports;
}();
var render$F = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "28", "height": "25", "viewBox": "0 0 28 25", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M11.9467 22.3333C10 25.0933 6.20001 25.7867 3.45334 23.8667C0.720008 21.9467 0.0800078 18.12 2.00001 15.3333C2.53695 14.5538 3.24758 13.9096 4.0759 13.4514C4.90423 12.9933 5.82763 12.7338 6.77334 12.6933L6.84001 14.6C5.62667 14.6933 4.45334 15.32 3.69334 16.4133C2.36001 18.3333 2.77334 20.92 4.60001 22.2133C6.44001 23.4933 9.01334 23 10.3467 21.0933C10.76 20.4933 11 19.84 11.0933 19.1733V17.8267L18.5333 17.7733L18.6267 17.6267C19.3333 16.4 20.8667 15.9733 22.0667 16.6667C22.3539 16.8347 22.6052 17.0577 22.8062 17.3229C23.0072 17.5881 23.154 17.8903 23.2381 18.2122C23.3223 18.5341 23.3423 18.8695 23.2969 19.1991C23.2514 19.5287 23.1415 19.8462 22.9733 20.1333C22.2667 21.3467 20.72 21.7733 19.52 21.08C18.9733 20.7733 18.5867 20.28 18.4133 19.72L12.9867 19.7467C12.8277 20.673 12.4732 21.5548 11.9467 22.3333V22.3333ZM21.6533 12.8133C25.0267 13.2267 27.4267 16.2533 27.0133 19.5733C26.6 22.9067 23.5333 25.2667 20.16 24.8533C19.2232 24.7442 18.3239 24.4219 17.5312 23.9111C16.7384 23.4003 16.0732 22.7146 15.5867 21.9067L17.24 20.9467C17.582 21.4763 18.0365 21.9241 18.5711 22.2582C19.1058 22.5923 19.7074 22.8046 20.3333 22.88C22.6667 23.16 24.7333 21.5733 25.0133 19.3467C25.2933 17.12 23.64 15.08 21.3333 14.8C20.6133 14.72 19.92 14.8133 19.2933 15.04L18.16 15.6267L14.72 9.26667H14.4267C13.7554 9.24713 13.1192 8.96269 12.657 8.47552C12.1948 7.98834 11.9442 7.33803 11.96 6.66667C12 5.28001 13.2 4.20001 14.6 4.25334C16 4.33334 17.1067 5.46667 17.0667 6.85334C17.04 7.44001 16.8133 7.97334 16.4533 8.38667L18.9867 13.0667C19.8133 12.8 20.72 12.7067 21.6533 12.8133V12.8133ZM9.00001 9.18667C7.66667 6.05334 9.08001 2.46667 12.16 1.16001C15.2533 -0.14666 18.8267 1.33334 20.16 4.46667C20.9467 6.29334 20.7867 8.29334 19.8933 9.89334L18.24 8.93334C18.8 7.85334 18.8933 6.53334 18.36 5.29334C17.4533 3.16001 15.04 2.13334 12.9733 3.00001C10.8933 3.88001 9.96001 6.33334 10.8667 8.46667C11.24 9.34667 11.8667 10.0267 12.6267 10.48L13.1467 10.76L9.05334 17.4133C9.09334 17.48 9.14668 17.56 9.18668 17.6667C9.84001 18.88 9.38667 20.4133 8.16001 21.0667C6.94667 21.72 5.41334 21.24 4.74667 19.9867C4.09334 18.7467 4.54667 17.2133 5.77334 16.56C6.29334 16.28 6.86667 16.2133 7.41334 16.3333L10.4933 11.3067C9.86667 10.7333 9.33334 10.0133 9.00001 9.18667V9.18667Z", "fill": "currentColor" } })]);
};
var staticRenderFns$F = [];
render$F._withStripped = true;
const __vue2_script$G = {};
const __cssModules$G = {};
var __component__$G = /* @__PURE__ */ normalizeComponent(__vue2_script$G, render$F, staticRenderFns$F, false, __vue2_injectStyles$G, null, null, null);
function __vue2_injectStyles$G(context) {
  for (let o2 in __cssModules$G) {
    this[o2] = __cssModules$G[o2];
  }
}
__component__$G.options.__file = "components/atoms/icons/IconCAPI.vue";
var IconCAPI = /* @__PURE__ */ function() {
  return __component__$G.exports;
}();
var render$E = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "iconify iconify--bx", attrs: { "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", "role": "img", "width": "32", "height": "32", "preserveAspectRatio": "xMidYMid meet", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6.414 15.707L5 14.293L7.293 12L5 9.707l1.414-1.414L10.121 12l-3.707 3.707zM19 16h-7v-2h7v2z", "fill": "currentColor" } })]);
};
var staticRenderFns$E = [];
render$E._withStripped = true;
const __vue2_script$F = {};
const __cssModules$F = {};
var __component__$F = /* @__PURE__ */ normalizeComponent(__vue2_script$F, render$E, staticRenderFns$E, false, __vue2_injectStyles$F, null, null, null);
function __vue2_injectStyles$F(context) {
  for (let o2 in __cssModules$F) {
    this[o2] = __cssModules$F[o2];
  }
}
__component__$F.options.__file = "components/atoms/icons/IconCLI.vue";
var IconCLI = /* @__PURE__ */ function() {
  return __component__$F.exports;
}();
var render$D = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor" } }, [_c("path", { attrs: { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M6 18L18 6M6 6l12 12" } })]);
};
var staticRenderFns$D = [];
render$D._withStripped = true;
const __vue2_script$E = {};
const __cssModules$E = {};
var __component__$E = /* @__PURE__ */ normalizeComponent(__vue2_script$E, render$D, staticRenderFns$D, false, __vue2_injectStyles$E, null, null, null);
function __vue2_injectStyles$E(context) {
  for (let o2 in __cssModules$E) {
    this[o2] = __cssModules$E[o2];
  }
}
__component__$E.options.__file = "components/atoms/icons/IconClose.vue";
var IconClose = /* @__PURE__ */ function() {
  return __component__$E.exports;
}();
var render$C = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z", "fill": "currentColor" } })]);
};
var staticRenderFns$C = [];
render$C._withStripped = true;
const __vue2_script$D = {};
const __cssModules$D = {};
var __component__$D = /* @__PURE__ */ normalizeComponent(__vue2_script$D, render$C, staticRenderFns$C, false, __vue2_injectStyles$D, null, null, null);
function __vue2_injectStyles$D(context) {
  for (let o2 in __cssModules$D) {
    this[o2] = __cssModules$D[o2];
  }
}
__component__$D.options.__file = "components/atoms/icons/IconCode.vue";
var IconCode = /* @__PURE__ */ function() {
  return __component__$D.exports;
}();
var render$B = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "iconify iconify--bx", attrs: { "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", "role": "img", "width": "32", "height": "32", "preserveAspectRatio": "xMidYMid meet", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z", "fill": "currentColor" } }), _c("path", { attrs: { "d": "M9.293 9.293L5.586 13l3.707 3.707l1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293l1.414 1.414L18.414 13z", "fill": "currentColor" } })]);
};
var staticRenderFns$B = [];
render$B._withStripped = true;
const __vue2_script$C = {};
const __cssModules$C = {};
var __component__$C = /* @__PURE__ */ normalizeComponent(__vue2_script$C, render$B, staticRenderFns$B, false, __vue2_injectStyles$C, null, null, null);
function __vue2_injectStyles$C(context) {
  for (let o2 in __cssModules$C) {
    this[o2] = __cssModules$C[o2];
  }
}
__component__$C.options.__file = "components/atoms/icons/IconDevtools.vue";
var IconDevtools = /* @__PURE__ */ function() {
  return __component__$C.exports;
}();
var render$A = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 36 36" } }, [_c("path", { staticClass: "clr-i-outline clr-i-outline-path-1", attrs: { "d": "M30 9H16.42l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2zm0 20H6V13h7.31a2 2 0 0 0 2-2H6V7h6.49l2.61 3.59a1 1 0 0 0 .81.41H30z", "fill": "currentColor" } })]);
};
var staticRenderFns$A = [];
render$A._withStripped = true;
const __vue2_script$B = {};
const __cssModules$B = {};
var __component__$B = /* @__PURE__ */ normalizeComponent(__vue2_script$B, render$A, staticRenderFns$A, false, __vue2_injectStyles$B, null, null, null);
function __vue2_injectStyles$B(context) {
  for (let o2 in __cssModules$B) {
    this[o2] = __cssModules$B[o2];
  }
}
__component__$B.options.__file = "components/atoms/icons/IconDirectory.vue";
var IconDirectory = /* @__PURE__ */ function() {
  return __component__$B.exports;
}();
var render$z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "iconify iconify--entypo", attrs: { "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", "role": "img", "width": "32", "height": "32", "preserveAspectRatio": "xMidYMid meet", "viewBox": "0 0 20 20" } }, [_c("path", { attrs: { "d": "M4.254 19.567c.307-.982.77-2.364 1.391-4.362c2.707-.429 3.827.341 5.546-2.729c-1.395.427-3.077-.792-2.987-1.321c.091-.528 3.913.381 6.416-3.173c-3.155.696-4.164-.836-3.757-1.067c.939-.534 3.726-.222 5.212-1.669c.766-.745 1.125-2.556.813-3.202c-.374-.781-2.656-1.946-3.914-1.836c-1.258.109-3.231 4.79-3.817 4.754c-.584-.037-.703-2.098.319-4.013c-1.077.477-3.051 1.959-3.67 3.226c-1.153 2.357.108 7.766-.296 7.958c-.405.193-1.766-2.481-2.172-3.694c-.555 1.859-.568 3.721 1.053 6.194c-.611 1.623-.945 3.491-.996 4.441c-.024.759.724.922.859.493z", "fill": "currentColor" } })]);
};
var staticRenderFns$z = [];
render$z._withStripped = true;
const __vue2_script$A = {};
const __cssModules$A = {};
var __component__$A = /* @__PURE__ */ normalizeComponent(__vue2_script$A, render$z, staticRenderFns$z, false, __vue2_injectStyles$A, null, null, null);
function __vue2_injectStyles$A(context) {
  for (let o2 in __cssModules$A) {
    this[o2] = __cssModules$A[o2];
  }
}
__component__$A.options.__file = "components/atoms/icons/IconFeather.vue";
var IconFeather = /* @__PURE__ */ function() {
  return __component__$A.exports;
}();
var render$y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 36 36" } }, [_c("path", { staticClass: "clr-i-outline clr-i-outline-path-1", attrs: { "d": "M21.89 4H7.83A1.88 1.88 0 0 0 6 5.91v24.18A1.88 1.88 0 0 0 7.83 32h20.34A1.88 1.88 0 0 0 30 30.09V11.92zm-.3 2.49l6 5.9h-6zM8 30V6h12v8h8v16z", "fill": "currentColor" } })]);
};
var staticRenderFns$y = [];
render$y._withStripped = true;
const __vue2_script$z = {};
const __cssModules$z = {};
var __component__$z = /* @__PURE__ */ normalizeComponent(__vue2_script$z, render$y, staticRenderFns$y, false, __vue2_injectStyles$z, null, null, null);
function __vue2_injectStyles$z(context) {
  for (let o2 in __cssModules$z) {
    this[o2] = __cssModules$z[o2];
  }
}
__component__$z.options.__file = "components/atoms/icons/IconFile.vue";
var IconFile = /* @__PURE__ */ function() {
  return __component__$z.exports;
}();
var render$x = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 36 36" } }, [_c("path", { staticClass: "clr-i-outline clr-i-outline-path-1", attrs: { "d": "M33.83 23.43a1.16 1.16 0 0 0-.71-1.12l-1.68-.5c-.09-.24-.18-.48-.29-.71l.78-1.44a1.16 1.16 0 0 0-.21-1.37l-1.42-1.41a1.16 1.16 0 0 0-1.37-.2l-1.45.76a7.84 7.84 0 0 0-.76-.32l-.48-1.58a1.15 1.15 0 0 0-1.11-.77h-2a1.16 1.16 0 0 0-1.11.82l-.47 1.54a7.76 7.76 0 0 0-.77.32l-1.42-.76a1.16 1.16 0 0 0-1.36.2l-1.45 1.4a1.16 1.16 0 0 0-.21 1.38l.74 1.33a7.64 7.64 0 0 0-.31.74l-1.58.47a1.15 1.15 0 0 0-.83 1.11v2a1.15 1.15 0 0 0 .83 1.1l1.59.47a7.53 7.53 0 0 0 .31.72l-.78 1.46a1.16 1.16 0 0 0 .21 1.37l1.42 1.4a1.16 1.16 0 0 0 1.37.21l1.48-.78c.23.11.47.2.72.29l.49 1.62a1.16 1.16 0 0 0 1.11.81h2a1.16 1.16 0 0 0 1.11-.82l.47-1.58c.24-.08.47-.18.7-.29l1.5.79a1.16 1.16 0 0 0 1.36-.2l1.42-1.4a1.16 1.16 0 0 0 .21-1.38l-.79-1.45q.16-.34.29-.69L33 26.5a1.15 1.15 0 0 0 .83-1.11zm-1.6 1.63l-2.11.62l-.12.42a6 6 0 0 1-.5 1.19l-.21.38l1 1.91l-1 1l-2-1l-.37.2a6.21 6.21 0 0 1-1.2.49l-.42.12l-.63 2.09h-1.25l-.63-2.08l-.42-.12a6.23 6.23 0 0 1-1.21-.49l-.37-.2l-1.94 1l-1-1l1-1.94l-.22-.38a6 6 0 0 1-.46-1.27l-.17-.37l-2-.63v-1.31l2-.61l.13-.41a5.94 5.94 0 0 1 .53-1.23l.24-.44l-1-1.85l1-.94l1.89 1l.38-.21a6.23 6.23 0 0 1 1.26-.52l.41-.12l.63-2h1.38l.62 2l.41.12a6.21 6.21 0 0 1 1.22.52l.38.21l1.92-1l1 1l-1 1.89l.21.38a6.08 6.08 0 0 1 .5 1.21l.12.42l2.06.61z", "fill": "currentColor" } }), _c("path", { staticClass: "clr-i-outline clr-i-outline-path-2", attrs: { "d": "M24.12 20.35a4 4 0 1 0 4.08 4a4.06 4.06 0 0 0-4.08-4zm0 6.46a2.43 2.43 0 1 1 2.48-2.43a2.46 2.46 0 0 1-2.48 2.44z", "fill": "currentColor" } }), _c("path", { staticClass: "clr-i-outline clr-i-outline-path-3", attrs: { "d": "M14.49 31H6V5h20v7.89a3.2 3.2 0 0 1 2 1.72V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h10.23l-1.1-1.08a3.11 3.11 0 0 1-.64-.92z", "fill": "currentColor" } })]);
};
var staticRenderFns$x = [];
render$x._withStripped = true;
const __vue2_script$y = {};
const __cssModules$y = {};
var __component__$y = /* @__PURE__ */ normalizeComponent(__vue2_script$y, render$x, staticRenderFns$x, false, __vue2_injectStyles$y, null, null, null);
function __vue2_injectStyles$y(context) {
  for (let o2 in __cssModules$y) {
    this[o2] = __cssModules$y[o2];
  }
}
__component__$y.options.__file = "components/atoms/icons/IconFileSettings.vue";
var IconFileSettings = /* @__PURE__ */ function() {
  return __component__$y.exports;
}();
var render$w = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82z", "fill": "currentColor" } })]);
};
var staticRenderFns$w = [];
render$w._withStripped = true;
const __vue2_script$x = {};
const __cssModules$x = {};
var __component__$x = /* @__PURE__ */ normalizeComponent(__vue2_script$x, render$w, staticRenderFns$w, false, __vue2_injectStyles$x, null, null, null);
function __vue2_injectStyles$x(context) {
  for (let o2 in __cssModules$x) {
    this[o2] = __cssModules$x[o2];
  }
}
__component__$x.options.__file = "components/atoms/icons/IconGit.vue";
var IconGit = /* @__PURE__ */ function() {
  return __component__$x.exports;
}();
var render$v = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "iconify iconify--carbon", attrs: { "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", "role": "img", "width": "32", "height": "32", "preserveAspectRatio": "xMidYMid meet", "viewBox": "0 0 32 32" } }, [_c("path", { attrs: { "d": "M17 24.184V20h-2v4.184a3 3 0 1 0 2 0z", "fill": "currentColor" } }), _c("path", { attrs: { "d": "M26 12a3.996 3.996 0 0 0-3.858 3H9.858a4 4 0 1 0 0 2h12.284A3.993 3.993 0 1 0 26 12zM6 18a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm20 0a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2z", "fill": "currentColor" } }), _c("path", { attrs: { "d": "M19 5a3 3 0 1 0-4 2.816V12h2V7.816A2.992 2.992 0 0 0 19 5z", "fill": "currentColor" } })]);
};
var staticRenderFns$v = [];
render$v._withStripped = true;
const __vue2_script$w = {};
const __cssModules$w = {};
var __component__$w = /* @__PURE__ */ normalizeComponent(__vue2_script$w, render$v, staticRenderFns$v, false, __vue2_injectStyles$w, null, null, null);
function __vue2_injectStyles$w(context) {
  for (let o2 in __cssModules$w) {
    this[o2] = __cssModules$w[o2];
  }
}
__component__$w.options.__file = "components/atoms/icons/IconHybrid.vue";
var IconHybrid = /* @__PURE__ */ function() {
  return __component__$w.exports;
}();
var render$u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "20", "height": "20", "viewBox": "0 0 20 20", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("g", { attrs: { "clip-path": "url(#clip0)" } }, [_c("path", { attrs: { "d": "M3 1.99999L2 2.99999L4.2 6.08099C4.29262 6.21074 4.41491 6.31646 4.55668 6.38934C4.69845 6.46223 4.85559 6.50017 5.015 6.49999H5.085C5.21648 6.49989 5.34669 6.52571 5.46818 6.57599C5.58966 6.62627 5.70004 6.70001 5.793 6.79299L8.468 9.46799L5.851 12.122C5.40339 11.9902 4.93124 11.9646 4.472 12.0471C4.01275 12.1296 3.57905 12.318 3.2053 12.5973C2.83154 12.8766 2.52802 13.2392 2.3188 13.6563C2.10959 14.0733 2.00043 14.5334 2 15C2.0006 15.4299 2.0936 15.8547 2.27271 16.2456C2.45182 16.6364 2.71285 16.9842 3.03811 17.2654C3.36337 17.5466 3.74526 17.7545 4.15792 17.8752C4.57057 17.9959 5.00434 18.0265 5.42985 17.9649C5.85535 17.9033 6.26264 17.7509 6.62413 17.5182C6.98561 17.2854 7.29284 16.9777 7.52501 16.6158C7.75717 16.2539 7.90884 15.8464 7.96975 15.4208C8.03065 14.9952 7.99936 14.5614 7.878 14.149L10.532 11.532L11.5 12.5L11.195 13.414C11.1364 13.5902 11.128 13.7792 11.1707 13.9599C11.2135 14.1405 11.3057 14.3057 11.437 14.437L14.793 17.793C14.9805 17.9805 15.2348 18.0858 15.5 18.0858C15.7652 18.0858 16.0195 17.9805 16.207 17.793L17.793 16.207C17.9805 16.0195 18.0858 15.7652 18.0858 15.5C18.0858 15.2348 17.9805 14.9805 17.793 14.793L14.437 11.437C14.3058 11.3057 14.1405 11.2135 13.9599 11.1707C13.7792 11.128 13.5902 11.1364 13.414 11.195L12.5 11.5L11.54 10.54L14.22 7.89699C14.6646 8.01567 15.1305 8.03066 15.5818 7.9408C16.0331 7.85095 16.4577 7.65866 16.8229 7.37874C17.1882 7.09883 17.4842 6.73878 17.6883 6.32636C17.8924 5.91393 17.999 5.46015 18 4.99999C18 4.73099 17.965 4.46999 17.898 4.22299L15.758 6.36399L14 5.99999L13.636 4.24299L15.777 2.10199C15.2677 1.96505 14.7313 1.9648 14.2219 2.10125C13.7124 2.2377 13.248 2.50604 12.8753 2.87922C12.5026 3.2524 12.2349 3.71723 12.0991 4.22685C11.9634 4.73647 11.9644 5.27287 12.102 5.78199L9.462 8.45999L6.793 5.79299C6.60545 5.6055 6.50006 5.35119 6.5 5.08599V5.01499C6.50002 4.85575 6.462 4.69881 6.38912 4.55723C6.31624 4.41564 6.21061 4.29351 6.081 4.20099L3 1.99999ZM12.646 12.646C12.6924 12.5994 12.7476 12.5625 12.8084 12.5373C12.8691 12.5121 12.9342 12.4991 13 12.4991C13.0658 12.4991 13.1309 12.5121 13.1916 12.5373C13.2524 12.5625 13.3076 12.5994 13.354 12.646L16.354 15.646C16.4005 15.6925 16.4374 15.7477 16.4625 15.8084C16.4877 15.8691 16.5006 15.9342 16.5006 16C16.5006 16.0657 16.4877 16.1308 16.4625 16.1916C16.4374 16.2523 16.4005 16.3075 16.354 16.354C16.3075 16.4005 16.2523 16.4374 16.1916 16.4625C16.1308 16.4877 16.0657 16.5006 16 16.5006C15.9343 16.5006 15.8692 16.4877 15.8084 16.4625C15.7477 16.4374 15.6925 16.4005 15.646 16.354L12.646 13.354C12.5994 13.3075 12.5625 13.2524 12.5373 13.1916C12.5121 13.1309 12.4991 13.0658 12.4991 13C12.4991 12.9342 12.5121 12.8691 12.5373 12.8084C12.5625 12.7476 12.5994 12.6924 12.646 12.646ZM5 13L5.471 13.242L6 13.268L6.287 13.713L6.732 14L6.758 14.529L7 15L6.758 15.471L6.732 16L6.287 16.287L6 16.732L5.471 16.758L5 17L4.529 16.758L4 16.732L3.713 16.287L3.268 16L3.242 15.471L3 15L3.242 14.529L3.268 14L3.713 13.713L4 13.268L4.529 13.242L5 13Z", "fill": "currentColor" } })]), _c("defs", [_c("clipPath", { attrs: { "id": "clip0" } }, [_c("rect", { attrs: { "width": "16", "height": "16", "fill": "white", "transform": "translate(2 2)" } })])])]);
};
var staticRenderFns$u = [];
render$u._withStripped = true;
const __vue2_script$v = {};
const __cssModules$v = {};
var __component__$v = /* @__PURE__ */ normalizeComponent(__vue2_script$v, render$u, staticRenderFns$u, false, __vue2_injectStyles$v, null, null, null);
function __vue2_injectStyles$v(context) {
  for (let o2 in __cssModules$v) {
    this[o2] = __cssModules$v[o2];
  }
}
__component__$v.options.__file = "components/atoms/icons/IconKit.vue";
var IconKit = /* @__PURE__ */ function() {
  return __component__$v.exports;
}();
var render$t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M4 10v4h2v-3h1v3h1v-4H4m5 0v5h2v-1h2v-4H9m3 1v2h-1v-2h1m2-1v4h2v-3h1v3h1v-3h1v3h1v-4h-6M3 9h18v6h-9v1H8v-1H3V9z", "fill": "currentColor" } })]);
};
var staticRenderFns$t = [];
render$t._withStripped = true;
const __vue2_script$u = {};
const __cssModules$u = {};
var __component__$u = /* @__PURE__ */ normalizeComponent(__vue2_script$u, render$t, staticRenderFns$t, false, __vue2_injectStyles$u, null, null, null);
function __vue2_injectStyles$u(context) {
  for (let o2 in __cssModules$u) {
    this[o2] = __cssModules$u[o2];
  }
}
__component__$u.options.__file = "components/atoms/icons/IconNpm.vue";
var IconNpm = /* @__PURE__ */ function() {
  return __component__$u.exports;
}();
var render$s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 568 289", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M105.365 183.284C161.654 157.422 219.244 64.129 227.008 7.046M181.669 1.788C177.258 33.024 83.023 133.863.76 177.934M189.542 2.732c61.84 114.358 214.646 306.74 347.993 141.883M231.098 1.304c23.17 105.268 181.771 292.873 290.458 139.889M541.033 136.009c1.939 27.604 6.824 90.458 25.987 97.575M132.872 72.038v119.676M139.04 65.938v125.776M253.581 59.892V197.26M258.992 69.637l.842 128.066M289.779 114.709v90.618M295.385 121.554l-.003 84.341M319.711 147.263v61.886M325.301 152.285l.723 57.28M352.124 173.609v43.94M358.424 177.317l.003 40.897M382.042 189.402v29.78M387.559 191.789l.784 27.827M414.444 199.134v21.416M420.23 199.346l.001 21.897M439.916 198.501v22.05M445.701 197.202v24.041M463.16 192.107v29.031M468.945 189.609v32.448M486.444 178.489v43.352M492.229 174.023l-.002 48.856M504.637 161.891v63.006M510.445 155.54v71.24M548.386 196.564v35.017M554.195 216.899l-.005 16.564M165.132 33.843v157.876M171.291 24.5l-.002 167.223", "stroke": "#00DC82", "stroke-width": "2" } }), _c("path", { attrs: { "d": "M189.156 1.338l4.584-.395v286.53l-4.584 1.516V1.338z", "fill": "#40E5A1" } }), _c("path", { attrs: { "fill": "#00DC82", "d": "M184.938 26.536h38.323v8.822h-38.323zM182.97 59.135h38.323v8.822H182.97zM182.97 91.733h38.323v8.822H182.97zM184.938 124.333h38.323v8.822h-38.323z" } }), _c("path", { attrs: { "d": "M227.479 1.336l4.585-.394V287.47l-4.585 1.516V1.337zM522.195 136.145l2.643-.206v127.914l-2.642 1.05-.001-128.758z", "fill": "#40E5A1" } }), _c("path", { attrs: { "fill": "#00DC82", "d": "M520.303 140.366h17.191v4.186h-17.191zM519.42 155.834h17.191v4.186H519.42zM519.42 171.304h17.191v4.186H519.42zM520.303 186.772h17.191v4.186h-17.191z" } }), _c("path", { attrs: { "d": "M539.386 136.142l2.643-.206V263.85l-2.643 1.056V136.142z", "fill": "#40E5A1" } }), _c("path", { attrs: { "d": "M567.372 238.089C444.413 215.892.278 215.177.278 215.177v-38.119c110.66-3.113 458.828 38.476 567.094 55.602v5.429z", "fill": "#00DC82" } }), _c("path", { attrs: { "d": "M518.911 136.595l.317-.032-.317.099v-.067zM536.102 136.592l.317-.032-.317.099v-.067z", "stroke": "#00E889" } }), _c("path", { attrs: { "fill": "#00DC82", "d": "M180.719 1.338h8.438v287.651h-8.438zM219.042 1.338h8.438v287.651h-8.438zM518.411 136.146h3.785v128.758h-3.785zM535.602 136.146h3.785v128.758h-3.785z" } })]);
};
var staticRenderFns$s = [];
render$s._withStripped = true;
const __vue2_script$t = {};
const __cssModules$t = {};
var __component__$t = /* @__PURE__ */ normalizeComponent(__vue2_script$t, render$s, staticRenderFns$s, false, __vue2_injectStyles$t, null, null, null);
function __vue2_injectStyles$t(context) {
  for (let o2 in __cssModules$t) {
    this[o2] = __cssModules$t[o2];
  }
}
__component__$t.options.__file = "components/atoms/icons/IconNuxtBridge.vue";
var IconNuxtBridge = /* @__PURE__ */ function() {
  return __component__$t.exports;
}();
var render$r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 450 325", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M293.063 10.056c56.455 7.127 145.001 79.138 140.169 192.691M293.063 16.666c52.999 6.827 136.412 77.692 131.798 181.466M291.992 23.152c49.096 6.552 126.443 69.359 124.458 172.627", "stroke": "#00DC82", "stroke-width": "2" } }), _c("circle", { attrs: { "cx": "248.964", "cy": "180.002", "r": "143.734", "stroke": "#00DC82", "stroke-width": "2" } }), _c("circle", { attrs: { "cx": "248.964", "cy": "177.258", "r": "37.599", "stroke": "#00DC82", "stroke-width": "3" } }), _c("path", { attrs: { "d": "M273.682 117.498l-2.035 5.311c21.301 8.989 36.549 29.953 36.937 54.434h5.684c-.39-26.902-17.152-49.935-40.586-59.745z", "fill": "#00DC82" } }), _c("path", { attrs: { "d": "M281.544 95.64l-2.825 7.577c29.555 12.213 50.873 40.764 51.412 74.023h7.885c-.541-36.549-23.957-68.272-56.472-81.6z", "fill": "#00DC82" } }), _c("path", { attrs: { "d": "M291.548 67.793l-3.809 9.736c39.878 16.478 68.023 54.835 68.75 99.712h10.64c-.73-49.317-31.708-91.464-75.581-109.448z", "fill": "#00DC82" } }), _c("circle", { attrs: { "cx": "248.964", "cy": "177.259", "r": "18.392", "stroke": "#00DC82", "stroke-width": "3" } }), _c("circle", { attrs: { "cx": "142.228", "cy": "199.905", "r": "14.94", "stroke": "#00DC82", "stroke-width": "2" } }), _c("circle", { attrs: { "cx": "225.106", "cy": "281.648", "r": "14.94", "stroke": "#00DC82", "stroke-width": "2" } }), _c("circle", { attrs: { "cx": "181.709", "cy": "194.289", "r": "9.324", "stroke": "#00DC82", "stroke-width": "2" } }), _c("circle", { attrs: { "cx": "189.858", "cy": "235.991", "r": "13.631", "stroke": "#00DC82", "stroke-width": "2" } }), _c("circle", { attrs: { "cx": "248.279", "cy": "180.688", "r": "130.201", "stroke": "#00DC82", "stroke-width": "3" } }), _c("path", { attrs: { "d": "M401.929 282.208c24.245 0 43.9-19.655 43.9-43.901 0-24.245-19.655-43.9-43.9-43.9-3.93 0-6.503.423-10.127 1.391l-.297-4.175c3.734-.931 6.402-1.331 10.424-1.331 26.518 0 48.016 21.497 48.016 48.015 0 26.519-21.498 48.016-48.016 48.016-16.015 0-30.199-7.84-38.922-19.892l2.62-3.43c7.902 11.594 21.213 19.207 36.302 19.207z", "fill": "#00DC82" } }), _c("path", { attrs: { "d": "M401.929 272.605c19.767 0 35.669-15.73 35.669-34.983 0-19.254-15.902-34.983-35.669-34.983-4.343 0-7.588.52-11.433 1.911v-4.348c3.887-1.245 7.123-1.679 11.433-1.679 21.973 0 39.785 17.505 39.785 39.099 0 21.593-17.812 39.098-39.785 39.098-14.139 0-26.555-7.248-33.611-18.17l2.744-3.391c6.163 10.414 17.651 17.446 30.867 17.446z", "fill": "#00DC82" } }), _c("path", { attrs: { "d": "M401.929 263.002c13.638 0 24.694-11.056 24.694-24.694s-11.056-24.694-24.694-24.694c-5.881 0-10.474 2.055-14.715 5.487l.674-5.487c4.336-2.613 8.609-4.116 14.041-4.116 15.911 0 28.809 12.899 28.809 28.81s-12.898 28.809-28.809 28.809c-13.051 0-23.827-6.597-27.369-18.497l3.264-4.116c1.959 11.679 11.869 18.498 24.105 18.498z", "fill": "#00DC82" } }), _c("path", { attrs: { "d": "M108.631 149.881H75.365V69.547c0-37.555 30.444-68 68-68h138.164v38.65", "stroke": "#00DC82", "stroke-width": "3" } }), _c("path", { attrs: { "stroke": "#00DC82", "stroke-width": "2", "d": "M283.49 7.708h8.811v17.943h-8.811zM48.44 102.206h25.925v28.717H48.44zM48.838 107.08H2.796M48.838 116.868H2.796M48.838 126.392H2.796M115.194 232.746H58.853l-17.877 18.449v52.009h133.781" } }), _c("path", { attrs: { "d": "M41.282 298.48L9.887 283.065l3.611-8.802 27.784 13.013M40.976 272.848l-30.243-14.67 3.61-8.802 26.633 12.639M8.43 242.485l7.372 3.24-6.935 15.778-7.371-3.24zM8.631 268.316l6.142 2.473L8.648 286l-6.142-2.473zM253.637 297.644v-63.268c34.998-2.159 54.249-25.026 54.249-51.609h58.098c-14.301 95.667-83.405 116.731-112.347 114.877zM137.434 176.212h58.716c2.215-32.526 25.277-50.39 52.061-50.356v-58.35c-80.088 0-110.777 74.058-110.777 108.706zM148.271 176.579c3.346-36.424 34.406-98.159 100.169-98.159M162.333 176.597c2.876-31.305 29.57-84.362 86.09-84.362M178.238 176.617c2.344-25.514 24.101-68.757 70.165-68.757M264.06 233.927v63.561M276.397 230.031v65.127M288.063 222.684v68.544M300.951 208.125v78.11M314.2 182.767v95.294M314.482 196.151h48.525M314.267 210.912h45.076M313.969 226.273h39.435M314.484 241.378l31.981.055M314.481 255.77l21.778-.028M313.804 268.183h11.119M141.187 185.053l40.49-.061M190.008 190.066l46.787 82.304M131.048 209.839l81.679 80.139", "stroke": "#00DC82", "stroke-width": "2" } })]);
};
var staticRenderFns$r = [];
render$r._withStripped = true;
const __vue2_script$s = {};
const __cssModules$s = {};
var __component__$s = /* @__PURE__ */ normalizeComponent(__vue2_script$s, render$r, staticRenderFns$r, false, __vue2_injectStyles$s, null, null, null);
function __vue2_injectStyles$s(context) {
  for (let o2 in __cssModules$s) {
    this[o2] = __cssModules$s[o2];
  }
}
__component__$s.options.__file = "components/atoms/icons/IconNuxtNitro.vue";
var IconNuxtNitro = /* @__PURE__ */ function() {
  return __component__$s.exports;
}();
var render$q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 48 48" } }, [_c("g", { attrs: { "fill": "none", "stroke": "currentColor", "strokeWidth": "4", "strokeLinecap": "round", "strokeLinejoin": "round" } }, [_c("path", { attrs: { "d": "M41.5 10h-6M27.5 6v8M27.5 10h-22M13.5 24h-8M21.5 20v8M43.5 24h-22M41.5 38h-6M27.5 34v8M27.5 38h-22" } })])]);
};
var staticRenderFns$q = [];
render$q._withStripped = true;
const __vue2_script$r = {};
const __cssModules$r = {};
var __component__$r = /* @__PURE__ */ normalizeComponent(__vue2_script$r, render$q, staticRenderFns$q, false, __vue2_injectStyles$r, null, null, null);
function __vue2_injectStyles$r(context) {
  for (let o2 in __cssModules$r) {
    this[o2] = __cssModules$r[o2];
  }
}
__component__$r.options.__file = "components/atoms/icons/IconPresets.vue";
var IconPresets = /* @__PURE__ */ function() {
  return __component__$r.exports;
}();
var render$p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "iconify iconify--fluent", attrs: { "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", "role": "img", "width": "32", "height": "32", "preserveAspectRatio": "xMidYMid meet", "viewBox": "0 0 28 28" } }, [_c("g", { attrs: { "fill": "none" } }, [_c("path", { attrs: { "d": "M18.184 5.55l6.555 6.554a4.305 4.305 0 0 1-4.038 7.234v.246A2.415 2.415 0 0 1 18.286 22H15.5v-.826A3.173 3.173 0 0 0 12.335 18h-1.59a.75.75 0 0 0 0 1.5h1.59c.917 0 1.666.75 1.666 1.674V22H7.399A2.401 2.401 0 0 1 5 19.584v-3.15c0-.233.015-.463.043-.69A2.875 2.875 0 1 1 7.55 11.82c.831-.519 1.814-.82 2.868-.82h4.849c.729 0 1.424.144 2.06.404c.197-.332.438-.615.72-.905l-2.406-2.406a1.798 1.798 0 1 1 2.543-2.543z", "fill": "currentColor" } })])]);
};
var staticRenderFns$p = [];
render$p._withStripped = true;
const __vue2_script$q = {};
const __cssModules$q = {};
var __component__$q = /* @__PURE__ */ normalizeComponent(__vue2_script$q, render$p, staticRenderFns$p, false, __vue2_injectStyles$q, null, null, null);
function __vue2_injectStyles$q(context) {
  for (let o2 in __cssModules$q) {
    this[o2] = __cssModules$q[o2];
  }
}
__component__$q.options.__file = "components/atoms/icons/IconRabbit.vue";
var IconRabbit = /* @__PURE__ */ function() {
  return __component__$q.exports;
}();
var render$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "iconify iconify--carbon", attrs: { "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", "role": "img", "width": "32", "height": "32", "preserveAspectRatio": "xMidYMid meet", "viewBox": "0 0 32 32" } }, [_c("path", { attrs: { "d": "M8 16l8-8l8 8l-8 8z", "fill": "currentColor" } }), _c("path", { attrs: { "d": "M16 4A12 12 0 1 1 4 16A12.014 12.014 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2z", "fill": "currentColor" } })]);
};
var staticRenderFns$o = [];
render$o._withStripped = true;
const __vue2_script$p = {};
const __cssModules$p = {};
var __component__$p = /* @__PURE__ */ normalizeComponent(__vue2_script$p, render$o, staticRenderFns$o, false, __vue2_injectStyles$p, null, null, null);
function __vue2_injectStyles$p(context) {
  for (let o2 in __cssModules$p) {
    this[o2] = __cssModules$p[o2];
  }
}
__component__$p.options.__file = "components/atoms/icons/IconSuspense.vue";
var IconSuspense = /* @__PURE__ */ function() {
  return __component__$p.exports;
}();
var render$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "40", "height": "40", "viewBox": "0 0 40 40", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M4.71 1h30.58C37.338 1 39 2.661 39 4.71v30.58A3.71 3.71 0 0135.29 39H4.71A3.711 3.711 0 011 35.29V4.71C1 2.662 2.662 1 4.71 1zm19.817 30.354v-.147l-.14.033c.046.039.093.077.14.114zm0 0v3.564c.602.312 1.336.542 2.153.698.816.156 1.707.23 2.597.23.891 0 1.707-.082 2.524-.253a6.398 6.398 0 002.078-.816c.601-.393 1.113-.89 1.41-1.559.297-.668.527-1.41.527-2.375 0-.675-.104-1.261-.304-1.78-.2-.52-.49-.966-.89-1.337a5.902 5.902 0 00-1.337-1.039 16.568 16.568 0 00-1.781-.89c-.304-.125-.573-.246-.84-.366a38.461 38.461 0 00-.496-.22c-.386-.194-.72-.387-.965-.58a2.65 2.65 0 01-.63-.623 1.303 1.303 0 01-.223-.742c0-.253.066-.483.2-.69.134-.208.32-.38.557-.528.237-.148.534-.26.89-.341a5.186 5.186 0 011.188-.119c.311 0 .638.023.965.07a8.255 8.255 0 012.078.579c.326.148.63.32.89.512v-3.488a9.16 9.16 0 00-1.855-.483 14.867 14.867 0 00-2.3-.155c-.892 0-1.708.096-2.524.282a5.876 5.876 0 00-2.079.89c-.6.4-1.039.89-1.41 1.559-.348.623-.52 1.336-.52 2.226 0 1.114.32 2.078.966 2.82.638.817 1.633 1.41 2.894 2.005.443.18.841.359 1.229.534l.181.082c.446.2.817.408 1.114.623.319.215.571.453.742.705.185.253.282.55.282.89a1.385 1.385 0 01-.17.668 1.46 1.46 0 01-.528.535 3.012 3.012 0 01-.89.356 5.43 5.43 0 01-1.262.126 6.729 6.729 0 01-2.375-.423 7.036 7.036 0 01-2.086-1.147zm-1.484-9.276h-4.75V35.66h-3.785V22.078h-4.75v-3.043h13.285v3.043z", "fill": "currentColor" } })]);
};
var staticRenderFns$n = [];
render$n._withStripped = true;
const __vue2_script$o = {};
const __cssModules$o = {};
var __component__$o = /* @__PURE__ */ normalizeComponent(__vue2_script$o, render$n, staticRenderFns$n, false, __vue2_injectStyles$o, null, null, null);
function __vue2_injectStyles$o(context) {
  for (let o2 in __cssModules$o) {
    this[o2] = __cssModules$o[o2];
  }
}
__component__$o.options.__file = "components/atoms/icons/IconTypeScript.vue";
var IconTypeScript = /* @__PURE__ */ function() {
  return __component__$o.exports;
}();
var render$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "iconify iconify--cib", attrs: { "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", "role": "img", "width": "32", "height": "32", "preserveAspectRatio": "xMidYMid meet", "viewBox": "0 0 32 32" } }, [_c("path", { attrs: { "d": "M28.021 24.161l-11.552 6.505v-5.068l7.198-3.943zm.792-.713V9.839l-4.229 2.432v8.745zm-24.912.713l11.552 6.505v-5.068l-7.198-3.943zm-.792-.713V9.839l4.229 2.432v8.745zm.495-14.49l11.849-6.672v4.901l-7.646 4.188zm24.714 0L16.469 2.286v4.901l7.646 4.188zm-12.865 15.49l-7.099-3.891v-7.703l7.099 4.083zm1.016 0l7.099-3.891v-7.703l-7.099 4.083zM8.833 11.964l7.13-3.901l7.13 3.901l-7.13 4.099z", "fill": "currentColor" } })]);
};
var staticRenderFns$m = [];
render$m._withStripped = true;
const __vue2_script$n = {};
const __cssModules$n = {};
var __component__$n = /* @__PURE__ */ normalizeComponent(__vue2_script$n, render$m, staticRenderFns$m, false, __vue2_injectStyles$n, null, null, null);
function __vue2_injectStyles$n(context) {
  for (let o2 in __cssModules$n) {
    this[o2] = __cssModules$n[o2];
  }
}
__component__$n.options.__file = "components/atoms/icons/IconWebpack.vue";
var IconWebpack = /* @__PURE__ */ function() {
  return __component__$n.exports;
}();
var render$l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "100", "height": "100", "viewBox": "0 0 100 100", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M34.7247 6.81672H61.8476L33.6914 90.2407C33.402 91.0979 32.8511 91.8428 32.1161 92.3705C31.3812 92.8982 30.4993 93.1821 29.5945 93.1823H8.48618C7.80067 93.1824 7.12499 93.0193 6.51504 92.7064C5.90509 92.3935 5.3784 91.9399 4.97855 91.3831C4.5787 90.8263 4.31718 90.1823 4.21562 89.5043C4.11406 88.8264 4.17538 88.134 4.39451 87.4844L30.6268 9.75838C30.9161 8.90078 31.4671 8.15554 32.2022 7.62762C32.9374 7.09971 33.8197 6.81572 34.7247 6.81567V6.81672Z", "fill": "url(#paint0_linear)" } }), _c("path", { attrs: { "d": "M74.14 62.7717H31.1295C30.7297 62.7713 30.339 62.8913 30.0083 63.1161C29.6776 63.3409 29.4222 63.6601 29.2755 64.032C29.1288 64.404 29.0976 64.8116 29.1858 65.2016C29.274 65.5916 29.4776 65.946 29.7702 66.2186L57.4077 92.0144C58.2123 92.765 59.2718 93.1824 60.3723 93.1821H84.7264L74.14 62.7717Z", "fill": "#0078D4" } }), _c("path", { attrs: { "d": "M34.727 6.81668C33.8121 6.81317 32.92 7.1023 32.181 7.64185C31.4421 8.18139 30.895 8.94308 30.6197 9.81564L4.4291 87.4136C4.19523 88.0655 4.1218 88.7641 4.21504 89.4504C4.30828 90.1367 4.56543 90.7904 4.96476 91.3563C5.36408 91.9221 5.89382 92.3835 6.50916 92.7014C7.12451 93.0192 7.80735 93.1842 8.49993 93.1823H30.1531C30.9595 93.0382 31.7133 92.6826 32.3373 92.1519C32.9614 91.6212 33.4334 90.9343 33.7051 90.1615L38.9281 74.7688L57.5843 92.1698C58.3661 92.8165 59.3468 93.174 60.3614 93.1823H84.6249L73.9833 62.7719L42.9614 62.7792L61.9479 6.81668H34.727Z", "fill": "url(#paint1_linear)" } }), _c("path", { attrs: { "d": "M69.3706 9.75415C69.0817 8.89794 68.5315 8.15393 67.7975 7.62694C67.0634 7.09995 66.1825 6.81655 65.2789 6.81665H35.0508C35.9544 6.8167 36.8352 7.10017 37.5692 7.62713C38.3032 8.1541 38.8535 8.89802 39.1424 9.75415L65.3758 87.4833C65.5951 88.133 65.6565 88.8255 65.5551 89.5037C65.4536 90.1818 65.1921 90.826 64.7923 91.383C64.3924 91.94 63.8657 92.3939 63.2557 92.7069C62.6456 93.02 61.9698 93.1833 61.2841 93.1833H91.5133C92.1989 93.1831 92.8746 93.0197 93.4845 92.7066C94.0944 92.3934 94.621 91.9396 95.0207 91.3826C95.4204 90.8256 95.6818 90.1814 95.7832 89.5034C95.8846 88.8253 95.8232 88.1329 95.6039 87.4833L69.3706 9.75415Z", "fill": "url(#paint2_linear)" } }), _c("defs", [_c("linearGradient", { attrs: { "id": "paint0_linear", "x1": "44.6101", "y1": "13.2167", "x2": "16.4424", "y2": "96.4313", "gradientUnits": "userSpaceOnUse" } }, [_c("stop", { attrs: { "stop-color": "#114A8B" } }), _c("stop", { attrs: { "offset": "1", "stop-color": "#0669BC" } })], 1), _c("linearGradient", { attrs: { "id": "paint1_linear", "x1": "53.4114", "y1": "51.9969", "x2": "46.8958", "y2": "54.2", "gradientUnits": "userSpaceOnUse" } }, [_c("stop", { attrs: { "stop-opacity": "0.3" } }), _c("stop", { attrs: { "offset": "0.071", "stop-opacity": "0.2" } }), _c("stop", { attrs: { "offset": "0.321", "stop-opacity": "0.1" } }), _c("stop", { attrs: { "offset": "0.623", "stop-opacity": "0.05" } }), _c("stop", { attrs: { "offset": "1", "stop-opacity": "0" } })], 1), _c("linearGradient", { attrs: { "id": "paint2_linear", "x1": "49.8289", "y1": "10.7896", "x2": "80.7487", "y2": "93.1656", "gradientUnits": "userSpaceOnUse" } }, [_c("stop", { attrs: { "stop-color": "#3CCBF4" } }), _c("stop", { attrs: { "offset": "1", "stop-color": "#2892DF" } })], 1)], 1)]);
};
var staticRenderFns$l = [];
render$l._withStripped = true;
const __vue2_script$m = {};
const __cssModules$m = {};
var __component__$m = /* @__PURE__ */ normalizeComponent(__vue2_script$m, render$l, staticRenderFns$l, false, __vue2_injectStyles$m, null, null, null);
function __vue2_injectStyles$m(context) {
  for (let o2 in __cssModules$m) {
    this[o2] = __cssModules$m[o2];
  }
}
__component__$m.options.__file = "components/atoms/logo/LogoAzure.vue";
var LogoAzure = /* @__PURE__ */ function() {
  return __component__$m.exports;
}();
var render$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "100", "height": "100", "viewBox": "0 0 100 100", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M76.1419 47.3651L74.2748 46.6184C65.4994 66.3636 30.5896 54.3595 28.489 60.2334C28.1389 64.2011 47.5532 60.9878 61.4326 61.6604C65.665 61.8653 67.7874 65.0603 65.9902 70.268L69.5301 70.2789C73.6135 57.5492 86.6452 64.0457 87.1898 59.8445C86.2951 57.0823 72.2129 59.8445 76.1419 47.3651Z", "fill": "white" } }), _c("path", { attrs: { "d": "M66.9917 68.0907C67.5518 66.2236 67.3651 64.3564 66.4317 63.236C65.4979 62.1156 64.1908 61.3688 62.5103 61.1822L30.0207 60.8084C29.834 60.8084 29.6473 60.6218 29.4607 60.6218C29.274 60.4351 29.274 60.2484 29.4607 60.0617C29.6473 59.6884 29.834 59.5013 30.2074 59.5013L62.8837 59.128C66.805 58.9413 70.913 55.767 72.4065 52.0327L74.274 47.178C74.274 46.991 74.4607 46.8043 74.274 46.6176C72.2198 37.0949 63.6308 29.9993 53.5476 29.9993C44.2115 29.9993 36.1825 35.9744 33.3816 44.3771C31.5145 43.07 29.274 42.3229 26.6598 42.51C22.1784 42.8833 18.6308 46.6176 18.0704 51.099C17.8837 52.2194 18.0704 53.3399 18.2574 54.4599C10.9752 54.6466 5 60.6218 5 68.0907C5 68.8374 5 69.3978 5.18668 70.1445C5.18668 70.5183 5.56004 70.7049 5.74707 70.7049H65.6846C66.058 70.7049 66.4317 70.5183 66.4317 70.1445L66.9917 68.0907Z", "fill": "#F4811F" } }), _c("path", { attrs: { "d": "M77.2603 47.1782H76.3265C76.1398 47.1782 75.9531 47.3649 75.7665 47.5516L74.4594 52.0329C73.8993 53.9001 74.086 55.7676 75.0197 56.8877C75.9531 58.0081 77.2603 58.7548 78.9407 58.9419L85.8496 59.3152C86.0363 59.3152 86.223 59.5019 86.4097 59.5019C86.5964 59.6886 86.5964 59.8753 86.4097 60.0619C86.223 60.4356 86.0363 60.6223 85.6626 60.6223L78.5674 60.9957C74.646 61.1824 70.5384 64.3566 69.0446 68.0909L68.6709 69.7717C68.4842 69.9584 68.6709 70.3318 69.0446 70.3318H93.6919C94.0653 70.3318 94.252 70.1451 94.252 69.7717C94.6253 68.2779 94.9987 66.5975 94.9987 64.9167C94.9987 55.2072 86.9697 47.1782 77.2603 47.1782Z", "fill": "#FAAD3F" } })]);
};
var staticRenderFns$k = [];
render$k._withStripped = true;
const __vue2_script$l = {};
const __cssModules$l = {};
var __component__$l = /* @__PURE__ */ normalizeComponent(__vue2_script$l, render$k, staticRenderFns$k, false, __vue2_injectStyles$l, null, null, null);
function __vue2_injectStyles$l(context) {
  for (let o2 in __cssModules$l) {
    this[o2] = __cssModules$l[o2];
  }
}
__component__$l.options.__file = "components/atoms/logo/LogoCloudFlare.vue";
var LogoCloudFlare = /* @__PURE__ */ function() {
  return __component__$l.exports;
}();
var render$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "0.73em", "height": "1em", "viewBox": "0 0 256 351" } }, [_c("defs", [_c("filter", { attrs: { "id": "IconifyId-17c6fdde69b-f33216-99", "x": "-50%", "y": "-50%", "width": "200%", "height": "200%", "filterunits": "objectBoundingBox" } }, [_c("feGaussianBlur", { attrs: { "stddeviation": "17.5", "in": "SourceAlpha", "result": "shadowBlurInner1" } }), _c("feOffset", { attrs: { "in": "shadowBlurInner1", "result": "shadowOffsetInner1" } }), _c("feComposite", { attrs: { "in": "shadowOffsetInner1", "in2": "SourceAlpha", "operator": "arithmetic", "k2": "-1", "k3": "1", "result": "shadowInnerInner1" } }), _c("feColorMatrix", { attrs: { "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0", "in": "shadowInnerInner1" } })], 1), _c("filter", { attrs: { "id": "IconifyId-17c6fdde69b-f33216-100", "x": "-50%", "y": "-50%", "width": "200%", "height": "200%", "filterunits": "objectBoundingBox" } }, [_c("feGaussianBlur", { attrs: { "stddeviation": "3.5", "in": "SourceAlpha", "result": "shadowBlurInner1" } }), _c("feOffset", { attrs: { "dx": "1", "dy": "-9", "in": "shadowBlurInner1", "result": "shadowOffsetInner1" } }), _c("feComposite", { attrs: { "in": "shadowOffsetInner1", "in2": "SourceAlpha", "operator": "arithmetic", "k2": "-1", "k3": "1", "result": "shadowInnerInner1" } }), _c("feColorMatrix", { attrs: { "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0", "in": "shadowInnerInner1" } })], 1), _c("path", { attrs: { "id": "IconifyId-17c6fdde69b-f33216-101", "d": "M1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z" } }), _c("path", { attrs: { "id": "IconifyId-17c6fdde69b-f33216-102", "d": "M134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744l31.678 58.556z" } })]), _c("path", { attrs: { "d": "M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z", "fill": "#FFC24A" } }), _c("use", { attrs: { "fill": "#FFA712", "fillRule": "evenodd", "xlink:href": "#IconifyId-17c6fdde69b-f33216-101" } }), _c("use", { attrs: { "filter": "url(#IconifyId-17c6fdde69b-f33216-99)", "xlink:href": "#IconifyId-17c6fdde69b-f33216-101" } }), _c("path", { attrs: { "d": "M135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z", "fill": "#F4BD62" } }), _c("use", { attrs: { "fill": "#FFA50E", "fillRule": "evenodd", "xlink:href": "#IconifyId-17c6fdde69b-f33216-102" } }), _c("use", { attrs: { "filter": "url(#IconifyId-17c6fdde69b-f33216-100)", "xlink:href": "#IconifyId-17c6fdde69b-f33216-102" } }), _c("path", { attrs: { "fill": "#F6820C", "d": "M0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z" } }), _c("path", { attrs: { "d": "M139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005", "fill": "#FDE068" } }), _c("path", { attrs: { "d": "M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355z", "fill": "#FCCA3F" } }), _c("path", { attrs: { "d": "M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752l-115.99 64.689z", "fill": "#EEAB37" } })]);
};
var staticRenderFns$j = [];
render$j._withStripped = true;
const __vue2_script$k = {};
const __cssModules$k = {};
var __component__$k = /* @__PURE__ */ normalizeComponent(__vue2_script$k, render$j, staticRenderFns$j, false, __vue2_injectStyles$k, null, null, null);
function __vue2_injectStyles$k(context) {
  for (let o2 in __cssModules$k) {
    this[o2] = __cssModules$k[o2];
  }
}
__component__$k.options.__file = "components/atoms/logo/LogoFirebase.vue";
var LogoFirebase = /* @__PURE__ */ function() {
  return __component__$k.exports;
}();
var render$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "viewBox": "0 0 256 256", "version": "1.1", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "preserveAspectRatio": "xMidYMid" } }, [_c("defs", [_c("radialGradient", { attrs: { "id": "radialGradient-1", "cx": "50%", "cy": "-50%", "fx": "50%", "fy": "-50%", "r": "99.999879%" } }, [_c("stop", { attrs: { "stop-color": "#20C6B7", "offset": "0%" } }), _c("stop", { attrs: { "stop-color": "#4D9ABF", "offset": "100%" } })], 1)], 1), _c("g", [_c("path", { attrs: { "d": "M185.531657,88.8386745 L185.438083,88.7986152 C185.384611,88.7785856 185.33114,88.7585559 185.284353,88.71182 C185.128922,88.5450526 185.059783,88.3156671 185.097204,88.0909005 L190.263857,56.537508 L214.49299,80.7466915 L189.294692,91.4558836 C189.224664,91.4840915 189.149609,91.4977229 189.074123,91.4959429 L188.973865,91.4959429 C188.940445,91.4759132 188.907026,91.449207 188.840187,91.3824415 C187.90243,90.3394667 186.781011,89.4772625 185.531657,88.8386745 Z M220.675596,86.9158271 L246.582387,112.794149 C251.962925,118.175451 254.656536,120.859426 255.639069,123.9707 C255.786115,124.431382 255.906425,124.892064 256,125.3661 L194.087047,99.1739796 C194.053777,99.1602565 194.020356,99.1469026 193.986789,99.1339203 C193.739485,99.033772 193.452077,98.9202706 193.452077,98.6665615 C193.452077,98.4128525 193.746169,98.2926745 193.993473,98.1925262 L194.07368,98.1591434 L220.675596,86.9158271 Z M254.943944,133.671732 C253.607164,136.182117 251.000444,138.785972 246.589071,143.199174 L217.380434,172.369037 L179.603039,164.510734 L179.402522,164.470674 C179.068327,164.417262 178.714081,164.357173 178.714081,164.056728 C178.424059,160.910007 176.838377,158.025062 174.336127,156.091599 C174.182397,155.938039 174.222501,155.697683 174.269288,155.477357 C174.269288,155.443974 174.269288,155.410591 174.282656,155.383885 L181.38764,111.812696 L181.414376,111.665811 C181.454479,111.331984 181.514634,110.944744 181.81541,110.944744 C184.891098,110.562547 187.68443,108.962956 189.568732,106.504836 C189.628887,106.43807 189.66899,106.364628 189.749197,106.324569 C189.963082,106.22442 190.21707,106.324569 190.437639,106.41804 L254.93726,133.671732 L254.943944,133.671732 Z M210.663116,179.078974 L162.632621,227.056688 L170.853816,176.581943 L170.867184,176.515177 C170.873868,176.448412 170.887235,176.381646 170.907287,176.321557 C170.974126,176.16132 171.147907,176.094554 171.315005,176.027789 L171.395212,175.994406 C173.195291,175.227234 174.787364,174.044216 176.040521,172.542628 C176.200935,172.355684 176.394768,172.175417 176.642072,172.142034 C176.706258,172.131568 176.771719,172.131568 176.835905,172.142034 L210.656432,179.08565 L210.663116,179.078974 Z M152.466411,237.211726 L147.052453,242.619735 L87.198141,156.211777 C87.1764966,156.180172 87.1542123,156.149008 87.1313021,156.118306 C87.0377275,155.991451 86.937469,155.864597 86.9575207,155.717712 C86.9642046,155.610888 87.0310436,155.517416 87.1045665,155.437297 L87.1714054,155.350502 C87.3518707,155.08344 87.5056004,154.816378 87.6726978,154.529286 L87.8063758,154.295607 L87.8264275,154.275577 C87.9200021,154.11534 88.0068928,153.961779 88.1673063,153.874984 C88.3076682,153.808218 88.5015013,153.834924 88.6552309,153.868307 L154.966189,167.528536 C155.151602,167.557337 155.326509,167.6332 155.474165,167.748862 C155.561056,167.835657 155.581108,167.929129 155.601159,168.035954 C156.538781,171.579604 159.080685,174.481797 162.472207,175.880905 C162.659356,175.974376 162.579149,176.181349 162.492259,176.401676 C162.448907,176.498239 162.41532,176.598887 162.392,176.702121 C161.556513,181.776301 154.391374,225.427609 152.466411,237.211726 Z M141.157254,248.501779 C137.166967,252.447622 134.814235,254.537383 132.154043,255.378629 C129.531121,256.207124 126.716183,256.207124 124.093261,255.378629 C120.978565,254.390499 118.284953,251.706524 112.904415,246.325222 L52.796115,186.282975 L68.4965928,161.96029 C68.5701157,161.840112 68.6436385,161.733287 68.7639487,161.646492 C68.9310462,161.526314 69.1716665,161.579727 69.3721835,161.646492 C72.9758773,162.732509 76.8450731,162.536667 80.3204094,161.092338 C80.5008747,161.025573 80.6813399,160.978837 80.8217018,161.105691 C80.8918911,161.169689 80.9546672,161.241354 81.0088509,161.319341 L141.157254,248.508455 L141.157254,248.501779 Z M47.0011749,180.494403 L33.2122921,166.720673 L60.442495,155.116823 C60.5120976,155.086505 60.5871334,155.070606 60.6630636,155.070087 C60.8903162,155.070087 61.0239942,155.29709 61.1443043,155.504063 C61.4179565,155.924608 61.7078093,156.33441 62.0132111,156.732549 L62.1001018,156.839374 C62.1803086,156.952875 62.1268374,157.066376 62.0466306,157.173201 L47.0078588,180.494403 L47.0011749,180.494403 Z M27.1098927,160.624979 L9.66491737,143.199174 C6.69726639,140.234785 4.54505104,138.084934 3.04785776,136.235529 L56.091277,147.225136 C56.1579088,147.237472 56.2247588,147.248601 56.2917939,147.258519 C56.619305,147.311931 56.9802355,147.37202 56.9802355,147.679142 C56.9802355,148.01297 56.5858855,148.16653 56.2516906,148.293385 L56.0979609,148.36015 L27.1098927,160.624979 Z M0,127.275594 C0.0604502235,126.153061 0.262565974,125.042646 0.601550873,123.9707 C1.59076787,120.859426 4.2776951,118.175451 9.66491737,112.794149 L31.9891387,90.4944599 C42.2678594,105.395725 52.574449,120.277789 62.9088536,135.140574 C63.0893188,135.38093 63.2898358,135.647992 63.0826349,135.848289 C62.1067857,136.923214 61.1309365,138.098287 60.442495,139.373509 C60.3678094,139.537425 60.2528491,139.679819 60.1083,139.787455 C60.0214094,139.840868 59.9278348,139.820838 59.8275763,139.800809 L59.8142085,139.800809 L0,127.268917 L0,127.275594 Z M37.964544,84.5256209 L67.9819326,54.5412184 C70.8025378,55.7763809 81.069006,60.1094642 90.2526827,63.9818653 C97.2039372,66.9195489 103.540273,69.5901704 105.532075,70.4581223 C105.732592,70.538241 105.913057,70.6183596 105.999948,70.8186562 C106.053419,70.9388342 106.026683,71.0923949 105.999948,71.2192495 C105.034732,75.6158947 106.348462,80.2026244 109.495627,83.4239895 C109.696144,83.6242861 109.495627,83.911378 109.321845,84.1584104 L109.228271,84.2986181 L78.7496932,131.455117 C78.6694864,131.588648 78.5959636,131.702149 78.4622856,131.788944 C78.301872,131.889093 78.0746195,131.842357 77.8874703,131.795621 C76.7020471,131.485387 75.4834144,131.319494 74.2581134,131.301556 C73.161954,131.301556 71.97222,131.501852 70.7691183,131.722179 L70.7624344,131.722179 C70.6287564,131.742208 70.5084463,131.768915 70.4015039,131.688796 C70.2833886,131.592374 70.181798,131.477365 70.1007284,131.348292 L37.964544,84.5256209 Z M74.0442286,48.4855843 L112.904415,9.66810134 C118.284953,4.29347565 120.978565,1.60282452 124.093261,0.621371137 C126.716183,-0.207123712 129.531121,-0.207123712 132.154043,0.621371137 C135.26874,1.60282452 137.962351,4.29347565 143.342889,9.66810134 L151.764601,18.0805589 L124.126681,60.8372085 C124.058309,60.96168 123.965028,61.0707669 123.852641,61.1576831 C123.685543,61.2711845 123.451607,61.2244486 123.25109,61.1576831 C118.82732,59.8166713 114.026083,60.7408929 110.418005,63.628008 C110.237539,63.8149515 109.970184,63.7081266 109.742931,63.6079783 C106.133626,62.0389882 78.0612517,50.1881055 74.0442286,48.4855843 Z M157.633064,23.942573 L183.152189,49.4336549 L177.003003,87.4766576 L177.003003,87.5768059 C176.997512,87.6635077 176.979502,87.7489613 176.949531,87.8305149 C176.882692,87.964046 176.749014,87.9907522 176.615336,88.0308116 C175.300608,88.4286107 174.062357,89.0447985 172.95256,89.8535107 C172.904848,89.8874753 172.860126,89.925447 172.818882,89.9670121 C172.745359,90.0471308 172.671836,90.1205729 172.551526,90.133926 C172.453607,90.136948 172.356022,90.1210796 172.264118,90.0871901 L133.377196,73.5827495 L133.303674,73.5493667 C133.056369,73.4492184 132.762278,73.3290404 132.762278,73.0753314 C132.53371,70.9106875 131.825947,68.8239396 130.690269,66.9662848 C130.50312,66.6591633 130.295919,66.3386887 130.456333,66.0248907 L157.633064,23.942573 Z M131.351975,81.4009938 L167.805958,96.8238327 C168.006475,96.9173045 168.227044,97.0040997 168.313934,97.2110728 C168.348719,97.335548 168.348719,97.4671613 168.313934,97.5916364 C168.206992,98.1257607 168.113417,98.7333271 168.113417,99.34757 L168.113417,100.369083 C168.113417,100.622792 167.852745,100.729617 167.612125,100.829765 L167.538602,100.856471 C161.763714,103.320119 86.4629122,135.394283 86.3492859,135.394283 C86.2356596,135.394283 86.1153495,135.394283 86.0017232,135.280782 C85.8012062,135.080485 86.0017232,134.80007 86.1821885,134.546361 C86.2140937,134.502354 86.2452892,134.457838 86.275763,134.41283 L116.232997,88.0775474 L116.286468,87.9974288 C116.460249,87.7170135 116.660766,87.4032155 116.981593,87.4032155 L117.282369,87.4499514 C117.964126,87.5434231 118.565677,87.6302183 119.173912,87.6302183 C123.718963,87.6302183 127.929819,85.4202791 130.469701,81.6413497 C130.530215,81.5404379 130.606999,81.4502028 130.696953,81.3742876 C130.877418,81.2407565 131.144774,81.307522 131.351975,81.4009938 Z M89.6043445,142.725139 L171.682619,107.760028 C171.682619,107.760028 171.802929,107.760028 171.916556,107.873529 C172.364377,108.320858 172.745359,108.621303 173.112974,108.901718 L173.293439,109.01522 C173.460536,109.108691 173.627634,109.215516 173.641002,109.389107 C173.641002,109.455872 173.641002,109.495932 173.627634,109.556021 L166.596172,152.69991 L166.569437,152.873501 C166.52265,153.207328 166.475862,153.587892 166.161719,153.587892 C162.355867,153.844495 158.921931,155.960553 156.984726,159.242933 L156.951307,159.296345 C156.857732,159.449906 156.770841,159.59679 156.617112,159.676909 C156.47675,159.743674 156.296285,159.716968 156.149239,159.683585 L90.69382,146.196947 C90.626981,146.183594 89.6778674,142.731816 89.6043445,142.725139 Z", "fill": "url(#radialGradient-1)", "fill-rule": "nonzero" } })])]);
};
var staticRenderFns$i = [];
render$i._withStripped = true;
const __vue2_script$j = {};
const __cssModules$j = {};
var __component__$j = /* @__PURE__ */ normalizeComponent(__vue2_script$j, render$i, staticRenderFns$i, false, __vue2_injectStyles$j, null, null, null);
function __vue2_injectStyles$j(context) {
  for (let o2 in __cssModules$j) {
    this[o2] = __cssModules$j[o2];
  }
}
__component__$j.options.__file = "components/atoms/logo/LogoNetlify.vue";
var LogoNetlify = /* @__PURE__ */ function() {
  return __component__$j.exports;
}();
var render$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { attrs: { "width": "1em", "height": "1em", "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10.43 3.223c-.83 1.386-.906 1.499-1.21 1.81c-.633.654-1.417 1.003-2.415 1.074c-.187.013-1.265.033-2.702.05c-.638.008-.75.011-.766.028c-.01.011-.185.274-.39.586l-.37.565l.104.005c.056.003.443-.003.858-.011a93.159 93.163 0 0 1 1.335-.019c.572 0 .58 0 .667.03c.246.084.393.306.355.533a.504.504 0 0 1-.394.42c-.104.027-.375.034-2.821.075c-.426.007-.78.015-.784.02a30.5 30.5 0 0 0-.747 1.145c.004.004.405 0 .893-.007c3.13-.051 5.844-.092 6.6-.1c.727-.008.995-.02 1.19-.054c.54-.092.954-.297 1.31-.65c.253-.252.475-.572.852-1.23c.125-.217.262-.45.307-.52l.138-.223c.033-.054.07-.11.082-.125c.033-.038.1-.146.14-.23c.034-.07.534-.906.75-1.257c.15-.242.232-.312.42-.355c.26-.06.58.102.653.332c.06.188.033.305-.136.59c-1.21 2.035-1.65 2.764-1.887 3.123c-.672 1.018-1.684 1.564-2.991 1.613c-.105.003-.773.015-1.486.026l-2.052.031l-1.591.027a1166.545 1166.596 0 0 1-3.102.048c-.502.005-.761.013-.78.022a.723.723 0 0 0-.12.186a2.87 2.87 0 0 0-.285.793a.427.427 0 0 1-.039.132c-.024.007-.02.787.003.81a.41.41 0 0 1 .04.135c.057.285.197.616.395.932l.092.147l1.316.008c.724.004 2.597.015 4.164.021c1.692.008 2.914.019 3.01.027c.318.026.488.052.75.118a3.374 3.374 0 0 1 1.652.95c.255.264.38.44.941 1.339a188.3 188.3 0 0 1 1.494 2.44c.142.28.05.571-.223.7a.588.588 0 0 1-.518.01c-.145-.072-.152-.08-.9-1.29a85.42 85.42 0 0 0-.512-.822a26.09 26.091 0 0 1-.344-.565c-.37-.62-.588-.93-.82-1.162a2.367 2.367 0 0 0-1.164-.627c-.286-.064-.338-.066-2.328-.077a590.763 590.789 0 0 0-3.215-.014c-.738 0-1.634-.005-1.99-.008c-.517-.008-.647-.007-.647.007c0 .008.156.27.348.578l.348.56l.332.003c2.407.019 2.53.02 2.619.037c.194.04.309.123.386.28a.35.35 0 0 1 .05.212a.43.43 0 0 1-.143.342a.568.568 0 0 1-.251.142c-.075.022-.142.024-1.214.02c-.92-.003-1.134 0-1.126.013a93.7 93.7 0 0 0 .704 1.135c.008.007.592.016 1.508.021c1.23.008 1.527.013 1.673.03c1.105.13 1.942.603 2.573 1.457c.117.158.248.366.912 1.44l.466.754h.714c.392 0 .714-.003.714-.007s-.257-.42-.57-.924a493.191 493.213 0 0 1-1.49-2.407a12.643 12.644 0 0 0-.274-.43a2.395 2.395 0 0 0-1.434-.97c-.252-.061-.428-.077-.874-.083c-.446-.006-.522-.016-.646-.08a.552.552 0 0 1-.231-.227c-.033-.065-.037-.088-.037-.211c0-.127.003-.145.037-.208a.557.557 0 0 1 .357-.275c.07-.021.13-.024.52-.024c.345 0 .48.005.625.024c.937.12 1.64.445 2.224 1.027c.276.276.397.443.758 1.042c.127.209.412.672.636 1.028l1.05 1.686l.644 1.04h.905c.722 0 .905-.005.9-.018a23.922 23.923 0 0 0-.24-.39c-.46-.737-.493-.796-.513-.943c-.027-.206.118-.419.345-.5a.548.548 0 0 1 .6.134c.064.063.414.61.936 1.465l.156.255l.178-.009a3.32 3.32 0 0 0 1.31-.325c.065-.03.125-.056.134-.059a3.149 3.149 0 0 0 1.078-.886a541.326 541.35 0 0 0 2.393-3.65c2.484-3.806 2.433-3.724 2.554-4.086a2.682 2.682 0 0 0-.115-2.016c-.048-.103-.838-1.387-2.263-3.683a536.842 536.866 0 0 0-2.253-3.617a2.936 2.936 0 0 0-1.1-.915a3.19 3.191 0 0 0-.902-.316c-.18-.033-.193-.036-.183-.052c.004-.008-.106-.01-.292-.01l-.298.005l-.265.44c-.588.98-.643 1.068-.726 1.151a.568.568 0 0 1-.309.169c-.222.04-.496-.093-.59-.287c-.03-.057-.033-.084-.033-.204c0-.187-.009-.167.504-1.01a3.41 3.41 0 0 0 .147-.254c0-.007-.29-.012-.71-.012h-.71l-.019.03a441.636 441.636 0 0 1-1.829 3.028c-.21.347-.468.776-.57.953c-.231.396-.326.54-.49.744a4.123 4.123 0 0 1-.563.56c-.53.411-1.17.66-1.92.747c-.361.042-.884.048-1.072.013a.576.576 0 0 1-.384-.276c-.033-.065-.037-.083-.037-.21c0-.12.004-.147.034-.21a.542.542 0 0 1 .352-.279c.073-.02.16-.027.515-.037c.264-.007.485-.02.578-.033a3.15 3.15 0 0 0 .599-.15c.164-.065.396-.19.532-.288a2.87 2.87 0 0 0 .53-.526c.056-.074.325-.509.599-.966c.273-.458.8-1.334 1.171-1.947c.37-.614.677-1.124.68-1.135c.006-.016-.098-.018-.703-.018h-.708l-.622 1.035zm7.036.536c0 .01.005.02.012.022c.005.001.101.149.212.327c.506.81.692 1.117.72 1.194c.036.1.04.231.008.323a.646.646 0 0 1-.24.262a.543.543 0 0 1-.657-.088c-.08-.075-.165-.201-.46-.685c-.11-.182-.214-.346-.229-.366c-.016-.024-.022-.046-.016-.066c.01-.031.56-.88.601-.925c.027-.03.05-.03.05.003zM16.08 5.896c-.004.007 0 .013.005.016c.012.004 1.003 1.593 1.574 2.523c.48.778.696 1.127.88 1.413c.301.469.413.687.526 1.026c.115.342.16.653.147 1.005c-.007.24-.03.39-.088.624c-.102.4-.325.866-.61 1.278c-.09.128-.273.322-.304.322c-.01 0-.02.005-.02.012c0 .006-.039.025-.086.04a.633.633 0 0 1-.39-.012a.661.661 0 0 1-.294-.283c-.032-.067-.034-.087-.029-.19c.007-.14.036-.202.231-.503c.25-.385.352-.596.424-.885c.124-.49.063-.976-.184-1.46a36.64 36.64 0 0 0-.692-1.138a342.675 342.69 0 0 1-1.16-1.867c-.308-.496-.569-.918-.584-.938c-.014-.021-.024-.045-.02-.054c.01-.027.59-.907.62-.938c.02-.022.03-.026.043-.016c.01.008.015.02.01.026zm3.142.909a.59.59 0 0 1 .26.188c.095.117 1.425 2.23 1.911 3.04c.28.462.41.75.5 1.103c.062.243.086.431.086.689c0 .343-.037.57-.145.897c-.126.382-.217.553-.658 1.236c-.16.25-.998 1.548-1.858 2.887l-1.862 2.89c-.163.253-.303.47-.31.485c-.008.013-.019.023-.027.02a20.635 20.636 0 0 1-.625-1.006c0-.009.012-.033.025-.052a8337.117 8337.482 0 0 1 3.846-5.967c.205-.318.266-.429.343-.62a1.95 1.95 0 0 0 .15-.84c-.014-.316-.077-.54-.254-.894c-.13-.266-.255-.476-.562-.95c-.125-.193-.269-.42-.319-.504a76.564 76.567 0 0 0-.486-.789c-.764-1.226-.755-1.21-.757-1.35c0-.118.04-.212.128-.307a.67.67 0 0 1 .32-.184a.633.633 0 0 1 .294.027zm-4.54 1.215l.2.325c1.091 1.747 1.137 1.824 1.247 2.043c.461.919.465 1.832.014 2.735c-.096.19-.135.255-.767 1.236c-.848 1.32-.947 1.47-.974 1.5c-.022.022-.025.024-.025.003c0-.012-.533-.881-1.184-1.93a193.219 193.227 0 0 1-1.184-1.918c0-.007.554-.858 1.233-1.892a612.753 612.78 0 0 0 1.314-2.007a.706.706 0 0 1 .096-.127c.007 0 .02.014.03.033zm2.437 6.843a.675.675 0 0 1 .277.26a.469.469 0 0 1 .041.153c.01.133-.024.21-.264.588a820.264 820.3 0 0 1-1.25 1.954l-.125.194c-.022.04-.026.042-.048.026a29.746 29.747 0 0 1-.605-.97c-.012-.03 1.237-1.975 1.327-2.068a.55.55 0 0 1 .446-.182a.436.436 0 0 1 .201.045z", "fill": "currentColor" } })]);
};
var staticRenderFns$h = [];
render$h._withStripped = true;
const __vue2_script$i = {};
const __cssModules$i = {};
var __component__$i = /* @__PURE__ */ normalizeComponent(__vue2_script$i, render$h, staticRenderFns$h, false, __vue2_injectStyles$i, null, null, null);
function __vue2_injectStyles$i(context) {
  for (let o2 in __cssModules$i) {
    this[o2] = __cssModules$i[o2];
  }
}
__component__$i.options.__file = "components/atoms/logo/LogoPM2.vue";
var LogoPM2 = /* @__PURE__ */ function() {
  return __component__$i.exports;
}();
var render$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "text-black dark:text-white", attrs: { "width": "160", "height": "160", "viewBox": "0 0 160 160", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M80.0761 12L159.152 148.965H1L80.0761 12Z", "fill": "currentColor" } })]);
};
var staticRenderFns$g = [];
render$g._withStripped = true;
const __vue2_script$h = {};
const __cssModules$h = {};
var __component__$h = /* @__PURE__ */ normalizeComponent(__vue2_script$h, render$g, staticRenderFns$g, false, __vue2_injectStyles$h, null, null, null);
function __vue2_injectStyles$h(context) {
  for (let o2 in __cssModules$h) {
    this[o2] = __cssModules$h[o2];
  }
}
__component__$h.options.__file = "components/atoms/logo/LogoVercel.vue";
var LogoVercel = /* @__PURE__ */ function() {
  return __component__$h.exports;
}();
var render$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("nav", { ref: "nav", staticClass: "flex flex-col gap-1 py-4 px-4 sm:px-6" }, _vm._l(_vm.links, function(link2, index2) {
    return _c("NuxtLink", { key: index2, staticClass: "font-medium my-1 py-1", class: { "text-primary": _vm.isActive(link2) }, attrs: { "to": link2.to } }, [_vm._v(" " + _vm._s(link2.title) + " ")]);
  }), 1);
};
var staticRenderFns$f = [];
render$f._withStripped = true;
const __vue2_script$g = defineComponent$2({
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const { $menu } = useContext();
    const route = useRoute();
    const currentSlug = CompositionApi.computed(() => {
      var _a;
      return route.value.path !== "/" && ((_a = route.value.params) == null ? void 0 : _a.pathMatch) ? route.value.params.pathMatch.split("/")[0] : null;
    });
    const nav = CompositionApi.ref(null);
    const openedLink = CompositionApi.ref(null);
    function selectActiveLink() {
      var _a;
      if (currentSlug.value) {
        for (const [index2, link2] of props.links.entries()) {
          if (link2.slug === currentSlug.value || ((_a = link2.items) == null ? void 0 : _a.some((item) => item.slug === currentSlug.value))) {
            openedLink.value = index2;
            break;
          }
        }
      } else {
        openedLink.value = null;
      }
    }
    selectActiveLink();
    CompositionApi.watch($menu.visible, (value) => {
      if (value) {
        selectActiveLink();
      }
    });
    function toggle(index2) {
      if (openedLink.value === index2) {
        openedLink.value = null;
      } else {
        openedLink.value = index2;
      }
    }
    function isActive(link2) {
      return `/${currentSlug.value}` === link2.to;
    }
    return {
      openedLink,
      toggle,
      nav,
      isActive
    };
  }
});
const __cssModules$g = {};
var __component__$g = /* @__PURE__ */ normalizeComponent(__vue2_script$g, render$f, staticRenderFns$f, false, __vue2_injectStyles$g, null, null, null);
function __vue2_injectStyles$g(context) {
  for (let o2 in __cssModules$g) {
    this[o2] = __cssModules$g[o2];
  }
}
__component__$g.options.__file = "components/app/AsideHeaderNavigation.vue";
var AsideHeaderNavigation = /* @__PURE__ */ function() {
  return __component__$g.exports;
}();
var render$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("canvas", { staticClass: "webgl", style: { opacity: _vm.ready ? 1 : 0 } });
};
var staticRenderFns$e = [];
render$e._withStripped = true;
var Gem_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$f = {
  data() {
    return {
      ready: false
    };
  },
  async mounted() {
    const THREE = await Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("three"));
    }).then((m2) => m2.default || m2);
    const { OrbitControls } = await Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("three/examples/jsm/controls/OrbitControls.js"));
    }).then((m2) => m2.default || m2);
    const { GLTFLoader } = await Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("three/examples/jsm/loaders/GLTFLoader.js"));
    }).then((m2) => m2.default || m2);
    const canvas = document.querySelector("canvas.webgl");
    const scene = new THREE.Scene();
    let gem;
    let light;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/3D/gem.gltf", (gltf) => {
      gem = gltf.scene.children[6];
      const textureLoader = new THREE.TextureLoader();
      const roughnessTexture = textureLoader.load("/3D/roughness.jpeg");
      gem.material.roughnessMap = roughnessTexture;
      gem.material.displacementScale = 0.15;
      gem.material.emissiveIntensity = 0.4;
      gem.material.refractionRatio = 1;
      gem.rotation.z = 0;
      scene.add(gem);
      light = gltf.scene.children[0];
      scene.add(light);
      this.ready = true;
    });
    const ambientLight = new THREE.AmbientLight(16777215, 2);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(16777215, 3);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    const directionalLight2 = new THREE.DirectionalLight(16777215, 3);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);
    const sizes = {
      width: 200,
      height: 200
    };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(2, 2, 6);
    scene.add(camera);
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;
    controls.target.set(0, 0.75, 0);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    const renderer = new THREE.WebGLRenderer({
      antialiasing: true,
      canvas,
      alpha: true
    });
    renderer.setClearColor(0, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      if (gem) {
        gem.rotation.y = 1.1 * elapsedTime;
      }
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  }
};
const __cssModules$f = {};
var __component__$f = /* @__PURE__ */ normalizeComponent(__vue2_script$f, render$e, staticRenderFns$e, false, __vue2_injectStyles$f, "43ce8d92", null, null);
function __vue2_injectStyles$f(context) {
  for (let o2 in __cssModules$f) {
    this[o2] = __cssModules$f[o2];
  }
}
__component__$f.options.__file = "components/atoms/Gem.vue";
var Gem = /* @__PURE__ */ function() {
  return __component__$f.exports;
}();
var render$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Link", { staticClass: "d-icon p-3", attrs: { "to": "https://github.com/nuxt/framework", "aria-label": "gitHubLink", "blank": "" } }, [_c("IconGitHub", { staticClass: "w-6 h-6" })], 1);
};
var staticRenderFns$d = [];
render$d._withStripped = true;
const __vue2_script$e = {};
const __cssModules$e = {};
var __component__$e = /* @__PURE__ */ normalizeComponent(__vue2_script$e, render$d, staticRenderFns$d, false, __vue2_injectStyles$e, null, null, null);
function __vue2_injectStyles$e(context) {
  for (let o2 in __cssModules$e) {
    this[o2] = __cssModules$e[o2];
  }
}
__component__$e.options.__file = "components/atoms/GitHubButton.vue";
var GitHubButton = /* @__PURE__ */ function() {
  return __component__$e.exports;
}();
var render$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("h1", { staticClass: "font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 my-4" }, [_vm._t("default")], 2);
};
var staticRenderFns$c = [];
render$c._withStripped = true;
const __vue2_script$d = {};
const __cssModules$d = {};
var __component__$d = /* @__PURE__ */ normalizeComponent(__vue2_script$d, render$c, staticRenderFns$c, false, __vue2_injectStyles$d, null, null, null);
function __vue2_injectStyles$d(context) {
  for (let o2 in __cssModules$d) {
    this[o2] = __cssModules$d[o2];
  }
}
__component__$d.options.__file = "components/atoms/Headline.vue";
var Headline = /* @__PURE__ */ function() {
  return __component__$d.exports;
}();
var render$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.tag, { tag: "Component", staticClass: "relative w-full d-container-content" }, [_vm._t("default")], 2);
};
var staticRenderFns$b = [];
render$b._withStripped = true;
const __vue2_script$c = defineComponent$2({
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
});
const __cssModules$c = {};
var __component__$c = /* @__PURE__ */ normalizeComponent(__vue2_script$c, render$b, staticRenderFns$b, false, __vue2_injectStyles$c, null, null, null);
function __vue2_injectStyles$c(context) {
  for (let o2 in __cssModules$c) {
    this[o2] = __cssModules$c[o2];
  }
}
__component__$c.options.__file = "components/atoms/NuxtContainer.vue";
var NuxtContainer = /* @__PURE__ */ function() {
  return __component__$c.exports;
}();
var render$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("component", _vm._b({ staticClass: "font-medium rounded-md", class: [
    _vm.iconLeft || _vm.iconRight ? "inline-flex items-center px-4 py-2.5" : "px-4 py-2.5",
    { "text-md 2xl:text-base ": _vm.size === "lg" },
    { "text-sm 2xl:text-md ": _vm.size === "md" },
    { "text-xs 2xl:text-sm ": _vm.size === "sm" }
  ], attrs: { "aria-label": _vm.ariaLabel } }, "component", _vm.linkProps, false), [_vm.iconLeft ? _c("div", { staticClass: "h-full flex items-center justify-center" }, [_c(_vm.iconLeft, { tag: "Component", staticClass: "mr-2", class: { "w-5 h-5": _vm.size === "lg" } })], 1) : _vm._e(), _vm._t("default"), _vm.iconRight ? _c("div", { staticClass: "h-full flex items-center justify-center" }, [_c(_vm.iconRight, { tag: "Component", staticClass: "ml-2", class: { "w-5 h-5": _vm.size === "lg" } })], 1) : _vm._e()], 2);
};
var staticRenderFns$a = [];
render$a._withStripped = true;
const __vue2_script$b = defineComponent$2({
  props: {
    to: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "lg",
      validator(value) {
        return ["sm", "md", "lg"].includes(value);
      }
    },
    iconLeft: {
      type: String,
      default: null
    },
    iconRight: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const linkProps = CompositionApi.computed(() => {
      const { to, href } = props;
      if (to == null ? void 0 : to.length) {
        return {
          is: "Link",
          to
        };
      } else if (href == null ? void 0 : href.length) {
        return {
          is: "Link",
          static: true,
          to: "",
          href,
          blank: true
        };
      } else {
        return {
          is: "button"
        };
      }
    });
    return {
      linkProps
    };
  }
});
const __cssModules$b = {};
var __component__$b = /* @__PURE__ */ normalizeComponent(__vue2_script$b, render$a, staticRenderFns$a, false, __vue2_injectStyles$b, null, null, null);
function __vue2_injectStyles$b(context) {
  for (let o2 in __cssModules$b) {
    this[o2] = __cssModules$b[o2];
  }
}
__component__$b.options.__file = "components/atoms/SectionButton.vue";
var SectionButton = /* @__PURE__ */ function() {
  return __component__$b.exports;
}();
var render$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "star", staticClass: "absolute bg-primary-300 dark:bg-white rounded-full opacity-100 star", style: _vm.style });
};
var staticRenderFns$9 = [];
render$9._withStripped = true;
var Star_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$a = defineComponent$2({
  setup() {
    const style2 = CompositionApi.ref({});
    const randomY = CompositionApi.ref(null);
    const randomX = CompositionApi.ref(null);
    const randomRadius = CompositionApi.computed(() => Math.round(Math.random() * Math.round(4)));
    const randomDuration = CompositionApi.computed(() => Math.round(Math.random() * Math.round(10)));
    CompositionApi.onMounted(() => {
      randomX.value = Math.random() * Math.floor(document.documentElement.clientWidth);
      randomY.value = Math.random() * Math.floor(document.documentElement.clientHeight);
      style2.value = {
        top: randomY.value + "px",
        left: randomX.value + "px",
        height: randomRadius.value + "px",
        width: randomRadius.value + "px",
        animationDuration: randomDuration.value + "s"
      };
    });
    return {
      style: style2,
      randomRadius,
      randomDuration,
      randomY,
      randomX
    };
  }
});
const __cssModules$a = {};
var __component__$a = /* @__PURE__ */ normalizeComponent(__vue2_script$a, render$9, staticRenderFns$9, false, __vue2_injectStyles$a, "67a539cc", null, null);
function __vue2_injectStyles$a(context) {
  for (let o2 in __cssModules$a) {
    this[o2] = __cssModules$a[o2];
  }
}
__component__$a.options.__file = "components/atoms/Star.vue";
var Star = /* @__PURE__ */ function() {
  return __component__$a.exports;
}();
var render$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Link", { staticClass: "d-icon p-3", attrs: { "to": "https://twitter.com/nuxt_js", "aria-label": "twitterLink", "blank": "" } }, [_c("IconTwitter", { staticClass: "w-6 h-6" })], 1);
};
var staticRenderFns$8 = [];
render$8._withStripped = true;
const __vue2_script$9 = {};
const __cssModules$9 = {};
var __component__$9 = /* @__PURE__ */ normalizeComponent(__vue2_script$9, render$8, staticRenderFns$8, false, __vue2_injectStyles$9, null, null, null);
function __vue2_injectStyles$9(context) {
  for (let o2 in __cssModules$9) {
    this[o2] = __cssModules$9[o2];
  }
}
__component__$9.options.__file = "components/atoms/TwitterButton.vue";
var TwitterButton = /* @__PURE__ */ function() {
  return __component__$9.exports;
}();
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "containerImg", staticClass: "absolute top-0 left-0 z-10 w-full h-full select-none pointer-events-none transition-opacity ease-out duration-800", class: [_vm.hidden ? "opacity-0" : "opacity-100"] }, [_c("img", { ref: "gem3", staticClass: "hidden lg:block absolute left-1/2 -ml-16 top-20", attrs: { "data-speed": "1", "loading": "lazy", "src": "/img/home/hero/gem-3.svg", "alt": "An image of a green gem from nuxt galaxy" } })]);
};
var staticRenderFns$7 = [];
render$7._withStripped = true;
const __vue2_script$8 = defineComponent$2({
  setup() {
    const containerImg = CompositionApi.ref(null);
    const hidden = CompositionApi.ref(true);
    function parallax(e2) {
      const images = Array.from(containerImg.value.children);
      if (hidden.value) {
        hidden.value = false;
      }
      for (const el of images) {
        const image = el;
        const speed = parseInt(image.getAttribute("data-speed"));
        const x2 = (window.innerWidth - e2.pageX * speed) / 100;
        const y2 = (window.innerHeight - e2.pageY * speed) / 100;
        image.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
      }
    }
    return {
      hidden,
      containerImg,
      parallax
    };
  }
});
const __cssModules$8 = {};
var __component__$8 = /* @__PURE__ */ normalizeComponent(__vue2_script$8, render$7, staticRenderFns$7, false, __vue2_injectStyles$8, null, null, null);
function __vue2_injectStyles$8(context) {
  for (let o2 in __cssModules$8) {
    this[o2] = __cssModules$8[o2];
  }
}
__component__$8.options.__file = "components/molecules/HeroParallax.vue";
var HeroParallax = /* @__PURE__ */ function() {
  return __component__$8.exports;
}();
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "overflow-hidden relative mx-auto max-w-8xl" }, [_c("HeroParallax"), _c("div", { staticClass: "flex flex-wrap justify-center py-0 section" }, [_c("section", { staticClass: "flex flex-col justify-start w-full px-4 pt-36 pb-52 md:pt-40 lg:pb-56 lg:pt-48 text-center" }, [_vm._m(0), _c("h1", { staticClass: "font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 my-8" }, [_c("Markdown", { attrs: { "use": "title", "unwrap": "p" } })], 1), _c("h2", { staticClass: "\n          font-normal\n          text-body-base\n          xs:text-body-lg\n          md:text-body-xl\n          2xl:text-body-2xl\n          px-8\n          sm:px-0\n          text-secondary-dark\n          dark:text-cloud-lighter\n        " }, [_c("Markdown", { attrs: { "use": "description", "unwrap": "p" } })], 1), _c("p", { staticClass: "text-center mt-2 text-secondary-dark dark:text-cloud-lighter" }, [_c("Markdown", { attrs: { "use": "body", "unwrap": "p" } })], 1)])])], 1);
};
var staticRenderFns$6 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("span", { staticClass: "nuxt-text-highlight" }, [_vm._v("Currently in public beta")])]);
}];
render$6._withStripped = true;
const __vue2_script$7 = {};
const __cssModules$7 = {};
var __component__$7 = /* @__PURE__ */ normalizeComponent(__vue2_script$7, render$6, staticRenderFns$6, false, __vue2_injectStyles$7, null, null, null);
function __vue2_injectStyles$7(context) {
  for (let o2 in __cssModules$7) {
    this[o2] = __cssModules$7[o2];
  }
}
__component__$7.options.__file = "components/molecules/HeroSection.vue";
var HeroSection = /* @__PURE__ */ function() {
  return __component__$7.exports;
}();
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "overflow-hidden relative dark:bg-sky-black dark:text-white pt-12" }, [_c("div", { staticClass: "flex flex-wrap justify-center py-0 section d-container-content" }, [_c("section", { staticClass: "flex flex-col justify-start w-full px-4 pb-24 sm:pt-12 sm:pb-36 lg:pt-24 lg:pb-50 text-center z-20" }, [_c("div", { staticClass: "highlight-box mx-auto mt-6 rounded-md" }, [_c("a", { staticClass: "text-sm inline-flex items-center space-x-1 px-4 md:px-5 py-1 md:py-2 font-medium", attrs: { "href": "https://nuxtjs.org/announcements/nuxt3-beta", "target": "_blank", "rel": "noopener" } }, [_c("span", [_vm._v("Read the announcement")]), _c("IconArrowRight", { staticClass: "mt-1px" })], 1)]), _c("Gem", { staticClass: "block m-x-auto" }), _c("h1", { staticClass: "font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 mb-6 pt-2" }, [_c("Markdown", { attrs: { "use": "title", "unwrap": "p" } })], 1), _c("h2", { staticClass: "\n          font-normal\n          text-body-base\n          xs:text-body-lg\n          md:text-body-xl\n          2xl:text-body-2xl\n          mb-8\n          px-8\n          sm:px-0\n          dark:text-cloud-lighter\n          text-cloud-darker\n        " }, [_c("Markdown", { attrs: { "use": "description", "unwrap": "p" } })], 1), _c("div", { staticClass: "\n          flex flex-col\n          sm:flex-row\n          flex-wrap\n          items-center\n          justify-center\n          space-y-3\n          sm:space-y-0 sm:space-x-3\n          xl:space-x-4\n        " }, [_c("SectionButton", { staticClass: "dark:bg-sky-black dark:hover:bg-sky-darker hover:bg-cloud-surface", attrs: { "href": _vm.primary.url, "aria-label": _vm.primary.text, "size": "lg", "icon-left": _vm.primary.icon } }, [_vm._v(" " + _vm._s(_vm.primary.text) + " ")]), _c("Markdown", { attrs: { "use": "secondary-button", "unwrap": "p" } })], 1)], 1)])]);
};
var staticRenderFns$5 = [];
render$5._withStripped = true;
var HomeHero_vue_vue_type_style_index_0_lang = "";
const __vue2_script$6 = {
  props: {
    primary: {
      type: Object,
      default: () => ({
        text: "Star on GitHub",
        url: "https://github.com",
        icon: "IconGitHub"
      })
    },
    secondary: {
      type: Object,
      default: () => ({
        text: "Getting started",
        url: "/docs"
      })
    }
  }
};
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(__vue2_script$6, render$5, staticRenderFns$5, false, __vue2_injectStyles$6, null, null, null);
function __vue2_injectStyles$6(context) {
  for (let o2 in __cssModules$6) {
    this[o2] = __cssModules$6[o2];
  }
}
__component__$6.options.__file = "components/molecules/HomeHero.vue";
var HomeHero = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "relative" }, [_c("section", { staticClass: "py-24 md:py-40 text-white light:text-secondary-black" }, [_c("NuxtContainer", { staticClass: "flex flex-col items-center" }, [_c("div", { staticClass: "flex flex-col w-full items-center col-span-12" }, [_c("div", { staticClass: "mb-2" }, [_c("span", { staticClass: "text-cloud-dark dark:text-cloud-light font-bold text-lg" }, [_vm._v(_vm._s(_vm.category))])]), _c("h2", { staticClass: "font-normal text-center font-serif text-display-6 md:text-display-5 2xl:text-display-4 mb-2" }, [_c("Markdown", { attrs: { "use": "title", "unwrap": "p" } })], 1), _c("p", { staticClass: "font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-12" }, [_c("Markdown", { attrs: { "use": "description", "unwrap": "p" } })], 1), _c("div", { staticClass: "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }, [_vm._t("default")], 2), _c("Markdown", { attrs: { "use": "bottom" } })], 1)])], 1)]);
};
var staticRenderFns$4 = [];
render$4._withStripped = true;
const __vue2_script$5 = defineComponent$2({
  props: {
    category: {
      type: String,
      default: "Category"
    }
  }
});
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$4, staticRenderFns$4, false, __vue2_injectStyles$5, null, null, null);
function __vue2_injectStyles$5(context) {
  for (let o2 in __cssModules$5) {
    this[o2] = __cssModules$5[o2];
  }
}
__component__$5.options.__file = "components/organisms/HomeFeatures.vue";
var HomeFeatures = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.component, { tag: "component", staticClass: "flex flex-col items-center transition duration-200 p-6 rounded-md", class: _vm.hoverClass, attrs: { "to": _vm.to, "aria-label": _vm.title } }, [_c("InjectComponent", { staticClass: "mb-4 transition duration-200 text-primary group-hover:text-primary-400", class: _vm.imageClass, attrs: { "component": _vm.image } }, [_c("img", { attrs: { "loading": "lazy", "src": _vm.image, "alt": "A " + _vm.title + " image" } })]), _c("h3", { staticClass: "relative inline-flex mb-1 text-center text-body-lg items-center lg:text-body-xl font-bold" }, [_vm._v(" " + _vm._s(_vm.title) + " "), _vm.soon ? _c("span", { staticClass: "absolute -right-48px inline-flex items-center mt-1px px-1.5 py-0.5 rounded text-xs font-medium font-mono bg-cloud-surface dark:bg-sky-dark dark:text-white" }, [_vm._v("soon")]) : _vm._e()]), _c("p", { staticClass: "text-center text-sm lg:text-base mb-4" }, [_vm._v(" " + _vm._s(_vm.description) + " ")])], 1);
};
var staticRenderFns$3 = [];
render$3._withStripped = true;
const __vue2_script$4 = defineComponent$2({
  props: {
    image: {
      type: String,
      default: ""
    },
    imageClass: {
      type: String,
      default: ""
    },
    soon: {
      type: Boolean,
      default: false
    },
    hoverClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    },
    linkName: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const component = CompositionApi.computed(() => {
      if (props.to && !props.linkName) {
        return "Link";
      }
      return "div";
    });
    return { component };
  }
});
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$3, staticRenderFns$3, false, __vue2_injectStyles$4, null, null, null);
function __vue2_injectStyles$4(context) {
  for (let o2 in __cssModules$4) {
    this[o2] = __cssModules$4[o2];
  }
}
__component__$4.options.__file = "components/organisms/SectionContentItem.vue";
var SectionContentItem = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("DocusContent", { class: _vm.page.bgClass, attrs: { "document": _vm.page } });
};
var staticRenderFns$2 = [];
render$2._withStripped = true;
const __vue2_script$3 = defineComponent$2({
  props: {
    page: {
      type: Object,
      required: true
    }
  }
});
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, render$2, staticRenderFns$2, false, __vue2_injectStyles$3, null, null, null);
function __vue2_injectStyles$3(context) {
  for (let o2 in __cssModules$3) {
    this[o2] = __cssModules$3[o2];
  }
}
__component__$3.options.__file = "components/templates/Blank.vue";
var Blank = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  BuiltWithNuxtDark,
  BuiltWithNuxtLight,
  IconAlgolia,
  IconArrowLeft,
  IconArrowRight,
  IconBadgeCheck,
  IconCheck,
  IconCheckCircle,
  IconChevronRight,
  IconClipboardCheck,
  IconClipboardCopy,
  IconCodeSandbox,
  IconCopy,
  IconEdit,
  IconExclamationCircle,
  IconExternalLink,
  IconGitHub,
  IconHeart,
  IconInformationCircle,
  IconMenu,
  IconMenuAlt,
  IconMoon,
  IconNuxt,
  IconNuxtContent,
  IconNuxtLabs,
  IconSearch,
  IconSun,
  IconTranslate,
  IconTwitter,
  IconVite,
  IconVue,
  IconWindi,
  IconX,
  IconXCircle,
  ProseA,
  ProseBlockquote,
  ProseCode,
  ProseCodeInline,
  ProseEm,
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseHr,
  ProseImg,
  ProseLi,
  ProseOl,
  ProseParagraph,
  ProseStrong,
  ProseTable,
  ProseTbody,
  ProseTd,
  ProseTh,
  ProseThead,
  ProseTr,
  ProseUl,
  AppAside,
  AppBanner,
  AppFooter,
  AppHeader,
  AppLayout,
  AppPage,
  AppTemplate,
  BlogpostCard,
  BlogpostList,
  BlogpostToc,
  AsideBottom,
  AsideTop,
  FooterBody,
  HeaderNavigation,
  PageTocBottom,
  PageTocTop,
  SlotBase,
  EditOnGithub,
  PageMobileToc,
  PagePrevNext,
  PageToc,
  PageTocList,
  Page,
  Alert,
  Badge,
  ButtonLink,
  Card,
  CodeBlock,
  CodeGroup,
  ColorSwitcher,
  CopyButton,
  Dropdown,
  HeaderLogo,
  InfoLabel,
  InjectComponent,
  InjectContent,
  LangSwitcher,
  Link,
  List,
  Logo,
  Props,
  ReleaseTag,
  Sandbox,
  VideoPlayer,
  AlgoliaSearchBox,
  AsideNavigation,
  AsideNavigationItem,
  CardGrid,
  NavigationButton,
  PoweredByDocus,
  SocialIcons,
  TabsHeader,
  BlockFeatures,
  BlockHero,
  PageContent,
  PreLaunchHero,
  PricingBlock,
  PricingGrid,
  Terminal,
  Blog,
  BlogPost,
  Docs,
  Error: _Error,
  Marketing,
  Releases,
  DocusContent,
  Markdown,
  IconCAPI,
  IconCLI,
  IconClose,
  IconCode,
  IconDevtools,
  IconDirectory,
  IconFeather,
  IconFile,
  IconFileSettings,
  IconGit,
  IconHybrid,
  IconKit,
  IconNpm,
  IconNuxtBridge,
  IconNuxtNitro,
  IconPresets,
  IconRabbit,
  IconSuspense,
  IconTypeScript,
  IconWebpack,
  LogoAzure,
  LogoCloudFlare,
  LogoFirebase,
  LogoNetlify,
  LogoPM2,
  LogoVercel,
  AsideHeaderNavigation,
  Gem,
  GitHubButton,
  Headline,
  NuxtContainer,
  SectionButton,
  Star,
  TwitterButton,
  HeroParallax,
  HeroSection,
  HomeHero,
  HomeFeatures,
  SectionContentItem,
  Blank
});
for (const name in components) {
  Vue__default["default"].component(name, components[name]);
  Vue__default["default"].component("Lazy" + name, components[name]);
}
var nuxt_plugin_plugin_2f40fc0d = () => {
};
function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}
var locale7742780c = {
  documentation: "Documentation",
  search: {
    placeholder: 'Search the docs (Press "/" to focus)'
  },
  toc: {
    title: "Table of Contents"
  },
  article: {
    github: "Edit this page on GitHub",
    updatedAt: "Updated at"
  }
};
const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: { "PREFIX": "prefix", "PREFIX_EXCEPT_DEFAULT": "prefix_except_default", "PREFIX_AND_DEFAULT": "prefix_and_default", "NO_PREFIX": "no_prefix" }
};
const options = {
  vueI18n: { "fallbackLocale": "en", "dateTimeFormats": { "en": { "long": { "year": "numeric", "month": "short", "day": "numeric", "weekday": "short" } }, "fr": { "long": { "year": "numeric", "month": "long", "day": "numeric", "weekday": "short" } } } },
  vueI18nLoader: false,
  locales: [{ "code": "en", "iso": "en-US", "file": "en-US", "name": "English" }],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/purepeace/docs/node_modules/@docus/app/dist/i18n/languages",
  rootRedirect: null,
  detectBrowserLanguage: { "alwaysRedirect": false, "cookieCrossOrigin": false, "cookieDomain": null, "cookieKey": "i18n_redirected", "cookieSecure": false, "fallbackLocale": "", "onlyOnNoPrefix": false, "onlyOnRoot": false, "useCookie": true },
  differentDomains: false,
  seo: false,
  baseUrl: ({ $docus }) => $docus && $docus.settings && $docus.settings.url || "",
  vuex: { "moduleName": "i18n", "syncLocale": false, "syncMessages": false, "syncRouteParams": true },
  parsePages: false,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {
  },
  onLanguageSwitched: () => null,
  normalizedLocales: [{ "code": "en", "iso": "en-US", "file": "en-US", "name": "English" }],
  localeCodes: ["en"]
};
const localeMessages = {
  "en-US": () => Promise.resolve(locale7742780c)
};
var cookie = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
cookie.parse = parse$2;
cookie.serialize = serialize;
var decode$1 = decodeURIComponent;
var encode$1 = encodeURIComponent;
var pairSplitRegExp = /; */;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$2(str, options2) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options2 || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode$1;
  for (var i3 = 0; i3 < pairs.length; i3++) {
    var pair = pairs[i3];
    var eq_idx = pair.indexOf("=");
    if (eq_idx < 0) {
      continue;
    }
    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();
    if (val[0] == '"') {
      val = val.slice(1, -1);
    }
    if (obj[key] == void 0) {
      obj[key] = tryDecode(val, dec);
    }
  }
  return obj;
}
function serialize(name, val, options2) {
  var opt = options2 || {};
  var enc = opt.encode || encode$1;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (opt.maxAge != null) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e2) {
    return str;
  }
}
/*! js-cookie v3.0.1 | MIT */
function assign(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function init(converter, defaultAttributes) {
  function set2(key, value, attributes) {
    {
      return;
    }
  }
  function get2(key) {
    {
      return;
    }
  }
  return Object.create({
    set: set2,
    get: get2,
    remove: function(key, attributes) {
      set2(key, "", assign({}, attributes, {
        expires: -1
      }));
    },
    withAttributes: function(attributes) {
      return init(this.converter, assign({}, this.attributes, attributes));
    },
    withConverter: function(converter2) {
      return init(assign({}, this.converter, converter2), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(defaultAttributes) },
    converter: { value: Object.freeze(converter) }
  });
}
init(defaultConverter, { path: "/" });
function formatMessage(text) {
  return `[nuxt-i18n] ${text}`;
}
function parseAcceptLanguage(input) {
  return input.split(",").map((tag) => tag.split(";")[0]);
}
function matchBrowserLocale(appLocales, browserLocales) {
  const matchedLocales = [];
  const normalizedAppLocales = [];
  for (const appLocale of appLocales) {
    const { code } = appLocale;
    const iso = appLocale.iso || code;
    normalizedAppLocales.push({ code, iso });
  }
  for (const [index2, browserCode] of browserLocales.entries()) {
    const matchedLocale = normalizedAppLocales.find((appLocale) => appLocale.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index2 / browserLocales.length });
      break;
    }
  }
  for (const [index2, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = normalizedAppLocales.find((appLocale) => appLocale.iso.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index2 / browserLocales.length });
      break;
    }
  }
  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        return localeB.code.length - localeA.code.length;
      }
      return localeB.score - localeA.score;
    });
  }
  return matchedLocales.length ? matchedLocales[0].code : void 0;
}
function getLocaleDomain(locales, req) {
  let host;
  if (req) {
    const detectedHost = req.headers["x-forwarded-host"] || req.headers.host;
    host = Array.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }
  if (host) {
    const matchingLocale = locales.find((l2) => l2.domain === host);
    if (matchingLocale) {
      return matchingLocale.code;
    }
  }
  return "";
}
function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join("|")})(?:/|$)`, "i");
}
function createLocaleFromRouteGetter(localeCodes, { routesNameSeparator, defaultLocaleRouteNameSuffix }) {
  const localesPattern = `(${localeCodes.join("|")})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const regexpPath = getLocalesRegex(localeCodes);
  const getLocaleFromRoute = (route) => {
    if (route.name) {
      const matches = route.name.match(regexpName);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      const matches = route.path.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return "";
  };
  return getLocaleFromRoute;
}
function getLocaleCookie(req, { useCookie, cookieKey, localeCodes }) {
  if (useCookie) {
    let localeCode;
    if (req && typeof req.headers.cookie !== "undefined") {
      const cookies = req.headers && req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }
    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}
function setLocaleCookie(locale, res, { useCookie, cookieDomain, cookieKey, cookieSecure, cookieCrossOrigin }) {
  if (!useCookie) {
    return;
  }
  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: cookieCrossOrigin ? "none" : "lax",
    secure: cookieCrossOrigin || cookieSecure
  };
  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }
  if (res) {
    let headers = res.getHeader("Set-Cookie") || [];
    if (!Array.isArray(headers)) {
      headers = [String(headers)];
    }
    const redirectCookie = cookie.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader("Set-Cookie", headers);
  }
}
var nuxt_plugin_pluginutils_769495f8 = () => {
};
const i18nMiddleware = async (context) => {
  const { app, isHMR } = context;
  if (isHMR) {
    return;
  }
  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);
  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : void 0;
    context.redirect(status, redirectPath, query);
  }
};
middleware.nuxti18n = i18nMiddleware;
async function loadLanguageAsync(context, locale) {
  const { app } = context;
  const { i18n } = app;
  if (!i18n.loadedLanguages) {
    i18n.loadedLanguages = [];
  }
  if (!i18n.loadedLanguages.includes(locale)) {
    const localeObject = options.normalizedLocales.find((l2) => l2.code === locale);
    if (localeObject) {
      const { file } = localeObject;
      if (file) {
        let messages;
        if (!messages) {
          try {
            const getter = await localeMessages[file]().then((m2) => m2.default || m2);
            messages = typeof getter === "function" ? await Promise.resolve(getter(context, locale)) : getter;
          } catch (error2) {
            console.error(formatMessage(`Failed loading async locale export: ${error2.message}`));
          }
        }
        if (messages) {
          i18n.setLocaleMessage(locale, messages);
          i18n.loadedLanguages.push(locale);
        }
      } else {
        console.warn(formatMessage(`Could not find lang file for locale ${locale}`));
      }
    } else {
      console.warn(formatMessage(`Attempted to load messages for non-existant locale code "${locale}"`));
    }
  }
}
function resolveBaseUrl(baseUrl, context, localeCode, { differentDomains, normalizedLocales }) {
  if (typeof baseUrl === "function") {
    return baseUrl(context);
  }
  if (differentDomains && localeCode) {
    const domain = getDomainFromLocale(localeCode, context.req, { normalizedLocales });
    if (domain) {
      return domain;
    }
  }
  return baseUrl;
}
function getDomainFromLocale(localeCode, req, { normalizedLocales }) {
  const lang = normalizedLocales.find((locale) => locale.code === localeCode);
  if (lang && lang.domain) {
    if (hasProtocol$1(lang.domain)) {
      return lang.domain;
    }
    let protocol;
    {
      protocol = req && isHTTPS(req) ? "https" : "http";
    }
    return `${protocol}://${lang.domain}`;
  }
  console.warn(formatMessage(`Could not find domain name for locale ${localeCode}`));
}
function registerStore(store, vuex, localeCodes) {
  const storeModule = {
    namespaced: true,
    state: () => __spreadValues(__spreadValues(__spreadValues({}, vuex.syncLocale ? { locale: "" } : {}), vuex.syncMessages ? { messages: {} } : {}), vuex.syncRouteParams ? { routeParams: {} } : {}),
    actions: __spreadValues(__spreadValues(__spreadValues({}, vuex.syncLocale ? {
      setLocale({ commit }, locale) {
        commit("setLocale", locale);
      }
    } : {}), vuex.syncMessages ? {
      setMessages({ commit }, messages) {
        commit("setMessages", messages);
      }
    } : {}), vuex.syncRouteParams ? {
      setRouteParams({ commit }, params) {
        {
          validateRouteParams(params, localeCodes);
        }
        commit("setRouteParams", params);
      }
    } : {}),
    mutations: __spreadValues(__spreadValues(__spreadValues({}, vuex.syncLocale ? {
      setLocale(state, locale) {
        state.locale = locale;
      }
    } : {}), vuex.syncMessages ? {
      setMessages(state, messages) {
        state.messages = messages;
      }
    } : {}), vuex.syncRouteParams ? {
      setRouteParams(state, params) {
        state.routeParams = params;
      }
    } : {}),
    getters: __spreadValues({}, vuex.syncRouteParams ? {
      localeRouteParams: ({ routeParams }) => {
        const paramsGetter = (locale) => routeParams && routeParams[locale] || {};
        return paramsGetter;
      }
    } : {})
  };
  store.registerModule(vuex.moduleName, storeModule, { preserveState: !!store.state[vuex.moduleName] });
}
async function syncVuex(store, locale = null, messages = null, vuex) {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + "/setLocale", locale);
    }
    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + "/setMessages", messages);
    }
  }
}
function validateRouteParams(routeParams, localeCodes) {
  if (!isObject$1(routeParams)) {
    console.warn(formatMessage("Route params should be an object"));
    return;
  }
  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      console.warn(formatMessage(`Trying to set route params for key ${key} which is not a valid locale`));
    } else if (!isObject$1(value)) {
      console.warn(formatMessage(`Trying to set route params for locale ${key} with a non-object value`));
    }
  }
}
function isObject$1(value) {
  return value && !Array.isArray(value) && typeof value === "object";
}
function localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute ? localizedRoute.route.fullPath : "";
}
function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.route : void 0;
}
function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.location : void 0;
}
function resolveRoute(route, locale) {
  if (!route) {
    return;
  }
  const { i18n } = this;
  locale = locale || i18n.locale;
  if (!locale) {
    return;
  }
  if (typeof route === "string") {
    if (route[0] === "/") {
      route = { path: route };
    } else {
      route = { name: route };
    }
  }
  let localizedRoute = Object.assign({}, route);
  if (localizedRoute.path && !localizedRoute.name) {
    const resolvedRoute2 = this.router.resolve(localizedRoute).route;
    const resolvedRouteName = this.getRouteBaseName(resolvedRoute2);
    if (resolvedRouteName) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, locale),
        params: resolvedRoute2.params,
        query: resolvedRoute2.query,
        hash: resolvedRoute2.hash
      };
    } else {
      const isDefaultLocale = locale === options.defaultLocale;
      const isPrefixed = !(isDefaultLocale && [Constants.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Constants.STRATEGIES.PREFIX_AND_DEFAULT].includes(options.strategy)) && !(options.strategy === Constants.STRATEGIES.NO_PREFIX) && !i18n.differentDomains;
      if (isPrefixed) {
        localizedRoute.path = `/${locale}${localizedRoute.path}`;
      }
      localizedRoute.path = withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = this.getRouteBaseName();
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const { params } = localizedRoute;
    if (params && params["0"] === void 0 && params.pathMatch) {
      params["0"] = params.pathMatch;
    }
  }
  const resolvedRoute = this.router.resolve(localizedRoute);
  if (resolvedRoute.route.name) {
    return resolvedRoute;
  }
  return this.router.resolve(route);
}
function switchLocalePath(locale) {
  const name = this.getRouteBaseName();
  if (!name) {
    return "";
  }
  const { i18n, route, store } = this;
  const _a = route, { params } = _a, routeCopy = __objRest(_a, ["params"]);
  let langSwitchParams = {};
  if (options.vuex && options.vuex.syncRouteParams && store) {
    langSwitchParams = store.getters[`${options.vuex.moduleName}/localeRouteParams`](locale);
  }
  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: __spreadProps(__spreadValues(__spreadValues({}, params), langSwitchParams), {
      0: params.pathMatch
    })
  });
  let path = this.localePath(baseRoute, locale);
  if (i18n.differentDomains) {
    const getDomainOptions = {
      differentDomains: i18n.differentDomains,
      normalizedLocales: options.normalizedLocales
    };
    const domain = getDomainFromLocale(locale, this.req, getDomainOptions);
    if (domain) {
      path = domain + path;
    }
  }
  return path;
}
function getRouteBaseName(givenRoute) {
  const route = givenRoute !== void 0 ? givenRoute : this.route;
  if (!route || !route.name) {
    return;
  }
  return route.name.split(options.routesNameSeparator)[0];
}
function getLocaleRouteName(routeName, locale) {
  let name = routeName + (options.strategy === Constants.STRATEGIES.NO_PREFIX ? "" : options.routesNameSeparator + locale);
  if (locale === options.defaultLocale && options.strategy === Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
    name += options.routesNameSeparator + options.defaultLocaleRouteNameSuffix;
  }
  return name;
}
const VueInstanceProxy = function(targetFunction) {
  return function() {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      req: this.$ssrContext.req,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
const NuxtContextProxy = function(context, targetFunction) {
  return function() {
    const { app, req, route, store } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      localeLocation: app.localeLocation,
      localeRoute: app.localeRoute,
      req,
      route,
      router: app.router,
      store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
const plugin = {
  install(Vue2) {
    Vue2.mixin({
      methods: {
        localePath: VueInstanceProxy(localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        localeLocation: VueInstanceProxy(localeLocation),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }
};
var nuxt_plugin_pluginrouting_4c70f57a = (context) => {
  Vue__default["default"].use(plugin);
  const { app, store } = context;
  app.localePath = context.localePath = NuxtContextProxy(context, localePath);
  app.localeRoute = context.localeRoute = NuxtContextProxy(context, localeRoute);
  app.localeLocation = context.localeLocation = NuxtContextProxy(context, localeLocation);
  app.switchLocalePath = context.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = context.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);
  if (store) {
    store.localePath = app.localePath;
    store.localeRoute = app.localeRoute;
    store.localeLocation = app.localeLocation;
    store.switchLocalePath = app.switchLocalePath;
    store.getRouteBaseName = app.getRouteBaseName;
  }
};
/*!
 * vue-i18n v8.26.5 
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
var numberFormatKeys = [
  "compactDisplay",
  "currency",
  "currencyDisplay",
  "currencySign",
  "localeMatcher",
  "notation",
  "numberingSystem",
  "signDisplay",
  "style",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits"
];
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn("[vue-i18n] " + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
function error(msg, err) {
  if (typeof console !== "undefined") {
    console.error("[vue-i18n] " + msg);
    if (err) {
      console.error(err.stack);
    }
  }
}
var isArray = Array.isArray;
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
function isBoolean(val) {
  return typeof val === "boolean";
}
function isString(val) {
  return typeof val === "string";
}
var toString = Object.prototype.toString;
var OBJECT_STRING = "[object Object]";
function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}
function isNull(val) {
  return val === null || val === void 0;
}
function isFunction(val) {
  return typeof val === "function";
}
function parseArgs() {
  var args = [], len = arguments.length;
  while (len--)
    args[len] = arguments[len];
  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === "string") {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === "string") {
      locale = args[0];
    }
    if (isObject(args[1]) || isArray(args[1])) {
      params = args[1];
    }
  }
  return { locale, params };
}
function looseClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function remove(arr, item) {
  if (arr.delete(item)) {
    return arr;
  }
}
function arrayFrom(arr) {
  var ret = [];
  arr.forEach(function(a2) {
    return ret.push(a2);
  });
  return ret;
}
function includes(arr, item) {
  return !!~arr.indexOf(item);
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function merge(target) {
  var arguments$1 = arguments;
  var output = Object(target);
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments$1[i3];
    if (source !== void 0 && source !== null) {
      var key = void 0;
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output;
}
function looseEqual(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  var isObjectA = isObject(a2);
  var isObjectB = isObject(b2);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArray(a2);
      var isArrayB = isArray(b2);
      if (isArrayA && isArrayB) {
        return a2.length === b2.length && a2.every(function(e2, i3) {
          return looseEqual(e2, b2[i3]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a2);
        var keysB = Object.keys(b2);
        return keysA.length === keysB.length && keysA.every(function(key) {
          return looseEqual(a2[key], b2[key]);
        });
      } else {
        return false;
      }
    } catch (e2) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a2) === String(b2);
  } else {
    return false;
  }
}
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function escapeParams(params) {
  if (params != null) {
    Object.keys(params).forEach(function(key) {
      if (typeof params[key] == "string") {
        params[key] = escapeHtml(params[key]);
      }
    });
  }
  return params;
}
function extend(Vue2) {
  if (!Vue2.prototype.hasOwnProperty("$i18n")) {
    Object.defineProperty(Vue2.prototype, "$i18n", {
      get: function get2() {
        return this._i18n;
      }
    });
  }
  Vue2.prototype.$t = function(key) {
    var values = [], len = arguments.length - 1;
    while (len-- > 0)
      values[len] = arguments[len + 1];
    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [key, i18n.locale, i18n._getMessages(), this].concat(values));
  };
  Vue2.prototype.$tc = function(key, choice) {
    var values = [], len = arguments.length - 2;
    while (len-- > 0)
      values[len] = arguments[len + 2];
    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [key, i18n.locale, i18n._getMessages(), this, choice].concat(values));
  };
  Vue2.prototype.$te = function(key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
  };
  Vue2.prototype.$d = function(value) {
    var ref;
    var args = [], len = arguments.length - 1;
    while (len-- > 0)
      args[len] = arguments[len + 1];
    return (ref = this.$i18n).d.apply(ref, [value].concat(args));
  };
  Vue2.prototype.$n = function(value) {
    var ref;
    var args = [], len = arguments.length - 1;
    while (len-- > 0)
      args[len] = arguments[len + 1];
    return (ref = this.$i18n).n.apply(ref, [value].concat(args));
  };
}
function defineMixin$1(bridge) {
  if (bridge === void 0)
    bridge = false;
  function mounted() {
    if (this !== this.$root && this.$options.__INTLIFY_META__ && this.$el) {
      this.$el.setAttribute("data-intlify", this.$options.__INTLIFY_META__);
    }
  }
  return bridge ? { mounted } : {
    beforeCreate: function beforeCreate() {
      var options2 = this.$options;
      options2.i18n = options2.i18n || (options2.__i18nBridge || options2.__i18n ? {} : null);
      if (options2.i18n) {
        if (options2.i18n instanceof VueI18n) {
          if (options2.__i18nBridge || options2.__i18n) {
            try {
              var localeMessages2 = options2.i18n && options2.i18n.messages ? options2.i18n.messages : {};
              var _i18n = options2.__i18nBridge || options2.__i18n;
              _i18n.forEach(function(resource) {
                localeMessages2 = merge(localeMessages2, JSON.parse(resource));
              });
              Object.keys(localeMessages2).forEach(function(locale) {
                options2.i18n.mergeLocaleMessage(locale, localeMessages2[locale]);
              });
            } catch (e2) {
              {
                error("Cannot parse locale messages via custom blocks.", e2);
              }
            }
          }
          this._i18n = options2.i18n;
          this._i18nWatcher = this._i18n.watchI18nData();
        } else if (isPlainObject(options2.i18n)) {
          var rootI18n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n ? this.$root.$i18n : null;
          if (rootI18n) {
            options2.i18n.root = this.$root;
            options2.i18n.formatter = rootI18n.formatter;
            options2.i18n.fallbackLocale = rootI18n.fallbackLocale;
            options2.i18n.formatFallbackMessages = rootI18n.formatFallbackMessages;
            options2.i18n.silentTranslationWarn = rootI18n.silentTranslationWarn;
            options2.i18n.silentFallbackWarn = rootI18n.silentFallbackWarn;
            options2.i18n.pluralizationRules = rootI18n.pluralizationRules;
            options2.i18n.preserveDirectiveContent = rootI18n.preserveDirectiveContent;
          }
          if (options2.__i18nBridge || options2.__i18n) {
            try {
              var localeMessages$1 = options2.i18n && options2.i18n.messages ? options2.i18n.messages : {};
              var _i18n$1 = options2.__i18nBridge || options2.__i18n;
              _i18n$1.forEach(function(resource) {
                localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
              });
              options2.i18n.messages = localeMessages$1;
            } catch (e2) {
              {
                warn("Cannot parse locale messages via custom blocks.", e2);
              }
            }
          }
          var ref = options2.i18n;
          var sharedMessages = ref.sharedMessages;
          if (sharedMessages && isPlainObject(sharedMessages)) {
            options2.i18n.messages = merge(options2.i18n.messages, sharedMessages);
          }
          this._i18n = new VueI18n(options2.i18n);
          this._i18nWatcher = this._i18n.watchI18nData();
          if (options2.i18n.sync === void 0 || !!options2.i18n.sync) {
            this._localeWatcher = this.$i18n.watchLocale();
          }
          if (rootI18n) {
            rootI18n.onComponentInstanceCreated(this._i18n);
          }
        } else {
          {
            warn("Cannot be interpreted 'i18n' option.");
          }
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        this._i18n = this.$root.$i18n;
      } else if (options2.parent && options2.parent.$i18n && options2.parent.$i18n instanceof VueI18n) {
        this._i18n = options2.parent.$i18n;
      }
    },
    beforeMount: function beforeMount() {
      var options2 = this.$options;
      options2.i18n = options2.i18n || (options2.__i18nBridge || options2.__i18n ? {} : null);
      if (options2.i18n) {
        if (options2.i18n instanceof VueI18n) {
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else if (isPlainObject(options2.i18n)) {
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else {
          {
            warn("Cannot be interpreted 'i18n' option.");
          }
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (options2.parent && options2.parent.$i18n && options2.parent.$i18n instanceof VueI18n) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      }
    },
    mounted,
    beforeDestroy: function beforeDestroy() {
      if (!this._i18n) {
        return;
      }
      var self2 = this;
      this.$nextTick(function() {
        if (self2._subscribing) {
          self2._i18n.unsubscribeDataChanging(self2);
          delete self2._subscribing;
        }
        if (self2._i18nWatcher) {
          self2._i18nWatcher();
          self2._i18n.destroyVM();
          delete self2._i18nWatcher;
        }
        if (self2._localeWatcher) {
          self2._localeWatcher();
          delete self2._localeWatcher;
        }
      });
    }
  };
}
var interpolationComponent = {
  name: "i18n",
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: "span"
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render2(h2, ref) {
    var data2 = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;
    var $i18n = parent.$i18n;
    if (!$i18n) {
      {
        warn("Cannot find VueI18n instance!");
      }
      return;
    }
    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(path, locale, onlyHasDefaultPlace(params) || places ? useLegacyPlaces(params.default, places) : params);
    var tag = !!props.tag && props.tag !== true || props.tag === false ? props.tag : "span";
    return tag ? h2(tag, data2, children) : children;
  }
};
function onlyHasDefaultPlace(params) {
  var prop;
  for (prop in params) {
    if (prop !== "default") {
      return false;
    }
  }
  return Boolean(prop);
}
function useLegacyPlaces(children, places) {
  var params = places ? createParamsFromPlaces(places) : {};
  if (!children) {
    return params;
  }
  children = children.filter(function(child) {
    return child.tag || child.text.trim() !== "";
  });
  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if (everyPlace) {
    warn("`place` attribute is deprecated in next major version. Please switch to Vue slots.");
  }
  return children.reduce(everyPlace ? assignChildPlace : assignChildIndex, params);
}
function createParamsFromPlaces(places) {
  {
    warn("`places` prop is deprecated in next major version. Please switch to Vue slots.");
  }
  return Array.isArray(places) ? places.reduce(assignChildIndex, {}) : Object.assign({}, places);
}
function assignChildPlace(params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params;
}
function assignChildIndex(params, child, index2) {
  params[index2] = child;
  return params;
}
function vnodeHasPlaceAttribute(vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place);
}
var numberComponent = {
  name: "i18n-n",
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: "span"
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render3(h2, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data2 = ref.data;
    var i18n = parent.$i18n;
    if (!i18n) {
      {
        warn("Cannot find VueI18n instance!");
      }
      return null;
    }
    var key = null;
    var options2 = null;
    if (isString(props.format)) {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }
      options2 = Object.keys(props.format).reduce(function(acc, prop) {
        var obj;
        if (includes(numberFormatKeys, prop)) {
          return Object.assign({}, acc, (obj = {}, obj[prop] = props.format[prop], obj));
        }
        return acc;
      }, null);
    }
    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options2);
    var values = parts.map(function(part, index2) {
      var obj;
      var slot = data2.scopedSlots && data2.scopedSlots[part.type];
      return slot ? slot((obj = {}, obj[part.type] = part.value, obj.index = index2, obj.parts = parts, obj)) : part.value;
    });
    var tag = !!props.tag && props.tag !== true || props.tag === false ? props.tag : "span";
    return tag ? h2(tag, {
      attrs: data2.attrs,
      "class": data2["class"],
      staticClass: data2.staticClass
    }, values) : values;
  }
};
function bind(el, binding, vnode) {
  if (!assert(el, vnode)) {
    return;
  }
  t$1(el, binding, vnode);
}
function update(el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) {
    return;
  }
  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) && (looseEqual(binding.value, binding.oldValue) && looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) {
    return;
  }
  t$1(el, binding, vnode);
}
function unbind(el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn("Vue instance does not exists in VNode context");
    return;
  }
  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = "";
  }
  el._vt = void 0;
  delete el["_vt"];
  el._locale = void 0;
  delete el["_locale"];
  el._localeMessage = void 0;
  delete el["_localeMessage"];
}
function assert(el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn("Vue instance does not exists in VNode context");
    return false;
  }
  if (!vm.$i18n) {
    warn("VueI18n instance does not exists in Vue instance");
    return false;
  }
  return true;
}
function localeEqual(el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale;
}
function t$1(el, binding, vnode) {
  var ref$1, ref$2;
  var value = binding.value;
  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn("value type not supported");
    return;
  }
  if (!path) {
    warn("`path` is required in v-t directive");
    return;
  }
  var vm = vnode.context;
  if (choice != null) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [path, choice].concat(makeParams(locale, args)));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [path].concat(makeParams(locale, args)));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}
function parseValue(value) {
  var path;
  var locale;
  var args;
  var choice;
  if (isString(value)) {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }
  return { path, locale, args, choice };
}
function makeParams(locale, args) {
  var params = [];
  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }
  return params;
}
var Vue;
function install(_Vue, options2) {
  if (options2 === void 0)
    options2 = { bridge: false };
  if (install.installed && _Vue === Vue) {
    warn("already installed.");
    return;
  }
  install.installed = true;
  Vue = _Vue;
  var version = Vue.version && Number(Vue.version.split(".")[0]) || -1;
  if (version < 2) {
    warn("vue-i18n (" + install.version + ") need to use Vue 2.0 or later (Vue: " + Vue.version + ").");
    return;
  }
  extend(Vue);
  Vue.mixin(defineMixin$1(options2.bridge));
  Vue.directive("t", { bind, update, unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function(parentVal, childVal) {
    return childVal === void 0 ? parentVal : childVal;
  };
}
var BaseFormatter = function BaseFormatter2() {
  this._caches = Object.create(null);
};
BaseFormatter.prototype.interpolate = function interpolate(message, values) {
  if (!values) {
    return [message];
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values);
};
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format) {
  var tokens = [];
  var position = 0;
  var text = "";
  while (position < format.length) {
    var char = format[position++];
    if (char === "{") {
      if (text) {
        tokens.push({ type: "text", value: text });
      }
      text = "";
      var sub = "";
      char = format[position++];
      while (char !== void 0 && char !== "}") {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === "}";
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
      tokens.push({ value: sub, type });
    } else if (char === "%") {
      if (format[position] !== "{") {
        text += char;
      }
    } else {
      text += char;
    }
  }
  text && tokens.push({ type: "text", value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index2 = 0;
  var mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
  if (mode === "unknown") {
    return compiled;
  }
  while (index2 < tokens.length) {
    var token = tokens[index2];
    switch (token.type) {
      case "text":
        compiled.push(token.value);
        break;
      case "list":
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case "named":
        if (mode === "named") {
          compiled.push(values[token.value]);
        } else {
          {
            warn("Type of token '" + token.type + "' and format of value '" + mode + "' don't match!");
          }
        }
        break;
      case "unknown":
        {
          warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index2++;
  }
  return compiled;
}
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;
var pathStateMachine = [];
pathStateMachine[BEFORE_PATH] = {
  "ws": [BEFORE_PATH],
  "ident": [IN_IDENT, APPEND],
  "[": [IN_SUB_PATH],
  "eof": [AFTER_PATH]
};
pathStateMachine[IN_PATH] = {
  "ws": [IN_PATH],
  ".": [BEFORE_IDENT],
  "[": [IN_SUB_PATH],
  "eof": [AFTER_PATH]
};
pathStateMachine[BEFORE_IDENT] = {
  "ws": [BEFORE_IDENT],
  "ident": [IN_IDENT, APPEND],
  "0": [IN_IDENT, APPEND],
  "number": [IN_IDENT, APPEND]
};
pathStateMachine[IN_IDENT] = {
  "ident": [IN_IDENT, APPEND],
  "0": [IN_IDENT, APPEND],
  "number": [IN_IDENT, APPEND],
  "ws": [IN_PATH, PUSH],
  ".": [BEFORE_IDENT, PUSH],
  "[": [IN_SUB_PATH, PUSH],
  "eof": [AFTER_PATH, PUSH]
};
pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  "[": [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  "]": [IN_PATH, PUSH_SUB_PATH],
  "eof": ERROR,
  "else": [IN_SUB_PATH, APPEND]
};
pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  "eof": ERROR,
  "else": [IN_SINGLE_QUOTE, APPEND]
};
pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  "eof": ERROR,
  "else": [IN_DOUBLE_QUOTE, APPEND]
};
var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  var a2 = str.charCodeAt(0);
  var b2 = str.charCodeAt(str.length - 1);
  return a2 === b2 && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "eof";
  }
  var code = ch.charCodeAt(0);
  switch (code) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "ident";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "ws";
  }
  return "ident";
}
function formatSubPath(path) {
  var trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse$1(path) {
  var keys2 = [];
  var index2 = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c2;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];
  actions[PUSH] = function() {
    if (key !== void 0) {
      keys2.push(key);
      key = void 0;
    }
  };
  actions[APPEND] = function() {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[INC_SUB_PATH_DEPTH] = function() {
    actions[APPEND]();
    subPathDepth++;
  };
  actions[PUSH_SUB_PATH] = function() {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };
  function maybeUnescapeQuote() {
    var nextChar = path[index2 + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index2++;
      newChar = "\\" + nextChar;
      actions[APPEND]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c2 = path[index2];
    if (c2 === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c2);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["else"] || ERROR;
    if (transition === ERROR) {
      return;
    }
    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === void 0 ? c2 : newChar;
      if (action() === false) {
        return;
      }
    }
    if (mode === AFTER_PATH) {
      return keys2;
    }
  }
}
var I18nPath = function I18nPath2() {
  this._cache = Object.create(null);
};
I18nPath.prototype.parsePath = function parsePath2(path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || [];
};
I18nPath.prototype.getPathValue = function getPathValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null;
  } else {
    var length = paths.length;
    var last = obj;
    var i3 = 0;
    while (i3 < length) {
      var value = last[paths[i3]];
      if (value === void 0 || value === null) {
        return null;
      }
      last = value;
      i3++;
    }
    return last;
  }
};
var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|./]+|\([\w\-_|./]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  "upper": function(str) {
    return str.toLocaleUpperCase();
  },
  "lower": function(str) {
    return str.toLocaleLowerCase();
  },
  "capitalize": function(str) {
    return "" + str.charAt(0).toLocaleUpperCase() + str.substr(1);
  }
};
var defaultFormatter = new BaseFormatter();
var VueI18n = function VueI18n2(options2) {
  var this$1$1 = this;
  if (options2 === void 0)
    options2 = {};
  if (!Vue && false) {
    install(window.Vue);
  }
  var locale = options2.locale || "en-US";
  var fallbackLocale = options2.fallbackLocale === false ? false : options2.fallbackLocale || "en-US";
  var messages = options2.messages || {};
  var dateTimeFormats = options2.dateTimeFormats || options2.datetimeFormats || {};
  var numberFormats = options2.numberFormats || {};
  this._vm = null;
  this._formatter = options2.formatter || defaultFormatter;
  this._modifiers = options2.modifiers || {};
  this._missing = options2.missing || null;
  this._root = options2.root || null;
  this._sync = options2.sync === void 0 ? true : !!options2.sync;
  this._fallbackRoot = options2.fallbackRoot === void 0 ? true : !!options2.fallbackRoot;
  this._formatFallbackMessages = options2.formatFallbackMessages === void 0 ? false : !!options2.formatFallbackMessages;
  this._silentTranslationWarn = options2.silentTranslationWarn === void 0 ? false : options2.silentTranslationWarn;
  this._silentFallbackWarn = options2.silentFallbackWarn === void 0 ? false : !!options2.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = new Set();
  this._componentInstanceCreatedListener = options2.componentInstanceCreatedListener || null;
  this._preserveDirectiveContent = options2.preserveDirectiveContent === void 0 ? false : !!options2.preserveDirectiveContent;
  this.pluralizationRules = options2.pluralizationRules || {};
  this._warnHtmlInMessage = options2.warnHtmlInMessage || "off";
  this._postTranslation = options2.postTranslation || null;
  this._escapeParameterHtml = options2.escapeParameterHtml || false;
  if ("__VUE_I18N_BRIDGE__" in options2) {
    this.__VUE_I18N_BRIDGE__ = options2.__VUE_I18N_BRIDGE__;
  }
  this.getChoiceIndex = function(choice, choicesLength) {
    var thisPrototype = Object.getPrototypeOf(this$1$1);
    if (thisPrototype && thisPrototype.getChoiceIndex) {
      var prototypeGetChoiceIndex = thisPrototype.getChoiceIndex;
      return prototypeGetChoiceIndex.call(this$1$1, choice, choicesLength);
    }
    var defaultImpl = function(_choice, _choicesLength) {
      _choice = Math.abs(_choice);
      if (_choicesLength === 2) {
        return _choice ? _choice > 1 ? 1 : 0 : 1;
      }
      return _choice ? Math.min(_choice, 2) : 0;
    };
    if (this$1$1.locale in this$1$1.pluralizationRules) {
      return this$1$1.pluralizationRules[this$1$1.locale].apply(this$1$1, [choice, choicesLength]);
    } else {
      return defaultImpl(choice, choicesLength);
    }
  };
  this._exist = function(message, key) {
    if (!message || !key) {
      return false;
    }
    if (!isNull(this$1$1._path.getPathValue(message, key))) {
      return true;
    }
    if (message[key]) {
      return true;
    }
    return false;
  };
  if (this._warnHtmlInMessage === "warn" || this._warnHtmlInMessage === "error") {
    Object.keys(messages).forEach(function(locale2) {
      this$1$1._checkLocaleMessage(locale2, this$1$1._warnHtmlInMessage, messages[locale2]);
    });
  }
  this._initVM({
    locale,
    fallbackLocale,
    messages,
    dateTimeFormats,
    numberFormats
  });
};
var prototypeAccessors = { vm: { configurable: true }, messages: { configurable: true }, dateTimeFormats: { configurable: true }, numberFormats: { configurable: true }, availableLocales: { configurable: true }, locale: { configurable: true }, fallbackLocale: { configurable: true }, formatFallbackMessages: { configurable: true }, missing: { configurable: true }, formatter: { configurable: true }, silentTranslationWarn: { configurable: true }, silentFallbackWarn: { configurable: true }, preserveDirectiveContent: { configurable: true }, warnHtmlInMessage: { configurable: true }, postTranslation: { configurable: true }, sync: { configurable: true } };
VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage(locale, level, message) {
  var paths = [];
  var fn2 = function(level2, locale2, message2, paths2) {
    if (isPlainObject(message2)) {
      Object.keys(message2).forEach(function(key) {
        var val = message2[key];
        if (isPlainObject(val)) {
          paths2.push(key);
          paths2.push(".");
          fn2(level2, locale2, val, paths2);
          paths2.pop();
          paths2.pop();
        } else {
          paths2.push(key);
          fn2(level2, locale2, val, paths2);
          paths2.pop();
        }
      });
    } else if (isArray(message2)) {
      message2.forEach(function(item, index2) {
        if (isPlainObject(item)) {
          paths2.push("[" + index2 + "]");
          paths2.push(".");
          fn2(level2, locale2, item, paths2);
          paths2.pop();
          paths2.pop();
        } else {
          paths2.push("[" + index2 + "]");
          fn2(level2, locale2, item, paths2);
          paths2.pop();
        }
      });
    } else if (isString(message2)) {
      var ret = htmlTagMatcher.test(message2);
      if (ret) {
        var msg = "Detected HTML in message '" + message2 + "' of keypath '" + paths2.join("") + "' at '" + locale2 + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level2 === "warn") {
          warn(msg);
        } else if (level2 === "error") {
          error(msg);
        }
      }
    }
  };
  fn2(level, locale, message, paths);
};
VueI18n.prototype._initVM = function _initVM(data2) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data2, __VUE18N__INSTANCE__: true });
  Vue.config.silent = silent;
};
VueI18n.prototype.destroyVM = function destroyVM() {
  this._vm.$destroy();
};
VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging(vm) {
  this._dataListeners.add(vm);
};
VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging(vm) {
  remove(this._dataListeners, vm);
};
VueI18n.prototype.watchI18nData = function watchI18nData() {
  var this$1$1 = this;
  return this._vm.$watch("$data", function() {
    var listeners = arrayFrom(this$1$1._dataListeners);
    var i3 = listeners.length;
    while (i3--) {
      Vue.nextTick(function() {
        listeners[i3] && listeners[i3].$forceUpdate();
      });
    }
  }, { deep: true });
};
VueI18n.prototype.watchLocale = function watchLocale() {
  if (!this._sync || !this._root) {
    return null;
  }
  var target = this._vm;
  return this._root.$i18n.vm.$watch("locale", function(val) {
    target.$set(target, "locale", val);
    target.$forceUpdate();
  }, { immediate: true });
};
VueI18n.prototype.onComponentInstanceCreated = function onComponentInstanceCreated(newI18n) {
  if (this._componentInstanceCreatedListener) {
    this._componentInstanceCreatedListener(newI18n, this);
  }
};
prototypeAccessors.vm.get = function() {
  return this._vm;
};
prototypeAccessors.messages.get = function() {
  return looseClone(this._getMessages());
};
prototypeAccessors.dateTimeFormats.get = function() {
  return looseClone(this._getDateTimeFormats());
};
prototypeAccessors.numberFormats.get = function() {
  return looseClone(this._getNumberFormats());
};
prototypeAccessors.availableLocales.get = function() {
  return Object.keys(this.messages).sort();
};
prototypeAccessors.locale.get = function() {
  return this._vm.locale;
};
prototypeAccessors.locale.set = function(locale) {
  this._vm.$set(this._vm, "locale", locale);
};
prototypeAccessors.fallbackLocale.get = function() {
  return this._vm.fallbackLocale;
};
prototypeAccessors.fallbackLocale.set = function(locale) {
  this._localeChainCache = {};
  this._vm.$set(this._vm, "fallbackLocale", locale);
};
prototypeAccessors.formatFallbackMessages.get = function() {
  return this._formatFallbackMessages;
};
prototypeAccessors.formatFallbackMessages.set = function(fallback) {
  this._formatFallbackMessages = fallback;
};
prototypeAccessors.missing.get = function() {
  return this._missing;
};
prototypeAccessors.missing.set = function(handler) {
  this._missing = handler;
};
prototypeAccessors.formatter.get = function() {
  return this._formatter;
};
prototypeAccessors.formatter.set = function(formatter) {
  this._formatter = formatter;
};
prototypeAccessors.silentTranslationWarn.get = function() {
  return this._silentTranslationWarn;
};
prototypeAccessors.silentTranslationWarn.set = function(silent) {
  this._silentTranslationWarn = silent;
};
prototypeAccessors.silentFallbackWarn.get = function() {
  return this._silentFallbackWarn;
};
prototypeAccessors.silentFallbackWarn.set = function(silent) {
  this._silentFallbackWarn = silent;
};
prototypeAccessors.preserveDirectiveContent.get = function() {
  return this._preserveDirectiveContent;
};
prototypeAccessors.preserveDirectiveContent.set = function(preserve) {
  this._preserveDirectiveContent = preserve;
};
prototypeAccessors.warnHtmlInMessage.get = function() {
  return this._warnHtmlInMessage;
};
prototypeAccessors.warnHtmlInMessage.set = function(level) {
  var this$1$1 = this;
  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === "warn" || level === "error")) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function(locale) {
      this$1$1._checkLocaleMessage(locale, this$1$1._warnHtmlInMessage, messages[locale]);
    });
  }
};
prototypeAccessors.postTranslation.get = function() {
  return this._postTranslation;
};
prototypeAccessors.postTranslation.set = function(handler) {
  this._postTranslation = handler;
};
prototypeAccessors.sync.get = function() {
  return this._sync;
};
prototypeAccessors.sync.set = function(val) {
  this._sync = val;
};
VueI18n.prototype._getMessages = function _getMessages() {
  return this._vm.messages;
};
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats() {
  return this._vm.dateTimeFormats;
};
VueI18n.prototype._getNumberFormats = function _getNumberFormats() {
  return this._vm.numberFormats;
};
VueI18n.prototype._warnDefault = function _warnDefault(locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) {
    return result;
  }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (isString(missingRet)) {
      return missingRet;
    }
  } else {
    if (!this._isSilentTranslationWarn(key)) {
      warn("Cannot translate the value of keypath '" + key + "'. Use the value of keypath as default.");
    }
  }
  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key);
  } else {
    return key;
  }
};
VueI18n.prototype._isFallbackRoot = function _isFallbackRoot(val) {
  return !val && !isNull(this._root) && this._fallbackRoot;
};
VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn(key) {
  return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(key) : this._silentFallbackWarn;
};
VueI18n.prototype._isSilentFallback = function _isSilentFallback(locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale);
};
VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn(key) {
  return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(key) : this._silentTranslationWarn;
};
VueI18n.prototype._interpolate = function _interpolate(locale, message, key, host, interpolateMode, values, visitedLinkStack) {
  if (!message) {
    return null;
  }
  var pathRet = this._path.getPathValue(message, key);
  if (isArray(pathRet) || isPlainObject(pathRet)) {
    return pathRet;
  }
  var ret;
  if (isNull(pathRet)) {
    if (isPlainObject(message)) {
      ret = message[key];
      if (!(isString(ret) || isFunction(ret))) {
        if (!this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn("Value of key '" + key + "' is not a string or function !");
        }
        return null;
      }
    } else {
      return null;
    }
  } else {
    if (isString(pathRet) || isFunction(pathRet)) {
      ret = pathRet;
    } else {
      if (!this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn("Value of key '" + key + "' is not a string or function!");
      }
      return null;
    }
  }
  if (isString(ret) && (ret.indexOf("@:") >= 0 || ret.indexOf("@.") >= 0)) {
    ret = this._link(locale, message, ret, host, "raw", values, visitedLinkStack);
  }
  return this._render(ret, interpolateMode, values, key);
};
VueI18n.prototype._link = function _link(locale, message, str, host, interpolateMode, values, visitedLinkStack) {
  var ret = str;
  var matches = ret.match(linkKeyMatcher);
  for (var idx in matches) {
    if (!matches.hasOwnProperty(idx)) {
      continue;
    }
    var link2 = matches[idx];
    var linkKeyPrefixMatches = link2.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
    var formatterName = linkKeyPrefixMatches[1];
    var linkPlaceholder = link2.replace(linkPrefix, "").replace(bracketsMatcher, "");
    if (includes(visitedLinkStack, linkPlaceholder)) {
      {
        warn('Circular reference found. "' + link2 + '" is already visited in the chain of ' + visitedLinkStack.reverse().join(" <- "));
      }
      return ret;
    }
    visitedLinkStack.push(linkPlaceholder);
    var translated = this._interpolate(locale, message, linkPlaceholder, host, interpolateMode === "raw" ? "string" : interpolateMode, interpolateMode === "raw" ? void 0 : values, visitedLinkStack);
    if (this._isFallbackRoot(translated)) {
      if (!this._isSilentTranslationWarn(linkPlaceholder)) {
        warn("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale.");
      }
      if (!this._root) {
        throw Error("unexpected error");
      }
      var root = this._root.$i18n;
      translated = root._translate(root._getMessages(), root.locale, root.fallbackLocale, linkPlaceholder, host, interpolateMode, values);
    }
    translated = this._warnDefault(locale, linkPlaceholder, translated, host, isArray(values) ? values : [values], interpolateMode);
    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }
    visitedLinkStack.pop();
    ret = !translated ? ret : ret.replace(link2, translated);
  }
  return ret;
};
VueI18n.prototype._createMessageContext = function _createMessageContext(values, formatter, path, interpolateMode) {
  var this$1$1 = this;
  var _list = isArray(values) ? values : [];
  var _named = isObject(values) ? values : {};
  var list = function(index2) {
    return _list[index2];
  };
  var named = function(key) {
    return _named[key];
  };
  var messages = this._getMessages();
  var locale = this.locale;
  return {
    list,
    named,
    values,
    formatter,
    path,
    messages,
    locale,
    linked: function(linkedKey) {
      return this$1$1._interpolate(locale, messages[locale] || {}, linkedKey, null, interpolateMode, void 0, [linkedKey]);
    }
  };
};
VueI18n.prototype._render = function _render(message, interpolateMode, values, path) {
  if (isFunction(message)) {
    return message(this._createMessageContext(values, this._formatter || defaultFormatter, path, interpolateMode));
  }
  var ret = this._formatter.interpolate(message, values, path);
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }
  return interpolateMode === "string" && !isString(ret) ? ret.join("") : ret;
};
VueI18n.prototype._appendItemToChain = function _appendItemToChain(chain, item, blocks) {
  var follow = false;
  if (!includes(chain, item)) {
    follow = true;
    if (item) {
      follow = item[item.length - 1] !== "!";
      item = item.replace(/!/g, "");
      chain.push(item);
      if (blocks && blocks[item]) {
        follow = blocks[item];
      }
    }
  }
  return follow;
};
VueI18n.prototype._appendLocaleToChain = function _appendLocaleToChain(chain, locale, blocks) {
  var follow;
  var tokens = locale.split("-");
  do {
    var item = tokens.join("-");
    follow = this._appendItemToChain(chain, item, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
};
VueI18n.prototype._appendBlockToChain = function _appendBlockToChain(chain, block, blocks) {
  var follow = true;
  for (var i3 = 0; i3 < block.length && isBoolean(follow); i3++) {
    var locale = block[i3];
    if (isString(locale)) {
      follow = this._appendLocaleToChain(chain, locale, blocks);
    }
  }
  return follow;
};
VueI18n.prototype._getLocaleChain = function _getLocaleChain(start, fallbackLocale) {
  if (start === "") {
    return [];
  }
  if (!this._localeChainCache) {
    this._localeChainCache = {};
  }
  var chain = this._localeChainCache[start];
  if (!chain) {
    if (!fallbackLocale) {
      fallbackLocale = this.fallbackLocale;
    }
    chain = [];
    var block = [start];
    while (isArray(block)) {
      block = this._appendBlockToChain(chain, block, fallbackLocale);
    }
    var defaults;
    if (isArray(fallbackLocale)) {
      defaults = fallbackLocale;
    } else if (isObject(fallbackLocale)) {
      if (fallbackLocale["default"]) {
        defaults = fallbackLocale["default"];
      } else {
        defaults = null;
      }
    } else {
      defaults = fallbackLocale;
    }
    if (isString(defaults)) {
      block = [defaults];
    } else {
      block = defaults;
    }
    if (block) {
      this._appendBlockToChain(chain, block, null);
    }
    this._localeChainCache[start] = chain;
  }
  return chain;
};
VueI18n.prototype._translate = function _translate(messages, locale, fallback, key, host, interpolateMode, args) {
  var chain = this._getLocaleChain(locale, fallback);
  var res;
  for (var i3 = 0; i3 < chain.length; i3++) {
    var step = chain[i3];
    res = this._interpolate(step, messages[step], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {
      if (step !== locale && true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn("Fall back to translate the keypath '" + key + "' with '" + step + "' locale.");
      }
      return res;
    }
  }
  return null;
};
VueI18n.prototype._t = function _t2(key, _locale, messages, host) {
  var ref;
  var values = [], len = arguments.length - 4;
  while (len-- > 0)
    values[len] = arguments[len + 4];
  if (!key) {
    return "";
  }
  var parsedArgs = parseArgs.apply(void 0, values);
  if (this._escapeParameterHtml) {
    parsedArgs.params = escapeParams(parsedArgs.params);
  }
  var locale = parsedArgs.locale || _locale;
  var ret = this._translate(messages, locale, this.fallbackLocale, key, host, "string", parsedArgs.params);
  if (this._isFallbackRoot(ret)) {
    if (!this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to translate the keypath '" + key + "' with root locale.");
    }
    if (!this._root) {
      throw Error("unexpected error");
    }
    return (ref = this._root).$t.apply(ref, [key].concat(values));
  } else {
    ret = this._warnDefault(locale, key, ret, host, values, "string");
    if (this._postTranslation && ret !== null && ret !== void 0) {
      ret = this._postTranslation(ret, key);
    }
    return ret;
  }
};
VueI18n.prototype.t = function t2(key) {
  var ref;
  var values = [], len = arguments.length - 1;
  while (len-- > 0)
    values[len] = arguments[len + 1];
  return (ref = this)._t.apply(ref, [key, this.locale, this._getMessages(), null].concat(values));
};
VueI18n.prototype._i = function _i(key, locale, messages, host, values) {
  var ret = this._translate(messages, locale, this.fallbackLocale, key, host, "raw", values);
  if (this._isFallbackRoot(ret)) {
    if (!this._isSilentTranslationWarn(key)) {
      warn("Fall back to interpolate the keypath '" + key + "' with root locale.");
    }
    if (!this._root) {
      throw Error("unexpected error");
    }
    return this._root.$i18n.i(key, locale, values);
  } else {
    return this._warnDefault(locale, key, ret, host, [values], "raw");
  }
};
VueI18n.prototype.i = function i2(key, locale, values) {
  if (!key) {
    return "";
  }
  if (!isString(locale)) {
    locale = this.locale;
  }
  return this._i(key, locale, this._getMessages(), null, values);
};
VueI18n.prototype._tc = function _tc(key, _locale, messages, host, choice) {
  var ref;
  var values = [], len = arguments.length - 5;
  while (len-- > 0)
    values[len] = arguments[len + 5];
  if (!key) {
    return "";
  }
  if (choice === void 0) {
    choice = 1;
  }
  var predefined = { "count": choice, "n": choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [key, _locale, messages, host].concat(values)), choice);
};
VueI18n.prototype.fetchChoice = function fetchChoice(message, choice) {
  if (!message || !isString(message)) {
    return null;
  }
  var choices = message.split("|");
  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) {
    return message;
  }
  return choices[choice].trim();
};
VueI18n.prototype.tc = function tc(key, choice) {
  var ref;
  var values = [], len = arguments.length - 2;
  while (len-- > 0)
    values[len] = arguments[len + 2];
  return (ref = this)._tc.apply(ref, [key, this.locale, this._getMessages(), null, choice].concat(values));
};
VueI18n.prototype._te = function _te(key, locale, messages) {
  var args = [], len = arguments.length - 3;
  while (len-- > 0)
    args[len] = arguments[len + 3];
  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key);
};
VueI18n.prototype.te = function te2(key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale);
};
VueI18n.prototype.getLocaleMessage = function getLocaleMessage(locale) {
  return looseClone(this._vm.messages[locale] || {});
};
VueI18n.prototype.setLocaleMessage = function setLocaleMessage(locale, message) {
  if (this._warnHtmlInMessage === "warn" || this._warnHtmlInMessage === "error") {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, message);
};
VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage(locale, message) {
  if (this._warnHtmlInMessage === "warn" || this._warnHtmlInMessage === "error") {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, merge(typeof this._vm.messages[locale] !== "undefined" && Object.keys(this._vm.messages[locale]).length ? Object.assign({}, this._vm.messages[locale]) : {}, message));
};
VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat(locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {});
};
VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat(locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
  this._clearDateTimeFormat(locale, format);
};
VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat(locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
  this._clearDateTimeFormat(locale, format);
};
VueI18n.prototype._clearDateTimeFormat = function _clearDateTimeFormat(locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;
    if (!this._dateTimeFormatters.hasOwnProperty(id)) {
      continue;
    }
    delete this._dateTimeFormatters[id];
  }
};
VueI18n.prototype._localizeDateTime = function _localizeDateTime(value, locale, fallback, dateTimeFormats, key) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];
  var chain = this._getLocaleChain(locale, fallback);
  for (var i3 = 0; i3 < chain.length; i3++) {
    var current = _locale;
    var step = chain[i3];
    formats = dateTimeFormats[step];
    _locale = step;
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn("Fall back to '" + step + "' datetime formats from '" + current + "' datetime formats.");
      }
    } else {
      break;
    }
  }
  if (isNull(formats) || isNull(formats[key])) {
    return null;
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value);
  }
};
VueI18n.prototype._d = function _d(value, locale, key) {
  if (!VueI18n.availabilities.dateTimeFormat) {
    warn("Cannot format a Date value due to not supported Intl.DateTimeFormat.");
    return "";
  }
  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  var ret = this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if (!this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to datetime localization of root: key '" + key + "'.");
    }
    if (!this._root) {
      throw Error("unexpected error");
    }
    return this._root.$i18n.d(value, key, locale);
  } else {
    return ret || "";
  }
};
VueI18n.prototype.d = function d2(value) {
  var args = [], len = arguments.length - 1;
  while (len-- > 0)
    args[len] = arguments[len + 1];
  var locale = this.locale;
  var key = null;
  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }
  return this._d(value, locale, key);
};
VueI18n.prototype.getNumberFormat = function getNumberFormat(locale) {
  return looseClone(this._vm.numberFormats[locale] || {});
};
VueI18n.prototype.setNumberFormat = function setNumberFormat(locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
  this._clearNumberFormat(locale, format);
};
VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat(locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
  this._clearNumberFormat(locale, format);
};
VueI18n.prototype._clearNumberFormat = function _clearNumberFormat(locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;
    if (!this._numberFormatters.hasOwnProperty(id)) {
      continue;
    }
    delete this._numberFormatters[id];
  }
};
VueI18n.prototype._getNumberFormatter = function _getNumberFormatter(value, locale, fallback, numberFormats, key, options2) {
  var _locale = locale;
  var formats = numberFormats[_locale];
  var chain = this._getLocaleChain(locale, fallback);
  for (var i3 = 0; i3 < chain.length; i3++) {
    var current = _locale;
    var step = chain[i3];
    formats = numberFormats[step];
    _locale = step;
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn("Fall back to '" + step + "' number formats from '" + current + "' number formats.");
      }
    } else {
      break;
    }
  }
  if (isNull(formats) || isNull(formats[key])) {
    return null;
  } else {
    var format = formats[key];
    var formatter;
    if (options2) {
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options2));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter;
  }
};
VueI18n.prototype._n = function _n2(value, locale, key, options2) {
  if (!VueI18n.availabilities.numberFormat) {
    {
      warn("Cannot format a Number value due to not supported Intl.NumberFormat.");
    }
    return "";
  }
  if (!key) {
    var nf = !options2 ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options2);
    return nf.format(value);
  }
  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options2);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if (!this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to number localization of root: key '" + key + "'.");
    }
    if (!this._root) {
      throw Error("unexpected error");
    }
    return this._root.$i18n.n(value, Object.assign({}, { key, locale }, options2));
  } else {
    return ret || "";
  }
};
VueI18n.prototype.n = function n2(value) {
  var args = [], len = arguments.length - 1;
  while (len-- > 0)
    args[len] = arguments[len + 1];
  var locale = this.locale;
  var key = null;
  var options2 = null;
  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
      options2 = Object.keys(args[0]).reduce(function(acc, key2) {
        var obj;
        if (includes(numberFormatKeys, key2)) {
          return Object.assign({}, acc, (obj = {}, obj[key2] = args[0][key2], obj));
        }
        return acc;
      }, null);
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }
  return this._n(value, locale, key, options2);
};
VueI18n.prototype._ntp = function _ntp(value, locale, key, options2) {
  if (!VueI18n.availabilities.numberFormat) {
    {
      warn("Cannot format to parts a Number value due to not supported Intl.NumberFormat.");
    }
    return [];
  }
  if (!key) {
    var nf = !options2 ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options2);
    return nf.formatToParts(value);
  }
  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options2);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if (!this._isSilentTranslationWarn(key)) {
      warn("Fall back to format number to parts of root: key '" + key + "' .");
    }
    if (!this._root) {
      throw Error("unexpected error");
    }
    return this._root.$i18n._ntp(value, locale, key, options2);
  } else {
    return ret || [];
  }
};
Object.defineProperties(VueI18n.prototype, prototypeAccessors);
var availabilities;
Object.defineProperty(VueI18n, "availabilities", {
  get: function get() {
    if (!availabilities) {
      var intlDefined = typeof Intl !== "undefined";
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
        numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
      };
    }
    return availabilities;
  }
});
VueI18n.install = install;
VueI18n.version = "8.26.5";
var VueI18n$1 = VueI18n;
function nuxtI18nHead({ addDirAttribute = true, addSeoAttributes = false } = {}) {
  if (!this.$i18n) {
    return {};
  }
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.localeProperties;
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || options.defaultDirection;
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  if (addSeoAttributes && (VueMeta__default["default"].hasMetaInfo ? VueMeta__default["default"].hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales && this.$options[Constants.COMPONENT_OPTIONS_KEY] !== false && !(this.$options[Constants.COMPONENT_OPTIONS_KEY] && this.$options[Constants.COMPONENT_OPTIONS_KEY].seo === false)) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso;
    }
    const locales = this.$i18n.locales;
    addHreflangLinks.bind(this)(locales, this.$i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
    addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales.bind(this)(locales, currentLocaleIso, metaObject.meta);
  }
  function addHreflangLinks(locales, baseUrl, link2) {
    if (options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return;
    }
    const localeMap = new Map();
    for (const locale of locales) {
      const localeIso = locale.iso;
      if (!localeIso) {
        console.warn(formatMessage("Locale ISO code is required to generate alternate link"));
        continue;
      }
      const [language, region] = localeIso.split("-");
      if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
        localeMap.set(language, locale);
      }
      localeMap.set(localeIso, locale);
    }
    for (const [iso, mapLocale] of localeMap.entries()) {
      const localePath2 = this.switchLocalePath(mapLocale.code);
      if (localePath2) {
        link2.push({
          hid: `i18n-alt-${iso}`,
          rel: "alternate",
          href: toAbsoluteUrl(localePath2, baseUrl),
          hreflang: iso
        });
      }
    }
    if (options.defaultLocale) {
      const localePath2 = this.switchLocalePath(options.defaultLocale);
      if (localePath2) {
        link2.push({
          hid: "i18n-xd",
          rel: "alternate",
          href: toAbsoluteUrl(localePath2, baseUrl),
          hreflang: "x-default"
        });
      }
    }
  }
  function addCanonicalLinks(baseUrl, link2) {
    const currentRoute = this.localeRoute(__spreadProps(__spreadValues({}, this.$route), {
      name: this.getRouteBaseName()
    }));
    const canonicalPath = currentRoute ? currentRoute.path : null;
    if (canonicalPath) {
      link2.push({
        hid: "i18n-can",
        rel: "canonical",
        href: toAbsoluteUrl(canonicalPath, baseUrl)
      });
    }
  }
  function addCurrentOgLocale(currentLocale2, currentLocaleIso2, meta2) {
    const hasCurrentLocaleAndIso = currentLocale2 && currentLocaleIso2;
    if (!hasCurrentLocaleAndIso) {
      return;
    }
    meta2.push({
      hid: "i18n-og",
      property: "og:locale",
      content: hypenToUnderscore(currentLocaleIso2)
    });
  }
  function addAlternateOgLocales(locales, currentLocaleIso2, meta2) {
    const localesWithoutCurrent = locales.filter((locale) => {
      const localeIso = locale.iso;
      return localeIso && localeIso !== currentLocaleIso2;
    });
    if (localesWithoutCurrent.length) {
      const alternateLocales = localesWithoutCurrent.map((locale) => ({
        hid: `i18n-og-alt-${locale.iso}`,
        property: "og:locale:alternate",
        content: hypenToUnderscore(locale.iso)
      }));
      meta2.push(...alternateLocales);
    }
  }
  function hypenToUnderscore(str) {
    return (str || "").replace(/-/g, "_");
  }
  function toAbsoluteUrl(urlOrPath, baseUrl) {
    if (urlOrPath.match(/^https?:\/\//)) {
      return urlOrPath;
    }
    return baseUrl + urlOrPath;
  }
  return metaObject;
}
function nuxtI18nSeo() {
  return nuxtI18nHead.call(this, { addDirAttribute: false, addSeoAttributes: true });
}
function set(obj, key, val) {
  if (typeof val.value === "object")
    val.value = klona(val.value);
  if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === "__proto__") {
    Object.defineProperty(obj, key, val);
  } else
    obj[key] = val.value;
}
function klona(x2) {
  if (typeof x2 !== "object")
    return x2;
  var i3 = 0, k2, list, tmp, str = Object.prototype.toString.call(x2);
  if (str === "[object Object]") {
    tmp = Object.create(x2.__proto__ || null);
  } else if (str === "[object Array]") {
    tmp = Array(x2.length);
  } else if (str === "[object Set]") {
    tmp = new Set();
    x2.forEach(function(val) {
      tmp.add(klona(val));
    });
  } else if (str === "[object Map]") {
    tmp = new Map();
    x2.forEach(function(val, key) {
      tmp.set(klona(key), klona(val));
    });
  } else if (str === "[object Date]") {
    tmp = new Date(+x2);
  } else if (str === "[object RegExp]") {
    tmp = new RegExp(x2.source, x2.flags);
  } else if (str === "[object DataView]") {
    tmp = new x2.constructor(klona(x2.buffer));
  } else if (str === "[object ArrayBuffer]") {
    tmp = x2.slice(0);
  } else if (str.slice(-6) === "Array]") {
    tmp = new x2.constructor(x2);
  }
  if (tmp) {
    for (list = Object.getOwnPropertySymbols(x2); i3 < list.length; i3++) {
      set(tmp, list[i3], Object.getOwnPropertyDescriptor(x2, list[i3]));
    }
    for (i3 = 0, list = Object.getOwnPropertyNames(x2); i3 < list.length; i3++) {
      if (Object.hasOwnProperty.call(tmp, k2 = list[i3]) && tmp[k2] === x2[k2])
        continue;
      set(tmp, k2, Object.getOwnPropertyDescriptor(x2, k2));
    }
  }
  return tmp || x2;
}
Vue__default["default"].use(VueI18n$1);
var nuxt_plugin_pluginmain_a05bb5e8 = async (context) => {
  const { app, route, store, req, res, redirect } = context;
  if (options.vuex && store) {
    registerStore(store, options.vuex, options.localeCodes);
  }
  const { lazy } = options;
  const injectInNuxtState = lazy && (lazy === true || lazy.skipNuxtState !== true);
  if (injectInNuxtState) {
    const devalue2 = (await Promise.resolve().then(function() {
      return devalue_esm;
    })).default;
    context.beforeNuxtRender(({ nuxtState }) => {
      const langs = {};
      const { fallbackLocale: fallbackLocale2, locale } = app.i18n;
      if (locale && locale !== fallbackLocale2) {
        const messages = app.i18n._getMessages()[locale];
        if (messages) {
          try {
            devalue2(messages);
            langs[locale] = messages;
          } catch {
          }
        }
      }
      nuxtState.__i18n = { langs };
    });
  }
  const {
    alwaysRedirect,
    fallbackLocale,
    onlyOnNoPrefix,
    onlyOnRoot,
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } = options.detectBrowserLanguage;
  const loadAndSetLocale = async (newLocale, { initialSetup = false } = {}) => {
    if (!newLocale) {
      return;
    }
    if (!initialSetup && app.i18n.differentDomains) {
      return;
    }
    const oldLocale = app.i18n.locale;
    if (newLocale === oldLocale) {
      return;
    }
    const localeOverride = app.i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initialSetup, context);
    if (localeOverride && app.i18n.localeCodes.includes(localeOverride)) {
      if (localeOverride === oldLocale) {
        return;
      }
      newLocale = localeOverride;
    }
    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }
    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    }
    if (options.langDir) {
      const i18nFallbackLocale = app.i18n.fallbackLocale;
      if (options.lazy) {
        if (i18nFallbackLocale) {
          let localesToLoadPromises = [];
          if (Array.isArray(i18nFallbackLocale)) {
            localesToLoadPromises = i18nFallbackLocale.map((fbLocale) => loadLanguageAsync(context, fbLocale));
          } else if (typeof i18nFallbackLocale === "object") {
            if (i18nFallbackLocale[newLocale]) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map((fbLocale) => loadLanguageAsync(context, fbLocale)));
            }
            if (i18nFallbackLocale.default) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map((fbLocale) => loadLanguageAsync(context, fbLocale)));
            }
          } else if (newLocale !== i18nFallbackLocale) {
            localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
          }
          await Promise.all(localesToLoadPromises);
        }
        await loadLanguageAsync(context, newLocale);
      } else {
        await Promise.all(options.localeCodes.map((locale) => loadLanguageAsync(context, locale)));
      }
    }
    app.i18n.locale = newLocale;
    const newLocaleProperties = options.normalizedLocales.find((l2) => l2.code === newLocale) || { code: newLocale };
    for (const key of Object.keys(app.i18n.localeProperties)) {
      app.i18n.localeProperties[key] = void 0;
    }
    for (const [key, value] of Object.entries(newLocaleProperties)) {
      Vue__default["default"].set(app.i18n.localeProperties, key, klona(value));
    }
    if (options.vuex) {
      await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), options.vuex);
    }
    const { route: route2 } = context;
    const redirectPath = getRedirectPathForLocale(route2, newLocale);
    if (initialSetup) {
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);
      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };
  const getLocaleFromRoute = createLocaleFromRouteGetter(options.localeCodes, {
    routesNameSeparator: options.routesNameSeparator,
    defaultLocaleRouteNameSuffix: options.defaultLocaleRouteNameSuffix
  });
  const getRedirectPathForLocale = (route2, locale) => {
    if (!locale || app.i18n.differentDomains || options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return "";
    }
    if (getLocaleFromRoute(route2) === locale) {
      if (!(onlyOnRoot || onlyOnNoPrefix) || locale !== options.defaultLocale || options.strategy !== Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
        return "";
      }
    }
    let redirectPath = app.switchLocalePath(locale);
    if (!redirectPath) {
      redirectPath = app.localePath(route2.fullPath, locale);
    }
    if (!redirectPath || redirectPath === route2.fullPath || redirectPath.startsWith("//")) {
      return "";
    }
    return redirectPath;
  };
  const onNavigate = async (route2) => {
    if (route2.path === "/" && options.rootRedirect) {
      let statusCode = 302;
      let path = options.rootRedirect;
      if (typeof options.rootRedirect !== "string") {
        statusCode = options.rootRedirect.statusCode;
        path = options.rootRedirect.path;
      }
      return [statusCode, `/${path}`, true];
    }
    const storedRedirect = app.i18n.__redirect;
    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }
    const resolveBaseUrlOptions2 = {
      differentDomains: options.differentDomains,
      normalizedLocales: options.normalizedLocales
    };
    app.i18n.__baseUrl = resolveBaseUrl(options.baseUrl, context, app.i18n.locale, resolveBaseUrlOptions2);
    const finalLocale2 = options.detectBrowserLanguage && doDetectBrowserLanguage(route2) || getLocaleFromRoute(route2) || app.i18n.locale || app.i18n.defaultLocale || "";
    if (options.skipSettingLocaleOnNavigate) {
      app.i18n.__pendingLocale = finalLocale2;
      app.i18n.__pendingLocalePromise = new Promise((resolve) => {
        app.i18n.__resolvePendingLocalePromise = resolve;
      });
    } else {
      await app.i18n.setLocale(finalLocale2);
    }
    return [null, null];
  };
  const finalizePendingLocaleChange = async () => {
    if (!app.i18n.__pendingLocale) {
      return;
    }
    await app.i18n.setLocale(app.i18n.__pendingLocale);
    app.i18n.__resolvePendingLocalePromise("");
    app.i18n.__pendingLocale = null;
  };
  const waitForPendingLocaleChange = async () => {
    if (app.i18n.__pendingLocale) {
      await app.i18n.__pendingLocalePromise;
    }
  };
  const getBrowserLocale = () => {
    if (req && typeof req.headers["accept-language"] !== "undefined") {
      return matchBrowserLocale(options.normalizedLocales, parseAcceptLanguage(req.headers["accept-language"]));
    } else {
      return void 0;
    }
  };
  const doDetectBrowserLanguage = (route2) => {
    if (options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      if (onlyOnRoot) {
        if (route2.path !== "/") {
          return "";
        }
      } else if (onlyOnNoPrefix) {
        if (!alwaysRedirect && route2.path.match(getLocalesRegex(options.localeCodes))) {
          return "";
        }
      }
    }
    let matchedLocale;
    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie()))
      ;
    else {
      matchedLocale = getBrowserLocale();
    }
    const finalLocale2 = matchedLocale || fallbackLocale;
    if (finalLocale2 && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale2 !== app.i18n.locale) {
        return finalLocale2;
      }
    }
    return "";
  };
  const extendVueI18nInstance = (i18n) => {
    i18n.locales = klona(options.locales);
    i18n.localeCodes = klona(options.localeCodes);
    i18n.localeProperties = Vue__default["default"].observable(klona(options.normalizedLocales.find((l2) => l2.code === i18n.locale) || { code: i18n.locale }));
    i18n.defaultLocale = options.defaultLocale;
    i18n.differentDomains = options.differentDomains;
    i18n.beforeLanguageSwitch = options.beforeLanguageSwitch;
    i18n.onBeforeLanguageSwitch = options.onBeforeLanguageSwitch;
    i18n.onLanguageSwitched = options.onLanguageSwitched;
    i18n.setLocaleCookie = (locale) => setLocaleCookie(locale, res, { useCookie, cookieDomain, cookieKey, cookieSecure, cookieCrossOrigin });
    i18n.getLocaleCookie = () => getLocaleCookie(req, { useCookie, cookieKey, localeCodes: options.localeCodes });
    i18n.setLocale = (locale) => loadAndSetLocale(locale);
    i18n.getBrowserLocale = () => getBrowserLocale();
    i18n.finalizePendingLocaleChange = finalizePendingLocaleChange;
    i18n.waitForPendingLocaleChange = waitForPendingLocaleChange;
    i18n.__baseUrl = app.i18n.__baseUrl;
    i18n.__pendingLocale = app.i18n.__pendingLocale;
    i18n.__pendingLocalePromise = app.i18n.__pendingLocalePromise;
    i18n.__resolvePendingLocalePromise = app.i18n.__resolvePendingLocalePromise;
  };
  const vueI18nOptions = typeof options.vueI18n === "function" ? await options.vueI18n(context) : klona(options.vueI18n);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance;
  app.i18n = context.i18n = new VueI18n$1(vueI18nOptions);
  app.i18n.locale = "";
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || "";
  extendVueI18nInstance(app.i18n);
  const resolveBaseUrlOptions = {
    differentDomains: options.differentDomains,
    normalizedLocales: options.normalizedLocales
  };
  app.i18n.__baseUrl = resolveBaseUrl(options.baseUrl, context, "", resolveBaseUrlOptions);
  app.i18n.__onNavigate = onNavigate;
  Vue__default["default"].prototype.$nuxtI18nSeo = nuxtI18nSeo;
  Vue__default["default"].prototype.$nuxtI18nHead = nuxtI18nHead;
  if (store) {
    store.$i18n = app.i18n;
    if (store.state.localeDomains) {
      for (const locale of app.i18n.locales) {
        if (typeof locale === "string") {
          continue;
        }
        locale.domain = store.state.localeDomains[locale.code];
      }
    }
  }
  let finalLocale = options.detectBrowserLanguage ? doDetectBrowserLanguage(route) : "";
  if (!finalLocale) {
    const { vuex } = options;
    if (vuex && vuex.syncLocale && store && store.state[vuex.moduleName].locale !== "") {
      finalLocale = store.state[vuex.moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const domainLocale = getLocaleDomain(options.normalizedLocales, req);
      finalLocale = domainLocale;
    } else if (options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    }
  }
  if (!finalLocale && useCookie) {
    finalLocale = app.i18n.getLocaleCookie();
  }
  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || "";
  }
  await loadAndSetLocale(finalLocale, { initialSetup: true });
};
function nuxt_plugin_i18n_4d2fcc3e({ app }, inject) {
  inject("contentLocalePath", (path) => {
    const { localeCodes, defaultLocale } = app.i18n;
    let localePath2 = localeCodes.some((code) => path.startsWith(`/${code}`)) ? path : app.localePath(path);
    if (localePath2.startsWith(`/${defaultLocale}`)) {
      localePath2 = localePath2.replace(`/${defaultLocale}`, "");
    }
    if (path.endsWith("/") && !localePath2.endsWith("/")) {
      localePath2 += "/";
    }
    if (!path.endsWith("/") && localePath2.endsWith("/")) {
      localePath2 = localePath2.replace(/\/*$/, "");
    }
    return localePath2;
  });
}
var colorSchemeComponent = {
  name: "ColorScheme",
  functional: true,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "span"
    }
  },
  render(createElement, { parent, data: data2, props, children }) {
    props = {
      placeholder: props.placeholder,
      placeholderTag: props.tag
    };
    return createElement("client-only", __spreadProps(__spreadValues({}, data2), { props }), children);
  }
};
Vue__default["default"].component("ColorScheme", colorSchemeComponent);
const script = {
  hid: "nuxt-color-mode-script",
  innerHTML: `!function(){"use strict";var e=window,s=document,o=s.documentElement,a=["dark","light"],t=window.localStorage.getItem("nuxt-color-mode")||"system",c="system"===t?l():t,i=s.body.getAttribute("data-color-mode-forced");function r(e){var s=""+e+"";o.classList?o.classList.add(s):o.className+=" "+s}function n(s){return e.matchMedia("(prefers-color-scheme"+s+")")}function l(){if(e.matchMedia&&"not all"!==n("").media)for(var s of a)if(n(":"+s).matches)return s;return"light"}i&&(c=i),r(c),e["__NUXT_COLOR_MODE__"]={preference:t,value:c,getColorScheme:l,addClass:r,removeClass:function(e){var s=""+e+"";o.classList?o.classList.remove(s):o.className=o.className.replace(new RegExp(s,"g"),"")}}}();
`,
  pbody: true
};
const addScript = (head) => {
  head.script = head.script || [];
  head.script.push(script);
  const serializeProp = "__dangerouslyDisableSanitizersByTagID";
  head[serializeProp] = head[serializeProp] || {};
  head[serializeProp]["nuxt-color-mode-script"] = ["innerHTML"];
};
function nuxt_plugin_pluginserver_35603a8e(ctx, inject) {
  if (typeof ctx.app.head === "function") {
    const originalHead = ctx.app.head;
    ctx.app.head = function() {
      const head = originalHead.call(this) || {};
      addScript(head);
      return head;
    };
  } else {
    addScript(ctx.app.head);
  }
  const preference = "system";
  const colorMode = {
    preference,
    value: preference,
    unknown: true,
    forced: false
  };
  if (ctx.route.matched[0]) {
    const pageColorMode = ctx.route.matched[0].components.default.options.colorMode;
    if (pageColorMode && pageColorMode !== "system") {
      colorMode.value = pageColorMode;
      colorMode.forced = true;
      ctx.app.head.bodyAttrs = ctx.app.head.bodyAttrs || {};
      ctx.app.head.bodyAttrs["data-color-mode-forced"] = pageColorMode;
    } else if (pageColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  }
  ctx.beforeNuxtRender(({ nuxtState }) => {
    nuxtState.colorMode = colorMode;
  });
  inject("colorMode", colorMode);
}
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e2) {
    return val;
  }
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s2 = param.match(/([^=]+)=?(.*)/) || [];
    if (s2.length < 2) {
      continue;
    }
    const key = decode(s2[1]);
    const value = decodeQueryValue(s2[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k2) => encodeQueryItem(k2, query[k2])).join("&");
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
function withTrailingSlash(input = "") {
  return input.endsWith("/") ? input : input + "/";
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = __spreadValues(__spreadValues({}, parseQuery(parsed.search)), query);
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isNonEmptyURL(url2) {
  return url2 && url2 !== "/";
}
function joinURL(base, ...input) {
  let url2 = base || "";
  for (const i3 of input.filter(isNonEmptyURL)) {
    url2 = url2 ? withTrailingSlash(url2) + withoutLeadingSlash(i3) : i3;
  }
  return url2;
}
function parseURL(input = "") {
  if (!hasProtocol(input, true)) {
    return parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? "?" + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, response) {
  const message = `${response.status} ${response.statusText} (${request.toString()})`;
  const error2 = new FetchError(message);
  Object.defineProperty(error2, "request", { get() {
    return request;
  } });
  Object.defineProperty(error2, "response", { get() {
    return response;
  } });
  Object.defineProperty(error2, "data", { get() {
    return response.data;
  } });
  const stack = error2.stack;
  Object.defineProperty(error2, "stack", { get() {
    return normalizeStack(stack);
  } });
  return error2;
}
function normalizeStack(stack = "") {
  return stack.split("\n").filter((l2) => !l2.includes("createFetchError") && !l2.includes("at $fetch") && !l2.includes("processTicksAndRejections")).join("\n");
}
const payloadMethods = ["patch", "post", "put"];
function setHeader(options2, _key, value) {
  const key = _key.toLowerCase();
  options2.headers = options2.headers || {};
  if ("set" in options2.headers) {
    options2.headers.set(key, value);
  } else if (Array.isArray(options2.headers)) {
    const existingHeader = options2.headers.find(([header]) => header.toLowerCase() === key);
    if (existingHeader) {
      existingHeader[1] = value;
    } else {
      options2.headers.push([key, value]);
    }
  } else {
    const existingHeader = Object.keys(options2.headers).find((header) => header.toLowerCase() === key);
    options2.headers[existingHeader || key] = value;
  }
}
function createFetch({ fetch: fetch2 }) {
  const raw = async function(request, opts) {
    var _a;
    if (opts && typeof request === "string") {
      if (opts.baseURL) {
        request = joinURL(opts.baseURL, request);
      }
      if (opts.params) {
        request = withQuery(request, opts.params);
      }
      if (opts.body && opts.body.toString() === "[object Object]" && payloadMethods.includes(((_a = opts.method) == null ? void 0 : _a.toLowerCase()) || "")) {
        opts.body = JSON.stringify(opts.body);
        setHeader(opts, "content-type", "application/json");
      }
    }
    const response = await fetch2(request, opts);
    const text = await response.text();
    response.data = destr(text);
    if (!response.ok) {
      throw createFetchError(request, response);
    }
    return response;
  };
  const $fetch2 = function(request, opts) {
    return raw(request, opts).then((r2) => r2.data);
  };
  $fetch2.raw = raw;
  return $fetch2;
}
const getGlobal = function() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
const $fetch = createFetch({
  fetch: getGlobal().fetch || (() => {
    return Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"));
  })
});
const pick = (keys2) => (obj) => Object.keys(obj).filter((key) => keys2.includes(key)).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys2) => (obj) => Object.keys(obj).filter((key) => !keys2.includes(key)).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn2) => (data2) => Array.isArray(data2) ? data2.map((item) => fn2(item)) : fn2(data2);
class BaseQueryBuiler {
  constructor() {
    this.params = {
      skip: 0,
      limit: 0,
      only: [],
      without: [],
      sortBy: [],
      where: {}
    };
  }
  only(keys2) {
    this.params.only = Array.isArray(keys2) ? keys2 : [keys2];
    return this;
  }
  without(keys2) {
    this.params.without = Array.isArray(keys2) ? keys2 : [keys2];
    return this;
  }
  sortBy(field, direction) {
    this.params.sortBy.push([field, direction]);
    return this;
  }
  where(query) {
    this.params.where = query;
    return this;
  }
  surround(slugOrTo, options2) {
    this.params.surround = {
      slugOrTo,
      options: options2
    };
    return this;
  }
  limit(count) {
    if (typeof count === "string") {
      count = parseInt(count);
    }
    this.params.limit = count;
    return this;
  }
  skip(count) {
    if (typeof count === "string") {
      count = parseInt(count);
    }
    this.params.skip = count;
    return this;
  }
}
class LokiQuery extends BaseQueryBuiler {
  constructor(to, _a = {}) {
    var _b = _a, { postprocess = [], base = "", db = null } = _b, params = __objRest(_b, ["postprocess", "base", "db"]);
    super();
    this.base = "";
    this.options = {};
    this.base = base;
    Object.assign(this.params, params);
    this.params.to = this.params.to || to;
    this.db = db;
    if (!Array.isArray(postprocess)) {
      this.options.postprocess = postprocess ? [postprocess] : [];
    }
  }
  remoteFetch() {
    return $fetch(this.base, {
      method: "POST",
      body: JSON.stringify(this.params),
      headers: { "Content-Type": "application/json" }
    });
  }
  async initDBFromDataUrl(dataUrl) {
    let Loki = require("@lokidb/loki");
    Loki = Loki.default || Loki;
    const db = new Loki("content.db");
    const items = db.addCollection("items");
    const { body: navigation } = await $fetch(dataUrl);
    function index2(item) {
      items.insert(__spreadProps(__spreadValues({}, item), { children: void 0 }));
      if (item.children) {
        item.children.forEach(index2);
      }
    }
    Object.values(navigation || {}).flatMap((i3) => i3).forEach(index2);
    return db;
  }
  async fetch(params = this.params) {
    if (!this.db) {
      return this.remoteFetch();
    }
    if (typeof this.db === "string") {
      this.db = await this.initDBFromDataUrl(this.db);
    }
    const { postprocess = [] } = this.options;
    if (params.surround) {
      const surroundPostProcessor = this.processSurround(params);
      postprocess.push(surroundPostProcessor);
    }
    const _a = params, { to, sortBy, skip, limit, only, without, where, search, surround, deep, text } = _a, other = __objRest(_a, ["to", "sortBy", "skip", "limit", "only", "without", "where", "search", "surround", "deep", "text"]);
    postprocess.push((data22) => {
      var _a2;
      return !deep && ((_a2 = data22[0]) == null ? void 0 : _a2.to) === to ? data22[0] : data22;
    });
    if (!text) {
      postprocess.unshift(apply(omit(["text"])));
    }
    const condition = { $or: [{ to }, { to: deep ? { $regex: new RegExp(`^${to}`) } : to }] };
    this.lokiQuery = this.db.getCollection("items").chain().find(condition, !deep);
    if (where) {
      const conditions = this.prccessWhere(Object.assign({}, where, other));
      this.lokiQuery = this.lokiQuery.find(conditions);
    }
    if (sortBy && sortBy.length) {
      this.lokiQuery = this.lokiQuery.compoundsort(this.processSort(sortBy));
    }
    if (skip) {
      this.lokiQuery = this.lokiQuery.offset(skip);
    }
    if (limit) {
      postprocess.push((docs) => docs.slice(0, limit));
    }
    if (only && only.length) {
      const fn2 = apply(pick(only));
      postprocess.unshift(fn2);
    }
    if (without && without.length) {
      const fn2 = apply(omit(without));
      postprocess.unshift(fn2);
    }
    let data2 = this.lokiQuery.data({ removeMeta: true });
    data2 = postprocess.reduce((data22, fn2) => fn2(data22), data2);
    if (!data2) {
      throw new Error("not found");
    }
    return JSON.parse(JSON.stringify(data2));
  }
  processSurround(params) {
    const {
      slugOrTo,
      options: { before = 1, after = 1 }
    } = params.surround;
    const _key = slugOrTo.indexOf("/") === 0 ? "to" : "slug";
    if (params.only) {
      params.only.push(_key);
    }
    if (params.without) {
      params.without = params.without.filter((key) => key !== _key);
    }
    const fn2 = (data2) => {
      const index2 = data2.findIndex((item) => item[_key] === slugOrTo);
      const slice = new Array(before + after).fill(null, 0);
      if (index2 === -1) {
        return slice;
      }
      const prevSlice = data2.slice(index2 - before, index2);
      const nextSlice = data2.slice(index2 + 1, index2 + 1 + after);
      let prevIndex = 0;
      for (let i3 = before - 1; i3 >= 0; i3--) {
        slice[i3] = prevSlice[prevIndex] || null;
        prevIndex++;
      }
      let nextIndex = 0;
      for (let i3 = before; i3 <= after; i3++) {
        slice[i3] = nextSlice[nextIndex] || null;
        nextIndex++;
      }
      return slice;
    };
    return fn2;
  }
  prccessWhere(where) {
    const result = {};
    for (const [key, value] of Object.entries(where)) {
      const [field, operator] = key.split("_");
      if (operator) {
        result[field] = {
          [`$${operator}`]: value
        };
      } else {
        result[field] = value;
      }
    }
    return result;
  }
  processSort(sortBy) {
    const result = [];
    const add = ([field, direction]) => result.push([field, typeof direction === "boolean" ? direction : direction === "desc"]);
    if (sortBy) {
      if (Array.isArray(sortBy)) {
        for (const sort of sortBy) {
          if (Array.isArray(sort)) {
            add(sort);
          } else if (typeof sort === "string") {
            add(sort.split(":"));
          } else {
            Object.entries(sort).forEach((item) => add(item));
          }
        }
      } else if (typeof sortBy === "object") {
        Object.entries(sortBy).forEach((item) => add(item));
      } else {
        add(sortBy.split(":"));
      }
    }
    return result;
  }
}
const createQuery$1 = (options2) => (path, opts) => {
  const to = typeof path === "string" ? path : "";
  const params = (typeof path === "object" ? path : opts) || {};
  return new LokiQuery(to, __spreadValues(__spreadValues({}, params), options2));
};
function getContent$1(ctx) {
  ctx.$config ? ctx.$config : ctx.nuxtState;
  createQuery$1({
    base: withoutTrailingSlash(joinURL$1("/", "_docus", "search"))
  });
  return {
    search: ctx.ssrContext.docus.content.search,
    get: ctx.ssrContext.docus.content.get
  };
}
const docusInit = ({ context, state }) => {
  {
    context.beforeNuxtRender(({ nuxtState }) => nuxtState.docus = state);
  }
};
const useDocusApi = ($content) => {
  const data2 = (path) => $content.get(joinURL$1("/data", path));
  const search = (to, params) => $content.search(to, params);
  const page = (path) => $content.get(path);
  const findLink = (links, to) => links.find((link2) => link2.to === to);
  return {
    data: data2,
    search,
    page,
    findLink
  };
};
const useDocusTemplates = ({ api, state }, currentNav) => {
  function getPageTemplate(page) {
    var _a;
    let template2 = typeof page.template === "string" ? page.template : (_a = page.template) == null ? void 0 : _a.self;
    if (!template2) {
      const slugs = page.to.split("/").filter(Boolean).slice(0, -1);
      let { links } = (currentNav == null ? void 0 : currentNav.value) || {};
      slugs.forEach((_slug, index2) => {
        const to = "/" + slugs.slice(0, index2 + 1).join("/");
        const link2 = api.findLink(links, to);
        if (link2 == null ? void 0 : link2.template) {
          template2 = link2.template || template2;
        }
        if (!(link2 == null ? void 0 : link2.children))
          return;
        links = link2.children;
      });
    }
    if (!template2) {
      template2 = state.settings.template;
    }
    template2 = scule.pascalCase(template2);
    if (!Vue__default["default"].component(template2)) {
      console.error(`Template ${template2} does not exists, fallback to Page template.`);
      template2 = "Page";
    }
    return template2;
  }
  return {
    getPageTemplate
  };
};
const useDocusNavigation = ({ context, state, api }) => {
  const { app } = context;
  if (!state.navigation)
    state.navigation = {};
  app.i18n.locales.forEach((locale) => state.navigation[locale.code] = []);
  const fetchCounter = CompositionApi.ref(0);
  async function fetchNavigation() {
    const { body } = await api.data("/docus/navigation/" + app.i18n.locale);
    state.navigation[app.i18n.locale] = body;
    fetchCounter.value += 1;
  }
  function get2({ depth, locale, from, all } = {}) {
    const nav = state.navigation[locale || app.i18n.locale] || [];
    let items = nav;
    let match;
    let exclusiveContent;
    let parent;
    if (from) {
      let lastMatch;
      const paths = from.split("/");
      items = paths.reduce((links, path, index2) => {
        if (!path)
          return links;
        if (match && match.page) {
          lastMatch = match;
        }
        match = links.find((item) => item.to.split("/")[index2] === path);
        if (match) {
          if (match && match.exclusive) {
            parent = lastMatch || parent;
            exclusiveContent = match;
          }
          return match.children;
        }
        return links;
      }, items);
      if (exclusiveContent) {
        items = exclusiveContent.children;
      } else {
        items = nav;
      }
    }
    return {
      title: exclusiveContent && exclusiveContent.title,
      to: exclusiveContent && exclusiveContent.to,
      parent,
      links: all ? items : filterLinks(items, depth, 1)
    };
  }
  function filterLinks(nodes, maxDepth, currentDepth) {
    return nodes.filter((node) => {
      if (node.hidden)
        return false;
      if (node.draft === true)
        return false;
      if (currentDepth && maxDepth > currentDepth)
        return false;
      if (node.nested === false)
        node.children = [];
      node.children = node.children && node.children.length > 0 ? filterLinks(node.children, maxDepth, currentDepth + 1) : [];
      return node;
    });
  }
  function isLinkActive(to) {
    return withTrailingSlash$1(state.currentPath) === withTrailingSlash$1(context.$contentLocalePath(to));
  }
  const currentNav = CompositionApi.computed(() => {
    fetchCounter.value;
    return get2({
      from: state.currentPath
    });
  });
  const { getPageTemplate } = useDocusTemplates({ api, state }, currentNav);
  function getPreviousAndNextLink(page) {
    var _a;
    const draft = ((_a = state.ui) == null ? void 0 : _a.draft) ? void 0 : false;
    return api.search({ deep: true }).where({
      language: app.i18n.locale,
      draft,
      parent: page.parent,
      page: { $ne: false },
      hidden: { $ne: true },
      redirect: { $type: "undefined" }
    }).only(["title", "slug", "to"]).sortBy("position", "asc").surround(page.to, { before: 1, after: 1 }).fetch();
  }
  return {
    getPageTemplate,
    fetchNavigation,
    currentNav,
    isLinkActive,
    init: fetchNavigation,
    get: get2,
    getPreviousAndNextLink
  };
};
var dist$1 = {};
var utils = {};
Object.defineProperty(utils, "__esModule", { value: true });
utils.withShade = utils.withTint = utils.shade = utils.tint = utils.hexValue = utils.parseColor = void 0;
function parseColor(color = "") {
  if (typeof color !== "string") {
    throw new TypeError("Color should be string!");
  }
  const hexMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  if (hexMatch) {
    return hexMatch.splice(1).map((c2) => parseInt(c2, 16));
  }
  const hexMatchShort = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(color);
  if (hexMatchShort) {
    return hexMatchShort.splice(1).map((c2) => parseInt(c2 + c2, 16));
  }
  if (color.includes(",")) {
    return color.split(",").map((p2) => parseInt(p2));
  }
  throw new Error("Invalid color format! Use #ABC or #AABBCC or r,g,b");
}
utils.parseColor = parseColor;
function hexValue(components2) {
  return "#" + components2.map((c2) => `0${c2.toString(16).toUpperCase()}`.slice(-2)).join("");
}
utils.hexValue = hexValue;
function tint(components2, intensity) {
  return components2.map((c2) => Math.round(c2 + (255 - c2) * intensity));
}
utils.tint = tint;
function shade(components2, intensity) {
  return components2.map((c2) => Math.round(c2 * intensity));
}
utils.shade = shade;
utils.withTint = (intensity) => (hex) => tint(hex, intensity);
utils.withShade = (intensity) => (hex) => shade(hex, intensity);
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.getColors = exports2._variants = void 0;
  const utils_1 = utils;
  exports2._variants = {
    50: utils_1.withTint(0.95),
    100: utils_1.withTint(0.9),
    200: utils_1.withTint(0.75),
    300: utils_1.withTint(0.6),
    400: utils_1.withTint(0.3),
    500: (c2) => c2,
    600: utils_1.withShade(0.9),
    700: utils_1.withShade(0.6),
    800: utils_1.withShade(0.45),
    900: utils_1.withShade(0.3)
  };
  function getColors(color, variants = exports2._variants) {
    const colors = {};
    const components2 = utils_1.parseColor(color);
    for (const [name, fn2] of Object.entries(variants)) {
      colors[name] = utils_1.hexValue(fn2(components2));
    }
    return colors;
  }
  exports2.getColors = getColors;
})(dist$1);
function useColors(colors) {
  try {
    return Object.entries(colors).map(([key, color]) => [key, typeof color === "string" ? dist$1.getColors(color) : color]);
  } catch (e2) {
    console.warn("Could not parse custom colors:", e2.message);
    return [];
  }
}
function useCssVariableStore(scopes = ["dark"]) {
  scopes = ["default", ...scopes];
  const _store = scopes.reduce((obj, scope) => __spreadValues({ [scope]: {} }, obj), {});
  const getScope = (scope) => _store[scope] || null;
  const putSingle = (key) => (value) => {
    const _arr = value.split(":");
    const _value = _arr.pop();
    const _scope = getScope(_arr.pop() || "default");
    if (_scope) {
      _scope[key] = _value;
    }
  };
  const put = (key, value) => {
    value.split(" ").map(putSingle(key));
  };
  const generateVar = ([key, value]) => `--${key}: ${value}`;
  const generateScope = (scope) => {
    const vars = Object.entries(getScope(scope)).map(generateVar).join(";");
    return scope === "default" ? `html:root {${vars}}` : `html.${scope} {${vars}}`;
  };
  const generate = () => scopes.map(generateScope).join(" ");
  return { put, generate };
}
function useCSSVariables(colors) {
  const { put, generate } = useCssVariableStore(["dark"]);
  const colorsList = useColors(colors);
  colorsList.forEach(([color, map]) => Object.entries(map).forEach(([variant, value]) => put(`${color}-${variant}`, value)));
  return generate();
}
const useDocusStyle = ({ context, state }) => {
  const app = context.app;
  const styles = CompositionApi.computed(() => useCSSVariables(state.theme.colors || {}));
  function updateHead() {
    var _a;
    const head = typeof app.head === "function" ? app.head() : app.head;
    if (!Array.isArray(head.style)) {
      head.style = [];
    }
    if (!Array.isArray(head.meta)) {
      head.meta = [];
    }
    head.style.push({
      hid: "docus-theme",
      cssText: styles.value,
      type: "text/css"
    });
    head.meta = head.meta.filter((s2) => s2.hid !== "apple-mobile-web-app-title");
    head.meta.push({
      hid: "apple-mobile-web-app-title",
      name: "apple-mobile-web-app-title",
      content: ((_a = state.settings) == null ? void 0 : _a.title) || ""
    });
    head.meta = head.meta.filter((s2) => s2.hid !== "theme-color");
  }
  return {
    styles,
    updateHead,
    init: updateHead
  };
};
const useDocusAddons = (context, addons) => {
  const addonsContext = {};
  const setupAddons = async () => await Promise.all(Object.entries(addons).map(async ([key, addon]) => {
    var _a;
    const addonKeys = addon(context);
    Object.entries(addonKeys).forEach(([key2, value]) => {
      if (key2 === "init")
        return;
      const contextKeys = [Object.keys(addonsContext), ...Object.keys(context.state)];
      if (contextKeys.includes(key2))
        console.warn(`You duplicated the key ${key2} in Docus context.`);
      addonsContext[key2] = value;
    });
    if (addonKeys == null ? void 0 : addonKeys.init) {
      try {
        await ((_a = addonKeys == null ? void 0 : addonKeys.init) == null ? void 0 : _a.call(addonKeys));
      } catch (e2) {
        console.log(`Could not init ${key} addon!`);
      }
    }
  }));
  return {
    addonsContext,
    setupAddons
  };
};
let docusInstance;
const createDocus = async (context, settings2, content) => {
  var _a;
  let $nuxt;
  const { ssrContext, nuxtState = {}, route } = context;
  const templateOptions = ((_a = nuxtState.data) == null ? void 0 : _a[0].templateOptions) || {};
  const state = CompositionApi.reactive({
    currentPath: `/${route.params.pathMatch}`,
    currentPage: null,
    settings: null,
    theme: null,
    navigation: {},
    layout: __spreadValues(__spreadValues({}, settings2.layout), templateOptions)
  });
  const _b = settings2, { theme: theme2 } = _b, userSettings = __objRest(_b, ["theme"]);
  state.settings = userSettings;
  state.theme = theme2;
  const api = useDocusApi(content);
  const docusAddonContext = {
    ssrContext,
    $nuxt,
    context,
    state,
    settings: settings2,
    api
  };
  const docusAddons = {
    useDocusStyle,
    useDocusNavigation
  };
  const { setupAddons, addonsContext } = useDocusAddons(docusAddonContext, docusAddons);
  await setupAddons();
  docusInit(docusAddonContext);
  docusInstance = __spreadValues(__spreadValues(__spreadValues({}, CompositionApi.toRefs(state)), api), addonsContext);
  return docusInstance;
};
const title$1 = "Nuxt 3";
const contentDir = "content";
const url = "https://v3.nuxtjs.org";
const description = "The Hybrid Vue Framework";
const template = "docs";
const credits = false;
const layout = {
  header: true,
  footer: true,
  aside: false,
  asideClass: "",
  fluid: false,
  banner: false
};
const twitter = "nuxt_js";
const algolia = {
  appId: "1V8G7N9GF0",
  apiKey: "60a01900a4b726d667eab75b6f337592",
  indexName: "nuxtjs",
  facetFilters: [
    "tags:v3"
  ]
};
const github = {
  repo: "nuxt/framework",
  branch: "main",
  dir: "docs",
  releases: false,
  url: "https://github.com",
  apiUrl: "https://api.github.com/repos"
};
const theme = {
  header: {
    logo: true,
    title: false
  },
  colors: {
    primary: "#00DC82",
    prism: {
      foreground: "inherit",
      background: "#fbfbfb dark:#1e1e1e",
      "class": "#9807af dark:#E879F9",
      builtin: "#9807af dark:#E879F9",
      "function": "#9807af dark:#E879F9",
      keyword: "#096d7c dark:#22D3EE",
      string: "#679c0d dark:#BEF264",
      number: "#679c0d dark:#BEF264",
      selector: "#679c0d dark:#BEF264",
      boolean: "#679c0d dark:#BEF264",
      property: "#078ce5 dark:#E0F2FE",
      punctuation: "#078ce5 dark:#E0F2FE",
      comment: "#758575 dark:#a0ada0",
      literal: "#429988 dark:#2f8a89",
      variable: "inherit",
      constant: "#9807af dark:#E879F9",
      deleted: "#a14f55 #a14f55",
      namespace: "#9807af dark:#E879F9",
      decorator: "#9807af dark:#E879F9",
      regex: "#679c0d dark:#BEF264",
      "json-property": "#078ce5 dark:#22D3EE",
      "line-number": "#888888",
      "line-number-gutter": "#eeeeee",
      "line-highlight-background": "#444444",
      "selection-background": "#444444"
    },
    logo: "#003543"
  },
  shortcuts: {
    "d-body-bg": "bg-white dark:bg-secondary-black",
    "d-body-text-color": "text-secondary-darker dark:text-white",
    "d-secondary-bg": "bg-gray-500 dark:bg-cloud-light",
    "d-secondary-text": "text-gray-500 dark:text-cloud-light",
    "d-secondary-text-hover": "text-gray-700 dark:text-cloud-lightest",
    "d-tertiary-text": "text-gray-400 dark:text-cloud-dark",
    "d-border-tertiary": "border-gray-400 dark:border-gray-500",
    "d-primary-text-hover": "text-gray-600 dark:text-cloud-lighter",
    "d-secondary-text-active": "text-gray-900 dark:text-cloud-surface",
    "d-prose-code-inline-bg": "bg-gray-100 dark:bg-secondary-darkest",
    "d-prose-code-bg": "bg-gray-100 dark:bg-secondary-darkest",
    "d-prose-thead-border": "border-b border-gray-200 dark:border-secondary-dark",
    "d-prose-tr-border": "border-b border-gray-100 dark:border-secondary-darker",
    "d-prose-blockquote-border": "border-l-2 border-gray-200 dark:border-secondary-darker",
    "d-prose-blockquote-text": "d-secondary-text",
    "d-prose-a-text": "text-primary-500",
    "d-prose-a-border": "border-b border-transparent",
    "d-prose-a-border-hover": "border-b border-primary-500",
    "d-prose-a-headline-border": "border-b border-dashed border-gray-900 dark:border-gray-100",
    "d-text-primary": "text-primary-500 dark:text-primary-400",
    "d-border-primary": "border-primary-500 dark:border-primary-400",
    "d-bg-primary": "bg-primary-500 dark:bg-primary-400",
    "d-page-mobile-toc-bg": "d-body-bg bg-opacity-80 dark:bg-opacity-80",
    "d-aside-header-bg": "bg-gray-50 dark:bg-secondary-darkest",
    "d-active-aside-navigation-item-bg": "bg-primary-50 dark:bg-secondary-darkest",
    "d-active-aside-navigation-item-text": "text-primary-500 dark:text-primary-400 ",
    "d-code-group-header-bg": "bg-gray-200 dark:bg-secondary-darker",
    "d-code-group-tab": "bg-gray-300 dark:bg-secondary-dark",
    "d-prose-code-filename-bg": "bg-gray-100 dark:bg-secondary-darker",
    "d-prose-code-filename-text": "text-gray-600 dark:text-secondary-light",
    "d-prose-code-inline-in-heading-border-hover": "border-gray-500 dark:border-gray-200",
    "d-prose-hr-border": "border-t border-gray-100 dark:border-secondary-darker",
    "d-prose-ul-li-bullet": "d-secondary-bg",
    "d-text-icon": "d-secondary-text hover:d-secondary-text-hover",
    "d-icon": "d-text-icon focus:outline-none",
    "light-img": "dark:hidden",
    "dark-img": "light:hidden",
    "d-max-w-container": "max-w-7xl",
    "d-px-container": "px-4 sm:px-6",
    "d-container": "d-max-w-container mx-auto",
    "d-container-content": "d-container d-px-container",
    "d-blur-header": "blur-12",
    "d-bg-header": "bg-white bg-opacity-80 dark:bg-secondary-black dark:bg-opacity-80",
    "d-border": "light:border-gray-200 light:border-opacity-50 dark:border-secondary-darker",
    "d-border-hover": "border-primary-200 dark:border-secondary-dark",
    "d-border-header": "border-none",
    "d-header": "sticky w-full top-0 z-50 d-bg-header d-border-header d-blur-header h-header",
    "d-header-title": "text-2xl font-bold tracking-tighter text-gray-900 dark:text-gray-100",
    "d-header-title-logo": "d-header-title ml-4",
    "d-header-logo": "flex items-center flex-none lg:w-60",
    "d-logo-color": "text-black dark:text-white",
    "d-logo": "w-auto h-6 md:h-7 text-logo dark:text-white",
    "d-heading-title": "!mb-0 !mt-0 flex-1 !text-4xl font-semibold tracking-tight",
    "d-heading-description": "!mt-2 !mb-0 text-lg font-medium d-secondary-text",
    "d-heading-hr": "!mt-4 !mb-0 d-border",
    "d-scrollbar": "scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-secondary-dark scrollbar-thumb-rounded",
    "d-aside-title": "py-2 text-base font-semibold text-gray-900 cursor-pointer dark:text-gray-100",
    "d-header-home": "sticky w-full top-0 z-50 bg-secondary-black bg-opacity-80 d-border-header d-blur-header h-header",
    "d-bg-header-home": "bg-opacity-80 bg-secondary-black",
    "d-aside-header-home-bg": "bg-secondary-darkest"
  }
};
var settings = {
  title: title$1,
  contentDir,
  url,
  description,
  template,
  credits,
  layout,
  twitter,
  algolia,
  github,
  theme
};
async function nuxt_plugin_index_3e5d0360(ctx, inject) {
  const $docus = await createDocus(ctx, settings, getContent$1(ctx));
  inject("docus", $docus);
}
const createQuery = (options2) => (path, opts) => {
  const to = typeof path === "string" ? path : "";
  const params = (typeof path === "object" ? path : opts) || {};
  return new LokiQuery(to, __spreadValues(__spreadValues({}, params), options2));
};
function getContent(ctx) {
  ctx.$config ? ctx.$config : ctx.nuxtState;
  createQuery({
    base: withoutTrailingSlash(joinURL$1("/", "_docus", "search"))
  });
  return {
    search: ctx.ssrContext.docus.content.search,
    get: ctx.ssrContext.docus.content.get
  };
}
async function nuxt_plugin_core_7cc41b1d(ctx, inject) {
  inject("content", getContent(ctx));
}
async function imageMeta$1(ctx, url2) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url2;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const meta2 = await _imageMeta(url2).catch((err) => {
    console.error("Failed to get image meta for " + url2, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta2);
  return meta2;
}
async function _imageMeta(url2) {
  {
    const imageMeta2 = await Promise.resolve().then(function() {
      return index;
    }).then((r2) => r2.default || r2);
    const data2 = await fetch(url2).then((res) => res.buffer());
    const metadata = imageMeta2(data2);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url2}\`.`);
    }
    const { width, height } = metadata;
    const meta2 = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta2;
  }
}
function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: (id) => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: (id) => typeof _cache[id] !== "undefined"
      };
    }
  }
  return ctx.nuxtContext.cache;
}
function getFileExtension(url2 = "") {
  const extension = url2.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_2, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions, nuxtContext) {
  const ctx = {
    options: globalOptions,
    nuxtContext
  };
  const getImage2 = function(input, options2 = {}) {
    const image = resolveImage(ctx, input, options2);
    if (image.isStatic)
      ;
    return image;
  };
  const $img = function $img2(input, modifiers = {}, options2 = {}) {
    return getImage2(input, __spreadProps(__spreadValues({}, options2), {
      modifiers: defu(modifiers, options2.modifiers || {})
    })).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options2) => $img(source, modifiers, __spreadValues(__spreadValues({}, globalOptions.presets[presetName]), options2));
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options2) => getMeta(ctx, input, options2);
  $img.getSizes = (input, options2) => getSizes(ctx, input, options2);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options2) {
  const image = resolveImage(ctx, input, __spreadValues({}, options2));
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta$1(ctx, image.url);
  }
}
function resolveImage(ctx, input, options2) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options2.provider || ctx.options.provider);
  const preset = getPreset(ctx, options2.preset);
  input = hasProtocol$1(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL$1(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol$1(input)) {
    const inputHost = parseURL$1(input).host;
    if (!ctx.options.domains.find((d3) => d3 === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options2, preset, defaults);
  _options.modifiers = __spreadValues({}, _options.modifiers);
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter((e2) => e2)) {
      const s2 = entry.split(":");
      if (s2.length !== 2) {
        continue;
      }
      sizes[s2[0].trim()] = s2[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, __spreadProps(__spreadValues({}, opts.modifiers), { width: _cWidth, height: _cHeight }), opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v2) => `${v2.media ? v2.media + " " : ""}${v2.size}`).join(", "),
    srcset: variants.map((v2) => `${v2.src} ${v2.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const defineMixin = (opts) => opts;
const imageMixin = defineMixin({
  props: {
    src: { type: String, required: true },
    format: { type: String, default: void 0 },
    quality: { type: [Number, String], default: void 0 },
    background: { type: String, default: void 0 },
    fit: { type: String, default: void 0 },
    modifiers: { type: Object, default: void 0 },
    preset: { type: String, default: void 0 },
    provider: { type: String, default: void 0 },
    sizes: { type: [Object, String], default: void 0 },
    width: { type: [String, Number], default: void 0 },
    height: { type: [String, Number], default: void 0 },
    alt: { type: String, default: void 0 },
    referrerpolicy: { type: String, default: void 0 },
    usemap: { type: String, default: void 0 },
    longdesc: { type: String, default: void 0 },
    ismap: { type: Boolean, default: void 0 },
    crossorigin: { type: [Boolean, String], default: void 0, validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val) },
    loading: { type: String, default: void 0 },
    decoding: { type: String, default: void 0, validator: (val) => ["async", "auto", "sync"].includes(val) }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },
    nModifiers() {
      return __spreadProps(__spreadValues({}, this.modifiers), {
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      });
    },
    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }
  }
});
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("img", _vm._b({ key: _vm.nSrc, attrs: { "src": _vm.nSrc } }, "img", _vm.nAttrs, false));
};
var staticRenderFns$1 = [];
render$1._withStripped = true;
const defineComponent$1 = (opts) => opts;
const __vue2_script$2 = defineComponent$1({
  name: "NuxtImg",
  mixins: [imageMixin],
  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;
      if (this.sizes) {
        const { sizes, srcset } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }
      return attrs;
    },
    nSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },
    nSizes() {
      return this.$img.getSizes(this.src, __spreadProps(__spreadValues({}, this.nOptions), {
        sizes: this.sizes,
        modifiers: __spreadProps(__spreadValues({}, this.nModifiers), {
          width: parseSize(this.width),
          height: parseSize(this.height)
        })
      }));
    }
  },
  created() {
  }
});
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, render$1, staticRenderFns$1, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (let o2 in __cssModules$2) {
    this[o2] = __cssModules$2[o2];
  }
}
__component__$2.options.__file = "node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue";
var NuxtImg = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("picture", { key: _vm.nSources[0].src }, [_vm.nSources[1] ? _c("source", { attrs: { "type": _vm.nSources[1].type, "srcset": _vm.nSources[1].srcset, "sizes": _vm.nSources[1].sizes } }) : _vm._e(), _c("img", _vm._b({ attrs: { "src": _vm.nSources[0].src, "srcset": _vm.nSources[0].srcset, "sizes": _vm.nSources[0].sizes } }, "img", _vm.nImgAttrs, false))]);
};
var staticRenderFns = [];
render._withStripped = true;
const defineComponent = (opts) => opts;
const __vue2_script$1 = defineComponent({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: { type: String, default: null }
  },
  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },
    originalFormat() {
      return getFileExtension(this.src);
    },
    nFormat() {
      if (this.format) {
        return this.format;
      }
      if (this.originalFormat === "svg") {
        return "svg";
      }
      return "webp";
    },
    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }
      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },
    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }
      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map((format) => {
        const { srcset, sizes, src } = this.$img.getSizes(this.src, __spreadProps(__spreadValues({}, this.nOptions), {
          sizes: this.sizes || this.$img.options.screens,
          modifiers: __spreadProps(__spreadValues({}, this.nModifiers), {
            format
          })
        }));
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }
  },
  created() {
  }
});
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render, staticRenderFns, false, __vue2_injectStyles$1, null, null, null);
function __vue2_injectStyles$1(context) {
  for (let o2 in __cssModules$1) {
    this[o2] = __cssModules$1[o2];
  }
}
__component__$1.options.__file = "node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue";
var NuxtPicture = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage$1 = (src, { modifiers = {}, baseURL = "/_ipx" } = {}, { nuxtContext: { base: nuxtBase = "/" } = {} }) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  return {
    url: joinURL$1(nuxtBase, baseURL, params, encodePath(src))
  };
};
const getImage = (src, options2, ctx) => __spreadProps(__spreadValues({}, getImage$1(src, options2, ctx)), {
  isStatic: true
});
const supportsAlias = true;
var staticRuntime$f261 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  getImage,
  supportsAlias
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "static",
  "domains": [
    "i3.ytimg.com"
  ],
  "alias": {}
};
imageOptions.providers = {
  ["static"]: { provider: staticRuntime$f261, defaults: {} }
};
Vue__default["default"].component(NuxtImg.name, NuxtImg);
Vue__default["default"].component(NuxtPicture.name, NuxtPicture);
Vue__default["default"].component("NImg", NuxtImg);
Vue__default["default"].component("NPicture", NuxtPicture);
function nuxt_plugin_image_d73be0c4(nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);
  inject("img", $img);
}
function mergeMeta(to, from) {
  if (typeof to === "function") {
    console.warn("Cannot merge meta. Avoid using head as a function!");
    return;
  }
  for (const key in from) {
    const value = from[key];
    if (Array.isArray(value)) {
      to[key] = to[key] || [];
      for (const item of value) {
        if (item.hid && hasMeta(to[key], "hid", item.hid) || item.name && hasMeta(to[key], "name", item.name)) {
          continue;
        }
        to[key].push(item);
      }
    } else if (typeof value === "object") {
      to[key] = to[key] || {};
      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === void 0) {
      to[key] = value;
    }
  }
}
function hasMeta(arr, key, val) {
  return arr.find((obj) => val ? obj[key] === val : obj[key]);
}
const title = "docs";
const meta = [
  {
    hid: "charset",
    charset: "utf-8"
  },
  {
    hid: "viewport",
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  },
  {
    hid: "mobile-web-app-capable",
    name: "mobile-web-app-capable",
    content: "yes"
  },
  {
    hid: "apple-mobile-web-app-title",
    name: "apple-mobile-web-app-title",
    content: "docs"
  },
  {
    hid: "og:type",
    name: "og:type",
    property: "og:type",
    content: "website"
  },
  {
    hid: "og:title",
    name: "og:title",
    property: "og:title",
    content: "docs"
  },
  {
    hid: "og:site_name",
    name: "og:site_name",
    property: "og:site_name",
    content: "docs"
  }
];
const link = [
  {
    hid: "shortcut-icon",
    rel: "shortcut icon",
    href: "/_nuxt/icons/icon_64x64.a3b4ce.png"
  },
  {
    hid: "apple-touch-icon",
    rel: "apple-touch-icon",
    href: "/_nuxt/icons/icon_512x512.a3b4ce.png",
    sizes: "512x512"
  },
  {
    rel: "manifest",
    href: "/_nuxt/manifest.55dd1173.json",
    hid: "manifest"
  }
];
const htmlAttrs = {
  lang: "en"
};
var meta$1 = {
  title,
  meta,
  link,
  htmlAttrs
};
function nuxt_plugin_metaplugin_71a979dc({ app }) {
  mergeMeta(app.head, meta$1);
}
async function nuxt_plugin_iconplugin_685a2ef4(ctx, inject) {
  const icons = { "64x64": "/_nuxt/icons/icon_64x64.a3b4ce.png", "120x120": "/_nuxt/icons/icon_120x120.a3b4ce.png", "144x144": "/_nuxt/icons/icon_144x144.a3b4ce.png", "152x152": "/_nuxt/icons/icon_152x152.a3b4ce.png", "192x192": "/_nuxt/icons/icon_192x192.a3b4ce.png", "384x384": "/_nuxt/icons/icon_384x384.a3b4ce.png", "512x512": "/_nuxt/icons/icon_512x512.a3b4ce.png", "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.a3b4ce.png", "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.a3b4ce.png", "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.a3b4ce.png", "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.a3b4ce.png", "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.a3b4ce.png", "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.a3b4ce.png", "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.a3b4ce.png", "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.a3b4ce.png", "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.a3b4ce.png", "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.a3b4ce.png" };
  const getIcon = (size) => icons[size + "x" + size] || "";
  inject("icon", getIcon);
}
var nuxt_plugin_menu_dffabbce = defineNuxtPlugin((ctx, inject) => {
  var _a;
  const visible = CompositionApi.ref(false);
  const currentTab = CompositionApi.ref();
  const open = () => visible.value = true;
  const close = () => visible.value = false;
  const toggle = () => visible.value = !visible.value;
  const toggleTab = (tab) => currentTab.value === tab ? currentTab.value = void 0 : currentTab.value = tab;
  (_a = ctx.app.router) == null ? void 0 : _a.afterEach(() => {
    setTimeout(close, 50);
  });
  inject("menu", {
    visible,
    close,
    open,
    toggle,
    currentTab,
    toggleTab
  });
});
Vue__default["default"].use(VueMq__default["default"], {
  breakpoints: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: Infinity
  },
  defaultBreakpoint: "lg"
});
var nuxt_plugin_mq_5d03b8cc = () => {
};
Vue__default["default"].component(ClientOnly__default["default"].name, ClientOnly__default["default"]);
Vue__default["default"].component(NoSsr__default["default"].name, __spreadProps(__spreadValues({}, NoSsr__default["default"]), {
  render(h2, ctx) {
    return NoSsr__default["default"].render(h2, ctx);
  }
}));
Vue__default["default"].component(NuxtChild.name, NuxtChild);
Vue__default["default"].component("NChild", NuxtChild);
Vue__default["default"].component(Nuxt.name, Nuxt);
Object.defineProperty(Vue__default["default"].prototype, "$nuxt", {
  get() {
    const globalNuxt2 = this.$root ? this.$root.$options.$nuxt : null;
    return globalNuxt2;
  },
  configurable: true
});
Vue__default["default"].use(VueMeta__default["default"], { "keyName": "head", "attribute": "data-n-head", "ssrAttribute": "data-n-head-ssr", "tagIDKeyName": "hid" });
const defaultTransition = { "name": "page", "mode": "out-in", "appear": false, "appearClass": "appear", "appearActiveClass": "appear-active", "appearToClass": "appear-to" };
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const app = __spreadValues({
    head: { "link": [{ "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" }, { "rel": "preconnect", "href": "https://fonts.gstatic.com" }, { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&display=swap" }, { "rel": "preconnect", "href": "https://fonts.gstatic.com" }], "bodyAttrs": { "class": ["d-body-bg d-body-text-color text-root min-w-base antialiased tracking-semitight d-scrollbar", "min-w-xs"] }, "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "og:site_name", "property": "og:site_name", "content": "Nuxt 3" }, { "hid": "og:type", "property": "og:type", "content": "website" }, { "hid": "twitter:site", "name": "twitter:site", "content": "@nuxt_js" }, { "hid": "twitter:card", "name": "twitter:card", "content": "summary_large_image" }, { "hid": "og:image", "property": "og:image", "content": "https://res.cloudinary.com/nuxt/image/upload/v1633987983/nuxt3-preview_rhh50t.png" }, { "hid": "og:image:secure_url", "property": "og:image:secure_url", "content": "https://res.cloudinary.com/nuxt/image/upload/v1633987983/nuxt3-preview_rhh50t.png" }, { "hid": "og:image:alt", "property": "og:image:alt", "content": "Nuxt 3" }, { "hid": "twitter:image", "name": "twitter:image", "content": "https://res.cloudinary.com/nuxt/image/upload/v1633987983/nuxt3-preview_rhh50t.png" }, { "hid": "og:video", "name": "og:video", "content": "https://res.cloudinary.com/nuxt/video/upload/v1634114611/nuxt3-beta_sznsf8.mp4" }], "titleTemplate": "Nuxt 3 - %s", "style": [], "script": [] },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === "string") {
            transition = Object.assign({}, defaultTransition, { name: transition });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError$1(err) : null;
        let nuxt2 = app.nuxt;
        if (this) {
          nuxt2 = this.nuxt || this.$options.nuxt;
        }
        nuxt2.dateErr = Date.now();
        nuxt2.err = err;
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    }
  }, App);
  const next = ssrContext ? ssrContext.next : (location) => app.router.push(location);
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : void 0,
    req: ssrContext ? ssrContext.req : void 0,
    res: ssrContext ? ssrContext.res : void 0,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : void 0,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : void 0,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error("inject(key, value) has no key provided");
    }
    if (value === void 0) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = "$" + key;
    app[key] = value;
    if (!app.context[key]) {
      app.context[key] = value;
    }
    const installKey = "__nuxt_" + key + "_installed__";
    if (Vue__default["default"][installKey]) {
      return;
    }
    Vue__default["default"][installKey] = true;
    Vue__default["default"].use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue__default["default"].prototype, key)) {
        Object.defineProperty(Vue__default["default"].prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }
  inject("config", config);
  if (typeof nuxt_plugin_plugin_2f40fc0d === "function") {
    await nuxt_plugin_plugin_2f40fc0d(app.context);
  }
  if (typeof nuxt_plugin_pluginutils_769495f8 === "function") {
    await nuxt_plugin_pluginutils_769495f8(app.context);
  }
  if (typeof nuxt_plugin_pluginrouting_4c70f57a === "function") {
    await nuxt_plugin_pluginrouting_4c70f57a(app.context);
  }
  if (typeof nuxt_plugin_pluginmain_a05bb5e8 === "function") {
    await nuxt_plugin_pluginmain_a05bb5e8(app.context);
  }
  if (typeof nuxt_plugin_i18n_4d2fcc3e === "function") {
    await nuxt_plugin_i18n_4d2fcc3e(app.context, inject);
  }
  if (typeof globalPlugin === "function") {
    await globalPlugin(app.context);
  }
  if (typeof nuxt_plugin_pluginserver_35603a8e === "function") {
    await nuxt_plugin_pluginserver_35603a8e(app.context, inject);
  }
  if (typeof nuxt_plugin_index_3e5d0360 === "function") {
    await nuxt_plugin_index_3e5d0360(app.context, inject);
  }
  if (typeof nuxt_plugin_core_7cc41b1d === "function") {
    await nuxt_plugin_core_7cc41b1d(app.context, inject);
  }
  if (typeof nuxt_plugin_image_d73be0c4 === "function") {
    await nuxt_plugin_image_d73be0c4(app.context, inject);
  }
  if (typeof nuxt_plugin_metaplugin_71a979dc === "function") {
    await nuxt_plugin_metaplugin_71a979dc(app.context);
  }
  if (typeof nuxt_plugin_iconplugin_685a2ef4 === "function") {
    await nuxt_plugin_iconplugin_685a2ef4(app.context, inject);
  }
  if (typeof nuxt_plugin_menu_dffabbce === "function") {
    await nuxt_plugin_menu_dffabbce(app.context, inject);
  }
  if (typeof nuxt_plugin_mq_5d03b8cc === "function") {
    await nuxt_plugin_mq_5d03b8cc(app.context);
  }
  if (typeof setMetaPlugin === "function") {
    await setMetaPlugin(app.context);
  }
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      if (!err._isRouter)
        return reject(err);
      if (err.type !== 2)
        return resolve();
      const unregister = router.afterEach(async (to, from) => {
        if (ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}
var NuxtLink = {
  name: "NuxtLink",
  extends: Vue__default["default"].component("RouterLink"),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
};
Vue__default["default"].config.optionMergeStrategies.serverPrefetch = Vue__default["default"].config.optionMergeStrategies.created;
if (!Vue__default["default"].__nuxt__fetch__mixin__) {
  Vue__default["default"].mixin(fetchMixin);
  Vue__default["default"].__nuxt__fetch__mixin__ = true;
}
if (!Vue__default["default"].__original_use__) {
  Vue__default["default"].__original_use__ = Vue__default["default"].use;
  Vue__default["default"].__install_times__ = 0;
  Vue__default["default"].use = function(plugin2, ...args) {
    plugin2.__nuxt_external_installed__ = Vue__default["default"]._installedPlugins.includes(plugin2);
    return Vue__default["default"].__original_use__(plugin2, ...args);
  };
}
if (Vue__default["default"].__install_times__ === 2) {
  Vue__default["default"].__install_times__ = 0;
  Vue__default["default"]._installedPlugins = Vue__default["default"]._installedPlugins.filter((plugin2) => {
    return plugin2.__nuxt_external_installed__ === true;
  });
}
Vue__default["default"].__install_times__++;
Vue__default["default"].component(NuxtLink.name, NuxtLink);
Vue__default["default"].component("NLink", NuxtLink);
if (!global.fetch) {
  global.fetch = fetch__default["default"];
}
const noopApp = () => new Vue__default["default"]({ render: (h2) => h2("div", { domProps: { id: "__nuxt" } }) });
const createNext = (ssrContext) => (opts) => {
  ssrContext.redirected = opts;
  if (ssrContext.target === "static" || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = withQuery$1(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || "/";
  if (!fullPath.startsWith("http") && (routerBase !== "/" && !fullPath.startsWith(routerBase))) {
    fullPath = joinURL$1(routerBase, fullPath);
  }
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: normalizeURL(fullPath)
  });
  ssrContext.res.end();
};
var server = async (ssrContext) => {
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  ssrContext.beforeRenderFns = [];
  ssrContext.beforeSerializeFns = [];
  ssrContext.nuxt = { layout: "default", data: [], fetch: {}, error: null, serverRendered: true, routePath: "" };
  ssrContext.fetchCounters = {};
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    globalThis.__webpack_public_path__ = joinURL$1(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  const { app, router } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new Vue__default["default"](app);
  ssrContext.nuxt.routePath = app.context.route.path;
  ssrContext.meta = _app.$meta();
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    await Promise.all(ssrContext.beforeRenderFns.map((fn2) => promisify(fn2, { Components, nuxtState: ssrContext.nuxt })));
    ssrContext.rendered = () => {
      ssrContext.beforeSerializeFns.forEach((fn2) => fn2(ssrContext.nuxt));
    };
  };
  const renderErrorPage = async () => {
    if (ssrContext.target === "static") {
      ssrContext.nuxt.serverRendered = false;
    }
    const layout3 = (NuxtError.options || NuxtError).layout;
    const errLayout = typeof layout3 === "function" ? layout3.call(NuxtError, app.context) : layout3;
    ssrContext.nuxt.layout = errLayout || "default";
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({ statusCode: 404, path: ssrContext.url, message: "This page could not be found" });
    return renderErrorPage();
  };
  const Components = getMatchedComponents(app.context.route);
  let midd = ["nuxti18n"];
  midd = midd.map((name) => {
    if (typeof name === "function") {
      return name;
    }
    if (typeof middleware[name] !== "function") {
      app.context.error({ statusCode: 500, message: "Unknown middleware " + name });
    }
    return middleware[name];
  });
  await middlewareSeries(midd, app.context);
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  let layout2 = Components.length ? Components[0].options.layout : NuxtError.layout;
  if (typeof layout2 === "function") {
    layout2 = layout2(app.context);
  }
  await _app.loadLayout(layout2);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout2 = _app.setLayout(layout2);
  ssrContext.nuxt.layout = _app.layoutName;
  midd = [];
  layout2 = sanitizeComponent(layout2);
  if (layout2.options.middleware) {
    midd = midd.concat(layout2.options.middleware);
  }
  Components.forEach((Component) => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map((name) => {
    if (typeof name === "function") {
      return name;
    }
    if (typeof middleware[name] !== "function") {
      app.context.error({ statusCode: 500, message: "Unknown middleware " + name });
    }
    return middleware[name];
  });
  await middlewareSeries(midd, app.context);
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== "function") {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    app.context.error({
      statusCode: validationError.statusCode || "500",
      message: validationError.message
    });
    return renderErrorPage();
  }
  if (!isValid) {
    return render404Page();
  }
  if (!Components.length) {
    return render404Page();
  }
  const asyncDatas = await Promise.all(Components.map((Component) => {
    const promises = [];
    if (Component.options.asyncData && typeof Component.options.asyncData === "function") {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then((asyncDataResult) => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));
  ssrContext.nuxt.data = asyncDatas.map((r2) => r2[0] || {});
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  await beforeRender();
  return _app;
};
const __vue2_script = defineComponent$2({
  name: "PageSlug",
  middleware({ app, params, redirect }) {
    if (params.pathMatch === "index") {
      redirect(app.localePath("/"));
    }
  },
  async asyncData({ $docus, app: { i18n, localePath: localePath2 }, route, params, error: error2, redirect }) {
    var _a, _b;
    const language = i18n.locale;
    let templateOptions = __spreadValues({}, $docus.settings.value.layout);
    const to = withoutTrailingSlash(`/${params.pathMatch || ""}`) || "/";
    const draft = false;
    const [match] = await $docus.search({ deep: true }).where({ language, to, draft, page: { $ne: false } }).fetch();
    if (!match) {
      return error2({ statusCode: 404, message: "404 - Page not found" });
    }
    const page = await $docus.page(match.id);
    page.template = $docus.getPageTemplate(page);
    let component = Vue__default["default"].component(page.template);
    if (component) {
      try {
        if (typeof component === "function" && !component.options) {
          component = await component();
          if (!component.options) {
            component = Vue__default["default"].extend(component);
          }
        }
      } catch {
        component = new component({ props: { page } });
      }
      if (component.templateOptions || ((_a = component.$options) == null ? void 0 : _a.templateOptions)) {
        templateOptions = __spreadValues(__spreadValues({}, templateOptions), component.templateOptions || ((_b = component.$options) == null ? void 0 : _b.templateOptions));
      }
    }
    if (match.layout) {
      templateOptions = __spreadValues(__spreadValues({}, templateOptions), match.layout);
    }
    {
      $docus.layout.value = templateOptions;
      $docus.currentPage.value = page;
      $docus.currentPath.value = `/${route.params.pathMatch}`;
    }
    $docus.currentPage.value = page;
    if (page.navigation && page.navigation.redirect) {
      redirect(localePath2(page.navigation.redirect));
    }
    return { page, templateOptions };
  },
  head() {
    const head = __spreadValues({
      title: this.page.title,
      meta: []
    }, this.page.head || {});
    this.mergeMeta(head.meta, this.pageMeta);
    return head;
  },
  computed: {
    pageMeta() {
      return [
        { hid: "og:title", property: "og:title", content: this.page.title },
        { hid: "twitter:title", name: "twitter:title", content: this.page.title },
        ...this.page.description ? [
          {
            hid: "description",
            name: "description",
            content: this.page.description
          },
          {
            hid: "og:description",
            property: "og:description",
            content: this.page.description
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: this.page.description
          }
        ] : []
      ];
    }
  },
  created() {
  },
  mounted() {
    var _a;
    if ((_a = this.page) == null ? void 0 : _a.version) {
      localStorage.setItem(`page-${this.page.slug}-version`, this.page.version);
    }
  },
  methods: {
    mergeMeta(to, from) {
      from.forEach((newMeta) => {
        const key = newMeta.hid || newMeta.name || newMeta.property;
        const index2 = to.findIndex((meta2) => meta2.hid === key || meta2.name === key || meta2.property === key);
        if (index2 < 0) {
          to.push(newMeta);
        }
      });
    }
  },
  render(h2) {
    return h2(this.page.template, {
      props: {
        page: this.page
      }
    });
  }
});
let __vue2_render, __vue2_staticRenderFns;
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, __vue2_render, __vue2_staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o2 in __cssModules) {
    this[o2] = __cssModules[o2];
  }
}
__component__.options.__file = "node_modules/@docus/app/dist/app/pages/_.vue";
var _$1 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
var _$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _$1
});
/*! @docsearch/js 3.0.0-alpha.41 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function e(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function t(t3) {
  for (var n3 = 1; n3 < arguments.length; n3++) {
    var o2 = arguments[n3] != null ? arguments[n3] : {};
    n3 % 2 ? e(Object(o2), true).forEach(function(e2) {
      r(t3, e2, o2[e2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
      Object.defineProperty(t3, e2, Object.getOwnPropertyDescriptor(o2, e2));
    });
  }
  return t3;
}
function n(e2) {
  return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  })(e2);
}
function r(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function o() {
  return (o = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function c(e2, t3) {
  if (e2 == null)
    return {};
  var n3, r2, o2 = function(e3, t4) {
    if (e3 == null)
      return {};
    var n4, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n4 = c3[r3], t4.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
    return o3;
  }(e2, t3);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n3 = c2[r2], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
  }
  return o2;
}
function i(e2, t3) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t4) {
    var n3 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
    if (n3 == null)
      return;
    var r2, o2, c2 = [], i3 = true, a2 = false;
    try {
      for (n3 = n3.call(e3); !(i3 = (r2 = n3.next()).done) && (c2.push(r2.value), !t4 || c2.length !== t4); i3 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        i3 || n3.return == null || n3.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return c2;
  }(e2, t3) || u(e2, t3) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function a(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return l(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
      return Array.from(e3);
  }(e2) || u(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function u(e2, t3) {
  if (e2) {
    if (typeof e2 == "string")
      return l(e2, t3);
    var n3 = Object.prototype.toString.call(e2).slice(8, -1);
    return n3 === "Object" && e2.constructor && (n3 = e2.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(e2) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? l(e2, t3) : void 0;
  }
}
function l(e2, t3) {
  (t3 == null || t3 > e2.length) && (t3 = e2.length);
  for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
    r2[n3] = e2[n3];
  return r2;
}
var s, f, p, m, h, d = {}, v = [], _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function y(e2, t3) {
  for (var n3 in t3)
    e2[n3] = t3[n3];
  return e2;
}
function g(e2) {
  var t3 = e2.parentNode;
  t3 && t3.removeChild(e2);
}
function b(e2, t3, n3) {
  var r2, o2, c2, i3 = arguments, a2 = {};
  for (c2 in t3)
    c2 == "key" ? r2 = t3[c2] : c2 == "ref" ? o2 = t3[c2] : a2[c2] = t3[c2];
  if (arguments.length > 3)
    for (n3 = [n3], c2 = 3; c2 < arguments.length; c2++)
      n3.push(i3[c2]);
  if (n3 != null && (a2.children = n3), typeof e2 == "function" && e2.defaultProps != null)
    for (c2 in e2.defaultProps)
      a2[c2] === void 0 && (a2[c2] = e2.defaultProps[c2]);
  return O(e2, a2, r2, o2, null);
}
function O(e2, t3, n3, r2, o2) {
  var c2 = { type: e2, props: t3, key: n3, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++s.__v : o2 };
  return s.vnode != null && s.vnode(c2), c2;
}
function S(e2) {
  return e2.children;
}
function E(e2, t3) {
  this.props = e2, this.context = t3;
}
function w(e2, t3) {
  if (t3 == null)
    return e2.__ ? w(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
  for (var n3; t3 < e2.__k.length; t3++)
    if ((n3 = e2.__k[t3]) != null && n3.__e != null)
      return n3.__e;
  return typeof e2.type == "function" ? w(e2) : null;
}
function P(e2) {
  var t3, n3;
  if ((e2 = e2.__) != null && e2.__c != null) {
    for (e2.__e = e2.__c.base = null, t3 = 0; t3 < e2.__k.length; t3++)
      if ((n3 = e2.__k[t3]) != null && n3.__e != null) {
        e2.__e = e2.__c.base = n3.__e;
        break;
      }
    return P(e2);
  }
}
function j(e2) {
  (!e2.__d && (e2.__d = true) && f.push(e2) && !I.__r++ || m !== s.debounceRendering) && ((m = s.debounceRendering) || p)(I);
}
function I() {
  for (var e2; I.__r = f.length; )
    e2 = f.sort(function(e3, t3) {
      return e3.__v.__b - t3.__v.__b;
    }), f = [], e2.some(function(e3) {
      var t3, n3, r2, o2, c2, i3;
      e3.__d && (c2 = (o2 = (t3 = e3).__v).__e, (i3 = t3.__P) && (n3 = [], (r2 = y({}, o2)).__v = o2.__v + 1, H(i3, o2, r2, t3.__n, i3.ownerSVGElement !== void 0, o2.__h != null ? [c2] : null, n3, c2 == null ? w(o2) : c2, o2.__h), M(n3, o2), o2.__e != c2 && P(o2)));
    });
}
function D(e2, t3, n3, r2, o2, c2, i3, a2, u2, l2) {
  var s2, f2, p2, m2, h2, _2, y2, g2 = r2 && r2.__k || v, b2 = g2.length;
  for (n3.__k = [], s2 = 0; s2 < t3.length; s2++)
    if ((m2 = n3.__k[s2] = (m2 = t3[s2]) == null || typeof m2 == "boolean" ? null : typeof m2 == "string" || typeof m2 == "number" ? O(null, m2, null, null, m2) : Array.isArray(m2) ? O(S, { children: m2 }, null, null, null) : m2.__b > 0 ? O(m2.type, m2.props, m2.key, null, m2.__v) : m2) != null) {
      if (m2.__ = n3, m2.__b = n3.__b + 1, (p2 = g2[s2]) === null || p2 && m2.key == p2.key && m2.type === p2.type)
        g2[s2] = void 0;
      else
        for (f2 = 0; f2 < b2; f2++) {
          if ((p2 = g2[f2]) && m2.key == p2.key && m2.type === p2.type) {
            g2[f2] = void 0;
            break;
          }
          p2 = null;
        }
      H(e2, m2, p2 = p2 || d, o2, c2, i3, a2, u2, l2), h2 = m2.__e, (f2 = m2.ref) && p2.ref != f2 && (y2 || (y2 = []), p2.ref && y2.push(p2.ref, null, m2), y2.push(f2, m2.__c || h2, m2)), h2 != null ? (_2 == null && (_2 = h2), typeof m2.type == "function" && m2.__k != null && m2.__k === p2.__k ? m2.__d = u2 = k(m2, u2, e2) : u2 = N(e2, m2, p2, g2, h2, u2), l2 || n3.type !== "option" ? typeof n3.type == "function" && (n3.__d = u2) : e2.value = "") : u2 && p2.__e == u2 && u2.parentNode != e2 && (u2 = w(p2));
    }
  for (n3.__e = _2, s2 = b2; s2--; )
    g2[s2] != null && (typeof n3.type == "function" && g2[s2].__e != null && g2[s2].__e == n3.__d && (n3.__d = w(r2, s2 + 1)), U(g2[s2], g2[s2]));
  if (y2)
    for (s2 = 0; s2 < y2.length; s2++)
      L(y2[s2], y2[++s2], y2[++s2]);
}
function k(e2, t3, n3) {
  var r2, o2;
  for (r2 = 0; r2 < e2.__k.length; r2++)
    (o2 = e2.__k[r2]) && (o2.__ = e2, t3 = typeof o2.type == "function" ? k(o2, t3, n3) : N(n3, o2, o2, e2.__k, o2.__e, t3));
  return t3;
}
function C(e2, t3) {
  return t3 = t3 || [], e2 == null || typeof e2 == "boolean" || (Array.isArray(e2) ? e2.some(function(e3) {
    C(e3, t3);
  }) : t3.push(e2)), t3;
}
function N(e2, t3, n3, r2, o2, c2) {
  var i3, a2, u2;
  if (t3.__d !== void 0)
    i3 = t3.__d, t3.__d = void 0;
  else if (n3 == null || o2 != c2 || o2.parentNode == null)
    e:
      if (c2 == null || c2.parentNode !== e2)
        e2.appendChild(o2), i3 = null;
      else {
        for (a2 = c2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2)
          if (a2 == o2)
            break e;
        e2.insertBefore(o2, c2), i3 = c2;
      }
  return i3 !== void 0 ? i3 : o2.nextSibling;
}
function A(e2, t3, n3) {
  t3[0] === "-" ? e2.setProperty(t3, n3) : e2[t3] = n3 == null ? "" : typeof n3 != "number" || _.test(t3) ? n3 : n3 + "px";
}
function x(e2, t3, n3, r2, o2) {
  var c2;
  e:
    if (t3 === "style")
      if (typeof n3 == "string")
        e2.style.cssText = n3;
      else {
        if (typeof r2 == "string" && (e2.style.cssText = r2 = ""), r2)
          for (t3 in r2)
            n3 && t3 in n3 || A(e2.style, t3, "");
        if (n3)
          for (t3 in n3)
            r2 && n3[t3] === r2[t3] || A(e2.style, t3, n3[t3]);
      }
    else if (t3[0] === "o" && t3[1] === "n")
      c2 = t3 !== (t3 = t3.replace(/Capture$/, "")), t3 = t3.toLowerCase() in e2 ? t3.toLowerCase().slice(2) : t3.slice(2), e2.l || (e2.l = {}), e2.l[t3 + c2] = n3, n3 ? r2 || e2.addEventListener(t3, c2 ? T : R, c2) : e2.removeEventListener(t3, c2 ? T : R, c2);
    else if (t3 !== "dangerouslySetInnerHTML") {
      if (o2)
        t3 = t3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (t3 !== "href" && t3 !== "list" && t3 !== "form" && t3 !== "download" && t3 in e2)
        try {
          e2[t3] = n3 == null ? "" : n3;
          break e;
        } catch (e3) {
        }
      typeof n3 == "function" || (n3 != null && (n3 !== false || t3[0] === "a" && t3[1] === "r") ? e2.setAttribute(t3, n3) : e2.removeAttribute(t3));
    }
}
function R(e2) {
  this.l[e2.type + false](s.event ? s.event(e2) : e2);
}
function T(e2) {
  this.l[e2.type + true](s.event ? s.event(e2) : e2);
}
function H(e2, t3, n3, r2, o2, c2, i3, a2, u2) {
  var l2, f2, p2, m2, h2, d3, v2, _2, g2, b2, O2, w2 = t3.type;
  if (t3.constructor !== void 0)
    return null;
  n3.__h != null && (u2 = n3.__h, a2 = t3.__e = n3.__e, t3.__h = null, c2 = [a2]), (l2 = s.__b) && l2(t3);
  try {
    e:
      if (typeof w2 == "function") {
        if (_2 = t3.props, g2 = (l2 = w2.contextType) && r2[l2.__c], b2 = l2 ? g2 ? g2.props.value : l2.__ : r2, n3.__c ? v2 = (f2 = t3.__c = n3.__c).__ = f2.__E : ("prototype" in w2 && w2.prototype.render ? t3.__c = f2 = new w2(_2, b2) : (t3.__c = f2 = new E(_2, b2), f2.constructor = w2, f2.render = F), g2 && g2.sub(f2), f2.props = _2, f2.state || (f2.state = {}), f2.context = b2, f2.__n = r2, p2 = f2.__d = true, f2.__h = []), f2.__s == null && (f2.__s = f2.state), w2.getDerivedStateFromProps != null && (f2.__s == f2.state && (f2.__s = y({}, f2.__s)), y(f2.__s, w2.getDerivedStateFromProps(_2, f2.__s))), m2 = f2.props, h2 = f2.state, p2)
          w2.getDerivedStateFromProps == null && f2.componentWillMount != null && f2.componentWillMount(), f2.componentDidMount != null && f2.__h.push(f2.componentDidMount);
        else {
          if (w2.getDerivedStateFromProps == null && _2 !== m2 && f2.componentWillReceiveProps != null && f2.componentWillReceiveProps(_2, b2), !f2.__e && f2.shouldComponentUpdate != null && f2.shouldComponentUpdate(_2, f2.__s, b2) === false || t3.__v === n3.__v) {
            f2.props = _2, f2.state = f2.__s, t3.__v !== n3.__v && (f2.__d = false), f2.__v = t3, t3.__e = n3.__e, t3.__k = n3.__k, f2.__h.length && i3.push(f2);
            break e;
          }
          f2.componentWillUpdate != null && f2.componentWillUpdate(_2, f2.__s, b2), f2.componentDidUpdate != null && f2.__h.push(function() {
            f2.componentDidUpdate(m2, h2, d3);
          });
        }
        f2.context = b2, f2.props = _2, f2.state = f2.__s, (l2 = s.__r) && l2(t3), f2.__d = false, f2.__v = t3, f2.__P = e2, l2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, f2.getChildContext != null && (r2 = y(y({}, r2), f2.getChildContext())), p2 || f2.getSnapshotBeforeUpdate == null || (d3 = f2.getSnapshotBeforeUpdate(m2, h2)), O2 = l2 != null && l2.type === S && l2.key == null ? l2.props.children : l2, D(e2, Array.isArray(O2) ? O2 : [O2], t3, n3, r2, o2, c2, i3, a2, u2), f2.base = t3.__e, t3.__h = null, f2.__h.length && i3.push(f2), v2 && (f2.__E = f2.__ = null), f2.__e = false;
      } else
        c2 == null && t3.__v === n3.__v ? (t3.__k = n3.__k, t3.__e = n3.__e) : t3.__e = q(n3.__e, t3, n3, r2, o2, c2, i3, u2);
    (l2 = s.diffed) && l2(t3);
  } catch (e3) {
    t3.__v = null, (u2 || c2 != null) && (t3.__e = a2, t3.__h = !!u2, c2[c2.indexOf(a2)] = null), s.__e(e3, t3, n3);
  }
}
function M(e2, t3) {
  s.__c && s.__c(t3, e2), e2.some(function(t4) {
    try {
      e2 = t4.__h, t4.__h = [], e2.some(function(e3) {
        e3.call(t4);
      });
    } catch (e3) {
      s.__e(e3, t4.__v);
    }
  });
}
function q(e2, t3, n3, r2, o2, c2, i3, a2) {
  var u2, l2, s2, f2, p2 = n3.props, m2 = t3.props, h2 = t3.type, _2 = 0;
  if (h2 === "svg" && (o2 = true), c2 != null) {
    for (; _2 < c2.length; _2++)
      if ((u2 = c2[_2]) && (u2 === e2 || (h2 ? u2.localName == h2 : u2.nodeType == 3))) {
        e2 = u2, c2[_2] = null;
        break;
      }
  }
  if (e2 == null) {
    if (h2 === null)
      return document.createTextNode(m2);
    e2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", h2) : document.createElement(h2, m2.is && m2), c2 = null, a2 = false;
  }
  if (h2 === null)
    p2 === m2 || a2 && e2.data === m2 || (e2.data = m2);
  else {
    if (c2 = c2 && v.slice.call(e2.childNodes), l2 = (p2 = n3.props || d).dangerouslySetInnerHTML, s2 = m2.dangerouslySetInnerHTML, !a2) {
      if (c2 != null)
        for (p2 = {}, f2 = 0; f2 < e2.attributes.length; f2++)
          p2[e2.attributes[f2].name] = e2.attributes[f2].value;
      (s2 || l2) && (s2 && (l2 && s2.__html == l2.__html || s2.__html === e2.innerHTML) || (e2.innerHTML = s2 && s2.__html || ""));
    }
    if (function(e3, t4, n4, r3, o3) {
      var c3;
      for (c3 in n4)
        c3 === "children" || c3 === "key" || c3 in t4 || x(e3, c3, null, n4[c3], r3);
      for (c3 in t4)
        o3 && typeof t4[c3] != "function" || c3 === "children" || c3 === "key" || c3 === "value" || c3 === "checked" || n4[c3] === t4[c3] || x(e3, c3, t4[c3], n4[c3], r3);
    }(e2, m2, p2, o2, a2), s2)
      t3.__k = [];
    else if (_2 = t3.props.children, D(e2, Array.isArray(_2) ? _2 : [_2], t3, n3, r2, o2 && h2 !== "foreignObject", c2, i3, e2.firstChild, a2), c2 != null)
      for (_2 = c2.length; _2--; )
        c2[_2] != null && g(c2[_2]);
    a2 || ("value" in m2 && (_2 = m2.value) !== void 0 && (_2 !== e2.value || h2 === "progress" && !_2) && x(e2, "value", _2, p2.value, false), "checked" in m2 && (_2 = m2.checked) !== void 0 && _2 !== e2.checked && x(e2, "checked", _2, p2.checked, false));
  }
  return e2;
}
function L(e2, t3, n3) {
  try {
    typeof e2 == "function" ? e2(t3) : e2.current = t3;
  } catch (e3) {
    s.__e(e3, n3);
  }
}
function U(e2, t3, n3) {
  var r2, o2, c2;
  if (s.unmount && s.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || L(r2, null, t3)), n3 || typeof e2.type == "function" || (n3 = (o2 = e2.__e) != null), e2.__e = e2.__d = void 0, (r2 = e2.__c) != null) {
    if (r2.componentWillUnmount)
      try {
        r2.componentWillUnmount();
      } catch (e3) {
        s.__e(e3, t3);
      }
    r2.base = r2.__P = null;
  }
  if (r2 = e2.__k)
    for (c2 = 0; c2 < r2.length; c2++)
      r2[c2] && U(r2[c2], t3, n3);
  o2 != null && g(o2);
}
function F(e2, t3, n3) {
  return this.constructor(e2, n3);
}
function V(e2, t3, n3) {
  var r2, o2, c2;
  s.__ && s.__(e2, t3), o2 = (r2 = typeof n3 == "function") ? null : n3 && n3.__k || t3.__k, c2 = [], H(t3, e2 = (!r2 && n3 || t3).__k = b(S, null, [e2]), o2 || d, d, t3.ownerSVGElement !== void 0, !r2 && n3 ? [n3] : o2 ? null : t3.firstChild ? v.slice.call(t3.childNodes) : null, c2, !r2 && n3 ? n3 : o2 ? o2.__e : t3.firstChild, r2), M(c2, e2);
}
function B(e2, t3) {
  V(e2, t3, B);
}
function z(e2, t3, n3) {
  var r2, o2, c2, i3 = arguments, a2 = y({}, e2.props);
  for (c2 in t3)
    c2 == "key" ? r2 = t3[c2] : c2 == "ref" ? o2 = t3[c2] : a2[c2] = t3[c2];
  if (arguments.length > 3)
    for (n3 = [n3], c2 = 3; c2 < arguments.length; c2++)
      n3.push(i3[c2]);
  return n3 != null && (a2.children = n3), O(e2.type, a2, r2 || e2.key, o2 || e2.ref, null);
}
s = { __e: function(e2, t3) {
  for (var n3, r2, o2; t3 = t3.__; )
    if ((n3 = t3.__c) && !n3.__)
      try {
        if ((r2 = n3.constructor) && r2.getDerivedStateFromError != null && (n3.setState(r2.getDerivedStateFromError(e2)), o2 = n3.__d), n3.componentDidCatch != null && (n3.componentDidCatch(e2), o2 = n3.__d), o2)
          return n3.__E = n3;
      } catch (t4) {
        e2 = t4;
      }
  throw e2;
}, __v: 0 }, E.prototype.setState = function(e2, t3) {
  var n3;
  n3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = y({}, this.state), typeof e2 == "function" && (e2 = e2(y({}, n3), this.props)), e2 && y(n3, e2), e2 != null && this.__v && (t3 && this.__h.push(t3), j(this));
}, E.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), j(this));
}, E.prototype.render = S, f = [], p = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I.__r = 0, h = 0;
var W, K, J, $ = 0, Q = [], Y = s.__b, G = s.__r, Z = s.diffed, X = s.__c, ee = s.unmount;
function te(e2, t3) {
  s.__h && s.__h(K, e2, $ || t3), $ = 0;
  var n3 = K.__H || (K.__H = { __: [], __h: [] });
  return e2 >= n3.__.length && n3.__.push({}), n3.__[e2];
}
function ne(e2, t3, n3) {
  var r2 = te(W++, 2);
  return r2.t = e2, r2.__c || (r2.__ = [n3 ? n3(t3) : se(void 0, t3), function(e3) {
    var t4 = r2.t(r2.__[0], e3);
    r2.__[0] !== t4 && (r2.__ = [t4, r2.__[1]], r2.__c.setState({}));
  }], r2.__c = K), r2.__;
}
function re(e2, t3) {
  var n3 = te(W++, 4);
  !s.__s && le(n3.__H, t3) && (n3.__ = e2, n3.__H = t3, K.__h.push(n3));
}
function oe(e2, t3) {
  var n3 = te(W++, 7);
  return le(n3.__H, t3) && (n3.__ = e2(), n3.__H = t3, n3.__h = e2), n3.__;
}
function ce() {
  Q.forEach(function(e2) {
    if (e2.__P)
      try {
        e2.__H.__h.forEach(ae), e2.__H.__h.forEach(ue), e2.__H.__h = [];
      } catch (t3) {
        e2.__H.__h = [], s.__e(t3, e2.__v);
      }
  }), Q = [];
}
s.__b = function(e2) {
  K = null, Y && Y(e2);
}, s.__r = function(e2) {
  G && G(e2), W = 0;
  var t3 = (K = e2.__c).__H;
  t3 && (t3.__h.forEach(ae), t3.__h.forEach(ue), t3.__h = []);
}, s.diffed = function(e2) {
  Z && Z(e2);
  var t3 = e2.__c;
  t3 && t3.__H && t3.__H.__h.length && (Q.push(t3) !== 1 && J === s.requestAnimationFrame || ((J = s.requestAnimationFrame) || function(e3) {
    var t4, n3 = function() {
      clearTimeout(r2), ie && cancelAnimationFrame(t4), setTimeout(e3);
    }, r2 = setTimeout(n3, 100);
    ie && (t4 = requestAnimationFrame(n3));
  })(ce)), K = void 0;
}, s.__c = function(e2, t3) {
  t3.some(function(e3) {
    try {
      e3.__h.forEach(ae), e3.__h = e3.__h.filter(function(e4) {
        return !e4.__ || ue(e4);
      });
    } catch (n3) {
      t3.some(function(e4) {
        e4.__h && (e4.__h = []);
      }), t3 = [], s.__e(n3, e3.__v);
    }
  }), X && X(e2, t3);
}, s.unmount = function(e2) {
  ee && ee(e2);
  var t3 = e2.__c;
  if (t3 && t3.__H)
    try {
      t3.__H.__.forEach(ae);
    } catch (e3) {
      s.__e(e3, t3.__v);
    }
};
var ie = typeof requestAnimationFrame == "function";
function ae(e2) {
  var t3 = K;
  typeof e2.__c == "function" && e2.__c(), K = t3;
}
function ue(e2) {
  var t3 = K;
  e2.__c = e2.__(), K = t3;
}
function le(e2, t3) {
  return !e2 || e2.length !== t3.length || t3.some(function(t4, n3) {
    return t4 !== e2[n3];
  });
}
function se(e2, t3) {
  return typeof t3 == "function" ? t3(e2) : t3;
}
function fe(e2, t3) {
  for (var n3 in t3)
    e2[n3] = t3[n3];
  return e2;
}
function pe(e2, t3) {
  for (var n3 in e2)
    if (n3 !== "__source" && !(n3 in t3))
      return true;
  for (var r2 in t3)
    if (r2 !== "__source" && e2[r2] !== t3[r2])
      return true;
  return false;
}
function me(e2) {
  this.props = e2;
}
(me.prototype = new E()).isPureReactComponent = true, me.prototype.shouldComponentUpdate = function(e2, t3) {
  return pe(this.props, e2) || pe(this.state, t3);
};
var he = s.__b;
s.__b = function(e2) {
  e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), he && he(e2);
};
var de = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var ve = function(e2, t3) {
  return e2 == null ? null : C(C(e2).map(t3));
}, _e = { map: ve, forEach: ve, count: function(e2) {
  return e2 ? C(e2).length : 0;
}, only: function(e2) {
  var t3 = C(e2);
  if (t3.length !== 1)
    throw "Children.only";
  return t3[0];
}, toArray: C }, ye = s.__e;
function ge() {
  this.__u = 0, this.t = null, this.__b = null;
}
function be(e2) {
  var t3 = e2.__.__c;
  return t3 && t3.__e && t3.__e(e2);
}
function Oe() {
  this.u = null, this.o = null;
}
s.__e = function(e2, t3, n3) {
  if (e2.then) {
    for (var r2, o2 = t3; o2 = o2.__; )
      if ((r2 = o2.__c) && r2.__c)
        return t3.__e == null && (t3.__e = n3.__e, t3.__k = n3.__k), r2.__c(e2, t3);
  }
  ye(e2, t3, n3);
}, (ge.prototype = new E()).__c = function(e2, t3) {
  var n3 = t3.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(n3);
  var o2 = be(r2.__v), c2 = false, i3 = function() {
    c2 || (c2 = true, n3.componentWillUnmount = n3.__c, o2 ? o2(a2) : a2());
  };
  n3.__c = n3.componentWillUnmount, n3.componentWillUnmount = function() {
    i3(), n3.__c && n3.__c();
  };
  var a2 = function() {
    if (!--r2.__u) {
      if (r2.state.__e) {
        var e3 = r2.state.__e;
        r2.__v.__k[0] = function e4(t5, n4, r3) {
          return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
            return e4(t6, n4, r3);
          }), t5.__c && t5.__c.__P === n4 && (t5.__e && r3.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r3)), t5;
        }(e3, e3.__c.__P, e3.__c.__O);
      }
      var t4;
      for (r2.setState({ __e: r2.__b = null }); t4 = r2.t.pop(); )
        t4.forceUpdate();
    }
  }, u2 = t3.__h === true;
  r2.__u++ || u2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), e2.then(i3, i3);
}, ge.prototype.componentWillUnmount = function() {
  this.t = [];
}, ge.prototype.render = function(e2, t3) {
  if (this.__b) {
    if (this.__v.__k) {
      var n3 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function e3(t4, n4, r3) {
        return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(e4) {
          typeof e4.__c == "function" && e4.__c();
        }), t4.__c.__H = null), (t4 = fe({}, t4)).__c != null && (t4.__c.__P === r3 && (t4.__c.__P = n4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
          return e3(t5, n4, r3);
        })), t4;
      }(this.__b, n3, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var o2 = t3.__e && b(S, null, e2.fallback);
  return o2 && (o2.__h = null), [b(S, null, t3.__e ? null : e2.children), o2];
};
var Se = function(e2, t3, n3) {
  if (++n3[1] === n3[0] && e2.o.delete(t3), e2.props.revealOrder && (e2.props.revealOrder[0] !== "t" || !e2.o.size))
    for (n3 = e2.u; n3; ) {
      for (; n3.length > 3; )
        n3.pop()();
      if (n3[1] < n3[0])
        break;
      e2.u = n3 = n3[2];
    }
};
function Ee(e2) {
  return this.getChildContext = function() {
    return e2.context;
  }, e2.children;
}
function we(e2) {
  var t3 = this, n3 = e2.i;
  t3.componentWillUnmount = function() {
    V(null, t3.l), t3.l = null, t3.i = null;
  }, t3.i && t3.i !== n3 && t3.componentWillUnmount(), e2.__v ? (t3.l || (t3.i = n3, t3.l = { nodeType: 1, parentNode: n3, childNodes: [], appendChild: function(e3) {
    this.childNodes.push(e3), t3.i.appendChild(e3);
  }, insertBefore: function(e3, n4) {
    this.childNodes.push(e3), t3.i.appendChild(e3);
  }, removeChild: function(e3) {
    this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t3.i.removeChild(e3);
  } }), V(b(Ee, { context: t3.context }, e2.__v), t3.l)) : t3.l && t3.componentWillUnmount();
}
function Pe(e2, t3) {
  return b(we, { __v: e2, i: t3 });
}
(Oe.prototype = new E()).__e = function(e2) {
  var t3 = this, n3 = be(t3.__v), r2 = t3.o.get(e2);
  return r2[0]++, function(o2) {
    var c2 = function() {
      t3.props.revealOrder ? (r2.push(o2), Se(t3, e2, r2)) : o2();
    };
    n3 ? n3(c2) : c2();
  };
}, Oe.prototype.render = function(e2) {
  this.u = null, this.o = new Map();
  var t3 = C(e2.children);
  e2.revealOrder && e2.revealOrder[0] === "b" && t3.reverse();
  for (var n3 = t3.length; n3--; )
    this.o.set(t3[n3], this.u = [1, 0, this.u]);
  return e2.children;
}, Oe.prototype.componentDidUpdate = Oe.prototype.componentDidMount = function() {
  var e2 = this;
  this.o.forEach(function(t3, n3) {
    Se(e2, n3, t3);
  });
};
var je = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, Ie = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, De = function(e2) {
  return (typeof Symbol != "undefined" && n(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e2);
};
function ke(e2, t3, n3) {
  return t3.__k == null && (t3.textContent = ""), V(e2, t3), typeof n3 == "function" && n3(), e2 ? e2.__c : null;
}
E.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
  Object.defineProperty(E.prototype, e2, { configurable: true, get: function() {
    return this["UNSAFE_" + e2];
  }, set: function(t3) {
    Object.defineProperty(this, e2, { configurable: true, writable: true, value: t3 });
  } });
});
var Ce = s.event;
function Ne() {
}
function Ae() {
  return this.cancelBubble;
}
function xe() {
  return this.defaultPrevented;
}
s.event = function(e2) {
  return Ce && (e2 = Ce(e2)), e2.persist = Ne, e2.isPropagationStopped = Ae, e2.isDefaultPrevented = xe, e2.nativeEvent = e2;
};
var Re, Te = { configurable: true, get: function() {
  return this.class;
} }, He = s.vnode;
s.vnode = function(e2) {
  var t3 = e2.type, n3 = e2.props, r2 = n3;
  if (typeof t3 == "string") {
    for (var o2 in r2 = {}, n3) {
      var c2 = n3[o2];
      o2 === "value" && "defaultValue" in n3 && c2 == null || (o2 === "defaultValue" && "value" in n3 && n3.value == null ? o2 = "value" : o2 === "download" && c2 === true ? c2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t3) && !De(n3.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : Ie.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : c2 === null && (c2 = void 0), r2[o2] = c2);
    }
    t3 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = C(n3.children).forEach(function(e3) {
      e3.props.selected = r2.value.indexOf(e3.props.value) != -1;
    })), t3 == "select" && r2.defaultValue != null && (r2.value = C(n3.children).forEach(function(e3) {
      e3.props.selected = r2.multiple ? r2.defaultValue.indexOf(e3.props.value) != -1 : r2.defaultValue == e3.props.value;
    })), e2.props = r2;
  }
  t3 && n3.class != n3.className && (Te.enumerable = "className" in n3, n3.className != null && (r2.class = n3.className), Object.defineProperty(r2, "className", Te)), e2.$$typeof = je, He && He(e2);
};
var Me = s.__r;
s.__r = function(e2) {
  Me && Me(e2), Re = e2.__c;
};
var qe = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
  return Re.__n[e2.__c].props.value;
} } } };
(typeof performance == "undefined" ? "undefined" : n(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
function Le(e2) {
  return !!e2 && e2.$$typeof === je;
}
var Ue = { useState: function(e2) {
  return $ = 1, ne(se, e2);
}, useReducer: ne, useEffect: function(e2, t3) {
  var n3 = te(W++, 3);
  !s.__s && le(n3.__H, t3) && (n3.__ = e2, n3.__H = t3, K.__H.__h.push(n3));
}, useLayoutEffect: re, useRef: function(e2) {
  return $ = 5, oe(function() {
    return { current: e2 };
  }, []);
}, useImperativeHandle: function(e2, t3, n3) {
  $ = 6, re(function() {
    typeof e2 == "function" ? e2(t3()) : e2 && (e2.current = t3());
  }, n3 == null ? n3 : n3.concat(e2));
}, useMemo: oe, useCallback: function(e2, t3) {
  return $ = 8, oe(function() {
    return e2;
  }, t3);
}, useContext: function(e2) {
  var t3 = K.context[e2.__c], n3 = te(W++, 9);
  return n3.__c = e2, t3 ? (n3.__ == null && (n3.__ = true, t3.sub(K)), t3.props.value) : e2.__;
}, useDebugValue: function(e2, t3) {
  s.useDebugValue && s.useDebugValue(t3 ? t3(e2) : e2);
}, version: "16.8.0", Children: _e, render: ke, hydrate: function(e2, t3, n3) {
  return B(e2, t3), typeof n3 == "function" && n3(), e2 ? e2.__c : null;
}, unmountComponentAtNode: function(e2) {
  return !!e2.__k && (V(null, e2), true);
}, createPortal: Pe, createElement: b, createContext: function(e2, t3) {
  var n3 = { __c: t3 = "__cC" + h++, __: e2, Consumer: function(e3, t4) {
    return e3.children(t4);
  }, Provider: function(e3) {
    var n4, r2;
    return this.getChildContext || (n4 = [], (r2 = {})[t3] = this, this.getChildContext = function() {
      return r2;
    }, this.shouldComponentUpdate = function(e4) {
      this.props.value !== e4.value && n4.some(j);
    }, this.sub = function(e4) {
      n4.push(e4);
      var t4 = e4.componentWillUnmount;
      e4.componentWillUnmount = function() {
        n4.splice(n4.indexOf(e4), 1), t4 && t4.call(e4);
      };
    }), e3.children;
  } };
  return n3.Provider.__ = n3.Consumer.contextType = n3;
}, createFactory: function(e2) {
  return b.bind(null, e2);
}, cloneElement: function(e2) {
  return Le(e2) ? z.apply(null, arguments) : e2;
}, createRef: function() {
  return { current: null };
}, Fragment: S, isValidElement: Le, findDOMNode: function(e2) {
  return e2 && (e2.base || e2.nodeType === 1 && e2) || null;
}, Component: E, PureComponent: me, memo: function(e2, t3) {
  function n3(e3) {
    var n4 = this.props.ref, r3 = n4 == e3.ref;
    return !r3 && n4 && (n4.call ? n4(null) : n4.current = null), t3 ? !t3(this.props, e3) || !r3 : pe(this.props, e3);
  }
  function r2(t4) {
    return this.shouldComponentUpdate = n3, b(e2, t4);
  }
  return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}, forwardRef: function(e2) {
  function t3(t4, r2) {
    var o2 = fe({}, t4);
    return delete o2.ref, e2(o2, (r2 = t4.ref || r2) && (n(r2) != "object" || "current" in r2) ? r2 : null);
  }
  return t3.$$typeof = de, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t3;
}, unstable_batchedUpdates: function(e2, t3) {
  return e2(t3);
}, StrictMode: S, Suspense: ge, SuspenseList: Oe, lazy: function(e2) {
  var t3, n3, r2;
  function o2(o3) {
    if (t3 || (t3 = e2()).then(function(e3) {
      n3 = e3.default || e3;
    }, function(e3) {
      r2 = e3;
    }), r2)
      throw r2;
    if (!n3)
      throw t3;
    return b(n3, o3);
  }
  return o2.displayName = "Lazy", o2.__f = true, o2;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qe };
function Fe() {
  return Ue.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, Ue.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
}
function Ve() {
  return Ue.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function Be() {
  return (Be = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function ze(e2, t3) {
  if (e2 == null)
    return {};
  var n3, r2, o2 = function(e3, t4) {
    if (e3 == null)
      return {};
    var n4, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n4 = c3[r3], t4.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
    return o3;
  }(e2, t3);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n3 = c2[r2], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
  }
  return o2;
}
var We = Ue.forwardRef(function(e2, t3) {
  var n3 = e2.translations, r2 = n3 === void 0 ? {} : n3, o2 = ze(e2, ["translations"]), c2 = r2.buttonText, i3 = c2 === void 0 ? "Search" : c2, a2 = r2.buttonAriaLabel, u2 = a2 === void 0 ? "Search" : a2, l2 = oe(function() {
    return null;
  }, []);
  return Ue.createElement("button", Be({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t3 }), Ue.createElement("span", { className: "DocSearch-Button-Container" }, Ue.createElement(Ve, null), Ue.createElement("span", { className: "DocSearch-Button-Placeholder" }, i3)), Ue.createElement("span", { className: "DocSearch-Button-Keys" }, l2 !== null && Ue.createElement(Ue.Fragment, null, Ue.createElement("span", { className: "DocSearch-Button-Key" }, l2 === "Ctrl" ? Ue.createElement(Fe, null) : l2), Ue.createElement("span", { className: "DocSearch-Button-Key" }, "K"))));
}), Ke = 0;
function Je(e2) {
  return e2.collections.length === 0 ? 0 : e2.collections.reduce(function(e3, t3) {
    return e3 + t3.items.length;
  }, 0);
}
function $e(e2, t3) {
  if (!e2)
    throw new Error("[Autocomplete] ".concat(t3));
}
var Qe = { current: {} };
function Ye(e2) {
  (function(e3, t3) {
    if (!e3) {
      var n3 = t3.trim();
      Qe.current[n3] || (Qe.current[n3] = true, console.warn("[Autocomplete] ".concat(n3)));
    }
  })(!e2.debug, "The `debug` option is meant for development debugging and should not be used in production.");
}
function Ge(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function Ze(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function Xe(e2, t3, n3) {
  var r2 = t3.initialState;
  return { getState: function() {
    return r2;
  }, dispatch: function(o2, c2) {
    var i3 = function(e3) {
      for (var t4 = 1; t4 < arguments.length; t4++) {
        var n4 = arguments[t4] != null ? arguments[t4] : {};
        t4 % 2 ? Ge(Object(n4), true).forEach(function(t5) {
          Ze(e3, t5, n4[t5]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n4)) : Ge(Object(n4)).forEach(function(t5) {
          Object.defineProperty(e3, t5, Object.getOwnPropertyDescriptor(n4, t5));
        });
      }
      return e3;
    }({}, r2);
    r2 = e2(r2, { type: o2, props: t3, payload: c2 }), n3({ state: r2, prevState: i3 });
  } };
}
function et(e2) {
  return e2.reduce(function(e3, t3) {
    return e3.concat(t3);
  }, []);
}
function tt(e2, t3, n3, r2) {
  if (!n3)
    return null;
  if (e2 < 0 && (t3 === null || r2 !== null && t3 === 0))
    return n3 + e2;
  var o2 = (t3 === null ? -1 : t3) + e2;
  return o2 <= -1 || o2 >= n3 ? r2 === null ? null : 0 : o2;
}
var nt = function() {
};
function rt(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function ot(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function ct(e2) {
  return (ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  })(e2);
}
function it(e2, t3) {
  var n3 = [];
  return Promise.resolve(e2(t3)).then(function(e3) {
    return $e(Array.isArray(e3), "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(ct(e3)), ":\n\n").concat(JSON.stringify(e3, null, 2))), Promise.all(e3.filter(function(e4) {
      return Boolean(e4);
    }).map(function(e4) {
      if ($e(typeof e4.sourceId == "string", "A source must provide a `sourceId` string."), n3.includes(e4.sourceId))
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e4.sourceId), " is not unique."));
      n3.push(e4.sourceId);
      var t4 = function(e5) {
        for (var t5 = 1; t5 < arguments.length; t5++) {
          var n4 = arguments[t5] != null ? arguments[t5] : {};
          t5 % 2 ? rt(Object(n4), true).forEach(function(t6) {
            ot(e5, t6, n4[t6]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n4)) : rt(Object(n4)).forEach(function(t6) {
            Object.defineProperty(e5, t6, Object.getOwnPropertyDescriptor(n4, t6));
          });
        }
        return e5;
      }({ getItemInputValue: function(e5) {
        return e5.state.query;
      }, getItemUrl: function() {
      }, onSelect: function(e5) {
        (0, e5.setIsOpen)(false);
      }, onActive: nt }, e4);
      return Promise.resolve(t4);
    }));
  });
}
function at(e2) {
  var t3 = function(e3) {
    var t4 = e3.collections.map(function(e4) {
      return e4.items.length;
    }).reduce(function(e4, t5, n4) {
      var r3 = (e4[n4 - 1] || 0) + t5;
      return e4.push(r3), e4;
    }, []).reduce(function(t5, n4) {
      return n4 <= e3.activeItemId ? t5 + 1 : t5;
    }, 0);
    return e3.collections[t4];
  }(e2);
  if (!t3)
    return null;
  var n3 = t3.items[function(e3) {
    for (var t4 = e3.state, n4 = e3.collection, r3 = false, o2 = 0, c2 = 0; r3 === false; ) {
      var i3 = t4.collections[o2];
      if (i3 === n4) {
        r3 = true;
        break;
      }
      c2 += i3.items.length, o2++;
    }
    return t4.activeItemId - c2;
  }({ state: e2, collection: t3 })], r2 = t3.source;
  return { item: n3, itemInputValue: r2.getItemInputValue({ item: n3, state: e2 }), itemUrl: r2.getItemUrl({ item: n3, state: e2 }), source: r2 };
}
function ut(e2, t3) {
  return e2 === t3 || e2.contains(t3);
}
function lt(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function st(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? lt(Object(n3), true).forEach(function(t4) {
      ft(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : lt(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function ft(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function pt(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function mt(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? pt(Object(n3), true).forEach(function(t4) {
      ht(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : pt(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function ht(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function dt(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return vt(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
      return Array.from(e3);
  }(e2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return vt(e3, t3);
    var n3 = Object.prototype.toString.call(e3).slice(8, -1);
    n3 === "Object" && e3.constructor && (n3 = e3.constructor.name);
    if (n3 === "Map" || n3 === "Set")
      return Array.from(e3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return vt(e3, t3);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function vt(e2, t3) {
  (t3 == null || t3 > e2.length) && (t3 = e2.length);
  for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
    r2[n3] = e2[n3];
  return r2;
}
function _t(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function yt(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? _t(Object(n3), true).forEach(function(t4) {
      gt(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : _t(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function gt(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function bt(e2) {
  return (bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  })(e2);
}
function Ot(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return St(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
      return Array.from(e3);
  }(e2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return St(e3, t3);
    var n3 = Object.prototype.toString.call(e3).slice(8, -1);
    n3 === "Object" && e3.constructor && (n3 = e3.constructor.name);
    if (n3 === "Map" || n3 === "Set")
      return Array.from(e3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return St(e3, t3);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function St(e2, t3) {
  (t3 == null || t3 > e2.length) && (t3 = e2.length);
  for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
    r2[n3] = e2[n3];
  return r2;
}
function Et(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function wt(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? Et(Object(n3), true).forEach(function(t4) {
      Pt(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Et(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function Pt(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function jt(e2) {
  return Boolean(e2.execute);
}
function It(e2, t3) {
  return n3 = e2, Boolean(n3 == null ? void 0 : n3.execute) ? wt(wt({}, e2), {}, { requests: e2.queries.map(function(n4) {
    return { query: n4, sourceId: t3, transformResponse: e2.transformResponse };
  }) }) : { items: e2, sourceId: t3 };
  var n3;
}
function Dt(e2) {
  var t3 = e2.reduce(function(e3, t4) {
    if (!jt(t4))
      return e3.push(t4), e3;
    var n3 = t4.searchClient, r2 = t4.execute, o2 = t4.requests, c2 = e3.find(function(e4) {
      return jt(t4) && jt(e4) && e4.searchClient === n3 && e4.execute === r2;
    });
    if (c2) {
      var i3;
      (i3 = c2.items).push.apply(i3, Ot(o2));
    } else {
      var a2 = { execute: r2, items: o2, searchClient: n3 };
      e3.push(a2);
    }
    return e3;
  }, []).map(function(e3) {
    if (!jt(e3))
      return Promise.resolve(e3);
    var t4 = e3, n3 = t4.execute, r2 = t4.items;
    return n3({ searchClient: t4.searchClient, requests: r2 });
  });
  return Promise.all(t3).then(function(e3) {
    return et(e3);
  });
}
function kt(e2, t3) {
  return t3.map(function(t4) {
    var n3 = e2.filter(function(e3) {
      return e3.sourceId === t4.sourceId;
    }), r2 = n3.map(function(e3) {
      return e3.items;
    }), o2 = n3[0].transformResponse, c2 = o2 ? o2(function(e3) {
      var t5 = e3.map(function(e4) {
        var t6;
        return st(st({}, e4), {}, { hits: (t6 = e4.hits) === null || t6 === void 0 ? void 0 : t6.map(function(t7) {
          return st(st({}, t7), {}, { __autocomplete_indexName: e4.index, __autocomplete_queryID: e4.queryID });
        }) });
      });
      return { results: t5, hits: t5.map(function(e4) {
        return e4.hits;
      }).filter(Boolean), facetHits: t5.map(function(e4) {
        var t6;
        return (t6 = e4.facetHits) === null || t6 === void 0 ? void 0 : t6.map(function(e5) {
          return { label: e5.value, count: e5.count, _highlightResult: { label: { value: e5.highlighted } } };
        });
      }).filter(Boolean) };
    }(r2)) : r2;
    return $e(Array.isArray(c2), 'The `getItems` function from source "'.concat(t4.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(bt(c2)), ":\n\n").concat(JSON.stringify(c2, null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")), $e(c2.every(Boolean), 'The `getItems` function from source "'.concat(t4.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")), { source: t4, items: c2 };
  });
}
function Ct(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function Nt(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? Ct(Object(n3), true).forEach(function(t4) {
      At(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Ct(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function At(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function xt(e2, t3) {
  if (e2 == null)
    return {};
  var n3, r2, o2 = function(e3, t4) {
    if (e3 == null)
      return {};
    var n4, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n4 = c3[r3], t4.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
    return o3;
  }(e2, t3);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n3 = c2[r2], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
  }
  return o2;
}
var Rt = null;
function Tt(e2) {
  var t3 = e2.event, n3 = e2.nextState, r2 = n3 === void 0 ? {} : n3, o2 = e2.props, c2 = e2.query, i3 = e2.refresh, a2 = e2.store, u2 = xt(e2, ["event", "nextState", "props", "query", "refresh", "store"]);
  Rt && o2.environment.clearTimeout(Rt);
  var l2, s2 = u2.setCollections, f2 = u2.setIsOpen, p2 = u2.setQuery, m2 = u2.setActiveItemId, h2 = u2.setStatus;
  return p2(c2), m2(o2.defaultActiveItemId), c2 || o2.openOnFocus !== false ? (h2("loading"), Rt = o2.environment.setTimeout(function() {
    h2("stalled");
  }, o2.stallThreshold), o2.getSources(Nt({ query: c2, refresh: i3, state: a2.getState() }, u2)).then(function(e3) {
    return h2("loading"), Promise.all(e3.map(function(e4) {
      return Promise.resolve(e4.getItems(Nt({ query: c2, refresh: i3, state: a2.getState() }, u2))).then(function(t4) {
        return It(t4, e4.sourceId);
      });
    })).then(Dt).then(function(t4) {
      return kt(t4, e3);
    }).then(function(e4) {
      var n4;
      h2("idle"), s2(e4);
      var l3 = o2.shouldPanelOpen({ state: a2.getState() });
      f2((n4 = r2.isOpen) !== null && n4 !== void 0 ? n4 : o2.openOnFocus && !c2 && l3 || l3);
      var p3 = at(a2.getState());
      if (a2.getState().activeItemId !== null && p3) {
        var m3 = p3.item, d3 = p3.itemInputValue, v2 = p3.itemUrl, _2 = p3.source;
        _2.onActive(Nt({ event: t3, item: m3, itemInputValue: d3, itemUrl: v2, refresh: i3, source: _2, state: a2.getState() }, u2));
      }
    }).finally(function() {
      Rt && o2.environment.clearTimeout(Rt);
    });
  })) : (h2("idle"), s2(a2.getState().collections.map(function(e3) {
    return Nt(Nt({}, e3), {}, { items: [] });
  })), f2((l2 = r2.isOpen) !== null && l2 !== void 0 ? l2 : o2.shouldPanelOpen({ state: a2.getState() })), Promise.resolve());
}
function Ht(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function Mt(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? Ht(Object(n3), true).forEach(function(t4) {
      qt(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Ht(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function qt(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function Lt(e2, t3) {
  if (e2 == null)
    return {};
  var n3, r2, o2 = function(e3, t4) {
    if (e3 == null)
      return {};
    var n4, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n4 = c3[r3], t4.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
    return o3;
  }(e2, t3);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n3 = c2[r2], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
  }
  return o2;
}
function Ut(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function Ft(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? Ut(Object(n3), true).forEach(function(t4) {
      Vt(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Ut(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function Vt(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function Bt(e2, t3) {
  if (e2 == null)
    return {};
  var n3, r2, o2 = function(e3, t4) {
    if (e3 == null)
      return {};
    var n4, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n4 = c3[r3], t4.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
    return o3;
  }(e2, t3);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n3 = c2[r2], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
  }
  return o2;
}
function zt(e2) {
  var t3 = e2.props, n3 = e2.refresh, r2 = e2.store, o2 = Bt(e2, ["props", "refresh", "store"]);
  return { getEnvironmentProps: function(e3) {
    var n4 = e3.inputElement, o3 = e3.formElement, c2 = e3.panelElement;
    return Ft({ onTouchStart: function(e4) {
      r2.getState().isOpen !== false && e4.target !== n4 && ([o3, c2].some(function(n5) {
        return ut(n5, e4.target) || ut(n5, t3.environment.document.activeElement);
      }) === false && r2.dispatch("blur", null));
    }, onTouchMove: function(e4) {
      r2.getState().isOpen !== false && n4 === t3.environment.document.activeElement && e4.target !== n4 && n4.blur();
    } }, Bt(e3, ["inputElement", "formElement", "panelElement"]));
  }, getRootProps: function(e3) {
    return Ft({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r2.getState().isOpen ? "".concat(t3.id, "-list") : void 0, "aria-labelledby": "".concat(t3.id, "-label") }, e3);
  }, getFormProps: function(e3) {
    e3.inputElement;
    return Ft({ action: "", noValidate: true, role: "search", onSubmit: function(c2) {
      var i3;
      c2.preventDefault(), t3.onSubmit(Ft({ event: c2, refresh: n3, state: r2.getState() }, o2)), r2.dispatch("submit", null), (i3 = e3.inputElement) === null || i3 === void 0 || i3.blur();
    }, onReset: function(c2) {
      var i3;
      c2.preventDefault(), t3.onReset(Ft({ event: c2, refresh: n3, state: r2.getState() }, o2)), r2.dispatch("reset", null), (i3 = e3.inputElement) === null || i3 === void 0 || i3.focus();
    } }, Bt(e3, ["inputElement"]));
  }, getLabelProps: function(e3) {
    return Ft({ htmlFor: "".concat(t3.id, "-input"), id: "".concat(t3.id, "-label") }, e3);
  }, getInputProps: function(e3) {
    function c2(e4) {
      (t3.openOnFocus || Boolean(r2.getState().query)) && Tt(Ft({ event: e4, props: t3, query: r2.getState().completion || r2.getState().query, refresh: n3, store: r2 }, o2)), r2.dispatch("focus", null);
    }
    var i3 = "ontouchstart" in t3.environment, a2 = e3 || {}, u2 = (a2.inputElement, a2.maxLength), l2 = u2 === void 0 ? 512 : u2, s2 = Bt(a2, ["inputElement", "maxLength"]), f2 = at(r2.getState());
    return Ft({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && r2.getState().activeItemId !== null ? "".concat(t3.id, "-item-").concat(r2.getState().activeItemId) : void 0, "aria-controls": r2.getState().isOpen ? "".concat(t3.id, "-list") : void 0, "aria-labelledby": "".concat(t3.id, "-label"), value: r2.getState().completion || r2.getState().query, id: "".concat(t3.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: f2 != null && f2.itemUrl ? "go" : "search", spellCheck: "false", autoFocus: t3.autoFocus, placeholder: t3.placeholder, maxLength: l2, type: "search", onChange: function(e4) {
      Tt(Ft({ event: e4, props: t3, query: e4.currentTarget.value.slice(0, l2), refresh: n3, store: r2 }, o2));
    }, onKeyDown: function(e4) {
      !function(e5) {
        var t4 = e5.event, n4 = e5.props, r3 = e5.refresh, o3 = e5.store, c3 = Lt(e5, ["event", "props", "refresh", "store"]);
        if (t4.key === "ArrowUp" || t4.key === "ArrowDown") {
          var i4 = function() {
            var e6 = n4.environment.document.getElementById("".concat(n4.id, "-item-").concat(o3.getState().activeItemId));
            e6 && (e6.scrollIntoViewIfNeeded ? e6.scrollIntoViewIfNeeded(false) : e6.scrollIntoView(false));
          }, a3 = function() {
            var e6 = at(o3.getState());
            if (o3.getState().activeItemId !== null && e6) {
              var n5 = e6.item, i5 = e6.itemInputValue, a4 = e6.itemUrl, u4 = e6.source;
              u4.onActive(Mt({ event: t4, item: n5, itemInputValue: i5, itemUrl: a4, refresh: r3, source: u4, state: o3.getState() }, c3));
            }
          };
          t4.preventDefault(), o3.getState().isOpen === false && (n4.openOnFocus || Boolean(o3.getState().query)) ? Tt(Mt({ event: t4, props: n4, query: o3.getState().query, refresh: r3, store: o3 }, c3)).then(function() {
            o3.dispatch(t4.key, { nextActiveItemId: n4.defaultActiveItemId }), a3(), setTimeout(i4, 0);
          }) : (o3.dispatch(t4.key, {}), a3(), i4());
        } else if (t4.key === "Escape")
          t4.preventDefault(), o3.dispatch(t4.key, null);
        else if (t4.key === "Enter") {
          if (o3.getState().activeItemId === null || o3.getState().collections.every(function(e6) {
            return e6.items.length === 0;
          }))
            return;
          t4.preventDefault();
          var u3 = at(o3.getState()), l3 = u3.item, s3 = u3.itemInputValue, f3 = u3.itemUrl, p2 = u3.source;
          if (t4.metaKey || t4.ctrlKey)
            f3 !== void 0 && (p2.onSelect(Mt({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p2, state: o3.getState() }, c3)), n4.navigator.navigateNewTab({ itemUrl: f3, item: l3, state: o3.getState() }));
          else if (t4.shiftKey)
            f3 !== void 0 && (p2.onSelect(Mt({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p2, state: o3.getState() }, c3)), n4.navigator.navigateNewWindow({ itemUrl: f3, item: l3, state: o3.getState() }));
          else if (t4.altKey)
            ;
          else {
            if (f3 !== void 0)
              return p2.onSelect(Mt({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p2, state: o3.getState() }, c3)), void n4.navigator.navigate({ itemUrl: f3, item: l3, state: o3.getState() });
            Tt(Mt({ event: t4, nextState: { isOpen: false }, props: n4, query: s3, refresh: r3, store: o3 }, c3)).then(function() {
              p2.onSelect(Mt({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p2, state: o3.getState() }, c3));
            });
          }
        }
      }(Ft({ event: e4, props: t3, refresh: n3, store: r2 }, o2));
    }, onFocus: c2, onBlur: function() {
      i3 || r2.dispatch("blur", null);
    }, onClick: function(n4) {
      e3.inputElement !== t3.environment.document.activeElement || r2.getState().isOpen || c2(n4);
    } }, s2);
  }, getPanelProps: function(e3) {
    return Ft({ onMouseDown: function(e4) {
      e4.preventDefault();
    }, onMouseLeave: function() {
      r2.dispatch("mouseleave", null);
    } }, e3);
  }, getListProps: function(e3) {
    return Ft({ role: "listbox", "aria-labelledby": "".concat(t3.id, "-label"), id: "".concat(t3.id, "-list") }, e3);
  }, getItemProps: function(e3) {
    var c2 = e3.item, i3 = e3.source, a2 = Bt(e3, ["item", "source"]);
    return Ft({ id: "".concat(t3.id, "-item-").concat(c2.__autocomplete_id), role: "option", "aria-selected": r2.getState().activeItemId === c2.__autocomplete_id, onMouseMove: function(e4) {
      if (c2.__autocomplete_id !== r2.getState().activeItemId) {
        r2.dispatch("mousemove", c2.__autocomplete_id);
        var t4 = at(r2.getState());
        if (r2.getState().activeItemId !== null && t4) {
          var i4 = t4.item, a3 = t4.itemInputValue, u2 = t4.itemUrl, l2 = t4.source;
          l2.onActive(Ft({ event: e4, item: i4, itemInputValue: a3, itemUrl: u2, refresh: n3, source: l2, state: r2.getState() }, o2));
        }
      }
    }, onMouseDown: function(e4) {
      e4.preventDefault();
    }, onClick: function(e4) {
      var a3 = i3.getItemInputValue({ item: c2, state: r2.getState() }), u2 = i3.getItemUrl({ item: c2, state: r2.getState() });
      (u2 ? Promise.resolve() : Tt(Ft({ event: e4, nextState: { isOpen: false }, props: t3, query: a3, refresh: n3, store: r2 }, o2))).then(function() {
        i3.onSelect(Ft({ event: e4, item: c2, itemInputValue: a3, itemUrl: u2, refresh: n3, source: i3, state: r2.getState() }, o2));
      });
    } }, a2);
  } };
}
function Wt(e2) {
  var t3, n3 = e2.state;
  return n3.isOpen === false || n3.activeItemId === null ? null : ((t3 = at(n3)) === null || t3 === void 0 ? void 0 : t3.itemInputValue) || null;
}
function Kt(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function Jt(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? Kt(Object(n3), true).forEach(function(t4) {
      $t(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Kt(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function $t(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
var Qt = function(e2, t3) {
  switch (t3.type) {
    case "setActiveItemId":
      return Jt(Jt({}, e2), {}, { activeItemId: t3.payload });
    case "setQuery":
      return Jt(Jt({}, e2), {}, { query: t3.payload, completion: null });
    case "setCollections":
      return Jt(Jt({}, e2), {}, { collections: t3.payload });
    case "setIsOpen":
      return Jt(Jt({}, e2), {}, { isOpen: t3.payload });
    case "setStatus":
      return Jt(Jt({}, e2), {}, { status: t3.payload });
    case "setContext":
      return Jt(Jt({}, e2), {}, { context: Jt(Jt({}, e2.context), t3.payload) });
    case "ArrowDown":
      var n3 = Jt(Jt({}, e2), {}, { activeItemId: t3.payload.hasOwnProperty("nextActiveItemId") ? t3.payload.nextActiveItemId : tt(1, e2.activeItemId, Je(e2), t3.props.defaultActiveItemId) });
      return Jt(Jt({}, n3), {}, { completion: Wt({ state: n3 }) });
    case "ArrowUp":
      var r2 = Jt(Jt({}, e2), {}, { activeItemId: tt(-1, e2.activeItemId, Je(e2), t3.props.defaultActiveItemId) });
      return Jt(Jt({}, r2), {}, { completion: Wt({ state: r2 }) });
    case "Escape":
      return e2.isOpen ? Jt(Jt({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : Jt(Jt({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return Jt(Jt({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
    case "reset":
      return Jt(Jt({}, e2), {}, { activeItemId: t3.props.openOnFocus === true ? t3.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return Jt(Jt({}, e2), {}, { activeItemId: t3.props.defaultActiveItemId, isOpen: (t3.props.openOnFocus || Boolean(e2.query)) && t3.props.shouldPanelOpen({ state: e2 }) });
    case "blur":
      return t3.props.debug ? e2 : Jt(Jt({}, e2), {}, { isOpen: false, activeItemId: null });
    case "mousemove":
      return Jt(Jt({}, e2), {}, { activeItemId: t3.payload });
    case "mouseleave":
      return Jt(Jt({}, e2), {}, { activeItemId: t3.props.defaultActiveItemId });
    default:
      return $e(false, "The reducer action ".concat(JSON.stringify(t3.type), " is not supported.")), e2;
  }
};
function Yt(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function Gt(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? Yt(Object(n3), true).forEach(function(t4) {
      Zt(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Yt(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function Zt(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function Xt(e2) {
  Ye(e2);
  var t3 = [], n3 = function(e3, t4) {
    var n4, r3 = {}, o3 = e3.plugins || [];
    return yt(yt({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, environment: r3, shouldPanelOpen: function(e4) {
      return Je(e4.state) > 0;
    } }, e3), {}, { id: (n4 = e3.id) !== null && n4 !== void 0 ? n4 : "autocomplete-".concat(Ke++), plugins: o3, initialState: yt({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e3.initialState), onStateChange: function(t5) {
      var n5;
      (n5 = e3.onStateChange) === null || n5 === void 0 || n5.call(e3, t5), o3.forEach(function(e4) {
        var n6;
        return (n6 = e4.onStateChange) === null || n6 === void 0 ? void 0 : n6.call(e4, t5);
      });
    }, onSubmit: function(t5) {
      var n5;
      (n5 = e3.onSubmit) === null || n5 === void 0 || n5.call(e3, t5), o3.forEach(function(e4) {
        var n6;
        return (n6 = e4.onSubmit) === null || n6 === void 0 ? void 0 : n6.call(e4, t5);
      });
    }, onReset: function(t5) {
      var n5;
      (n5 = e3.onReset) === null || n5 === void 0 || n5.call(e3, t5), o3.forEach(function(e4) {
        var n6;
        return (n6 = e4.onReset) === null || n6 === void 0 ? void 0 : n6.call(e4, t5);
      });
    }, getSources: function(n5) {
      return Promise.all([].concat(dt(o3.map(function(e4) {
        return e4.getSources;
      })), [e3.getSources]).filter(Boolean).map(function(e4) {
        return it(e4, n5);
      })).then(function(e4) {
        return et(e4);
      }).then(function(e4) {
        return e4.map(function(e5) {
          return yt(yt({}, e5), {}, { onSelect: function(n6) {
            e5.onSelect(n6), t4.forEach(function(e6) {
              var t5;
              return (t5 = e6.onSelect) === null || t5 === void 0 ? void 0 : t5.call(e6, n6);
            });
          }, onActive: function(n6) {
            e5.onActive(n6), t4.forEach(function(e6) {
              var t5;
              return (t5 = e6.onActive) === null || t5 === void 0 ? void 0 : t5.call(e6, n6);
            });
          } });
        });
      });
    }, navigator: yt({ navigate: function(e4) {
      var t5 = e4.itemUrl;
      r3.location.assign(t5);
    }, navigateNewTab: function(e4) {
      var t5 = e4.itemUrl, n5 = r3.open(t5, "_blank", "noopener");
      n5 == null || n5.focus();
    }, navigateNewWindow: function(e4) {
      var t5 = e4.itemUrl;
      r3.open(t5, "_blank", "noopener");
    } }, e3.navigator) });
  }(e2, t3), r2 = Xe(Qt, n3, function(e3) {
    var t4 = e3.prevState, r3 = e3.state;
    n3.onStateChange(Gt({ prevState: t4, state: r3, refresh: i3 }, o2));
  }), o2 = function(e3) {
    var t4 = e3.store;
    return { setActiveItemId: function(e4) {
      t4.dispatch("setActiveItemId", e4);
    }, setQuery: function(e4) {
      t4.dispatch("setQuery", e4);
    }, setCollections: function(e4) {
      var n4 = 0, r3 = e4.map(function(e5) {
        return mt(mt({}, e5), {}, { items: et(e5.items).map(function(e6) {
          return mt(mt({}, e6), {}, { __autocomplete_id: n4++ });
        }) });
      });
      t4.dispatch("setCollections", r3);
    }, setIsOpen: function(e4) {
      t4.dispatch("setIsOpen", e4);
    }, setStatus: function(e4) {
      t4.dispatch("setStatus", e4);
    }, setContext: function(e4) {
      t4.dispatch("setContext", e4);
    } };
  }({ store: r2 }), c2 = zt(Gt({ props: n3, refresh: i3, store: r2 }, o2));
  function i3() {
    return Tt(Gt({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n3, query: r2.getState().query, refresh: i3, store: r2 }, o2));
  }
  return n3.plugins.forEach(function(e3) {
    var n4;
    return (n4 = e3.subscribe) === null || n4 === void 0 ? void 0 : n4.call(e3, Gt(Gt({}, o2), {}, { refresh: i3, onSelect: function(e4) {
      t3.push({ onSelect: e4 });
    }, onActive: function(e4) {
      t3.push({ onActive: e4 });
    } }));
  }), Gt(Gt({ refresh: i3 }, c2), o2);
}
function en() {
  return Ue.createElement("a", { href: "https://www.algolia.com/docsearch", target: "_blank", rel: "noopener noreferrer" }, Ue.createElement("span", { className: "DocSearch-Label" }, "Search by"), Ue.createElement("svg", { width: "77", height: "19" }, Ue.createElement("path", { d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z", fill: "currentColor", fillRule: "evenodd" })));
}
function tn() {
  return Ue.createElement(Ue.Fragment, null, Ue.createElement("div", { className: "DocSearch-Logo" }, Ue.createElement(en, null)), Ue.createElement("ul", { className: "DocSearch-Commands" }, Ue.createElement("li", null, Ue.createElement("span", { className: "DocSearch-Commands-Key" }, Ue.createElement(nn, null, Ue.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), Ue.createElement("span", { className: "DocSearch-Label" }, "to select")), Ue.createElement("li", null, Ue.createElement("span", { className: "DocSearch-Commands-Key" }, Ue.createElement(nn, null, Ue.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), Ue.createElement("span", { className: "DocSearch-Commands-Key" }, Ue.createElement(nn, null, Ue.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), Ue.createElement("span", { className: "DocSearch-Label" }, "to navigate")), Ue.createElement("li", null, Ue.createElement("span", { className: "DocSearch-Commands-Key" }, Ue.createElement(nn, null, Ue.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), Ue.createElement("span", { className: "DocSearch-Label" }, "to close"))));
}
function nn(e2) {
  return Ue.createElement("svg", { width: "15", height: "15" }, Ue.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
}
function rn(e2) {
  var t3 = e2.hit, n3 = e2.children;
  return Ue.createElement("a", { href: t3.url }, n3);
}
function on() {
  return Ue.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, Ue.createElement("g", { fill: "none", fillRule: "evenodd" }, Ue.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Ue.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Ue.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Ue.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function cn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Ue.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Ue.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function an() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function un() {
  return Ue.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Ue.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Ue.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
function ln(e2) {
  switch (e2.type) {
    case "lvl1":
      return Ue.createElement(sn, null);
    case "content":
      return Ue.createElement(pn, null);
    default:
      return Ue.createElement(fn, null);
  }
}
function sn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function fn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function pn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function mn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function hn() {
  return Ue.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Ue.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function dn() {
  return Ue.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Ue.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
}
function vn() {
  return Ue.createElement("div", { className: "DocSearch-ErrorScreen" }, Ue.createElement("div", { className: "DocSearch-Screen-Icon" }, Ue.createElement(hn, null)), Ue.createElement("p", { className: "DocSearch-Title" }, "Unable to fetch results"), Ue.createElement("p", { className: "DocSearch-Help" }, "You might want to check your network connection."));
}
function _n(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return yn(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
      return Array.from(e3);
  }(e2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return yn(e3, t3);
    var n3 = Object.prototype.toString.call(e3).slice(8, -1);
    n3 === "Object" && e3.constructor && (n3 = e3.constructor.name);
    if (n3 === "Map" || n3 === "Set")
      return Array.from(e3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return yn(e3, t3);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function yn(e2, t3) {
  (t3 == null || t3 > e2.length) && (t3 = e2.length);
  for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
    r2[n3] = e2[n3];
  return r2;
}
function gn(e2) {
  var t3 = e2.state.context.searchSuggestions;
  return Ue.createElement("div", { className: "DocSearch-NoResults" }, Ue.createElement("div", { className: "DocSearch-Screen-Icon" }, Ue.createElement(dn, null)), Ue.createElement("p", { className: "DocSearch-Title" }, 'No results for "', Ue.createElement("strong", null, e2.state.query), '"'), t3 && t3.length > 0 && Ue.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Ue.createElement("p", { className: "DocSearch-Help" }, "Try searching for:"), Ue.createElement("ul", null, t3.slice(0, 3).reduce(function(t4, n3) {
    return [].concat(_n(t4), [Ue.createElement("li", { key: n3 }, Ue.createElement("button", { className: "DocSearch-Prefill", key: n3, onClick: function() {
      e2.setQuery(n3.toLowerCase() + " "), e2.refresh(), e2.inputRef.current.focus();
    } }, n3))]);
  }, []))), Ue.createElement("p", { className: "DocSearch-Help" }, "Believe this query should return results?", " ", Ue.createElement("a", { href: "https://github.com/algolia/docsearch-configs/issues/new?template=Missing_results.md&title=[".concat(e2.indexName, ']+Missing+results+for+query+"').concat(e2.state.query, '"'), target: "_blank", rel: "noopener noreferrer" }, "Let us know"), "."));
}
function bn(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function On(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? bn(Object(n3), true).forEach(function(t4) {
      Sn(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : bn(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function Sn(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function En(e2, t3) {
  if (e2 == null)
    return {};
  var n3, r2, o2 = function(e3, t4) {
    if (e3 == null)
      return {};
    var n4, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n4 = c3[r3], t4.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
    return o3;
  }(e2, t3);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n3 = c2[r2], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
  }
  return o2;
}
function wn(e2, t3) {
  return t3.split(".").reduce(function(e3, t4) {
    return e3 && e3[t4];
  }, e2);
}
function Pn(e2) {
  var t3 = e2.hit, n3 = e2.attribute, r2 = e2.tagName;
  return b(r2 === void 0 ? "span" : r2, On(On({}, En(e2, ["hit", "attribute", "tagName"])), {}, { dangerouslySetInnerHTML: { __html: wn(t3, "_snippetResult.".concat(n3, ".value")) || wn(t3, n3) } }));
}
function jn(e2, t3) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t4) {
    var n3 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
    if (n3 == null)
      return;
    var r2, o2, c2 = [], i3 = true, a2 = false;
    try {
      for (n3 = n3.call(e3); !(i3 = (r2 = n3.next()).done) && (c2.push(r2.value), !t4 || c2.length !== t4); i3 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        i3 || n3.return == null || n3.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return c2;
  }(e2, t3) || function(e3, t4) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return In(e3, t4);
    var n3 = Object.prototype.toString.call(e3).slice(8, -1);
    n3 === "Object" && e3.constructor && (n3 = e3.constructor.name);
    if (n3 === "Map" || n3 === "Set")
      return Array.from(e3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return In(e3, t4);
  }(e2, t3) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function In(e2, t3) {
  (t3 == null || t3 > e2.length) && (t3 = e2.length);
  for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
    r2[n3] = e2[n3];
  return r2;
}
function Dn() {
  return (Dn = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function kn(e2) {
  return e2.collection && e2.collection.items.length !== 0 ? Ue.createElement("section", { className: "DocSearch-Hits" }, Ue.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), Ue.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t3, n3) {
    return Ue.createElement(Cn, Dn({ key: [e2.title, t3.objectID].join(":"), item: t3, index: n3 }, e2));
  }))) : null;
}
function Cn(e2) {
  var t3 = e2.item, n3 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, c2 = e2.getItemProps, i3 = e2.onItemClick, a2 = e2.collection, u2 = e2.hitComponent, l2 = jn(Ue.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = jn(Ue.useState(false), 2), m2 = p2[0], h2 = p2[1], d3 = Ue.useRef(null), v2 = u2;
  return Ue.createElement("li", Dn({ className: ["DocSearch-Hit", t3.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
    d3.current && d3.current();
  } }, c2({ item: t3, source: a2.source, onClick: function() {
    i3(t3);
  } })), Ue.createElement(v2, { hit: t3 }, Ue.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t3, index: n3 }), t3.hierarchy[t3.type] && t3.type === "lvl1" && Ue.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ue.createElement(Pn, { className: "DocSearch-Hit-title", hit: t3, attribute: "hierarchy.lvl1" }), t3.content && Ue.createElement(Pn, { className: "DocSearch-Hit-path", hit: t3, attribute: "content" })), t3.hierarchy[t3.type] && (t3.type === "lvl2" || t3.type === "lvl3" || t3.type === "lvl4" || t3.type === "lvl5" || t3.type === "lvl6") && Ue.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ue.createElement(Pn, { className: "DocSearch-Hit-title", hit: t3, attribute: "hierarchy.".concat(t3.type) }), Ue.createElement(Pn, { className: "DocSearch-Hit-path", hit: t3, attribute: "hierarchy.lvl1" })), t3.type === "content" && Ue.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ue.createElement(Pn, { className: "DocSearch-Hit-title", hit: t3, attribute: "content" }), Ue.createElement(Pn, { className: "DocSearch-Hit-path", hit: t3, attribute: "hierarchy.lvl1" })), o2({ item: t3, runDeleteTransition: function(e3) {
    f2(true), d3.current = e3;
  }, runFavoriteTransition: function(e3) {
    h2(true), d3.current = e3;
  } }))));
}
function Nn(e2, t3) {
  return e2.reduce(function(e3, n3) {
    var r2 = t3(n3);
    return e3.hasOwnProperty(r2) || (e3[r2] = []), e3[r2].length < 5 && e3[r2].push(n3), e3;
  }, {});
}
function An(e2) {
  return e2;
}
function xn() {
}
var Rn = /(<mark>|<\/mark>)/g, Tn = RegExp(Rn.source);
function Hn(e2) {
  var t3, n3, r2, o2, c2, i3 = e2;
  if (!i3.__docsearch_parent && !e2._highlightResult)
    return e2.hierarchy.lvl0;
  var a2 = ((i3.__docsearch_parent ? (t3 = i3.__docsearch_parent) === null || t3 === void 0 || (n3 = t3._highlightResult) === null || n3 === void 0 || (r2 = n3.hierarchy) === null || r2 === void 0 ? void 0 : r2.lvl0 : (o2 = e2._highlightResult) === null || o2 === void 0 || (c2 = o2.hierarchy) === null || c2 === void 0 ? void 0 : c2.lvl0) || {}).value;
  return a2 && Tn.test(a2) ? a2.replace(Rn, "") : a2;
}
function Mn() {
  return (Mn = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function qn(e2) {
  return Ue.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t3, n3) {
    if (t3.items.length === 0)
      return null;
    var r2 = Hn(t3.items[0]);
    return Ue.createElement(kn, Mn({}, e2, { key: n3, title: r2, collection: t3, renderIcon: function(e3) {
      var n4, r3 = e3.item, o2 = e3.index;
      return Ue.createElement(Ue.Fragment, null, r3.__docsearch_parent && Ue.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Ue.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r3.__docsearch_parent !== ((n4 = t3.items[o2 + 1]) === null || n4 === void 0 ? void 0 : n4.__docsearch_parent) ? Ue.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Ue.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Ue.createElement("div", { className: "DocSearch-Hit-icon" }, Ue.createElement(ln, { type: r3.type })));
    }, renderAction: function() {
      return Ue.createElement("div", { className: "DocSearch-Hit-action" }, Ue.createElement(un, null));
    } }));
  }), e2.resultsFooterComponent && Ue.createElement("section", { className: "DocSearch-HitsFooter" }, Ue.createElement(e2.resultsFooterComponent, { state: e2.state })));
}
function Ln() {
  return (Ln = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function Un(e2) {
  return e2.state.status === "idle" && e2.hasCollections === false ? e2.disableUserPersonalization ? null : Ue.createElement("div", { className: "DocSearch-StartScreen" }, Ue.createElement("p", { className: "DocSearch-Help" }, "No recent searches")) : e2.hasCollections === false ? null : Ue.createElement("div", { className: "DocSearch-Dropdown-Container" }, Ue.createElement(kn, Ln({}, e2, { title: "Recent", collection: e2.state.collections[0], renderIcon: function() {
    return Ue.createElement("div", { className: "DocSearch-Hit-icon" }, Ue.createElement(cn, null));
  }, renderAction: function(t3) {
    var n3 = t3.item, r2 = t3.runFavoriteTransition, o2 = t3.runDeleteTransition;
    return Ue.createElement(Ue.Fragment, null, Ue.createElement("div", { className: "DocSearch-Hit-action" }, Ue.createElement("button", { className: "DocSearch-Hit-action-button", title: "Save this search", onClick: function(t4) {
      t4.preventDefault(), t4.stopPropagation(), r2(function() {
        e2.favoriteSearches.add(n3), e2.recentSearches.remove(n3), e2.refresh();
      });
    } }, Ue.createElement(mn, null))), Ue.createElement("div", { className: "DocSearch-Hit-action" }, Ue.createElement("button", { className: "DocSearch-Hit-action-button", title: "Remove this search from history", onClick: function(t4) {
      t4.preventDefault(), t4.stopPropagation(), o2(function() {
        e2.recentSearches.remove(n3), e2.refresh();
      });
    } }, Ue.createElement(an, null))));
  } })), Ue.createElement(kn, Ln({}, e2, { title: "Favorites", collection: e2.state.collections[1], renderIcon: function() {
    return Ue.createElement("div", { className: "DocSearch-Hit-icon" }, Ue.createElement(mn, null));
  }, renderAction: function(t3) {
    var n3 = t3.item, r2 = t3.runDeleteTransition;
    return Ue.createElement("div", { className: "DocSearch-Hit-action" }, Ue.createElement("button", { className: "DocSearch-Hit-action-button", title: "Remove this search from favorites", onClick: function(t4) {
      t4.preventDefault(), t4.stopPropagation(), r2(function() {
        e2.favoriteSearches.remove(n3), e2.refresh();
      });
    } }, Ue.createElement(an, null)));
  } })));
}
function Fn() {
  return (Fn = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var Vn = Ue.memo(function(e2) {
  if (e2.state.status === "error")
    return Ue.createElement(vn, null);
  var t3 = e2.state.collections.some(function(e3) {
    return e3.items.length > 0;
  });
  return e2.state.query ? t3 === false ? Ue.createElement(gn, e2) : Ue.createElement(qn, e2) : Ue.createElement(Un, Fn({}, e2, { hasCollections: t3 }));
}, function(e2, t3) {
  return t3.state.status === "loading" || t3.state.status === "stalled";
});
function Bn() {
  return (Bn = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function zn(e2) {
  var t3 = e2.getFormProps({ inputElement: e2.inputRef.current }).onReset;
  return Ue.useEffect(function() {
    e2.autoFocus && e2.inputRef.current && e2.inputRef.current.focus();
  }, [e2.autoFocus, e2.inputRef]), Ue.useEffect(function() {
    e2.isFromSelection && e2.inputRef.current && e2.inputRef.current.select();
  }, [e2.isFromSelection, e2.inputRef]), Ue.createElement(Ue.Fragment, null, Ue.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
    e3.preventDefault();
  }, onReset: t3 }, Ue.createElement("label", Bn({ className: "DocSearch-MagnifierLabel" }, e2.getLabelProps()), Ue.createElement(Ve, null)), Ue.createElement("div", { className: "DocSearch-LoadingIndicator" }, Ue.createElement(on, null)), Ue.createElement("input", Bn({ className: "DocSearch-Input", ref: e2.inputRef }, e2.getInputProps({ inputElement: e2.inputRef.current, autoFocus: e2.autoFocus, maxLength: 64 }))), Ue.createElement("button", { type: "reset", title: "Clear the query", className: "DocSearch-Reset", hidden: !e2.state.query }, Ue.createElement(an, null))), Ue.createElement("button", { className: "DocSearch-Cancel", onClick: e2.onClose }, "Cancel"));
}
function Wn(e2, t3) {
  if (e2 == null)
    return {};
  var n3, r2, o2 = function(e3, t4) {
    if (e3 == null)
      return {};
    var n4, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n4 = c3[r3], t4.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
    return o3;
  }(e2, t3);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n3 = c2[r2], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
  }
  return o2;
}
function Kn(e2) {
  return function() {
    var e3 = "__TEST_KEY__";
    try {
      return localStorage.setItem(e3, ""), localStorage.removeItem(e3), true;
    } catch (e4) {
      return false;
    }
  }() === false ? { setItem: function() {
  }, getItem: function() {
    return [];
  } } : { setItem: function(t3) {
    return window.localStorage.setItem(e2, JSON.stringify(t3));
  }, getItem: function() {
    var t3 = window.localStorage.getItem(e2);
    return t3 ? JSON.parse(t3) : [];
  } };
}
function Jn(e2) {
  var t3 = e2.key, n3 = e2.limit, r2 = n3 === void 0 ? 5 : n3, o2 = Kn(t3), c2 = o2.getItem().slice(0, r2);
  return { add: function(e3) {
    var t4 = e3, n4 = (t4._highlightResult, t4._snippetResult, Wn(t4, ["_highlightResult", "_snippetResult"])), i3 = c2.findIndex(function(e4) {
      return e4.objectID === n4.objectID;
    });
    i3 > -1 && c2.splice(i3, 1), c2.unshift(n4), c2 = c2.slice(0, r2), o2.setItem(c2);
  }, remove: function(e3) {
    c2 = c2.filter(function(t4) {
      return t4.objectID !== e3.objectID;
    }), o2.setItem(c2);
  }, getAll: function() {
    return c2;
  } };
}
function $n(e2) {
  var t3, n3 = "algoliasearch-client-js-".concat(e2.key), r2 = function() {
    return t3 === void 0 && (t3 = e2.localStorage || window.localStorage), t3;
  }, o2 = function() {
    return JSON.parse(r2().getItem(n3) || "{}");
  };
  return { get: function(e3, t4) {
    var n4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return Promise.resolve().then(function() {
      var n5 = JSON.stringify(e3), r3 = o2()[n5];
      return Promise.all([r3 || t4(), r3 !== void 0]);
    }).then(function(e4) {
      var t5 = i(e4, 2), r3 = t5[0], o3 = t5[1];
      return Promise.all([r3, o3 || n4.miss(r3)]);
    }).then(function(e4) {
      return i(e4, 1)[0];
    });
  }, set: function(e3, t4) {
    return Promise.resolve().then(function() {
      var c2 = o2();
      return c2[JSON.stringify(e3)] = t4, r2().setItem(n3, JSON.stringify(c2)), t4;
    });
  }, delete: function(e3) {
    return Promise.resolve().then(function() {
      var t4 = o2();
      delete t4[JSON.stringify(e3)], r2().setItem(n3, JSON.stringify(t4));
    });
  }, clear: function() {
    return Promise.resolve().then(function() {
      r2().removeItem(n3);
    });
  } };
}
function Qn(e2) {
  var t3 = a(e2.caches), n3 = t3.shift();
  return n3 === void 0 ? { get: function(e3, t4) {
    var n4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, r2 = t4();
    return r2.then(function(e4) {
      return Promise.all([e4, n4.miss(e4)]);
    }).then(function(e4) {
      return i(e4, 1)[0];
    });
  }, set: function(e3, t4) {
    return Promise.resolve(t4);
  }, delete: function(e3) {
    return Promise.resolve();
  }, clear: function() {
    return Promise.resolve();
  } } : { get: function(e3, r2) {
    var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return n3.get(e3, r2, o2).catch(function() {
      return Qn({ caches: t3 }).get(e3, r2, o2);
    });
  }, set: function(e3, r2) {
    return n3.set(e3, r2).catch(function() {
      return Qn({ caches: t3 }).set(e3, r2);
    });
  }, delete: function(e3) {
    return n3.delete(e3).catch(function() {
      return Qn({ caches: t3 }).delete(e3);
    });
  }, clear: function() {
    return n3.clear().catch(function() {
      return Qn({ caches: t3 }).clear();
    });
  } };
}
function Yn() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: true }, t3 = {};
  return { get: function(n3, r2) {
    var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, c2 = JSON.stringify(n3);
    if (c2 in t3)
      return Promise.resolve(e2.serializable ? JSON.parse(t3[c2]) : t3[c2]);
    var i3 = r2(), a2 = o2 && o2.miss || function() {
      return Promise.resolve();
    };
    return i3.then(function(e3) {
      return a2(e3);
    }).then(function() {
      return i3;
    });
  }, set: function(n3, r2) {
    return t3[JSON.stringify(n3)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
  }, delete: function(e3) {
    return delete t3[JSON.stringify(e3)], Promise.resolve();
  }, clear: function() {
    return t3 = {}, Promise.resolve();
  } };
}
function Gn(e2) {
  for (var t3 = e2.length - 1; t3 > 0; t3--) {
    var n3 = Math.floor(Math.random() * (t3 + 1)), r2 = e2[t3];
    e2[t3] = e2[n3], e2[n3] = r2;
  }
  return e2;
}
function Zn(e2, t3) {
  return t3 ? (Object.keys(t3).forEach(function(n3) {
    e2[n3] = t3[n3](e2);
  }), e2) : e2;
}
function Xn(e2) {
  for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++)
    n3[r2 - 1] = arguments[r2];
  var o2 = 0;
  return e2.replace(/%s/g, function() {
    return encodeURIComponent(n3[o2++]);
  });
}
var er = { WithinQueryParameters: 0, WithinHeaders: 1 };
function tr(e2, t3) {
  var n3 = e2 || {}, r2 = n3.data || {};
  return Object.keys(n3).forEach(function(e3) {
    ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) === -1 && (r2[e3] = n3[e3]);
  }), { data: Object.entries(r2).length > 0 ? r2 : void 0, timeout: n3.timeout || t3, headers: n3.headers || {}, queryParameters: n3.queryParameters || {}, cacheable: n3.cacheable };
}
var nr = { Read: 1, Write: 2, Any: 3 }, rr = 1, or = 2, cr = 3;
function ir(e2) {
  var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rr;
  return t(t({}, e2), {}, { status: n3, lastUpdate: Date.now() });
}
function ar(e2) {
  return typeof e2 == "string" ? { protocol: "https", url: e2, accept: nr.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || nr.Any };
}
var ur = "GET", lr = "POST";
function sr(e2, t3) {
  return Promise.all(t3.map(function(t4) {
    return e2.get(t4, function() {
      return Promise.resolve(ir(t4));
    });
  })).then(function(e3) {
    var n3 = e3.filter(function(e4) {
      return function(e5) {
        return e5.status === rr || Date.now() - e5.lastUpdate > 12e4;
      }(e4);
    }), r2 = e3.filter(function(e4) {
      return function(e5) {
        return e5.status === cr && Date.now() - e5.lastUpdate <= 12e4;
      }(e4);
    }), o2 = [].concat(a(n3), a(r2));
    return { getTimeout: function(e4, t4) {
      return (r2.length === 0 && e4 === 0 ? 1 : r2.length + 3 + e4) * t4;
    }, statelessHosts: o2.length > 0 ? o2.map(function(e4) {
      return ar(e4);
    }) : t3 };
  });
}
function fr(e2, n3, r2, o2) {
  var c2 = [], i3 = function(e3, n4) {
    if (e3.method === ur || e3.data === void 0 && n4.data === void 0)
      return;
    var r3 = Array.isArray(e3.data) ? e3.data : t(t({}, e3.data), n4.data);
    return JSON.stringify(r3);
  }(r2, o2), u2 = function(e3, n4) {
    var r3 = t(t({}, e3.headers), n4.headers), o3 = {};
    return Object.keys(r3).forEach(function(e4) {
      var t3 = r3[e4];
      o3[e4.toLowerCase()] = t3;
    }), o3;
  }(e2, o2), l2 = r2.method, s2 = r2.method !== ur ? {} : t(t({}, r2.data), o2.data), f2 = t(t(t({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), s2), o2.queryParameters), p2 = 0, m2 = function t3(n4, a2) {
    var s3 = n4.pop();
    if (s3 === void 0)
      throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: dr(c2) };
    var m3 = { data: i3, headers: u2, method: l2, url: mr(s3, r2.path, f2), connectTimeout: a2(p2, e2.timeouts.connect), responseTimeout: a2(p2, o2.timeout) }, h2 = function(e3) {
      var t4 = { request: m3, response: e3, host: s3, triesLeft: n4.length };
      return c2.push(t4), t4;
    }, d3 = { onSucess: function(e3) {
      return function(e4) {
        try {
          return JSON.parse(e4.content);
        } catch (t4) {
          throw function(e5, t5) {
            return { name: "DeserializationError", message: e5, response: t5 };
          }(t4.message, e4);
        }
      }(e3);
    }, onRetry: function(r3) {
      var o3 = h2(r3);
      return r3.isTimedOut && p2++, Promise.all([e2.logger.info("Retryable failure", vr(o3)), e2.hostsCache.set(s3, ir(s3, r3.isTimedOut ? cr : or))]).then(function() {
        return t3(n4, a2);
      });
    }, onFail: function(e3) {
      throw h2(e3), function(e4, t4) {
        var n5 = e4.content, r3 = e4.status, o3 = n5;
        try {
          o3 = JSON.parse(n5).message;
        } catch (e5) {
        }
        return function(e5, t5, n6) {
          return { name: "ApiError", message: e5, status: t5, transporterStackTrace: n6 };
        }(o3, r3, t4);
      }(e3, dr(c2));
    } };
    return e2.requester.send(m3).then(function(e3) {
      return function(e4, t4) {
        return function(e5) {
          var t5 = e5.status;
          return e5.isTimedOut || function(e6) {
            var t6 = e6.isTimedOut, n5 = e6.status;
            return !t6 && ~~n5 == 0;
          }(e5) || ~~(t5 / 100) != 2 && ~~(t5 / 100) != 4;
        }(e4) ? t4.onRetry(e4) : ~~(e4.status / 100) == 2 ? t4.onSucess(e4) : t4.onFail(e4);
      }(e3, d3);
    });
  };
  return sr(e2.hostsCache, n3).then(function(e3) {
    return m2(a(e3.statelessHosts).reverse(), e3.getTimeout);
  });
}
function pr(e2) {
  var t3 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
    var n3 = "; ".concat(e3.segment).concat(e3.version !== void 0 ? " (".concat(e3.version, ")") : "");
    return t3.value.indexOf(n3) === -1 && (t3.value = "".concat(t3.value).concat(n3)), t3;
  } };
  return t3;
}
function mr(e2, t3, n3) {
  var r2 = hr(n3), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat(t3.charAt(0) === "/" ? t3.substr(1) : t3);
  return r2.length && (o2 += "?".concat(r2)), o2;
}
function hr(e2) {
  return Object.keys(e2).map(function(t3) {
    return Xn("%s=%s", t3, (n3 = e2[t3], Object.prototype.toString.call(n3) === "[object Object]" || Object.prototype.toString.call(n3) === "[object Array]" ? JSON.stringify(e2[t3]) : e2[t3]));
    var n3;
  }).join("&");
}
function dr(e2) {
  return e2.map(function(e3) {
    return vr(e3);
  });
}
function vr(e2) {
  var n3 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return t(t({}, e2), {}, { request: t(t({}, e2.request), {}, { headers: t(t({}, e2.request.headers), n3) }) });
}
var _r = function(e2) {
  var n3 = e2.appId, r2 = function(e3, t3, n4) {
    var r3 = { "x-algolia-api-key": n4, "x-algolia-application-id": t3 };
    return { headers: function() {
      return e3 === er.WithinHeaders ? r3 : {};
    }, queryParameters: function() {
      return e3 === er.WithinQueryParameters ? r3 : {};
    } };
  }(e2.authMode !== void 0 ? e2.authMode : er.WithinHeaders, n3, e2.apiKey), o2 = function(e3) {
    var t3 = e3.hostsCache, n4 = e3.logger, r3 = e3.requester, o3 = e3.requestsCache, c2 = e3.responsesCache, a2 = e3.timeouts, u2 = e3.userAgent, l2 = e3.hosts, s2 = e3.queryParameters, f2 = { hostsCache: t3, logger: n4, requester: r3, requestsCache: o3, responsesCache: c2, timeouts: a2, userAgent: u2, headers: e3.headers, queryParameters: s2, hosts: l2.map(function(e4) {
      return ar(e4);
    }), read: function(e4, t4) {
      var n5 = tr(t4, f2.timeouts.read), r4 = function() {
        return fr(f2, f2.hosts.filter(function(e5) {
          return (e5.accept & nr.Read) != 0;
        }), e4, n5);
      };
      if ((n5.cacheable !== void 0 ? n5.cacheable : e4.cacheable) !== true)
        return r4();
      var o4 = { request: e4, mappedRequestOptions: n5, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
      return f2.responsesCache.get(o4, function() {
        return f2.requestsCache.get(o4, function() {
          return f2.requestsCache.set(o4, r4()).then(function(e5) {
            return Promise.all([f2.requestsCache.delete(o4), e5]);
          }, function(e5) {
            return Promise.all([f2.requestsCache.delete(o4), Promise.reject(e5)]);
          }).then(function(e5) {
            var t5 = i(e5, 2);
            t5[0];
            return t5[1];
          });
        });
      }, { miss: function(e5) {
        return f2.responsesCache.set(o4, e5);
      } });
    }, write: function(e4, t4) {
      return fr(f2, f2.hosts.filter(function(e5) {
        return (e5.accept & nr.Write) != 0;
      }), e4, tr(t4, f2.timeouts.write));
    } };
    return f2;
  }(t(t({ hosts: [{ url: "".concat(n3, "-dsn.algolia.net"), accept: nr.Read }, { url: "".concat(n3, ".algolia.net"), accept: nr.Write }].concat(Gn([{ url: "".concat(n3, "-1.algolianet.com") }, { url: "".concat(n3, "-2.algolianet.com") }, { url: "".concat(n3, "-3.algolianet.com") }])) }, e2), {}, { headers: t(t(t({}, r2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: t(t({}, r2.queryParameters()), e2.queryParameters) }));
  return Zn({ transporter: o2, appId: n3, addAlgoliaAgent: function(e3, t3) {
    o2.userAgent.add({ segment: e3, version: t3 });
  }, clearCache: function() {
    return Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(function() {
    });
  } }, e2.methods);
}, yr = function(e2) {
  return function(t3) {
    var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = { transporter: e2.transporter, appId: e2.appId, indexName: t3 };
    return Zn(r2, n3.methods);
  };
}, gr = function(e2) {
  return function(n3, r2) {
    var o2 = n3.map(function(e3) {
      return t(t({}, e3), {}, { params: hr(e3.params || {}) });
    });
    return e2.transporter.read({ method: lr, path: "1/indexes/*/queries", data: { requests: o2 }, cacheable: true }, r2);
  };
}, br = function(e2) {
  return function(n3, r2) {
    return Promise.all(n3.map(function(n4) {
      var o2 = n4.params, i3 = o2.facetName, a2 = o2.facetQuery, u2 = c(o2, ["facetName", "facetQuery"]);
      return yr(e2)(n4.indexName, { methods: { searchForFacetValues: Er } }).searchForFacetValues(i3, a2, t(t({}, r2), u2));
    }));
  };
}, Or = function(e2) {
  return function(t3, n3, r2) {
    return e2.transporter.read({ method: lr, path: Xn("1/answers/%s/prediction", e2.indexName), data: { query: t3, queryLanguages: n3 }, cacheable: true }, r2);
  };
}, Sr = function(e2) {
  return function(t3, n3) {
    return e2.transporter.read({ method: lr, path: Xn("1/indexes/%s/query", e2.indexName), data: { query: t3 }, cacheable: true }, n3);
  };
}, Er = function(e2) {
  return function(t3, n3, r2) {
    return e2.transporter.read({ method: lr, path: Xn("1/indexes/%s/facets/%s/query", e2.indexName, t3), data: { facetQuery: n3 }, cacheable: true }, r2);
  };
}, wr = 1, Pr = 2, jr = 3;
function Ir(e2, n3, r2) {
  var o2, c2 = { appId: e2, apiKey: n3, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
    return new Promise(function(t3) {
      var n4 = new XMLHttpRequest();
      n4.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t4) {
        return n4.setRequestHeader(t4, e3.headers[t4]);
      });
      var r3, o3 = function(e4, r4) {
        return setTimeout(function() {
          n4.abort(), t3({ status: 0, content: r4, isTimedOut: true });
        }, 1e3 * e4);
      }, c3 = o3(e3.connectTimeout, "Connection timeout");
      n4.onreadystatechange = function() {
        n4.readyState > n4.OPENED && r3 === void 0 && (clearTimeout(c3), r3 = o3(e3.responseTimeout, "Socket timeout"));
      }, n4.onerror = function() {
        n4.status === 0 && (clearTimeout(c3), clearTimeout(r3), t3({ content: n4.responseText || "Network request failed", status: n4.status, isTimedOut: false }));
      }, n4.onload = function() {
        clearTimeout(c3), clearTimeout(r3), t3({ content: n4.responseText, status: n4.status, isTimedOut: false });
      }, n4.send(e3.data);
    });
  } }, logger: (o2 = jr, { debug: function(e3, t3) {
    return wr >= o2 && console.debug(e3, t3), Promise.resolve();
  }, info: function(e3, t3) {
    return Pr >= o2 && console.info(e3, t3), Promise.resolve();
  }, error: function(e3, t3) {
    return console.error(e3, t3), Promise.resolve();
  } }), responsesCache: Yn(), requestsCache: Yn({ serializable: false }), hostsCache: Qn({ caches: [$n({ key: "".concat("4.8.5", "-").concat(e2) }), Yn()] }), userAgent: pr("4.8.5").add({ segment: "Browser", version: "lite" }), authMode: er.WithinQueryParameters };
  return _r(t(t(t({}, c2), r2), {}, { methods: { search: gr, searchForFacetValues: br, multipleQueries: gr, multipleSearchForFacetValues: br, initIndex: function(e3) {
    return function(t3) {
      return yr(e3)(t3, { methods: { search: Sr, searchForFacetValues: Er, findAnswers: Or } });
    };
  } } }));
}
Ir.version = "4.8.5";
function Dr() {
  return (Dr = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function kr(e2, t3) {
  var n3 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t3 && (r2 = r2.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
    })), n3.push.apply(n3, r2);
  }
  return n3;
}
function Cr(e2) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? kr(Object(n3), true).forEach(function(t4) {
      Nr(e2, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : kr(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e2;
}
function Nr(e2, t3, n3) {
  return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
}
function Ar(e2, t3) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t4) {
    var n3 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
    if (n3 == null)
      return;
    var r2, o2, c2 = [], i3 = true, a2 = false;
    try {
      for (n3 = n3.call(e3); !(i3 = (r2 = n3.next()).done) && (c2.push(r2.value), !t4 || c2.length !== t4); i3 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        i3 || n3.return == null || n3.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return c2;
  }(e2, t3) || function(e3, t4) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return xr(e3, t4);
    var n3 = Object.prototype.toString.call(e3).slice(8, -1);
    n3 === "Object" && e3.constructor && (n3 = e3.constructor.name);
    if (n3 === "Map" || n3 === "Set")
      return Array.from(e3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return xr(e3, t4);
  }(e2, t3) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function xr(e2, t3) {
  (t3 == null || t3 > e2.length) && (t3 = e2.length);
  for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
    r2[n3] = e2[n3];
  return r2;
}
function Rr(e2) {
  var t3 = e2.appId, n3 = t3 === void 0 ? "BH4D9OD16A" : t3, r2 = e2.apiKey, o2 = e2.indexName, c2 = e2.placeholder, i3 = c2 === void 0 ? "Search docs" : c2, a2 = e2.searchParameters, u2 = e2.onClose, l2 = u2 === void 0 ? xn : u2, s2 = e2.transformItems, f2 = s2 === void 0 ? An : s2, p2 = e2.hitComponent, m2 = p2 === void 0 ? rn : p2, h2 = e2.resultsFooterComponent, d3 = h2 === void 0 ? function() {
    return null;
  } : h2, v2 = e2.navigator, _2 = e2.initialScrollY, y2 = _2 === void 0 ? 0 : _2, g2 = e2.transformSearchClient, b2 = g2 === void 0 ? An : g2, O2 = e2.disableUserPersonalization, S2 = O2 !== void 0 && O2, E2 = e2.initialQuery, w2 = E2 === void 0 ? "" : E2, P2 = Ar(Ue.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), j2 = P2[0], I2 = P2[1], D2 = Ue.useRef(null), k2 = Ue.useRef(null), C2 = Ue.useRef(null), N2 = Ue.useRef(null), A2 = Ue.useRef(null), x2 = Ue.useRef(10), R2 = Ue.useRef("").current, T2 = Ue.useRef(w2 || R2).current, H2 = function(e3, t4, n4) {
    return Ue.useMemo(function() {
      var r3 = Ir(e3, t4);
      return r3.addAlgoliaAgent("docsearch", "3.0.0-alpha.41"), /docsearch.js \(.*\)/.test(r3.transporter.userAgent.value) === false && r3.addAlgoliaAgent("docsearch-react", "3.0.0-alpha.41"), n4(r3);
    }, [e3, t4, n4]);
  }(n3, r2, b2), M2 = Ue.useRef(Jn({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(o2), limit: 10 })).current, q2 = Ue.useRef(Jn({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(o2), limit: M2.getAll().length === 0 ? 7 : 4 })).current, L2 = Ue.useCallback(function(e3) {
    if (!S2) {
      var t4 = e3.type === "content" ? e3.__docsearch_parent : e3;
      t4 && M2.getAll().findIndex(function(e4) {
        return e4.objectID === t4.objectID;
      }) === -1 && q2.add(t4);
    }
  }, [M2, q2, S2]), U2 = Ue.useMemo(function() {
    return Xt({ id: "docsearch", defaultActiveItemId: 0, placeholder: i3, openOnFocus: true, initialState: { query: T2, context: { searchSuggestions: [] } }, navigator: v2, onStateChange: function(e3) {
      var t4 = e3.state;
      I2(t4);
    }, getSources: function(e3) {
      var t4 = e3.query, n4 = e3.state, r3 = e3.setContext, c3 = e3.setStatus;
      return t4 ? H2.search([{ query: t4, indexName: o2, params: Cr({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(x2.current), "hierarchy.lvl2:".concat(x2.current), "hierarchy.lvl3:".concat(x2.current), "hierarchy.lvl4:".concat(x2.current), "hierarchy.lvl5:".concat(x2.current), "hierarchy.lvl6:".concat(x2.current), "content:".concat(x2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20 }, a2) }]).catch(function(e4) {
        throw e4.name === "RetryError" && c3("error"), e4;
      }).then(function(e4) {
        var t5 = e4.results[0], o3 = t5.hits, c4 = t5.nbHits, i4 = Nn(o3, function(e5) {
          return Hn(e5);
        });
        return n4.context.searchSuggestions.length < Object.keys(i4).length && r3({ searchSuggestions: Object.keys(i4) }), r3({ nbHits: c4 }), Object.values(i4).map(function(e5, t6) {
          return { sourceId: "hits".concat(t6), onSelect: function(e6) {
            var t7 = e6.item, n5 = e6.event;
            L2(t7), n5.shiftKey || n5.ctrlKey || n5.metaKey || l2();
          }, getItemUrl: function(e6) {
            return e6.item.url;
          }, getItems: function() {
            return Object.values(Nn(e5, function(e6) {
              return e6.hierarchy.lvl1;
            })).map(f2).map(function(e6) {
              return e6.map(function(t7) {
                return Cr(Cr({}, t7), {}, { __docsearch_parent: t7.type !== "lvl1" && e6.find(function(e7) {
                  return e7.type === "lvl1" && e7.hierarchy.lvl1 === t7.hierarchy.lvl1;
                }) });
              });
            }).flat();
          } };
        });
      }) : S2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
        var t5 = e4.item, n5 = e4.event;
        L2(t5), n5.shiftKey || n5.ctrlKey || n5.metaKey || l2();
      }, getItemUrl: function(e4) {
        return e4.item.url;
      }, getItems: function() {
        return q2.getAll();
      } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
        var t5 = e4.item, n5 = e4.event;
        L2(t5), n5.shiftKey || n5.ctrlKey || n5.metaKey || l2();
      }, getItemUrl: function(e4) {
        return e4.item.url;
      }, getItems: function() {
        return M2.getAll();
      } }];
    } });
  }, [o2, a2, H2, l2, q2, M2, L2, T2, i3, v2, f2, S2]), F2 = U2.getEnvironmentProps, V2 = U2.getRootProps, B2 = U2.refresh;
  return function(e3) {
    var t4 = e3.getEnvironmentProps, n4 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
    Ue.useEffect(function() {
      if (n4 && r3 && o3) {
        var e4 = t4({ panelElement: n4, formElement: r3, inputElement: o3 }), c3 = e4.onTouchStart, i4 = e4.onTouchMove;
        return window.addEventListener("touchstart", c3), window.addEventListener("touchmove", i4), function() {
          window.removeEventListener("touchstart", c3), window.removeEventListener("touchmove", i4);
        };
      }
    }, [t4, n4, r3, o3]);
  }({ getEnvironmentProps: F2, panelElement: N2.current, formElement: C2.current, inputElement: A2.current }), function(e3) {
    var t4 = e3.container;
    Ue.useEffect(function() {
      if (t4) {
        var e4 = t4.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n4 = e4[0], r3 = e4[e4.length - 1];
        return t4.addEventListener("keydown", o3), function() {
          t4.removeEventListener("keydown", o3);
        };
      }
      function o3(e5) {
        e5.key === "Tab" && (e5.shiftKey ? document.activeElement === n4 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n4.focus()));
      }
    }, [t4]);
  }({ container: D2.current }), Ue.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var e3, t4;
      document.body.classList.remove("DocSearch--active"), (e3 = (t4 = window).scrollTo) === null || e3 === void 0 || e3.call(t4, 0, y2);
    };
  }, []), Ue.useEffect(function() {
    window.matchMedia("(max-width: 750px)").matches && (x2.current = 5);
  }, []), Ue.useEffect(function() {
    N2.current && (N2.current.scrollTop = 0);
  }, [j2.query]), Ue.useEffect(function() {
    T2.length > 0 && (B2(), A2.current && A2.current.focus());
  }, [T2, B2]), Ue.useEffect(function() {
    function e3() {
      if (k2.current) {
        var e4 = 0.01 * window.innerHeight;
        k2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
      }
    }
    return e3(), window.addEventListener("resize", e3), function() {
      window.removeEventListener("resize", e3);
    };
  }, []), Ue.createElement("div", Dr({ ref: D2 }, V2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", j2.status === "stalled" && "DocSearch-Container--Stalled", j2.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "), onMouseDown: function(e3) {
    e3.target === e3.currentTarget && l2();
  } }), Ue.createElement("div", { className: "DocSearch-Modal", ref: k2 }, Ue.createElement("header", { className: "DocSearch-SearchBar", ref: C2 }, Ue.createElement(zn, Dr({}, U2, { state: j2, autoFocus: T2.length === 0, onClose: l2, inputRef: A2, isFromSelection: Boolean(T2) && T2 === R2 }))), Ue.createElement("div", { className: "DocSearch-Dropdown", ref: N2 }, Ue.createElement(Vn, Dr({}, U2, { indexName: o2, state: j2, hitComponent: m2, resultsFooterComponent: d3, disableUserPersonalization: S2, recentSearches: q2, favoriteSearches: M2, onItemClick: function(e3) {
    L2(e3), l2();
  }, inputRef: A2 }))), Ue.createElement("footer", { className: "DocSearch-Footer" }, Ue.createElement(tn, null))));
}
function Tr() {
  return (Tr = Object.assign || function(e2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function Hr(e2, t3) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t4) {
    var n3 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
    if (n3 == null)
      return;
    var r2, o2, c2 = [], i3 = true, a2 = false;
    try {
      for (n3 = n3.call(e3); !(i3 = (r2 = n3.next()).done) && (c2.push(r2.value), !t4 || c2.length !== t4); i3 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        i3 || n3.return == null || n3.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return c2;
  }(e2, t3) || function(e3, t4) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return Mr(e3, t4);
    var n3 = Object.prototype.toString.call(e3).slice(8, -1);
    n3 === "Object" && e3.constructor && (n3 = e3.constructor.name);
    if (n3 === "Map" || n3 === "Set")
      return Array.from(e3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return Mr(e3, t4);
  }(e2, t3) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Mr(e2, t3) {
  (t3 == null || t3 > e2.length) && (t3 = e2.length);
  for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
    r2[n3] = e2[n3];
  return r2;
}
function qr(e2) {
  var t3 = Ue.useRef(null), n3 = Hr(Ue.useState(false), 2), r2 = n3[0], o2 = n3[1], c2 = Hr(Ue.useState((e2 == null ? void 0 : e2.initialQuery) || void 0), 2), i3 = c2[0], a2 = c2[1], u2 = Ue.useCallback(function() {
    o2(true);
  }, [o2]), l2 = Ue.useCallback(function() {
    o2(false);
  }, [o2]);
  return function(e3) {
    var t4 = e3.isOpen, n4 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, c3 = e3.searchButtonRef;
    Ue.useEffect(function() {
      function e4(e5) {
        (e5.keyCode === 27 && t4 || e5.key === "k" && (e5.metaKey || e5.ctrlKey) || !function(e6) {
          var t5 = e6.target, n5 = t5.tagName;
          return t5.isContentEditable || n5 === "INPUT" || n5 === "SELECT" || n5 === "TEXTAREA";
        }(e5) && e5.key === "/" && !t4) && (e5.preventDefault(), t4 ? r3() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n4()), c3 && c3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
      }
      return window.addEventListener("keydown", e4), function() {
        window.removeEventListener("keydown", e4);
      };
    }, [t4, n4, r3, o3, c3]);
  }({ isOpen: r2, onOpen: u2, onClose: l2, onInput: Ue.useCallback(function(e3) {
    o2(true), a2(e3.key);
  }, [o2, a2]), searchButtonRef: t3 }), Ue.createElement(Ue.Fragment, null, Ue.createElement(We, { onClick: u2, ref: t3 }), r2 && Pe(Ue.createElement(Rr, Tr({}, e2, { initialScrollY: window.scrollY, initialQuery: i3, onClose: l2 })), document.body));
}
function index$1(e2) {
  ke(Ue.createElement(qr, o({}, e2, { transformSearchClient: function(t3) {
    return t3.addAlgoliaAgent("docsearch.js", "3.0.0-alpha.41"), e2.transformSearchClient ? e2.transformSearchClient(t3) : t3;
  } })), function(e3) {
    var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
    return typeof e3 == "string" ? t3.document.querySelector(e3) : e3;
  }(e2.container, e2.environment));
}
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$1
});
var style = "";
var style$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": style
});
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto2 = Object.getPrototypeOf(thing);
          if (proto2 !== Object.prototype && proto2 !== null && Object.getOwnPropertyNames(proto2).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a2, b2) {
    return b2[1] - a2[1];
  }).forEach(function(entry, i3) {
    names.set(entry[0], getName(i3));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v2, i3) {
          return i3 in thing ? stringify(v2) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto2 = Object.getPrototypeOf(thing);
        if (proto2 === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v2, i3) {
            statements_1.push(name + "[" + i3 + "]=" + stringify(v2));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v2) {
            return "add(" + stringify(v2) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k2 = _a[0], v2 = _a[1];
            return "set(" + stringify(k2) + ", " + stringify(v2) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c2) {
  return escaped[c2] || c2;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i3 = 0; i3 < str.length; i3 += 1) {
    var char = str.charAt(i3);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i3 + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i3];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var devalue_esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": devalue
});
var dist = {};
Object.defineProperty(dist, "__esModule", { value: true });
const BMP = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 2) === "BM";
  },
  calculate(buffer) {
    return {
      height: Math.abs(buffer.readInt32LE(22)),
      width: buffer.readUInt32LE(18)
    };
  }
};
const TYPE_ICON = 1;
const SIZE_HEADER = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(buffer, offset) {
  const value = buffer.readUInt8(offset);
  return value === 0 ? 256 : value;
}
function getImageSize(buffer, imageIndex) {
  const offset = SIZE_HEADER + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(buffer, offset + 1),
    width: getSizeFromOffset(buffer, offset)
  };
}
const ICO = {
  validate(buffer) {
    if (buffer.readUInt16LE(0) !== 0) {
      return false;
    }
    return buffer.readUInt16LE(2) === TYPE_ICON;
  },
  calculate(buffer) {
    const nbImages = buffer.readUInt16LE(4);
    const imageSize = getImageSize(buffer, 0);
    if (nbImages === 1) {
      return imageSize;
    }
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize(buffer, imageIndex));
    }
    const result = {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
    return result;
  }
};
const TYPE_CURSOR = 2;
const CUR = {
  validate(buffer) {
    if (buffer.readUInt16LE(0) !== 0) {
      return false;
    }
    return buffer.readUInt16LE(2) === TYPE_CURSOR;
  },
  calculate(buffer) {
    return ICO.calculate(buffer);
  }
};
const DDS = {
  validate(buffer) {
    return buffer.readUInt32LE(0) === 542327876;
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32LE(12),
      width: buffer.readUInt32LE(16)
    };
  }
};
const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate(buffer) {
    const signature = buffer.toString("ascii", 0, 6);
    return gifRegexp.test(signature);
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt16LE(8),
      width: buffer.readUInt16LE(6)
    };
  }
};
const SIZE_HEADER$1 = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  icp6: 64,
  ic12: 32,
  it32: 128,
  t8mk: 128,
  ic07: 128,
  ic08: 256,
  ic13: 256,
  ic09: 512,
  ic14: 512,
  ic10: 1024
};
function readImageHeader(buffer, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    buffer.toString("ascii", imageOffset, imageLengthOffset),
    buffer.readUInt32BE(imageLengthOffset)
  ];
}
function getImageSize$1(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 4) === "icns";
  },
  calculate(buffer) {
    const bufferLength = buffer.length;
    const fileLength = buffer.readUInt32BE(FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER$1;
    let imageHeader = readImageHeader(buffer, imageOffset);
    let imageSize = getImageSize$1(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) {
      return imageSize;
    }
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < bufferLength) {
      imageHeader = readImageHeader(buffer, imageOffset);
      imageSize = getImageSize$1(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};
const J2C = {
  validate(buffer) {
    return buffer.toString("hex", 0, 4) === "ff4fff51";
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32BE(12),
      width: buffer.readUInt32BE(8)
    };
  }
};
const BoxTypes = {
  ftyp: "66747970",
  ihdr: "69686472",
  jp2h: "6a703268",
  jp__: "6a502020",
  rreq: "72726571",
  xml_: "786d6c20"
};
const calculateRREQLength = (box) => {
  const unit = box.readUInt8(0);
  let offset = 1 + 2 * unit;
  const numStdFlags = box.readUInt16BE(offset);
  const flagsLength = numStdFlags * (2 + unit);
  offset = offset + 2 + flagsLength;
  const numVendorFeatures = box.readUInt16BE(offset);
  const featuresLength = numVendorFeatures * (16 + unit);
  return offset + 2 + featuresLength;
};
const parseIHDR = (box) => {
  return {
    height: box.readUInt32BE(4),
    width: box.readUInt32BE(8)
  };
};
const JP2 = {
  validate(buffer) {
    const signature = buffer.toString("hex", 4, 8);
    const signatureLength = buffer.readUInt32BE(0);
    if (signature !== BoxTypes.jp__ || signatureLength < 1) {
      return false;
    }
    const ftypeBoxStart = signatureLength + 4;
    const ftypBoxLength = buffer.readUInt32BE(signatureLength);
    const ftypBox = buffer.slice(ftypeBoxStart, ftypeBoxStart + ftypBoxLength);
    return ftypBox.toString("hex", 0, 4) === BoxTypes.ftyp;
  },
  calculate(buffer) {
    const signatureLength = buffer.readUInt32BE(0);
    const ftypBoxLength = buffer.readUInt16BE(signatureLength + 2);
    let offset = signatureLength + 4 + ftypBoxLength;
    const nextBoxType = buffer.toString("hex", offset, offset + 4);
    switch (nextBoxType) {
      case BoxTypes.rreq:
        const MAGIC = 4;
        offset = offset + 4 + MAGIC + calculateRREQLength(buffer.slice(offset + 4));
        return parseIHDR(buffer.slice(offset + 8, offset + 24));
      case BoxTypes.jp2h:
        return parseIHDR(buffer.slice(offset + 8, offset + 24));
      default:
        throw new TypeError("Unsupported header found: " + buffer.toString("ascii", offset, offset + 4));
    }
  }
};
function readUInt(buffer, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return buffer[methodName].call(buffer, offset);
}
const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(buffer) {
  return buffer.toString("hex", 2, 6) === EXIF_MARKER;
}
function extractSize(buffer, index2) {
  return {
    height: buffer.readUInt16BE(index2),
    width: buffer.readUInt16BE(index2 + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(buffer, index2) {
  const exifBlock = buffer.slice(APP1_DATA_SIZE_BYTES, index2);
  const byteAlign = exifBlock.toString("hex", EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateBuffer(buffer, index2) {
  if (index2 > buffer.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
  if (buffer[index2] !== 255) {
    throw new TypeError("Invalid JPG, marker table corrupted");
  }
}
const JPG = {
  validate(buffer) {
    const SOIMarker = buffer.toString("hex", 0, 2);
    return SOIMarker === "ffd8";
  },
  calculate(buffer) {
    buffer = buffer.slice(4);
    let orientation;
    let next;
    while (buffer.length) {
      const i3 = buffer.readUInt16BE(0);
      if (isEXIF(buffer)) {
        orientation = validateExifBlock(buffer, i3);
      }
      validateBuffer(buffer, i3);
      next = buffer[i3 + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(buffer, i3 + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      buffer = buffer.slice(i3 + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};
const SIGNATURE = "KTX 11";
const KTX = {
  validate(buffer) {
    return SIGNATURE === buffer.toString("ascii", 1, 7);
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32LE(40),
      width: buffer.readUInt32LE(36)
    };
  }
};
const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(buffer) {
    if (pngSignature === buffer.toString("ascii", 1, 8)) {
      let chunkName = buffer.toString("ascii", 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = buffer.toString("ascii", 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(buffer) {
    if (buffer.toString("ascii", 12, 16) === pngFriedChunkName) {
      return {
        height: buffer.readUInt32BE(36),
        width: buffer.readUInt32BE(32)
      };
    }
    return {
      height: buffer.readUInt32BE(20),
      width: buffer.readUInt32BE(16)
    };
  }
};
const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const Signatures = Object.keys(PNMTypes);
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate(buffer) {
    const signature = buffer.toString("ascii", 0, 2);
    return Signatures.includes(signature);
  },
  calculate(buffer) {
    const signature = buffer.toString("ascii", 0, 2);
    const type = PNMTypes[signature];
    const lines = buffer.toString("ascii", 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};
const PSD = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 4) === "8BPS";
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32BE(14),
      width: buffer.readUInt32BE(18)
    };
  }
};
const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72
};
function parseLength(len) {
  const m2 = /([0-9.]+)([a-z]*)/.exec(len);
  if (!m2) {
    return void 0;
  }
  return Math.round(parseFloat(m2[1]) * (units[m2[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  validate(buffer) {
    const str = String(buffer);
    return svgReg.test(str);
  },
  calculate(buffer) {
    const root = buffer.toString("utf8").match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};
function calculateExtended(buffer) {
  return {
    height: 1 + buffer.readUIntLE(7, 3),
    width: 1 + buffer.readUIntLE(4, 3)
  };
}
function calculateLossless(buffer) {
  return {
    height: 1 + ((buffer[4] & 15) << 10 | buffer[3] << 2 | (buffer[2] & 192) >> 6),
    width: 1 + ((buffer[2] & 63) << 8 | buffer[1])
  };
}
function calculateLossy(buffer) {
  return {
    height: buffer.readInt16LE(8) & 16383,
    width: buffer.readInt16LE(6) & 16383
  };
}
const WEBP = {
  validate(buffer) {
    const riffHeader = buffer.toString("ascii", 0, 4) === "RIFF";
    const webpHeader = buffer.toString("ascii", 8, 12) === "WEBP";
    const vp8Header = buffer.toString("ascii", 12, 15) === "VP8";
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(buffer) {
    const chunkHeader = buffer.toString("ascii", 12, 16);
    buffer = buffer.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = buffer[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(buffer);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && buffer[0] !== 47) {
      return calculateLossy(buffer);
    }
    const signature = buffer.toString("hex", 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(buffer);
    }
    throw new TypeError("Invalid WebP");
  }
};
const typeHandlers = {
  bmp: BMP,
  cur: CUR,
  dds: DDS,
  gif: GIF,
  icns: ICNS,
  ico: ICO,
  j2c: J2C,
  jp2: JP2,
  jpg: JPG,
  ktx: KTX,
  png: PNG,
  pnm: PNM,
  psd: PSD,
  svg: SVG,
  webp: WEBP
};
const getMimeType = (type) => {
  if (type === "svg") {
    return "image/svg+xml";
  }
  return `image/${type}`;
};
const keys = Object.keys(typeHandlers);
const firstBytes = {
  56: "psd",
  66: "bmp",
  68: "dds",
  71: "gif",
  73: "tiff",
  77: "tiff",
  82: "webp",
  105: "icns",
  137: "png",
  255: "jpg"
};
function detector(buffer) {
  const byte = buffer[0];
  if (byte in firstBytes) {
    const type = firstBytes[byte];
    if (typeHandlers[type].validate(buffer)) {
      return type;
    }
  }
  const finder = (key) => typeHandlers[key].validate(buffer);
  return keys.find(finder);
}
function lookup(buffer, filepath) {
  const type = detector(buffer);
  if (type && type in typeHandlers) {
    const size = typeHandlers[type].calculate(buffer, filepath);
    if (size !== void 0) {
      size.type = type;
      size.mimeType = getMimeType(type);
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type + " (file: " + filepath + ")");
}
function imageMeta(input) {
  if (Buffer.isBuffer(input)) {
    return lookup(input);
  }
  throw new Error("Input should be buffer!");
}
const types = Object.keys(typeHandlers);
var _default = dist.default = imageMeta;
var types_1 = dist.types = types;
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  types: types_1,
  "default": _default
}, [dist]));
exports["default"] = server;
