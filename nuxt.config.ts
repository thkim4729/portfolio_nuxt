// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://webfontworld.github.io/NEXONGothic/NEXONFootballGothic.css',
        },
      ],
    },
    // 깃허브 페이지 호스팅시 하단 주석 풀기
    // baseURL: 'https://github.com/thkim4729/portfolio_nuxt/',
  },
  ssr: false,
  nitro: {
    preset: 'github-pages',
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@/assets/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  // image: {
  //   dir: 'assets/images',
  // },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_variable.scss" as *;',
        },
      },
    },
  },
});
