/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "640px",
      lg: "900px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      sans: ["Hanken Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
