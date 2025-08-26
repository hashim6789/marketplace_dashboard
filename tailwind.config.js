/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}", // Include TS/TSX files
  ],
  theme: {
    extend: {
      colors: {
        procureBlue: "#304EA1",
      },
    },
  },
  plugins: [],
};
