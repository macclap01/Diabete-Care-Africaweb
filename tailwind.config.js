module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        primaryGreen: '#00A37A',
        primaryRed: '#FF0000',
        primaryBlue: '#0000FF',
        primaryYellow: '#FFFF00',
      },
    },
  },
  plugins: [],
};
