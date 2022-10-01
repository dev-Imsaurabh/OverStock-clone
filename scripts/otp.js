

document.querySelector("#container>button").addEventListener("click",verify);
function verify(){
    let b1 = document.querySelector("#container>div>input:nth-child(1)").value
    let b2 = document.querySelector("#container>div>input:nth-child(2)").value
    let b3 = document.querySelector("#container>div>input:nth-child(3)").value
    let b4 = document.querySelector("#container>div>input:nth-child(4)").value

    if(b1+b2+b3+b4=="1234"){
        swal({
                title: "Payment Successful!",
                text: "You Order is placed !",
                icon: "success",
                button: "ok",
            }).then(function(go){
                if(go){
                    window.location.href="index.html"
                }
            })
            localStorage.removeItem("ocart");
    }else{

        swal({
                title: "Invalid OTP!",
                text: "Please enter correct OTP !",
                icon: "error",
                button: "Try Again",
            });

    }
}

