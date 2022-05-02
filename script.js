"use strict";
const acc = document.getElementsByClassName("accordion");
let panel = document.querySelectorAll(".panel");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let setClasses = !this.classList.contains("active-button");
    setClass(acc, "active", "remove");
    setClass(acc, "active-button", "remove");
    setClass(panel, "show", "remove");

    if (setClasses) {
      this.classList.toggle("active");
      this.classList.toggle("active-button");
      this.nextElementSibling.classList.toggle("show");
    }
  });
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
