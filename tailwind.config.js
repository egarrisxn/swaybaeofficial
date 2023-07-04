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
      {
        mytheme: {
          'primary': '#f9fafb',
          'primary-focus': '#d1d5db',
          'primary-content': '#1f2937',
          'secondary': '#f9fafb',
          'secondary-focus': '#d1d5db',
          'secondary-content': '#1f2937',
          'accent': '#f9fafb',
          'accent-focus': '#d1d5db',
          'accent-content': '#1f2937',
          'neutral': '#f9fafb',
          'neutral-focus': '#d1d5db',
          'neutral-content': '#1f2937',
          'base-100': '#f9fafb',
          'base-200': '#d1d5db',
          'base-300': '#1f2937',
          'base-content': '#f9fafb',
          'info': '#f9fafb',
          'success': '#f9fafb',
          'warning': '#f9fafb',
          'error': '#f9fafb',
        },
      },
      'dark',
      'light'
    ]
  }
}