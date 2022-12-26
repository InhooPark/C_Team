window.onload = function () {
    const a = document.getElementById("title-div");
    a.onclick = menu;
}

function menu() {
    const b = document.querySelector('.menu');
    const c = document.querySelector('.hd__btn div:first-child');
    b.classList.toggle('active');
    c.classList.toggle('active');
}