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

추가적으로 `Event Loop` 가 존재하여 Task Queue에 들어가는 task들을 관리한다.

### 호출 스택 Call Stack

자바스크립트는 단 **하나의 호출 스택(Call Stack)** 을 사용한다.  
이러한 특징 때문에 자바스크립트의 함수가 실행되는 방식을 "Run to Completion" 라고 한다.  
이는 하나의 함수가 실행되면 실행이 끝날 때까지 다른 어떤 task도 수행될 수 없다는 의미다.  
요청이 들어올 때마다 해당 요청을 순차적으로 호출 스택에 담아 처리한다. 

메소드가 실행될 때, Call Stack에 새로운 프레임이 생기고 push 되고, 실행이 끝나면 pop 되는 원리다!

```
function multiply(x, y) {
    return x * y;
}
function printSquare(x) {
    var s = multiply(x, x);
    console.log(s);
}
printSquare(5);
```

![](https://user-images.githubusercontent.com/44806627/76292965-8bc8f780-62f3-11ea-9876-b5c97180b5ad.png)

콜 스택의 각 단계를 스택 프레임(Stack Frame) 이라고 한다.

예외가 발생했을 때 콘솔 로그 상에서 나타나는 스택 트레이스(Stack Trace)가 오류가 발생하기까지의 스택 트레이스들로 구성된다. 

### Task Queue (Event Queue) 

자바스크립트의 런타임 환경에서는 처리해야 하는 Task들을 임시 저장하는 대기 큐가 존재한다. 
Call Stack이 비어졌을 때 대기열에 들어온 순서대로 수행한다. 

```
setTimeOut(function() {
    console.log("first");
}, 0)
console.log("second");

>>> 실행결과 second first
```
비동기로 호출되는 함수들은 Call Stack에 쌓이지 않고 Task Queue에 enqueue 된다.  
또 자바스크립트에서는 이벤트에 의해 실행되는 함수들, Web API 영역에 정의되어 있는 함수들은 비동기로 실행된다. 

### 런타임 

브라우저 내장 API들은 자바스크립트 엔진에서 제공하지 않는다. 

![...](https://user-images.githubusercontent.com/44806627/76283387-cf186b80-62dd-11ea-889f-df5339b9b1d7.jpg)

위 그림처럼, DOM, Ajax, setTimeout 과 같이 브라우저에서 제공하는 API 들을 Web API 라고 한다.   
그리고 아래에 이벤트 루프와 콜백 큐도 있다. 


> 참고자료  
 http://www.programmersought.com/article/25721021448/
 https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/
>  

