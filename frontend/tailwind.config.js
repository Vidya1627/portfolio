/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], // Add Nunito as a custom font
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gooey': {
          filter: 'url(#gooey)',
        },
      });
    },
  ],
}
