/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        light: {
          green: "#0EE78C",
          gray: "#4C4E4D",
          "dark-gray": "#151515",
          white: "#202020",
          card: "#2F4B3E",
          purple: "#9A45FF",
          text: "#131212",
        },
        dark: {
          green: "#16F195",
          gray: "#CECFCF",
          "dark-gray": "#9E9E9E",
          white: "#FFFFFF",
          card: "#D8FDEB",
          purple: "#A953FE",
          text: "white",
        },
      },
      fontFamily: {
        body: ["Inter"],
      },
      screens: {
        sm: "360px",
        md: "868px",
        lg: "1110px",
        xl: "1440px",
      },
      width: {
        "card-lg": "265.5px",
        "card-sm": "333px",
        58: "240px",
        45: "184px",
      },
      height: {
        card: "196px",
      },
      maxWidth: {
        45: "184px",
        58: "240px",
        868: "868px",
      },
      minWidth: {
        45: "184px",
      },
      fontSize: {
        "x-sm": ["0.688rem", "13.31px"],
        "sm-1": ["0.938rem", "24px"],
        "base-1": ["1.063rem", "20.57px"],
        lg: ["1.125rem", "20px"],
        "2xl-1": ["1.75rem", "28px"],
        "3xl-1": ["2.25rem", "41.76px"],
        "4xl-1": ["2.5rem", "48.41px"],
        "5xl-1": ["3.25rem", "62.93px"],
      },
      lineHeight: {
        6.5: "1.625rem",
        10.5: "2.606rem",
        11: "3rem",
      },
      spacing: {
        5.5: "1.313rem",
      },
      gap: {
        9: "2.188rem",
      },
      gridTemplateColumns: {
        2: "repeat(2, minmax(152px, 1fr))",
        3: "repeat(3, minmax(152px, 1fr))",
        6: "repeat(6, minmax(152px, 1fr))",
        "rsn-card-1": "repeat(1, minmax(328px, 900px))",
        "rsn-card-2": "repeat(2, minmax(328px, 900px))",
        "rsn-card-3": "repeat(3, minmax(328px, 900px))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
