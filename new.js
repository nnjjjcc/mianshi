function change(fn, wait) {
  let startTime = Date.now();
  let count = this;
  let list = arguments;
  return function () {
    let countTime = Date.now();
    if (countTime - startTime >= wait) {
      fn.apply(count, list);
      startTime = Date.now();
    }
  };
}
