import { Configuration } from 'webpack'

const merge: Function = require('webpack-merge')
const commonConfig: Configuration = require('./webpack.config.common')
const developmentConfig: Configuration = require('./webpack.config.development')
const productionConfig: Configuration = require('./webpack.config.production')
const isDev: Boolean = require('./webpack.config.util').isDev

let webpackConfig: Configuration

if (isDev) {
  webpackConfig = merge(commonConfig, developmentConfig)
} else {
  webpackConfig = merge(commonConfig, productionConfig)
}

module.exports = webpackConfig