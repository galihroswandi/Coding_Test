/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-second': '#EAB308',
        'primary': "#5352ED"
      },
      fontFamily: {
        'Neue-Bold': ["Neue-Bold", 'sans-serif']
      }
    },
  },
  plugins: [],
}

