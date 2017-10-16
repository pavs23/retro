const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: '/dist/',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: path.join(__dirname, 'client/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
});