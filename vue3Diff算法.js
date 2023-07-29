// 新虚拟节点列表和旧虚拟节点列表;
// Vue2 的 Diff 算法时间复杂度为 O(n) 而 Vue3 的时间复杂度为 O(nlogN)
// 通过 diff 算法知道通过最短变动最小方式完成更新
// 在 Vue3 源码中，会根据 Key 来决定是使用什么方法去更新节点。如果没有 Key ，那么默认会去更新所有节点，如果有 key 会尽可能的去复用节点。

// # vue3 对比 vue2 diff 优化部分

// Vue2 中，当数据发生变化，会生成一个新的 newVnode，和之前的 oldVnode 进行比较，找到差异点进行更新。而 Vue3，在创建虚拟 DOM 树时，会根据 DOM 内容不会变化的打上静态标记，之后 patch 对比更新的时候，只比对不带静态标记的节点。
// Vue3 基于最长递增子序列算法，进行移动/添加/删除/patch 更新，覆盖了 Vue2 diff ③-⑤ 步骤，极大优化查询比较性能，其中 key 最大程度减少 DOM 的移动，减少了 DOM 操作
// 在 Vue3 源码中，会根据 Key 来决定是使用什么方法去更新节点。如果没有 Key ，那么默认会去更新所有节点，如果有 key 会尽可能的去复用节点。
// --这里定义了两个新老 vnode，如果使用 Diff 算法的话，将会在老 vnode 的基础上新增一个新节点 C--

let oldVnode = [
  h("p", { key: "D" }, "D"),
  h("p", { key: "A" }, "A"),
  h("p", { key: "B" }, "B"),
  h("p", { key: "C" }, "C"),
];
let newVnode = [
  h("p", { key: "A" }, "A"),
  h("p", { key: "B" }, "B"),
  h("p", { key: "C" }, "C"),
];

//1.了解新老Vnode的边界

function diffVNode(oldV, newV) {
  let i = 0; // 定义初始头指针
  let e1 = oldV.length - 1; // 定义老节点尾指针
  let e2 = newV.length - 1; // 定义新点尾指针
  // 获取头边界
  while (i <= e1 && i <= e2) {
    // 获取i指针处的新老虚拟节点
    const n1 = oldV[i];
    const n2 = newV[i];
    // 判断i指针处的新老节点是否相同
    if (isSameVNodeType(n1, n2)) {
      // 如果新老节点相同，需要执行patch函数去递归比较n1，n2，看子节点是否更新
      console.log("patch");
    } else {
      break;
    }
    i++; // 如果新老节点相同，指针往前一位
    console.log("+++");
    console.log(i);
  }
  //获取尾边界
  while (i <= e1 && i <= e2) {
    const n1 = oldV[e1];
    const n2 = newV[e2];
    if (isSameVNodeType(n1, n2)) {
      // 如果新老节点相同，需要执行patch函数去递归比较n1，n2，看子节点是否更新
      console.log("patch");
    } else {
      break;
    }
    e1--; // 如果新老节点相同，老虚拟节点尾指针退一位
    e2--; // 如果新老节点相同，新虚拟节点尾指针退一位

    console.log("------");
    console.log(e1);
    console.log(e2);
  }
}
//通过while循环，比较oldV和newV数组的共同节点的虚拟节点，先判断虚拟节点是否一致，一致则递归比较它们的children节点。这里通过三个指针i和e1和e2来实现判断，如果前面的节点都相同，i会一直往后遍历，如果最后i指向了oldV和newV的末尾，那么就说明它们前面完全相同，如果出现两个节点出现不同则说明出现头边界，循环结束
//分析新老节点边界值（重点）
// （一）新节点比老节点长，头边界或者尾边界存在完全包含的情况，需要新增节点
// （二）老节点比新节点长，头边界或者尾边界存在完全包含的情况，需要删除节点
// （三）老节点，新节点长短不定，头边界或者尾边界不存在完全包含的情况，需要灵活增删
// 转虚拟节点函数
function h(type, props, children) {
  return { type: type, props: props, children: children };
}
// 判断节点是否相同
function isSameVNodeType(n1, n2) {
  return n1.type == n2.type && n1.props.key == n2.props.key;
}
//获取新老节点的头边界

//例子
diffVNode(oldVnode, newVnode);
//新老节点的头边界 为2
