let createAccount = document.querySelector(".new-account");
console.log("Hey I am js ");
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

let button = document.querySelector(".button");

let login_page = document.querySelector(".login-none");

button.onclick = () => {
  console.log("ok");
  login_page.classList.toggle("active");
 
};
document.querySelector(".cross-button").onclick = () => {
  login_page.classList.remove("active");
 
};


// ----------------------- For Name --------- 

function goDashboard(){
          let fName=document.getElementById("fName").value;
          let mName=document.getElementById("mName").value;
          let lName=document.getElementById("lName").value; 
         
          console.log(fName);
          localStorage.setItem("Name",fName+" "+mName+" "+lName);
          window.location.href = "Dashboard.html";
               
}
   
 