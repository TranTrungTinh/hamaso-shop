import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
    eslintPlugin({
      fix: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
    port: 8080
  },
})
