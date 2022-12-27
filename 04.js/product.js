let data = [
  { url: "../01.img/mints_grape.png", title: "MINTS GRAPE" },
  { url: "../01.img/mints_intense.png", title: "MINTS INTENSE" },
  { url: "../01.img/mints_orange.png", title: "MINTS ORANGE" },
  { url: "../01.img/mints_peppermint.png", title: "MINTS PEPPERMINT" },
  { url: "../01.img/mints_spearmint.png", title: "MINTS SPEARMINT" },
  { url: "../01.img/mints_strawberry.png", title: "MINTS STRAWBERRY" },
  { url: "../01.img/plus_comfort.png", title: "MINTS COMFORT" },
  { url: "../01.img/plus_release.png", title: "MINTS RELEASE" },
];

hover();

const IMG = document.querySelectorAll(".cont div");
const MAINITEM = document.querySelector(".main-item");

IMG.forEach(function (v, key) {
  v.addEventListener("click", function () {
    MAINITEM.innerHTML = `<h2>${data[key].title}</h2>
    <div class="item-img">
        <img src="${data[key].url}" alt="">
    </div>
    <div class="zoomLens"></div>
    <div class="zoomWindow">
        <img src="${data[key].url}" alt="">
    </div>`;
    hover();
  });
});

function hover() {
  const AA = document.querySelector('.main-item');
  const container = document.querySelector(".item-img");
  const img = document.querySelector(".zoomWindow img");
  const ZOONWINDOW = document.querySelector(".zoomWindow");

  container.addEventListener("mousemove", onZoom);
  container.addEventListener("mouseover", onZoom);
  container.addEventListener("mouseleave", offZoom);


  function onZoom(e) {
    console.log(e);
    let x = AA.clientX - container.offsetLeft;
    let y = AA.clientY - container.offsetTop;

    ZOONWINDOW.style.display = "block";
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.5)";
  }

  function offZoom(e) {
    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)";
    ZOONWINDOW.style.display = "none";
  }
}
