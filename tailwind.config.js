const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--primary-background)",
        foreground: "var(--primary-foreground)",
        secondaryBackground: "var(--secondary-background)",
        secondaryForeground: "var(--secondary-foreground)",
      },
      animation: {
        avathar: "avathar 1.5s ease-in-out infinite",
      },
      keyframes: {
        avathar: {
          "0%, 100%":  {
            transform : "translateY(0)",
          },
          "50%": {
            transform : "translateY(-10px)",
          }
        }
      },
      fontFamily: {
        "liter" : ["Liter", 'serif'],
        "playfair" : ["Playfair Display", 'serif']
      },
    },
  },
  plugins: [],
};
