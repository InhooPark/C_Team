
let data



const IMG = document.querySelectorAll(".cont div");

IMG.forEach(function (v, key) {
  v.addEventListener("click", function () {
    console.log(key);
  });
});

