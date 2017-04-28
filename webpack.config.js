var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: { main: "./src/main.tsx" },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "build/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [ { loader: "ts-loader" } ]
      }
    ],
    // Do not parse react modules
    noParse: [ /^react$/, /^react-dom$/ ],
  },
  externals: {
      // Use external version of react modules (in HTML script) 
      "react": "React",
      "react-dom": "ReactDOM"
  },
  devtool: "source-map",
};
