
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

document.querySelector("#account").addEventListener("click", function (event) {
  window.location.href = "signup.html";
});



  function isUserAvailable(){
    let obj = JSON.parse(localStorage.getItem("loggedUser"))||{}
    let count =0
   for(let x in obj){
    count++
   }
  
   if(count>0){
    let name = obj.email
    name = name.substring(0,7)
    document.querySelector("#username").innerText=name
   }
  
  }

  
