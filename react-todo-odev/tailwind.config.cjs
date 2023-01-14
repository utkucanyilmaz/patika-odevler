/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        titleColor: "rgb(175, 47, 47, 0.15)",
        cross: "#cc9a9a",
      },
    },
  },
  plugins: [],
};
