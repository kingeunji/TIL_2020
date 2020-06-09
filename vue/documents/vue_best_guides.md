
## 번역) 프로개발자들을 위한 12가지 VueJS 모범 사례

> <https://learnvue.co/2020/01/12-vuejs-best-practices-for-pro-developers/> 글을 번역한 내용입니다.  

VueJS가 점점 더 널리 보급됨에 따라 몇 가지 모범 사례가 나타나고 표준이 되고있다.  
이 모범 사례가 더 나은 VueJS 코드 작성에 도움이되기를 바란다.

### 1. v-for 안에 :key 항상 사용하기

v-for 디렉티브와 함께 key 속성을 사용하면 Vue 애플리케이션이 DOM 조작을 정확히 처리하는 방법을 더 잘 예측할 수 있다.

```
<!-- BAD -->
<div v-for='product in products'>  </div>

<!-- GOOD! -->
<div v-for='product in products' :key='product.id'>
```

### 2. 이벤트에 kebab-case 사용하기

이벤트를 발생하는 경우 항상 **케밥 케이스**를 사용하는 것이 가장 좋다.  
이는 부모 컴포넌트에서 해당 이벤트를 사용하는 데 사용하는 구문과 동일하기 때문이다.

따라서 컴포넌트의 일관성을 유지하고 코드를 더 읽기 쉽게하기 위해 두 곳에서 **케밥 케이스**를 사용해라.

```
# PopupWindow.vue
this.$emit('close-window')
```

```
# ParentComponent.vue
<popup-window @close-window='handleEvent()' />
```

### 3. props 선언은 camelCase ! 템플릿 안에는 kebab-case !

이 사례는 단순히 각 언어의 규칙을 따른다.  
JavaScript 에서는 **카멜 케이스**가 표준이고, html 에서는 **케밥 케이스** 가 표준이기 때문에 상황에 맞게 쓰자.

```
# BAD!

<PopupWindow titleText='hello world' />

props: {
  'title-text': String
}
```

```
# GOOD!

<PopupWindow title-text='hello world' />

props: {
  titleText: String
}
```

### 4. Data 는 항상 함수 반환하기

컴포넌트 데이터를 선언할 때, 데이터 옵션은 **항상 함수를 리턴해야 한다**.  
그렇지 않은 경우, 객체를 반환해 해당 데이터가 구성 요소의 모든 인스턴스에서 공유된다.

```
# BAD!
data: {
  name: 'My Window',
  articles: []
}
```

대부분 목표는 재사용 가능한 컴포넌트를 작성하는 것이므로 각 개체가 고유 한 개체를 반환하기를 원한다. 함수 안에 데이터 객체를 반환하여 이를 수행한다.

### 5. v-for 요소에 v-if 사용하지 않기

배열의 요소를 필터링 하고 싶을 때 v-if 와 v-for 를 같이 사용하고 싶을 것이다.

```
# BAD!
<div v-for='product in products' v-if='product.price < 500'>
```

위 코드에 대한 문제는 VueJS 가 v-if 보다 v-for 의 우선 순위를 정한다는 것이다. 따라서 후드 아래에서 모든 요소를 ​​반복하고 v-if 조건부를 확인한다.

```
# GOOD!
<div v-for='product in cheapProducts'>


computed: {
  cheapProducts: () => {
    return this.products.filter(function (product) {
      return product.price < 100
    })
  }
}
```

위 코드가 좋은 이유는

- 모든 항목을 반복하지 않기 때문에 렌더링이 훨씬 효율적이다.
- 필터링 된 목록은 종속성이 변경 될 때만 다시 평가된다.
- 컴포넌트 로직을 템플릿과 분리하여 컴포넌트를 더 읽기 쉽게 만든다.

### 6. 좋은 선언(definitions)으로 props 를 확인하기

이것은 따라야 할 가장 중요한 모범 사례다.

왜 중요할까?

대규모 프로젝트를 설계할 때 props에 사용한 정확한 포맷, 유형 및 기타 규칙을 잊어 버리기 쉽다.  
규모가 큰 개발 팀이라면 props를 사용하는 방법을 명확하게 알려주자!

```
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

### 7. 컴포넌트는 PascalCase 또는 kebab-case 를 사용하기

컴포넌트에 대한 일반적인 명명 규칙은 PascalCase 또는 케밥 케이스를 사용하는 것이다.  
어떤 프로젝트를 선택하든 항상 일관성을 유지하는 것이 가장 중요하다.

```
# BAD

mycomponent.vue
myComponent.vue
Mycomponent.vue

# GOOD

MyComponent.vue
```

### 8. 기본(Base) 컴포넌트에 접두사를 붙이기

Vue 스타일 가이드에 따르면 기본 컴포넌트는 다음과 같다.

- HTML elements
- Additional base components
- 3rd party UI components

이러한 컴포넌트의 이름을 지정하는 가장 좋은 방법은 `Base`, `V`, `App` 을 사용하는 것이다.  
다시 한번, 프로젝트 전체에서 일관성을 유지하는 것이 가장 중요하다.

```
BaseButton.vue
BaseIcon.vue
BaseHeading.vue
```

이 명명 규칙의 목적은 기본 컴포넌트를 파일 시스템에 함께 유지하는 것이다.  
또한 웹팩 import 기능을 사용하여 명명 규칙 패턴과 일치하는 컴포넌트를 검색하고,  
Vue 프로젝트에서 모든 컴포넌트를 전역으로 가져올 수 있게 한다.

### 9. 단일 컴포넌트에 "The" 를 붙이기

기본 컴포넌트와 마찬가지로 단일 컴포넌트 (페이지 당 한 번 사용되며 props을 허용하지 않는 컴포넌트)에도 자체 명명 규칙이 있다.

이러한 컴포넌트는 앱에 따라 다르며 일반적으로 헤더, 사이드바 또는 푸터과 같은 것이다.

```
TheHeader.vue
TheFooter.vue
TheSidebar.vue
ThePopup.vue
```

### 10. 디렉티브 수식어의 일관성을 유지하기

- `@` is short for `v-on:`
- `:` is short for `v-bind`
- `#` is short for `v-slot`

### 11. created 시 watch 메소드를 호출하지 않기

컴포넌트가 초기화 되자마자 watch Hook을 사용하고 싶을 때 아래처럼 작성한다.

```
# BAD!
created: () {
  this.handleChange()
},
methods: {
  handleChange() {
    // stuff happens
  }
},
watch () {
  property() {
    this.handleChange()
  }
}
```

위와 같은 방법보다, watch 를 약간 재구성하고 두 가지 속성을 선언해주자.

1. **handler(newVal, oldVal)** – 이것은 watcha 메소드 자체
2. **immediate: true** - 인스턴스가 생성 될 때 핸들러 실행

```
# GOOD!
methods: {
  handleChange() {
    // stuff happens
  }
},
watch () {
  property {
    immediate: true
    handler() {
      this.handleChange()
    }
  }
}
```

### 12. 템플릿 표현식에는 기본 자바 스크립트 표현식만 사용하기

```
# BAD!
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}
```

기본적으로 템플릿의 모든 내용이 표시되는 내용에 대해 **직관적**이기를 원한다.  
이를 유지하려면 복잡한 표현식을 적절히 명명 된 컴포넌트 옵션으로 해야한다.

복잡한 표현을 분리하면 얻을 수 있는 또 다른 이점은 **재사용** 할 수 있다는 것이다.

```
# GOOD!
{{ normalizedFullName }}


// The complex expression has been moved to a computed property
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

