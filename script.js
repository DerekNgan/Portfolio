// darkmode variables
const containerEl = document.getElementById('icon');
const sunEl = document.getElementById('sun');
const moonEl = document.getElementById('moon');
const bodyEl = document.getElementById('body');
const iconEl = document.getElementById('icons');
const inputNameEl = document.getElementById('name');
const inputEmailEl = document.getElementById('email');
const textAreaEl = document.getElementById('message');
const burgerBarOneEl = document.getElementById('burgerBarOne');
const burgerBarTwoEl = document.getElementById('burgerBarTwo');
const burgerBarThreeEl = document.getElementById('burgerBarThree');


// button variables
const sliderEl = document.getElementById('slider');
const slideEl = document.getElementById('slide');
const nextEl = document.getElementById('slideNext');
const prevEl = document.getElementById('slidePrev');

// hamburger variables
const hamburgerMenu = document.getElementById("hamburgerMenu");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("navOne");
const nav2 = document.getElementById("navTwo");
const nav3 = document.getElementById("navThree");
const nav4 = document.getElementById("navFour");
const nav5 = document.getElementById("navFive");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// darkmode function
containerEl.addEventListener('click', function(){
    sunEl.classList.toggle('animate-sun');
    moonEl.classList.toggle('animate-moon');
    bodyEl.classList.toggle('darkmode');
    iconEl.classList.toggle('darkmode');
    inputNameEl.classList.toggle('darkmode');
    inputEmailEl.classList.toggle('darkmode');
    textAreaEl.classList.toggle('darkmode');
    burgerBarOneEl.classList.toggle('darkmode');
    burgerBarTwoEl.classList.toggle('darkmode');
    burgerBarThreeEl.classList.toggle('darkmode');
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

// Hamburger animation functions
function navAnimation(val1, val2) {
    navItems.forEach((nav, i) => {
      nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
    });
  }
  function toggleNav() {
    // Toggle: Hamburger Open/Close
    hamburgerMenu.classList.toggle("active");
  
    //   Toggle: Menu Active
    overlay.classList.toggle("overlay-active");
  
    if (overlay.classList.contains("overlay-active")) {
      // Animate In - Overlay
      overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  
      // Animate In - Nav Items
      navAnimation("out", "in");
    } else {
      // Animate Out - Overlay
      overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  
      // Animate Out - Nav Items
      navAnimation("in", "out");
    }
  }
  
  // Events Listeners
  hamburgerMenu.addEventListener("click", toggleNav);
  navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
  });
