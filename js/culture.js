


var swiper = new Swiper(".mySwiper", {
    /* spaceBetween: 30, */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const a = document.querySelectorAll('.scroll');

let strPosition = ['fixed', 'absolute', 'relative', 'stickey'];
let activeArray = [];
let s;

a.forEach(function (el, key) {
    let pos = 0;
    let parent = el.parentElement;
    for (; parent != null && parent.tagName != 'BODY'; parent = parent.parentElement) {
        let str = getComputedStyle(parent).getPropertyValue('position');
        if (strPosition.includes(str)) {
            pos = parent.offsetTop;

        }
    }
    pos += el.offsetTop;
    activeArray.push(pos);
})

window.addEventListener('scroll', function () {
    /* console.log(activeArray) */
    a.forEach(function (p, k) {
        if (activeArray[k] - window.innerHeight * 0.7 < window.pageYOffset) {
            a[k].classList.add('ani');
        }
    })
})


AOS.init();