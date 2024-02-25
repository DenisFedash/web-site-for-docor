/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        corsa: ["Corsa Grotesk"],
        corsaThin: ["Corsa Grotesk Thin"],
        poiret: ["Poiret One"],
      },

      backgroundColor: {
        "btn-bg": "#FFE793",
        "btn-active": "#FFDF44",
        "experience-bg": "#FFF7D2",
      },

      backgroundImage: {
        "gradient-header":
          "linear-gradient(180deg, #FFE793 0%, rgba(255, 230.87, 147.05, 0) 100%)",
      },
    },
  },
  plugins: [],
};
