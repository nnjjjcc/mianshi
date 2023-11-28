const _permute = (list) => {
  if (list.length === 1) {
    return [list];
  }
  const results = [];
  for (let s of list) {
    const arr = list.filter((str) => str !== s);

    _permute(arr).forEach((item) => {
      console.log(item);
      results.push(s + item);
    });
  }

  return results;
};
console.log(_permute([1, 2, 3, 4]));
