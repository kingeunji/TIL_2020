# 자바스크립트 동작 원리 

자바스크립트는 기본적으로 <b>싱글스레드</b> 기반이다.  
웹 브라우져에서 돌아가는 동적인 기능을 구현하려고 만든 언어이기 때문에 콜백큐를 기반으로 한 <b>이벤트 루프</b> 기반 방식으로 돌아간다.  

### 자바스크립트 엔진 

**자바스크립트 엔진**은 자바스크립트 코드를 마이크로프로세서가 이해할 수 있는 기계어로 변환해주는 역할을 한다.  
Rhino, JavaScriptCore, SpiderMonkey,V8 등이 있다. 엔진들은 **ECMAScript(스크립트 언어에 대한 표준)** 표준을 따른다. 

자바스크립트 엔진의 대표적인 예는 Google V8 엔진이다. V8은 Chorme과 Node.js 에서 사용한다.

![...](https://user-images.githubusercontent.com/44806627/76283335-af814300-62dd-11ea-989d-b689e7066403.jpg)

엔진의 주요 구성요소는   

- **Memory Heap** : 메모리 할당이 일어나는 곳   
- **Call Stack** : 코드 실행에 따라 호출 스택이 쌓이는 곳 

### Call Stack

자바스크립트는 


### 런타임 

브라우저 내장 API들은 자바스크립트 엔진에서 제공하지 않는다. 

![...](https://user-images.githubusercontent.com/44806627/76283387-cf186b80-62dd-11ea-889f-df5339b9b1d7.jpg)

위 그림처럼, DOM, Ajax, setTimeout 과 같이 브라우저에서 제공하는 API 들을 Web API 라고 한다.   
그리고 아래에 이벤트 루프와 콜백 큐도 있다. 



> 참고자료  
 http://www.programmersought.com/article/25721021448/
 https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/
>  

