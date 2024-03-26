import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "mainDark": "#292B32",
        "collectionDark": "#18282a",
        "CardDark": '#3b3e47',
        "lightSecondary":"#f7f7f8",
        "darkSecondary": "#dfdfdf",
        "button": "#2c9cf0"
      }
    },
  },
  plugins: [],
};
export default config;
