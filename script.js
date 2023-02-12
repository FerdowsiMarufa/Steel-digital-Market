import { ehyr } from "./data/electronics.json";

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
  console.log(recentArray);
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
