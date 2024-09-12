/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: { max: "500px" },
      laptop: { min: "900px" },
    },
  },
  plugins: [],
};
