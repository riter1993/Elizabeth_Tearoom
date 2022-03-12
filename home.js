let btn = document.querySelector('.down-arrow');
let el = document.querySelector('.body-text');

btn.addEventListener('click', function () {
    el.scrollIntoView(true);
});

