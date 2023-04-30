/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Pixelated MS Sans Serif", "sans-serif", "!important"],
      },
    },
    fontFamily: {
      "pixelated-sans": ["Pixelated MS Sans Serif", "sans-serif"],
    },
  },
  plugins: [],
};
