import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
    }),
  ],
});
