# axios

- 뷰에서 권고하는 HTTP 통신 라이브러리
- Promise 기반의 HTTP 통신 라이브러리
- 문서화가 잘 되어 있음

## axios 설치

### CDN 방식
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
  
NPM 방식
```sh
npm install axios
```

## axios 사용 방법
```js
new Vue({
  el: '#app',
  methods: {
    fetchData: function() {
      axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})
```
  
>[https://github.com/axios/axios](https://github.com/axios/axios)