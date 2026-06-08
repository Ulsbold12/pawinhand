/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
      keyframes: {
        floatPaw: {
          "0%,100%": { transform: "translateY(0) rotate(var(--r,0deg))", opacity: "0.22" },
          "50%": { transform: "translateY(-22px) rotate(var(--r,0deg))", opacity: "0.55" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { transform: "scale(.5)", opacity: "0" },
          "60%": { transform: "scale(1.08)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pageIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        confettiPaw: {
          "0%": { transform: "translate(0,0) rotate(0)", opacity: "1" },
          "100%": { transform: "translate(var(--dx), var(--dy)) rotate(var(--rot))", opacity: "0" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(249,115,22,.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(249,115,22,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(249,115,22,0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp .6s cubic-bezier(.22,1,.36,1) both",
        pop: "popIn .55s cubic-bezier(.34,1.56,.64,1) both",
        page: "pageIn .5s cubic-bezier(.22,1,.36,1) both",
        "pulse-ring": "pulseRing 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
