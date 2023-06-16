/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',

        md: '4rem',
      },
    },
    extend: {},
  },
  plugins: [],
};
