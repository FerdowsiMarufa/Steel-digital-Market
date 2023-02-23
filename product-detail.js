// Header image hover change 

const allHoverImages = document.querySelectorAll('.side img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
  console.log("ashche");
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}













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
