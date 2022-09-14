const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modlues/,
        loader: "babel-loader",
      },
    ],
  },
};
