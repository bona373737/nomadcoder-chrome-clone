# nomadcoder-clone-coding
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
removeEventListener를 사용해 event를 삭제 할수도 있음

*가져온 html요소들의 style도 자바스크립트로 변경가능하지만   
스타일관련 사항은 css파일에서 관리하는 것이 작업이 효과적이다. 


## window 


---
## clone코딩작업
1. Login
2. Clock
3. Quote and Background
4. Todo List
5. Weather