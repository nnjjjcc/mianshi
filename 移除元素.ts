var removeElement = function (nums: Array<number>, val: number) {
  let k = nums.filter((el: number) => el !== val);

  return k.length;
};

removeElement([3, 2, 2, 3], 3);
