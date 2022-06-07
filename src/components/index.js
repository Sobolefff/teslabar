import '../pages/index.css';

//slider
//const container = document.querySelector('.gallery__slider');
const slider = document.querySelector('.gallery__sliderline');
//const slide = document.querySelector('.gallery__slide');
const slides = document.querySelectorAll('.gallery__slide');
const arr = [];
const btnPrev = document.querySelector('.gallery__button-left');
const btnNext = document.querySelector('.gallery__button-right');
let offset = 0;
let step = 0;
for (let i=0; i<slides.length; i++) {
  arr[i] = slides[i].src;
  slides[i].remove();
  draw();
}
console.log(arr);

btnPrev.addEventListener('click', () => {
  offset += 100;
  slider.style.left = offset + 'px';
  //arr.push(arr.shift());
  arr.unshift(arr.pop());
  slider.lastElementChild.remove();
  draw();
  
  console.log(arr);
});
function draw() {
  let img = document.createElement('img');
  img.src = arr[step];
  img.classList.add('gallery__slide');
  slider.prepend(img);
  step++;
  console.log(img.src);
};