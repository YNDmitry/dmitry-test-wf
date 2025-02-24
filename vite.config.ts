import { defineConfig } from 'vite'
import multiPageInputPlugin from '@yndmitry/vite-plugin-pages'

export default defineConfig({
  plugins: [multiPageInputPlugin()],
  server: {
    host: true,
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': 'https://dmitry-test-wf.webflow.io',
    },
  },
})
