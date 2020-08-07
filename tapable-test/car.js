const {
  SyncHook,
  AsyncSeriesHook
} = require('tapable');

class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(['newspeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncSeriesHook(['source', 'target', 'routes'])
    }
  }
};
const myCar = new Car();
myCar.hooks.brake.tap('WarningLampPlugin', () => {
  console.log('warningLampPlugin');
});
myCar.hooks.accelerate.tap('LoggerPlugin', newSpeed => {
  console.log('Accelate');
});
myCar.hooks.calculateRoutes.tapPromise('calculateRoutes tapPromise', (source, target, routesList, callback) => {
  console.log('source', source);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`tap${source} ${target} ${routesList}`);
      resolve();
    }, 1000);
  })
});

myCar.hooks.brake.call();
myCar.hooks.accelerate.call(10);
console.time('cost');
myCar.hooks.calculateRoutes.promise('Async', 'hook', 'demo').then(() => {
  console.timeEnd('cost');
}, err => {
  console.log(err);
  console.timeEnd('cost');
})
