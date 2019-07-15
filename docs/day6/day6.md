# Day 6 수업 내용

- 웹 애플리케이션(싱글 페이지 애플리케이션) 제작
  - CLI를 이용하 프로젝트 생성
  - 뷰 라우터
  - API 함수 구조화
- 웹팩
  - 웹팩이란?
  - 사용하는 이유?
  - 주요 4개 속성 (Entry, Output, Loader, Plugin)

---

ex) [https://news.ycombinator.com](https://news.ycombinator.com) 만들기

- API : [https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

vue create vue-news
default 선택하여 설치
cd vue-news
npm run serve

---

[리액트 공식 라이브러리 라인업]

- 리액트 코어 라이브러리(화면 렌더링)
- 리액트 CLI

[리액트 커뮤니티 라이브러리]

- 리덕스 (상태 관리)
- Mobx (상태 관리)
- 리액트 라우터
- 리액트 개발자 도구
- 엄청 많음...

[뷰 공식 라이브러리 라인업]

- 뷰 코어 라이브러리(화면 렌더링)
- 뷰 CLI 라이브러리
- 뷰 라우터
- 뷰 상태 관리(Vuex)
- 뷰 개발자 도구

---

npm i vue-router

---

[예전]
vue init vue-news
cd vue-news
npm i

[지금]
vue create vue-news

---

axios 사용 시 api/index.js에 공통으로 만들어 사용

webpack

1. npm i -y
2. npm i webpack webpack-cli -D
3. index.html 생성 후 내용 복사
4. src/index.js 생성 후 내용 복사
5. lodash 라이브러리 설치

- npm i lodash
