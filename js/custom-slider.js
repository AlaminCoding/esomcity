const customerList = document.querySelector(".customer-list");
const listChild = customerList.children;
const newList = [...listChild, ...listChild];
for (let i = 0; i < 8; i++) {
  let node = document.createElement("li");
  node.innerHTML = newList[i].innerHTML;
  customerList.appendChild(node);
}
for (let i = 0; i < listChild.length; i++) {
  listChild[i].style.transform = `translateY(${-456}px)`;
}

const slideUpBtn = document.getElementById("slide-up");
const slideDownBtn = document.getElementById("slide-down");

let transletValue = 113.98;

slideUpBtn.addEventListener("click", function () {
  for (let i = 0; i < listChild.length; i++) {
    initTransletValue = -Number(
      listChild[i].style.transform.replace(/[^\d.]/g, "")
    );
    listChild[i].style.transform = `translateY(${
      initTransletValue + transletValue
    }px)`;
  }
});

slideDownBtn.addEventListener("click", function () {
  for (let i = 0; i < listChild.length; i++) {
    initTransletValue = -Number(
      listChild[i].style.transform.replace(/[^\d.]/g, "")
    );
    listChild[i].style.transform = `translateY(${
      initTransletValue - transletValue
    }px)`;
  }
});
