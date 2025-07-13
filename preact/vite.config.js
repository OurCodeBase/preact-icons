import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.tsx'),
      formats: ['es'],
      fileName: () => "e.js"
    },
    minify: 'esbuild',
    rollupOptions: {
      external: ['preact'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    outDir: path.resolve(__dirname, 'dist'),
  },
})
