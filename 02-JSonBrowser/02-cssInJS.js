const h1 = document.getElementById("title");

// function handleTitleClick(){
//     if(h1.style.color ==="blue"){
//         h1.style.color = "tomato";
//     }else{
//         h1.style.color = "blue";
//     }
// }

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


// function handleTitleClick(){
//     if(h1.className === "clicked"){
//         h1.className = "";
//     }else {
//         h1.className ="clicked";
//     }
// }


//css in jS 효율적인 코드작성법1
const clickedClass = "clicked";
function handleTitleClick(){
    if(h1.className === clickedClass){
        h1.className = "";
    }else {
        h1.className =clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);