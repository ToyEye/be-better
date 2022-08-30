const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      spacing: {
        44: '44%',
        9: '9%',
        '10%': '10%',
        '12%': '12%',
        '60%': '60%',
        icon: '20%',
        iconPercentTr: '30%',
        iconPercentTrF: '45%',
      },
      boxShadow: {
        you: '0px 1px 2px rgba(1, 66, 82, 0.3), 0px 1px 3px 1px rgba(1, 66, 82, 0.15)',
        formInput: 'inset 0px -1px 3px 1px rgba(0, 0, 0, 0.15)',
      },
      translate: {
        yS: '15%',
      },

      lineHeight: {
        1.36: '1.36',
      },
      padding: {
        4.5: '18px',
        6.5: '26px',
        13: '52px',
        15: '60px',
        23: '98px',
        30: '120px',
        46: '188px',
        54: '218px',
        74: '296px',
      },
      margin: {
        6.5: '26px',
        13: '52px',
        17.5: '70px',
        22: '92px',
        50: '200px',
        74: '296px',
      },
      fontFamily: {
        caveat: 'Caveat,sans-serif',
      },
      fontSize: {
        28: ['28px', '48px'],
        32: ['32px', '48px'],
        34: ['34px', '46.3px'],
        59: ['59px', '80px'],
      },
      width: {
        50: '200px',
        70: '280px',
        81: '324px',
        480: '480px',
        524: '524px',
        630: '630px',
        648: '648px',
        768: '768px',
        1036: '1036px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      main: '#00A5CC',
      black: '#05202C',
      white: '#FAFCFC',
      hoverPrice: '#E5FBFF',
      likeGrey: '#9AC9D4',
      background: '#F5F9FA',
      backgroundSecond: '#FFF8F4',
      bright: '#ADF0FE',
      mainLight: '#CFEDF3',
      orangeContrast: '#FBF1EB',
      error: '#E74A3B',
      mainSecond: '#EF7229',
      mainSecondLight: '#FF9B62',
      orangeDark: '#4D2107',
      orangeDirty: '#F3AE86',
      realWrite: '#FFFFFF',
      iconBg: '#DCF2F6',
      buttonMobile: '#01BBD4',
      oferta: '#FFF8F4',
      stepsOne: '#27B6D8',
      stepsTwo: '#41C1DF',
      stepsThree: '#5DCEE7',
      stepsFour: '#7FDCF1',
      stepsFive: '#9DE9FA',
      stOne: '#F17C39',
      stTwo: '#F38F55',
      stThree: '#F59E6B',
      stFour: '#F7B188',
      stFive: '#F9C6A8',
      stSix: '#FCD9C4',
    },
    screens: {
      tablet: '320px',
      // => @media (min-width: 320px) { ... }

      laptop: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      //@media (min-width: 1024px) { ... }

      desktop: '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addUtilities, addComponents, theme }) => {
      addComponents({
        '.btn-primary': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.main'),
          display: 'block',
          fontSize: 18,
          fontWeight: 600,
          lineHeight: 1.36,
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        '.title-primary': {
          color: theme('colors.main'),
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1.32,
          textAlign: 'center',
          letterSpacing: 0.15,
        },
        '.title-secondary': {
          color: theme('colors.orangeDark'),
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1.32,
          textAlign: 'center',
          letterSpacing: 0.15,
        },
        '.text-caveat': {
          color: theme('colors.main'),
          fontFamily: 'Caveat,sans-serif',
          fontSize: 24,
          lineHeight: 1.36,
          letterSpacing: 0.25,
        },
        '.text-change': {
          fontFamily: 'Caveat,sans-serif',
          fontSize: 24,
          lineHeight: 1.36,
          letterSpacing: 0.25,
        },
        '.text-oferta': {
          color: theme('colors.orangeDark'),
          fontFamily: 'Open Sans,sans-serif',
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 27,
          letterSpacing: 0.25,
        },
        '.stair-icons': {
          width: '32px',
          height: '32px',
          margin: 'auto',
        },
        '.stair-iconsBg': {
          width: '66px',
          height: '66px',
          margin: 'auto',
          position: 'absolute',
        },
        '.stair-container-svg': {
          width: '66px',
          height: '66px',
          margin: 'auto',
          position: 'absolute',
        },
        '.icons-step': {
          width: '200px',
          height: '128px',
          margin: 'auto',
          position: 'absolute',
        },
      });
    }),
  ],
};
