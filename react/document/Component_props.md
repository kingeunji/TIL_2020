# props 

`props` 는 컴포넌트 속성을 설정할 때 사용하는 요소이다.  
`props` 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.  

### JSX 내부에서 `props` 렌더링 

```javascript 
import React from 'react'

const MyComponent = props => {
    return <div> 안녕하세요, 제 이름은 {props.name} 입니다. </div>
}

export default MyComponent
```
`props` 값을 함수의 파라미터로 받아와서 사용할 수 있다. 


### `props` 값 지정하기 

```javascript
import React from 'react'
import MyComponent from './MyComponent'

const App = () => {
    return <MyComponent name="React" />
}

export default App
```

### `props` 기본값 설정 `defaultProps` 

```javascript 
MyComponent.defaultProps = {
    name : 'default'
}
```

### 태그 사이의 내용을 보여주는 `children`

`children`은  컴포넌트 태그 사이의 내용을 보여주는 props 다. 

```javascript
import React from 'react'
import MyComponent from './MyComponent'

const App = () => {
    return <MyComponent> 리액트 </MyComponent>
}

export default App
```

```javascript
import React from 'react'

const MyComponent = props => {
    return (
        <div>
            안녕하세요, 제 이름은 {props.name} 입니다. 
            children 값은 {props.children}
        </div>
    )
}

MyComponent.defaultProps = {
    name : 'default'
}

export default MyComponent
```

### 비구조화 할당 문법을 통해 `props` 내부 값 추출 

`props.name` `props.children` 같이 키워드를 앞에 붙여주는 작업을 간편하게 해주기 위해 ES6의 **비구조화 할당** 을 사용해준다.  

```javascript
const MyComponent = props => {
    const {name, children} = props
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다. 
            children 값은 {children}
        </div>
    )
}
```

### `propTypes` 를 통한 props 검증

컴포넌트의 필수 `props`를 지정하거나, `props`의 타입을 지정할 때는 `propTypes`를 사용한다.  

```javascript
MyComponent.propTypes = {
    name : PropTypes.string
}
```

이렇게 설정해주면 name 값은 무조건 **문자열** 형태로 전달해줘야 된다.  

`isRequired` 를 사용하여 필수값 지정 

```javascript
MyComponent.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
}
```

### 클래스형 컴포넌트에서 `props` 사용하기 

클래스형 컴포넌트에서 props를 사용할 때는 `render`함수에서 `this.props`를 조회하면 된다.

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component {
    render() {
        const { name, age, children } = this.props 
        return (
            <div>
                내 이름은 {name} 입니다. 
                제 나이는 {age}살.. 
                children 값은 {children}
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name : '기본 이름'
}

MyComponent.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
}

export default MyComponent
```