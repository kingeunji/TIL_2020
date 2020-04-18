# CSS 레이아웃 기초

페이지를 구성하는 CSS 속성을 알아보자.

### display 속성

`display` 속성은 페이지의 레이아웃을 결정하는 속성이다. 모든 요소들은 한가지 `display` 속성값을 가지고 있으며 해당 요소의 기본 동작 방식을 지정하는데 사용된다. 

### display 속성 종류 

1. `block` : 블록 엘리먼트는 기본적으로 하나의 줄을 차지하고 가능한 최대의 가로 넓이를 가진다.  
대표적인 태그는 `div`, `p`, `form`, `header`, `section` 등이 있다. 

2. `inline` : 인라인 엘리먼트는 특정 텍스트를 감싸는 형태의 디스플레이 속성이다.   
대표적인 태그는 `span`, `a` 등이 있다. 

3. `inline-block` : 인라인 블록 엘리먼트는 줄 바꿈 없이 다른 인라인 엘리먼트와 나란히 배치되는 디스플레이 속성이다.   
대표적인 태그는 `button` 이 있다. 

4. `flex` : 화면의 비율을 기준으로 레이아웃을 구성할 수 있는 최신 레이아웃 속성이다. 부모 요소에 `display: flex` 를 적용하면 모든 직계 자식이 플레스 항목이 된다. 

5. `none` : 논 엘리먼트는 화면에 표시되지 않는다. 해당 요소에 대한 공간을 차지하지 않는다. 

    `flexbox` 예제 
    ```
    <style>
    .wrapper {
        display: flex;
    }
    </style>

    <!-- html -->
    <div class="wrapper">
        <div class="box1"> 하나 </div>
        <div class="box2"> 둘 </div>
        <div class="box3"> 셋 </div>
    </div>
    ```

    자식 항목에 대한 flex 속성에 대해 속성값을 부가할 수 있다.  
    항목에 여유 공간에 맞추거나 수축할 수 있다. 

    ```
    <style>
        .wrapper {
            display : flex;
        }

        .wrapper > div {
            flex : 1;
        }

        <!-- html -->
        <div class="wrapper">
            <div class="box1"> 하나 </div>
            <div class="box2"> 둘 </div>
            <div class="box3"> 셋 </div>
        </div>
    </style>
    ```

6. `grid` : 그리드 엘리먼트는 이차원 레이아웃을 위한 속성이다. 행과 열에 포함된 사물들을 배열한다. 

    ```
    <style>
    .wrapper {
        display : grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100px 100px;
        grid-gap: 10px;
    }
    </style>

    <div class="wrapper">
        <div class="box1">하나</div>
        <div class="box2">둘</div>
        <div class="box3">셋</div>
        <div class="box4">넷</div>
        <div class="box5">다섯</div>
        <div class="box6">여섯</div>
    </div>
    ```

    [그리드 레이아웃에 대한 설명](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

---
### 수평 중앙 정렬 

특정 엘리먼트를 가로 방향으로 중앙에 놓는 방법 

```
<style>
    .wrapper {
        max-width: 600px;
        margin: 0 auto;
    }
</style>

<div class="wrapper">
</div>
```
---

### float 속성

요소를 고정시키지 않고 움직이면 해당 요소와 해당 요소를 뒤 따르는 요소의 동작이 변경된다.  
`float` 속성은 텍스트 영역에 인라인 이미지를 표시할 수 있게 고안된 속성으로 특정 요소의 위치를 지정해 준다. 

### float 속성 종류 

1. `left` : 요소를 왼쪽에 띄움.
2. `right` : 요소를 오른쪽에 띄움.
3. `none` : 여부를 지정하지 않음. (default)
4. `inherit` : 요소의 부모 요소에서 상속된다고 지정한다. 

```
<style>
.box {
    float: left;
    width: 150px;
    height: 150px;
    margin-right: 30px;
}
</style>

<div class="box"> 
    부동
</div>

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci.  </p>

```

첫 번째 엘리먼트에 float 속성을 적용했을 때, 후속 엘리먼트에 float 영향을 주지 않으려면, `clear` 속성을 사용해야 한다. 

### position 속성

`position` 속성은 해당 엘리먼트를 페이지의 특정 항목의 위치를 관리하고 미세 조정하는 것에 관한 것이다. 