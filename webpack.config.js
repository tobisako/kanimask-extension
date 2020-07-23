//var webpack = require('webpack'),
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var options = {
  entry: {
    kani: path.join(__dirname, 'src', 'js', 'kani.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'kani.html'),
      filename: 'kani.html',
      chunks: ['kani'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/manifest.json', to: 'manifest.json' },
        { from: './src/img', to: 'img/[name].png' },
      ],
    }),
  ],
};

module.exports = options;
