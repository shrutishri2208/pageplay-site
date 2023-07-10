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
        "4xl": "3.2rem",
        "5xl": "4.2rem",
        "6xl": "5rem",
        "7xl": "5.5rem",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
    },
  },
  plugins: [],
};
