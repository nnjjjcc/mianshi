var liList = document.getElementsByTagName("li");
for (var i = 0; i < 6; i++) {
  liList[i].onclick = function () {
    alert(i);
  };
}
