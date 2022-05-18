'use strict'

const slider = document.querySelector('.swiper-container');
let mySwiper;



function mobileSlider() {
    mySwiper = new Swiper(slider, {
        breakpoints: {
            320: {
                slidesPerView:'auto',
                
            },
            768: {
                slidesPerView:3,
                allowTouchMove:false,
                disable:true,
            },
            1120: {
                slidesPerView:4,
                allowTouchMove:false,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
       keyboard: {
            enabled:true,
            onlyInViewport:true,
        },   
    });
  
}
mobileSlider()

window.addEventListener('resize', function(){
    mobileSlider()
})