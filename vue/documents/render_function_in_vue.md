# Render Functions & JSX

> https://kr.vuejs.org/v2/guide/render-function.html   
> 공식 문서를 보고 정리한 내용입니다. 

### 1. 시작하기 

Vue는 html 템플릿을 작성하는 것을 권장한다. 하지만 JavaScript가 완전히 필요한 상황이 있다.   
그럴 때, 템플릿에 더 가까운 컴파일러인 **render 함수**를 사용하면 실용적으로 코드를 작성할 수 있다. 

**render** 함수를 실용적으로 사용할 수 있는 예를 보자.  

```
<anchored-heading :level="1">Hello world!</anchored-heading>
```
`level prop`을 기반으로 방금 제목을 생성하는 컴포넌트를 이용하면 다음과 같이 빠르게 만들 수 있다. 

```
<script type="text/x-template" id="anchored-heading-template">
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 3">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 4">
    <slot></slot>
  </h4>
  <h5 v-else-if="level === 5">
    <slot></slot>
  </h5>
  <h6 v-else-if="level === 6">
    <slot></slot>
  </h6>
</script>

... 

Vue.component('anchored-heading', {
  template: '#anchored-heading-template',
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

위 템플릿은 `<slot>`을 중복으로 가지고 있고, 엘리먼트를 추가로 생성할 때도 똑같이 해야한다.  
다시 `render` 함수로 구현해보자.  

```
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 태그 이름
      this.$slots.default // 자식의 배열
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

코드가 훨씬 더 깔끔해졌다!   
slot 속성이 없을 때는 $slots.default 에있는 컴포넌트 인스턴스에 저장된다. 

### 2. 
