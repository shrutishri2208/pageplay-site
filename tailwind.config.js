/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#fff500",
      },
      fontSize: {
        "7xl": "82px",
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
