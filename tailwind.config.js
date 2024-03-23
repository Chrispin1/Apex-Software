/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueApex: '#CBCEDA',
        orangeApex: '#efd5da',
        orange: "#D22B35",
        blue: '#2A365C',
        smallBlue: '#BFDBFE',
        smallPink: '#FECACA',
        smallYellow: '#FDE68A',
        smallGreen:'#FDE68A'
      },
    },
  },
  plugins: [],
}