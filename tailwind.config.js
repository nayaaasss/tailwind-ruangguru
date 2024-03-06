/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
    padding: {
      DEFAULT: '15px'
    }
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1330px',
  },
    
    extend: {
      colors: {
        primary: '#232745',
        secondary: '#2D3257',
        third: '#fff',
        accent: {
          DEFAULT:  '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd'
        },
      },
      fontFamily: {
        primary: 'Poppins',
      },
    },
  },
  plugins: [],
}


