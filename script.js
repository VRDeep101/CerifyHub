// =================== JS: script.js ===================
document.addEventListener("DOMContentLoaded", function () {

  const exploreBtn = document.getElementById("exploreBtn");
  const carouselTrack = document.querySelector(".carousel-track");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = 0;
  let autoLoop;

  // Render cards dynamically
  function renderCards() {
    carouselTrack.innerHTML = "";

    certifications.forEach((cert, index) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // Assign positions
      if (index === currentIndex) card.classList.add("center");
      else if (index === (currentIndex - 1 + certifications.length) % certifications.length) card.classList.add("left");
      else if (index === (currentIndex + 1) % certifications.length) card.classList.add("right");
      else card.classList.add("hidden");

      card.innerHTML = `
        <img src="${cert.image}" alt="${cert.title}">
        <h3>${cert.title}</h3>
        <p>${cert.description}</p>
        ${cert.pdf ? `<button onclick="window.open('${cert.pdf}', '_blank')">View Certificate</button>` : ''}
      `;

      carouselTrack.appendChild(card);
    });
  }

  // Initial render
  renderCards();

  // =================== Explore Button ===================
  exploreBtn.addEventListener("click", () => {
    carouselTrack.scrollIntoView({ behavior: "smooth" });
  });

  // =================== Arrow Navigation ===================
  function nextCard() {
    currentIndex = (currentIndex + 1) % certifications.length;
    renderCards();
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + certifications.length) % certifications.length;
    renderCards();
  }

  rightArrow.addEventListener("click", nextCard);
  leftArrow.addEventListener("click", prevCard);

  // =================== Keyboard Navigation ===================
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevCard();
    if (e.key === "ArrowRight") nextCard();
  });

  // =================== Click Side Card ===================
  carouselTrack.addEventListener("click", (e) => {
    const clickedCard = e.target.closest(".card");
    if (!clickedCard) return;
    const cards = Array.from(carouselTrack.children);
    const index = cards.indexOf(clickedCard);
    currentIndex = index;
    renderCards();
  });

  // =================== Auto Loop ===================
  function startAutoLoop() {
    autoLoop = setInterval(nextCard, 8000);
  }

  function stopAutoLoop() {
    clearInterval(autoLoop);
  }

  carouselTrack.addEventListener("mouseenter", stopAutoLoop);
  carouselTrack.addEventListener("mouseleave", startAutoLoop);

  startAutoLoop();
});
