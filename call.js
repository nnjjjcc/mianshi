Function.prototype.myCall = function (thisArg, ...args) {
  console.log(...args);
  const isStrict = (function () {
    return !this;
  })();
  if ((thisArg === null || thisArg === undefined) && !isStrict) {
    thisArg = globalThis;
  } else {
    thisArg = Object(thisArg);
  }
  const fn = Symbol("fn");
  thisArg[fn] = this;
  const result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
};
Function.prototype.myApply = function (thisArg, argsArray) {
  const isStrict = (function () {
    return !this;
  })();
  if ((thisArg === null || thisArg === undefined) & !isStrict) {
    thisArg = globalThis;
  } else {
    thisArg = Object(thisArg);
  }

  if (!Array.isArray(argsArray)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  const fn = Symbol("fn");
  thisArg[fn] = this;
  const result = argsArray ? thisArg[fn](...argsArray) : thisArg[fn]();
  delete thisArg[fn];
  return result;
};
Function.prototype.myBind = function (thisArg, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Bind must be called on a function");
  }
  const isStrict = (function () {
    return !this;
  })();
  if ((thisArg === null || thisArg === undefined) && !isStrict) {
    thisArg = globalThis;
  } else {
    thisArg = Object(thisArg);
  }
  const self = this;
  return function (...newArgs) {
    if (new.target) {
      thisArg = this;
    }
    return self.apply(thisArg, [...args, ...newArgs]);
  };
};
function testFunction(...argu) {
  console.log(this.name, ...arg1);
}
const obbj = {
  name: "TestObject",
};
testFunction.myApply(obbj, [1, 2, 3, 4]);
