/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // yellow: "#ffef02",
        yellow: "#fff500",
      },
      fontSize: {
        "7xl": "90px",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
    },
  },
  plugins: [],
};
