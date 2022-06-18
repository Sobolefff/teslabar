import 'slick-carousel';
import 'slick-lightbox';
import 'jquery'

//карусель фото
function carousel() {
$('.gallery__sliderline').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    rows: 2,
    lazyLoad: 'ondemand',
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

function carouselMobile() {
$('.gallery__viewer').slick({
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
});
}

function popup() {
  $('.gallery__sliderline').slickLightbox({
    itemSelector: 'a',
    navigateByKeyboard  : true,
    lazy: true,
    destroyTimeout: 0,
    speed: 0,
    slick: {
      fade: true,
      speed: 0,
    },
  });
}


export { carousel, popup, carouselMobile};