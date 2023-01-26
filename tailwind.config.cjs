/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'all',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        reactBlue: "#61dafb",
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
