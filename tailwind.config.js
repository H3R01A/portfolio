/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,ts,tsx}', './**/*.html'],
  theme: {
    fontFamily: {
      buttonText: ['Orbitron', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        xanadu: {
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
          950: '#191b18',
        },
        heroTheme: {
          100: '#D9E5DB',
          200: '#6E756F',
          300: '#2E3E30',
          400: '#FFD889',
          500: '#CAD7CC',
        },
      },
      fontSize: {
        portfolioNG: [
          '1.5rem',
          {
            lineHeight: '1rem',
            letterSpacing: '0.075rem',
            fontWeight: '700',
          },
        ],
        portfolioBTN: [
          '1rem',
          {
            lineHeight: '1rem',
            letterSpacing: '0.075rem',
            fontWeight: '700',
          },
        ]
      },
      spacing: {
        200: '50rem',
      },
      backgroundImage: {
        'background-pattern': "url('/client/assets/black-glitch-bg.png')",
        'header-pattern':
          "url('/client/assets/portfolio-header-background.png')",
      },
    },
  },
  plugins: [],
};
