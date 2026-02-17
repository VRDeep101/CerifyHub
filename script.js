document.addEventListener("DOMContentLoaded", function () {

  const exploreBtn = document.getElementById("exploreBtn");

  const cardsContainer = document.getElementById("cardsContainer");



  exploreBtn.addEventListener("click", function () {

    if (!cardsContainer.classList.contains("show")) {

      // clear previous cards

      cardsContainer.innerHTML = "";



      certifications.forEach(function (cert) {

        const card = document.createElement("div");

        card.classList.add("card");



        card.innerHTML = `

          <img src="${cert.image}" alt="${cert.title}">

          <h3>${cert.title}</h3>

          <p>${cert.description}</p>

          <button onclick="window.open('${cert.pdf}', '_blank')">View Certificate</button>

        `;

        cardsContainer.appendChild(card);

      });



      cardsContainer.classList.add("show");

      setTimeout(() => {

        cardsContainer.scrollIntoView({ behavior: "smooth" });

      }, 100);

    }

  });

});
