document.addEventListener("DOMContentLoaded", function () {

  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");

  exploreBtn.addEventListener("click", function () {

    if (!cardsContainer.classList.contains("show")) {

      // clear old cards (important)
      cardsContainer.innerHTML = "";

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

      cardsContainer.classList.add("show");

      setTimeout(function () {
        cardsContainer.scrollIntoView({ behavior: "smooth" });
      }, 100);

    }

  });

});
