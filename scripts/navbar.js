isUserAvailable()
ifTestSignUp()

let c = JSON.parse(localStorage.getItem("ocart"))||[]
document.querySelector("#cartNum>div").innerText=c.length
let topcheckout = document.querySelector("#topcheckout");

  if(c.length==0){
    topcheckout.style.display="none"

  }
  topcheckout.addEventListener("click",function(event){
    window.location.href="cart.html"
})

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
    localStorage.setItem("testSignup","1")
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
    document.querySelector("#topcheckout>i").style.display="none";
    document.querySelector("#username").innerText=name
    document.querySelector("#myAccount>div>p:nth-child(1)").style.display="none";
    document.querySelector("#myAccount>div").style.marginTop="110px"
    document.querySelector("#accordian>div:nth-child(1)").style.display="none";
   }else{
    document.querySelector("#myAccount>div>p:nth-child(2)").style.display="none";
    document.querySelector("#myAccount>div").style.marginTop="110px"

   }
  
  }


  document.querySelectorAll(".tab").forEach(function(el){
    el.addEventListener("click",function(event){
        console.log(event.target.innerText)
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

  document.querySelector("#account").addEventListener("click", function (event) {
    window.location.href = "signup.html";
  });

  document.querySelector("#cartImage").addEventListener("click",function(event){
    window.location.href="cart.html";
  })

  document.querySelector("#myAccount").addEventListener("mouseover",function(){
    document.querySelector("#myAccount>div").style.display="block"
  })

  document.querySelector("#myAccount").addEventListener("mouseout",function(){
    document.querySelector("#myAccount>div").style.display="none"
  })

  document.querySelector("#myAccount>div>p:nth-child(2)").addEventListener("click",function(event){

    localStorage.removeItem("loggedUser");
    localStorage.removeItem("ocart")
    localStorage.removeItem("favList")
    localStorage.removeItem("testSignup")
    window.location.href="signup.html"

  })

  document.querySelector("#myAccount>div>p:nth-child(1)").addEventListener("click",function(event){

    window.location.href="signup.html"
})
document.querySelector("#accordian>div:nth-child(3)>div:nth-child(3)>div:nth-child(2)").addEventListener("click",function(){
  window.location.href="fav.html"
})

function ifTestSignUp(){
  if(localStorage.getItem("testSignup")!=null){
    document.querySelector("#accordian>div:nth-child(1)").style.display="none";
  }
}



