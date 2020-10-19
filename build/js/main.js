"use strict";

const sliderItems = document.querySelectorAll('.slider__item');
const sliderContent = document.querySelector('.slider__content');

let active = 0;
document.querySelector('.btn--next').onclick = () => {
  sliderItems[active].classList.remove('active');
  if (active + 1 == sliderItems.length) {
    active = 0;
  } else {
    active++;
  }
  sliderItems[active].classList.add('active');
}
document.querySelector('.btn--prev').onclick = () => {
  sliderItems[active].classList.remove('active');
  if (active + 1 == sliderItems.length) {
    active = 0;
  } else {
    active--;
  }
  sliderItems[active].classList.add('active');
}

window.onload = function () {
  let sliderTexts = document.querySelectorAll('.slider__description');
  for (let sliderText of sliderTexts) {
    sliderText.onclick = activeItem;
  }
  function activeItem() {
    this.classList.add('ansver');
  }
}