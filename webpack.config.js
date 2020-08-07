const path = require('path');

const ZipPlugin = require('./plugins/zip-plugin');
const Zip2Plugin = require('./plugins/zip2-plugin');

module.exports = {
  entry: path.join(__dirname, './plugins/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'plugin-main.js'
  },
  mode: 'production',
  plugins: [
    new ZipPlugin({
      filename: 'offline'
    }),
    // new Zip2Plugin({
    //   filename: 'test2'
    // })
  ]
}