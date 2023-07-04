module.exports = {
  darkMode: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [require('daisyui')
  ],

  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     'primary': '#00ceff',
      //     'secondary': '#b567ad',
      //     'accent': '#1a5462',
      //     'neutral': '#f9fafb',
      //     'base-100': '#f9fafb',
      //     'base-200': '#d1d5db',
      //     'base-300': '#1f2937',
      //     'base-content': '#f9fafb',
      //     'info': '#a5b4fc',
      //     'success': '#36d399',
      //     'warning': '#fbbd23',
      //     'error': '#f87272',
      //   },
      // },
      'light',
      'dark',
    ]
  }
}