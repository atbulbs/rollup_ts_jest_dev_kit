import { Entry, Output, Options, Configuration } from 'webpack'
const resolve: Function = require('./webpack.config.util').resolve

const entry: Entry = {
  app: resolve('src/main.js')
}

const output: Output = {
  filename: '[name].[hash].js',
  chunkFilename: '[id].[chunkHash].js',
  path: resolve('output'),
}

const devtool: Options.Devtool = 'cheap-module-source-map'

const prodConfig: Configuration = {
  entry,
  output,
  devtool,
}

module.exports = prodConfig
