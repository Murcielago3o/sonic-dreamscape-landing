
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
        background: "#ffffff",
        foreground: "#222222",
        primary: {
          DEFAULT: "#ebebeb", // off-white gray
          foreground: "#222222"
        },
        secondary: {
          DEFAULT: "#6F6F6F", // neutral mid-gray
          foreground: "#222222"
        },
        accent: {
          DEFAULT: "#FC0019" // Nothing Red
        },
        // Extra mappings for shadcn compatibility
        card: { DEFAULT: "#f5f5f5", foreground: "#222222" },
        border: "#ededed",
        muted: { DEFAULT: "#ececec", foreground: "#6F6F6F" },
        destructive: "#FC0019",
      },
      fontFamily: {
        sans: ['"Inter"', '"DM Sans"', "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        retro: "0 0 12px 0 #ededed, 0 0 48px 0 #d6d6d6",
      },
      keyframes: {
        glow: {
          "0%,100%": { boxShadow: "0 0 8px #FC001966, 0 0 24px #22222240" },
          "50%": { boxShadow: "0 0 16px #FC0019aa, 0 0 32px #d6d6d699" },
        },
        pulseglow: {
          "0%,100%": { filter: "drop-shadow(0 0 0 #FC001999)" },
          "50%": { filter: "drop-shadow(0 0 14px #FC0019cc)" }
        }
      },
      animation: {
        'glow': 'glow 2.2s ease-in-out infinite',
        'pulseglow': "pulseglow 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

