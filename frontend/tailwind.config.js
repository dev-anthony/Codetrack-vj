/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Enables class-based dark mode
  
    content: [
       "./src/**/*.{html,js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        fontFamily:{
          sans : ['Segoe UI', 'Helvetica'],
          Gotham: ['Gotham Rounded', 'sans-serif'],
          paci: ['Pacifico ', 'cursive'],
           nun: [ "Nunito", "sans-serif"]
        },
        animation: {
          fadeInLeft: 'fadeInLeft 1s ease-out forwards',
          fadeUp: 'fadeUp 1s ease-out forwards',
          fadeDown: 'fadeDown 1s ease-out forwards',
          fadeInRight: 'fadeInRight 1s ease-out forwards',
        },
        keyframes: {
          fadeInLeft: {
            '0%': { opacity: 0, transform: 'translateX(-100%)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
          fadeUp: {
            '0%': { opacity: 0, transform: 'translateY(50px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          fadeDown: {
            '0%': { opacity: 0, transform: 'translateY(-50px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          fadeInRight: {
            '0%': { opacity: 0, transform: 'translateX(-100px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
        },
      },
    },
    plugins: [],
  };
  
  