module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'homeProjectBanner1': "url('https://cdn.sanity.io/images/7vv89ze2/production/5ca9d0178a34977cf346a6af613f1ac97b6392cb-3840x2160.png')",
        'homeProjectBanner2': "url('https://cdn.sanity.io/images/7vv89ze2/production/06548c4f4c8b9168db8a001a6932265c7337d923-3840x2160.jpg')",
        'homeProjectBanner3': "url('https://cdn.sanity.io/images/7vv89ze2/production/29ee76d858039c3cd89d59f1cad61d5da1b2e587-3840x2160.png')",
        'homeProjectBanner4': "url('https://cdn.sanity.io/images/7vv89ze2/production/022eaf87719d72b480f4f75125b1cf01d3ee6189-3840x2160.png')",
        'homeProjectBanner5': "url('https://cdn.sanity.io/images/7vv89ze2/production/69bdcb12e8fb64be25d61fa76c8968bb9997cb47-3840x2160.png')",
      },

      typography: {
        'red-a': {
          css: {
            a: {
              color: '#FFFF00',
            },
          },
        },
      },

      fontFamily: {
        pfFont: ["Lato", "sans-serif"],
        pfFont2: ["Manrope", "sans-serif"],
        pfFont3: ["Poppins", "sans-serif"],
        pfFont4: ["Lexend", "sans-serif"],
      },

      colors: {
        pcBlue: "#2DB4C7",
        pcBlack: "rgba(0, 0, 0, 0.9)",
        pcBlack2: "#232323",
        pcGray: "rgba(255, 255, 255, 0.8)",
        pcGray2: "rgba(255, 255, 255, 0.6)",
        pcGray3: "rgba(255, 255, 255, 0.9)",
        pcWhite: "#FFFFFF",
        pcGreen: "#98FB98",
        pcR1: "#CB2821",
        pcR2: "#84C3BE",
        pcR3: "#EC7C26",
        pcPlangora1: "#4DB852",
        pcPlangora2: "rgba(243, 255, 243, 0.6)",
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
  plugins: 
  [
    require("@tailwindcss/typography"),
  ]
};
