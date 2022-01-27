// fucntion : 코드를 캡슐화 해서 계속 반복적으로 사용하도록 만드는것 

console.log("Hello bona");
console.log("Hello nana");
console.log("Hello gugu");
console.log("Hello baba");
console.log("Hello ruru");

function sayHello1(){
    console.log("Hello");
}
sayHello1();
sayHello1();
sayHello1();
sayHello1();

//fucntion에 데이터(arguments) 보내기
/*
fucntion에서 데이터받을수 있는 변수를 만들어 두지 않으면 
보내진 데이터는 소실된다.
*/
sayHello1("bona");
sayHello1("nana");
sayHello1("ruru");

//fucntion에서 데이터(arguments) 받기 
/*
nameofPerson은 해당 fucntion 안에서만 존재한다.
*/
function sayHello2(nameOfPerson){
    console.log("Hello",nameOfPerson);
}
sayHello2("bona");
sayHello2("nana");
sayHello2("ruru");


function plus(a,b){
    console.log(a+b);
}
plus(8,60);

function divide(a,b){
    console.log(a/b);
}
divide(98,20);


// 객체 안에 함수넣기
const player = {
    name : "bona",
    sayHello3 : function(){
        console.log("hello!")
    }
}
player.sayHello3();

// 계산기 객체 만들기
const calculator = {
    plus : function(a,b){
        console.log(a+b);
    },
    divide : function(a,b){
        console.log(a-b)
    }
}
calculator.plus(2,3);
calculator.divide(5,10);

//외국나이 -> 한국나이 변환계산기(결과값 반환)
const age = 96;
function calculatorKrAge(ageOfForeinger){
    //함수의 결과를 함수 외부코드와 교류하는 방법 :"return"
    return ageOfForeinger + 2;
}
const krAge = calculatorKrAge(age);
console.log(krAge);



