let nums = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];

let rowsCount = 5;
let colsCount = 4;

let numslength = nums.length;
let numsStart = 0;
function k(rowsCount, colsCount) {
  let res = new Array(5).fill(0).map(() => new Array(4).fill(0));
  let rowsCountElse = rowsCount;
  let seq = true;
  let start = 0;
  let numsStart = 0;
  for (let i = 0; i < colsCount; i++) {
    while (rowsCountElse--) {
      res[start][i] = nums[numsStart++];

      if (numsStart >= nums.length) {
        return res;
      }
      if (seq) {
        if (start === rowsCount - 1) {
          seq = false;
        } else {
          start++;
        }
      } else {
        if (start === 0) {
          seq = true;
        } else {
          start--;
        }
      }
    }
    rowsCountElse = rowsCount;
  }
  return res;
}

console.log(k(rowsCount, colsCount));
