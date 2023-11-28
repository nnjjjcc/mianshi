const data = [
  { id: 1, name: "电脑", pid: 0 },
  { id: 2, name: "mac", pid: 1 },
  { id: 3, name: "mac 笔记本", pid: 2 },
  { id: 4, name: "mac 台式机", pid: 2 },
  { id: 5, name: "mac air", pid: 3 },
  { id: 6, name: "mac pro", pid: 3 },
  { id: 7, name: "win", pid: 1 },
  { id: 8, name: "win 笔记本", pid: 7 },
];

const arrayToTree = (data) => {
  const map = new Map();
  const result = []; // 存放树形结果

  // 生成一个用 id 作为 key，用原对象值并添加 children 以作为值的 Map 对象
  data.forEach((item) => map.set(item.id, { ...item, children: [] }));

  // 循环 map 数组
  map.forEach((item) => {
    if (map.has(item.pid)) {
      const parentNode = map.get(item.pid);
      parentNode.children.push(item);
    } else {
      result.push(map.get(item.id));
    }
  });

  return result;
};

const result = arrayToTree(data);
console.log(result);
