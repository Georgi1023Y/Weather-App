/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1536px",
        sm: { min: "320px", max: "426px" },
        md: { min: "425px", max: "768px" },
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
