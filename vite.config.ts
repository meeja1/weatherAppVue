import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import { fileURLToPath, URL } from 'node:url'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [vue(),
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
      cleanupOutdatedCaches: false
    },
    manifest: {
      name: "WeatherVue",
      short_name: "Weather",
      "theme_color": "#8936FF",
      "background_color": "#2EC6FE",
      "icons": [
        {
          "purpose": "maskable",
          "sizes": "512x512",
          "src": "icon512_maskable.png",
          "type": "image/png"
        },
        {
          "purpose": "any",
          "sizes": "512x512",
          "src": "icon512_rounded.png",
          "type": "image/png"
        }
      ],
      "orientation": "any",
      "display": "standalone",
      "lang": "ru-RU",
      "start_url": "https://meeja1.github.io/weatherAppVue/"
    }
  }
  )],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
