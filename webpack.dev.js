const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: `${DIST_DIR}/app`,
  },
  devServer: {
    contentBase: './src',
  },
});
