/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      fontFamily:{
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        black: {
          900: "#080c12",
          "900_05": "#080c1205",
          "900_38": "#00000038",
          "900_c4": "#0e0e0ec4",
        },
        blue: {
          300: "#6bc0ff",
          "300_01": "#68adff",
          "400_63": "#409fff63",
          a100: "#7abcff",
          a100_26: "#7abcff26",
          a200: "#3f90ff",
          a400: "#3c75ff",
          "a400_01": "#377ffb",
          a700: "#026bfa",
        },
        blue_gray: {
          100: "#d7d7d7",
          700: "#475467",
          "900_89": "#04203689",
        },
        deep_purple: {
          a100: "#b368ff",
        },
        gray: {
          100: "#f5f5f5",
          300: "#dfdfdf",
          400: "#afafaf",
          500: "#979797",
          700: "#646464",
          900: "#161616",
          "400_01": "#b4b4b4",
          "400_02": "#c9c9c9",
          "500_01": "#999999",
          "700_01": "#565656",
          "900_0a": "#1919190a",
          "900_42": "#041f3b42",
          "900_c4": "#191919c4",
        },
      },
    },
  },
  plugins: [],
}

