function format_with_array(number) {
  let arr = (number + "").split(".");
  let int = arr[0].split("");
  let fracton = arr[1] || "";
  let r = "";
  let len = int.length;
  int.reverse().forEach(function (v, i) {
    if ((i % 3 === 0) & (i !== 0)) {
      r = v + "," + r;
    } else {
      r = v + r;
    }
  });
  return r + (!!fracton ? "." + fracton : "");
}
console.log(format_with_array(12345678.999));
