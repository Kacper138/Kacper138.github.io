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
}

document.addEventListener('DOMContentLoaded', includeHTML);


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

  // Po wczytaniu elementów, uruchom podświetlanie aktywnego linku
  highlightActiveLink();
}

// Funkcja podświetlająca aktywny link w menu
function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop(); // np. "portfolio.html"
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

document.addEventListener("DOMContentLoaded", includeHTML);
