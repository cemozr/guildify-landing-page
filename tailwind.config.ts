import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ff6b00",
        "primary-hover": "#e65100",
        "secondary": "#fb923c",
        "background-dark": "#000000",
        "background-card": "#0a0a0a",
        "surface-dark": "#121212",
        "border-dark": "#262626",
        "text-main": "#f5f5f5",
        "text-muted": "#a3a3a3",
        "accent-gold": "#fdba74",
        "status-green": "#00c853",
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"],
        "sans": ["Spline Sans", "sans-serif"],
        "cinzel": ["Cinzel", "serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 50% 30%, rgba(255, 107, 0, 0.15) 0%, rgba(0, 0, 0, 0) 60%)",
        "secondary-glow":
          "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(18, 18, 18, 1) 0%, rgba(10, 10, 10, 1) 100%)",
      },
      boxShadow: {
        "glow-primary": "0 0 25px rgba(255, 107, 0, 0.3)",
        "glow-secondary": "0 0 25px rgba(251, 146, 60, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
