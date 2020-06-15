# JSX 문법 

JSX는 자바스크립트의 확장 문법이며, XML과 비슷하게 생겼다.  
JSX로 작성된 코드는 브라우저에서 실행되기 전, 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.  

```javascript
function App() {
    return (
        <div>
            Hello <b>react</b>
        </div>
    )
}
```

이렇게 작성된 코드는 다음과 같이 변환된다.  

```javascript
function App() {
    return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
}
```

## JSX 문법 

### 1. 감싸인 요소 

컴포넌트에 여러 요소가 있으면 반드시 **부모 요소**로 감싸줘야 한다. 

```javascript 
function App() {
    return (
        <>
            <h1>안녕하세요</h1>
            <h2> <Frament>로 감싸줘도 괜찮습니다! </h2>
        </>
    )
}
```

### 2. 자바스크립트 표현식 

JSX 내부에서 자바스크립트 코드를 사용하려면 `{}` 안에다 작성해주면 된다. 

```javascript
function App() {
    const name = '심은지';
    return (
        <>
            <h1> {name} 입니다 ㅎㅎ </h1>
        </>
    )
}
```

### 3. if문 대신 삼항 연산자 

JSX 내부에서 if문을 사용할 수 없어서 if문을 사용하여 사전에 값을 설정하거나, **삼항 연산자**를 사용해야 한다. 

```javascript
function App() {
    const name = '리액트';
    return (
        <>
            {name === '리액트' ? (
                <h1> 리액트입니다. </h1>
            ) : (
                <h1> 리액트가 아닙니다. <h1>
            )}
        </>
    )
}
```

### 4. 인라인 스타일링 

리액트에서 DOM 요소에 스타일을 적용할 때는 객체 형태로 넣어줘야 한다.  
주의 할 점은 스타일 이름을 **카멜 표기법** 으로 작성해야 한다.  

```javascript
function App() {
    const name = '리액트';
    const style = {
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : 16
    };
    return <div style={style}> {name} </div>;
}
```

### 5. className

HTML에서 css 클래스를 사용할 때는 `className` 으로 설정해 줘야한다. 

```css
.react {
    background : aqua;
    color : black;
    font-size : 48px;
    font-weight : 'bold',
    padding : 16px;
}
```

```javascript
function App() {
    const name = '리액트';
    return <div className="react"> {name} </div>;
}
```

