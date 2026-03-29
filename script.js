// Scroll smooth pour les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar change couleur au scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#020c1b";
  } else {
    nav.style.background = "rgba(10,25,47,0.9)";
  }
});

// Animation apparition au scroll
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "0.6s";
  observer.observe(el);
});

// Carousel automatique
let index = 0;
const cards = document.querySelectorAll(".carousel .card");

function showCard() {
  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");

  index = (index + 1) % cards.length;
}

// Change toutes les 3 secondes d'image dans le carousel
setInterval(showCard, 3000);

// Animation hover sur les cartes des participants
const card = document.querySelectorAll(".participant-card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});

