//search box//

let allproduct = document.querySelector(".product-row");
let singleproduct = allproduct.querySelectorAll(".card");
console.log(singleproduct);
let searchbox = document.querySelector("#search-input");
let searchForm2 = document.querySelector("#search-form");
const searchProduct2 = () => {
  const value = searchbox.value.toLowerCase();
  console.log(value);
  singleproduct.forEach((element) => {
    let name = element.querySelector("span").textContent.toLowerCase();
    if (name.indexOf(value) != -1) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
};
searchForm2.addEventListener("keyup", searchProduct2);

// check box//
let list = document.querySelector(".list-unstyled");
let checkbox = list.querySelectorAll("#checkbox");
let label = list.querySelectorAll("label");
console.log(label);
console.log(checkbox.length);
for (let i = 0; i < checkbox.length; i++) {
  console.log("yes");
  checkbox[i].addEventListener("change", () => {
    if (checkbox[i].checked) {
      console.log("checked");
      var productName = label[i].textContent.toLowerCase();
      console.log(productName);
      singleproduct.forEach((element) => {
        let name = element.querySelector("span").textContent.toLowerCase();
        if (name.indexOf(productName) != -1) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      });

      console.log(productName);
    } else {
      console.log(" not checked");
    }
  });
}

window.onscroll = () => {
  document.querySelector(".header").style.boxShadow =
    "0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)";
  document.querySelector(".menu-bar-display").style.display = "none";
};

// document.querySelector(".product-body").onmouseover = function () {
//   document.querySelector(".menu-bar-display").style.display = "none";
// };

// document.querySelector(".electronics").onmouseover = function () {
//   mouseOver();
// };

// function mouseOver() {
//   document.querySelector(".menu-bar-display").style.display = "block";
//   console.log("hello");
// }

// function mouseOver() {
//   document.querySelector(".menu-bar-display").style.display = "block";
//   console.log("hello");
// }
// const element = document.querySelector(".electronics");

// element.addEventListener("mouseover", (event) => {
//   console.log("Mouse in");
//   document.querySelector(".menu-bar-display").style.display = "block";
// });

// element.addEventListener("mouseout", (event) => {
//   console.log("Mouse out");
//   document.querySelector(".menu-bar-display").style.display = "none";
// });
