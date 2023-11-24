// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6843EC",
        gray: "#00000059",
      },
    },
  },
  plugins: [],
}

