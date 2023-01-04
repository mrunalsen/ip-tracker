/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        'metal': '#1f2124',
        'metal-500': '#2b2e32'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};