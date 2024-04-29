/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '160': '40rem'
      },
      colors: {
        'black-bg': '#1E1E1E',
        'button-bg': '#F6995C',  
        'warna-tempat': '#7A8089',
      }
    },
  },
  plugins: [],
}

