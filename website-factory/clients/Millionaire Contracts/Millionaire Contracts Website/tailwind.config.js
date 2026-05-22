export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'mc-teal': '#132b2f',
        'mc-gold': '#d8920e',
        'mc-cream': '#FFEEEF',
      },
      fontFamily: {
        headline: ['"Red Hat Display"', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        service: ['Raleway', 'sans-serif'],
        portfolio: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
