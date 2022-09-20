"use strict";

var call = document.querySelector('.nameArticle');
var btnLeft = document.querySelector('.bntLeft');
var btnRight = document.querySelector('.btnRight');
var carusel = document.querySelector('.row-carusel');
var imgCenter = document.querySelector('.img-center');
var width = -43;
var currenIndex = 0;
var lastIndex = -1;

btnLeft.onclick = function () {
  currenIndex--;
  scrollCarousel();
};

btnRight.onclick = function () {
  currenIndex++;
  scrollCarousel();
};

function scrollCarousel() {
  carusel.style.transform = "translateX(".concat(currenIndex + width, "%)");
}