# JWT 자바 가이드 

### JWT(JSON Web Token) 

#### 토큰 인증이란?
애플리케이션이 사용자가 누구인지 확인하는 과정을 **인증(authentication)** 이라고 한다. 
기존엔 세션을 이용해서 로그인 정보를 가지고 있었다면, 사용자가 확인 가능한 증명서를 제시했을 때 토큰을 생성해서 인증한다.   

#### JWT의 구조 
JWT는 **헤더 Header**, **페이로드 payload**, **시그니처 signature** 세 부분으로 나눠져 있다.  

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9    # Header
.
eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwibmFtZSI6IlJvYmVydCBUb2tlbiBNYW4iLCJzY29wZSI6InNlbGYgZ3JvdXBzL2FkbWlucyIsImV4cCI6IjEzMDA4MTkzODAifQ    # payload
.
1pVOLQduFWW3muii1LExVBt2TK1-MdRI4QjhKryaDwc   # signature hash
```
헤더에는 토큰에 대한 설명이 담겨있다.  
페이로드 부분을 디코드하면 JWS의 권한 (claims)을 담고있는 JSON 객체를 확인할 수 있다. 

```
{
  "sub": "users/TzMUocMF4p",
  "name": "Robert Token Man",
  "scope": "self groups/admins",
  "exp": "1300819380"
}
```



