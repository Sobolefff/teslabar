import '../pages/index.css';

import { carousel, carouselMobile, popup } from './carousel.js';
import { shiftTop } from './topBtn.js';

carousel();
popup();
carouselMobile();
shiftTop();

const burgerIcon = document.querySelector('.burger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

/*burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu_opened');
});*/

window.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('burger-icon') || evt.target.classList.contains('mobile-menu_opened')) {
        mobileMenu.classList.add('mobile-menu_opened');
    } else {
        mobileMenu.classList.remove('mobile-menu_opened');
    }
});

