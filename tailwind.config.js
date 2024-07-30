/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        Big:"23rem",
        Mid:"20rem",
        Lit:"16rem",
        Ef:"10rem",
      },
      width:{
        '102':'30rem',
        '101':'25rem',
        '100':'22rem',
        '99':'20rem',
      },
      height:{
        '102':'42rem',
        '101':'35rem',
        '100':'28rem',
        '99':'20rem',
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