# 클래스형 컴포넌트 

컴포넌트를 선언하는 방식은 두 가지가 있다. 하나는 **함수형 컴포넌트**이고, 또 다른 하나는 **클래스 컴포넌트**이다.  

```javascript
import React, { Component } from 'react'

class App extends Component {
    render() {
        const name = 'react'
        return <div className="react"> {name} </div>
    }
}

export default App
```

기존에 작성한 컴포넌트를 클래스형 컴포넌트로 작성한 코드다.  
클래스형 컴포넌트의 경우, `state` 기능 및 라이프사이클 기능을 사용할 수 있고, 임의 메소드를 정의 할 수 있다.  

또, 클래스형 컴포넌트에선 `render` 함수가 꼭 있어야 하고, 그 안에 JSX가 있어야 한다.  

### ES6의 클래스 문법 
```javascript
class Dogs {
    // 생성자
    constructor(name) {
        this.name = name
    }
    // 메소드 
    say() {
        console.log(this.name + "멍!멍!")
    }
}
```

