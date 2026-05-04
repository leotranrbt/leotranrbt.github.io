import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration for GitHub Pages deployment.
 * base '/' is correct for user-level repos (username.github.io).
 * For project repos, change base to '/<repo-name>/'.
 */
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
