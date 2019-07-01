# VuePress

## VuePress란?
VuePress는 [VueJS](https://vuejs.org/) 공식 사이트의 문서 템플릿을 사용하여 간단하게 사이트를 마크다운 문법으로 정적 사이트를 구축할 수 있도록 무료로 제공되는 시스템 테마

> VuePress 공식 사이트 : [https://vuepress.vuejs.org](https://vuepress.vuejs.org/)

## 사용방법
VuePress를 사용하기 위해서는 정적 컨텐츠를 등록할 수 있는 호스팅이 필요하나, github를 통해 쉽게 구축할 수 있다.

> github : [https://github.com](https://github.com)
> github 계정이 필요하며, VuePress로 구축한 사이트를 배포할 Repositori가 필요

> 필요환경 구성 : NPM 설치 (NodeJS를 기반으로 Build 환경을 구성하기 위해 필요)

### VuePress 설치
프로젝트 폴더에서 아래와 같이 vuepress 설치
```js
npm init -y
npm install -D vuepress
```
package.json 파일에서 script 부분에 아래와 같이 수정
```json
{
  ...
  "scripts": {
    "doc": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  ...
}
```

### 네비게이션 구성
네비게이션은 docs 폴더 하위에 .vuepress/config.js 파일에서 설정할 수 있다.
```js
module.exports = {
    title: 'Vue.js 정복 캠프 학습 노트',
    description: '나는 오늘 무엇을 배웠는가',
    base: "/learning-note/",
    // head: [
    //   ['link', {
    //     rel: 'icon',
    //     href: '/static/logo.jpg'
    //   }]
    // ],
    themeConfig: {
      sidebar: [
        {
          title: 'Reference',
          collapsable: true,
          children: [
            '/common/fav',
            '/common/markdown',
          ]
        },
        {
          title: 'Day 1',
          collapsable: false,
          children: [
            '/day1/day1',
            '/day1/day1-task',
            '/day1/vuepress',
            '/day1/instance'
          ]
        },
        {
          title: 'Day 2',
          collapsable: false,
          children: [
            '/day2/day2',
            '/day2/day2-task',
            '/day2/components',
            '/day2/components-communication',
            '/day2/props',
            '/day2/event-emit'
          ]
        }
      ]
    }
  }
```
>[VuePress default Theme Config : https://vuepress.vuejs.org/default-theme-config/](https://vuepress.vuejs.org/default-theme-config/)


### 페이지 작성 (Markdown)
Vuepress로 문서를 작성하기 위해서는 docs 폴더 하위에 .md 확장자를 가진 마크다운 문법으로 작성한다.

### Deploy
아래 shell 명령어를 프로젝트 폴더 하위에 deploy.sh 파일로 생성
```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f <뷰 프레스를 위해 생성한 깃헙 리포지토리의 클론 주소> master:gh-pages

cd -
```
>_**Warning:** Be very careful here._  
><뷰 프레스를 위해 생성한 깃헙 리포지토리의 클론 주소>는 꼭 리포지토리의 주소로 변경

```sh
sh deploy.sh
```

>_**TIP**_
>sh라는 명령어는 윈도우 기본 명령어 프롬프트 창에서 먹지 않습니다. 따라서 [cmder](https://cmder.net/)이라는 콘솔 프로그램을 설치해서 실행하거나 git bash와 같은 별도의 콘솔창을 사용하시면 됩니다

브라우저에 https://\<USERNAME>.github.io/\<REPO> 입력 후 사이트 확인 (보통 5~10분 소요)
