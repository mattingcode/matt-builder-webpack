const JSZip = require('jszip');

const zip = new JSZip();

module.exports = class Zip2Plugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log('apply2');
    compiler.hooks.emit.tapAsync('ZipPlugin2', (compilation ,callback) => {
      const folder = zip.folder(this.options.filename);
      console.log(compilation);
      for (let filename in compilation.assets) {
        console.log(compilation.assets[filename]);
      }
      callback();
    });
    console.log(compiler.hooks.emit);
  }
}