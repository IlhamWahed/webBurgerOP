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
