/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Inter':'"Inter"'
      },
      colors:{
        'head':'#FFA559',
        'gray':'#959595'
      }
    },
  },
  plugins: [],
}