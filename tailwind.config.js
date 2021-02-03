module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: '#3AABD2',
      marine: '#3B60D1',
      primary: '#D1603B',
      white: '#FFFFFF',
      gray: {
        100: '#777777',
        200: '#555555',
        300: '#d9d9d9',
        400: '#eeeeee'
      },
      modal: 'rgba(0,0,0,0.7)'
    }
  },
  variants: {},
  plugins: []
}
