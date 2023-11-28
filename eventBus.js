class EventBus {
  constructor() {
    this.all = new Map();
  }
  on(name, ca) {
    if (!this.all.get(name)) {
      this.all.set(name, [ca]);
    } else {
      let handler = this.all.get(name);
      handler.push(ca);
    }
  }
  emit(name, ...args) {
    const eventList = this.all.get(name);
    if (eventList) {
      for (let ca of eventList) {
        ca(...args);
      }
    } else {
      console.log("无法执行，没有函数");
      return null;
    }
  }
}

let EB = new EventBus();

// 订阅事件
EB.on("key1", (name, age) => {
  console.info("我是订阅事件A:", name, age);
});
EB.on("key1", (name, age) => {
  console.info("我是订阅事件B:", name, age);
});
EB.on("key2", (name) => {
  console.info("我是订阅事件C:", name);
});

// 发布事件
EB.emit("key1", "小猪课堂", 26);
EB.emit("key2", "小猪课堂");
