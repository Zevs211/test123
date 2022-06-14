module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2.25rem',
    },
    fontFamily: {
      sans: ['Noto Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      bellota: ['Bellota Text', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        main: {
          100: '#AA9789',
          200: '#816B59',
        },
        grey: '#6F6D6B',
      },
    },
  },
  plugins: [],
}
