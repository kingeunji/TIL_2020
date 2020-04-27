// 이벤트를 대기하는 함수들이 옵저버 역할을 하다가 
// 이벤트가 실행되면 이벤트를 처리하는 함수가 실행된다. 

var events = require('events');
var eventEmitter = new events.EventEmitter();

// EventHandler 함수생성
var connectHandler = function connected() {
    console.log("Connection Successful");

    // data_recevied 이벤트 발생
    eventEmitter.emit("data_recevied");
}

// connection event와 EventHandler를 연동
eventEmitter.on('connection', connectHandler);

// data_received 이벤트와 익명 함수와 연동
// 함수를 변수안에 담는 대신에, .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('data_recevied', function() {
    console.log("Data Received");
});

// connection 이벤트 발생시키기
eventEmitter.emit('connection');

console.log("Program has ended");