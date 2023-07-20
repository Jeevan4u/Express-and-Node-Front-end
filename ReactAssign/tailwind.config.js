/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      brand_primary: "#28CB8B",
      brand_primary_fade: "#81C784",
      brand_secondary: "#263238",
      brand_info: "#2194f3",
      brand_success: "#2E7D31",
      brand_warning: "#FBC02D",
      brand_error: "#E53835",
      neutral_background: "#F5F7FA",
      white: "#FFFFFF",
      neutral_text: "#4D4D4D",
      neutral_text_fade: "#717171",
    },
    extend: {},
    fontFamily: {
      sans: ["Nexa", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
