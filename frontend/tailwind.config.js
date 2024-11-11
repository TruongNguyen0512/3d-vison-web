/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#fafafa",
        surface: "#202020",
      },
      textColor: {
        primary: "#000",
        secondary: "#202020",
        "text-btn": "#fff",
      },
      width: {
        container: "1060px",
      },
    },
  },
  plugins: [],
};
