/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 20s linear infinite",
      },
      borderRadius: {
        "customl-tr": "18rem",
        "customm-tr": "18rem",
        "customs-tr": "16rem",
        "customx-tr": "10rem",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        base: "16px",
      },
      fontWeight: {
        medium: 500,
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
      lineHeight: {
        normal: "26px",
      },
      screens: {
        "3xl":"1536",
        "2xl": "1440px",
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
