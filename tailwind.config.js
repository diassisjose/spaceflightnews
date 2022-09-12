/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          main: '#302E53',
          bluedark: '#1E2022',
          info: '#D07017'
        }
      },
      fontFamily: {
        brandRegular: ['Roboto Condensed'],
        brandBold: ['Roboto Condensed Bold']
      }
    }
  },
  plugins: []
}
