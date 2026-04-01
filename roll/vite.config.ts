import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ogPlugin from 'vite-plugin-open-graph'

// https://vite.dev/config/
export default defineConfig({
  base: '/Yoshiroll/',
  plugins: [react(), ogPlugin({
      basic: {
        title: 'Yoshiroll',
        description: "Yoshie's rolling game",
        type: 'website',
      }
    }),
  ],
});