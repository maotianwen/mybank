function throttle(fn) {
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
let timeId = 0;

function debounce(fn, delay) {
  if (timeId) {
    clearTimeout(timeId);
  }
  timeId = setTimeout(fn, delay);
}

export { throttle, debounce };
