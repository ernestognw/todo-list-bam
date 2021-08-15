const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin([
      {
        from: "./src/index.html",
        to: "index.html",
      },
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
  },
};
