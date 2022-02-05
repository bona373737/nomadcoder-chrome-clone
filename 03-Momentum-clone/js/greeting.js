// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//위의 코드를 좀더 짧게 작성(HTML element 가져오기)
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    // console.dir(loginInput);
    console.log(loginInput.value);
    
    // const userName = loginInput.value;
    // if(userName === ""){
    //     alert("Please write your name");
    // }else if(userName.length > 15)
    // alert("Your name is too long")

    //위의 사용자입력값 유효성검사들 중에 브라우저 자체기능을 사용하여 작업 
    // input tag에 속성값 required, maxlength
}

loginButton.addEventListener("click", onLoginBtnClick);