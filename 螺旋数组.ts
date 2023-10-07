var generateMatrix = function (n) {
  let startX = 0; // 起始位置
  let startY = 0;
  let loop = Math.floor(n / 2); // 旋转圈数
  let mid = Math.floor(n / 2); // 中间位置
  let offset = 1; // 控制每一层填充元素个数
  let count = 1; // 更新填充数字

  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (loop--) {
    let row = startX,
      col = startY;
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++;
    }
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    }
    for (; col > startY; col--) {
      res[row][col] = count++;
    }
    for (; row > startX; row--) {
      res[row][col] = count++;
    }

    startX++;
    startY++;
    offset += 2;
  }
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
};
generateMatrix(3);
console.log(generateMatrix(3));
