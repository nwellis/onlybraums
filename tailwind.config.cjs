const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Pacifico", ...defaultTheme.fontFamily.sans],
        body: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
      gridTemplateRows: {
        "header-footer": "auto 1fr auto",
      },
      colors: {
        background: "#EDE1DA",
        black: {
          DEFAULT: "#1F1F1E",
          nearly: "#383736",
        },
        accent: {
          DEFAULT: "#B441A8",
          light: "#EBCBF4",
        },
      },
    },
  },
  plugins: [],
};
