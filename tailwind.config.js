/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c9ab81",
      },
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        Vestige: "Vestige",
        Josefin: "Josefin",
        Melodrama: "Melodrama",
        Outfit: "Outfit",
      },
      keyframes: {
        infiniteScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
