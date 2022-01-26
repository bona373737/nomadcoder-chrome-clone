let age = prompt("How old are you?");
console.log(age);
//자바스크립트는 사용자에게 입력받은 모든 데이터를 String으로 인식
console.log(typeof age);

//데이터변환
age = parseInt(age);
console.log(age);
console.log(typeof age);

// const age = parseInt(prompt("How old are you?"));
// console.log(age);

// NaN 판별
console.log("age는 NaN입니다 : ",isNaN(age));

if(isNaN(age)){
    prompt("입력오류_숫자를 입력해 주세요")
} else{
    console.log("Thank you for writing your age.")
}
