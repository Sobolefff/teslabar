import '../pages/index.css';
import '../vendor/slick/slick.min.js';

const $ = require('jquery');

$(function(){

    $('.gallery__viewer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery__sliderline',
        centerMode: true,
    });

    $('.gallery__sliderline').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.gallery__viewer',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    });

});
