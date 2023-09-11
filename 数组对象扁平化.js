// let arr = [1, [2, [3, 4, 5]]];
// //普通递归实现
// function flatten(arr: Array<any>): Array<number> {
//   let result: Array<number> = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// //reduce实现
// function flatten2(arr: Array<any>): Array<number> {
//   return arr.reduce(function (pre, cur) {
//     return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
//   }, []);
// }
// //Es6中的flat
// function flatten3(arr: Array<any>): Array<number> {
//   return arr.flat(Infinity);
// }
// console.log(flatten3(arr));
// 实现一个 flatten 函数，实现如下的转换功能
const objInput = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};
// 转化为扁平化之后的对象
let objRes = {
  a: 1,
  "b[0]": 1,
  "b[1]": 2,
  "b[2].c": true,
  "c.e": 2,
  "c.f": 3,
  g: null,
};
const flattern = (obj) => {
  const res = {};

  const dfs = (curr, path) => {
    if (typeof curr === "object" && curr !== null) {
      const isArray = Array.isArray(curr);

      for (let key in curr) {
        console.log("path", path);
        const newPath = path
          ? isArray
            ? `${path}[${key}]`
            : `${path}.${key}`
          : key;
        console.log("newPath", newPath);
        console.log(dfs(curr[key], newPath));
        dfs(curr[key], newPath);
      }
    } else {
      res[path] = curr;
    }
  };
  dfs(obj, "");
  return res;
};

console.log(flattern(objInput));
