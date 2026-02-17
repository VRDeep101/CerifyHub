document.addEventListener("DOMContentLoaded", function () {

  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = 0;

  // Load cards
  certifications.forEach((cert) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <button onclick="window.open('${cert.pdf}', '_blank')">
        View Certificate
      </button>
    `;
    cardsContainer.appendChild(card);
  });

  const cards = document.querySelectorAll(".card");

  function updateCarousel() {

    cards.forEach(card => {
      card.classList.remove("center","left","right","hidden");
    });

    const total = cards.length;

    const center = currentIndex;
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;

    cards.forEach((card, index) => {
      if(index === center) {
        card.classList.add("center");
      } 
      else if(index === left) {
        card.classList.add("left");
      }
      else if(index === right) {
        card.classList.add("right");
      }
      else {
        card.classList.add("hidden");
      }
    });
  }

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  exploreBtn.addEventListener("click", () => {
    document.getElementById("certifications")
      .scrollIntoView({ behavior: "smooth" });
  });

  updateCarousel();

});
