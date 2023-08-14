Array.prototype._map = function (Fn) {
  let contextArr = this; //通过this的指向拿到调用map方法的原数组
  let fn = Array.from(arguments).shift(); //拿出传入map函数的第一项,arguments是 箭头函数
  let newArr = []; //创建一个·新数组，用来存储调用数组每一项函数后的值
  for (const context of contextArr) {
    //循环数组
    newArr.push(fn(context)); //新数组中push进数组的方法
  }
  return newArr; //返回新数组
};
