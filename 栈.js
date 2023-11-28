const stack = [];
stack.push(1);
let result = stack.pop();

// 有效括号
//  var isValid = function(s) {
//     s = s.split('');
//     let sl = s.length;
//     let statck = [];
//     let map = new Map([[')','('],['}','{'],[']','[']]);
//     for (let i of s) {
//         if(map.get(i)) {
//             if(statck[statck.length - 1] !== map.get(i)) return false; 
//             else statck.pop();
//         }
//         else {
//             statck.push(i);
//         }
//     }
//     return !statck.length
//   };
  