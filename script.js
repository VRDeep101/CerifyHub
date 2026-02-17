// ----------------------- DATA (cards info) -----------------------
const certifications = [
  {
    title: "Itesa Web Workshop",
    description: "Completed the Itesa Web Workshop, learned web fundamentals and workflow optimization.",
    image: "images/ItesaLogo.jpg",
    pdf: "images/ItesaWebWorkshop.pdf"
  },
  {
    title: "TUA Cyber Security",
    description: "Learned ethical hacking fundamentals and cybersecurity practices.",
    image: "images/TUAcybersecuruty.jpg",
    pdf: "images/TUAcybersecuruty.pdf"
  },
  {
    title: "Be10X AI Masterclass",
    description: "Completed the Be10X AI Workshop, learned 15+ AI tools focused on productivity, workflow, and automation.",
    image: "images/be10x.jpg",
    pdf: "images/be10X.pdf"
  }
];

// ----------------------- DOM ELEMENTS -----------------------
const exploreBtn = document.getElementById("exploreBtn");
const cardsContainer = document.getElementById("cardsContainer");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;

// ----------------------- FUNCTIONS -----------------------

// Render cards initially (for carousel)
function renderCards() {
  cardsContainer.innerHTML = "";

  certifications.forEach((cert, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Initial classes
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

  cardsContainer.classList.add("show");
}

// Helpers for looping
function getPrevIndex(index) {
  return index === 0 ? certifications.length - 1 : index - 1;
}

function getNextIndex(index) {
  return index === certifications.length - 1 ? 0 : index + 1;
}

// Update carousel positions
function updateCarousel(direction) {
  if (direction === "next") {
    currentIndex = getNextIndex(currentIndex);
  } else if (direction === "prev") {
    currentIndex = getPrevIndex(currentIndex);
  }
  renderCards();
}

// ----------------------- EVENT LISTENERS -----------------------

// Explore button scroll
exploreBtn.addEventListener("click", () => {
  cardsContainer.scrollIntoView({ behavior: "smooth" });
  // Fade-in effect for cards
  if (!cardsContainer.classList.contains("show")) {
    renderCards();
  }
});

// Arrow clicks
leftArrow.addEventListener("click", () => updateCarousel("prev"));
rightArrow.addEventListener("click", () => updateCarousel("next"));

// Optional: Keyboard arrows for desktop
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") updateCarousel("prev");
  else if (e.key === "ArrowRight") updateCarousel("next");
});

// ----------------------- INITIAL RENDER -----------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});
