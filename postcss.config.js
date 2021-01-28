module.exports = {
  plugins: {
    tailwindcss: { config: './tailwind.config.js' },
    'postcss-preset-env': {
      autoprefixer: {},
      features: {
        'nesting-rules': true
      }
    }
  }
}
