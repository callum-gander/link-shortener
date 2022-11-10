const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      // backgroundImage: {
      //   jellyfish: "url('/public/jellyfish.png')",
      // },
      colors: {
        dark: '#222222',
        'background-blue': '#162F58',
        'light-blue': '#BAF4FF',
      },
    },
  },
}
