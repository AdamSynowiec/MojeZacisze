/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'], // Poppins font family
        montserrat: ['"Montserrat"', 'sans-serif'], // Montserrat font family
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400', // Regular weight
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      keyframes: {
        'backdrop-blur-fade': {
          '0%': { backdropFilter: 'blur(12px)' }, // Equivalent to backdrop-blur-md
          '100%': { backdropFilter: 'blur(0px)' }, // No blur
        },
      },
      animation: {
        'fade-blur': 'backdrop-blur-fade 3s forwards', // Animation duration: 3s, forwards keeps the final state
      },
    },
  },
  plugins: [],
};
