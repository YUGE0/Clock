/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        Big:"30rem",
        Mid:"25rem",
        Lit:"",
      },
      width:{
        '100':'40rem',
      },
      fontFamily:{
        inter : '"Inter"',
        open : '"Open Sans"',
        work : '"Work Sans"',
        Orb:'"Orbitron"',
        Sa:'"Saira"',
      },
      colors:{},
    },
  },
  plugins: [],
  darkMode:'class',
}