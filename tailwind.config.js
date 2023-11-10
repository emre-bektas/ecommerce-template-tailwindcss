/** @type {import('tailwindcss').Config} */

export default {
  content: ["src/**/*.{html,js}"],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        primary: {
          '50': '#f3faea',
          '100': '#e2f5d0',
          '200': '#c4edab',
          '300': '#91da72',
          '400': '#6ac851',
          '500': '#3ed025',
          '600': '#2dbb25',
          '700': '#249428',
          '800': '#267d2f',
          '900': '#286c34',
          '950': '#124e24',
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

