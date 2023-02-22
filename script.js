let hover_login = document.querySelector(".login_menu");

let button = document.querySelector(".button");

let login_page = document.querySelector(".login-none");

button.onclick = () => {
  login_page.classList.toggle("active");
  hover_login.style.display = "none";
};
document.querySelector(".cross-button").onclick = () => {
  login_page.classList.remove("active");
  hover_login.style.display = "";
};

let input_search = document.getElementById("search-input");

let form_search = document.getElementById("search-form");

let recent_SearchEl = document.querySelector(".recent_search");

input_search.onclick = () => {
  recent_SearchEl.classList.toggle("active");
};

let recentArray = ["mobile", "phone"];
form_search.addEventListener("submit", (e) => {
  e.preventDefault();
  recentArray.unshift(input_search.value);

  renderRecent();
  recent_SearchEl.classList.remove("active");
});

function renderRecent() {
  let recent_Search_html = "";
  recentArray.forEach((el) => {
    recent_Search_html += `
        <div class="recent_list d-flex">
            <i class="fa-solid fa-clock-rotate-left mt-1 p-1"></i>
            <p >${el}</p>
        </div>
    `;
  });

  recent_SearchEl.innerHTML = recent_Search_html;
}
renderRecent();

// login to create account ----------------create account to login

let createAccount = document.querySelector(".new-account");

createAccount.onclick = () => {
  document.querySelector(".login-description").style.display = "none";

  document.querySelector(".login-details").style.display = "none";
  document.querySelector(".signup-description").style.display = "block";
  document.querySelector(".signUp").style.display = "block";
};

let login = document.querySelector("#existing-button");
console.log(login);
login.onclick = () => {
  document.querySelector(".login-description").style.display = "";

  document.querySelector(".login-details").style.display = "";
  document.querySelector(".signup-description").style.display = "none";
  document.querySelector(".signUp").style.display = "none";
};

// slider

let buttonPrev = document.querySelector(".prev");
let buttonNext = document.querySelector(".next");
let product = document.getElementsByClassName("e-product");
console.log(product);
let product_page = Math.ceil(product.length / 6);
let l = 0;
let movePer = 14;

let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
buttonNext.onclick = () => {
  right_mover();
};
buttonPrev.onclick = () => {
  left_mover();
};

//beauty slider//

let beautybuttonPrev = document.querySelector(".prev-beauty");
let beautybuttonNext = document.querySelector(".next-beauty");
let beautyproduct = document.getElementsByClassName("beauty");
console.log(beautyproduct);

let right_mover_beauty = () => {
  l = l + movePer;
  if (beautyproduct == 1) {
    l = 0;
  }
  for (const i of beautyproduct) {
    i.style.left = "-" + l + "%";
  }
};
let left_mover_beauty = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of beautyproduct) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
beautybuttonNext.onclick = () => {
  right_mover_beauty();
};
beautybuttonPrev.onclick = () => {
  left_mover_beauty();
};

let searchForm = document.querySelector("#search-form");
let products = document.querySelector(".product-slider");
let product2 = products.querySelectorAll(".product");
let searchbar = document.querySelector("#search-input");

const searchProduct = () => {
  const value = searchbar.value.toLowerCase();
  console.log(value);
  product2.forEach((element) => {
    let name = element.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(value) != -1) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
};
searchForm.addEventListener("keyup", searchProduct);

//Product page

window.onscroll = () => {
  document.querySelector(".header").style.boxShadow =
    "0 0.5rem 1.5rem rgba(0, 0, 0, 0.6);";
};
