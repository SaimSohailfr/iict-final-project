// Typing animation
const texts = [
  "Premium Sports Services, Tailored for You.",
  "From Golf to Group Workouts — We’ve Got It All!",
  "Your Health, Our Priority — Like Nowhere Else.",
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const speed = 80;
const eraseSpeed = 50;
const delayBetween = 1500;
const typedTextSpan = document.getElementById("typed-text");

function type() {
  if (index >= texts.length) index = 0;
  currentText = texts[index];

  if (isDeleting) {
    typedTextSpan.textContent = currentText.substring(0, charIndex--);
  } else {
    typedTextSpan.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, delayBetween);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? eraseSpeed : speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

// Scroll-based entrance animation for facility cards
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".facility-card");
  cards.forEach((card, idx) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
      if (idx % 2 === 0) {
        card.classList.add("left");
      }
    }
  });
});
