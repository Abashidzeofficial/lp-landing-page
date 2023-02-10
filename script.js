const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const activeImages = document.getElementsByClassName('lp2');
const dots = document.querySelectorAll('.laptop-select')

let currentImage = 0

const images = ["/images/lp2.png", "/images/lp3.png", "/images/lp5.png"];

rightArrow.addEventListener('click', () => {
     if(currentImage < 2){
      currentImage++;    
     }
    activeImages[0].src = images[currentImage]; 
    
});

leftArrow.addEventListener('click', () => {
  if(currentImage > 0){
    currentImage--;
  }
  activeImages[0].src = images[currentImage]; 
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const bar = document.querySelector('.bar');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
});















      


