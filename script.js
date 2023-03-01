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
  input_search.style.value;
};

let recentArray = ["mobile", "phone"];
form_search.addEventListener("submit", (e) => {
  e.preventDefault();
  recentArray.unshift(input_search.value);
  input_search.value = "";
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
// console.log(login);
login.onclick = () => {
  document.querySelector(".login-description").style.display = "";

  document.querySelector(".login-details").style.display = "";
  document.querySelector(".signup-description").style.display = "none";
  document.querySelector(".signUp").style.display = "none";
};

// slider

// // slider
let buttonPrev = document.querySelector(".prev");
let buttonNext = document.querySelector(".next");
let product = document.getElementsByClassName("e-product");
console.log(product);
let product_page = Math.ceil(product.length / 6);
let l = 0;
let t = 0;
let b = 0;
let movePer = 14;

let right_mover = () => {
  t = t + 1;
  if (l > 42) {
    l = 0;
  }
  console.log(t, l);
  l = l + movePer;
  if (t == 4) {
    t = 0;
    l = 0;
  }
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  t = t - 1;
  if (t < 0) {
    t = 0;
  }
  console.log(t, l);
  l = l - movePer;
  if (l <= 0) {
    l = 14 * 3;
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

// beauty slider//

let beautybuttonPrev = document.querySelector(".prev-beauty");
let beautybuttonNext = document.querySelector(".next-beauty");
let beautyproduct = document.getElementsByClassName("beauty");
console.log(beautyproduct);

let right_mover_beauty = () => {
  b = b + 1;
  if (l > 42) {
    l = 0;
  }
  l = l + movePer;
  if (b == 4) {
    b = 0;
    l = 0;
  }
  console.log(b, l);
  if (beautyproduct == 1) {
    l = 0;
  }
  for (const i of beautyproduct) {
    i.style.left = "-" + l + "%";
  }
};
let left_mover_beauty = () => {
  b = b - 1;
  if (b < 0) {
    b = 0;
  }
  l = l - movePer;
  if (l <= 0) {
    l = 14 * 3;
  }
  console.log(b, l);
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

// steel slider//

let steelbuttonPrev = document.querySelector(".prev-steel");
let steelbuttonNext = document.querySelector(".next-steel");
let steelproduct = document.getElementsByClassName("steel");
console.log(steelproduct);
let s = 0;
let right_mover_steel = () => {
  if (l > 42) {
    l = 0;
  }
  s = s + 1;
  l = l + movePer;
  if (s == 4) {
    s = 0;
    l = 0;
  }

  if (steelproduct == 1) {
    l = 0;
  }
  for (const i of steelproduct) {
    i.style.left = "-" + l + "%";
  }
};
let left_mover_steel = () => {
  s = s - 1;
  if (s < 0) {
    s = 0;
  }
  l = l - movePer;
  if (l <= 0) {
    l = 14 * 3;
  }
  for (const i of steelproduct) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
steelbuttonNext.onclick = () => {
  right_mover_steel();
};
steelbuttonPrev.onclick = () => {
  left_mover_steel();
};

// plate slider//

let platebuttonPrev = document.querySelector(".prev-plate");
let platebuttonNext = document.querySelector(".next-plate");
let plateproduct = document.getElementsByClassName("plate");
console.log(plateproduct);
let p = 0;
let right_mover_plate = () => {
  p = p + 1;
  if (l > 42) {
    l = 0;
  }
  l = l + movePer;
  if (p == 4) {
    p = 0;
    l = 0;
  }
  console.log(p, l);
  if (plateproduct == 1) {
    l = 0;
  }
  for (const i of plateproduct) {
    i.style.left = "-" + l + "%";
  }
};
let left_mover_plate = () => {
  p = p - 1;
  if (p < 0) {
    p = 0;
  }
  l = l - movePer;
  if (l <= 0) {
    l = 14 * 3;
  }
  console.log(p, l);
  for (const i of plateproduct) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
platebuttonNext.onclick = () => {
  right_mover_plate();
};
platebuttonPrev.onclick = () => {
  left_mover_plate();
};

// product search

const dataArray = [];
fetch("/data/AllData.json")
  .then((response) => response.json())
  .then((data) => {
    // Initialize the array

    // Loop through the data and create objects
    data.forEach((item) => {
      const obj = {};
      obj.category = item.category;
      obj.img = item.img;
      obj.name = item.name;
      obj.after_price = item.after_price;
      obj.before_price = item.before_price;
      dataArray.push(obj);
    });

    // Print the array
    // console.log(dataArray);
    done();
    // [{name: "John", age: 30, city: "New York"}, {name: "Jane", age: 25, city: "San Francisco"}]
  });

let searchbar = document.querySelector("#search-input");
let searchForm = document.querySelector("#search-form");

function done() {
  for (let i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i].category);
  }
}

function myFunction() {
  const value = searchbar.value.toLowerCase();
  document.getElementById("after-ban").style.display = "none";
  document.getElementById("electronic-menu").style.backgroundColor = "white";
  document.getElementById("mobile-menu").style.backgroundColor = "white";
  let show = document.getElementById("show-search");
  show.innerHTML = ` <section id="show-search" class="bg-light pt-3">
   <div id="items" class="w-100 d-flex flex-wrap bg-light">
         
       </div>
    </section>`;

  let items = document.getElementById("items");
  for (let i = 0; i < dataArray.length; i++) {
    let name = dataArray[i].name.toLowerCase();
    //  if(name)
    if (name.includes(value)) {
      let fdiv = document.createElement("div");
      let imgdiv = document.createElement("div");
      let img = document.createElement("img");
      let fp = document.createElement("p");
      let sp = document.createElement("p");
      let tp = document.createElement("p");
      fp.className = "text-primary mb-0 fs-6 af";
      sp.className = "mb-0 text-warning";
      tp.className = "mb-0 text-secondary bef";
      imgdiv.className = "d-flex flex-column align-items-center";
      // console.log(dataArray[i].category);
      if (dataArray[i].category == "consumable") {
        document.getElementById("electronic-menu").style.backgroundColor =
          "#cee2eb";
      } else {
        document.getElementById("mobile-menu").style.backgroundColor =
          "#cee2eb";
      }
      imgdiv.appendChild(img);
      fdiv.className = "w-25 px-5 py-2";
      img.style.height = "186px";
      img.src = dataArray[i].img;
      fp.innerText = dataArray[i].name;
      sp.innerText = dataArray[i].after_price;
      tp.innerText = dataArray[i].before_price;

      fdiv.appendChild(imgdiv);
      fdiv.appendChild(fp);
      fdiv.appendChild(sp);
      fdiv.appendChild(tp);
      items.appendChild(fdiv);

      fdiv.className = "py-5";
      fdiv.style.padding = "3px 20px";
      fdiv.style.width = "18%";
      img.style.width = "190px";

      //  div.innerText=name;
      //  show.appendChild(div);
    }
    // console.log(name);
  }

  // if (value == "mobile") {
  //   window.location.href = "/productPage.html";
  // } else {
  //   window.location.href = "/electronics.html";
  // }
}
