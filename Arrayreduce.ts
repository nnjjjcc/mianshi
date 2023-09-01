//reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// accumulator是上一次回调函数的结果，如果指定了 initialValue 则为指定的值，否则为 array[0] 的值。
// currentValue是当前元素的值。如果指定了 initialValue，则为 array[0] 的值，否则为 array[1]
// currentIndex:在数组中的索引位置。在第一次调用时，如果指定了 initialValue 则为 0，否则为 1
//array : 调用的数组本身
//----------------------------------------------------------------
//去重
// var arr = [1, 2, 3, 4, 1, 2, 3, 3, 2, 4, 5, 6, 6];
// let result = arr.reduce((pre: Array<number>, item: number) => {
//   !pre.includes(item) && pre.push(item);
//   return pre;
// }, []);

// console.log(result);
//----------------------------------------------------------------
//  求最大/最小值
// var arr = [1, 2, 3, 4];
// let result = arr.reduce((pre, item) => {
//   return Math.max(pre, item);
// });
// console.log(result);
//----------------------------------------------------------------
//手写
const _reduce = function (cb, init) {
  if (typeof cb != "function") {
    return false;
  }
  let accumulator = init || this[0];
  let currentIndex = init ? 0 : 1;
  for (currentIndex; currentIndex < this.length; currentIndex++) {
    accumulator = cb(accumulator, this[currentIndex], currentIndex, this);
  }
  return accumulator;
};
