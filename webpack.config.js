'use strict'; // eslint-disable-line strict

var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    "ng-redux": "./src/index.js",
    "ng-redux.min": "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      // Load in all modules through babel.
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel',
      },
    ]
  },
  plugins: [
    // Define free variables in the bundle
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production',
    }),
    // Clear the ./build/ folder before each build
    new CleanPlugin(path.resolve(__dirname, 'dist')),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ]
};
