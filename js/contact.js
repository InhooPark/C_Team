


const ani1 = document.querySelector('.cont01');
const ani2 = document.querySelector('.cont02');
const ani3 = document.querySelector('.cont03');
const ani4 = document.querySelector('.but');

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {
        console.log('aaa');
        ani1.classList.add('aniup');
    }
    if (window.pageYOffset > 600) {
        ani2.classList.add('aniup');
    }
    if (window.pageYOffset > 1100) {
        ani3.classList.add('aniup');
    }
    if (window.pageYOffset > 1900) {
        ani4.classList.add('aniup');
    }
        console.log(window.pageYOffset)

})  