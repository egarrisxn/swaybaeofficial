/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1420px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      9: '9',
      16: '16',
    },
    corePlugins: {
      aspectRatio: false,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
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
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
    logs: false,
  },
}
