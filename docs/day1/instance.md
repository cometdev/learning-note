# 뷰인스턴스

## 인스턴스
속성과 API가 미리 정의되어 있는 객체

## 생성자 함수 (인스턴스 생성)
```js
var vm = new Vue();
```

>인스턴스 안에 속성과 API 확인하기
>```js
>var vm = new Vue();
>console.log(vm);
>```
> 
>![Vue instance 속성, API 확인](/instance_01.png)

## 인스턴스를 사용하는 이유
인스턴스 안에는 Vue로 화면 개발을 하기위한 속성과 메서드가 미리 정의되어 있어 빠르게 화면을 개발해 나갈 수 있다.

## 인스턴스 속성/API

```js
new Vue({
    el: '',
    template: '',
    data: '',
    methods: '',
    created: '',
    watch: '',
    ...
})
```
- el : 인스턴스가 그려지는 화면의 시작점 (특정 HTML 태그 - jQuery Selector 방식과 동일)
- template: 화면에 표시할 HTML 형식의 요소 (HTML, CSS 등)
- data : 뷰의 반응성(Reactivity)가 반영된 데이터 속성
- methods: 하면의 동작과 이벤트 로직을 제어하는 메서드
- created : 뷰의 라이프 사이클과 관련된 속성들 (이벤트)
- watch: data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성

