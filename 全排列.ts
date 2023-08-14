const _permute = (string) => {
  if (string.length === 1) {
    return [string];
  }
  const results = [];
  for (let s of string) {
    const arr = string.split("").filter((str) => str !== s);
    console.log(" _permute()", arr.join(""), arr, s);
    _permute(arr.join("")).forEach((item) => {
      results.push(s + item);
    });
  }

  return results;
};
let result = _permute("abc");
console.log(result);
