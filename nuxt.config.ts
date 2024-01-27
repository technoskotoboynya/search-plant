// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
      },
    }],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ``,
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // @ts-ignore
  plugins: [
      '~/plugins/vuetify.ts'
  ],
  ssr: false,
})
