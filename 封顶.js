function findPeak(nums) {
  let high = nums.length - 1,
    low = 0;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return nums[low];
}
let peakValue = findPeak([1, 3, 5, 8, 10, 6, 4, 2]);
console.log("Peak Value:", peakValue);
