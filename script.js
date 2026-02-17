document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");

  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = 0;

  // Load Cards
  function loadCards() {
    cardsContainer.innerHTML = "";
    certifications.forEach(cert=>{
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${cert.image}" alt="${cert.title}">
        <h3>${cert.title}</h3>
        <p>${cert.description}</p>
        <button onclick="window.open('${cert.pdf}','_blank')">View Certificate</button>
      `;
      cardsContainer.appendChild(card);
    });
  }

  loadCards();

  function updateSlider() {
    const cardWidth = cardsContainer.querySelector(".card").offsetWidth;
    const gap = 32; // CSS gap
    cardsContainer.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
  }

  leftArrow.addEventListener("click", ()=>{
    currentIndex = Math.max(0, currentIndex-1);
    updateSlider();
  });

  rightArrow.addEventListener("click", ()=>{
    const totalCards = cardsContainer.children.length;
    currentIndex = Math.min(totalCards-1, currentIndex+1);
    updateSlider();
  });

  // Explore button scroll
  exploreBtn.addEventListener("click", ()=>{
    cardsContainer.parentElement.scrollIntoView({behavior:"smooth"});
  });
});
