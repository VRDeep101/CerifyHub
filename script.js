// ----------------------- DOM ELEMENTS -----------------------
const exploreBtn = document.getElementById("exploreBtn");
const cardsContainer = document.getElementById("cardsContainer");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;

// ----------------------- FUNCTIONS -----------------------

// Render cards for carousel
function renderCards() {
  cardsContainer.innerHTML = "";

  certifications.forEach((cert, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Set initial classes
    if (index === currentIndex) card.classList.add("center");
    else if (index === getPrevIndex(currentIndex)) card.classList.add("left");
    else if (index === getNextIndex(currentIndex)) card.classList.add("right");
    else card.classList.add("hidden");

    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <button onclick="window.open('${cert.pdf}', '_blank')">View Certificate</button>
    `;

    cardsContainer.appendChild(card);
  });

  // Show container with fade-in
  cardsContainer.classList.add("show");
}

// Loop helpers
function getPrevIndex(index) {
  return index === 0 ? certifications.length - 1 : index - 1;
}
function getNextIndex(index) {
  return index === certifications.length - 1 ? 0 : index + 1;
}

// Carousel update
function updateCarousel(direction) {
  if (direction === "next") currentIndex = getNextIndex(currentIndex);
  else if (direction === "prev") currentIndex = getPrevIndex(currentIndex);

  renderCards();
}

// ----------------------- EVENT LISTENERS -----------------------

// Explore button scroll + render
exploreBtn.addEventListener("click", () => {
  if (!cardsContainer.classList.contains("show")) {
    renderCards();
  }
  // Scroll smoothly to carousel
  cardsContainer.scrollIntoView({ behavior: "smooth" });
});

// Arrow click events
leftArrow.addEventListener("click", () => updateCarousel("prev"));
rightArrow.addEventListener("click", () => updateCarousel("next"));

// Keyboard arrows for desktop
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") updateCarousel("prev");
  else if (e.key === "ArrowRight") updateCarousel("next");
});

// ----------------------- INITIAL RENDER -----------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});
