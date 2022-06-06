import '../scss/style.scss';
import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

'use strict';

const slider = document.querySelector('.swiper-container');
let mySwiper;

function mobileSlider() {
    

   if (window.innerWidth < 768 && slider.dataset.mobile === 'false' && mySwiper === undefined) {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            slideToClickedSlide: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            }
        });
        slider.dataset.mobile = 'true';
        slider.dataset.mobile = 'true';
    } else if(window.innerWidth >= 768 && mySwiper !== undefined) {
        slider.dataset.mobile = 'false';
        for (let i = 0; i < mySwiper.length; i++) {
          mySwiper[i].destroy();
        }
        mySwiper = undefined;
    }
}
mobileSlider();

window.addEventListener('resize', function() {
    mobileSlider();
});

const openCall = document.querySelector('.header__button-icon--call'); 
const openCallFooter = document.querySelector('.button-icon--call');  
const closeCall = document.querySelector('.modal-call__button'); 
const modalCall = document.querySelector('.container__modal-call'); 
const fogCall= document.querySelector('.call-fog');

openCall.addEventListener('click', openModal);
openCallFooter.addEventListener('click', openModal);

fogCall.addEventListener('click', closeModal);
closeCall.addEventListener('click', closeModal);

function openModal() {
    fogCall.classList.add('call-fog--show')
    modalCall.classList.add('container__modal-call--show')
}

function closeModal() {
    fogCall.classList.remove('call-fog--show')
    modalCall.classList.remove('container__modal-call--show')
}

const openFeedback = document.querySelector('.header__button-icon--chat');
const openFeedbackFooter = document.querySelector('.button-icon--chat'); 
const closeFeedback = document.querySelector('.modal-feedback__button'); 
const modalFeedback = document.querySelector('.container__modal-feedback'); 
const fogFeedback = document.querySelector('.modal-feedback__fog');

openFeedback.addEventListener('click', openModalFeedback);
openFeedbackFooter.addEventListener('click', openModalFeedback);

fogFeedback.addEventListener('click', closeModalFeedback);
closeFeedback.addEventListener('click', closeModalFeedback);

function openModalFeedback() {
    fogFeedback.classList.add('modal-feedback__fog--show')
    modalFeedback.classList.add('container__modal-feedback--show')
}

function closeModalFeedback() {
    fogFeedback.classList.remove('modal-feedback__fog--show')
    modalFeedback.classList.remove('container__modal-feedback--show')
}

const openSidebar = document.querySelector('.header__button-icon--burger')
const modalSidebar = document.querySelector('.sidebar')
const closeSidebar = document.querySelector('.burger-logo__burger')
const fogSidebar = document.querySelector('.sidebar-fog')

openSidebar.addEventListener('click', openModalSidebar);


fogSidebar.addEventListener('click', closeModalSidebar);
closeSidebar.addEventListener('click', closeModalSidebar);

function openModalSidebar() {
    fogSidebar.classList.add('sidebar-fog--show')
    modalSidebar.classList.add('sidebar--show')
}

function closeModalSidebar() {
    fogSidebar.classList.remove('sidebar-fog--show')
    modalSidebar.classList.remove('sidebar--show')
}
