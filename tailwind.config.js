/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.indigo,
          main: colors.indigo["700"],
        },
      },
      keyframes: {
        appear: {
          "0%": { height: "fit-content", opacity: 0 },
          "100%": { height: "fit-content", opacity: 1 },
        },
      },
      animation: {
        appear: "appear 0.25s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
