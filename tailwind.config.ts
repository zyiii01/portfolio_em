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
        royal: "#280B45",
        magenta: "#61105E",
        rose: "#C84771",
        butter: "#FFE98A",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glowPulse: {
          "0%, 100%": {
            filter:
              "drop-shadow(0 0 14px rgba(255,233,138,0.55)) drop-shadow(0 0 30px rgba(255,233,138,0.2))",
          },
          "50%": {
            filter:
              "drop-shadow(0 0 26px rgba(255,233,138,0.85)) drop-shadow(0 0 60px rgba(255,233,138,0.35))",
          },
        },
        pulseBtn: {
          "0%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(255,233,138,0.5)" },
          "50%": { transform: "scale(1.035)", boxShadow: "0 0 0 12px rgba(255,233,138,0)" },
          "100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(255,233,138,0)" },
        },
      },
      animation: {
        breathe: "breathe 12s ease infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "pulse-btn": "pulseBtn 0.65s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
