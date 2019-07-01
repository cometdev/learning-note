# 뷰 컴포넌트

## 컴포넌트를 사용하는 이유
컴포넌트는 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능.
컴포넌트 기반으로 화면을 개발하게 되면 코드의 재사용성이 올라가고 빠르게 화면을 제작할 수 있다.

## 컴포넌트 기본 문법
```js
Vue.component('컴포넌트 이름', {
    // 컴포넌트 내용
});
```

### 컴포넌트 생성 후 표시하기
`JavaScript`
```js
Vue.component('app-header', {
    el: '#app',
    template: '<h1>Header Component</h1>'
})
```
`Html`
```html
<div id="app">
    <app-header></app-header>
</div>
```
`Result`
```html
<div id="app">
    <h1>Header Component</h1>
</div>
```
---

>컴포넌트 등록 방법 2가지
## 전역 컴포넌트
```js
// 전역 컴포넌트 등록
Vue.component('app-header', {
  template: '<h1>Header Component</h1>'
});
```

## 지역 컴포넌트
```js
var appHeader = {
  template: '<h1>Header Component</h1>'
}

new Vue({
  components: {
    'app-header': appHeader
  }
})
```