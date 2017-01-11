const path = require('path');

const config = {
  context: path.join(__dirname, '/client'),
  entry: ['./index.js'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: ['json']
      }
    ]
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules')
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ]
  }
};

module.exports = config;
