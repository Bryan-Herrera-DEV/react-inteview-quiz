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
    screens: {
      'xs': '480px',
      'ss': '620px',
      'sm': '768px',
      'md': '1060px',
      'lg': '1200px',
      'xl': '1700px',
    },
  },
  plugins: [],
}
