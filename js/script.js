
 //==== toogle menu navbar
 let menu= document.querySelector('.menu-icon');
 let navbar= document.querySelector('nav');
 menu.onclick = ()=>{
   navbar.classList.toggle('open-menu');
   
 }
 //--- on scroll not display navbar 
 window.onscroll =() => {
   navbar.classList.remove('open-menu');
 }
 // swipper 
 var swiper = new Swiper(".mySwiper", {
   pagination: {
     el: ".swiper-pagination",
   },
 });
 // hedaer change bg scroll
 let header =document.querySelector('header');
 
 window.addEventListener('scroll',()=>{
   header.classList.toggle('header-active',window.scrollY > 0)
 
 });
 //===scroll top 
 let scroltop =document.querySelector('.scroll-top');
 
 window.addEventListener('scroll',()=>{
   scroltop.classList.toggle('scroll-active',window.scrollY >= 400)
 
 });