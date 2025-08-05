const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link-style");

document.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").slice(1);
    if (href === current) {
      link.classList.add("active");
    }
  });
});
