document.addEventListener("DOMContentLoaded", function () {

  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");

  // Certifications data
  const certifications = [
    {
      title: "Be10x AI Masterclass",
      description: "Completed the Be10X AI Workshop, learning 15+ AI tools for productivity and workflow optimization.",
      image: "images/be10X.jpg",
      pdf: "images/be10X.pdf"
    },
    {
      title: "Cyber Security Webinar",
      description: "Ethical hacking fundamentals.",
      image: "images/certificate2.png",
      pdf: "images/certificate2.pdf"
    },
    {
      title: "Web Development Workshop",
      description: "Learned HTML, CSS, JS, and built projects from scratch.",
      image: "images/certificate3.png",
      pdf: "images/certificate3.pdf"
    }
    // Add more certifications here
  ];

  // 1️⃣ Explore button click: generate cards and scroll
  exploreBtn.addEventListener("click", function () {

    if (!cardsContainer.classList.contains("show")) {

      // Clear old cards
      cardsContainer.innerHTML = "";

      // Generate cards
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

      // Show container with animation
      cardsContainer.classList.add("show");

      // Scroll smoothly to cards
      setTimeout(() => {
        cardsContainer.scrollIntoView({ behavior: "smooth" });
      }, 100);

      // 2️⃣ Optional: horizontal scroll arrows
      addSliderArrows();
    }
  });

  // Function to add left/right arrows for sliding
  function addSliderArrows() {
    // Avoid adding arrows multiple times
    if (document.querySelector(".arrow")) return;

    const leftArrow = document.createElement("button");
    leftArrow.classList.add("arrow", "left");
    leftArrow.innerHTML = "&#10094;"; // left arrow
    cardsContainer.parentElement.appendChild(leftArrow);

    const rightArrow = document.createElement("button");
    rightArrow.classList.add("arrow", "right");
    rightArrow.innerHTML = "&#10095;"; // right arrow
    cardsContainer.parentElement.appendChild(rightArrow);

    const scrollStep = 300; // pixels to move per click

    leftArrow.addEventListener("click", () => {
      cardsContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
      cardsContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
    });
  }

});
