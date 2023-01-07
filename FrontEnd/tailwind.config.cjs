/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        minus: "-0px",
      },
      spacing: {
        50: "3.125rem",
      },
      colors: {
        "custom-dark-purple": "#0F0D13",
        "custom-light-purple": "#2A2141",
        "custom-light-gray": "#E1E1E6",
      },
    },
  },
  plugins: [],
};
