let quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let Index = Math.floor(arr.length / 2);
  let pivot = arr.splice(Index, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
let arr = [3, 1, 5, 2, 4, 6, 8];
console.log(quickSort(arr));
