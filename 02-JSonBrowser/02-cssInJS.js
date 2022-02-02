const h1 = document.querySelector("div.hello:first-child h1")

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


//classList 사용-------------------------------------------------------------------
function handleTitleClick1() {
    const clickClass = "clicked";
    if(h1.classList.contains(clickClass)){
        h1.classList.remove(clickClass);
    }else {
        h1.classList.add(clickClass);
    }
}

h1.addEventListener("click",handleTitleClick1);