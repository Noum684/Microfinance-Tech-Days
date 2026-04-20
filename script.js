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
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Animation apparition au scroll
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      // entry.target.style.transitionDelay = `${index * 0.1}s`;
      entry.target.classList.add('show');
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


const countdown = () => {
  const eventDate = new Date("June 18, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  let count = 0;
  const update = () => {
    const target = +counter.dataset.target;
    count += target / 100;
    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
