const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const { resolveRoot } = require('./util');
const packageJSON = require('../package.json');
const webpackCommonConfig = require('./webpack.common.conf');
const author = typeof packageJSON.author === 'string' ? packageJSON.author : packageJSON.author.name;

module.exports = merge(webpackCommonConfig,{
  mode: 'production',
  devtool: false,
  entry: {
    'autolog': resolveRoot('./src/index.ts'),
    'autolog.min': resolveRoot('./src/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: resolveRoot(''),
    library: 'autolog',
    libraryTarget: 'umd',
    libraryExport: 'default',
    environment: {
      const: false,
      arrowFunction: false
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        include:/\.min\.js$/
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin(
      `${packageJSON.name} v${packageJSON.version}
(c) 2023-present${author ? ` ${author}` : ''}
Released under the MIT License.`
    )
  ]
});
