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
          cardBorder: '#E5E5E5',
          form: '#F7F7F7',
          placeholder: '#999999',
        },
        yellow: {
          DEFAULT: '#FFDF65',
          dark: '#FF785E',
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
      borderRadius: {
        '4xl': '2.5rem',
      },
      spacing: {
        7.5: '1.875rem',
        25: '6.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
