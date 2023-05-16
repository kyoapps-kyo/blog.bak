// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content'
  ],
  colorMode: {
    preference: 'dark', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  content: {
    documentDriven: {
      injectPage: false // turn off injectPage because we are using our own [...slug].vue
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    // baseURL: '/kyoapps-kyo.github.io/'
  },
  nitro: {
    preset: 'vercel'
  }
});
