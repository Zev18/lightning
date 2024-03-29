const { colors } = require("./colors");
const getDarkTheme = require("./darkColors");
const getLight = require("./lightTheme");
const getLightAlt = require("./lightAlt");
const getMaterialThemeDark = require("./materialThemeDark");
const getMaterialThemeLight = require("./materialThemeLight");
const getSoft = require("./soft.js");
const getSoftAlt = require("./softAlt.js");

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

const lightAlt = getLightAlt({
  theme: "light",
  name: "Lightning Cloud",
});

const materialMidnight = getMaterialThemeDark({
  theme: "dark",
  name: "Lightning Material - Midnight",
  bgColor: "#080725",
  saturation: "high",
});

const materialTwilight = getMaterialThemeDark({
  theme: "dark",
  name: "Lightning Material - Midnight",
  bgColor: "#2f2857",
  saturation: "low",
});

const materialEvening = getMaterialThemeDark({
  theme: "dark",
  name: "Lightning Material - Evening",
  bgColor: "#202657",
  saturation: "low",
});

const materialDay = getMaterialThemeLight({
  theme: "light",
  name: "Lightning Material - Day",
  bgColor: "#f3faff",
  saturation: "low",
});

const materialSoft = getMaterialThemeDark({
  theme: "dark",
  name: "Lightning Material - Soft",
  bgColor: "#262b3d",
  saturation: "low",
});

const soft = getSoft({
  theme: "dark",
  name: "Lightning Soft",
});

const softAlt = getSoftAlt({
  theme: "dark",
  name: "Lightning Soft - Dark",
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
      fs.writeFile(
        "./themes/lightning-light-alt-color-theme.json",
        JSON.stringify(lightAlt, null)
      ),
      fs.writeFile(
        "./themes/material-midnight-color-theme.json",
        JSON.stringify(materialMidnight, null)
      ),
      fs.writeFile(
        "./themes/material-twilight-color-theme.json",
        JSON.stringify(materialTwilight, null)
      ),
      fs.writeFile(
        "./themes/material-evening-color-theme.json",
        JSON.stringify(materialEvening, null)
      ),
      fs.writeFile(
        "./themes/material-day-color-theme.json",
        JSON.stringify(materialDay, null)
      ),
      fs.writeFile(
        "./themes/soft-color-theme.json",
        JSON.stringify(soft, null)
      ),
      fs.writeFile(
        "./themes/soft-dark-color-theme.json",
        JSON.stringify(softAlt, null)
      ),
      fs.writeFile(
        "./themes/material-soft-color-theme.json",
        JSON.stringify(materialSoft, null)
      ),
    ])
  )
  .catch(() => process.exit(1));
