const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "space-age": "Space Age",
        "inter": "Inter",
        "work-sans": "Work Sans"
      },
    },
  },
  plugins: [],
});
