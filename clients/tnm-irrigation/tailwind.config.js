/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f0faf0',
          100: '#dcf5dc',
          200: '#b8eab8',
          300: '#85d685',
          400: '#4dba4d',
          500: '#2d9e2d',
          600: '#1e7e1e',
          700: '#186018',
          800: '#154d15',
          900: '#103c10',
        },
        earth: {
          50:  '#faf8f5',
          100: '#f0ebe0',
          200: '#ddd2bc',
          300: '#c4b48f',
          400: '#a99060',
          500: '#8f7245',
          600: '#735a35',
          700: '#5a452a',
          800: '#453523',
          900: '#342819',
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
