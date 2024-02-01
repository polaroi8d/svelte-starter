/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'translate-horizontally': {
          '0%': {
            transform: 'translateX(5%) translateZ(0)',
          },
          '50%': {
            transform: 'translateX(0%) translateZ(0)',
          },
          '100%': {
            transform: 'translateX(-5%) translateZ(0)',
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'translate-horizontally':
          'translate-horizontally 10s linear 0s infinite alternate forwards',
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
      },
      minHeight: {
        23: '5.75rem',
      },
      maxWidth: {
        116: '29rem',
        236: '59rem',
      },
      borderRadius: {
        md: '20px',
      },
    },
  },
  plugins: [],
};
