//DOM Elements begin with $
const $slides = document.querySelectorAll('.slide');
const SLIDER_INTERVAL = 4000;

const init = () => {
  const $sliderBtns = document.querySelectorAll('.slider__btn');
  $sliderBtns.forEach(btn => btn.addEventListener('click', sliderBtnHandler));

  generateDots();
  
  //slider auto-play
  //setInterval(nextSlide, SLIDER_INTERVAL);
};

const sliderBtnHandler = ({ target }) => {
  const action = target.dataset.action;

  if (action === "next") {
    nextSlide();
  } else if (action === "prev") {
    prevSlide();
  }
};

const generateDots = () => {
  const $dotsWrap = document.querySelector('.slider__dots');
  
  $slides.forEach((slide, i) => {
    const $dot = document.createElement('div');
    $dot.classList.add('dot');
    $dot.dataset.id = slide.dataset.id;
    $dot.addEventListener('click', dotClickHandler);

    $dotsWrap.appendChild($dot);
    i === 0 && $dot.classList.add('dot-active');
  });
};

const dotClickHandler = ({ target }) => {
  const id = target.dataset.id;
  const $dots = document.querySelectorAll('.dot');

  $slides.forEach((slide, i) => {
    //Switch slides
    if (id !== slide.dataset.id) {
      slide.classList.remove('slide-active');  
    } else {
      slide.classList.add('slide-active');
    }
    
    //Switch dots
    if (id !== $dots[i].dataset.id) {
      $dots[i].classList.remove('dot-active');
    } else {
      $dots[i].classList.add('dot-active');
    }
  });
};

const nextSlide = () => {
  const $currentSlide = document.querySelector('.slide-active');
  let nextIndex = parseInt($currentSlide.dataset.id);
  if (nextIndex >= $slides.length) {
    nextIndex = 0; //return to 0 when pressed on next of the last slide
  }
  const $nextSlide = $slides[nextIndex];
  $currentSlide.classList.remove('slide-active');
  $nextSlide.classList.add('slide-active');
  
  setActiveDot(nextIndex);
};

const prevSlide = () => {
  const $currentSlide = document.querySelector('.slide-active');
  let prevIndex = parseInt($currentSlide.dataset.id) - 1;
  
  if (prevIndex < 1) {
    prevIndex = $slides.length - 1;
  } else {
    //because I start with 1, and the highest val will be 4 (index of 4 is the last element so nothing is gonna change), so we have to decrease it once more
    prevIndex --;
  }
  
  const $prevSlide = $slides[prevIndex];
  $currentSlide.classList.remove('slide-active');
  $prevSlide.classList.add('slide-active');
  
  setActiveDot(prevIndex);
};

const setActiveDot = index => {
  const $nextDot = document.querySelectorAll('.dot')[index];
  const $currDot = document.querySelector('.dot-active');
  $currDot.classList.remove('dot-active');
  $nextDot.classList.add('dot-active');
};

init();