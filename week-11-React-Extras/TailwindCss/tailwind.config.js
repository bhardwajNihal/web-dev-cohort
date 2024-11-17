/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'selector',
  theme: {
    extend: {
      colors:{
        blue:{
          200 : "#45718a",
          300 : "#45718a",
          400 : "#3b78f2",
          500 : "#02274e",
          700 : "#152448"
        },
        green : {
          400 : "#45718a"
        }
      },
      width:{
        '200': '35rem'
      }
    },
  },
  plugins: [],
}

