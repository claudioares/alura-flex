/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'darkgray': '#262626',
        'blue':'#2271D1',
        'lightgray':'#A5A5A5',
        'frontend':'#6BD1FF',
        'erro':'#E53935',
        'backend':'#00C86F',
        'inovgestao':'#FFBA05'
      },
      boxShadow: {
        'shadow-button':'rgb(34, 113, 209) 0px 0px 10px 5px inset',
      }
    },
  },
  plugins: [],
}

