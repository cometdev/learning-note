# Day 9 수업 내용

Vuex  
차트 라이브러리 모듈화  
SPA 제작

---

```cmd
vue create why-vuex
```

Why vuex?

```html
<template>
  <div>
    <!-- AppHeader 컴포넌트 영역 -->
    <header>
      <strong>Vhy Vuex</strong>
      <span>id 여기에...</span>
    </header>
    <!-- AppContent -> UserForm 컴포넌트 영역 -->
    <div>
      id:
      <input type="text" />
    </div>
    <div>
      pw:
      <input type="text" />
    </div>
    <button>login</button>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
```

Vuex 설치

```cmd
npm i vuex
```

참고 : storybook - Vue 설계? 참고해 볼 것

vuex actions

---

외부 라이브러리 (플러그인) wrapping 하는 방법
Chart.js
