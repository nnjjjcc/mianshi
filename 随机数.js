let random = (n) => {
  let arr = new Set([]);
  while (arr.size < n) {
    let num = Math.floor(Math.random() * 80 + 20);
    arr.add(num);
  }
  return arr;
};
console.log(random(10));
