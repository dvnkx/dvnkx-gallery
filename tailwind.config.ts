import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll-to-left":
          "infinite-scroll-to-left 35s linear infinite",
        "infinite-scroll-to-right":
          "infinite-scroll-to-right 35s linear infinite",
      },

      keyframes: {
        "infinite-scroll-to-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-to-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      colors: {
        ghost_white: "var(--ghost_white)",
        light_gray: "var(--light_gray)",
        philippine_gray: "var(--philippine_gray)",
        charleston_green: "var(--charleston_green)",
        eerie_black: "var(--eerie_black)",
        auburn: "var(--auburn)",
      },
    },
  },
  plugins: [],
};
export default config;
