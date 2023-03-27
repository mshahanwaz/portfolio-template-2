/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        equalizer: 'playing 1s ease-in-out infinite',
        banner: 'bannermove 60s linear infinite',
      },
      keyframes: {
        playing: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '33%': { transform: 'scaleY(0.4)' },
          '67%': { transform: 'scaleY(0.8)' },
        },
        bannermove: {
          '0%': { translate: '0' },
          '100%': { translate: '-50%' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
