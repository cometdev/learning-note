# Day 5 수업 내용

- 컴포넌트 재활용 방법 - Slots
  vue create slots
  [할일]
- 경로 : 2번 폴더 -> slot -> exercise 프로젝트
  2_todo >slot >exercise
- 내용 : props 속성 대신에 slots으로 동일한 화면 구현

prettier
[prettier 옵션](https://prettier.io/docs/en/options.html)

VSCode 설정 세팅 : Ctrl + , > Search Settings에 prettier 검색하여 옵션 설정

VSCode 설정 세팅 : Ctrl + Shift + P > Preferences: Open Default Settings (JSON) 선택  
[https://codesandbox.io/live/kjlpJ](https://codesandbox.io/live/kjlpJ)  
참고하여 맨 뒤에 추가

- ES6

let 은 한번 선언한 변수를 재선언할 수 없다 (하단 오류 발생)
for 문 등 {}안에서 let을 사용할 경우 해당 scope(유효범위)에서만 유효하다

```js
Uncaught SyntaxError: Identifier 'b' has already been declared
    at <anonymous>:1:1
```

const 는 한번 선언한 변수의 값을 변경할 수 없다 (하단 오류 발생)

```js
Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
```

2_todo > es6 > const-let 실습

화살표 함수

- 웹 애플리케이션 제작

[babel](https://babeljs.io/) es6 문법을 어떻게 변환시키는지 확인 가능 (Browser polyfill)
