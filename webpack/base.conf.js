var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/main.js')]
  },

  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: 'js/[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV_PRODUCTION: false,
    }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'react-cli',
      template: path.resolve(__dirname, '../index.html')
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'common': path.resolve(__dirname, '../src/common'),
      'containers': path.resolve(__dirname, '../src/containers'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },

  resolveLoader: {
    fallback: [path.resolve(__dirname, '../node_modules')]
  },

  module: {
    // 暂时注释，报错
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'eslint',
    //     exclude: /(node_modules)/
    //   }, {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        exclude: /node_modules/
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'url?limit=8192&name=img/[name].[ext]',
        exclude: /node_modules/
      }
      ,
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url?limit=8192&name=font/[name].[ext]',
        exclude: /node_modules/
      }
    ]
  },

  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  vue: {
    loaders: {
      scss: 'vue-style!css!sass'
    },
    postcss: [require('autoprefixer')()]
  }
}
