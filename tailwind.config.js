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
          default: '#F8F9FA',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
