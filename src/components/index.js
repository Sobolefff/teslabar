import '../pages/index.css';
import '../pdf/bar.pdf';
import '../pdf/kuhn.pdf';
import '../../robots.txt';
import '../../sitemap.xml';

import { carousel, carouselMobile, popup } from './carousel.js';
import { shiftTop } from './topBtn.js';

carousel();
popup();
carouselMobile();
shiftTop();

const burgerIcon = document.querySelector('.burger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('burger-icon') || evt.target.classList.contains('mobile-menu_opened')) {
        mobileMenu.classList.add('mobile-menu_opened');
        document.removeEventListener('click', evt);
    } else {
        mobileMenu.classList.remove('mobile-menu_opened');
    }
});