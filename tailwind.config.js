module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { xsm: "390px" }, // => @media (min-width: 992px) { ... }
      colors: {
        prymaryBtnBG: "#DB2B39",
        prymaryShareButton: "#6D4534",
      },
    },
  },
  plugins: [],
};
