/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/preline/preline.js", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("preline/plugin")],
};
