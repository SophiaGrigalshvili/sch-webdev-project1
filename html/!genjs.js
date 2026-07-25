// header scroll thingie
let prevScrollpos = window.pageYOffset;

let headerDiv = document.querySelector("header");
const headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos <= currentScrollPos) {
    headerDiv.classList.remove("fixedToTop");
    headerDiv.style.top = "-12vw";
  } else {
    headerDiv.classList.add("fixedToTop");
    headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
};

// responsive nav menu
const burgermenu = document.querySelector(".fa-bars");
const headernav = document.querySelector(".mobilever");

burgermenu.addEventListener("click", () => {
  headernav.classList.toggle("active");
});
