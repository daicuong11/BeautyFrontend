/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        toLeftRight: {
          '0%, 100%': { transform: 'translateX(4px)' },
          '50%': { transform: 'translateX(-4px)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}