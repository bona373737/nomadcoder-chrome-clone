// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     if(h1.style.color ==="blue"){
//         h1.style.color = "tomato";
//     }else{
//         h1.style.color = "blue";
//     }
// }
// h1.addEventListener("click",handleTitleClick);


// const h1 = document.querySelector("div.hello:first-child h1")
// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor ==="blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }
// h1.addEventListener("click",handleTitleClick);


//***CSS파일 내에 지정한.active클래스를 h1에게 전달
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     h1.className ="active";
// };
// h1.addEventListener("click",handleTitleClick);


//****html문서의 className을 클릭할때마다 변경되도록 하는 동작
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {
//     const clickedClass = "clicked"
//     if (h1.className === clickedClass) {
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// };
// h1.addEventListener("click", handleTitleClick);



//***className을 변경하게 하는 동작을 적용할때, 이미 다른 className지정되어 있는 태그인경우
//***기존의 className을 변경하지 않고, CSS적용르 위한 별도의 className을 추가하는 방법:classList
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {
//     const clickClass = "cssClass";
//     if (h1.classList.contains(clickClass)) {
//         h1.classList.remove(clickClass);
//     } else {
//         h1.classList.add(clickClass);
//     }
// };
// h1.addEventListener("click", handleTitleClick);



//***위의 코드를 구현하는 function사용
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    h1.classList.toggle("cssClass");
};
h1.addEventListener("click", handleTitleClick); 