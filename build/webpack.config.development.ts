const webpack = require('webpack')
import * as WebpackDevServer from 'webpack-dev-server'
import { Entry, Output, Plugin, Configuration, Options } from 'webpack'
const resolve: Function = require('./webpack.config.util').resolve

const entry: Entry = {
  app: resolve('test/main.ts'),
}

const output: Output = {
  filename: '[name].js',
  path: resolve('output'),
  publicPath: '/'
}

const devtool: Options.Devtool = 'cheap-module-eval-source-map'

const plugins: Plugin[] = [
  new webpack.HotModuleReplacementPlugin()
]

const devServer: WebpackDevServer.Configuration = {
  host: '0.0.0.0',
  port: 8000,
  overlay: {
    errors: true
  },
  hot: true,
  open: false,
  useLocalIp: true
}

const devConfig: Configuration = {
  entry,
  output,
  devtool,
  plugins,
  devServer,
}

module.exports = devConfig
