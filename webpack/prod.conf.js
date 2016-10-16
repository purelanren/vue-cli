var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = require('../config')
var baseConf = require('./base.conf.js')

baseConf.output.filename = 'js/[name].[chunkhash].js'

baseConf.plugins = baseConf.plugins.concat([
  new webpack.DefinePlugin({
    ENV_PRODUCTION: true,
  }),
  new ExtractTextPlugin('css/[name].[chunkhash].css'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
])

baseConf.vue.loaders = {
  scss: ExtractTextPlugin.extract('css!sass')
}

module.exports = baseConf
