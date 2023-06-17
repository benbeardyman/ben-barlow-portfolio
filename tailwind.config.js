/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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

