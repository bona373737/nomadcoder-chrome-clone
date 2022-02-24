// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//위의 코드를 좀더 짧게 작성(HTML element 가져오기)
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
// console.dir(loginInput);
// console.log(loginInput.value);

// const userName = loginInput.value;
// if(userName === ""){
//     alert("Please write your name");
// }else if(userName.length > 15)
// alert("Your name is too long")

//위의 사용자입력값 유효성검사들 중에 브라우저 자체기능을 사용하여 작업 
//     // input tag에 속성값 required, maxlength
// };

//브라우저 기본동작으로 submit되고 있으므로 click을 감지할 필요없음
// loginButton.addEventListener("click", onLoginBtnClick);


//-------------------------------------------------------------------------
//form의 기본동작인 submit이후의 "새로고침" 기능을 막아보자.

// const loginForm = document.querySelector("#login-form");
// function onLoginSubmit(event) {
//     event.preventDefault();
//     const userName = loginInput.value;
//     console.log(userName);
// };
// loginForm.addEventListener("submit", onLoginSubmit);

//-->submit이 감지되었을때 브라우저는 onLoginSubmit()함수를 실행시키고 
//onLoginSubmit함수가 실행되는 내부 실제 코드는 아래와 같다.
// function onLoginSubmit(event){
//     event.preventDefault();
//     const userName = loginInput.value;
//     console.log(userName);
// }
//자동으로 함수실행에 필요한 event정보를 담은객체가 함수argument로 제공된다.


//------------------------------------------------------------------------
//submit이 완료된 후 입력form을 숨기고 환영문구를 띄워보자.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const gretting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    loginForm.classList.add("hidden");
    console.log(userName);
    // gretting.innerHTML = "Hello " + userName;
    gretting.innerHTML = `Hello ${userName}`;
    gretting.classList.remove(HIDDEN_CLASSNAME);
};
loginForm.addEventListener("submit", onLoginSubmit);


//------------------------------------------------------------------------
//LocalStorage에 userName 저장하기 