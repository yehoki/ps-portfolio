/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      backgroundColor: {
        psText: '#d7f3f4',
        psBg: '#0b2728',
        psPrimary: '#2b5e9c',
        psSecondary: '#3c1310',
        psAccent: '#ce934b',
        // psBlack: '#0B0C10',
        // psNavy: '#1F2833',
        // psGrey: '#C5C6C7',
        // psMint: {
        //   light: '#66FCF1',
        //   dark: '#45A29E',
        // },
      },
      textColor: {
        psText: '#d7f3f4',
        psBg: '#0b2728',
        psPrimary: '#2b5e9c',
        psSecondary: '#3c1310',
        psAccent: '#ce934b',
      },
    },
  },
  plugins: [],
};
