import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.js'),
      formats: ['es']
    },
    minify: 'esbuild',
    rollupOptions: {
      external: ['preact'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'icons',
      },
    },
  },
})
