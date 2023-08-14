const _instanceof = (target,Fn) {
    const _instanceof = (target, Fn) => {
        let proto = target.__proto__;
 while (proto) {
   if (proto === Fn.prototype) return true;
   proto = proto.__proto__;
 }
 return false;
}
}