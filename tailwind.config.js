/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class', // ← THIS IS CRITICAL
  theme: {
    extend: {},
  },
  plugins: [],
}
