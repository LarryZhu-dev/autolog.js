const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { resolveRoot } = require("./util");
const webpackCommonConfig = require("./webpack.common.conf");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  entry: resolveRoot("./dev/index.ts"),
  output: {
    filename: "autolog.min.js",
    path: resolveRoot(""),
    library: "autolog",
    libraryTarget: "umd",
    environment: {
      const: false,
      arrowFunction: false,
    },
  },
  devServer: {
    compress: true,
    port: 9000,
    static: {
      watch: true,
      directory: resolveRoot("./dev"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "autolog.js dev",
      favicon: resolveRoot("./autolog.svg"),
      template: resolveRoot("./dev/index.html"),
    }),
  ],
});
