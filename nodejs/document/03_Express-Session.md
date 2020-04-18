# express-session 

Express 프레임워크에서 세션을 관리하기 위해 필요한 미들웨어다. 

```
var session = require('express-session');

app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}))
```
- `secret` : 쿠키를 임의로 변조하는것을 방지하기 위한 값 입니다. 이 값을 통하여 세션을 암호화 하여 저장합니다.
- `resave` : 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다. express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다.
- `saveUninitialized` : 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장합니다.

### 세션 초기 설정
```
app.get('/', function(req, res) {
    session = req.session;
    session.username = "username";
    // 세션 변수 설정
});
```

### 세션 제거
```
req.session.destroy(function(err){
   // cannot access session here
});
```

