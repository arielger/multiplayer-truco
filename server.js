const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, 'www')));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true
}));

// Always return the root index.html, even in nested routes
// Based on https://github.com/gaearon/react-transform-boilerplate/blob/master/devServer.js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port); // eslint-disable-line no-console
});
