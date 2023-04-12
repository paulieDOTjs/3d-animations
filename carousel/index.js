const carouselEl = document.querySelector(".carousel");
const prevButtonEl = document.querySelector(".carousel-previous-button");
const nextButtonEl = document.querySelector(".carousel-next-button");

let cellCount = 9;
let selectedIndex = 0;

function rotateCarousel() {
  const angle = (selectedIndex / cellCount) * -360;
  carouselEl.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";
}

prevButtonEl.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();
});

nextButtonEl.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();
});
