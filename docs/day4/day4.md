# Day 4 수업 내용

- VS Keymapping : keymaps VSCode에서 타 IDE 단축키를 사용할 수 있게 설정할 수 있음. File > Prefarence > Shortcut
- NPM
npm init
npm init -y
npm install jqeury
npm install vue react
npm i raect
npm uninstall raect

npm run serve
npm install
npm install webpack-cli -global : global 설치 ( C:\Users\82106\AppData\Roaming\npm\하위에 설치 됨)

1. NPM(Node package manager) 이란?
전세계 자바스크립트 라이브러리가 있는 공간

2. NPM 설정 파일 생성하는 방법
npm init

3. NPM으로 라이브러리를 다운로드 하는 방법
npm install '라이브러리 이름'

4. NPM으로 라이브러리를 시스템 레벨(콘솔 창에 명령어를 인식)에 설치하는 방법
npm install '라이브러리 이름' -global

5. NPM에 커스텀 명령어 추가하는 방법
package.json
```json
"scripts": {
    "커스텀 명령어 이름": "실행할 명령어"
}
```

- 싱글 파일 컴포넌트
template, script, style이 한 파일(.vue)에 작성되는 방식

- Todo Application 제작
vue create todo-app
(default 설정)

싱글 컴포넌트 기본 코드 생성 단축키
scf

컴포넌트 import 단축키
vim


lifecycle

beforecreate 단계에서는 reactivity가 적용되기 전으로 데이터 통신을 한 후 데이터 바인딩이 보장되지 않기 때문에 create 또는 beforemount 단계에서 데이터 연동을 한다.

v-for 디렉티브를 사용할 때 vue에서는 v-key를 선언해야 에디터에서 오류 라인이 없어진다.