// function mitt(all) {
//   //使用Map存储注册的事件
//   all = all || new Map();

//   return {
//     all,
//     on(type, handler) {
//       const handlers = all?.get(type);
//       if (handlers) {
//         handlers.push(handler);
//       } else {
//         all.set(type, [handler]);
//       }
//     },

//     off(type, handler) {
//       const handlers = all?.get(type);
//       if (handlers) {
//         if (handler) {
//           const index = handlers.indexOf(handler);
//           handlers.splice(index > -1 ? index : 0, 1);
//         } else {
//           all.set(type, []);
//         }
//       }
//     },

//     emit(type, evt) {
//       let handlers = all?.get(type);
//       if (handlers) {
//         handlers.slice().map((handler) => {
//           handler(evt);
//         });
//       }
//       //判断是否存在"*" 订阅的事件，"*"注册的事件进行兜底
//       handlers = all?.get("*");
//       if (handlers) {
//         handlers.slice().map((handler) => {
//           handler(type, evt);
//         });
//       }
//     },
//   };
// }

// const emitter = mitt();

// // 订阅事件
// emitter.on("foo", (e) => console.log("foo", e));

// // 订阅所有的事件
// emitter.on("*", (type, e) => console.log(type, e));

// // 发布事件
// emitter.emit("foo", { a: "b" });

// // 清空所有事件
// emitter.all.clear();

// function onFoo() {}
// emitter.on("foo", onFoo); // 订阅
// emitter.off("foo", onFoo); // 取消订阅事件

class EventEmitter {
  constructor() {
    this.all = new Map();
  }
  //订阅不触发
  on(type, cb) {
    const handlers = this.all.get(type);
    if (handlers) {
      handlers.push(cb);
    } else {
      this.all.set(type, [cb]);
    }
  }
  emit(type, cb) {
    const handler = this.all.get(type);
    if (handler) {
      handler.slice().map((hd) => {
        hd(cb);
      });
    } else {
      console.log("缺失");
      return null;
    }
  }

  once(type, cb) {
    // 绑定的时fn, 执行的时候会触发fn函数
    let fn = (...args) => {
      cb(...args);
      this.off(type, fn);
    };
    this.on(type, fn);
  }
  off(type, cb) {
    let handler = this.all.get(type);
    if (handler) {
      let index = handler.indexOf(cb);
      console.log(index);
      console.log(handler.splice(index > -1 ? index : 0, 1));
      handler.splice(index > -1 ? index : 0, 1);
    } else {
      console.log("缺失");
      return null;
    }
  }
}
let ev = new EventEmitter();
const fun1 = (str) => {
  console.log(str);
};

ev.once("say", fun1);
ev.emit("say", "visa");
console.log(ev);
