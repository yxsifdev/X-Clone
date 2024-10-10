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
        card_bg: "#1d9bf0",
        card_border: "#333639",
        text_color: "#9198a1",
        text_color_2: "#d1d7e0",
        text_color_3: "#e7e9ea",
        text_link: "#478be6",
        button_bg: "#1d9bf0",
        bg_color: "#212830",
        border_color: "#2f3336",
        input_border: "#212425",
        input_border_2: "#333639",
        input_bg: "#101214",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
