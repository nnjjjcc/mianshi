function generateRedPackets(n, m) {
  let redPackets = [];

  for (let i = 0; i < n - 1; i++) {
    let maxCount = (m - (n - 1 - i) * 0.01) / (n - i);
    let randomNum = Math.random() * maxCount;
    console.log(randomNum);
    randomNum = Math.floor(randomNum * 100) / 100;

    redPackets.push(randomNum);
    m -= randomNum;
  }
  redPackets.push(m);
  return redPackets;
}

console.log(generateRedPackets(2, 10));
