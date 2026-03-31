async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  
  for (const el of elements) {
    const file = el.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Nie udało się wczytać ${file}`);
      const html = await response.text();
      el.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }

  // po wczytaniu headera
  highlightActiveLink();
}

// podświetlanie aktywnej strony
function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (
      (currentPage === "" && linkPage === "index.html") ||
      currentPage === linkPage
    ) {
      link.classList.add("active");
    }
  });
}

// główne uruchomienie
document.addEventListener("DOMContentLoaded", includeHTML);



// GLOBALNE PRZEJŚCIA
document.addEventListener("click", (e) => {
  const link = e.target.closest("a, .node");

  if (!link) return;

  const url = link.getAttribute("href") || link.getAttribute("data-link");

  // jeśli brak URL → nie ruszaj
  if (!url || url.startsWith("#")) return;

  const overlay = document.getElementById("transition-overlay");

  // jeśli overlay nie istnieje → normalne działanie
  if (!overlay) return;

  e.preventDefault();

  overlay.classList.add("active");
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = url;
  }, 400);
});


// naprawa powrotu (back button)
window.addEventListener("pageshow", () => {
  const overlay = document.getElementById("transition-overlay");

  if (overlay) overlay.classList.remove("active");
  document.body.style.opacity = "1";
});

window.addEventListener("load", () => {
  const overlay = document.getElementById("transition-overlay");

  if (overlay) overlay.classList.remove("active");
  document.body.style.opacity = "1";
});

// obsługa nagłówka i menu
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Zamknij menu po kliknięciu w link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
});