let btn = document.querySelector('.down-arrow');
let el = document.querySelector('.header-text');

btn.addEventListener('click', function () {
    el.scrollIntoView(true);
});

