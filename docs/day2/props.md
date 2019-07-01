# Props 속성

VueJs에서는 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해 props 속성을 사용한다.

## props 속성 코드 형식
```js
// 하위 컴포넌트의 내용
var childComponent = {
    props: ['프롭스 속성 명']
}
```

```html
<!-- 상위 컴포넌트의 템플릿 -->
<div id="app">
    <child-component v-bind:프롭스 속성 명 ="상위 컴포넌트의 data 속성"></child-component>
</div>
```

## props 속성 코드 예시
```js
// 하위 컴포넌트 : childComponent
var childComponent = {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
}

// 상위 컴포넌트 : root 컴포넌트
new Vue({
  el: '#app',
  components: {
    'child-component': childComponent
  },
  data: {
    message: 'hello vue.js'
  }
})
```

```html
<div id="app">
  <child-component v-bind:propsdata="message"></child-component>
  <!-- 위의 출력 결과는 hello vue.js -->
</div>
```
