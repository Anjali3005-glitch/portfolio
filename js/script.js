/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

/* Smooth cursor movement */

function animateCursor() {
  outlineX += (mouseX - outlineX) * 0.12;
  outlineY += (mouseY - outlineY) * 0.12;

  cursorOutline.style.left = `${outlineX}px`;
  cursorOutline.style.top = `${outlineY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

/* =====================================================
   CURSOR HOVER EFFECT
===================================================== */

const interactiveElements = document.querySelectorAll(
  "a, button, .project-placeholder"
);

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorOutline.style.width = "55px";
    cursorOutline.style.height = "55px";
    cursorOutline.style.borderColor = "#aaa";
  });

  element.addEventListener("mouseleave", () => {
    cursorOutline.style.width = "34px";
    cursorOutline.style.height = "34px";
    cursorOutline.style.borderColor = "#666";
  });
});

/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

const magneticElements =
  document.querySelectorAll(".magnetic");

magneticElements.forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    const rect = element.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    element.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "translate(0, 0)";
  });
});

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 50) {
      navbar.style.paddingTop = "18px";
      navbar.style.paddingBottom = "18px";
    } else {
      navbar.style.paddingTop = "28px";
      navbar.style.paddingBottom = "28px";
    }
  },
  { passive: true }
);

/* =====================================================
   PROJECT HOVER
===================================================== */

const project = document.querySelector(
  ".project-placeholder"
);

if (project) {
  project.addEventListener("mousemove", (event) => {
    const rect = project.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) *
      4;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) *
      4;

    project.style.transform =
      `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale(0.995)`;
  });

  project.addEventListener("mouseleave", () => {
    project.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
}

/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear = new Date().getFullYear();

document.title =
  `Anjali — Developer Portfolio | ${currentYear}`;