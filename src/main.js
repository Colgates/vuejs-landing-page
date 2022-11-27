import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/700.css";

import "./assets/css/tailwind.css";
// import './assets/css/font.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// Image slider //
const slideBtns = document.querySelectorAll('[data-slideBtn]');
console.log('~ slideBtns', slideBtns)
const slideContainer = document.querySelector('[data-slideContainer]');
const slides = [ ... document.querySelectorAll('[data-slide]')];
let currentIndex = 0;
let isMoving= false;

//btn handle function
function handleSlideBtnClick(e) {
    if(isMoving) return;
    isMoving = true;
    e.currentTarget.id === "prev" 
    ? currentIndex-- 
    : currentIndex++;
    slideContainer.dispatchEvent(new Event("sliderMove"));
}

// remove/add attribute function
const removeDisabledAttribute = (els) => els.forEach(el => el.removeAttribute('disabled'));
const addDisabledAttribute = (els) => els.forEach(el => el.setAttribute('disabled', 'true'));

// event listeners
slideBtns.forEach(btn => btn.addEventListener('click', handleSlideBtnClick));

slideContainer.addEventListener('sliderMove', () => {
    // 1. translate the container to the right/left
    slideContainer.style.transform = `translateX(-${currentIndex * slides[0].clientWidth}px)`;
    // 2. remove disabled attributes
    removeDisabledAttribute(slideBtns)
    // 3. renable disabled attributes
    currentIndex == 0 && addDisabledAttribute([slideBtns[0]]); 
})

slideContainer.addEventListener('transitionend', () => isMoving = false);

// disable image drag events
document.querySelectorAll('[data-slide] img').forEach(img => img.ondragstart = () => false);

// intersection observer for sllider
const slideObserver = new IntersectionObserver((slide) => {
    if(slide[0].isIntersecting) {
        addDisabledAttribute([slideBtns[1]]);
    }
}, { threshold: .75});

slideObserver.observe(slides[slides.length - 1]);
