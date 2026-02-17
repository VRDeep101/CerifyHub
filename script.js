const slider = document.getElementById("slider");
const exploreBtn = document.getElementById("exploreBtn");
let current = 0;
let initialized = false;

function createCards(){
  slider.innerHTML = "";
  certifications.forEach((cert,index)=>{
    const card=document.createElement("div");
    card.classList.add("card");
    if(index===current) card.classList.add("center");
    else if(index===(current-1+certifications.length)%certifications.length) card.classList.add("left");
    else if(index===(current+1)%certifications.length) card.classList.add("right");
    else card.classList.add("hidden");

    card.innerHTML=`<img src="${cert.image}"><h3>${cert.title}</h3><p>${cert.description}</p>
    <button onclick="window.open('${cert.pdf}')">View Certificate</button>`;

    slider.appendChild(card);
  });
}

function leftClick(){current=(current-1+certifications.length)%certifications.length; createCards();}
function rightClick(){current=(current+1)%certifications.length; createCards();}

exploreBtn.addEventListener("click",()=>{
  if(!initialized){createCards(); initialized=true;}
  document.getElementById("certifications").scrollIntoView({behavior:"smooth"});
});

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelector(".nav.left").onclick=leftClick;
  document.querySelector(".nav.right").onclick=rightClick;
});
