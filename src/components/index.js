import '../pages/index.css';

import { carousel, popup } from './carousel.js';
import { burgerMenu } from './menu.js';

carousel();
popup();
burgerMenu();

document.querySelector('.burger-icon').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu_opened');
});
/*
import {
    image,
    popupImage,
    allImages,
} from './const.js';

import {
    openPopup,
    closePopup
} from './modal.js';

popupImage.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup_opened')) {
      closePopup(popupImage)
    }
});

allImages.forEach(image => {
    image.addEventListener('click', function () {
        openPopup(popupImage);
    });
});*/
