# event emit

이벤트 발생(event emit)은 props 속성과 반대로 하위 컴포넌트에서 상위 컴포넌트로 통신하는 방식  
>Tip : 컴포넌트 간 데이터/상태 전달
>상위 컴포넌트 -> 하위 컴포넌트 : props
>하위 커모넌트 -> 상위 컴포넌트 : event emit

## 이벤트 발생 코드 형식
```js
// 하위 컴포넌트의 내용
this.$emit('이벤트 명');
```

```html
<!-- 상위 컴포넌트의 템플릿 -->
<div id="app">
  <child-component v-on:이벤트 명="상위 컴포넌트의 실행할 메서드 명 또는 연산"></child-component>
</div>
```

## 이벤트 코드 예시
```js
// 하위 컴포넌트 : childComponent
var childComponent = {
  methods: {
    sendEvent: function() {
      this.$emit('update');
    }
  }
}

// 상위 컴포넌트 : root 컴포넌트
new Vue({
  el: '#app',
  components: {
    'child-component': childComponent
  },
  methods: {
    showAlert: function() {
      alert('event received');
    }
  }
})
```

```html
<div id="app">
  <child-component v-on:update="showAlert"></child-component>
</div>
```