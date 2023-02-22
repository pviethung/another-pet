/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          '0%': {
            'background-position': '0% 82%',
          },
          '50%': {
            'background-position': '100% 19%',
          },
          '100%': {
            'background-position': '0% 82%',
          },
        },
      },
      animation: {
        'rainbow': 'rainbow 5s ease infinite',
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
};
