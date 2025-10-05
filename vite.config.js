import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: [
      '.e2b.dev',
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '169.254.0.21'
    ],
    hmr: {
      port: undefined
    },
    cors: true
  },
  preview: {
    port: 4173,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  base: './'
})