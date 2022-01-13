import locale7742780c from '../../node_modules/@docus/app/dist/i18n/languages/en-US'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","dateTimeFormats":{"en":{"long":{"year":"numeric","month":"short","day":"numeric","weekday":"short"}},"fr":{"long":{"year":"numeric","month":"long","day":"numeric","weekday":"short"}}}},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","file":"en-US","name":"English"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/purepeace/docs/node_modules/@docus/app/dist/i18n/languages",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: ({ $docus }) => $docus && $docus.settings && $docus.settings.url || "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: false,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en-US","file":"en-US","name":"English"}],
  localeCodes: ["en"],
}

export const localeMessages = {
  'en-US': () => Promise.resolve(locale7742780c),
}
