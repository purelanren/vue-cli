var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var baseConf = require('./base.conf.js')

baseConf.entry.app = baseConf.entry.app.concat([
  `webpack-dev-server/client?${config.assetsPublicPath}`,
  'webpack/hot/dev-server',
])

baseConf.plugins = baseConf.plugins.concat([
  new webpack.HotModuleReplacementPlugin()
])

baseConf.devtool = ['source-map']

module.exports = baseConf
