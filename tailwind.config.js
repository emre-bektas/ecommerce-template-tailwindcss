/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js}"],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        primary: {
          '50': '#edfcf4',
          '100': '#d4f7e2',
          '200': '#adedca',
          '300': '#78ddac',
          '400': '#41c68a',
          '500': '#21c07d',
          '600': '#118a5a',
          '700': '#0d6f4a',
          '800': '#0d583c',
          '900': '#0c4833',
          '950': '#05291d',
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

