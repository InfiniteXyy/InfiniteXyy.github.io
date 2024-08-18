import tailwindIconify from 'tailwindcss-iconify';
import tailwindScrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss/types/config';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindIconify({}), tailwindScrollbar],
  darkMode: 'class',
};

export default config;
