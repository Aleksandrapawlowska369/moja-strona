import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        heading: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        primary: "#3A84FF",
        background: {
          DEFAULT: "#1A1A1A",
          light: "#F8FAFC",
          muted: "#F1F5F9",
          dark: "#0F172A",
        },
        text: {
          dark: "#1E293B",
          light: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
