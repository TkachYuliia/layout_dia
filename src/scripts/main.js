'use strict';

let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider__button-right')
  .addEventListener('click', function() {
    offset = offset + 33.333333;

    if (offset > 66.6666666) {
      offset = 0;
    }
    sliderLine.style.transform = 'translateX(-' + offset + '%)';
  });

document.querySelector('.slider__button-left')
  .addEventListener('click', function() {
    offset = offset - 33.333333;

    if (offset < 0) {
      offset = 66.6666666;
    }
    sliderLine.style.transform = 'translateX(-' + offset + '%)';
  });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});