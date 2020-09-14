let nav = document.querySelector('nav');
let button = document.querySelector('#button');
let buttonNext = document.querySelector('#buttonNext');

function addBurger  () {
    nav.classList.add('is-active');
    if (button.style.background === 'red') {
        button.style.background = 'blue';
    } else  {
        button.style.background = 'red';
    }
}
function removeBurger() {
    nav.classList.remove('is-active');
    if (buttonNext.style.background === 'red') {
        buttonNext.style.background = 'blue';
    } else  {
        buttonNext.style.background = 'red';
    }
}
;