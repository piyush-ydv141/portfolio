document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     1️⃣ AUTO TYPING HERO TEXT
  =============================== */

  const words = [
    "DevOps Engineer",
    "Cloud Enthusiast",
    "Backend Developer"
  ];

  const typingElement = document.getElementById("typing");

  if (typingElement) {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          setTimeout(() => (isDeleting = true), 1000);
        }
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
  }


/* ===============================
   ANIMATED STATS COUNTER (WITH +)
================================ */

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        const showPlus = counter.getAttribute("data-plus") === "true";

        let count = 0;
        const increment = target / 150;

        function updateCounter() {
          count += increment;

          if (count < target) {
            counter.innerText = Math.ceil(count) + (showPlus ? "+" : "");
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + (showPlus ? "+" : "");
          }
        }

        updateCounter();
        observer.unobserve(counter);
      }

    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));
}


  /* ===============================
     3️⃣ SCROLL PROGRESS BAR
  =============================== */

  const progressBar = document.getElementById("progress-bar");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    if (progressBar) {
      progressBar.style.width = scrollPercent + "%";
    }
  });


  /* ===============================
     4️⃣ DARK / LIGHT MODE TOGGLE
  =============================== */

  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }


  /* ===============================
     5️⃣ MOBILE HAMBURGER MENU
  =============================== */

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }


  /* ===============================
     6️⃣ SMOOTH SCROLL FOR NAV LINKS
  =============================== */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});