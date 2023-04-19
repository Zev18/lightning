const fs = require("fs").promises;
const getTheme = require("./theme");

const lightning = getTheme({
  theme: "dark",
  name: "lightning",
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
