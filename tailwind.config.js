module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Lato", "sans-serif"],
        myFont2: ["Poppins", "sans-serif"],
      },

      colors: {
        myBlue: "#2DB4C7",
        myBlack: "rgba(0, 0, 0, 0.9)",

        myGray: "rgba(255, 255, 255, 0.8)",
        myGray2: "rgba(255, 255, 255, 0.6)",
        myGray3: "rgba(255, 255, 255, 0.9)",
        myWhite: "#FFFFFF",
      },

      animation: {
        text: "text 10s ease-in-out infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "300% 300%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "300% 300%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
