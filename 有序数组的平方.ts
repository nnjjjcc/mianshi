var sortedSquares = function (nums: Array<number>) {
  nums = nums.map((el) => el * el).sort((a, b) => a - b);
  console.log(nums);
};
sortedSquares([-4, -1, 0, 3, 10]);
