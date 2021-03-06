import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Cairo", "Helvetica Neue", "sans-serif"],
  bodyFontFamily: ["Cairo", "Helvetica Neue", "sans-serif"],
});

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
