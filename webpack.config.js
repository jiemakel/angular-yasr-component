const path = require("path");
const webpack = require("webpack");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports = {
  entry: {
    "yasr-component": path.join(__dirname, './src/yasr-component.ts'),
    "yasr-component.min": path.join(__dirname, './src/yasr-component.ts')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    library: 'yasr-component',
    libraryTarget: 'umd'
  },
  devtool: "source-map",
  module: {
    rules: [ {
	    test: /\.ts$/,
	    use: [ 'ng-annotate-loader', 'ts-loader' ]
    } ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: {
    angular: 'angular',
    'yasgui-yasr': { amd: 'yasgui-yasr', root: 'YASR', commonjs: 'yasgui-yasr', commonjs2: 'yasgui-yasr' }
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "yasr-component Webpack build"
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
