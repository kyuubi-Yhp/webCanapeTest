import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 1000,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev1',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      pagination: {
        el: '.swiper-pagination',
        clickable: false, // или можешь вообще не указывать, чтобы отключить
      },
    },
    1441: {
      slidesPerView: 3,
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      },
    },
  },
});
