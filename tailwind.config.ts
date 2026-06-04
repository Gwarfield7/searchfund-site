import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        ink: "#1F2937",
        navy: "#1E2A44",
        sage: "#7B8F7A",
        border: "#E8E4DD",
        card: "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "720px",
        wide: "1080px",
      },
    },
  },
  plugins: [],
};
export default config;
