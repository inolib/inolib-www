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
      screens: {
        '2xl':  '1536px', 
        'xl':  '1280px' , 
        'lg':  '1024px' ,
        'md':  '768px' ,
        'sm':  '640px' ,
        'xs':  '480px' ,
        'xxs':'320px' ,
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '200': '56rem',
        '256': '64rem',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        'medium': 500,
      },
      fontSize: {
        'base': '16px',
      },
      lineHeight: {
        'normal': '26px',
      },
      borderRadius: {
        'customl-tr': '18rem',
        'customm-tr': '18rem',
        'customs-tr': '16rem',
        'customx-tr': '10rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};
