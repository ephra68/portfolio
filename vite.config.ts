import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://ephra68.github.io/portfolio/',
  server: {
    port: 5173
  }
})

