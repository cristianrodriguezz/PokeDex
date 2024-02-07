/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'honk': ['Honk', 'sans-serif'],
        'noto': ['Noto Sans Mono', 'sans-serif'],
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    }
  },
  plugins: [],
}
