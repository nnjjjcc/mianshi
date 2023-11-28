function solution(blocks) {
  const n = blocks.length;
  const leftMax = new Array(n).fill(0); // 从左向右每个方块能跳到的最大距离
  const rightMax = new Array(n).fill(0); // 从右向左每个方块能跳到的最大距离
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (blocks[j] < blocks[j - 1]) {
        break;
      }

      if (blocks[j] >= blocks[i]) {
        rightMax[i]++;
      }
    }
    for (let k = i - 1; k >= 0; k--) {
      if (blocks[k] >= blocks[i]) {
        leftMax[i]++;
      }
    }
  }
  console.log(leftMax, rightMax);
  let maxDistance = 0;
  for (let i = 0; i < n; i++) {
    maxDistance = Math.max(maxDistance, leftMax[i] + rightMax[i]);
  }
  return maxDistance + 1;
}

// 测试案例
console.log(solution([2, 6, 8, 5])); // 应返回 3
console.log(solution([1, 5, 5, 2, 6])); // 应返回 4
console.log(solution([1, 1])); // 应返回 2
