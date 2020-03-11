# 자바스크립트 비동기에 대해 알아보자 

### 1. 동기와 비동기 

동기적 처리(Synchronous) 란 코드가 순차적으로 실행되는 방식이다
```
console.log(1);
console.log(2);
console.log(3);

>>> 실행결과 : 1 2 3
```

비동기적 처리(Asynchronous)는 특정 코드의 연산이 끝날 때까지 실행을 멈추지 않고 다음 코드를 먼저 실행하는 방식이다
```
setTimeout(function(){
    console.log(1)
}, 0)
console.log(2)

>>> 실행결과 : 2 1
```

```
function getData() {
    var data;
    $.get('http://api.com/users', function(res) {
        data = res.data
    });
    return data;
}

console.log(getData()) 

>>> 실행결과 : undefinded
```

위 코드와 같이 ajax로 데이터를 요청하고 받아올 때까지 기다려주지 않고 다음 코드를 먼저 실행하는 것이 비동기 처리이다. 

### 2. 콜백 함수 

비동기 처리를 순차적으로 동작을 처리하려면 어떻게 해야할까?  
초기 자바스크립트는 **콜백 함수** 라는 방법을 사용했다. 

```
function getData(callbackFunc) {
    $.get('http://api.com/users', function(res) {
        callbackFunc(res)
    });
}

getData(function(data) {
    console.log(data);
    // $.get()의 return 값이 data로 전달됨
})
```
위처럼 콜백함수를 사용하면 특정 로직이 끝났을 때 원하는 동작을 실행할 수 있다. 
비동기 함수가 return 하는 값이 있으면 콜백함수의 파라미터로 전달된다. 

### 3. 콜백 지옥 

콜백함수는 비동기적 작업이 많아 질수록 콜백이 깊어진다.  
또한 콜백 내에서 if문 분기와 에러 핸들링을 어렵게한다. 
```
function asyncFunc1(callback) {
    setTimeout(function() {
        console.log(1);
        callback()
    }, 100)
}

function asyncFunc2(callback) {
    setTimeout(function() {
        console.log(2);
        callback()
    }, 100)
}

function asyncFunc3(callback) {
    setTimeout(function() {
        console.log(3);
        callback()
    }, 100)
}

function asyncFunc4(callback) {
    setTimeout(function() {
        console.log(4);
        callback()
    }, 100)
}

asyncFunc1(function(result) {
    asyncFunc2(function(result) {
        asyncFunc3(function(result) {
            asyncFunc4()
        })
    })
})
```

### 4. Promise 

콜백 지옥을 해결하기 위해 `Promise` 패턴이 나왔다   
자바스크립트에서 Promise는 **비동기적으로 실행하는 작업의 결과(성공/실패)를 나타내는 객체**이다.  
Promise는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다. 

기존 콜백 함수로 사용하던 구조에 프로미스를 적용해보자.

```
function getData(callback) {
    return new Promise(function(resolve, reject) {
        $.get('http://api.com/users', function(res) {
            resolve(res);
        });
    });
}

getData().then(function(data) {
    console.log(data);
})
```
`new Promise`, `resolve`, `reject`, `then()` 등 처음보는 개념들이 나온다.  
하나씩 알아가보자


#### Promise 생성자
생성자 함수와 동일하게 new 로 Promise 객체를 만들 수 있다.  
이 때 인자로는 Executor 가 들어가는 데 `Executor`는 `resolve`와 `reject` 라는 두 개의 함수를 매개변수로 받는 실행함수이다.  
작업이 성공적으로 이행되었으면 `resolve` 함수를 호출하고, 오류가 발생한 경우 `reject` 함수를 호출한다.  

#### Promise 의 상태 (state)
`new Promise()` 로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖는다. 

- Pending (대기) : 비동기 처리가 아직 완료되지 않은 상태
- Fulfilled (이행) : 비동기 처리가 완료되어 프로미스 결과 값을 반환해준 상태  
이행 상퇴가 되면 `then()` 을 이용하여 처리 결과 값을 받을 수 있다.
- Rejected (실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 `catch()`로 받을 수 있다.

![promises](https://user-images.githubusercontent.com/44806627/76385430-f38b4b00-63a4-11ea-8664-717d094a43a4.png)

#### then() Method 
then 메소드는 promise 객체를 리턴하고, 두 개의 콜백 함수를 인수로 받는다.  
사용 형태는 다음과 같다.
```
promise.then(successCallback, failureCallback)

promise.then(function (value) {
  //성공했을 때 실행
}, function (reason) {
  //실패했을 때 실행
});
```

#### Promise Chaining
then() 메소드 호출 후 프로미스 객체를 반환할 수 있어 여러 개의 프로미스를 연결해서 사용할 수 있다. 

#### Promise의 문제점 
- 프로미스를 사용한 예외 처리시 `try/catch` 대신에 `catch()` 메소드를 사용하여 예외 처리를 해야한다.   
동기 코드와 비동기 코드가 섞여 있을 때 예외 처리가 누락된다.  


### 5. async await

Promise 의 불편한 점을 해결하기 위해 ES7 부터 `async/await` 키워드가 추가되었다.  
이 키워드를 사용하면 비동기 코드를 마치 동기 코드처럼 보이게 작성할 수 있다. 

#### async await 기본 문법 
```
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```
여기서 주의할 점은 비동기 메소드가 프로미스 객체를 반환해야 await가 의도한 대로 동작한다. 

```
// Promise로 작성한 코드 
function fetchAuthorName(postId) {
    return fetch('/posts/${postId}')
        .then(response => response.json())
        .then(post => post.userId)
        .then(userId => {
            return fetch('/users/${userId}')
                    .then(response => response.json())
                    .then(user => user.name); 
        });
}

// async await 키워드를 사용한 코드
async function asyncFetchAuthorName(postId) {
    const postResponse = await fetch('/posts/${postId}');
    const post = await postResponse.json();
    const userId = post.userId;
    const userResponse = await fetch('users/${userId}');
    const user = await userResponse.json();
    return user.name;
}

fetchAuthorName(1).then(name => console.log("name : ", name));
```

두 코드의 다른 점은 function 앞에 `async`라는 예약어를 붙이고, Promise 객체를 리턴하는 비동기 처리를 하는 함수 앞에 `await`를 붙인다. 

#### async & await 예외 처리 
동기/비동기 구분없이 `try/catch`로 일관되게 예외 처리를 할 수 있는 부분도 큰 이점이다. 
```
async function asyncFetchAuthorName(postId) {
    const postResponse = await fetch('/posts/${postId}');
    const post = await postResponse.json();
    const userId = post.userId;
    try {
        const userResponse = await fetch('users/${userId}');
        const user = await userResponse.json();
        return user.name;
    } catch(err) {
        console.log('Faile to fetch User : ', err);
        return "Unknown";
    }
}

```




