var findMaxLength = function (nums) {
  nums.sort((a, b) => a - b);
  let list0 = nums.filter((num) => num === 0);
  let list1 = nums.filter((num) => num === 1);
  console.log(list0.length / list1.length);
  //   while (list1.length > 0) {
  //     if (list0.length % list1.length) list1.length--;
  //   }
};
findMaxLength([0, 0, 1]);
