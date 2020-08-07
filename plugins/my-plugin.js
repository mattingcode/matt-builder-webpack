module.exports = class DemoPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log('My plugin is excuted!');
    console.log('options', this.options);
  }
}