import '../pages/index.css';

import { carousel, carouselMobile, popup } from './carousel.js';
import { shiftTop } from './topBtn.js';

carousel();
popup();
carouselMobile();
shiftTop();

document.querySelector('.burger-icon').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu_opened');
});
