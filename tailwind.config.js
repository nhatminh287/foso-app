module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      fontSize: {
        // Add custom sizes if needed
        "6xl": "64px",
      },
    },
  },
  plugins: [],
};
