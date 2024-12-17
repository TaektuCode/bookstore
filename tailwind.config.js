/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules", "!./dist"],
  theme: {
    extend: {
      colors: {
        "midnight-blue": "#122e76",
        "amber-yellow": "#ffbf00",
        "soft-cream": "#FAF3E0",
        "dark-burgundy": "#800020",
        "light-blush": "#F6D2C1",
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
