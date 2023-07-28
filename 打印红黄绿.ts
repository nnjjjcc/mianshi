function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
const task = (timer: number, light: string): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });

const taskRunner = async (): Promise<void> => {
  await task(3000, "red");
  await task(2000, "green");
  await task(2100, "yellow");
  taskRunner();
};
taskRunner();
