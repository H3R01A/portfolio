/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,ts,tsx}', './**/*.html'],
  theme: {
    extend: {
      colors: {
        xanadu:{
          50: '#f6f7f6',
					100: '#e3e5e2',
					200: '#c6cbc4',
					300: '#a2a99f',
					400: '#788074',
					500: '#636c60',
					600: '#4e564b',
					700: '#40463f',
					800: '#363a35',
					900: '#30332e',
					950: '#191b18'
        }
      },
      spacing: {
        '200': '50rem',
      }
    },
  },
  plugins: [],
};
