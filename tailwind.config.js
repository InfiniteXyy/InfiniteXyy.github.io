module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-iconify').default({}), require('tailwind-scrollbar')],
  darkMode: 'class',
};
