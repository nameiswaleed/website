import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#725DFF",
        secondary: "#725DFF",
        "light-black": "#818181",
        "light-grey": "#EBEBEB",
      },
    },
  },
  plugins: [],
};
export default config;
