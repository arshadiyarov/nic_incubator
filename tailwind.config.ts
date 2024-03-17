import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        other: "#799BA4",
        otherSecond: "#5C8692",
        primary: "#EBF3F5",
        secondary: "#1E2C30",
        text: "#555555",
        designBlack: "#141414",
        copy: "#111E22",
      },
      fontFamily: {
        playfair: "Playfair Display, sans-serif",
        manrope: "Manrope, sans-serif",
      },
      backgroundImage: {
        background1: "url('/img/background.jpg')",
        background2: "url('/img/aboutUsMainImgBg.jpg')",
        background3: "url('/img/ourServicesBg.png')",
        mainBanner: "url('/img/mainBannerBg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
