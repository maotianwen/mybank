export default {
  //throttle
  throttle(fn) {
    let previous = 0;
    return function(...args) {
      let context = this,
        now = +new Date();
      if (now - previous > 1000) {
        fn.apply(context, args);
        previous = now;
        now = new Date();
      }
    };
  }
};
