const cList = document.querySelectorAll(".c-list");
const cQuote = document.querySelectorAll(".customer-quote");

cList.forEach((element, index) => {
  element.addEventListener("click", function () {
    console.log(element, index);
    element.classList.add("c-active");
    cQuote[index].classList.add("active-quote");
    for (let i = 0; i < cList.length; i++) {
      if (i != index) {
        cList[i].classList.remove("c-active");
        cQuote[i].classList.remove("active-quote");
      }
    }
  });
});
