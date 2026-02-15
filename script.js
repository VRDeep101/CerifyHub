const certSection = document.getElementById('certifications');
const exploreBtn = document.getElementById('explore-btn');

// Show section on button click
exploreBtn.addEventListener('click', () => {
  certSection.style.display = 'grid'; // grid layout
  certSection.scrollIntoView({ behavior: 'smooth' });
});

// Generate cards
certificates.forEach(cert => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <div class="left">
      <img src="${cert.image}" alt="Certificate">
    </div>
    <div class="right">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <span>${cert.date}</span>
      <button class="view-full">View Full</button>
    </div>
  `;

  certSection.appendChild(card);
});
