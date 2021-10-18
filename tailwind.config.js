/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');


module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
      'app-bg': '#0B1C18',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require.resolve('@tailwindcss/typography')],
};
