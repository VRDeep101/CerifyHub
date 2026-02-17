document.addEventListener("DOMContentLoaded", function () {

  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = 0;
  let autoRotate;

  // ================= LOAD CARDS =================
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
  const total = cards.length;

  // ================= UPDATE POSITIONS =================
  function updateCarousel() {

    cards.forEach(card => {
      card.classList.remove("center","left","right","hidden");
    });

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

  // ================= ARROWS =================
  function nextSlide() {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + total) % total;
    updateCarousel();
  }

  rightArrow.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  leftArrow.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

  // ================= AUTO ROTATE =================
  function startAuto() {
    autoRotate = setInterval(() => {
      nextSlide();
    }, 3000);
  }

  function resetAuto() {
    clearInterval(autoRotate);
    startAuto();
  }

  startAuto();

  // ================= CLICK CARD TO CENTER =================
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
      resetAuto();
    });
  });

  // ================= MOBILE SWIPE =================
  let startX = 0;

  cardsContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  cardsContainer.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50) {
      nextSlide();
      resetAuto();
    }
    else if(endX - startX > 50) {
      prevSlide();
      resetAuto();
    }
  });

  // ================= EXPLORE BUTTON =================
  exploreBtn.addEventListener("click", () => {
    document.getElementById("certifications")
      .scrollIntoView({ behavior: "smooth" });
  });

  updateCarousel();

});
