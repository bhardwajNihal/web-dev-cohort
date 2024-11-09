/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          400 : "#4e99b3",
          500 : "#02274e"
        }
      }
    },
  },
  plugins: [],
}

