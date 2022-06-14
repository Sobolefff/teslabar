import '../pages/index.css';
import '../pdf/bar.pdf';
import '../pdf/kuhn.pdf';
import '../../robots.txt';
import '../../sitemap.xml';
import '../images/icons/favicon.ico';
import '../images/banner.jpg';

import { carousel, carouselMobile, popup } from './carousel.js';
import { shiftTop } from './topBtn.js';

setTimeout(
    () => {
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
    ym(89172076, "init", {
         clickmap:true,
         trackLinks:true,
         accurateTrackBounce:true
    });
        carousel();
        popup();
        carouselMobile();
        shiftTop();
    },
    1000
);

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