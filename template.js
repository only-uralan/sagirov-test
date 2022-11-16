let burgerBtn = document.querySelector(".burger-menu");
let menu = document.querySelector(".menu");

burgerBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});
