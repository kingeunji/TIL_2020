var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var fs = require("fs");

// html 위치 정의
app.set('views', __dirname + '/views');
// html 렌더링 시 EJS 엔진을 사용하도록 설정해준다.
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
    console.log("Express Server has started on port 3000");
})

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}))

var router = require('./router/main')(app, fs);