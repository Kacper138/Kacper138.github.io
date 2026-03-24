// Klikanie node'ów → przejście do podstron
document.addEventListener("DOMContentLoaded", () => {
  const nodes = document.querySelectorAll(".node");

  nodes.forEach(node => {
    node.addEventListener("click", () => {
      const link = node.getAttribute("data-link");

      // efekt przejścia
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = link;
      }, 300);
    });
  });
});