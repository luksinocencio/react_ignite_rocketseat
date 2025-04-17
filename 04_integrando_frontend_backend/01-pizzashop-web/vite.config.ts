import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, UserConfig } from 'vite'
import { InlineConfig } from 'vitest/node'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
  },
} as UserConfig & {
  test: InlineConfig
})
