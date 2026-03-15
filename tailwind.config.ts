import tailwindIconify from 'tailwindcss-iconify';
import tailwindScrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss/types/config';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'surface': 'var(--surface)',
        'bg-alt': 'var(--bg-alt)',
        'ink': 'var(--ink)',
        'muted': 'var(--ink-muted)',
        'accent': 'var(--accent)',
        'rule': 'var(--rule)',
        'rule-light': 'var(--rule-light)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindIconify({}), tailwindScrollbar],
  darkMode: 'class',
};

export default config;
