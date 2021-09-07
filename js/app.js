//////////////// typed.js

window.addEventListener("DOMContentLoaded", (event) => {
  var options = {
    strings: ["طراح وبسایت هستم.", "برنامه نویس انگولار هستم."],
    typeSpeed: 130,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    showCursor: false,
  };

  var typed = new Typed("#Typed", options);
});

//////////////// navigation

const pages = document.querySelectorAll("section");
const navBtns = document.querySelectorAll(".nav__item a");

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    activeNav(e);
    openPage(e);
  });
});

function activeNav(e) {
  e.preventDefault();
  console.log(e.target.closest(".nav__link").firstElementChild);
  navBtns.forEach((btn) => {
    btn.firstElementChild.classList.remove("nav__link-active");
    btn.lastElementChild.classList.remove("nav__link-title-active");
  });

  const activeNavIcon = e.target.closest(".nav__link").firstElementChild;
  const activeNavTitle = e.target.closest(".nav__link").lastElementChild;
  activeNavIcon.classList.add("nav__link-active");
  activeNavTitle.classList.add("nav__link-title-active");
}

function openPage(e) {
  e.preventDefault();
  let targetbtn = e.target.closest(".nav__link").getAttribute("href");
  pages.forEach((page) => {
    page.classList.remove("section-active");
    if (page.classList.contains(targetbtn.slice(1))) {
      page.classList.add("section-active");
    }
  });
}

//////////////// filter gallery

const filterContainer = document.querySelectorAll(".portfolio__link");
let galleryItems = document.querySelectorAll(".portfolio__card");

for (let f of filterContainer) {
  f.addEventListener("click", (event) => {
    for (let l of filterContainer) {
      l.classList.remove("portfolio__active");
    }
    event.target.classList.add("portfolio__active");
    const filterValue = event.target.getAttribute("data-filter");
    console.log(filterValue);
    galleryItems.forEach((item) => {
      if (
        item.getAttribute("data-category") === filterValue ||
        filterValue === "all"
      ) {
        item.classList.remove("portfolio-hide");
        item.classList.add("portfolio-show");
      } else {
        item.classList.remove("portfolio-show");
        item.classList.add("portfolio-hide");
      }
    });
  });
}
