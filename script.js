const exploreBtn = document.getElementById("exploreBtn");
const cardsContainer = document.getElementById("cardsContainer");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;

function renderCards() {
  cardsContainer.innerHTML = "";

  certifications.forEach((cert, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    if(index === currentIndex) card.classList.add("center");
    else if(index === getPrevIndex(currentIndex)) card.classList.add("left");
    else if(index === getNextIndex(currentIndex)) card.classList.add("right");
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

function getPrevIndex(index) {
  return index === 0 ? certifications.length - 1 : index - 1;
}
function getNextIndex(index) {
  return index === certifications.length - 1 ? 0 : index + 1;
}

function updateCarousel(direction) {
  if(direction === "next") currentIndex = getNextIndex(currentIndex);
  else if(direction === "prev") currentIndex = getPrevIndex(currentIndex);
  renderCards();
}

// Explore button scroll
exploreBtn.addEventListener("click", () => {
  if(!cardsContainer.classList.contains("show")) renderCards();
  cardsContainer.scrollIntoView({behavior:"smooth"});
});

leftArrow.addEventListener("click", ()=>updateCarousel("prev"));
rightArrow.addEventListener("click", ()=>updateCarousel("next"));

// Keyboard support
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowLeft") updateCarousel("prev");
  else if(e.key==="ArrowRight") updateCarousel("next");
});

// Initial render
document.addEventListener("DOMContentLoaded", ()=>{ renderCards(); });
