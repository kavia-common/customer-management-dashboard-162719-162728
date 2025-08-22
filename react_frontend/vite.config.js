import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// PUBLIC_INTERFACE
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    // Allow remote access from specified host to fix blocked host errors
    allowedHosts: ['vscode-internal-27161-beta.beta01.cloud.kavia.ai']
  },
  define: {
    __APP_VERSION__: JSON.stringify('0.0.1')
  }
})
