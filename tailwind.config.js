module.exports = {
  darkMode: 'selector',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: 'var(--white)',
        black: 'var(--black)',
        light: {
          tint: 'var(--light-tint)',
          DEFAULT: 'var(--light)',
          fade: 'var(--light-fade)',
        },
        dark: {
          tint: 'var(--dark-tint)',
          DEFAULT: 'var(--dark)',
          fade: 'var(--dark-fade)',
        },
        primary: {
          tint: 'var(--primary-tint)',
          DEFAULT: 'var(--primary)',
          fade: 'var(--primary-fade)',
        },
        secondary: {
          tint: 'var(--secondary-tint)',
          DEFAULT: 'var(--secondary)',
          fade: 'var(--secondary-fade)',
        },
        pink: {
          tint: 'var(--pink-tint)',
          DEFAULT: 'var(--pink)',
          fade: 'var(--pink-fade)',
        },
        gray: {
          tint: 'var(--gray-tint)',
          DEFAULT: 'var(--gray)',
          fade: 'var(--gray-fade)',
        },
        green: {
          tint: 'var(--green-tint)',
          DEFAULT: 'var(--green)',
          fade: 'var(--green-fade)',
        },
        blue: {
          tint: 'var(--blue-tint)',
          DEFAULT: 'var(--blue)',
        },
        red: {
          tint: 'var(--red-tint)',
          DEFAULT: 'var(--red)',
        },
        purple: {
          tint: 'var(--purple-tint)',
          DEFAULT: 'var(--purple)',
        },
        yellow: {
          tint: 'var(--yellow-tint)',
          DEFAULT: 'var(--yellow)',
        },
        neutral: {
          tint: 'var(--neutral-tint)',
          DEFAULT: 'var(--neutral)',
        },
        border: 'var(--border)',
        b2w: 'var(--b2w)',
        w2b: 'var(--w2b)',
        b2p: {
          tint: 'var(--b2p-tint)',
          DEFAULT: 'var(--b2p)',
        },
        p2b: {
          tint: 'var(--p2b-tint)',
          DEFAULT: 'var(--p2b)',
        },
      },
      fontFamily: {
        sans: [' var(--font-poppins) '],
        sansita: [' var(--font-sansita) '],
      },
      backgroundImage: {
        myGradient: 'var(--gradient)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        hard: 'var(--shadow-hard)',
      },
      screens: {
        xs: '360px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      width: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
