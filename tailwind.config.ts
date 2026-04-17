import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a0f06",
          900: "#1a0f06",
          800: "#2a1a0e",
          700: "#3a2616",
        },
        honey: {
          50: "#f7efd9",
          100: "#efdfb3",
          200: "#e2c788",
          300: "#d4a960",
          400: "#c69749",
          500: "#b8860b",
          600: "#9a6e08",
          700: "#7a5706",
        },
        cream: {
          DEFAULT: "#f5ecd7",
          50: "#fbf6e7",
          100: "#f5ecd7",
          200: "#ecdcb7",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Fraunces", "serif"],
        display: ["var(--font-display)", "Fraunces", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.35em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(26, 15, 6, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
