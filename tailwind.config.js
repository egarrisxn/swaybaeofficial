/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sansita: ['Sansita', 'sans-serif'],
      },
      colors: {
        white: '#fcfcfc',
        black: '#0e1414',
        light: '#f8fafc',
        light2: '#e9eff5',
        dark: '#020617',
        dark2: '#0f172a',
        primary0: '#2cdbff',
        primary: '#00ceff',
        primary2: '#00a1d4',
        secondary0: '#cf97cb',
        secondary: '#b567ad',
        secondary2: '#a75b9c',
        neutral0: '#e6e4e6',
        neutral: '#d8d4d8',
        neutral2: '#b7afb7',
        cyan0: '#5fa1b1',
        cyan: '#418192',
        cyan2: '#3a6e80',
        navy0: '#581d95',
        navy: '#330f5f',
        navy1: '#290c4c',
        pink0: '#ff65af',
        pink: '#fd509d',
        pink2: '#ff65af',
        lavender0: '#cb99e7',
        lavender: '#c085df',
        lavender2: '#a254c9',
      },
      screens: {
        xs: '360px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      width: {
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // 1536px
        '10xl': '104rem', // 1662px
        '11xl': '112rem', // 1792px
        '12xl': '120rem', // 1920px
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // 1536px
        '10xl': '104rem', // 1662px
        '11xl': '112rem', // 1792px
        '12xl': '120rem', // 1920px
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
