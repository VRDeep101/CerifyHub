document.addEventListener("DOMContentLoaded", function () {

  const exploreBtn = document.getElementById("exploreBtn");
  const sliderTrack = document.getElementById("sliderTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const certificationsSection = document.getElementById("certifications");

  let currentIndex = 0;
  let cards = [];

  // Explore Button Click
  exploreBtn.addEventListener("click", function () {

    // Prevent duplicate loading
    if (sliderTrack.children.length === 0) {

      certifications.forEach((cert) => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${cert.image}" alt="Certificate">
          <h3>${cert.title}</h3>
          <p>${cert.description}</p>
          <a href="${cert.pdf}" target="_blank">View Certificate</a>
        `;

        sliderTrack.appendChild(card);
      });

      cards = document.querySelectorAll(".slider-track .card");
      updateSlider();
    }

    certificationsSection.scrollIntoView({ behavior: "smooth" });

  });

  // Update Slider Position
  function updateSlider() {

    cards.forEach(card => card.classList.remove("active"));

    if (cards.length > 0) {
      cards[currentIndex].classList.add("active");
    }

    const cardWidth = 290; // width + margin
    const offset = -currentIndex * cardWidth;

    sliderTrack.style.transform = `translateX(${offset}px)`;
  }

  // Next Button
  nextBtn.addEventListener("click", function () {
    if (cards.length === 0) return;

    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
  });

  // Previous Button
  prevBtn.addEventListener("click", function () {
    if (cards.length === 0) return;

    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider();
  });

});
