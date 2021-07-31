const navMenu = document.querySelector("#nav-menu");
const toggleMenu = document.querySelector("#nav-toggle");
const closeMenu = document.querySelector("#nav-close");
const navLink = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

function linkAction() {
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);
