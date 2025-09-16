import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@global': fileURLToPath(new URL('./src/styles/global.scss', import.meta.url)),
      '@variables': fileURLToPath(new URL('./src/styles/variables.scss', import.meta.url)),
      '@mixin': fileURLToPath(new URL('./src/styles/mixin.scss', import.meta.url))

    },
  },
})
