 # EJS 템플릿 엔진 

 EJS는 똑같은 HTML에서 <% %>를 사용하여 서버의 데이터를 사용하거나 코드를 실행 할 수 있다.

 ### VIEW로 데이터 넘기기 

 ```
 module.exports = function(app, fs) {
     app.get('/', function(req, res) {
         res.render('index', {
             title : 'HOMEPAGE',
             content : 'content 내용'
         })
     });
 }
 ```
 Router 안에서 JSON 데이터를 render 메소드의 두번째 인자로 전달함으로 페이지에서 데이터를 사용할 수 있게한다. 

 ### VIEW에서 데이터 접근 
 
 ```
 <html>
    <head>
        <title> <%= title %> </title>
    </head>
    <body>
        <h1> 
            <%= content %>
        </h1>
    </body>
 </html>
 ```