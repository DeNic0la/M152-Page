module.exports = {
  content: [
      "./src/**/*.{html,js}",
      "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#355C7D',
      'accent': '#6C5B7B',
      'secondary': '#C06C84',
      'le-text': '#383838',
      'success': '#8FB9A8',
      'warn': '#FF964F',
      'error': '#B80F0A',
      'info': '#78A2CC',
      'grey': '#808080',
      'light-grey': '#909090',
      'white-grey': '#d1d1d1',
    },
    fontFamily: {
      'header': ['Black Ops One','system-ui'],
      'default': ['Hubballi','Georgia'],
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
