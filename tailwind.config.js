/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js}"],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        primary: {
          '50': '#eafff6',
          '100': '#cbffe8',
          '200': '#9cfed7',
          '300': '#5df8c5',
          '400': '#2debb2',
          '500': '#00d197',
          '600': '#00ab7c',
          '700': '#008867',
          '800': '#006c53',
          '900': '#005846',
          '950': '#003228',
        },
      },
      fontSize: {
        xxs: ['0.68rem', '.8rem'],
        s: "0.813rem",
        m: ['0.9rem', '1.3rem'],

      },
    },
  },
  plugins: [],
}

