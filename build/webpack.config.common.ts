import { Resolve, RuleSetRule, Plugin, Configuration } from 'webpack'
const HTMLPlugin = require('html-webpack-plugin')
const _resolve: Function = require('./webpack.config.util').resolve

const mode: 'development' | 'production' | 'none' = (process.env.NODE_ENV as 'development' | 'production' | 'none') || 'production'

const target: 'web' | 'webworker' | 'node' | 'async-node' | 'node-webkit' | 'atom' | 'electron' | 'electron-renderer' | 'electron-main' | ((compiler?: any) => void) = 'web'

const resolve: Resolve = {
  extensions: ['.js', '.ts', '.jsx', '.json']
}

const rules: RuleSetRule [] = [
  {
    test: /\.ts$/,
    loader: 'ts-loader',
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
  },
]

const plugins: Plugin[] = [
  new HTMLPlugin({
    template: _resolve('index.html'),
    filename: 'index.html'
  })
]

const commonConfig: Configuration = {
  mode,
  target,
  resolve,
  module: {
    rules
  },
  plugins
}


module.exports = commonConfig
