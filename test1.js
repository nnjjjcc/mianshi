//splice 修改数组，返回新数组
let arr = [1, 2, 3, 4];
console.log(arr.splice(1, 0, [1, 2, 3]));
console.log(arr);

console.log(arr.splice(0, 3));
console.log(arr);

console.log(arr.splice(0, 2, "aaa", "bbb"));
console.log(arr);
//sort()

// ----------------string Object----------------

//search()

let str = "mr,m123,maa,m,Kklove,mKkk";
console.log(str.search("kk"));
console.log(str.match(/kk/gi));
//忽略大小写
console.log(str.search(/kk/i));
console.log(str.replace("Kklove", "nklove"));
console.log(str.split("m", 3));
console.log(str.charAt(3));
console.log(str.concat(str, "fghj,sdsd,sdsd"));
// ----------------Object----------------
const obj = {
  data: 1,
  age: 15,
  c: false,
  str: "some",
};
const obj1 = {
  data: 1,
  age: 15,
  c: true,
  str: "some",
  list: [1, 2, 3, 4, "sort", [123, 3]],
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} : ${value}`);
}
console.log(Object.assign(obj, obj1));

console.log(Object.hasOwn(obj, "prop"));
obj.prop = "sfff";
console.log(Object.hasOwn(obj, "prop"));
console.log(obj);
