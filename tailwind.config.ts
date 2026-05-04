import type { Config } from 'tailwindcss';

/**
 * Tailwind configuration with a custom Fallout terminal theme.
 * Extends the default palette with terminal-specific greens and grays.
 */
const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg:      '#0d0d0d',
          surface: '#141414',
          border:  '#1a3a1a',
          dim:     '#b6b6b6',
          base:    '#4ade80',
          bright:  '#86efac',
          amber:   '#fbbf24',
          muted:   '#374151',
        },
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scanline: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
