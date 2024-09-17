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
        ghost_white: "var(--background)",
        eerie_black: "var(--foreground)",
        light_gray: "var(--light_gray)",
      },
    },
  },
  plugins: [],
};
export default config;
