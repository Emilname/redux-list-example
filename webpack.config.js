var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./src/index'],
  devServer: { port: 3000, static: './dist', hot: true },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
    clean: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel-loader'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.png', '.wasm', '.mjs', '.json'],
  },
};

