const buttonEl = document.querySelector("button");
const cardEl = document.querySelector(".card");

let isFlipped = false;

function handleFlip() {
  isFlipped = !isFlipped;

  if (cardEl) {
    if (isFlipped) {
      cardEl.className = "card is-flipped";
    } else {
      cardEl.className = "card";
    }
  }
}

buttonEl?.addEventListener("click", handleFlip);
