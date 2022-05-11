const container = document.querySelector(".container");
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");


    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=> {
            pwFields.forEach(pwFields => {
                if(pwFields.type === "password"){
                    pwFields.type = "text";
                } else{
                    pwFields.type = "password";
                }
            })
        } )
    })
