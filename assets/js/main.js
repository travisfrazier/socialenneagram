document.querySelector(".mobile-menu").addEventListener("click", () => {
  const menu = document.querySelector("nav");
  menu.classList.toggle("block");
});

// image slider variables
const sliderImages = document.querySelectorAll(".slider");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
// represent what slide is displaying
let current = 0;

//sets all slider images to display none
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// starts slider and sets first image to display
function startSlide() {
  reset();
  sliderImages[0].style.display = "flex";
}

// previous slide
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "flex";
  current--;
}

// next slide
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "flex";
  current++;
}

// move left
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// move right
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
// end of image slider
