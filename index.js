
// Javascript Menu 
const menuHamburger = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const close = document.querySelector(".close");

menuHamburger.addEventListener('click',()=>{
// navLinks.classList.toggle('mobile-menu')
navLinks.style.visibility ='visible';
navLinks.style.opacity ='1';
})

close.addEventListener('click',()=>{
// navLinks.classList.remove('mobile-menu')
navLinks.style.visibility ='hidden';
navLinks.style.opacity ='0';

})