/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Bleu
        secondary: '#f97316', // Orange
      }
    },
  },
  plugins: [],
}
