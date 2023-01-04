import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://NativeTotalProgrammer.github.io/vite-react-rick-and-morty-github/",
  plugins: [react()],
})
