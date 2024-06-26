import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo/m3u8VideoPlayer/',
  // base: '/',
  plugins: [vue()],
  // server: {
  //   port: 8080,
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
