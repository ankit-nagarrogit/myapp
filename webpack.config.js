const path = require("path");

module.exports = {
  entry: "./app.js", // Adjust path to your main file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  target: "node", // Since it's a Node app
  mode: "production",
};
