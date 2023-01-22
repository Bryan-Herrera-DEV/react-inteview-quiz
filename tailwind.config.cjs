/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'all',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'primary':'#0D0D0D',
        'secondary':'#8A8A8A'
      }
    },
  },
  plugins: [],
}
