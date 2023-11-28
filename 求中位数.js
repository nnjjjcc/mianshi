var findMedianSortedArrays = function (nums1, nums2) {
  let list = nums1.concat(nums2);
  list.sort();
  if (list.length % 2 === 0) {
    let index = list.length / 2;
    return (list[index] + list[index - 1]) / 2;
  }
  return list;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
