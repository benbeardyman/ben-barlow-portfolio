/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '481px',
      // => @media (min-width: 481px) { ... }

      'laptop': '729px',
      // => @media (min-width: 729px) { ... }

      'desktop': '1025px',
      // => @media (min-width: 1025px) { ... }

      'large-screen': '1201px'
      // => @media (min-width: 1201px) { ... }
    },
    extend: {
      colors: {
        'clotted-cream': '#FFFBEF',
        'coral': '#FF9C99',
        'seagrass': '#A4F2DF',
        'turq': '#99E9F2'
      },
      fontFamily: {
        primary: 'Semplicita Light',
        title: 'Semplicita Ombra',
        header: 'Semplicita Medium',
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 3.5s  ease-in-out',
        }
      },

      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      }),
    },
  plugins: [],
}

