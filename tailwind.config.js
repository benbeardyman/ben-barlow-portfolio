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
        primary: "Semplicita Light",
        title: "Semplicita Ombra",
        header: "Semplicita Medium",
      },
    },
  },
  plugins: [],
}

