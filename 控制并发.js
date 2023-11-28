function getData(src) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(src);
    }, 1000);
  });
}
class TaskQueue {
  constructor(limit) {
    this.queue = [];
    this.limit = limit;
    this.count = 0;
  }
  push({ fn, src }) {
    this.queue.push({ fn, src });
    this.run();
  }
  run() {
    if (this.queue.length && this.count < this.limit) {
      const { fn, src } = this.queue.shift();
      this.count++;
      fn(src).then((msg) => {
        console.log(msg);
        this.count--;
        this.run();
      });
    }
  }
}
const taskQueue = new TaskQueue(4); // Allow a maximum of 2 tasks to run concurrently

taskQueue.push({ fn: getData, src: 1 });
taskQueue.push({ fn: getData, src: 2 });
taskQueue.push({ fn: getData, src: 3 });
taskQueue.push({ fn: getData, src: 4 });
