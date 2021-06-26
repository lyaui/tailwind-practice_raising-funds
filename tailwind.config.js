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
          DEFAULT: '#858377',
          bg: '#F8F9FA',
          bar: '#eeeeee',
          tabBorder: '#E8E8DB',
        },
        yellow: {
          DEFAULT: '#FFDF65',
        },
        font: { link: '#636057', title: '#494846' },
      },
      fontSize: {
        '3xl': '2rem',
      },
      fontFamily: {
        NotoSans: ['Noto Sans TC'],
        BalooTamma: ['Baloo Tamma 2'],
      },
      letterSpacing: {
        widest: '.1875rem',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
