/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add this if using motion variants:
    "./node_modules/framer-motion/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
