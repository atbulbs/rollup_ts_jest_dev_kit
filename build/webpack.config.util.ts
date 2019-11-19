const path = require('path')

const resolve: Function = (dir) => {
  return path.join(__dirname, '../', dir)
}

const isDev: Boolean = process.env.NODE_ENV === 'development'

module.exports = {
  resolve,
  isDev
}

