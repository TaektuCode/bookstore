/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "midnight-blue": "#122e76",
        "amber-yellow": "#ffbf00",
      },
      fontFamily: {
        dancingScript: ["Dancing Script", "cursive"],
        lato: ["lato", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
