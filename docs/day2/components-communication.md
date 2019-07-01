# 뷰 컴포넌트 통신 방법

## 뷰에서의 컴포넌트 통신 방법
뷰 컴포넌트는 각각 고유한 데이터의 유효 범위를 갖기 때문에 컴포넌트 간 데이터를 주고 받기 위해서는 아래 그림과 같은 규칙을 따라야 한다.  
![뷰 데이터 흐흠](/components-communication.png)
- 상위에서 하위로는 데이터를 내려줌, props 속성
- 하위에서 상위로는 이벤트를 올려줌, 이벤트 발생  

## 컴포넌트 통시 규칙이 있는 이유?
기존 MVC 패턴에서 데이터 변경에 따라 화면 변경을 처리해줬던 방식이 규모가 커지고 복잡해 짐에 따라 사용하는 데이터와 뷰가 많아지고 이러한 상황에서 데이터와 화면의 변경이 복잡해져 데이터의 변경에 따라 화면변경이 어떻게 이루어지는지 파악하기가 복잡해지고, 화면 변경이 일어나지 않는 오류 등이 빈번하게 발생하는 문제점이 있다.

![이미지](https://t1.daumcdn.net/cfile/tistory/999442465BA51F4D22)

>[Flux, MVC 비교 (MVC 문제점)](https://beomy.tistory.com/44)  
>[Hacker Way: Rethinking Web App Development at Facebook](https://www.youtube.com/watch?v=nYkdrAPrdcw)