/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'poke-gradient': 'linear-gradient(0deg, rgba(57, 37, 163, 1) 17.69%,rgba(120, 35, 187, 1) 82.96%)'
      })
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'poke-start': 'rgba(57, 37, 163, 1)',
      'poke-end': 'rgba(120, 35, 187, 1)',
    })
  },
  plugins: [],
}

