// HTTP 모듈 
var http = require('http');

// 웹 서버 생성
http.createServer(function(request, response) {
    /*
     * HTTP 헤더 전송
     * HTTP Status : 200 
     * Content-Type : text/plain
     */
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    /*
     * Response Body 설정
     */
    response.end("Hello Server");
}).listen(8080, function() {
    console.log("Server running .... ")
});