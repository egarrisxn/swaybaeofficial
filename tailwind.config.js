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
        light: '#f8fafc',
        dark: '#0d1117',
        primary: '#00ceff',
        secondary: '#b567ad',
        neutral: '#d4d4d8',
        cyan: '#418192',
        navy: '#330f5f',
        pink: '#fd509d',
        lavender: '#c085df',
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
