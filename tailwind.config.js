/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#4E9F3D",
        primaryDark: "#1E5128",
        dark: "#020617",
        secondary: "#D8E9A8",
        accent: "#e0973a",
      },
      screens: {
        mn: "500",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
