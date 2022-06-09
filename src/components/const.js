const image = document.querySelector('.gallery__slide');
const popupImage = document.querySelector('#popup-viewing');
const popupImageClose = popupImage.querySelector('.popup__close-button');
const allImages = Array.from(document.querySelectorAll('.gallery__slide'));
const sliderLine = document.querySelector('.gallery');
export {
    image,
    popupImage,
    popupImageClose,
    allImages,
    sliderLine
};