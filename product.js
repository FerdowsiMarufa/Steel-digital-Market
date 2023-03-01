//search box//
let x;
let allproduct = document.querySelector(".product-row");
let singleproduct = document.querySelectorAll(".card");
console.log(singleproduct);
// for create json data -------------------------------------
let i=0;
let objAll=[];
console.log(singleproduct.forEach((element)=>{
  let key="id"+i;
let obj={
    category:"Steel",
    name:"",
    img:"",
    after_price:"",
    before_price:""

};

    console.log(element.querySelector("img"));
    obj.name=element.querySelector("span").textContent.toLowerCase();
    obj.img=element.querySelector("img").src;
    obj.after_price=element.getElementsByClassName("after-price")[0].innerHTML;
    obj.before_price=element.getElementsByClassName("before-price")[0].innerHTML;
    
       
    // localStorage.setItem(key,JSON.stringify(obj));
       objAll.push(obj);
     
     i++;
}));
let pre=document.querySelector("#msg pre"); 
pre.textContent=JSON.stringify(objAll,'',2);
// -----------------------------------------

// console.log(localStorage.length);
let searchbox = document.querySelector("#search-input");
let searchForm2 = document.querySelector("#search-form");

const searchProduct2 = () => {
  document.querySelector(".product-not-found ").style.display = "none";
  const value = searchbox.value.toLowerCase();
  // console.log(value);
  x = 0;
  singleproduct.forEach((element) => {
    // document.querySelector(".product-not-found ").style.display = "none";
    //console.log(element," sdsdsd");
    let name = element.querySelector("span").textContent.toLowerCase();

    if (name.indexOf(value) != -1) {
      element.style.display = "flex";
      element.style.height = "320px";
      element.style.width = "225px";
      element.querySelector("img").style.height = "200px";
      element.querySelector("img").style.width = "200px";
      x = 1;
      // console.log(x);
    } else {
      element.style.display = "none";
    }
  });
  if (x == 0) {
    // console.log("x0: ", x);
    document.querySelector(".product-not-found ").style.display = "block";
  }
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
      x = 0;
      document.querySelector(".product-not-found ").style.display = "none";
      console.log("checked");
      var productName = label[i].textContent.toLowerCase();
      console.log(productName);
      singleproduct.forEach((element) => {
        let name = element.querySelector("span").textContent.toLowerCase();
        if (name[0].indexOf(productName[0]) != -1) {
          element.style.height = "320px";
          element.style.width = "225px";
          element.querySelector("img").style.height = "200px";
          element.querySelector("img").style.width = "200px";
          element.style.display = "flex";
          x = 1;
          console.log("x1 :", x);
        } else {
          element.style.display = "none";
        }
      });
      if (x == 0) {
        console.log("x0: ", x);
        document.querySelector(".product-not-found ").style.display = "block";
      }

      console.log(productName);
    } else {
      console.log(" not checked");
    }
  });
}

window.onscroll = () => {
  document.querySelector(".header").style.boxShadow =
    "0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)";
  // document.querySelector(".menu-bar-display").style.display = "none";
};
