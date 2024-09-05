/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      "light": {
        "1": "#d8dee9",
        "2": "#e5e9f0",
        "3": "#eceff4"
      },
      "dark": {
        "1": "#2e3440",
        "2": "#3b4252",
        "3": "#434c5e",
        "4": "#4c566a"
      }
    }},
  },
  plugins: [],
}