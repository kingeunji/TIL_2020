# NodeJS에서 MongoDB 사용하기 

### MacOS에서 Mongo DB 설치 

> 참고 문서 : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

Homebrew 를 통해 설치

```
brew tap mongodb/brew
brew install mongodb-community@4.2
```

MongoDB 실행 / 중지

```
brew services start mongodb-community@4.2

brew services stop mongodb-community@4.2
```

### Database 생성
```
use 데이터베이스명

// 현재 사용중인 DB 확인
db

// 데이터베이스 리스트 확인 
show dbs
```

### Database 제거 
```
use db명
db명.dropDatabase();
```





