export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'mc-teal': '#132b2f',
        'mc-teal-light': '#1e3d42',
        'mc-gold': '#d8920e',
        'mc-gold-light': '#f0a820',
        'mc-cream': '#F5F3EE',
        'mc-dark': '#0a1a1d',
      },
      fontFamily: {
        headline: ['"Red Hat Display"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        service: ['Raleway', 'sans-serif'],
        portfolio: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
