'use strict';
import  tabs from './modules/tabs';
import  modal from './modules/modal';
import  timer from './modules/timer';
import  calc from './modules/calc';
import  slider from './modules/slider';
import  forms from './modules/forms';
import  cards from './modules/cards';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 3000000);
      tabs('.tabheader__item', '.tabcontent', '.tabcontainer', 'tabheader__item_active');
      calc();
      cards();
      forms('form', modalTimerId);
      modal('[data-modal]', '.modal', modalTimerId);
      slider({
          container: '.offer__slider',
          slide: '.offer__slide',
          prevArrow: '.offer__slider-prev',
          nextArrow: '.offer__slider-next',
          totalCounter: '#total',
          currentCounter: '#current',
          wrapper: '.offer__slider-wrapper',
          field: '.offer__slider-inner'
      });
      timer('.timer', '2020-12-12');
});

      




    





