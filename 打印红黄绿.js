function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
const setColor = (time, color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (color === "red") {
        red();
      } else if (color === "green") {
        green();
      } else if (color === "yellow") {
        yellow();
      }
      resolve();
    }, time);
  });
};
// const testColor = async () => {
//   await setColor(3000, "red");
//   await setColor(2000, "green");
//   await setColor(2100, "yellow");
//   testColor();
// };
// testColor();
const step = () => {
  setColor(3000, "red")
    .then(() => setColor(2000, "green"))
    .then(() => setColor(2100, "yellow"))
    .then(step);
};
step();
