/* 
HTML이 파일내에 참조되어 있는 JS파일을 load하면 Document객체를 사용가능..


< Html의 요소들을 자바스크립트로 가져오는방법 >
1.
(리턴타입 : array )
document.getElementsByID
  document.getElementsByClassName
  document.getElementsByTagName
  document.getElementsBy

2. CSS셀렉터사용하여 가져오기
(리턴타입: element)
- document.querySelector
- document.querySelectorAll


< 가져온 HTMl 요소들을 자바스크립트로 변경하는 방법>
1.가져온 Html 요소들에 event Listener 추가하기
해당 html요소들에서 발생하는 event(클릭,키보드 등의 사용자 행동)를 감지하여
event에 호출할 함수를 명시해두고, 클릭했을때 특정 동작이 이루어지도록 설정할 수 있다.
MDN doc참고 : 
removeEventListener를 사용해 event를 삭제 할수도 있음

2.window

*/

const h1 = document.getElementById("title");

function handleTitleClick(){
  //js로도 스타일 변경이 가능하지만,, 스타일관련은 CSS를 통해서 변경시키는 것이 적합하다.
  h1.style.color = "blue";
}

function handleMouseEnter(){
  h1.innerText="Mouse is here!"
  console.log("mouse is here!");
}

function handleMouseLeave(){
  h1.innerText = "Mouse is gone!"
  console.log("mouse leave");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

//해당 html element에서 사용가능 한 기능 조회 
console.dir(h1);



//-----------------------------------------------------------------
//window
function handleWindowResize(){
  document.body.style.backgroundColor ="tomato";
}

function handleWindowCopy(){
  alert("copier!")
}

function handleWindowOffline(){
  alert("SOS on WIFI")
}
function handleWindowonline(){
  alert("all good!");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("offline",handleWindowonline);