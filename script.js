document.addEventListener("DOMContentLoaded", () => {

  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");

  if (!exploreBtn || !cardsContainer) return;

  exploreBtn.addEventListener("click", () => {

    // Agar already show ho chuka hai to dobara load na kare
    if (cardsContainer.classList.contains("show")) return;

    // Clear previous cards (safety)
    cardsContainer.innerHTML = "";

    // Check if certifications data exists
    if (typeof certifications === "undefined" || !Array.isArray(certifications)) {
      console.error("Certifications data not found!");
      return;
    }

    // Create cards dynamically
    certifications.forEach(cert => {

      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = cert.image;
      img.alt = cert.title;

      const title = document.createElement("h3");
      title.textContent = cert.title;

      const desc = document.createElement("p");
      desc.textContent = cert.description;

      const btn = document.createElement("button");
      btn.textContent = "View Certificate";
      btn.addEventListener("click", () => {
        window.open(cert.pdf, "_blank");
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(btn);

      cardsContainer.appendChild(card);
    });

    // Show animation class
    cardsContainer.classList.add("show");

    // Smooth scroll
    setTimeout(() => {
      cardsContainer.scrollIntoView({ behavior: "smooth" });
    }, 150);

  });

});
