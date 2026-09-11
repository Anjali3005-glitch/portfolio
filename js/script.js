/* =========================================================
   ANJALI PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   LOADING SCREEN
========================================================= */

const loader =
  document.getElementById("loader");

const loaderCounter =
  document.getElementById(
    "loaderCounter"
  );

const loaderProgress =
  document.getElementById(
    "loaderProgress"
  );

const loaderStatus =
  document.getElementById(
    "loaderStatus"
  );


let progress = 0;


const loadingMessages = [

  "LOADING EXPERIENCE...",

  "PREPARING INTERFACE...",

  "INITIALIZING SYSTEM...",

  "ALMOST READY...",

  "WELCOME."

];


function runLoader() {

  if (!loader) return;


  const interval =
    setInterval(() => {

      progress +=
        Math.floor(
          Math.random() * 4
        ) + 1;


      if (progress >= 100) {

        progress = 100;

        clearInterval(interval);


        loaderCounter.textContent =
          "100";

        loaderProgress.style.width =
          "100%";

        loaderStatus.textContent =
          "WELCOME.";


        setTimeout(() => {

          loader.classList.add(
            "hidden"
          );

          document.body.classList.add(
            "loaded"
          );

        }, 500);


        return;

      }


      loaderCounter.textContent =
        String(progress)
          .padStart(2, "0");


      loaderProgress.style.width =
        `${progress}%`;


      const messageIndex =
        Math.min(
          Math.floor(
            progress / 25
          ),
          loadingMessages.length - 1
        );


      loaderStatus.textContent =
        loadingMessages[
          messageIndex
        ];

    }, 45);

}


window.addEventListener(
  "load",
  () => {

    setTimeout(
      runLoader,
      300
    );

  }
);


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursorDot =
  document.querySelector(
    ".cursor-dot"
  );

const cursorOutline =
  document.querySelector(
    ".cursor-outline"
  );


let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;


window.addEventListener(
  "mousemove",
  (event) => {

    mouseX =
      event.clientX;

    mouseY =
      event.clientY;


    if (cursorDot) {

      cursorDot.style.left =
        `${mouseX}px`;

      cursorDot.style.top =
        `${mouseY}px`;

    }

  }
);


function animateCursor() {

  outlineX +=
    (mouseX - outlineX) *
    0.12;


  outlineY +=
    (mouseY - outlineY) *
    0.12;


  if (cursorOutline) {

    cursorOutline.style.left =
      `${outlineX}px`;

    cursorOutline.style.top =
      `${outlineY}px`;

  }


  requestAnimationFrame(
    animateCursor
  );

}


animateCursor();


/* =========================================================
   CURSOR HOVER
========================================================= */

function setupCursorHover() {

  const elements =
    document.querySelectorAll(
      "a, button, .magnetic, .dna-item, .skill-category, .project-card, .journey-card"
    );


  elements.forEach(
    (element) => {

      element.addEventListener(
        "mouseenter",
        () => {

          cursorOutline?.classList.add(
            "active"
          );

        }
      );


      element.addEventListener(
        "mouseleave",
        () => {

          cursorOutline?.classList.remove(
            "active"
          );

        }
      );

    }
  );

}


setupCursorHover();


/* =========================================================
   MOUSE LIGHT
========================================================= */

const mouseLight =
  document.querySelector(
    ".mouse-light"
  );


let lightX = 0;
let lightY = 0;


window.addEventListener(
  "mousemove",
  (event) => {

    lightX +=
      (
        event.clientX -
        lightX
      ) * 0.08;


    lightY +=
      (
        event.clientY -
        lightY
      ) * 0.08;

  }
);


function animateLight() {

  if (mouseLight) {

    mouseLight.style.left =
      `${lightX}px`;

    mouseLight.style.top =
      `${lightY}px`;

  }


  requestAnimationFrame(
    animateLight
  );

}


animateLight();


/* =========================================================
   MAGNETIC ELEMENTS
========================================================= */

const magneticElements =
  document.querySelectorAll(
    ".magnetic"
  );


magneticElements.forEach(
  (element) => {

    element.addEventListener(
      "mousemove",
      (event) => {

        if (
          window.innerWidth <= 900
        ) {
          return;
        }


        const rect =
          element.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left -
          rect.width / 2;


        const y =
          event.clientY -
          rect.top -
          rect.height / 2;


        const strength =
          element.classList.contains(
            "explore-button"
          )
            ? 0.15
            : 0.2;


        element.style.transform =
          `translate(
            ${x * strength}px,
            ${y * strength}px
          )`;

      }
    );


    element.addEventListener(
      "mouseleave",
      () => {

        element.style.transform =
          "translate(0, 0)";

      }
    );

  }
);


/* =========================================================
   NAVBAR SCROLL
========================================================= */

const navbar =
  document.querySelector(
    ".navbar"
  );


window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;


    if (
      window.scrollY > 60
    ) {

      navbar.classList.add(
        "scrolled"
      );

    } else {

      navbar.classList.remove(
        "scrolled"
      );

    }

  },
  {
    passive: true
  }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
  document.getElementById(
    "menuButton"
  );


const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );


const mobileLinks =
  document.querySelectorAll(
    ".mobile-nav-link"
  );


function openMenu() {

  if (
    !menuButton ||
    !mobileMenu
  ) {
    return;
  }


  mobileMenu.classList.add(
    "open"
  );


  menuButton.classList.add(
    "open"
  );


  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );


  document.body.classList.add(
    "menu-open"
  );

}


function closeMenu() {

  if (
    !menuButton ||
    !mobileMenu
  ) {
    return;
  }


  mobileMenu.classList.remove(
    "open"
  );


  menuButton.classList.remove(
    "open"
  );


  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );


  document.body.classList.remove(
    "menu-open"
  );

}


function toggleMenu() {

  const isOpen =
    mobileMenu?.classList.contains(
      "open"
    );


  if (isOpen) {

    closeMenu();

  } else {

    openMenu();

  }

}


menuButton?.addEventListener(
  "click",
  toggleMenu
);


mobileLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      closeMenu
    );

  }
);


document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeMenu();

    }

  }
);


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroTitle =
  document.querySelector(
    ".hero-title"
  );


const heroDescription =
  document.querySelector(
    ".hero-description"
  );


window.addEventListener(
  "mousemove",
  (event) => {

    if (
      window.innerWidth <= 900
    ) {
      return;
    }


    const x =
      (
        event.clientX /
        window.innerWidth -
        0.5
      ) * 2;


    const y =
      (
        event.clientY /
        window.innerHeight -
        0.5
      ) * 2;


    if (heroTitle) {

      heroTitle.style.transform =
        `translate(
          ${x * 8}px,
          ${y * 5}px
        )`;

    }


    if (heroDescription) {

      heroDescription.style.transform =
        `translate(
          ${x * -3}px,
          ${y * -2}px
        )`;

    }

  }
);


/* =========================================================
   DIGITAL DNA
========================================================= */

const dnaItems =
  document.querySelectorAll(
    ".dna-item"
  );


dnaItems.forEach(
  (item) => {

    item.addEventListener(
      "click",
      () => {

        const isActive =
          item.classList.contains(
            "active"
          );


        dnaItems.forEach(
          (dnaItem) => {

            dnaItem.classList.remove(
              "active"
            );

          }
        );


        if (!isActive) {

          item.classList.add(
            "active"
          );

        }

      }
    );

  }
);


/* =========================================================
   SKILLS ACCORDION
========================================================= */

const skillCategories =
  document.querySelectorAll(
    ".skill-category"
  );


skillCategories.forEach(
  (category) => {

    category.addEventListener(
      "click",
      () => {

        const isActive =
          category.classList.contains(
            "active"
          );


        skillCategories.forEach(
          (skill) => {

            skill.classList.remove(
              "active"
            );

          }
        );


        if (!isActive) {

          category.classList.add(
            "active"
          );

        }

      }
    );

  }
);


/* =========================================================
   JOURNEY HORIZONTAL DRAG
========================================================= */

const journeySection =
  document.querySelector(
    ".journey-section"
  );


const journeyTrack =
  document.querySelector(
    ".journey-track"
  );


let isDragging = false;

let dragStartX = 0;

let dragScrollLeft = 0;


if (
  journeySection &&
  journeyTrack
) {

  journeySection.addEventListener(
    "wheel",
    (event) => {

      if (
        Math.abs(
          event.deltaY
        ) >
        Math.abs(
          event.deltaX
        )
      ) {

        event.preventDefault();

        journeySection.scrollLeft +=
          event.deltaY;

      }

    },
    {
      passive: false
    }
  );


  journeySection.addEventListener(
    "mousedown",
    (event) => {

      isDragging = true;

      dragStartX =
        event.pageX;

      dragScrollLeft =
        journeySection.scrollLeft;

      journeySection.style.cursor =
        "grabbing";

    }
  );


  journeySection.addEventListener(
    "mousemove",
    (event) => {

      if (!isDragging) {
        return;
      }


      const distance =
        event.pageX -
        dragStartX;


      journeySection.scrollLeft =
        dragScrollLeft -
        distance;

    }
  );


  journeySection.addEventListener(
    "mouseup",
    () => {

      isDragging = false;

      journeySection.style.cursor =
        "default";

    }
  );


  journeySection.addEventListener(
    "mouseleave",
    () => {

      isDragging = false;

      journeySection.style.cursor =
        "default";

    }
  );

}


/* =========================================================
   PROJECT CARD TILT
========================================================= */

const projectCards =
  document.querySelectorAll(
    ".project-card"
  );


projectCards.forEach(
  (projectCard) => {

    projectCard.addEventListener(
      "mousemove",
      (event) => {

        if (
          window.innerWidth <= 900
        ) {
          return;
        }


        const rect =
          projectCard.getBoundingClientRect();


        const x =
          (
            (
              event.clientX -
              rect.left
            ) /
            rect.width -
            0.5
          ) * 4;


        const y =
          (
            (
              event.clientY -
              rect.top
            ) /
            rect.height -
            0.5
          ) * 4;


        projectCard.style.transform =
          `perspective(1200px)
           rotateX(${-y}deg)
           rotateY(${x}deg)
           scale(0.995)`;

      }
    );


    projectCard.addEventListener(
      "mouseleave",
      () => {

        projectCard.style.transform =
          "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

      }
    );

  }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealSections =
  document.querySelectorAll(
    ".about-preview, .journey-section, .skills-section, .projects-preview, .contact-preview"
  );


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "is-visible"
            );

          }

        }
      );

    },
    {
      threshold: 0.08
    }
  );


revealSections.forEach(
  (section) => {

    revealObserver.observe(
      section
    );

  }
);


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(
    (link) => {

      link.addEventListener(
        "click",
        (event) => {

          const targetId =
            link.getAttribute(
              "href"
            );


          if (
            !targetId ||
            targetId === "#"
          ) {

            return;

          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    }
  );


/* =========================================================
   CONSOLE
========================================================= */

console.log(
  "%cANJALI — DEVELOPER PORTFOLIO",
  "font-size: 18px; font-weight: 800;"
);


console.log(
  "%cStill learning. Still building.",
  "font-size: 11px;"
);