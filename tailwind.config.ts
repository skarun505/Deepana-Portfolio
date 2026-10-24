import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surfaceSoft: "var(--surface-soft)",
        ink: "var(--ink)",
        inkMuted: "var(--ink-muted)",
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
        accent: "var(--accent)",
        border: "var(--border)",
        success: "var(--success)",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(20, 20, 43, 0.06)",
        hover: "0 12px 32px rgba(20, 20, 43, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
