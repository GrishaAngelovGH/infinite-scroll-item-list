import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      selectors: "/src/selectors",
      slices: "/src/slices",
      images: "/src/assets/images",
      icons: "/src/assets/icons"
    }
  },
})
