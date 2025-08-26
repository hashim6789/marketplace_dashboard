/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}", // Include TS/TSX files
  ],
  safelist: [
    "bg-blue30",
    "bg-blue22",
    "text-blue30",
    "border-blue46",
    "hover:bg-blue22",
    "hover:bg-white0f",
    "hover:underline",
  ],
  theme: {
    extend: {
      colors: {
        blue30: "#304EA1",
        blue46: "#4668B1",
        blue22: "#223a7e",
        black01: "#010101",
        white0f: "#f0f4ff",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
