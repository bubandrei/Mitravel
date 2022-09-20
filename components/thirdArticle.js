const call = document.querySelector('.nameArticle');
const btnLeft = document.querySelector('.bntLeft');
const btnRight = document.querySelector('.btnRight');
const carusel = document.querySelector('.row-carusel');
const imgCenter = document.querySelector('.img-center');
const width = 43;
let currenIndex = 0;

btnLeft.onclick = function(){
    currenIndex = 29;
    scrollCarousel()
    
}
btnRight.onclick = function(){
    currenIndex = -29;
    scrollCarousel()
}
function scrollCarousel(){
    carusel.style.transform = `translateX(${currenIndex + width}%)`;
}
