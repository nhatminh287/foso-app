module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        lexend: ["var(--font-lexend-deca)", "sans-serif"],
        racing: ["var(--font-racing-sans-one)", "sans-serif"],
      },
      fontSize: {
        "6xl": "64px",
      },
      backgroundImage: {
        "banner-custom-gradient":
          "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)",
      },
    },
  },
  plugins: [],
};
