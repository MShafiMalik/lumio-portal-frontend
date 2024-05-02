/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-inactive':
          'linear-gradient(0deg, rgba(205, 205, 205, 0.1), rgba(205, 205, 205, 0.1)), linear-gradient(120.1deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 94.07%)',
        'gradient-active':
          'linear-gradient(0deg, rgba(255, 146, 67, 0.2), rgba(255, 146, 67, 0.2)),linear-gradient(121.08deg, rgba(255, 201, 97, 0.41) 0%, rgba(255, 234, 162, 0) 69.61%)',
      }),
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      roboto: ['Roboto', 'ui-sans-serif', 'system-ui'],
      montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};
