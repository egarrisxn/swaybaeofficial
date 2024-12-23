module.exports = {
  darkMode: ['selector', 'class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			transparent: 'transparent',
  			currentColor: 'currentColor',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			white: 'var(--white)',
  			black: 'var(--black)',
  			light: {
  				tint: 'var(--light-tint)',
  				DEFAULT: 'var(--light)',
  				fade: 'var(--light-fade)'
  			},
  			dark: {
  				tint: 'var(--dark-tint)',
  				DEFAULT: 'var(--dark)',
  				fade: 'var(--dark-fade)'
  			},
  			primary: {
  				tint: 'var(--primary-tint)',
  				DEFAULT: 'hsl(var(--primary))',
  				fade: 'var(--primary-fade)',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				tint: 'var(--secondary-tint)',
  				DEFAULT: 'hsl(var(--secondary))',
  				fade: 'var(--secondary-fade)',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			pink: {
  				tint: 'var(--pink-tint)',
  				DEFAULT: 'var(--pink)',
  				fade: 'var(--pink-fade)'
  			},
  			gray: {
  				tint: 'var(--gray-tint)',
  				DEFAULT: 'var(--gray)',
  				fade: 'var(--gray-fade)'
  			},
  			green: {
  				tint: 'var(--green-tint)',
  				DEFAULT: 'var(--green)',
  				fade: 'var(--green-fade)'
  			},
  			blue: {
  				tint: 'var(--blue-tint)',
  				DEFAULT: 'var(--blue)'
  			},
  			red: {
  				tint: 'var(--red-tint)',
  				DEFAULT: 'var(--red)'
  			},
  			purple: {
  				tint: 'var(--purple-tint)',
  				DEFAULT: 'var(--purple)'
  			},
  			yellow: {
  				tint: 'var(--yellow-tint)',
  				DEFAULT: 'var(--yellow)'
  			},
  			neutral: {
  				tint: 'var(--neutral-tint)',
  				DEFAULT: 'var(--neutral)'
  			},
  			border: 'hsl(var(--border))',
  			b2w: 'var(--b2w)',
  			w2b: 'var(--w2b)',
  			b2p: {
  				tint: 'var(--b2p-tint)',
  				DEFAULT: 'var(--b2p)'
  			},
  			p2b: {
  				tint: 'var(--p2b-tint)',
  				DEFAULT: 'var(--p2b)'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				' var(--font-poppins) '
  			],
  			sansita: [
  				' var(--font-sansita) '
  			]
  		},
  		backgroundImage: {
  			myGradient: 'var(--gradient)'
  		},
  		boxShadow: {
  			soft: 'var(--shadow-soft)',
  			hard: 'var(--shadow-hard)'
  		},
  		screens: {
  			xs: '360px',
  			'3xl': '1920px',
  			'4xl': '2560px'
  		},
  		width: {
  			'8xl': '88rem',
  			'9xl': '96rem',
  			'10xl': '104rem',
  			'11xl': '112rem',
  			'12xl': '120rem'
  		},
  		maxWidth: {
  			'8xl': '88rem',
  			'9xl': '96rem',
  			'10xl': '104rem',
  			'11xl': '112rem',
  			'12xl': '120rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
}
