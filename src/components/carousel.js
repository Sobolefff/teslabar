import 'slick-carousel';
import 'slick-lightbox';

//карусель фото
function carousel() {
$('.gallery__sliderline').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    rows: 2,
    
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
      ]
});
}

function popup() {
  $('.gallery__sliderline').slickLightbox({
    itemSelector: 'a',
    navigateByKeyboard  : true,
  });
}


export { carousel, popup};