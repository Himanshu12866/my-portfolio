// Select all navigation links and sections
let navLinks = document.querySelectorAll("a");
let sections = document.querySelectorAll("section");



// Function to check which section is in view and highlight the corresponding navigation link
function highlightNavLink() {
  let scrollPosition = window.scrollY;
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      let sectionId = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Event listener for scrolling
window.addEventListener("scroll", highlightNavLink);

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "UI Developer", "React JS Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:false,
});

ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 100,
});
ScrollReveal().reveal(".home-content,.heading", {
  origin: "top",
});

ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".about-img", {
  origin: "left",
});

ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-info , h3", {
  origin: "left",
});
ScrollReveal({
  reset:false,
  distance: "150px",
  duration: 3000,
  delay: 200,
});
ScrollReveal().reveal(".social-media", {
  origin: "right",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".about-para", {
  origin: "top",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".skill-1", {
  origin: "left",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".skill-2", {
  origin: "bottom",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".skill-3", {
  origin: "right",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".project-1", {
  origin: "right",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".project-2", {
  origin: "left",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".input-1", {
  origin: "left",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".input-2", {
  origin: "right",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".input-3", {
  origin: "bottom",
});
ScrollReveal({
  reset:false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".btn-1", {
  origin: "left",
});


