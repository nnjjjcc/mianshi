let timeMap = {};
let id = 0;
const mySetInterval = (cb, time) => {
  let timeId = id;
  id++;
  const fn = () => {
    cb();
    timeMap[timeId] = setTimeout(() => {
      fn();
    }, time);
  };

  timeMap[timeId] = setTimeout(fn, time);
  return timeId;
};

const myClearInterval = (id) => {
  clearTimeout(timeMap[id]);
  delete timeMap[id];
};
