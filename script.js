document.addEventListener("DOMContentLoaded", function () {

  const exploreBtn = document.getElementById("exploreBtn");
  const cardsContainer = document.getElementById("cardsContainer");
  const sliderSection = document.querySelector(".slider-section");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  // Certificate data
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
  ];

  // Generate cards
  certifications.forEach(cert => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <button onclick="window.open('${cert.pdf}','_blank')">View Certificate</button>
    `;
    cardsContainer.appendChild(card);
  });

  // Slider logic
  let currentIndex = 0;
  const cards = document.querySelectorAll("#cardsContainer .card");
  function updateSlider() {
    cards.forEach((c,i)=>{
      c.classList.remove("active");
      if(i===currentIndex) c.classList.add("active");
    });
    cards[currentIndex].scrollIntoView({behavior:"smooth", inline:"center"});
  }
  updateSlider();

  leftArrow.addEventListener("click", ()=>{
    currentIndex = (currentIndex-1+cards.length)%cards.length;
    updateSlider();
  });

  rightArrow.addEventListener("click", ()=>{
    currentIndex = (currentIndex+1)%cards.length;
    updateSlider();
  });

  // Explore scroll
  exploreBtn.addEventListener("click", ()=>{
    sliderSection.scrollIntoView({behavior:"smooth"});
  });

});
