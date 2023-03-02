/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        music: 'music 1s ease-in-out infinite',
      },
      keyframes: {
        music: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '33%': { transform: 'scaleY(0.2)' },
          '67%': { transform: 'scaleY(0.5)' },
        },
      },
    },
  },
  plugins: [],
};
