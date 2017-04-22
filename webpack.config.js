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
    ]
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: false,
    //   }
    // }),
  ],
};
