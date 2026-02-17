document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("exploreBtn");
  const carouselTrack = document.querySelector(".carousel-track");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  // Scroll to carousel on explore click
  exploreBtn.addEventListener("click", () => {
    carouselTrack.scrollIntoView({ behavior: "smooth" });
  });

  // Load certifications
  const certifications = [
    {
      title: "Itesa Web Workshop",
      description: "Completed Itesa Web Workshop, learned modern web development techniques and frameworks.",
      image: "images/ItesaLogo.jpg",
      pdf: "images/ItesaWebWorkshop.pdf",
    },
    {
      title: "TUA Cybersecurity",
      description: "Completed TUA Cybersecurity, focused on network security and ethical hacking basics.",
      image: "images/TUAcybersecuruty.jpg",
      pdf: "images/TUAcybersecuruty.pdf",
    },
    {
      title: "Be10X AI Masterclass",
      description: "Completed the Be10X AI Workshop, learned 15+ AI tools focused on productivity, workflow and automation.",
      image: "images/be10x.jpg",
      pdf: "images/be10X.pdf",
    },
  ];

  // Create cards
  certifications.forEach((cert, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index;
    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <button onclick="window.open('${cert.pdf}', '_blank')">View Certificate</button>
    `;
    carouselTrack.appendChild(card);
  });

  // Carousel logic
  let currentIndex = 0;
  const cards = document.querySelectorAll(".card");

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove("left", "center", "right", "hidden");

      if (index === currentIndex) {
        card.classList.add("center");
      } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add("left");
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add("right");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  // Initialize carousel
  updateCarousel();

  // Arrow navigation
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });
});
