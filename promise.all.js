PromiseAll = (promiseArr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      return reject(new Error("传入非数组"));
    }
    const res = [];
    let counter = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then((value) => {
          counter++;
          res[i] = value;
          if (counter === promiseArr.length) {
            resolve(res);
          }
        })
        .catch((e) => reject(e));
    }
  });
};
const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 1000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2");
  }, 2000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p3");
  }, 3000);
});
const p4 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p3");
  }, 1000);
});
const test = PromiseAll([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
console.log(test);
