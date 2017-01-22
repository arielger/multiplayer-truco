const path = require('path');

const config = {
  context: path.join(__dirname, '/client'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: ['json-loader']
      }
    ]
  },
  target: 'web',
  devtool: 'source-map'
};

module.exports = config;
