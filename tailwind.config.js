/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', // Inclure tous les fichiers dans le dossier app
    './pages/**/*.{js,ts,jsx,tsx}', // Inclure tous les fichiers dans le dossier pages
    './components/**/*.{js,ts,jsx,tsx}', // Inclure tous les fichiers dans le dossier components
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
        'custom-tr': '18rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        'accordion-up': {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': "accordion-down 0.2s ease-out",
        'accordion-up': "accordion-up 0.2s ease-out",
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};
