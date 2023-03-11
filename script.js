// darkmode variables
const containerEl = document.getElementById('icon');
const sunEl = document.getElementById('sun');
const moonEl = document.getElementById('moon');
const bodyEl = document.getElementById('body');
const iconEl = document.getElementById('icons');

// button variables
const sliderEl = document.getElementById('slider');
const slideEl = document.getElementById('slide');
const nextEl = document.getElementById('slideNext');
const prevEl = document.getElementById('slidePrev');

// darkmode function
containerEl.addEventListener('click', function(){
    sunEl.classList.toggle('animate-sun');
    moonEl.classList.toggle('animate-moon');
    bodyEl.classList.toggle('lightmode');
    iconEl.classList.toggle('lightmode');
});

// carousel function
nextEl.addEventListener('click', () => {
    const slideWidth = slideEl.clientWidth;
    sliderEl.scrollLeft += slideWidth;
});

prevEl.addEventListener('click', () => {
    const slideWidth = slideEl.clientWidth;
    sliderEl.scrollLeft -= slideWidth;
});


