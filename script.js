const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("navMenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});