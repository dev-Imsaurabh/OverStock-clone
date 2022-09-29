isUserAvailable()
let ptoggle = 0;
let users = JSON.parse(localStorage.getItem("users")) || [];

document.querySelector("#homepage").addEventListener("click", function (event) {
  window.location.href = "index.html";
});

document.querySelector("#ca").addEventListener("click", createAccount);

function createAccount(event) {
  let obj = {
    email: document.querySelector("#email").value,
    pass: document.querySelector("#pass").value,
    cpass: document.querySelector("#cpass").value,
  };

  if (checkValdation(obj.email, obj.pass, obj.cpass)) {
    console.log("validation successful");

    console.log(users);

    if (users.length == 0) {
      // console.log("is empty");

      let cobj = {
        email: obj.email,
        pass: obj.pass,
      };
      users.push(cobj);
      localStorage.setItem("users", JSON.stringify(users));
      loginUser(cobj.email, cobj.pass);

    } else {
      let checkme =0
      // console.log("else block")
      users.forEach((el) => {
        // console.log("okay")
        if (el.email == obj.email) {
          checkme=1
          if (el.pass == obj.pass) {
            loginUser(obj.email, obj.pass);
            
          }else{
            showError("Account Already exist Try sign in")
            
          }
        }
      });

      if(checkme==0){
        let cobj = {
          email: obj.email,
          pass: obj.pass,
        };
        users.push(cobj);
        localStorage.setItem("users", JSON.stringify(users));
        checkme=0
        loginUser(cobj.email, cobj.pass);
      }
    }
  }
}

document.querySelector("#email").addEventListener("input", checkEmail);

function checkEmail(event) {
  let ec =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (ec.test(this.value)) {
    this.style.border = "2px solid green";
    ptoggle = 1;
    console.log(ptoggle);
  } else {
    this.style.border = "2px solid red";
    showError("Invalid email format");
    ptoggle = 0;
    console.log(ptoggle);
  }
}

document.querySelector("#pass").addEventListener("input", checkP);
function checkP(event) {
  let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (re.test(this.value)) {
    this.style.border = "2px solid green";
    ptoggle = 1;
    console.log(ptoggle);
  } else {
    this.style.border = "2px solid red";
    showError(
      "Password should be in like Captital letters, small letters, special charcters, numbers"
    );
    ptoggle = 0;
    console.log(ptoggle);
  }
}

function checkValdation(e, p, cp) {
  if (e == "" || p == "" || cp == "") {
    showError("Invalid details");
  } else if (p != cp) {
    showError("The passwords you have entered do not match. Please try again.");
  } else if (p.length < 8) {
    showError(
      "Password must be of 8 characters including special character,numbers,alphabets"
    );
  } else if (ptoggle == 0) {
    showError(
      "Password should be in like Captital letters, small letters, special charcters, numbers"
    );
  } else {
    console.log(ptoggle);
    return true;
  }
}

function showError(error) {
  let box = document.querySelector("#alertBox");
  box.style.visibility = "visible";
  box.innerText = error;

  setTimeout(function () {
    box.style.visibility = "hidden";
    box.innerText = "";
  }, 2000);
}

function loginUser(e, p) {
  let uobj ={

    email:e,
    pass:p

  }
  localStorage.setItem("loggedUser",JSON.stringify(uobj));
  window.location.href="index.html"
}



///Sign in login

document.querySelector("#si").addEventListener("click",login);

function login(event){
  let obj={
    email:document.querySelector("#uemail").value,
    pass:document.querySelector("#upass").value
  }

  if(checkValdationSigIn(obj.email,obj.pass)){
    let check =0
    users.forEach(function(el){
      if(el.email==obj.email){
        check++
        if(el.pass==obj.pass){
          check++
        }
      
      }
     })
   
   
     if(check==0){
      showError("Account does not exist")
      check=0
     }else if(check==1){
       showError("Email and/or password incorrect. Please try again or reset your password.")
       check=0
     }else{
      check=0
      loginUser(obj.email,obj.pass)
      

     }
   

  }

  


}

function checkValdationSigIn(e,p){
  if(e==""||p==""){
    showError("Email and/or password incorrect. Please try again or reset your password.")

  }else{
    return true
  }
}


function isUserAvailable(){
  let obj = JSON.parse(localStorage.getItem("loggedUser"))||{}
  let count =0
 for(let x in obj){
  count++
 }

 if(count>0){
  window.location.href="index.html"
 }

}


