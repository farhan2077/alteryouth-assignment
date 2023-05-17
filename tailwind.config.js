/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gilroy-bold": ["gilroy-bold", "sans-serif"],
        "gilroy-medium": ["gilroy-medium", "sans-serif"],
      },
      colors: {
        brand: "#1dc468",
      },
    },
  },
  plugins: [],
};
