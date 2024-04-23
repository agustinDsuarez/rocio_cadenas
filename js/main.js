const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".menu-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

//----barra de búsqueda
const barra = document.getElementById("primary-navigation");
document.getElementById("menu-nav-toggle").addEventListener("click", () => {
  barra.classList.contains("show-menu")
    ? barra.classList.toggle("hide-menu")
    : barra.classList.toggle("show-menu");
});
