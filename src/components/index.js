import '../pages/index.css';
import '../pdf/bar.pdf';
import '../pdf/kuhn.pdf';
import '../../robots.txt';
import '../../sitemap.xml';
import '../images/icons/favicon.ico';
import '../images/icons/favicon.svg';
import '../images/banner.jpg';

import { carousel, carouselMobile, popup, carouselMenuImage, carouselMenuList, carouselCategories, carouselMenuImageMob } from './carousel.js';
import { shiftTop } from './topBtn.js';



setTimeout(
    () => {
        carouselMenuImage();
        carouselMenuImageMob();
        carouselCategories();
        carouselMenuList();
        carousel();
        popup();
        carouselMobile();
        shiftTop();
    },
    500
);

const burgerIcon = document.querySelector('.burger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('burger-icon') || evt.target.classList.contains('mobile-menu_opened')) {
        mobileMenu.classList.add('mobile-menu_opened');
        burgerIcon.style.visibility = 'hidden';
        document.removeEventListener('click', evt);
    } else {
        mobileMenu.classList.remove('mobile-menu_opened');
        burgerIcon.style.visibility = 'visible';
    }
});