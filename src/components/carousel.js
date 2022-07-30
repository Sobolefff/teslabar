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

function carouselMenuImage() {
  $('.menulist__image-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    lazyLoad: 'ondemand',
    asNavFor: '.menulist__list , .menulist__categories',
  });
  }
  function carouselMenuImageMob() {
    $('.menulist__image-slider_mob').slick({
      slidesToShow: 1,
      arrows: false,
      dots: false,
      lazyLoad: 'ondemand',
      asNavFor: '.menulist__list , .menulist__categories',
    });
    }
  function carouselCategories() {
    $('.menulist__categories').slick({
      slidesToShow: 1,
      arrows: true,
      dots: false,
      lazyLoad: 'ondemand',
      asNavFor: '.menulist__list , .menulist__image-slider , .menulist__image-slider_mob',
    });
    }

  function carouselMenuList() {
    $('.menulist__list').slick({
      slidesToShow: 1,
      arrows: false,
      dots: false,
      lazyLoad: 'ondemand',
      asNavFor: '.menulist__categories , .menulist__image-slider , .menulist__image-slider_mob',
      
      
    });
    }
  
    

export { carousel, popup, carouselMobile, carouselMenuImage, carouselMenuList, carouselCategories, carouselMenuImageMob};