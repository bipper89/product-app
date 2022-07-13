/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'animate-spin':'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
}
