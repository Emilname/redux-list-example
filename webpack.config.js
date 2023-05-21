var path = require('path');
var webpack = require('webpack');
console.log(path.join(__dirname) + "/index.html");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".png", ".wasm", ".mjs", ".json"],
  },
};

// module.exports = {
//   entry: ["./src/index"],
//   devServer: {
//     port: 3000,
//     static: "./dist",
//     historyApiFallback: {
//       index: path.join(__dirname) + "/index.html",
//     },
//     hot: true,
//   },
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [["@babel/preset-env", { targets: "defaults" }]],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".png", ".wasm", ".mjs", ".json"],
//   },
// };

