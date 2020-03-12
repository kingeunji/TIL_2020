# ES6 이후의 문법

ES6(ECMAScript 표준의 6번째 에디션)에 새로운 기능들이 엄청 추가되었다!  
모르고 쓰는 내용이 많아서 정리를 해보려 한다.  

### 1. 변수 선언 (let, const)

ES5에서 변수를 선언할 수 있는 키워드는 `var` 였다.  
세 키워드에 차이점을 알아보자. 

**값의 변경이 필요한 경우 let**을 사용하고 **변화가 필요없는 상수로 사용 될 경우 const**로 선언한다. 

- var는 변수 선언할 때 사용한 이름으로 다시 선언할 수 있다. 

```
var temp = "v_v";
console.log(temp); // v_v
var temp = "o_o";
console.log(temp); // o_o
```

- let, const는 사용한 이름으로 다시 선언할 수 없다.   
또, const는 변수를 선언할 때 초기값이 없으면 에러가 발생한다. 
```
let temp = "은지";
let temp = "짱";
// Uncaught SyntaxError: Identifier 'temp' has already been declared

const temp2;
// Uncaught SyntaxError: Missing initializer in const declaration
```

### 2. 기본 매개 변수 (Default Parameter)
함수 매개변수에 기본값을 지정해 줄 수 있다.
```
function test(num = 10, id = 80, name = '은지') {
...
}
```

### 3. 템플릿 리터럴 (Template literal)
문자열 안에 `${NAME}` 이라는 구문을 사용해서 간단히 처리할 수 있다. 
```
const first_name = "shim";
const last_name = "eunji";

console.log(`제 이름은 ${first_name} ${last_name} 입니다`);
```

### 4. 비구조화 할당 (Destructuring Assignment)
객체안에 필드를 손쉽게 꺼내 변수로 대입할 수 있는 문법이다. 

#### ES5
```
var data = {
    name : "eunji",
    age : 22
}

var name = data.name;
var age = data.age;

console.log(name, age);
```

#### ES6
```
const data = {
    name : "eunji",
    age : 22
}

let {name, age} = data;

// 배열에서의 사용
const languages = ["Javascript", "Python", "Java", "C#"];
const [first, second, third] = languages;

console.log(first, second, third);
//Javascript Python Java
```
필요한 필드만 추출하여 별도의 변수로 대입하는 방식이다. 

### 5. 향상된 객체 리터럴 (Enhanced Object Literals)
#### ES5
```
var name = "eunji"'
var age = 22

var data = {
    name : name.
    age : age,
    getName : function() {
        return this.name
    }
}
```

#### ES6
```
const name = "eunji"'
const age = 22;

const data = {
    name,
    age, 
    getName() {
        return this.name
    }
};
```
변수명으로 속성 이름을 지정할 수 있다. `name : name` 대신 `name`   
`function` 키워드가 없어져 간결하게 쓸 수 있다. 

### 6. 화살표 함수 (Arrow Functions)
함수를 선언할 때 `function` 키워드를 사용했다. ES6부터는 화살표 함수 문법을 지원한다. 
화살표 함수는 항상 익명 함수이며, `this`의 값을 현재 문맥에 바인딩 시킨다. 

```
const user = () => {
    console.log("user Function");
}
user();

const sum = (a,b) => (a+b)
```
파라미터를 1개만 받을 때는 괄호를 생략할 수 있고,  
간단한 표현식을 반환할 때는 리턴을 생략할 수 있다. 

### 7. 전개 연산자 (spread operator)
점 새개 `(...)` 로 이루어져 있는 연산자다. 

#### 배열의 내용 조합 
기존 `concat` 메서드를 사용한 코드를 훨씬 간결하게 작성할 수 있다. 
```
const a = [1,2,3];
const b = [4,5];

const c = [...a, ...b];

console.log(c); // [1,2,3,4,5]
```

### 8. 클래스 (Classes) 
기존 프로토타입(prototype) 기반보다 명확하게 클래스를 정의할 수 있다. 

```
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get name() {
        return this.name
    }

    set name(name) {
        this.name = name
    }

    print() {
        console.log(`Name : ${this.name}`)
    }
}

let animal = new Animal("토끼", 5);
animal.print();
animal.setName("줄무늬가 있는 토끼");
```