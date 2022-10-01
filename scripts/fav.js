let cart = JSON.parse(localStorage.getItem("favList")) || [];

let stoggle = 0;
document.querySelector("#closePromo").addEventListener("click", slidePromo);

function slidePromo(event) {
  let slide = document.querySelector(
    "#itemsCon>div:nth-child(2)>div:nth-child(1)"
  );
  let closePromo = document.querySelector("#closePromo");
  if (stoggle == 0) {
    slide.style.maxHeight = "200px";
    slide.style.transition = "max-height 0.5s";
    stoggle = 1;
    closePromo.style.transform = "rotate(45deg)";
    closePromo.style.transition = "transform 0.5s";
  } else {
    slide.style.maxHeight = "60px";
    slide.style.transition = "max-height 0.5s";
    stoggle = 0;
    closePromo.style.transform = "rotate(0deg)";
    closePromo.style.transition = "transform 0.5s";
  }
}

let totalPrice = 0;
let totalDiscount = 0;
let checkoutPrice = 0;
let totalItem = 0;
inflateCart();

function inflateCart() {
  document.querySelector("#cartItems").innerText = "";
  cart.forEach((el, index) => {
    totalItem++;
    totalPrice += +el.price * el.quan;
    totalDiscount += +el.price * el.quan - +el.strikeOff * el.quan;
    checkoutPrice += +el.strikeOff * el.quan;
    let mainDiv = document.createElement("div");

    let subDiv1 = document.createElement("div");
    let subDiv2 = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    subDiv1.append(image);
    let name = document.createElement("h4");
    name.innerText = el.name;

    let priceDiv = document.createElement("div");

    let strikeOff = document.createElement("p");
    strikeOff.innerText = "INR " + el.price;
    let savings = document.createElement("p");
    savings.innerText = el.off + "%" + " Savings";
    priceDiv.append(strikeOff, savings);

    let price = document.createElement("h3");
    price.innerText = "Sale INR " + el.strikeOff;

    let quan = document.createElement("select");
    let op0 = document.createElement("option");

    op0.innerText = "Remove 0";
    op0.setAttribute("value", "0");
    let op1 = document.createElement("option");

    op1.innerText = "1";
    op1.setAttribute("value", "1");
    let op2 = document.createElement("option");

    op2.innerText = "2";
    op2.setAttribute("value", "2");
    let op3 = document.createElement("option");

    op3.innerText = "3";
    op3.setAttribute("value", "3");
    let op4 = document.createElement("option");

    op4.innerText = "4";
    op4.setAttribute("value", "4");
    let op5 = document.createElement("option");

    op5.innerText = "5";
    op5.setAttribute("value", "5");
    let op6 = document.createElement("option");

    op6.innerText = "6";
    op6.setAttribute("value", "6");
    let op7 = document.createElement("option");

    op7.innerText = "7";
    op7.setAttribute("value", "7");
    let op8 = document.createElement("option");

    op8.innerText = "8";
    op8.setAttribute("value", "8");
    let op9 = document.createElement("option");

    op9.innerText = "9";
    op9.setAttribute("value", "9");
    let op10 = document.createElement("option");

    op10.innerText = "10";
    op10.setAttribute("value", "10");
    let op11 = document.createElement("option");

    op11.innerText = "11";
    op11.setAttribute("value", "11");
    let op12 = document.createElement("option");

    op12.innerText = "12";
    op12.setAttribute("value", "12");
    let op13 = document.createElement("option");

    op13.innerText = "13";
    op13.setAttribute("value", "13");
    let op14 = document.createElement("option");

    op14.innerText = "14";
    op14.setAttribute("value", "14");
    let op15 = document.createElement("option");

    op15.innerText = "15";
    op15.setAttribute("value", "15");
    let op16 = document.createElement("option");

    op16.innerText = "16";
    op16.setAttribute("value", "16");
    let op17 = document.createElement("option");

    op17.innerText = "17";
    op17.setAttribute("value", "17");
    let op18 = document.createElement("option");

    op18.innerText = "18";
    op18.setAttribute("value", "18");
    let op19 = document.createElement("option");

    op19.innerText = "19";
    op19.setAttribute("value", "19");
    let op20 = document.createElement("option");

    op20.innerText = "20";
    op20.setAttribute("value", "20");

    quan.append(
      op0,
      op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20
    );
    let fs = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.innerText = "Qty";
    fs.append(legend, quan);
    quan.value = el.quan;
    quan.addEventListener("change", function (event) {
      updatePrice(el, index, event);
    });

    let remove = document.createElement("p");
    remove.innerText = "Remove";
    remove.addEventListener("click", function (event) {
      removeItem(el, index, event, "a");
    });

    subDiv2.append(name, priceDiv, price, fs, remove);
    mainDiv.append(subDiv1, subDiv2);

    let cartItems = document.querySelector("#cartItems");
    cartItems.append(mainDiv);
  });

  let itemCount = document.querySelector("#count");
  itemCount.innerText = `(${totalItem})`;
  let total = document.querySelector("#total");
  total.innerText = totalPrice.toFixed(2);
  let savings = document.querySelector("#savings");
  savings.innerText = totalDiscount.toFixed(2);
  let finalPrice = document.querySelector("#subtotal");
  finalPrice.innerText = checkoutPrice.toFixed(2);
  let yourTotal = document.querySelector("#yourTotal");
  yourTotal.innerText = checkoutPrice.toFixed(2);
  emptyCart()
}

function updatePrice(el, index, event) {
  let newQuan = event.target.value;
  if (newQuan == "0") {
    removeItem(el, index, event, "b");
  } else {
    el.quan = newQuan;
    localStorage.setItem("ocart", JSON.stringify(cart));
    resetValues()
    inflateCart();
  }
}

function removeItem(el, index, event, node) {
  if (node == "a") {
    event.target.parentNode.parentNode.remove();
    removeFromCart(el, index);
  } else {
    event.target.parentNode.parentNode.parentNode.remove();
    removeFromCart(el, index);
  }
}

function removeFromCart(el, index) {
  cart.splice(index, 1);
  localStorage.setItem("favList", JSON.stringify(cart));
  resetValues()
  inflateCart();
}

function resetValues() {
  totalPrice = 0;
  totalDiscount = 0;
  checkoutPrice = 0;
  totalItem = 0;
}

document.querySelector("#apply").addEventListener("click",applyPromo);

function applyPromo(event){
let promoCode = document.querySelector("#promoCode").value
  if(promoCode==""){
    swal({
      title: "Invalid Code!",
      text: "Your Promo Code Is Invalid!",
      icon: "error",
      button: "Try Again",
    });
  }else if(promoCode=="OVERSTOCK40"){
    swal({
      title: "Promo Code Applied !",
      text: "Yaay , You got 40% off on your order",
      icon: "success",
      button: "I am excited",
    });

    newTotal()

  }else{
    swal({
      title: "Invalid Code!",
      text: "Your Promo Code Is Invalid!",
      icon: "error",
      button: "Try Again",
    });

  }

}

function newTotal(){
  checkoutPrice=(checkoutPrice*60)/100
  let finalPrice = document.querySelector("#subtotal");
  finalPrice.innerText = checkoutPrice.toFixed(2);
  let yourTotal = document.querySelector("#yourTotal");
  yourTotal.innerText = checkoutPrice.toFixed(2);
  document.querySelector("#promo>div:last-child").style.display="none";
  document.querySelector("#promo>div:first-child>h3").innerText="Promo Code Applied"
  document.querySelector("#promo>div:first-child>i").style.display="none";
  document.querySelector("#promo>p").style.display="none";
  document.querySelector("#promo>div:first-child>h3").style.color="green";
}


document.querySelector("#checkOutButton").addEventListener("click",CheckOut);

function CheckOut(){
  localStorage.setItem("checkout",checkoutPrice);
  window.location.href="payment.html"
}

function emptyCart(){
  if(cart.length==0){
    document.querySelector("#container>h2:nth-child(1)").innerHTML="Your List is empty"
  }
}
