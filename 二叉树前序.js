function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 创建一棵简单的二叉树
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;

// 返回根节点
const root = node1;
console.log(root);
// 先序遍历函数
// var preorderTraversal = (root) => {
//   return root
//     ? [
//         root.val,
//         ...preorderTraversal(root.left),
//         ...preorderTraversal(root.right),
//       ]
//     : [];
// };

// // 执行先序遍历
// const result = preorderTraversal(root);
// console.log(root); // 输出 [1, 2, 4, 5, 3]

// function levelorder(root) {
//   if (root == null) return [];
//   const res = [];
//   let stack = [root];
//   while (stack.length) {
//     const level = [];
//     const nextLevelNodes = [];
//     for (let i = 0; i < stack.length; i++) {
//       level.push(stack[i].val);
//     }
//   }
// }
