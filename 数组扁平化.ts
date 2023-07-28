let arr = [1, [2, [3, 4, 5]]];
//普通递归实现
function flatten(arr: Array<any>): Array<number> {
  let result: Array<number> = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//reduce实现
function flatten2(arr: Array<any>): Array<number> {
  return arr.reduce(function (pre, cur) {
    return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
  }, []);
}
//Es6中的flat
function flatten3(arr: Array<any>): Array<number> {
  return arr.flat(Infinity);
}
console.log(flatten3(arr));
