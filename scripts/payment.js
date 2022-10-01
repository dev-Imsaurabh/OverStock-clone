let checkoutPrice = localStorage.getItem("checkout");
console.log(checkoutPrice)

let subtotal=document.querySelector("#subtotal")
subtotal.innerText=checkoutPrice
let shipping = document.querySelector("#shipping")
shipping.innerText=((checkoutPrice*15)/100).toFixed(2);
let tax=document.querySelector("#tax");
tax.innerText=((checkoutPrice*2)/100).toFixed(2);
let orderTotal=document.querySelector("#total").innerText=((+subtotal.innerText)+(+shipping.innerText)+(+tax.innerText)).toFixed(2)
let total = orderTotal;

document.querySelector("#placeOrder").addEventListener("click",function(){
let email = document.querySelector("#email").value
let fname = document.querySelector("#fname").value
let lname = document.querySelector("#lname").value
let address = document.querySelector("#address").value
let country = document.querySelector("#country").value
let state = document.querySelector("#state").value
let pinCode = document.querySelector("#pincode").value
let phone = document.querySelector("#phone").value
let cardType = document.querySelector("#cardType").value
let ccn = document.querySelector("#ccn").value
let month = document.querySelector("#month").value
let year = document.querySelector("#year").value
let cvv = document.querySelector("#cvv").value

if(email==""||fname==""||lname==""||address==""||country==""||state==""||pinCode==""||phone==""||cardType==""||ccn==""||month==""||year==""||cvv==""){
    swal({
        title: "Invalid details!",
        text: "Shipping details/Card details Invalid!",
        icon: "error",
        button: "Try Again",
      });
}else{
    window.location.href="otp.html"

}

})

document.querySelector("#header>img").addEventListener("click",function(event){
    window.location.href="index.html"
})


