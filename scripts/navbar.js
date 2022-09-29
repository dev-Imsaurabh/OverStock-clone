isUserAvailable()

document.querySelector("#toggle").addEventListener("click",slideTop);
document.querySelector("#close").addEventListener("click",hideSlideLayout);
// let body = document.querySelector("body");


let toggle =0
function slideTop(event){

    // console.log("invoked")
    let slideLayout = document.querySelector("#accordian>div:nth-child(1)");

    let tbtn = document.querySelector("#toggle");

    if(toggle==0){
        slideLayout.style.maxHeight="120px";
        slideLayout.style.transition="max-Height 0.2s";
        toggle=1
        tbtn.style.transform="rotate(180deg)"
        tbtn.style.transition="transform 0.2s"

    }else{

        slideLayout.style.maxHeight="35px";
        slideLayout.style.transition="max-Height 0.2s";
        toggle=0
        tbtn.style.transform="rotate(0deg)"
        tbtn.style.transition="transform 0.2s"
    }

}

function hideSlideLayout(event){
    let slideLayout = document.querySelector("#accordian>div:nth-child(1)");
    slideLayout.style.display="none";
}

let allTabs = document.querySelectorAll("#tabs");
let hideMenu =document.querySelectorAll("#tabs");
hideMenu.forEach(function(el){
    el.addEventListener("mouseout",function(event){
        hideTheMenu(event)
    })
})

allTabs.forEach(function(el){
    el.addEventListener("mouseover",function(event){
        showDropDown(event)
    })

    
})


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


  document.querySelectorAll(".tab").forEach(function(el){
    el.addEventListener("click",function(event){
        switch(event.target.innerText){
            case "Furniture":
                window.location.href="fur.html"
            break
            case "Rugs":
                window.location.href="rugs.html"
                break

        }
    })
  })

  document.querySelector("#homepage").addEventListener("click", function (event) {
    window.location.href = "index.html";
  });



