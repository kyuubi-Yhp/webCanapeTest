import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// Подключаем стили подключаем бандл так как parcel выдает ошибку если подключать отдельно
import 'swiper/swiper-bundle.css';


// Инициализируем слайдер 
const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24, // отступы между слайдами (в px)
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
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1441: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  }
});
