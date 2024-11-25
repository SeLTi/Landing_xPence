const navButton = document.querySelector(".nav_btn");
const navCloseButton = document.querySelector(".nav_close");
const headerNav = document.querySelector(".nav");
const body = document.querySelector(".body");
const btnHeader = document.querySelector(".btn--white");

navButton.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  btnHeader.classList.toggle("active");
  body.classList.toggle("body--overflow_hidden");
});

navCloseButton.addEventListener("click", () => {
  headerNav.classList.remove("active");
  btnHeader.classList.remove("active");
  body.classList.remove("body--overflow_hidden");
});

