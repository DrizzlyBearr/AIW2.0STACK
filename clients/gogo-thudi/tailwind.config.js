/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep night indigo, the base of the brand
        night: {
          DEFAULT: '#1E1633',
          mid:     '#2C2148',
          soft:    '#3D3060',
        },
        // Ochre gold, used for accents and calls to action
        ochre: {
          DEFAULT: '#C8963E',
          light:   '#E4C07A',
          dark:    '#A3762A',
        },
        // Red earth, a nod to beadwork and clay
        clay: {
          DEFAULT: '#B5532F',
          dark:    '#8E3F22',
        },
        cream: {
          DEFAULT: '#FAF5EC',
          deep:    '#F1E7D6',
        },
        ink: '#2A2320',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
