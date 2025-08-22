/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#6D28D9",
        accent: "#D97706"
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
