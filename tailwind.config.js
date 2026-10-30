/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { navy: "#102c46", teal: "#0b8278", gold: "#d5a64b", mist: "#f3f7f8" }, fontFamily: { sans: ["Inter", "Arial", "sans-serif"] } } },
  plugins: []
};
