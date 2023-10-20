import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://klauditha.github.io/desafio1_react2_HappyCake/",
  plugins: [react()],
})
