const path = require('path');
const webpack = require('webpack');

if (!process.env.NODE_ENV) {
  throw new Error('Define a NODE_ENV env var, it can be development or production.');
}

const DEBUG = process.env.NODE_ENV === 'development';

const config = {
  context: path.join(__dirname, '/client'),
  entry: [
    ...DEBUG ? [
      'react-hot-loader/patch', // activate HMR for react
      'webpack-hot-middleware/client'
    ] : [],
    'normalize.css/normalize.css',
    'flexboxgrid/dist/flexboxgrid.min.css',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/'
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
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: DEBUG,
            minimize: !DEBUG,
            modules: true,
            localIdentName: DEBUG ? '[local]--[hash:base64:2]' : '[hash:base64:4]'
          })}`,
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: ['json-loader']
      }
    ]
  },
  plugins: [
    ...DEBUG ? [
      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ] : []
  ],
  target: 'web',
  devtool: 'source-map'
};

module.exports = config;
