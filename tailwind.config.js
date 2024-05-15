/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "border-color": "#BEBEBE",
      "yellow-col": "#FFE793",
    },

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

      boxShadow: {
        "card-shadow": "0px 6px 50px 0px #E6E6E6",
      },

      backgroundImage: {
        "gradient-header":
          "linear-gradient(180deg, #FFE793 0%, rgba(255, 230.87, 147.05, 0) 100%)",
        "footer-gradient":
          "linear-gradient(180deg, rgba(255, 231, 147, 0.00) 0%, #FFE793 100%)",
      },
    },
  },
  plugins: [],
};
