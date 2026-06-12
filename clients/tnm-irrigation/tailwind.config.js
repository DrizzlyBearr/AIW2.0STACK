/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand teal - matches the geometric mark in the logo
        brand: {
          teal:       '#45BFBF',
          tealLight:  '#6DD0D0',
          tealPale:   '#E8F8F8',
          tealMid:    '#2E9D9D',
          tealDark:   '#1A7070',
          tealDeep:   '#0F4848',
          // Brand slate/purple - matches the "TNM" text in the logo
          slate:      '#566280',
          slateMid:   '#3D4A6B',
          slateDark:  '#2A334D',
          slateDeep:  '#1A2035',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
