/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red: "#D01C28",
        gray: "#5A5959",
        yellow: "#FFEAAE",
        purple: "#5F00D9",
        white: "#FFFFFF",
        orange: "#F6820C"
      }
    },
  },
  plugins: [],
}