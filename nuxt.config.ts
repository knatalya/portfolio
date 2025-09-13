// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/portfolio/', // 👈 обязательно, если проект не в корне
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: [
    '@/assets/css/main.css',
    'primevue/resources/themes/lara-light-indigo/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    'animate.css/animate.min.css'
  ],

  modules: ['@nuxtjs/tailwindcss']
})