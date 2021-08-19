const eyeBtn = document.querySelectorAll(".eye");
console.log(eyeBtn);
eyeBtn.forEach((element) => {
  element.addEventListener("click", function () {
    let input = element.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      element.classList.add("bi-eye-fill");
      element.classList.remove("bi-eye-slash-fill");
    } else {
      input.type = "password";
      element.classList.remove("bi-eye-fill");
      element.classList.add("bi-eye-slash-fill");
    }
  });
});
