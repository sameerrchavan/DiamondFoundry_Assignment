const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const NODE_MODULES = path.resolve(__dirname, 'node_modules');

const config = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'react',
    'react-dom',
    `${SRC_DIR}/index.js`,
  ],
  output: {
    path: `${DIST_DIR}/app`,
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: 'app/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-class-properties', 'transform-decorators-legacy'],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(jpe?g|png|svg|woff2?|eot|ttf)$/,
        include: NODE_MODULES,
        loader: 'file-loader',
        query: {
          name: 'media/[name].[hash:8].[ext]',
        },
      }, {
        test: /\.svg$/,
        include: SRC_DIR,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src',
      },
      {
        test: /\.mp4$/,
        loader: 'url?limit=10000&mimetype=video/mp4',
      },
    ],
  },
};

module.exports = config;
