let obj = JSON.parse(localStorage.getItem("view"))||{}

document.querySelector("#image").src=obj.image
document.querySelector("#name").innerText=obj.name
document.querySelector("#price").innerText=obj.price
