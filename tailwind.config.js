module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  darkMode: "class",

  plugins: [require("daisyui")
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00ceff",
          "secondary": "#b567ad",
          "accent": "#fff133",
          "neutral": "#444442",
          "base-100": "#ffffff",
          "info": "#1a5462",
          "success": "#81328f",
          "warning": "#ef8234",
          "error": "#ea4034",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "2rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.25s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      "dark",
      "night",
      "light",
    ],
  },
}