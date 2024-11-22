'use strict';
function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function selectAll(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

function addClass(element, text) {
  return element.classList.add(text);
}

function removeClass(element, text) {
  return element.classList.remove(text);
}

function toggleClass(element, text) {
  return element.classList.toggle(text);
}

const buttons = selectAll('[data-carousel-button]');
const slides = selectAll('.slide');

buttons.forEach(button => {
  listen('click', button, () => {

    // determining what direction the slides are going.
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    
   
    // selecting the parent, to get the slides. This will make sure no matter how
    // many carousels we have, they will all work no matter. 
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // This will allow for a continuos loop of slides. 
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0; 

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
});

