module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        gray: {
          bg: '#F8F9FA',
        },
        yellow: {
          DEFAULT: '#FFDF65',
        },
        font: { link: '#636057' },
      },
      borderWidth: {
        5: '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
