import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        sans: ["system-ui", "sans-serif" ,"Roboto"],
        rounded: ["Arial Rounded MT Bold", "Verdana", "Trebuchet MS", "sans-serif"],
        serif: ["Georgia", "serif","Merriweather"],
        mono: ["Menlo", "monospace","Poppin"],
        poppins: ["Poppins", "sans-serif"]
      },



    },
  },
  plugins: [],
} satisfies Config;

