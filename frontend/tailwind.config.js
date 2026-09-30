/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effaf7',
          100: '#d7f4ec',
          200: '#abebdb',
          300: '#73d9c1',
          400: '#38c3a8',
          500: '#1fa684',
          600: '#12846a',
          700: '#116a57',
          800: '#125749',
          900: '#11483d',
        },
        ink: '#0f172a',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
