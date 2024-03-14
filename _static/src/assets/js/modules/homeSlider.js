/*==============================================================
homeSlider
・KVのスライダー,Worksのスライダー
==============================================================*/
import Splide from '@splidejs/splide';
import { SlideNumber } from './slideNumber';

// KVのスライダー
window.addEventListener('load', function () {
  setTimeout(function () {
    // TOP KV Slider（text）
    let sliderThumbnail = new Swiper('.swiper-container-text', {
      slidesPerView: 1,

      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 500,
    });

    // TOP KV Slider
    let mySwiper = new Swiper('.swiper-container-home', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: sliderThumbnail,
      },
      speed: 500,
    });
  }, 3300);
});

// Worksのスライダー
var splide = new Splide('#js-slider-works', {
  type: 'slide',
  speed: 400,
  flickPower: 500,
  drag: 'true',
  snap: true,
  padding: '0%',
  fixedWidth: '90.9%',
  gap: '7.272%',
  perPage: 1,
  perMove: 1,
  wheel: false,
  mediaQuery: 'min',
  releaseWheel: false,
  trimSpace: false,
  arrows: true,
  updateOnMove: false,
  pagination: false,
  breakpoints: {
    769: {
      drag: true,
      perPage: 1,
      speed: 250,
      fixedWidth: '34.615%',
      gap: '3.846%',
      focus: 'center',
      trimSpace: 'false',
    },
  },
});

splide.mount({ SlideNumber });
