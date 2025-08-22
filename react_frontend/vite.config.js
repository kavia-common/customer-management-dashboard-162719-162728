import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// PUBLIC_INTERFACE
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  define: {
    __APP_VERSION__: JSON.stringify('0.0.1')
  }
})
