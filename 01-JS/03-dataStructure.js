// 데이터구조 = 데이터를 정리하는 방법

const mon ='mon';
const tue ='tue';
const wed ='wed';
const thu ='thu';
const fri ='fry';
const sun ='sun';

// array 
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);
console.log(daysOfWeek[3]);

// array에 값 추가하기 
daysOfWeek.push("sun");
console.log(daysOfWeek);

// object
const playerName = "bona";
const playerPoints = 121212;
const playerFat = "little bit";
const playerAge = 30;
// 위아래 방법으로는 player에 대한 공통정보를 한번에 정리하기에 적합하지 않음
const player1 = ["bona", 121212, "little bit", 30]

const player2 ={
    name : "bona",
    points : 121212,
    Fat : false,
    age : 30
};
console.log(player2);
console.log(player2.name);
console.log(player2.age);

/* 
상수 constant 그 자체를 수정하는 것은 불가하지만 
const가 object인경우 안의 값을 변경,추가,삭제 하는 것은 가능하다.
*/
player2.fat = true;
console.log(player2.fat);
// object에 값 추가
player2.lastName = "gu";
console.log(player2);

