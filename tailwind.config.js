/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies, global-require */
const colors = require('tailwindcss/colors');

const { black, white, trueGray, indigo, rose, amber } = colors;

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black,
      white,
      gray: trueGray,
      indigo,
      red: rose,
      yellow: amber,
      'app-bg': '#172D27',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
