const humbergerEl = document.getElementById("humberger");
const navmenuEL = document.getElementById("nav-menu");
const navcloseEL = document.getElementById("nav-close");
const navLinkEl = document.querySelectorAll(".nav-link");

navLinkEl.forEach((link) => {
  link.addEventListener("click", () => {
    navmenuEL.classList.add("hidden");
  });
});

navcloseEL.addEventListener("click", () => {
  navmenuEL.classList.add("hidden");
});

humbergerEl.addEventListener("click", () => {
  navmenuEL.classList.remove("hidden");
});
