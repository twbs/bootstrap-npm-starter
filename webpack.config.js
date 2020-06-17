const path = require('path')

module.exports = {
  entry: './assets/js/src/starter.js',
  output: {
    filename: 'starter.js',
    path: path.resolve(__dirname, './assets/js/dist'),
  },
}
