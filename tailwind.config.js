/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        navy: '#162647',
        red: '#e9373c',
      }
    },
  },
  plugins: [],
}
