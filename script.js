document.addEventListener("DOMContentLoaded", function() {
  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = 0;

  // Load cards
  certifications.forEach((cert, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if(index === 0) card.classList.add("active");
    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <button onclick="window.open('${cert.pdf}', '_blank')">View Certificate</button>
    `;
    cardsContainer.appendChild(card);
  });

  const cards = Array.from(cardsContainer.children);

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if(i === currentIndex) card.classList.add("active");
    });

    const cardWidth = cards[0].offsetWidth + 16; // gap approx
    cardsContainer.scrollTo({
      left: cardWidth * currentIndex - (cardsContainer.offsetWidth/2 - cardWidth/2),
      behavior: 'smooth'
    });
  }

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  exploreBtn.addEventListener("click", () => {
    cardsContainer.scrollIntoView({behavior:"smooth", block:"center"});
    updateCarousel();
  });
});
