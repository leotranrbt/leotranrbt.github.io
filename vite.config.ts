import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/**
 * Vite configuration for GitHub Pages deployment.
 *
 * PostCSS is configured inline here to avoid the postcss.config.ts
 * ESM/CJS conflict that occurs when package.json has "type": "module".
 *
 * base '/' is correct for user-level repos (username.github.io).
 * For project repos, change base to '/<repo-name>/'.
 */
export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
