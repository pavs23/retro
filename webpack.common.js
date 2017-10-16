const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {

  entry:  './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.jsx', '.json', '.css', '.js' ],    
    alias: {
      'Components': path.resolve('./client/components'),
      'Classes':    path.resolve('./client/dtos'),
      'Styles':     path.resolve('./client/styles')
    }
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      { 
        test: /\.js$/, 
        loader: 'babel-loader', exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false,
      exclude: ['assets']
    })
  ]
};