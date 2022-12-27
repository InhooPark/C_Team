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

// function hover() {
//   const zoomFrame = document.querySelector(".item-img");
//   const zoomLens = document.querySelector(".zoomLens");
//   const zoomWindow = document.querySelector(".zoomWindow");

//   zoomFrame.addEventListener("mousemove", function () {
//     zoomLens.style.display = "block";
//     zoomWindow.style.display = "block";
//     console.log("aaa");
//   });

//   zoomFrame.addEventListener("mouseleave", function () {
//     zoomLens.style.display = "none";
//     zoomWindow.style.display = "none";
//     console.log("bbb");
//   });
// }

// const CONTAINER = document.querySelector(".item-img");
// const ZOOMIMG = document.querySelector(".item-img img");
// const zoomLens = document.querySelector(".zoomLens");
// const zoomWindow = document.querySelector(".zoomWindow");

// ZOOMIMG.addEventListener("mousemove", function () {
//   console.log('aaa')
// });

// CONTAINER.addEventListener("mousemove", function (e) {
//   const x = e.clientX - e.target.offsetLeft;
//   const y = e.clientY - e.target.offsetTop;

//   zoomWindow.style.display = "block";
//   zoomWindow.style.transformOrigin = `${x}px ${y}px`;
//   zoomWindow.style.transform = "scale(2)";
// });

// CONTAINER.addEventListener("mouseleave", function () {
//   ZOOMIMG.style.transformOrigin = "center center";
//   ZOOMIMG.style.transform = "scale(1)";
//   zoomWindow.style.display = "none";
// });

function hover() {
const container = document.querySelector(".item-img");
const img = document.querySelector(".zoomWindow img");
const ZOONWINDOW = document.querySelector('.zoomWindow');

container.addEventListener("mousemove", onZoom);
container.addEventListener("mouseover", onZoom);
container.addEventListener("mouseleave", offZoom);

function onZoom(e) {
  console.log(e.target);
  /* const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop; */
  const x = e.clientX - container.offsetLeft;
  const y = e.clientY - container.offsetTop;

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

