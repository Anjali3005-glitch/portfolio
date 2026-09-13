/* =========================================================
   ANJALI PORTFOLIO
   STABLE INTERACTIONS
========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const touchDevice = window.matchMedia(
    "(hover: none), (pointer: coarse)"
  ).matches;


  /* =========================================================
     LOADER
  ========================================================= */

  const loader =
    document.getElementById("loader");

  const counter =
    document.getElementById("loaderCounter");

  const progressBar =
    document.getElementById("loaderProgress");

  const status =
    document.getElementById("loaderStatus");


  const messages = [
    "LOADING EXPERIENCE...",
    "PREPARING INTERFACE...",
    "INITIALIZING SYSTEM...",
    "ALMOST READY...",
    "WELCOME."
  ];


  function hideLoader() {

    if (!loader) return;

    loader.classList.add("hidden");

    document.body.classList.add("loaded");

  }


  function startLoader() {

    if (!loader) return;


    /* Reduced motion */

    if (reducedMotion) {

      if (counter) {
        counter.textContent = "100";
      }

      if (progressBar) {
        progressBar.style.width = "100%";
      }

      if (status) {
        status.textContent = "WELCOME.";
      }

      setTimeout(hideLoader, 100);

      return;
    }


    const start =
      performance.now();

    const duration =
      1200;


    function animate(now) {

      const value =
        Math.min(
          100,
          Math.round(
            ((now - start) / duration) * 100
          )
        );


      if (counter) {

        counter.textContent =
          String(value).padStart(2, "0");

      }


      if (progressBar) {

        progressBar.style.width =
          `${value}%`;

      }


      if (status) {

        status.textContent =
          messages[
            Math.min(
              Math.floor(value / 25),
              4
            )
          ];

      }


      if (value < 100) {

        requestAnimationFrame(
          animate
        );

      } else {

        if (status) {
          status.textContent =
            "WELCOME.";
        }


        setTimeout(
          hideLoader,
          250
        );

      }

    }


    requestAnimationFrame(
      animate
    );

  }


  /*
     Start loader safely after page load
  */

  if (
    document.readyState ===
    "complete"
  ) {

    setTimeout(
      startLoader,
      150
    );

  } else {

    window.addEventListener(
      "load",
      () => {

        setTimeout(
          startLoader,
          150
        );

      },
      {
        once: true
      }
    );

  }


  /* =========================================================
     ELEMENTS
  ========================================================= */

  const cursorDot =
    document.querySelector(
      ".cursor-dot"
    );

  const cursorOutline =
    document.querySelector(
      ".cursor-outline"
    );

  const mouseLight =
    document.querySelector(
      ".mouse-light"
    );


  const navbar =
    document.querySelector(
      ".navbar"
    );


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


  const heroTitle =
    document.querySelector(
      ".hero-title"
    );


  const heroDescription =
    document.querySelector(
      ".hero-description"
    );


  /* =========================================================
     POINTER
  ========================================================= */

  let pointerX =
    window.innerWidth / 2;

  let pointerY =
    window.innerHeight / 2;


  let cursorX =
    pointerX;

  let cursorY =
    pointerY;


  let lightX =
    pointerX;

  let lightY =
    pointerY;


  let targetHeroX = 0;
  let targetHeroY = 0;

  let heroX = 0;
  let heroY = 0;


  if (!touchDevice) {

    window.addEventListener(
      "pointermove",
      (event) => {

        pointerX =
          event.clientX;

        pointerY =
          event.clientY;


        targetHeroX =
          (
            pointerX /
            window.innerWidth -
            0.5
          ) * 2;


        targetHeroY =
          (
            pointerY /
            window.innerHeight -
            0.5
          ) * 2;

      },
      {
        passive: true
      }
    );

  }


  function animatePointer() {

    if (
      !touchDevice &&
      !reducedMotion
    ) {

      cursorX +=
        (
          pointerX -
          cursorX
        ) * 0.16;


      cursorY +=
        (
          pointerY -
          cursorY
        ) * 0.16;


      lightX +=
        (
          pointerX -
          lightX
        ) * 0.07;


      lightY +=
        (
          pointerY -
          lightY
        ) * 0.07;


      heroX +=
        (
          targetHeroX -
          heroX
        ) * 0.08;


      heroY +=
        (
          targetHeroY -
          heroY
        ) * 0.08;


      if (cursorDot) {

        cursorDot.style.left =
          `${pointerX}px`;

        cursorDot.style.top =
          `${pointerY}px`;

      }


      if (cursorOutline) {

        cursorOutline.style.left =
          `${cursorX}px`;

        cursorOutline.style.top =
          `${cursorY}px`;

      }


      if (mouseLight) {

        mouseLight.style.left =
          `${lightX}px`;

        mouseLight.style.top =
          `${lightY}px`;

      }


      if (heroTitle) {

        heroTitle.style.transform =
          `translate3d(
            ${heroX * 8}px,
            ${heroY * 5}px,
            0
          )`;

      }


      if (heroDescription) {

        heroDescription.style.transform =
          `translate3d(
            ${heroX * -3}px,
            ${heroY * -2}px,
            0
          )`;

      }

    }


    requestAnimationFrame(
      animatePointer
    );

  }


  animatePointer();


  /* =========================================================
     CURSOR HOVER
  ========================================================= */

  if (
    !touchDevice &&
    cursorOutline
  ) {

    document
      .querySelectorAll(
        `
        a,
        button,
        .dna-item,
        .skill-category,
        .project-card,
        .journey-card
        `
      )
      .forEach(
        (element) => {

          element.addEventListener(
            "mouseenter",
            () => {

              cursorOutline.classList.add(
                "active"
              );

            }
          );


          element.addEventListener(
            "mouseleave",
            () => {

              cursorOutline.classList.remove(
                "active"
              );

            }
          );

        }
      );

  }


  /* =========================================================
     MAGNETIC ELEMENTS
  ========================================================= */

  if (
    !touchDevice &&
    !reducedMotion
  ) {

    document
      .querySelectorAll(
        ".magnetic"
      )
      .forEach(
        (element) => {

          let targetX = 0;
          let targetY = 0;

          let currentX = 0;
          let currentY = 0;

          let frame = null;


          const strength =
            element.classList.contains(
              "explore-button"
            )
              ? 0.12
              : 0.16;


          function render() {

            currentX +=
              (
                targetX -
                currentX
              ) * 0.18;


            currentY +=
              (
                targetY -
                currentY
              ) * 0.18;


            element.style.transform =
              `translate3d(
                ${currentX}px,
                ${currentY}px,
                0
              )`;


            if (
              Math.abs(
                targetX -
                currentX
              ) > 0.1 ||
              Math.abs(
                targetY -
                currentY
              ) > 0.1
            ) {

              frame =
                requestAnimationFrame(
                  render
                );

            } else {

              frame = null;

            }

          }


          element.addEventListener(
            "pointermove",
            (event) => {

              const rect =
                element.getBoundingClientRect();


              targetX =
                (
                  event.clientX -
                  rect.left -
                  rect.width / 2
                ) * strength;


              targetY =
                (
                  event.clientY -
                  rect.top -
                  rect.height / 2
                ) * strength;


              if (!frame) {

                frame =
                  requestAnimationFrame(
                    render
                  );

              }

            }
          );


          element.addEventListener(
            "pointerleave",
            () => {

              targetX = 0;
              targetY = 0;


              if (!frame) {

                frame =
                  requestAnimationFrame(
                    render
                  );

              }

            }
          );

        }
      );

  }


  /* =========================================================
     NAVBAR
  ========================================================= */

  function updateNavbar() {

    if (!navbar) return;

    navbar.classList.toggle(
      "scrolled",
      window.scrollY > 60
    );

  }


  updateNavbar();


  window.addEventListener(
    "scroll",
    updateNavbar,
    {
      passive: true
    }
  );


  /* =========================================================
     MOBILE MENU
  ========================================================= */

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


  if (menuButton) {

    menuButton.addEventListener(
      "click",
      () => {

        if (
          mobileMenu?.classList.contains(
            "open"
          )
        ) {

          closeMenu();

        } else {

          openMenu();

        }

      }
    );

  }


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
        event.key ===
        "Escape"
      ) {

        closeMenu();

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

          const wasActive =
            item.classList.contains(
              "active"
            );


          dnaItems.forEach(
            (other) => {

              other.classList.remove(
                "active"
              );

            }
          );


          if (!wasActive) {

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

  const skills =
    document.querySelectorAll(
      ".skill-category"
    );


  skills.forEach(
    (skill) => {

      skill.addEventListener(
        "click",
        () => {

          const wasActive =
            skill.classList.contains(
              "active"
            );


          skills.forEach(
            (other) => {

              other.classList.remove(
                "active"
              );

            }
          );


          if (!wasActive) {

            skill.classList.add(
              "active"
            );

          }

        }
      );

    }
  );


  /* =========================================================
     JOURNEY HORIZONTAL SCROLLER
  ========================================================= */

  const journeyTrack =
    document.querySelector(
      ".journey-track"
    );


  if (journeyTrack) {

    let dragging = false;

    let startX = 0;

    let startScroll = 0;

    let dragged = false;


    function maxScroll() {

      return Math.max(
        0,
        journeyTrack.scrollWidth -
        journeyTrack.clientWidth
      );

    }


    function canMove(delta) {

      const max =
        maxScroll();


      if (max <= 1) {
        return false;
      }


      if (delta > 0) {

        return (
          journeyTrack.scrollLeft <
          max - 1
        );

      }


      return (
        journeyTrack.scrollLeft >
        1
      );

    }


    journeyTrack.addEventListener(
      "wheel",
      (event) => {

        if (
          Math.abs(event.deltaY) <=
          Math.abs(event.deltaX)
        ) {

          return;

        }


        if (
          !canMove(
            event.deltaY
          )
        ) {

          return;

        }


        event.preventDefault();


        journeyTrack.scrollLeft +=
          event.deltaY;

      },
      {
        passive: false
      }
    );


    journeyTrack.addEventListener(
      "pointerdown",
      (event) => {

        if (
          event.pointerType ===
          "touch"
        ) {

          return;

        }


        dragging = true;

        dragged = false;

        startX =
          event.clientX;

        startScroll =
          journeyTrack.scrollLeft;


        journeyTrack.classList.add(
          "is-dragging"
        );


        try {

          journeyTrack.setPointerCapture(
            event.pointerId
          );

        } catch {}

      }
    );


    journeyTrack.addEventListener(
      "pointermove",
      (event) => {

        if (!dragging) {
          return;
        }


        const distance =
          event.clientX -
          startX;


        if (
          Math.abs(distance) >
          4
        ) {

          dragged = true;

        }


        journeyTrack.scrollLeft =
          startScroll -
          distance;

      }
    );


    function stopDrag(event) {

      if (!dragging) {
        return;
      }


      dragging = false;


      journeyTrack.classList.remove(
        "is-dragging"
      );


      try {

        if (
          event?.pointerId !=
          null
        ) {

          journeyTrack.releasePointerCapture(
            event.pointerId
          );

        }

      } catch {}

    }


    journeyTrack.addEventListener(
      "pointerup",
      stopDrag
    );


    journeyTrack.addEventListener(
      "pointercancel",
      stopDrag
    );


    journeyTrack.addEventListener(
      "click",
      (event) => {

        if (dragged) {

          event.preventDefault();

          event.stopPropagation();

          dragged = false;

        }

      },
      true
    );

  }


  /* =========================================================
     PROJECT TILT
  ========================================================= */

  if (
    !touchDevice &&
    !reducedMotion
  ) {

    document
      .querySelectorAll(
        ".project-card"
      )
      .forEach(
        (card) => {

          let targetX = 0;
          let targetY = 0;

          let currentX = 0;
          let currentY = 0;

          let frame = null;


          function render() {

            currentX +=
              (
                targetX -
                currentX
              ) * 0.14;


            currentY +=
              (
                targetY -
                currentY
              ) * 0.14;


            card.style.transform =
              `perspective(1200px)
               rotateX(${currentX}deg)
               rotateY(${currentY}deg)
               scale(0.995)`;


            if (
              Math.abs(
                targetX -
                currentX
              ) > 0.01 ||
              Math.abs(
                targetY -
                currentY
              ) > 0.01
            ) {

              frame =
                requestAnimationFrame(
                  render
                );

            } else {

              frame = null;

            }

          }


          card.addEventListener(
            "pointermove",
            (event) => {

              const rect =
                card.getBoundingClientRect();


              const x =
                (
                  event.clientX -
                  rect.left
                ) /
                  rect.width -
                0.5;


              const y =
                (
                  event.clientY -
                  rect.top
                ) /
                  rect.height -
                0.5;


              targetX =
                -y * 3;


              targetY =
                x * 3;


              if (!frame) {

                frame =
                  requestAnimationFrame(
                    render
                  );

              }

            }
          );


          card.addEventListener(
            "pointerleave",
            () => {

              targetX = 0;

              targetY = 0;


              if (!frame) {

                frame =
                  requestAnimationFrame(
                    render
                  );

              }

            }
          );

        }
      );

  }


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  const sections =
    document.querySelectorAll(
      `
      .about-preview,
      .journey-section,
      .skills-section,
      .projects-preview,
      .contact-preview
      `
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    const observer =
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


    sections.forEach(
      (section) => {

        observer.observe(
          section
        );

      }
    );

  } else {

    sections.forEach(
      (section) => {

        section.classList.add(
          "is-visible"
        );

      }
    );

  }


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

            const id =
              link.getAttribute(
                "href"
              );


            if (
              !id ||
              id === "#"
            ) {

              return;

            }


            const target =
              document.querySelector(
                id
              );


            if (!target) {

              return;

            }


            event.preventDefault();


            const offset =
              navbar?.getBoundingClientRect()
                .height || 0;


            const top =
              target.getBoundingClientRect()
                .top +
              window.scrollY -
              offset;


            window.scrollTo({
              top: Math.max(
                0,
                top
              ),

              behavior:
                reducedMotion
                  ? "auto"
                  : "smooth"
            });


            history.replaceState(
              null,
              "",
              id
            );

          }
        );

      }
    );


  /* =========================================================
     RESIZE
  ========================================================= */

  let resizeTimer;


  window.addEventListener(
    "resize",
    () => {

      clearTimeout(
        resizeTimer
      );


      resizeTimer =
        setTimeout(
          () => {

            if (
              window.innerWidth >
              900
            ) {

              closeMenu();

            }

          },
          150
        );

    }
  );


  /* =========================================================
     CONSOLE
  ========================================================= */

  console.log(
    "%cANJALI — PORTFOLIO READY",
    "font-size:18px;font-weight:800;"
  );


});