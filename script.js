document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");

  exploreBtn.addEventListener("click", function () {
    if (!cardsContainer.classList.contains("show")) {
      cardsContainer.innerHTML = ""; // clear old cards
      certifications.forEach(function (cert) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${cert.image}" alt="Certificate">
          <h3>${cert.title}</h3>
          <p>${cert.description}</p>
          <button>View Certificate</button>
        `;
        cardsContainer.appendChild(card);
      });
      cardsContainer.classList.add("show"); // cards visible
      setTimeout(() => {
        cardsContainer.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  });
});
  loadCards();

  exploreBtn.addEventListener("click", function () {
    cardsContainer.scrollIntoView({behavior:"smooth"});
  });

  // Slider functionality
  function updateSlider() {
    const cards = document.querySelectorAll(".slider-track .card");
    cards.forEach((c,i)=> c.classList.remove("active"));
    cards[currentIndex].classList.add("active");
    const cardWidth = cards[0].offsetWidth + 30; // including margin
    const offset = cardWidth*currentIndex - (cardsContainer.offsetWidth/2 - cardWidth/2);
    cardsContainer.style.transform = `translateX(-${offset}px)`;
  }

  leftArrow.addEventListener("click", ()=>{
    currentIndex = (currentIndex-1+certifications.length)%certifications.length;
    updateSlider();
  });

  rightArrow.addEventListener("click", ()=>{
    currentIndex = (currentIndex+1)%certifications.length;
    updateSlider();
  });

});

