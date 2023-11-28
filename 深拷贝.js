const deepClone = (target, cache = new WeakMap()) => {
  if (target === null || typeof target !== "object") {
    return target;
  }
  if (cache.get(target)) {
    return target;
  }
  const copy = Array.isArray(target) ? [] : {};
  cache.set(target, copy);
  console.log(target, copy);
  Object.keys(target).forEach((key) => {
    copy[key] = deepClone(target[key], cache);
  });
  return copy;
};
const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "traveling"],
};
const clonedObj = deepClone(originalObj);
