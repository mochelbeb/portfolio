/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{ts,tsx}",
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
        background: colors.gray["800"],
      },
      keyframes: {
        appear: {
          "0%": { height: "fit-content", opacity: 0 },
          "100%": { height: "fit-content", opacity: 1 },
        },

        rotate: {
          from: { rotate: "0deg" },
          "50%": { scale: "2 1.5" },
          to: {
            rotate: "360deg",
          },
        },
      },
      animation: {
        appear: "appear 0.25s ease-in-out forwards",
      },
      animation: {
        "spin-slow": "rotate 13s linear infinite",
      },
    },
  },
  plugins: [],
};
