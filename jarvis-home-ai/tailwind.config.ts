import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        jarvis: {
          bg: "#050814",
          surface: "#08111f",
          panel: "#0b1426",
          card: "#101a2e",
          line: "#22324d",
          glow: "#46e6ff",
          cyan: "#62f4ff",
          green: "#6cffb8",
          amber: "#ffd166",
          red: "#ff6b6b",
          text: "#e8f8ff",
          muted: "#8ea6bf"
        }
      },
      backgroundImage: {
        "jarvis-radial": "radial-gradient(circle at top left, rgba(70,230,255,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(108,255,184,0.1), transparent 28%)",
        "scanline": "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)"
      },
      boxShadow: {
        glow: "0 0 34px rgba(70,230,255,0.20)",
        panel: "0 18px 60px rgba(0,0,0,0.35)"
      },
      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
export default config;
