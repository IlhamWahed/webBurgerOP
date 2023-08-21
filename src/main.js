//-------------- Navbar -----------------//
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
//-------------- Navbar End-----------------//

//-------------- Tabs-----------------//
const tabEl = document.querySelectorAll(".tabs_wrap ul li");
const allEL = document.querySelectorAll(".items_wrap");
const foodEL = document.querySelectorAll(".food");
const snackEl = document.querySelectorAll(".snack");
const beverageEL = document.querySelectorAll(".beverage");

tabEl.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabEl.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    const tabValue = tab.getAttribute("data-tabs");

    allEL.forEach((item) => {
      item.style.display = "none";
    });

    if (tabValue == "food") {
      foodEL.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabValue == "snack") {
      snackEl.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabValue == "beverage") {
      beverageEL.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      allEL.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});
//-------------- Tabs End-----------------//

//-------------- Dark Mode-----------------//
const htmlEl = document.querySelector("html");
const moonToggle = document.getElementById("moon-toggle");

if (localStorage.getItem("mode") === "dark") {
  darkMode();
} else {
  lightMode();
}

moonToggle.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") === "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  htmlEl.classList.add("dark");
  moonToggle.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  htmlEl.classList.remove("dark");
  moonToggle.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
//-------------- Dark Mode End-----------------//

//-------------- Scroll ----------------//
scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);
//-------------- Scroll End----------------//

//-------------- Change BG Header----------------//
const scrollHeader = () => {
  const headerEl = document.getElementById("header");
  if (this.scrollY >= 50) {
    headerEl.classList.add("border-b", "border-secondaryColor");
  } else {
    headerEl.classList.remove("border-b", "border-secondaryColor");
  }
};
window.addEventListener("scroll", scrollHeader);
//-------------- Change BG Header End----------------//

//-------------- Scroll Section Active ----------------//
const activeLink = () => {
  const sectionEl = document.querySelectorAll("section");
  const navLinkEL = document.querySelectorAll(".nav-link");

  let current = "home";

  sectionEl.forEach((sections) => {
    const sectionTop = sections.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = sections.getAttribute("id");
    }
  });

  navLinkEL.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};

window.addEventListener("scroll", activeLink);
//-------------- Scroll Section Active End----------------//

//-------------- Scroll Image Reveal----------------//
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home-img");
sr.reveal(".home-content", { origin: "bottom" });
sr.reveal(".card-category", { interval: 300 });
sr.reveal(".promo-card-1", { origin: "left" });
sr.reveal(".promo-card-2", { origin: "right" });
sr.reveal(".about-img", { origin: "bottom" });
sr.reveal(".about-title");
sr.reveal(".menu-img", { origin: "left" });
sr.reveal("#review", { origin: "right" });
sr.reveal(".footer");

//-------------- Scroll Image Reveal End----------------//
