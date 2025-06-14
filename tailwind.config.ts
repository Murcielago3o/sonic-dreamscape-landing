
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: "#070c14",
        foreground: "#ebf0f7",
        primary: {
          DEFAULT: "#93b5e3",
          foreground: "#070c14"
        },
        secondary: {
          DEFAULT: "#1a4888",
          foreground: "#ebf0f7"
        },
        accent: {
          DEFAULT: "#317de5"
        },
        // Custom shadcn mapping
        card: { DEFAULT: "#0A1230", foreground: "#ebf0f7" },
        border: "#1a4888",
        muted: { DEFAULT: "#1a1d26", foreground: "#93b5e3" }
      },
      fontFamily: {
        sans: ['"DM Sans"', '"Inter"', "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        retro: "0 0 24px 2px #317de5, 0 0 64px 6px #1a488880",
      },
      keyframes: {
        glow: {
          "0%,100%": { boxShadow: "0 0 10px #317de555, 0 0 24px #93b5e355" },
          "50%": { boxShadow: "0 0 28px #93b5e399, 0 0 40px #317de5cc" },
        },
        pulseglow: {
          "0%,100%": { filter: "drop-shadow(0 0 0 #317de555)" },
          "50%": { filter: "drop-shadow(0 0 28px #317de5cc)" }
        }
      },
      animation: {
        'glow': 'glow 2.4s ease-in-out infinite',
        'pulseglow': "pulseglow 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
