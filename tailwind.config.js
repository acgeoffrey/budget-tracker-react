/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif',
    },
    extend: {
      fontFamily: {
        number: 'Montserrat, sans-serif',
      },
      backgroundColor: {
        backdrop: 'rgb(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
