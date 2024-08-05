/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "nunito" : '"Nunito", sans-serif',
      },
      colors:{
        primary:{
          100: '#4299e5',
          200: '#d78320',
          300: '#9f0f99',
          400: '#ff6109',
          500: '#64a0ad'
        },
        secondary:{
          100: '#136954c4',
          200: '#1190c9ab',
          300: '#232a81bf',
          400: '#ffd100',
          500: '#5c86c1'
        }
      }
    },
  },
  plugins: [],
}

