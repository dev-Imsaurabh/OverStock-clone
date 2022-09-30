let cart = JSON.parse(localStorage.getItem("ocart"))||[]
let quan=1;
let obj = JSON.parse(localStorage.getItem("view"))||{}

document.querySelector("#image").src=obj.image
document.querySelector("#name").innerText=obj.name
document.querySelector("#price").innerText=obj.strikeOff

document.querySelector("#quan").addEventListener("change",setQuan);

function setQuan(event){
    quan = document.querySelector("#quan").value;
    
}

document.querySelector("#cartBtn").addEventListener("click",AddToCart);

function AddToCart(event){

    if(event.target.innerText=="Go to cart"){
        window.location.href="cart.html";
    }else{
        event.target.innerText="Go to cart";
        obj.quan = quan
        cart.push(obj)
        localStorage.setItem("ocart",JSON.stringify(cart))
    }
}

cart.forEach(el => {

    if(el.name==obj.name){
        document.querySelector("#cartBtn").innerText="Go to cart"
    }
    
});