const { colors } = require("./colors");
const getDarkTheme = require("./darkColors");
const getLight = require("./lightTheme");

const fs = require("fs").promises;
const getTheme = require("./theme");

const lightning = getTheme({
  theme: "dark",
  name: "Lightning",
  colors: colors,
});

const lightningDark = getDarkTheme({
  theme: "dark",
  name: "Lightning Dark",
});

const light = getLight({
  theme: "light",
  name: "Lightning Light",
});

// write themes
fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        "./themes/lightning-color-theme.json",
        JSON.stringify(lightning, null)
      ),
      fs.writeFile(
        "./themes/lightning-dark-color-theme.json",
        JSON.stringify(lightningDark, null)
      ),
      fs.writeFile(
        "./themes/lightning-light-color-theme.json",
        JSON.stringify(light, null)
      ),
    ])
  )
  .catch(() => process.exit(1));
