"use strict";

var call = document.querySelector('.nameArticle');
var btnLeft = document.querySelector('.bntLeft');
var btnRight = document.querySelector('.btnRight');
var carusel = document.querySelector('.row-carusel');
var imgCenter = document.querySelector('.img-center');
var width = 43;
var currenIndex = 0;

btnLeft.onclick = function () {
  currenIndex = 29;
  scrollCarousel();
};

btnRight.onclick = function () {
  currenIndex = -29;
  scrollCarousel();
};

function scrollCarousel() {
  carusel.style.transform = "translateX(".concat(currenIndex + width, "%)");
}