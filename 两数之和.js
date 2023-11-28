var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      map.set(sum, [i, j]);
    }
    if (map.has(target)) {
      return map.get(target);
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
