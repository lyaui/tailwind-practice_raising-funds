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
          DEFAULT: '#858377',
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
        NotoSans: ['Noto Sans TC'], // 英文字型
        BalooTamma: ['Baloo Tamma 2'], // 中文字型
      },
      letterSpacing: {
        widest: '.1875rem',
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
