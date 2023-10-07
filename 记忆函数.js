function memoize(fn) {
  const map = new Map();

  return function (...args) {
    const item = args.sort().join(",");

    console.log("item", item);
    if (!map.has(item)) {
      console.log("不存在");
      map.set(item, fn(...args));
    }

    return map.get(item);
  };
}
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2));
console.log(memoizedSum(2, 2));
console.log(memoizedSum(1, 2));
console.log(memoizedSum(2, 1));
