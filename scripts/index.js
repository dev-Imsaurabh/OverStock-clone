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

document.querySelector("#homepage").addEventListener("click", function (event) {
  window.location.href = "index.html";
});


