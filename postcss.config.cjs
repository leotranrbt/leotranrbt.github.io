/**
 * PostCSS configuration in CommonJS format.
 * Must be .cjs (not .ts) when package.json has "type": "module",
 * because Vite loads PostCSS config via require() internally.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
