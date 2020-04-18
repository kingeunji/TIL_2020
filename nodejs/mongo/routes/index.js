// routes/index.js

module.exports = function(app) {

    // GET /books
    app.get('/api/books', function(req, res) {
        res.end();
    });

    // GET /book/:book_id
    app.get('/api/book/:book_id', function(req, res) {
        res.end();
    });

    // GET /books/author/:author 
    app.get('/api/books/author/:author', function(req, res) {
        res.end();
    });

    // POST /book
    app.post('/api/book', function(req, res) {
        res.end();
    });

    // PUT /book/:book_id
    app.put('/api/book/:book_id', function(req, res) {
        res.end();
    });

    // DELETE /book/:book_id
    app.delete('/api/book/:book_id', function(req, res) {
        res.end();
    });

}