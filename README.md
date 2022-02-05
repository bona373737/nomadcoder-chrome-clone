# nomadcoder chromeApp "Momentum" clone
  - 기능1 : 시계
  - 기능2 : 날씨
  - 기능3 : 
  - 기능4 : todoList
![Momentum](res/momentum.png)


## 기초학습 
HTML이 파일내에 참조되어 있는 JS파일을 load하면 그때부터 Document객체 사용가능


## < Html의 요소들을 자바스크립트로 가져오는방법 >
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


## < 가져온 HTMl 요소들을 자바스크립트로 변경하는 방법>
1.가져온 Html 요소들에 event Listener 추가하기
해당 html요소들에서 발생하는 event(클릭,키보드 등의 사용자 행동)를 감지하여
event에 호출할 함수를 명시해두고, 클릭했을때 특정 동작이 이루어지도록 설정할 수 있다.
MDN doc참고 : 
  - removeEventListener  : event 삭제 

## <가져온 HTML 요소들을 CSS로 변경하는 방법>
가져온 html요소들의 style을 자바스크립트로 변경가능하지만   
스타일관련 사항은 css파일에서 통합관리하는 것이 효율적이다.   
  - classList 
  - classList.toggle



## window 


## 브라우저의 기본동작 제어 
브라우저의 기본동작이란 브라우저가 특정function에 대해 기본적으로 수행하는 동작을 의미한다.
이 기본동작을 막기위해 개발자가 별도로 제어하는 작업이 필요한 경우가 있다.

  - 브라우저는 Form이 submit되면 화면을 자동으로 새로고침한다.   
    사용자가 입력한 내용이 화면에 남아있도록 새로고침 되지 않도록 제어.


## 태그의 기본동작
  - Form태그의 기본동작은 submit
  - a태그의 기본동작은 link

