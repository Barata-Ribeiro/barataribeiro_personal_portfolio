/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        heroBackground: "url('/assets/img/cloudsBackground.jpg')",
      },
      boxShadow: {
        about:
          'inset 0px 48px 0px 0px rgba(5,4,1,1), inset 0px -48px 0px 0px rgba(75,73,67,1)',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
        Comfortaa: ['Comfortaa', 'sans-serif'],
      },
      colors: {
        rioGrande: {
          50: '#f8fee8',
          100: '#eefec3',
          200: '#e3fe8a',
          300: '#d9fd47',
          400: '#d6fa15',
          500: '#d1ea08',
          600: '#d2d904',
          700: '#a19907',
          800: '#85770e',
          900: '#716112',
          950: '#423506',
        },
        royalBlue: {
          50: '#f0f8fe',
          100: '#dceffd',
          200: '#c1e4fc',
          300: '#97d4f9',
          400: '#66bcf4',
          500: '#429fef',
          600: '#2b81e3',
          700: '#246cd1',
          800: '#2458a9',
          900: '#224b86',
          950: '#192f52',
        },
        mistGray: {
          50: '#f7f7f5',
          100: '#ecece8',
          200: '#d7d7d1',
          300: '#c4c4bb',
          400: '#a2a195',
          500: '#908e7f',
          600: '#838073',
          700: '#6e6b60',
          800: '#5b5951',
          900: '#4b4943',
          950: '#272623',
        },
      },
    },
  },
  plugins: [],
};
