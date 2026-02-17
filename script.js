const slider = document.getElementById("slider");
let current = 0;
let initialized = false;

function createCards() {
  slider.innerHTML = "";

  certifications.forEach((cert, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Positions
    if(index === current) card.classList.add("center");
    else if(index === (current - 1 + certifications.length) % certifications.length)
      card.classList.add("left");
    else if(index === (current + 1) % certifications.length)
      card.classList.add("right");
    else
      card.classList.add("hidden");

    card.innerHTML = `
      <img src="${cert.image}">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <button class="view-btn" onclick="window.open('${cert.pdf}')">View Certificate</button>
    `;

    slider.appendChild(card);
  });
}

// Arrows
function leftClick() {
  current = (current - 1 + certifications.length) % certifications.length;
  createCards();
}
function rightClick() {
  current = (current + 1) % certifications.length;
  createCards();
}

// Explore button
function scrollToCerts() {
  if(!initialized){
    createCards();
    initialized = true;
  }
  document.getElementById("certifications")
          .scrollIntoView({behavior:"smooth"});
}

// Assign arrow buttons after page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".nav.left").onclick = leftClick;
  document.querySelector(".nav.right").onclick = rightClick;
});
