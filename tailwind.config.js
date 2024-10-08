/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        "customl-tr": "18rem",
        "customm-tr": "18rem",
        "customs-tr": "16rem",
        "customx-tr": "10rem",
      },
      colors: {
        primary: "#111F22",
        secondary: "#FCFBF9",
        "green-dark": "#111F22",
        "green-light": "#244044",
        "turquoise-dark": "#8EBBC5",
        "turquoise-light": "#CBE0E4",
        white: "#FFFFFF",
        "yellow-neon": "#E1FF01",
      },
      fontFamily: {
        manrope: ["Manrope Variable", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        "2xl": "1536px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
        xxs: "320px",
      },
      spacing: {
        128: "32rem",
        160: "40rem",
        192: "48rem",
        200: "56rem",
        256: "64rem",
      },
    },
  },
};
