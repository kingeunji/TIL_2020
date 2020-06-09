# 믹스인 (mixin)

### Mixin?

`믹스인(Mixins)`은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용 할 수 있는 방법이다. 

### Mixin 사용 예시 

웹 애플리케이션에서 자주 쓰이는 모달창을 믹스인에 정의 해보자. 

```
# mixin/modal.js

export const ModalMixin = {
  computed: {
    settings: () => (
      closable: false
    })
  },

  methods: {
    show() {
      this.$refs.$modal.show()
    },

    hide() {
      this.$refs.$modal.hide()
    }
  }
}

```

```
# components/LoginForm.vue

<button @click="show">show</button>

<button @click="hide">hide</button>
...

<script>
import { ModalMixin } from './mixin/modal.js'

export default {
    mixins: [ ModalMixin ]
    ... 
}
</script>
```
