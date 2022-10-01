if (localStorage.getItem("card") == null) {
  welcome();
}

document.querySelector("#leftSlide").addEventListener("click", slideLeft);

document.querySelector("#rightSlide").addEventListener("click", rightSlide);

function slideLeft(event) {
  let mydiv = document.querySelector("#budgetCard");
  mydiv.scrollBy(-350, 0);
}

function rightSlide(event) {
  let mydiv = document.querySelector("#budgetCard");
  mydiv.scrollBy(350, 0);
}

function isUserAvailable() {
  let obj = JSON.parse(localStorage.getItem("loggedUser")) || {};
  let count = 0;
  for (let x in obj) {
    count++;
  }

  if (count > 0) {
    let name = obj.email;
    name = name.substring(0, 7);
    document.querySelector("#username").innerText = name;
  }
}

function welcome() {
  let card = document.querySelector("#welcome");
  card.style.display = "block";

  let parentBack = document.querySelector("#welcome-main");
  parentBack.style.display = "block";
  parentBack.addEventListener("wheel", preventScroll, { passive: false });

  function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
  }

  card.style.marginTop = "200px";
  document
    .querySelector("#welcome>img")
    .addEventListener("click", function (event) {
      card.style.display = "none";
      parentBack.style.display = "none";
      console.log("yes");
      hideme();
    });

  document
    .querySelector("#welcome>button")
    .addEventListener("click", function (event) {
      card.style.display = "none";
      parentBack.style.display = "none";
      hideme();
    });

  function hideme() {
    localStorage.setItem("card", "1");
  }
}

document.querySelector("img[src='assets/Screenshot 2022-09-28 103848.png']").addEventListener("click",function(event){

  window.location.href="rugs.html"

})

document.querySelector("#container>img:nth-child(1)").addEventListener("click",function(event){

  window.location.href="fur.html"

})


document.querySelector("#dealCard>div:nth-child(1)").addEventListener("click",function(event){
  window.location.href="rugs.html"
})

document.querySelector("#dealCard>div:nth-child(2)").addEventListener("click",function(event){
  window.location.href="fur.html"
})


document.querySelector("#categoryCard>div:nth-child(1)").addEventListener("click",function(event){
  window.location.href="fur.html"
})

document.querySelector("#categoryCard>div:nth-child(2)").addEventListener("click",function(event){
  window.location.href="rugs.html"
})
document.querySelector("#brands>div:nth-child(1)").addEventListener("click",function(event){
  window.location.href="fur.html"
})
document.querySelector("#brands>div:nth-child(2)").addEventListener("click",function(event){
  window.location.href="fur.html"
})
document.querySelector("#brands>div:nth-child(3)").addEventListener("click",function(event){
  window.location.href="rugs.html"
})
document.querySelector("#brands>div:nth-child(4)").addEventListener("click",function(event){
  window.location.href="rugs.html"
})