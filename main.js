import "./style.css";
import navigationMenu from './navbar.js';
document.querySelector('#app').innerHTML = navigationMenu;
const hamburger = document.querySelector('.hamburger');
const bars = hamburger.querySelectorAll('.bar');
const ul = document.querySelector('ul');
hamburger.addEventListener('click', function () {
    ul.classList.toggle("open");
    bars[0].classList.toggle('first');
    bars[1].classList.toggle('second');
    bars[2].classList.toggle('third');
});