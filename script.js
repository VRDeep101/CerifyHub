 const slider = document.getElementById("slider");
let current = 0;

function createCards() {
  slider.innerHTML = "";

  certifications.forEach((cert, index) => {

    const card = document.createElement("div");
    card.classList.add("card");

    if(index === current) card.classList.add("center");
    else if(index === (current - 1 + certifications.length) % certifications.length)
      card.classList.add("left");
    else if(index === (current + 1) % certifications.length)
      card.classList.add("right");

    card.innerHTML = `
      <img src="${cert.image}">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <button class="view-btn" onclick="window.open('${cert.pdf}')">
        View Certificate
      </button>
    `;

    slider.appendChild(card);
  });
}

document.querySelector(".left").onclick = () => {
  current = (current - 1 + certifications.length) % certifications.length;
  createCards();
};

document.querySelector(".right").onclick = () => {
  current = (current + 1) % certifications.length;
  createCards();
};

function scrollToCerts() {
  document.getElementById("certifications")
    .scrollIntoView({ behavior: "smooth" });
}

createCards();
