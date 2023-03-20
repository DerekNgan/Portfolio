// darkmode variables
const containerEl = document.getElementById('icon');
const sunEl = document.getElementById('sun');
const moonEl = document.getElementById('moon');
const bodyEl = document.getElementById('body');
const inputNameEl = document.getElementById('name');
const inputEmailEl = document.getElementById('email');
const textAreaEl = document.getElementById('message');
const burgerBarOneEl = document.getElementById('burgerBarOne');
const burgerBarTwoEl = document.getElementById('burgerBarTwo');
const burgerBarThreeEl = document.getElementById('burgerBarThree');
const footerEl = document.getElementById('footer');


// hamburger variables
const hamburgerMenu = document.getElementById("hamburgerMenu");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("navOne");
const nav2 = document.getElementById("navTwo");
const nav3 = document.getElementById("navThree");
const nav4 = document.getElementById("navFour");
const nav5 = document.getElementById("navFive");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// footer variable
const footerP = document.getElementById('footerP');

// darkmode function
containerEl.addEventListener('click', function(){
    sunEl.classList.toggle('animate-sun');
    moonEl.classList.toggle('animate-moon');
    bodyEl.classList.toggle('darkmode');
    inputNameEl.classList.toggle('darkmode');
    inputEmailEl.classList.toggle('darkmode');
    textAreaEl.classList.toggle('darkmode');
    burgerBarOneEl.classList.toggle('darkmode');
    burgerBarTwoEl.classList.toggle('darkmode');
    burgerBarThreeEl.classList.toggle('darkmode');
    footerP.classList.toggle('darkmode');
    footerEl.classList.toggle('darkmode');
    hamburgerMenu.classList.toggle('darkmode');
});

// carousel function
const index = document.getElementsByClassName('image');
const length = index.length;
let slide = 0;
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

for (let i = 1; i < index.length; i++){
  index[i].style.display = 'none';
}

nextBtn.addEventListener('click', function(){
  if(slide == length-1){
    index[0].style.display = 'block';
    index[slide].style.display = 'none';
    slide = 0;
  } else {
    index[slide+1].style.display = 'block';
    index[slide].style.display = 'none';
    slide++;
  }
})

prevBtn.addEventListener('click', function(){
  if(slide <= 0) {
    index[slide].style.display = 'none';
    slide = length;
    slide--;
    index[slide].style.display = 'block';
  } else {
    index[slide].style.display = 'none';
    slide--;
    index[slide].style.display = 'block';
  }
})

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
      overlay.classList.replace("overlay-slide-down", "overlay-slide-up");
  
      // Animate In - Nav Items
      navAnimation("out", "in");
    } else {
      // Animate Out - Overlay
      overlay.classList.replace("overlay-slide-up", "overlay-slide-down");
  
      // Animate Out - Nav Items
      navAnimation("in", "out");
    }
  }
  
  // Events Listeners
  hamburgerMenu.addEventListener("click", toggleNav);
  navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
  });

// footer year
footerYear = () => {
  let currentYear = new Date().getFullYear();
  footerP.innerHTML = `© Derek Ngan ${currentYear}`
};

footerYear();

