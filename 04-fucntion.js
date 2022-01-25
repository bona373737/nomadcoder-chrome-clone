// fucntion : 반복적으로 사용될 코드조각

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