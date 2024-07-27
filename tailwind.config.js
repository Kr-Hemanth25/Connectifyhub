/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    extend: {}
  },
  plugins: [],
}
// tailwind.config.js

module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'ab':'#B9ABBA',
        'drunk-pink': '#D717E8', 
        'rb':'4169E1'// You can replace this hex code with the actual drunk tank pink color code
      },
    },
  },
  variants: {},
  plugins: [],
}



