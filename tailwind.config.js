module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      screen:{
        '3xl':'2080px',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}