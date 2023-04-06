/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          {
            fontFeatureSettings: '"cv02","cv03","cv04","cv11"',
          },
        ],
      },
      backgroundImage: {
        pattern: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23e5e7eb'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e ")`,
        'pattern-dark': `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23374151'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e ")`,
      },
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
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
