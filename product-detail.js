// Header image hover change

const allHoverImages = document.querySelectorAll(".side img");
const imgContainer = document.querySelector(".img-container");

window.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});

allHoverImages.forEach((image) => {
  console.log("ashche");
  image.addEventListener("mouseover", () => {
    imgContainer.querySelector("img").src = image.src;
    resetActiveImg();
    image.parentElement.classList.add("active");
  });
});

function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}

//  zoom image

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

// image zoomer
const container = document.querySelector(".img-container");
const image = document.querySelector(".img");
const lens = document.querySelector(".lens");
const result = document.querySelector(".result");

const containerRact = container.getBoundingClientRect();
const imageRact = image.getBoundingClientRect();
const lensRact = lens.getBoundingClientRect();
const resultRact = result.getBoundingClientRect();

container.addEventListener("mousemove", zoomImage);
// result.style.display = "none";
function zoomImage(e) {
  result.style.display = "block";
  console.log(result.style.display);
  const { x, y } = getMousepositon(e);
  console.log("zoom image", e.clientX, e.clientY);
  lens.style.left = x + "px";
  lens.style.top = y + "px";

  let fx = resultRact.width / lensRact.width;
  let fy = resultRact.height / lensRact.height;
  result.style.backgroundSize = `${imageRact.width * fx}px ${
    imageRact.height * fy
  }px`;
  result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`;
  result.style.backgroundImage = `url(${image.src})`;
  // result.style.display = "none";
}
function getMousepositon(e) {
  let x = e.clientX - containerRact.left - lensRact.width / 2;
  let y = e.clientY - containerRact.top - lensRact.width / 2;

  let minX = 0;
  let minY = 0;
  let maxX = containerRact.width - lensRact.width;
  let maxY = containerRact.height - lensRact.height;

  if (x <= minX) {
    x = minX;
  } else if (x >= maxX) {
    x = maxX;
  }

  if (y <= minY) {
    y = minY;
  } else if (y >= maxY) {
    y = maxY;
  }

  return { x, y };
}

container.addEventListener("mouseout", (event) => {});

onmouseout = (event) => {
  console.log(" mouse out");
  result.style.display = "none";
};
