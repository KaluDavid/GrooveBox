/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Vazirmatn: ["Vazirmatn", "sans-serif"],
      Anton: ["Anton", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      pink: "#EE10B0",
      white: "#FFFFFF",
      blue: "#0E9EEF",
      borderColor: "#D9D8DD",
      bgColor: "#181818",
      darkGray: "#1F1F1F",
      grey: "#A7AAB5",
    },
    boxShadow: {
      landing: "0px 20px 90px -12px #EE10B0",
    },
    dropShadow: {
      side: "8px 0px 24.2px 0px #EE10B026",
    },
    extend: {},
  },
  plugins: [],
};
