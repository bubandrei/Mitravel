"use strict";

// const call = document.querySelector('.nameArticle');
// const btnLeft = document.querySelector('.bntLeft');
var btnRight = document.querySelector('.btnRight'); // const carusel = document.querySelector('.row-carusel');
// const imgCenter = document.querySelector('.img-center')
// const width = -43;
// btnLeft.onclick = function(){
//     carusel.style.transform = `translateX(${5 - width}%)`;
// }
// btnRight.onclick = function(){
//     carusel.style.transform = `translateX(${5 + width}%)`;
// }

var imgAll = document.querySelectorAll('.item-img');
console.log(imgAll);
var slider = [];

for (var i = 0; i < imgAll.length; i++) {
  slider[i] = imgAll[i].src;
}

console.log(slider);
var step = 0;
var offset = 0;

function draw() {
  var img = document.createElement('img');
  img.src = slider[step];
  img.classList.add('.item-img');
  img.style.transform = 'translateX(-83%)';
  document.querySelector('.row-carusel').appendChild(img);

  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
}

btnRight.onclick = function () {
  draw();
};