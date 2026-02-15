const exploreBtn = document.getElementById("exploreBtn");
const cardsContainer = document.getElementById("cardsContainer");

function loadCards() {
  certifications.forEach(cert => {
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
}

exploreBtn.addEventListener("click", () => {

  if (!cardsContainer.classList.contains("show")) {
    loadCards();
    cardsContainer.classList.add("show");
    cardsContainer.scrollIntoView({ behavior: "smooth" });
  }

});
