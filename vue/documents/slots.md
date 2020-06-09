# 재사용 컴포넌트, slots 

> https://kr.vuejs.org/v2/guide/components-slots.html  
> 공식 문서를 보고 정리한 내용입니다. 

### 슬롯(slots) 이란? 

**특정 컴포넌트에 등록된 하위 컴포넌트의 마크업을 확장하거나 재정의할 수 있는 기능**이다.  
아래처럼 컴포넌트를 작성할 수 있다.

```
<navigation-link url="/profile">
  Your Profile
</navigation-link>
```

```
# navigation-link 컴포넌트 

<a v-bind:href="url" class="nav-link">
  <slot></slot>
</a>
``` 

위 컴포넌트를 렌더링하면 `<slot> </slot>` 가 Your Profile 로 교체된다.  
슬롯에는 HTML 같은 템플릿 코드를 포함할 수 있기 때문이다. 

### Compilation Scope

```
<navigation-link url="/profile">
  Clicking here will send you to: {{ url }}
</navigation-link>
```

부모 컴포넌트에서 위의 코드를 실행시키면 url 은 `undefined` 가 출력된다.  
url 은 `<navigation-link>` 로 넘어가지만 `<navigation-link>` 컴포넌트 안에 정의되어 있지 않기 때문이다. 

**부모 템플릿 안에 있는 것들은 부모 컴포넌트의 범위에 컴파일되고 자식 템플릿 안에 있는 것들은 자식 컴포넌트의 범위에 컴파일된다.**

### 기본값 지정 

슬롯에 데이터가 전달되지 않을 경우, 기본 값을 설정하고 싶을 때가 있다.  

```
# submit-button 컴포넌트 

<button type="submit">
  <slot>Submit</slot>
</button>
```

```
<submit-button></submit-button>
<submit-button>save</submit-button>
```

위 코드와 같이 버튼 안에 텍스트가 있어야 할 경우, 기본 값은 `Submit` 이 출력되고,  
다른 값을 출력하고 싶을 땐 전달하면 된다! 

### Named Slots

하나의 컴포넌트에서 여러 개의 슬롯을 사용해야 할 때가 있다.  
이런 경우는 서로 다른 슬롯들을 정의할 때 쓸 수 있는 `name` 속성을 사용해주자!

```
# base-layout 컴포넌트 

<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

```
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

name이 지정되지 않은 `<slot>`에는 암묵적으로 `default` 값이 사용된다.


### Scoped Slots

**스콥드 슬롯(Scoped slot)** 은 컴포넌트 데이터의 재사용성을 높여주는 기능이다.  
스콥드 슬롯은 하위 컴포넌트의 값을 상위 컴포넌트에서 접근하여 사용할 수 있다.

```
# current-user 컴포넌트 

<span>
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>
```

```
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

`<slot>` 요소에 연결된 속성을 **슬롯 속성(slot props)** 이라 한다.   
이제 부모 컴포넌트에서 v-slot에 연결한 슬롯 속성을 쓸 수 있다.

부모 컴포넌트에서 사용할 때는, 하위 컴포넌트에서 올려준 값을 받기 위한 임의의 변수(slotProps)를 선언해 사용한다. 

