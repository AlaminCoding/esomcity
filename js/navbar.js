const mainNav = document.querySelector(".main-menu");
const toggleBtn = document.querySelector(".toggle-btn");

let openNav = false;

toggleBtn.addEventListener("click", function () {
  if (openNav === false) {
    mainNav.style.right = "-40px";
    toggleBtn.innerHTML = `<i class="bi bi-x-square"></i>`;
    openNav = true;
  } else {
    mainNav.style.right = "-390px";
    toggleBtn.innerHTML = `<i class="bi bi-list"></i>`;
    openNav = false;
  }
});
