/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "san-serif"],
        raleway: ["Raleway", "san-serif"],
      },
      colors: {
        primary: "#5ABBAD",
        danger: "#E42E2C",
        gray: {
          DEFAULT: "#818191",
          1: "#8E8EA3",
        },
        black: "#0F0E0E",
        sidebar: "#F3F5F9",
      },
      animation: {
        shake: "shake 0.2s ease-in-out 0s 2",
      },
      keyframes: {
        shake: {
          "0%": { "margin-left": "0" },
          "25%": { "margin-left": "0.5rem" },
          "75%": { "margin-left": "-0.5rem" },
          "100%": { "margin-left": "0" },
        },
      },
    },
  },
  plugins: [],
};
