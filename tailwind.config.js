module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'app-bg': '#0B1C18',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require.resolve('@tailwindcss/typography')],
};
