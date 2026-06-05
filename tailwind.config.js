/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c2c2c',
        secondary: '#c9a86d',
        accent: '#f5f5f5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
