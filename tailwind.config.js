/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "358px",
      md: "710px",
      lg: "1260px",

    },
    extend: {
      fontFamily: {
        bebasNeue: ["bebasNeue", "sans-serif"],
        robotoCondensed: ["robotoCondensed", "sans-serif"],
        robotoFlex:["robotoFlex", "sans-serif"]
      },
      colors: {
        secondTextColor: " #0147FF",
        backgroundColor: "#F7F7F7",
        mainTextColor: " #282828",
      },

      transitionDuration: {
        DEFAULT: "300ms",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
