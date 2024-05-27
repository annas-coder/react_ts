/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
   "./src/**/*.{html,ts,tsx.jsx}",
    "./src/*.{ts,tsx,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'red':"red"
      }
    },
  },
  plugins: [],
}

