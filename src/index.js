const { colors } = require("./colors");
const darkColors = require("./darkColors").colors;

const fs = require("fs").promises;
const getTheme = require("./theme");

const lightning = getTheme({
  theme: "dark",
  name: "lightning",
  colors: colors,
});

// write themes
fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        "./themes/lightning-color-theme.json",
        JSON.stringify(lightning, null)
      ),
    ])
  )
  .catch(() => process.exit(1));
