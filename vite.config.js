import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  server: {
    allowedHosts: ['unshaven-waggle-slate.ngrok-free.dev']
  }
})
