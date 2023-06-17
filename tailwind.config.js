/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '390px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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

