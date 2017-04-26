const path = require('path');
const webpack = require('webpack');
const conf = require('./gulp.conf');
const autoprefixer = require('autoprefixer');
const FailPlugin = require('webpack-fail-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    loaders: [{
      test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
      loader: 'imports-loader?jQuery=jquery'
    }, {
      test: /\.(woff2?|svg)$/,
      loader: 'url-loader?limit=10000'
    }, {
      test: /\.(ttf|eot)$/,
      loader: 'file-loader'
    }, {
      test: /\.json$/,
      loaders: ['json-loader']
    }, {
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'tslint-loader',
      enforce: 'pre'
    }, {
      test: /\.(css|scss)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }, {
      test: /\.ts$/,
      exclude: /node_modules/,
      loaders: ['ts-loader']
    }, {
      test: /\.html$/,
      loaders: ['html-loader']
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      conf.paths.src
    ),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer],
        resolve: {},
        ts: {
          configFileName: 'tsconfig.json'
        },
        tslint: {
          configuration: require('../tslint.json')
        }
      },
      debug: true
    })
  ],
  output: {
    filename: 'index.js',
    path: path.join(process.cwd(), conf.paths.tmp)
  },
  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ]
  },
  devtool: 'source-map',
  entry: [
    'bootstrap-loader',
    'font-awesome-loader',
    `./${conf.path.src('index')}`
  ]
};
