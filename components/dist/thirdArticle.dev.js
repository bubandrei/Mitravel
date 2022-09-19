"use strict";

// const call = document.querySelector('.nameArticle');
// const btnLeft = document.querySelector('.btn-left');
// const btnRight = document.querySelector('.btn-right');
// const carusel = document.querySelector('.row-carusel');
// const imgCenter = document.querySelector('.img-center')
// const width = -43;
// btnLeft.onclick = function(){
//     carusel.style.transform = `translateX(${10 - width}%)`;
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